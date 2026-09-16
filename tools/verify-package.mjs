/**
 * Proves @lamp/design-system works as an installed React dependency.
 *
 * The design-system checks cover the bundle the cards load. They say nothing
 * about whether the package resolves through a bundler, whether its types
 * compile, whether the CSS and fonts arrive, or whether the canvas still drags
 * when GSAP is injected instead of fetched from a CDN. This builds the example
 * app with Vite and drives the result in a real browser.
 *
 * Three things are asserted:
 *   1. The example app builds and renders with no console errors.
 *   2. Drag still snaps — with GSAP injected via setGsap, no CDN reachable.
 *   3. The package tree-shakes: an app importing only Button must not pull in
 *      the whole system.
 */
import { createServer } from 'node:http';
import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync, readdirSync, statSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const APP = join(ROOT, 'examples/vite-app');
const failures = [];

/* ------------------------------------------------------------------- build */

execFileSync('node', ['tools/build-package.mjs'], { cwd: ROOT, stdio: 'pipe' });
try {
  execFileSync('npx', ['vite', 'build', 'examples/vite-app'], { cwd: ROOT, stdio: 'pipe' });
  console.log('ok    example app builds with Vite');
} catch (e) {
  console.error(String(e.stdout || '') + String(e.stderr || ''));
  failures.push('example app failed to build');
}

/* -------------------------------------------------------------- tree-shake */

/**
 * An app that imports one component must not ship all 186. The probe lives
 * inside the repo so that `@lamp/design-system` resolves through the same
 * workspace link a real consumer would use.
 */
const PROBE = join(ROOT, '.treeshake-probe');
try {
  rmSync(PROBE, { recursive: true, force: true });
  mkdirSync(join(PROBE, 'src'), { recursive: true });
  writeFileSync(join(PROBE, 'index.html'),
    '<!doctype html><html><body><div id="root"></div>'
    + '<script type="module" src="/src/main.jsx"></script></body></html>');
  writeFileSync(join(PROBE, 'src/main.jsx'),
    "import { createRoot } from 'react-dom/client';\n"
    + "import { Button } from '@lamp/design-system';\n"
    + "createRoot(document.getElementById('root')).render(<Button>Go live</Button>);\n");
  writeFileSync(join(PROBE, 'vite.config.mjs'),
    "import react from '@vitejs/plugin-react';\n"
    + 'export default { plugins: [react()], logLevel: "error" };\n');

  execFileSync('npx', ['vite', 'build', '.treeshake-probe'], { cwd: ROOT, stdio: 'pipe' });

  const jsOf = (dir) => readdirSync(dir)
    .filter((f) => f.endsWith('.js'))
    .reduce((a, f) => a + statSync(join(dir, f)).size, 0);

  const small = jsOf(join(PROBE, 'dist/assets'));
  const full = jsOf(join(APP, 'dist/assets'));
  const pct = Math.round((small / full) * 100);

  if (small >= full * 0.6) {
    failures.push(
      'tree-shaking is not working: a Button-only app is ' + (small / 1024).toFixed(0)
      + 'kB against the full app\'s ' + (full / 1024).toFixed(0) + 'kB (' + pct + '%)',
    );
  } else {
    console.log(
      'ok    tree-shakes — Button-only app is ' + (small / 1024).toFixed(0) + 'kB, '
      + pct + '% of the full ' + (full / 1024).toFixed(0) + 'kB app',
    );
  }
} catch (e) {
  failures.push('tree-shake probe failed: ' + String(e.stderr || e.message || e).split('\n')[0]);
} finally {
  rmSync(PROBE, { recursive: true, force: true });
}

/* -------------------------------------------------------------------- refs */

/**
 * forwardRef, checked at runtime.
 *
 * The type test proves the declarations accept a ref; it cannot prove the ref
 * arrives. A component that forwards nothing types identically. So: render one,
 * read back what each ref actually caught, and assert the tag.
 *
 * Form controls are the ones that matter most here — a ref landing on the
 * wrapper instead of the <input> is useless to react-hook-form and to .focus().
 */
