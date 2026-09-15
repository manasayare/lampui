/**
 * Wraps the components in React.forwardRef so consumers can take a ref.
 *
 * Without it, `<Button ref={r}>` silently does nothing, which rules the
 * components out of every pattern that needs the DOM node: a Radix or Floating
 * UI trigger, focus after a mutation, scroll-into-view, an IntersectionObserver,
 * a measurement. It is the biggest remaining gap between "React components" and
 * "React components other libraries can compose".
 *
 * forwardRef rather than React 19's ref-as-a-prop, because the package's peer
 * range starts at React 17 and forwardRef is the form that works across all of
 * them.
 *
 * HOW IT EDITS
 * The AST is used to find positions, and the edits are spliced into the original
 * text — the file is never regenerated. Regenerating reformats every component,
 * which matters here because these sources are read by designers and carry a
 * prose comment block explaining each decision. Splices are applied back to
 * front so earlier offsets stay valid.
 *
 * WHAT IS CONVERTED
 * An exported PascalCase function whose last return is a JSX element. The ref
 * goes on that root element, ahead of the {...rest} spread so a ref arriving
 * through rest cannot silently win.
 *
 * WHAT IS SKIPPED, and why it must be skipped rather than forced:
 *   - the root already carries the component's own ref (SnapField, CanvasSurface).
 *     Two refs on one node needs a merge — a behavioural change, not a
 *     mechanical one.
 *   - the export is not a component (STATUS, AGENT_SIZES, MatchProcess, BuildGenie).
 *   - the last return is a fragment or a bare value, so there is no single host
 *     element for a ref to point at.
 *
 * Idempotent: a component already wrapped is not matched again.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import babel from '@babel/core';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const COMPONENTS = join(ROOT, 'project/components');

const walk = (dir, out = []) => {
  for (const e of readdirSync(dir)) {
    const f = join(dir, e);
    if (statSync(f).isDirectory()) walk(f, out);
    else out.push(f);
  }
  return out;
};

const isPascal = (s) => /^[A-Z][A-Za-z0-9]*$/.test(s);
const files = walk(COMPONENTS).filter((f) => f.endsWith('.jsx')).sort();

const converted = [];
const skipped = [];

/** The DOM interface a component's props extend — what its ref points at. */
function elementTypeOf(declSrc, name) {
  if (!declSrc) return 'HTMLElement';
  const at = declSrc.search(new RegExp('interface\\s+' + name + 'Props\\b'));
  if (at === -1) return 'HTMLElement';
  const head = declSrc.slice(at, declSrc.indexOf('{', at));
  const m = head.match(/React\.\w*Attributes<\s*(\w+)\s*>/);
  return m ? m[1] : 'HTMLElement';
}

for (const file of files) {
  const src = readFileSync(file, 'utf8');
  const rel = relative(COMPONENTS, file).split('\\').join('/');
  const declFile = file.replace(/\.jsx$/, '.d.ts');
  const declSrc = existsSync(declFile) ? readFileSync(declFile, 'utf8') : null;

  const edits = [];
  const here = [];

  babel.transformSync(src, {
    filename: file,
    babelrc: false,
    configFile: false,
    parserOpts: { plugins: ['jsx'] },
    plugins: [
      () => ({
        visitor: {
          ExportNamedDeclaration(path) {
            const decl = path.node.declaration;
            if (!decl || decl.type !== 'FunctionDeclaration' || !decl.id) return;
            const name = decl.id.name;
            if (!isPascal(name)) return;

            /* Descendant returns only — traverse() does not visit the node it is
               called on, so the component's own function is never skipped here,
               while any nested function is. */
            let root = null;
            let sawReturn = false;
            path.get('declaration').traverse({
              Function(inner) { inner.skip(); },
              ReturnStatement(r) {
                sawReturn = true;
                if (r.node.argument && r.node.argument.type === 'JSXElement') root = r.node.argument;
              },
            });

            if (!root) {
              skipped.push({
                name,
                file: rel,
                why: sawReturn ? 'returns a fragment or a value, not one host element' : 'not a component',
              });
              return;
            }
            if (root.openingElement.attributes.some((a) => a.type === 'JSXAttribute' && a.name.name === 'ref')) {
              skipped.push({ name, file: rel, why: 'root holds its own ref — needs a manual merge' });
              return;
            }

            /* 1. export function Name  ->  export const Name = React.forwardRef(function Name */
            edits.push({
              start: path.node.start,
              end: decl.id.end,
              /* Both calls carry @__PURE__, and both need it: without an
                 annotation a bundler must assume a top-level call does
                 something, keeps the binding, and the package stops
                 tree-shaking entirely — an app importing one Button would ship
                 all 187 components. Annotating only the outer call is not
                 enough; the inner forwardRef is then the side effect. */
              text: 'export const ' + name
                + ' = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ' + name,
            });

            /* 2. a second parameter for the ref */
            if (decl.params.length) {
              edits.push({ start: decl.params[decl.params.length - 1].end, end: decl.params[decl.params.length - 1].end, text: ', ref' });
            } else {
              const open = src.indexOf('(', decl.id.end);
              edits.push({ start: open + 1, end: open + 1, text: 'ref' });
            }

            /* 3. ref on the root element, before any spread */
            edits.push({
              start: root.openingElement.name.end,
              end: root.openingElement.name.end,
              text: ' ref={ref}',
            });

            /* 4. close both calls, naming the component for devtools.
                  displayName rides inside the Object.assign rather than as a
                  `X.displayName = 'X'` statement, because a top-level
                  assignment to an exported binding is a side effect a bundler
                  cannot drop. It has to be set explicitly: esbuild renames the
                  inner function to `Button2` to avoid colliding with the const,
                  so devtools would otherwise read "Button2". */
            edits.push({
              start: decl.body.end,
              end: decl.body.end,
              text: "), { displayName: '" + name + "' });",
            });

            here.push({ name, element: elementTypeOf(declSrc, name) });
          },
        },
      }),
    ],
  });

  if (!edits.length) continue;

  let out = src;
  for (const e of edits.sort((a, b) => b.start - a.start)) {
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }
  writeFileSync(file, out);

  /* The declarations follow: a forwardRef component is a value, not a function,
     and its type has to say so or `ref` is rejected at the call site. */
  if (declSrc) {
    let d = declSrc;
    for (const { name, element } of here) {
      const re = new RegExp(
        'export declare function ' + name + '\\(props: ([^)]+)\\): JSX\\.Element;',
      );
      const m = d.match(re);
      if (!m) continue;
      d = d.replace(
        re,
        'export declare const ' + name
        + ': React.ForwardRefExoticComponent<' + m[1] + ' & React.RefAttributes<' + element + '>>;',
      );
    }
    if (d !== declSrc) writeFileSync(declFile, d);
  }

  for (const h of here) converted.push({ ...h, file: rel });
}

writeFileSync(
  join(COMPONENTS, '.forwardref.json'),
  JSON.stringify({ converted, skipped }, null, 2) + '\n',
);

console.log('forwardRef  ' + converted.length + ' converted, ' + skipped.length + ' skipped');
const byReason = {};
for (const s of skipped) (byReason[s.why] = byReason[s.why] || []).push(s.name);
for (const why of Object.keys(byReason)) {
  console.log('  ' + byReason[why].length + ' skipped — ' + why);
  console.log('    ' + byReason[why].join(', '));
}
