/**
 * Loads every @dsCard page in a real browser and fails on console errors.
 *
 * The node smoke test proves the bundle parses and components render. It cannot
 * prove that GSAP loads, that a drag snaps, or that a card's inline JSX compiles
 * — and a card that throws renders as a blank rectangle with no other symptom.
 * That was the failure mode reported repeatedly during the design sessions, so
 * it gets a check.
 *
 * Also drives the SnapField card for real: drags an Agent onto an occupied cell
 * and asserts it did not land there, which is the one invariant the whole
 * composition model rests on.
 */
import { createServer } from 'node:http';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, extname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PROJECT = join(ROOT, 'project');

const TYPES = {
  '.html': 'text/html', '.js': 'text/javascript', '.jsx': 'text/babel',
  '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
};

const server = createServer((req, res) => {
  const path = decodeURIComponent(req.url.split('?')[0]);
  if (path === '/favicon.ico') { res.writeHead(204); res.end(); return; }
  const file = join(PROJECT, path);
  if (!file.startsWith(PROJECT) || !existsSync(file) || statSync(file).isDirectory()) {
    res.writeHead(404); res.end('not found'); return;
  }
  const type = TYPES[extname(file)] || 'application/octet-stream';
  let body = readFileSync(file);
  if (extname(file) === '.html') {
    /* The cards pin CDN scripts with SRI hashes. Those hashes are correct for
       the real CDN and wrong for the local substitutes, so they are stripped
       here — in the harness only. The shipped cards keep their integrity
       attributes. */
    body = Buffer.from(String(body).replace(/\sintegrity="[^"]*"/g, ''));
  }
  res.writeHead(200, { 'content-type': type });
  res.end(body);
});

const walk = (dir, out = []) => {
  for (const e of readdirSync(dir)) {
    const f = join(dir, e);
    if (statSync(f).isDirectory()) walk(f, out);
    else out.push(f);
  }
  return out;
};

const cards = walk(PROJECT)
  .filter((f) => f.endsWith('.html'))
  .filter((f) => readFileSync(f, 'utf8').slice(0, 200).includes('@dsCard'))
  .map((f) => '/' + relative(PROJECT, f).split('\\').join('/'))
  .sort();

await new Promise((r) => server.listen(0, r));
const base = 'http://127.0.0.1:' + server.address().port;

/* The sandbox ships its own Chromium, which may not match this Playwright's
   pinned build number. Prefer whatever is actually on disk. */
const vendored = [
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  '/opt/pw-browsers/chromium/chrome-linux/chrome',
].find((p) => existsSync(p));

const browser = await chromium.launch(
  vendored ? { executablePath: vendored, args: ['--no-sandbox'] } : {},
);

/* This sandbox has no egress to the CDNs the cards link, so the same libraries
   are served from node_modules instead. The cards themselves are untouched —
   this is a test harness concern, not a change to what ships. */
const CDN_LOCAL = [
  [/react@[\d.]+\/umd\/react\.development\.js/, 'node_modules/react/umd/react.development.js'],
  [/react-dom@[\d.]+\/umd\/react-dom\.development\.js/, 'node_modules/react-dom/umd/react-dom.development.js'],
  [/@babel\/standalone@[\d.]+\/babel\.min\.js/, 'node_modules/@babel/standalone/babel.min.js'],
  [/gsap@[\d.]+\/dist\/gsap\.min\.js/, 'node_modules/gsap/dist/gsap.min.js'],
  [/gsap@[\d.]+\/dist\/Draggable\.min\.js/, 'node_modules/gsap/dist/Draggable.min.js'],
];

async function routeCdn(page) {
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (url.startsWith(base)) return route.continue();
    const hit = CDN_LOCAL.find(([re]) => re.test(url));
    if (hit) {
      const file = join(ROOT, hit[1]);
      if (existsSync(file)) {
        return route.fulfill({ status: 200, contentType: 'text/javascript', body: readFileSync(file, 'utf8') });
      }
    }
    /* Icons and webfonts are unreachable here and the components degrade by
       design, so serve an empty 200 rather than aborting — an abort logs a
       console error that would drown the real ones. */
    return route.fulfill({ status: 200, contentType: 'text/plain', body: '' });
  });
}
const failures = [];

