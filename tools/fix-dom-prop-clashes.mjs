/**
 * One-off: makes the component .d.ts files actually type-check.
 *
 * Many props interfaces extend a DOM attributes type and then redefine one of
 * its event handlers with a domain signature — `onChange(agents)` rather than
 * `onChange(event)`, `onSelect(item)` rather than `onSelect(event)`, `content`
 * and `size` and `format` and `title` likewise. That is the right API; what is
 * wrong is extending the DOM type without excluding the prop being replaced,
 * which TypeScript rejects outright (TS2430). The declarations were never
 * compiled, so nobody found out.
 *
 * This rewrites `extends React.XAttributes<Y>` to
 * `extends Omit<React.XAttributes<Y>, 'onChange'>`, merging into an existing
 * Omit where there is one. It runs tsc, fixes what it reports, and repeats
 * until clean — tsc reports one clashing prop per interface per pass.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const COMPONENTS = join(ROOT, 'project/components');

const walk = (dir, out = []) => {
  for (const e of readdirSync(dir)) {
    const f = join(dir, e);
    if (statSync(f).isDirectory()) walk(f, out);
    else if (f.endsWith('.d.ts')) out.push(f);
  }
  return out;
};
const files = walk(COMPONENTS);

function tscErrors() {
  /* The declarations are regenerated first — the fixes land in the per-component
     sources, and the flattened dist/index.d.ts is what tsc actually reads. */
  execFileSync('node', ['tools/build-package.mjs'], { cwd: ROOT, encoding: 'utf8' });
  try {
    execFileSync('npx', ['tsc', '-p', 'packages/react/tsconfig.json'], { cwd: ROOT, encoding: 'utf8' });
    return [];
  } catch (e) {
    return String(e.stdout || '').split('\n');
  }
}

/** Pairs each "incorrectly extends" line with the "Types of property" that follows. */
function clashes(lines) {
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/Interface '([A-Za-z0-9_]+)(?:<[^>]*>)?' incorrectly extends/);
    if (!m) continue;
    for (let j = i + 1; j < Math.min(i + 4, lines.length); j++) {
      const p = lines[j].match(/Types of property '([A-Za-z0-9_]+)' are incompatible/);
      if (p) { out.push({ iface: m[1], prop: p[1] }); break; }
    }
  }
  return out;
}

function patch({ iface, prop }) {
  for (const file of files) {
    const src = readFileSync(file, 'utf8');
    const re = new RegExp(
      '(export interface ' + iface + '(?:<[^>]*>)?\\s+extends\\s+)([^{]+?)(\\s*\\{)',
    );
    const m = src.match(re);
    if (!m) continue;

    let base = m[2].trim();
    let next;
    const omit = base.match(/^Omit<([\s\S]+),\s*((?:'[^']+'\s*\|\s*)*'[^']+')>$/);
    if (omit) {
      if (omit[2].includes("'" + prop + "'")) return false;
      next = `Omit<${omit[1]}, ${omit[2]} | '${prop}'>`;
    } else {
      /* Only the DOM attribute type is narrowed; a local base interface
         (SearchInputProps extends TextInputProps) is left alone. */
      if (!/^React\.[A-Za-z]+Attributes</.test(base)) continue;
      next = `Omit<${base}, '${prop}'>`;
    }
    writeFileSync(file, src.replace(re, `$1${next}$3`));
    return true;
  }
  return false;
}

let pass = 0;
let fixed = 0;
for (;;) {
  const found = clashes(tscErrors());
  if (!found.length) break;
  let changed = 0;
  for (const c of found) if (patch(c)) { changed++; fixed++; }
  pass++;
  console.log(`pass ${pass}: ${found.length} clash(es), ${changed} patched`);
  if (!changed) { console.error('could not patch:', found); process.exit(1); }
  if (pass > 12) { console.error('not converging'); process.exit(1); }
}
console.log(`ok    ${fixed} DOM prop clash(es) resolved across ${pass} pass(es)`);