const REF_PROBE = join(ROOT, '.refprobe');
const EXPECT = {
  Button: 'BUTTON', TextInput: 'INPUT', Textarea: 'TEXTAREA', Select: 'SELECT',
  Checkbox: 'INPUT', Switch: 'INPUT', Slider: 'INPUT', TagInput: 'INPUT',
  InspectorPanel: 'ASIDE', CanvasSurface: 'DIV', SnapField: 'DIV', AgentHex: 'DIV',
};
try {
  rmSync(REF_PROBE, { recursive: true, force: true });
  mkdirSync(join(REF_PROBE, 'src'), { recursive: true });
  writeFileSync(join(REF_PROBE, 'index.html'),
    '<!doctype html><html><body><div id="root"></div>'
    + '<script type="module" src="/src/main.jsx"></script></body></html>');
  writeFileSync(join(REF_PROBE, 'vite.config.mjs'),
    "import react from '@vitejs/plugin-react';\n"
    + 'export default { plugins: [react()], logLevel: "error" };\n');
  writeFileSync(join(REF_PROBE, 'src/main.jsx'), `
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Button, TextInput, Textarea, Select, Checkbox, Switch, Slider, TagInput,
  InspectorPanel, CanvasSurface, SnapField, AgentHex,
} from '@lamp/design-system';

const NAMES = ${JSON.stringify(Object.keys(EXPECT))};

function Probe() {
  const refs = Object.fromEntries(NAMES.map((n) => [n, React.useRef(null)]));
  const [out, setOut] = React.useState('');
  React.useEffect(() => {
    setOut(JSON.stringify(Object.fromEntries(
      NAMES.map((n) => [n, refs[n].current ? refs[n].current.tagName : null]),
    )));
  }, []);
  return (
    <div>
      <Button ref={refs.Button}>Go live</Button>
      <TextInput ref={refs.TextInput} />
      <Textarea ref={refs.Textarea} />
      <Select ref={refs.Select} options={['a']} />
      <Checkbox ref={refs.Checkbox} label="x" />
      <Switch ref={refs.Switch} />
      <Slider ref={refs.Slider} value={1} />
      <TagInput ref={refs.TagInput} values={[]} />
      <InspectorPanel ref={refs.InspectorPanel} title="x" />
      <CanvasSurface ref={refs.CanvasSurface}>
        <SnapField ref={refs.SnapField} agents={[]} renderAgent={() => null} />
      </CanvasSurface>
      <AgentHex ref={refs.AgentHex} name="x" />
      <pre id="out">{out}</pre>
    </div>
  );
}
createRoot(document.getElementById('root')).render(<Probe />);
`);
  execFileSync('npx', ['vite', 'build', '.refprobe'], { cwd: ROOT, stdio: 'pipe' });
} catch (e) {
  failures.push('ref probe failed to build: ' + String(e.stderr || e.message || e).split('\n')[0]);
}

/* ------------------------------------------------------------------ render */

const TYPES = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.json': 'application/json',
};
const DIST = join(APP, 'dist');
const server = createServer((req, res) => {
  const path = decodeURIComponent(req.url.split('?')[0]);
  if (path === '/favicon.ico') { res.writeHead(204); res.end(); return; }
  const file = join(DIST, path === '/' ? 'index.html' : path);
  if (!file.startsWith(DIST) || !existsSync(file) || statSync(file).isDirectory()) {
    res.writeHead(404); res.end('not found'); return;
  }
  res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream' });
  res.end(readFileSync(file));
});
await new Promise((r) => server.listen(0, r));
const base = 'http://127.0.0.1:' + server.address().port;

const vendored = [
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  '/opt/pw-browsers/chromium/chrome-linux/chrome',
].find((p) => existsSync(p));
const browser = await chromium.launch(vendored ? { executablePath: vendored, args: ['--no-sandbox'] } : {});