for (const card of cards) {
  const page = await browser.newPage({ viewport: { width: 1000, height: 800 } });
  await routeCdn(page);
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e.message || e)));
  try {
    await page.goto(base + card, { waitUntil: 'load', timeout: 20000 });
    await page.waitForTimeout(1200);
    const painted = await page.evaluate(() => {
      const root = document.getElementById('root') || document.body;
      return root.innerText.trim().length + root.querySelectorAll('*').length;
    });
    if (painted < 3) errors.push('rendered nothing (blank card)');
  } catch (e) {
    errors.push(String(e.message || e));
  }
  /* Icon 404s are a CDN reachability issue, not a defect in the page. */
  const real = errors.filter((e) => !/favicon|icon not found|net::ERR_.*material-symbols|simple-icons/i.test(e));
  if (real.length) failures.push({ card, errors: real.slice(0, 3) });
  else console.log('ok    ' + card);
  await page.close();
}

/* The invariant: a snap can never place two Agents in one cell. */
try {
  const page = await browser.newPage({ viewport: { width: 1000, height: 800 } });
  await routeCdn(page);
  const dragErrors = [];
  page.on('pageerror', (e) => dragErrors.push(String(e.message || e)));
  await page.goto(base + '/components/canvas/snapfield.card.html', { waitUntil: 'load' });
  await page.waitForFunction(() => !!window.Draggable, null, { timeout: 20000 });
  await page.waitForSelector('.lamp-snapfield__slot', { timeout: 20000 });
  await page.waitForTimeout(600);

  const slots = () => page.$$eval('.lamp-snapfield__slot', (els) =>
    els.map((e) => ({ left: e.style.left, top: e.style.top })));

  const before = await slots();
  /* Press the HEXAGON, not the slot box — and measure the lattice step from the
     hexagons too. The slot box is only as wide as the hexagon now, but reading
     the hex element directly keeps this test honest about what it is clicking. */
  const boxes = await page.$$eval('.lamp-snapfield__slot .lamp-agent__hex', (els) =>
    els.map((e) => { const r = e.getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; }));

  /* The lattice is a honeycomb, so one column left is also half a row up for an
     odd column. Both steps are read off the rendered Agents rather than assumed:
     Agents 0 and 1 are in adjacent columns of the same row, so their x gap is
     one column and their y gap is half a row. */
  const stepX = Math.abs(boxes[1].x - boxes[0].x);
  const halfRow = Math.abs(boxes[1].y - boxes[0].y);
  const onLattice = (slot, origin) => {
    const dx = (parseFloat(slot.left) - parseFloat(origin.left)) / stepX;
    const dy = (parseFloat(slot.top) - parseFloat(origin.top)) / halfRow;
    const near = (v) => Math.abs(v - Math.round(v)) < 0.02;
    return near(dx) && near(dy);
  };

  /* 1. No overlap: drag Agent 0 directly on top of Agent 1. Agent 1's cell is
        not a candidate at all, so Agent 0 has to land on a free one — it is
        never left on top, and it is never refused outright either. */
  await page.mouse.move(boxes[0].x, boxes[0].y);
  await page.mouse.down();
  await page.mouse.move(boxes[1].x, boxes[1].y, { steps: 24 });
  await page.mouse.up();
  await page.waitForTimeout(900);

  const afterRefuse = await slots();
  const cells = afterRefuse.map((s) => s.left + ',' + s.top);
  if (cells.length !== new Set(cells).size) {
    failures.push({ card: 'snapfield drag', errors: ['two Agents ended in the same cell: ' + cells.join(' | ')] });
  } else if (!onLattice(afterRefuse[0], before[1])) {
    failures.push({
      card: 'snapfield drag',
      errors: ['drag onto an occupied cell settled off-lattice at ' + afterRefuse[0].left + ',' + afterRefuse[0].top],
    });
  } else {
    console.log('ok    snapfield — drag onto an occupied cell lands on a free one, never on top ('
      + before[0].left + ' -> ' + afterRefuse[0].left + ')');
  }

  /* 2. Acceptance: drag the last Agent to the adjacent free cell, releasing
        deliberately off-centre. It must move, and must land exactly on a lattice
        cell rather than where the pointer was. */

  const last = boxes.length - 1;
  await page.mouse.move(boxes[last].x, boxes[last].y);
  await page.mouse.down();
  /* One column left, half a row up — then 11px right and 9px down of that, so a
     correct snap has to correct the release rather than accept it. */
  await page.mouse.move(boxes[last].x - stepX + 11, boxes[last].y - halfRow + 9, { steps: 24 });
  await page.mouse.up();
  await page.waitForTimeout(900);

  const afterSnap = await slots();
  const moved = afterSnap[last].left !== afterRefuse[last].left || afterSnap[last].top !== afterRefuse[last].top;
  const cells2 = afterSnap.map((s) => s.left + ',' + s.top);
  if (cells2.length !== new Set(cells2).size) {
    failures.push({ card: 'snapfield drag', errors: ['snap produced overlapping Agents'] });
  } else if (!moved) {
    failures.push({ card: 'snapfield drag', errors: ['drag to a free cell did not move the Agent'] });
  } else if (!onLattice(afterSnap[last], afterSnap[0])) {
    failures.push({
      card: 'snapfield drag',
      errors: ['Agent settled off-lattice at ' + afterSnap[last].left + ',' + afterSnap[last].top
        + ' (step ' + stepX + ' / half-row ' + halfRow + ')'],
    });
  } else {
    console.log('ok    snapfield — released 11px off, snapped onto the lattice ('
      + afterRefuse[last].left + ' -> ' + afterSnap[last].left + ')');
  }

  /* 3. A drag always lands. Release into open canvas, deliberately in the dead
        zone between lattice centres — further from every centre than both
        snapTolenance and proximityRange. This used to return the Agent home,
        which from the operator's side is indistinguishable from the object
        being stuck. It must commit, on-lattice. */
  const afterSnapBoxes = await page.$$eval('.lamp-snapfield__slot .lamp-agent__hex', (els) =>
    els.map((e) => { const r = e.getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; }));
  await page.mouse.move(afterSnapBoxes[0].x, afterSnapBoxes[0].y);
  await page.mouse.down();
  await page.mouse.move(afterSnapBoxes[0].x + stepX * 2.5, afterSnapBoxes[0].y + halfRow * 3, { steps: 24 });
  await page.mouse.up();
  await page.waitForTimeout(900);

  const afterFar = await slots();
  const cells3 = afterFar.map((s) => s.left + ',' + s.top);
  if (cells3.length !== new Set(cells3).size) {
    failures.push({ card: 'snapfield drag', errors: ['far drop produced overlapping Agents'] });
  } else if (afterFar[0].left === afterSnap[0].left && afterFar[0].top === afterSnap[0].top) {
    failures.push({
      card: 'snapfield drag',
      errors: ['release into open canvas was silently undone — the Agent snapped back to '
        + afterFar[0].left + ',' + afterFar[0].top],
    });
  } else if (!onLattice(afterFar[0], afterFar[1])) {
    failures.push({
      card: 'snapfield drag',
      errors: ['far drop settled off-lattice at ' + afterFar[0].left + ',' + afterFar[0].top],
    });
  } else {
    console.log('ok    snapfield — released in open canvas between cells, still landed ('
      + afterSnap[0].left + ' -> ' + afterFar[0].left + ')');
  }

  if (dragErrors.length) failures.push({ card: 'snapfield drag', errors: dragErrors.slice(0, 3) });
  await page.close();
} catch (e) {
  failures.push({ card: 'snapfield drag', errors: [String(e.message || e).split('\n')[0]] });
}

await browser.close();
server.close();

if (failures.length) {
  console.error('\nFAIL  ' + failures.length + ' page(s):');
  for (const f of failures) {
    console.error('  ✗ ' + f.card);
    for (const e of f.errors) console.error('      ' + e);
  }
  process.exit(1);
}
console.log('\nok    ' + cards.length + ' cards render clean');
