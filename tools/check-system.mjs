/**
 * Smoke-tests the generated bundle without a browser.
 *
 * Executes project/_ds_bundle.js against a real React, then server-renders every
 * exported component with empty props. A component that throws on `{}` is not
 * necessarily broken — many legitimately require data — so a render failure is
 * reported, not fatal. What IS fatal: a module-level error (__errors), a name in
 * the manifest that never reached the namespace, or a name promised by readme.md
 * that no source defines. Those are the failures that render blank cards.
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import vm from 'node:vm';

const require = createRequire(import.meta.url);
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PROJECT = join(ROOT, 'project');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const manifest = JSON.parse(readFileSync(join(PROJECT, '_ds_manifest.json'), 'utf8'));
const bundle = readFileSync(join(PROJECT, '_ds_bundle.js'), 'utf8');

const window = {};
const sandbox = {
  window,
  React,
  console,
  document: undefined,
  fetch: () => Promise.resolve({ ok: false, text: () => Promise.resolve('') }),
  requestAnimationFrame: () => 0,
  cancelAnimationFrame: () => {},
  setTimeout,
  clearTimeout,
  Math,
  Date,
  JSON,
  Object,
  Array,
  String,
  Number,
  Boolean,
  Map,
  Set,
  Error,
  isNaN,
  parseFloat,
  parseInt,
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(bundle, sandbox, { filename: '_ds_bundle.js' });

const ns = window[manifest.namespace];
const failures = [];
const renderNotes = [];

if (!ns) {
  console.error(`FAIL  bundle did not define window.${manifest.namespace}`);
  process.exit(1);
}

for (const err of ns.__errors || []) {
  failures.push(`module error in ${err.path}: ${err.error}`);
}

for (const { name, sourcePath } of manifest.components) {
  if (ns[name] === undefined) {
    failures.push(`${name} (${sourcePath}) is in the manifest but undefined on the namespace`);
    continue;
  }
  if (typeof ns[name] !== 'function') continue; // STATUS, AGENT_SIZES, … are data
  try {
    ReactDOMServer.renderToStaticMarkup(React.createElement(ns[name], {}));
  } catch (e) {
    renderNotes.push(`${name}: ${String((e && e.message) || e).split('\n')[0]}`);
  }
}

/* readme.md is the contract consumers read. Any component name it prints in
   backticks must actually exist, or the docs are lying. */
const readme = readFileSync(join(PROJECT, 'readme.md'), 'utf8');
const section = readme.split('## 10. Component index')[1]?.split('### Intentional additions')[0] ?? '';
const promised = [...new Set([...section.matchAll(/`([A-Z][A-Za-z_]+)`/g)].map((m) => m[1]))];
const missing = promised.filter((n) => ns[n] === undefined);
for (const name of missing) failures.push(`readme.md §10 promises \`${name}\`, which no source defines`);

/* Every icon a component asks for must exist in assets/icons/. A missing glyph
   renders a placeholder box — visible in review if you look, invisible if you
   don't, and there is no runtime error to catch it. Same for provider marks. */
const assetManifestPath = join(PROJECT, 'assets', 'manifest.json');
if (existsSync(assetManifestPath)) {
  const assets = JSON.parse(readFileSync(assetManifestPath, 'utf8'));
  const haveIcon = new Set(assets.icons);
  const haveBrand = new Set(assets.brand);

  const walkSrc = (dir, out = []) => {
    for (const e of readdirSync(dir)) {
      const f = join(dir, e);
      if (statSync(f).isDirectory()) { if (e !== 'assets') walkSrc(f, out); }
      else if (/\.(jsx|html)$/.test(f)) out.push(f);
    }
    return out;
  };

  for (const file of walkSrc(PROJECT)) {
    const src = readFileSync(file, 'utf8');
    const rel = file.slice(PROJECT.length + 1);
    for (const m of src.matchAll(/(?:<Icon\s+name|<IconButton\s+icon|\bglyph)=["']([a-z][a-z0-9_]{2,})["']/g)) {
      if (!haveIcon.has(m[1])) failures.push(`${rel} uses icon "${m[1]}", which is not in assets/icons/`);
    }
    for (const m of src.matchAll(/\bglyph:\s*'([a-z][a-z0-9_]{2,})'/g)) {
      if (!haveIcon.has(m[1])) failures.push(`${rel} maps to icon "${m[1]}", which is not in assets/icons/`);
    }
    for (const m of src.matchAll(/providers:\s*\[([^\]]*)\]/g)) {
      for (const p of m[1].matchAll(/'([a-z0-9][a-z0-9.-]+)'/g)) {
        if (!haveBrand.has(p[1])) failures.push(`${rel} names provider "${p[1]}", which is not in assets/brand/`);
      }
    }
  }
}

const total = manifest.components.length;
if (renderNotes.length) {
  console.log(`note  ${renderNotes.length}/${total} need props to render (expected for data components):`);
  for (const n of renderNotes.slice(0, 12)) console.log(`        ${n}`);
  if (renderNotes.length > 12) console.log(`        …and ${renderNotes.length - 12} more`);
}

if (failures.length) {
  console.error(`\nFAIL  ${failures.length} problem(s):`);
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}

console.log(
  `ok    ${total} exports resolve, 0 module errors, every icon vendored, ` +
    'readme.md §10 fully backed by source',
);
