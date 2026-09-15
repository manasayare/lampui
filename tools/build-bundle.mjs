/**
 * Regenerates project/_ds_bundle.js and project/_ds_manifest.json.
 *
 * The bundle is a generated artifact that the Design System cards, the UI kits and
 * the templates all <script src> directly. Without this script it was frozen: adding
 * a component put its source on disk but left every card rendering `undefined`.
 *
 * Output format is byte-compatible with the bundle shipped in the handoff:
 *   /* @ds-bundle: {json} *\/
 *   (() => {
 *     const __ds_ns = (window.<Namespace> = window.<Namespace> || {});
 *     const __ds_scope = {};
 *     (__ds_ns.__errors = __ds_ns.__errors || []);
 *     // <path>
 *     try { (() => { <transformed source> Object.assign(__ds_scope, { ... }); })(); }
 *     catch (e) { __ds_ns.__errors.push({ path, error }); }
 *     ...
 *     __ds_ns.<Name> = __ds_scope.<Name>;
 *   })();
 *
 * Rules the Claude Design compiler applies, reproduced here:
 *  - a component is <Name>.jsx with a sibling <Name>.d.ts (PascalCase stem)
 *  - only capitalized exports are attached to the namespace; lowercase ones stay
 *    reachable to siblings via __ds_scope and are reported as unexposedExports
 *  - `import React from 'react'` is dropped (React is a global in card HTML)
 *  - relative imports are resolved through __ds_scope, so file order matters
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import babel from '@babel/core';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PROJECT = join(ROOT, 'project');
const MANIFEST = join(PROJECT, '_ds_manifest.json');
const BUNDLE = join(PROJECT, '_ds_bundle.js');

/* Namespace is part of the public contract — every card does
   `const { Button } = window.LAMPDesignSystem_980d6d`. Never regenerate it. */
const NAMESPACE = existsSync(MANIFEST)
  ? JSON.parse(readFileSync(MANIFEST, 'utf8')).namespace
  : 'LAMPDesignSystem_' + createHash('sha1').update('lamp').digest('hex').slice(0, 6);

const walk = (dir, out = []) => {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
};

const isPascal = (s) => /^[A-Z][A-Za-z0-9]*$/.test(s);
const posix = (p) => relative(PROJECT, p).split('\\').join('/');

/* ---------------------------------------------------------------- discovery */

const allFiles = walk(PROJECT);

/**
 * Bundled sources: every module under components/.
 *
 * PascalCase .jsx files are components. Lowercase modules (glyphs.js) are
 * inlined too, because a component that imports one would otherwise resolve it
 * to `undefined` at runtime — only their exports are lowercase, so they publish
 * nothing to the namespace and stay reachable to their siblings through the
 * shared scope.
 *
 * A sibling <Name>.d.ts gives a component its props contract and
 * starting-point eligibility — it is NOT what makes it bundle. Modules that
 * export only helpers (CanvasMotion) carry a .d.ts for documentation and
 * publish nothing, because only capitalized exports are published. ui_kits/ is
 * excluded: those files attach to `window` themselves and are loaded by the kit
 * HTML, not through the bundle.
 */
const componentFiles = allFiles
  .filter((f) => /\.(jsx|js)$/.test(f) && posix(f).startsWith('components/'))
  .filter((f) => !/\/index\.(jsx|js)$/.test(posix(f)))
  .sort();

/** UI-kit sources are hashed for change detection but are not bundled — the kits
    load them directly with <script type="text/babel" src="...">. */
const kitFiles = allFiles
  .filter((f) => f.endsWith('.jsx') && posix(f).startsWith('ui_kits/'))
  .sort();

/* ------------------------------------------------------------- transforming */

/** Pass 1: JSX -> React.createElement, imports left intact. */
function toCreateElement(code, filename) {
  return babel.transformSync(code, {
    filename,
    babelrc: false,
    configFile: false,
    presets: [[ '@babel/preset-react', { runtime: 'classic', pure: true } ]],
    compact: false,
  }).code;
}

/**
 * Pass 2: drop every import, and rewrite references to imported bindings so they
 * resolve through the shared scope object. Runs after the JSX transform so that
 * `<Icon />` has already become the plain identifier `Icon`.
 */
function hoistImports() {
  return ({ types: t }) => ({
    visitor: {
      ImportDeclaration(path) {
        const source = path.node.source.value;
        const relativeImport = source.startsWith('.');
        for (const spec of path.node.specifiers) {
          const local = spec.local.name;
          const imported =
            spec.type === 'ImportSpecifier'
              ? spec.imported.name || spec.imported.value
              : spec.type === 'ImportDefaultSpecifier'
                ? 'default'
                : null;
          /* React (and any other bare import) is a global at runtime — leaving the
             identifier alone is exactly right. Only relative imports are rewritten. */
          if (!relativeImport || !imported || imported === 'default') continue;
          const binding = path.scope.getBinding(local);
          if (!binding) continue;
          for (const ref of binding.referencePaths) {
            ref.replaceWith(
              t.memberExpression(t.identifier('__ds_scope'), t.identifier(imported)),
            );
          }
        }
        path.remove();
      },
      ExportNamedDeclaration(path) {
        /* `export function Foo(){}` -> `function Foo(){}`; the scope assignment at
           the end of the block is what publishes it. */
        if (path.node.declaration) path.replaceWith(path.node.declaration);
        else path.remove();
      },
      ExportDefaultDeclaration(path) {
        path.remove();
      },
    },
  });
}