if (existsSync(DIST)) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e.message || e)));

  /* Nothing outside the app may be fetched. If the canvas still drags under
     this, GSAP genuinely came through setGsap and not the CDN. */
  await page.route('**/*', (route) =>
    route.request().url().startsWith(base) ? route.continue() : route.abort());

  try {
    await page.goto(base + '/', { waitUntil: 'load', timeout: 30000 });
    await page.waitForSelector('.lamp-snapfield__slot', { timeout: 20000 });
    await page.waitForTimeout(800);

    const counts = await page.evaluate(() => ({
      agents: document.querySelectorAll('.lamp-snapfield__slot').length,
      icons: document.querySelectorAll('svg path[d]').length,
      inspector: document.querySelectorAll('.lamp-insp').length,
      font: getComputedStyle(document.body).fontFamily,
    }));

    if (counts.agents !== 4) failures.push('example app rendered ' + counts.agents + ' Agents, expected 4');
    /* Icons are inlined now — if any had stayed async they would be missing
       here, because every outside request is blocked. */
    if (counts.icons < 20) failures.push('only ' + counts.icons + ' icon paths rendered; icons are not inlining');
    if (!counts.inspector) failures.push('inspector did not render');
    if (!/Geist/.test(counts.font)) failures.push('Geist not applied — the stylesheet did not load');
    else console.log('ok    renders: ' + counts.agents + ' Agents, ' + counts.icons + ' icon paths, Geist applied');

    /* Drag, with no network: proves the injected GSAP drives the canvas. */
    const hexes = await page.$$eval('.lamp-snapfield__slot .lamp-agent__hex', (els) =>
      els.map((e) => { const r = e.getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; }));
    const before = await page.$$eval('.lamp-snapfield__slot', (els) => els.map((e) => e.style.left + ',' + e.style.top));

    const stepX = Math.abs(hexes[1].x - hexes[0].x);
    const halfRow = Math.abs(hexes[1].y - hexes[0].y);
    const last = hexes.length - 1;
    await page.mouse.move(hexes[last].x, hexes[last].y);
    await page.mouse.down();
    await page.mouse.move(hexes[last].x - stepX + 9, hexes[last].y - halfRow + 7, { steps: 24 });
    await page.mouse.up();
    await page.waitForTimeout(900);

    const after = await page.$$eval('.lamp-snapfield__slot', (els) => els.map((e) => e.style.left + ',' + e.style.top));
    if (after.length !== new Set(after).size) failures.push('drag in the example app produced overlapping Agents');
    else if (after[last] === before[last]) failures.push('drag in the example app did not move the Agent — injected GSAP is not driving the canvas');
    else console.log('ok    injected GSAP drives the canvas — snapped ' + before[last].split(',')[0] + ' -> ' + after[last].split(',')[0] + ', offline');

    /* Marquee: a press in the gap BETWEEN hexagons must start a selection, not
       grab whichever Agent is nearest. Regression test for the slot wrapper
       swallowing pointer events outside the hexagon. */
    await page.mouse.move(hexes[0].x - 70, hexes[0].y - 45);
    await page.mouse.down();
    await page.mouse.move(hexes[2].x + 60, hexes[2].y + 60, { steps: 18 });
    await page.mouse.up();
    await page.waitForTimeout(400);

    const group = await page.$('.lamp-snapfield__group-btn');
    if (!group) {
      failures.push('marquee selection did not select — a press on empty canvas is being swallowed');
    } else {
      await group.click();
      await page.waitForTimeout(800);
      const composer = await page.evaluate(() => {
        const el = document.querySelector('.lamp-composer');
        if (!el) return null;
        return {
          proposal: !!el.querySelector('.lamp-proposal'),
          outcomes: el.querySelectorAll('.lamp-composer__agent').length,
          text: el.innerText.slice(0, 200),
        };
      });
      if (!composer) failures.push('PlaybookComposer did not open from the canvas selection');
      else if (!composer.proposal) failures.push('PlaybookComposer opened with no process proposal');
      else console.log('ok    marquee -> composer: proposed "'
        + (composer.text.match(/\n([A-Z][a-z]+ to [a-z]+)/) || [, 'a process'])[1]
        + '" for ' + composer.outcomes + ' Agents');
    }

    /* Library -> dialog -> canvas. Dropping must open a dialog rather than
       creating anything, the dialog must refuse an unnamed Agent, and
       confirming must put a real Agent on the lattice without overlapping. */
    await page.keyboard.press('Escape');
    await page.click('.lamp-scrim', { position: { x: 5, y: 5 } }).catch(() => {});
    await page.waitForTimeout(400);

    const item = await page.$('.lamp-agentlib__item');
    const field = await page.$('.lamp-snapfield');
    if (!item || !field) {
      failures.push('AgentLibrary or SnapField missing from the example app');
    } else {
      const countBefore = await page.$$eval('.lamp-snapfield__slot', (els) => els.length);
      const ib = await item.boundingBox();
      const fb = await field.boundingBox();
      await page.mouse.move(ib.x + ib.width / 2, ib.y + ib.height / 2);
      await page.mouse.down();
      await page.mouse.move(fb.x + 300, fb.y + 260, { steps: 20 });
      await page.mouse.up();
      await page.waitForTimeout(500);

      const dialog = await page.$('.lamp-newagent');
      const countAfterDrop = await page.$$eval('.lamp-snapfield__slot', (els) => els.length);
      if (!dialog) {
        failures.push('dropping from AgentLibrary did not open NewAgentDialog');
      } else if (countAfterDrop !== countBefore) {
        failures.push('dropping created an Agent before it was named');
      } else {
        const nameInput = await page.$('.lamp-newagent input#na-name');
        const cellShown = await page.$('.lamp-newagent__cell');
        await nameInput.fill('');
        await page.waitForTimeout(150);
        const blocked = await page.$eval('.lamp-newagent__foot button:last-child, .lamp-modal__foot button:last-child',
          (b) => b.disabled);
        await nameInput.fill('Duplicate Checker');
        await page.waitForTimeout(150);
        await page.click('.lamp-modal__foot button:last-child');
        await page.waitForTimeout(900);

        const slots = await page.$$eval('.lamp-snapfield__slot', (els) =>
          els.map((e) => e.style.left + ',' + e.style.top));
        const named = await page.$$eval('.lamp-snapfield__slot', (els) =>
          els.some((e) => (e.innerText || '').includes('Duplicate Checker')));
        if (!cellShown) failures.push('NewAgentDialog did not show the cell the drop resolved to');
        else if (!blocked) failures.push('NewAgentDialog allowed an Agent with no name');
        else if (slots.length !== countBefore + 1 || !named) failures.push('confirming NewAgentDialog did not add the Agent');
        else if (slots.length !== new Set(slots).size) failures.push('a new Agent was placed on top of an existing one');
        else console.log('ok    library -> dialog -> canvas: unnamed refused, named Agent landed on a free cell ('
          + countBefore + ' -> ' + slots.length + ')');
      }
    }

    const real = errors.filter((e) => !/favicon/i.test(e));
    if (real.length) failures.push('console errors: ' + real.slice(0, 2).join(' | '));
  } catch (e) {
    failures.push('example app: ' + String(e.message || e).split('\n')[0]);
  }
  await page.close();
}

