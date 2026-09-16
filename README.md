# LAMP Design System

The design system for **LAMP** — an enterprise AI operating environment for configuring, simulating, understanding and operating autonomous AI workers.

This repository started as a handoff bundle exported from Claude Design. `project/` is the system itself; **[`project/readme.md`](project/readme.md) is the design guide** and the document to read first. This file covers the toolchain only.

```
project/          the design system — the single source of truth
  styles.css      the CSS entry point
  tokens/         CSS custom properties
  components/     174 exports across thirteen groups
  guidelines/     foundation specimen cards and deeper prose specs
  ui_kits/        full-screen recreations of the builder and the ops console
  assets/         vendored icons, provider marks and webfonts (generated)
  _ds_bundle.js   generated — the runtime library every card and kit loads
packages/react/   @lamp/design-system — the npm package a React app installs
examples/vite-app a working builder screen built only from package exports
chats/            the design-session transcripts the system was built from
tools/            the builds and the checks
```

`project/components` is the source. **The design-system bundle and the npm package are two outputs of it**, so a fix lands in both and neither is a fork.

## Getting started

```
npm install
npm run check      # rebuild the bundle, then verify it
npm run dev        # serve project/ at :5173
```

## Commands

| Command | What it does |
| --- | --- |
| `npm run build` | Regenerates `project/_ds_bundle.js` and `_ds_manifest.json` from source. |
| `npm run build:pkg` | Builds `packages/react` — barrel, ESM, CJS, types, stylesheet, fonts. |
| `npm run check` | The fast checks: the bundle executes against a real React with every export resolving and every icon vendored, then TypeScript compiles the generated declarations and the example app. Seconds, no browser. |
| `npm run verify` | Loads all 44 cards, both UI kits and both templates in headless Chromium; fails on any console error, blank render or 404; drives a real drag and asserts the snapping invariants. |
| `npm run build:example` | Builds `examples/vite-app` against the package. |
| `npm test` | Everything, including the package verification. |
| `npm run assets` | Re-vendors icons and fonts, and regenerates the inlined glyph module. |

### Why the bundle has a build step

The cards, the UI kits and the templates all load `_ds_bundle.js` with a plain `<script src>`. In the design tool that file is regenerated automatically at the end of every turn. Here it was a frozen artifact — adding a component put its source on disk and left every card rendering `undefined`, with no error to say why. `tools/build-bundle.mjs` reproduces the format byte-for-byte, so the bundle is a build output again rather than something to hand-edit.

The build follows the same rules the design tool applies: a component is a PascalCase `.jsx` under `components/`; only capitalized exports are attached to the namespace; a sibling `.d.ts` gives the props contract but is not what makes a file bundle.

### Why there are two checks

`check` is fast and catches the structural failures — a broken import, a component missing from the namespace, an icon that does not exist. It cannot tell you whether GSAP loaded, whether a card's inline JSX compiled, or whether a drag actually snaps. A card that throws renders as a blank rectangle with no other symptom, which was the failure reported over and over in the design sessions, so `verify` opens every page in a real browser and fails on it.

`verify` also drives `SnapField` with a real pointer and asserts the two invariants the composition model rests on: dragging an Agent onto an occupied cell must return it home, and dragging it to a free cell must land it exactly on a lattice slot.

`tools/verify-package.mjs` does the same job for the npm package, which the other two say nothing about. It builds the example app with Vite, then drives it in a browser **with every outside request blocked** — so if the canvas still drags, GSAP genuinely arrived through `setGsap` rather than a CDN, and if icons still render they are genuinely inlined. It also asserts the package tree-shakes and that a marquee started in the gap between two hexagons opens the composer.

## Notes on this environment

`npm run verify` needs a Chromium. It uses the sandbox's pre-installed one at `/opt/pw-browsers/` when present, otherwise Playwright's own.

The cards load React, Babel and GSAP from CDN, as they do in the design tool. Where egress to those CDNs is blocked, the verifier serves the same libraries from `node_modules` — that substitution is in the test harness only and the shipped cards are untouched.

The **npm package has no CDN dependency at all**: icons are inlined into the bundle, fonts ship beside the stylesheet, and GSAP is injected by the consumer.
