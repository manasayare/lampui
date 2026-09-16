/**
 * Folds the built example app into one self-contained HTML file.
 *
 * This is the real Vite production build of examples/vite-app — the same bundle
 * the package verification drives — with its CSS, JS and webfonts inlined so it
 * runs from a single file with no network at all. Nothing is re-implemented or
 * simplified for the demo; if it works here it works because the package works.
 *
 * Output is written as artifact content, not a whole document: the Artifact
 * publisher supplies <!doctype>, <head> and <body>, so this starts at <title>.
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'examples/vite-app/dist');
const OUT = process.argv[2] || join(ROOT, 'examples/vite-app/lamp-builder.html');

const html = readFileSync(join(DIST, 'index.html'), 'utf8');
const assets = readdirSync(join(DIST, 'assets'));

const jsName = assets.find((f) => f.endsWith('.js'));
const cssName = assets.find((f) => f.endsWith('.css'));
if (!jsName || !cssName) throw new Error('build output not found — run `vite build examples/vite-app` first');

let css = readFileSync(join(DIST, 'assets', cssName), 'utf8');
const js = readFileSync(join(DIST, 'assets', jsName), 'utf8');

/* Webfonts become data URIs. Five faces, ~207kB — worth it to keep the page a
   single file with no font request to fail. */
let fonts = 0;
css = css.replace(/url\(([^)]*\.woff2)\)/g, (whole, href) => {
  const name = href.replace(/["']/g, '').split('/').pop();
  try {
    const b64 = readFileSync(join(DIST, 'assets', name)).toString('base64');
    fonts++;
    return 'url("data:font/woff2;base64,' + b64 + '")';
  } catch {
    return whole;
  }
});

/* The app is a desktop operating console — the design system is explicit that
   phones get monitoring and approvals, never builder parity. Rather than fake a
   responsive builder, the shell keeps its working width and scrolls inside its
   own container, so the page itself never scrolls sideways. */
const shell = `<title>LAMP Builder</title>
<style>
  html, body { height: 100%; }
  body { margin: 0; overflow: hidden; background: var(--surface-canvas, #F8F8F6); }

  .frame { height: 100%; overflow: auto; }
  .stage { min-width: 1180px; height: 100%; }
  #root { height: 100%; }

  /* Shown only where the builder cannot honestly fit. */
  .narrow {
    display: none;
    padding: 10px 16px;
    border-bottom: 1px solid var(--border-subtle, #E9E9E5);
    background: var(--surface-secondary, #F1F1EE);
    color: var(--text-secondary, #63635D);
    font: 400 12px/17px var(--font-sans, ui-sans-serif, system-ui, sans-serif);
  }
  .narrow b { font-weight: 500; color: var(--text-primary, #1D1D1B); }
  @media (max-width: 1180px) {
    .narrow { display: block; }
    .stage { height: calc(100% - 38px); }
  }
</style>

<p class="narrow"><b>Desktop surface.</b> The builder keeps its working width — scroll sideways, or open this wider. LAMP gives phones monitoring, approvals and emergency controls, never builder parity.</p>

<div class="frame">
  <div class="stage"><div id="root"></div></div>
</div>

<style>
${css}
</style>

<script type="module">
${js}
</script>
`;

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, shell);

const kb = (n) => (n / 1024).toFixed(0) + 'kB';
console.log(
  'lamp-builder.html  ' + kb(shell.length) + '  (js ' + kb(js.length)
  + ', css ' + kb(css.length) + ' with ' + fonts + ' fonts inlined)',
);
void html;