/* Serve and read the ref probe. */
if (existsSync(join(REF_PROBE, 'dist'))) {
  const refServer = createServer((req, res) => {
    const p = decodeURIComponent(req.url.split('?')[0]);
    const f = join(REF_PROBE, 'dist', p === '/' ? 'index.html' : p);
    if (!f.startsWith(REF_PROBE) || !existsSync(f) || statSync(f).isDirectory()) {
      res.writeHead(404); res.end(); return;
    }
    res.writeHead(200, { 'content-type': TYPES[extname(f)] || 'application/octet-stream' });
    res.end(readFileSync(f));
  });
  await new Promise((r) => refServer.listen(0, r));
  const refBase = 'http://127.0.0.1:' + refServer.address().port;

  const page = await browser.newPage();
  await page.goto(refBase + '/', { waitUntil: 'load' });
  await page.waitForFunction(() => {
    const el = document.getElementById('out');
    return el && el.textContent.length > 2;
  }, null, { timeout: 20000 }).catch(() => {});
  const got = JSON.parse((await page.textContent('#out')) || '{}');

  const wrong = Object.entries(EXPECT).filter(([name, tag]) => got[name] !== tag);
  if (wrong.length) {
    failures.push(
      'refs did not reach the expected element: '
      + wrong.map(([n, tag]) => n + ' expected ' + tag + ', got ' + (got[n] || 'nothing')).join('; '),
    );
  } else {
    console.log('ok    refs reach the DOM — ' + Object.keys(EXPECT).length
      + ' components, form controls land on their <input>/<select>, not the wrapper');
  }
  await page.close();
  refServer.close();
}
rmSync(REF_PROBE, { recursive: true, force: true });

await browser.close();
server.close();

if (failures.length) {
  console.error('\nFAIL  ' + failures.length + ' problem(s):');
  for (const f of failures) console.error('  ✗ ' + f);
  process.exit(1);
}
console.log('\nok    @lamp/design-system installs, builds, types, tree-shakes and runs');
