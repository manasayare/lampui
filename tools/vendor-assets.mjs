/**
 * Copies the icons and webfonts the system actually uses into project/assets/.
 *
 * The handoff shipped `assets/` containing nothing but a README: fonts came from
 * Google Fonts and icons from jsDelivr at runtime. That is fine in a design tool
 * and wrong in an enterprise product — it makes every screen depend on two CDNs
 * being reachable, and a blocked request renders a placeholder box where an icon
 * should be. This vendors them.
 *
 * Only the glyphs referenced in source are copied, not the 7,000-icon set. Run
 * it again after adding new icon names; it reports anything referenced that the
 * set does not contain, which catches a typo'd glyph before it ships as an
 * invisible gap in a toolbar.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, copyFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PROJECT = join(ROOT, 'project');
const ASSETS = join(PROJECT, 'assets');

const SYMBOLS_SRC = join(ROOT, 'node_modules/@material-symbols/svg-400/outlined');
const BRAND_SRC = join(ROOT, 'node_modules/simple-icons/icons');
const FONT_SRC = join(ROOT, 'node_modules/geist/dist/fonts');

const walk = (dir, out = []) => {
  for (const e of readdirSync(dir)) {
    const f = join(dir, e);
    if (statSync(f).isDirectory()) walk(f, out);
    else out.push(f);
  }
  return out;
};

const sources = walk(PROJECT).filter((f) => /\.(jsx|html|md)$/.test(f) && !f.includes('/assets/'));
const text = sources.map((f) => readFileSync(f, 'utf8')).join('\n');

/* Icon names reach the Icon component in too many shapes to enumerate with a
   regex — `name="x"`, `icon={cond ? 'a' : 'b'}`, values in a lookup table, arrays
   of nav items in a UI kit. Trying to match the call sites means silently missing
   some, which ships as an invisible gap in a toolbar.
 *
 * So: take every quoted lowercase token in the source and keep the ones that are
 * real icon names. Over-copying a handful of SVGs because a prop value happens to
 * share a name with an icon costs a few KB; under-copying costs a broken screen. */
const tokens = new Set();
for (const m of text.matchAll(/['"]([a-z][a-z0-9_]{2,40})['"]/g)) tokens.add(m[1]);

const iconSet = new Set(
  readdirSync(SYMBOLS_SRC).filter((f) => f.endsWith('.svg') && !f.includes('-fill')).map((f) => f.slice(0, -4)),
);
const brandSet = new Set(readdirSync(BRAND_SRC).filter((f) => f.endsWith('.svg')).map((f) => f.slice(0, -4)));

const candidates = new Set([...tokens].filter((t) => iconSet.has(t)));

/* Provider slugs are narrower — they only appear as `provider=`, `slug=` or in a
   connector's `providers:` array — so they can be matched precisely, and a name
   that misses is worth reporting rather than silently dropping. */
const brandCandidates = new Set();
for (const m of text.matchAll(/\b(?:provider|slug)\s*[:=]\s*['"]([a-z0-9][a-z0-9.-]{1,})['"]/g)) {
  brandCandidates.add(m[1]);
}
for (const m of text.matchAll(/providers:\s*\[([^\]]*)\]/g)) {
  for (const p of m[1].matchAll(/['"]([a-z0-9][a-z0-9.-]{1,})['"]/g)) brandCandidates.add(p[1]);
}

/* Names used in an icon position that are not icons at all — a typo, or a glyph
   from another family. Reported below; these are the ones worth acting on. */
const usedAsIcon = new Set();
for (const m of text.matchAll(/(?:<Icon\s+name|<IconButton\s+icon|\bglyph)\s*[:=]\s*["']([a-z][a-z0-9_]{2,})["']/g)) {
  usedAsIcon.add(m[1]);
}
const typos = [...usedAsIcon].filter((n) => !iconSet.has(n));

mkdirSync(join(ASSETS, 'icons'), { recursive: true });
mkdirSync(join(ASSETS, 'brand'), { recursive: true });
mkdirSync(join(ASSETS, 'fonts'), { recursive: true });

const copied = [];
for (const name of [...candidates].sort()) {
  copyFileSync(join(SYMBOLS_SRC, name + '.svg'), join(ASSETS, 'icons', name + '.svg'));
  copied.push(name);
}

const brandCopied = [];
const brandUnknown = [];
for (const slug of [...brandCandidates].sort()) {
  const src = join(BRAND_SRC, slug + '.svg');
  if (!existsSync(src)) { brandUnknown.push(slug); continue; }
  copyFileSync(src, join(ASSETS, 'brand', slug + '.svg'));
  brandCopied.push(slug);
}

/* Weights 400/500/600 only — the brief rules out light weights and calls 700 rare. */
const FACES = [
  ['geist-sans/Geist-Regular.woff2', 'Geist-Regular.woff2'],
  ['geist-sans/Geist-Medium.woff2', 'Geist-Medium.woff2'],
  ['geist-sans/Geist-SemiBold.woff2', 'Geist-SemiBold.woff2'],
  ['geist-mono/GeistMono-Regular.woff2', 'GeistMono-Regular.woff2'],
  ['geist-mono/GeistMono-Medium.woff2', 'GeistMono-Medium.woff2'],
];
const fonts = [];
for (const [from, to] of FACES) {
  const src = join(FONT_SRC, from);
  if (!existsSync(src)) continue;
  copyFileSync(src, join(ASSETS, 'fonts', to));
  fonts.push(to);
}

writeFileSync(
  join(ASSETS, 'manifest.json'),
  JSON.stringify({ icons: copied, brand: brandCopied, fonts, generatedBy: 'tools/vendor-assets.mjs' }, null, 2) + '\n',
);

console.log('icons  ' + copied.length + ' copied to assets/icons/');
console.log('brand  ' + brandCopied.length + ' copied to assets/brand/');
console.log('fonts  ' + fonts.length + ' copied to assets/fonts/');
if (typos.length) {
  console.log('\nused in an icon position but NOT a Material Symbol — fix these:\n  ' + typos.join(', '));
}
if (brandUnknown.length) console.log('\nnot in Simple Icons:\n  ' + brandUnknown.join(', '));