/** Exported names, in source order — the order the original bundle publishes them. */
function exportedNames(code, filename) {
  const names = [];
  babel.transformSync(code, {
    filename,
    babelrc: false,
    configFile: false,
    parserOpts: { plugins: ['jsx'] },
    plugins: [
      () => ({
        visitor: {
          ExportNamedDeclaration(path) {
            const decl = path.node.declaration;
            if (!decl) {
              for (const spec of path.node.specifiers || []) names.push(spec.exported.name);
              return;
            }
            if (decl.type === 'FunctionDeclaration') names.push(decl.id.name);
            if (decl.type === 'VariableDeclaration') {
              for (const d of decl.declarations) if (d.id.type === 'Identifier') names.push(d.id.name);
            }
          },
        },
      }),
    ],
  });
  return names;
}

/** Relative imports, used to order files so a dependency is always defined first. */
function relativeImports(code, filename, from) {
  const deps = new Set();
  babel.transformSync(code, {
    filename,
    babelrc: false,
    configFile: false,
    parserOpts: { plugins: ['jsx'] },
    plugins: [
      () => ({
        visitor: {
          ImportDeclaration(path) {
            const source = path.node.source.value;
            if (source.startsWith('.')) deps.add(posix(resolve(dirname(from), source)));
          },
        },
      }),
    ],
  });
  return [...deps];
}

/* ------------------------------------------------------------------ compile */

const units = componentFiles.map((file) => {
  const code = readFileSync(file, 'utf8');
  const path = posix(file);
  return {
    file,
    path,
    source: code,
    exports: exportedNames(code, file),
    deps: relativeImports(code, file, file),
  };
});

/* Depth-first topological order. A cycle would mean two components reference each
   other at module scope; emit in discovery order and let the try/catch report it. */
const byPath = new Map(units.map((u) => [u.path, u]));
const ordered = [];
const seen = new Set();
const visiting = new Set();
const visit = (unit) => {
  if (!unit || seen.has(unit.path)) return;
  if (visiting.has(unit.path)) return;
  visiting.add(unit.path);
  for (const dep of unit.deps) visit(byPath.get(dep));
  visiting.delete(unit.path);
  seen.add(unit.path);
  ordered.push(unit);
};
units.forEach(visit);

const blocks = [];
const publish = [];
const manifestComponents = [];
const unexposed = [];

for (const unit of ordered) {
  const stage1 = toCreateElement(unit.source, unit.file);
  const stage2 = babel.transformSync(stage1, {
    filename: unit.file,
    babelrc: false,
    configFile: false,
    plugins: [hoistImports()],
    compact: false,
  }).code;

  const assign = unit.exports.length
    ? `\nObject.assign(__ds_scope, { ${unit.exports.join(', ')} });`
    : '';

  blocks.push(
    `// ${unit.path}\ntry { (() => {\n${stage2.trim()}${assign}\n})(); } ` +
      `catch (e) { __ds_ns.__errors.push({ path: ${JSON.stringify(unit.path)}, ` +
      `error: String((e && e.message) || e) }); }`,
  );

  for (const name of unit.exports) {
    if (isPascal(name) || /^[A-Z0-9_]+$/.test(name)) {
      publish.push(`__ds_ns.${name} = __ds_scope.${name};`);
      manifestComponents.push({ name, sourcePath: unit.path });
    } else {
      unexposed.push({ name, sourcePath: unit.path });
    }
  }
}

const sourceHashes = {};
for (const file of [...componentFiles, ...kitFiles].sort((a, b) => posix(a).localeCompare(posix(b)))) {
  sourceHashes[posix(file)] = createHash('sha256')
    .update(readFileSync(file))
    .digest('hex')
    .slice(0, 12);
}

const manifest = {
  namespace: NAMESPACE,
  components: manifestComponents,
  sourceHashes,
  inlinedExternals: [],
  unexposedExports: unexposed.sort((a, b) => a.name.localeCompare(b.name)),
};

const out =
  `/* @ds-bundle: ${JSON.stringify(manifest)} */\n\n` +
  `(() => {\n\n` +
  `const __ds_ns = (window.${NAMESPACE} = window.${NAMESPACE} || {});\n\n` +
  `const __ds_scope = {};\n\n` +
  `(__ds_ns.__errors = __ds_ns.__errors || []);\n\n` +
  blocks.join('\n\n') +
  `\n\n` +
  publish.join('\n\n') +
  `\n\n})();\n`;

writeFileSync(BUNDLE, out);
writeFileSync(MANIFEST, JSON.stringify(manifest));

console.log(
  `_ds_bundle.js  ${ordered.length} files  ${manifestComponents.length} exports` +
    (unexposed.length ? `  (${unexposed.length} unexposed)` : ''),
);
