# LAMP Design System

The design system for **LAMP** — an enterprise AI operating environment for configuring, simulating, understanding and operating autonomous AI workers.

This repository started as a handoff bundle exported from Claude Design. `project/` is the system itself; **[`project/readme.md`](project/readme.md) is the design guide** and the document to read first. This file covers the toolchain only.

```
project/          the design system — tokens, components, guidelines, UI kits
  styles.css      the single entry point consumers link
  tokens/         CSS custom properties
  components/     172 exports across thirteen groups
  guidelines/     foundation specimen cards and deeper prose specs
  ui_kits/        full-screen recreations of the builder and the ops console
  assets/         vendored icons, provider marks and webfonts (generated)
  _ds_bundle.js   generated — the runtime library every card and kit loads
chats/            the design-session transcripts the system was built from
tools/            the build and the two checks
```

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
| `npm run check` | Builds, then executes the bundle against a real React: every export resolves, no module-level errors, every icon vendored, every name `readme.md` promises actually exists. Seconds, no browser. |
| `npm run verify` | Loads all 43 cards, both UI kits and both templates in headless Chromium and fails on any console error, blank render or 404. Also drives a real drag and asserts the snapping invariants. |
| `npm test` | Both checks. |
| `npm run assets` | Re-vendors icons and fonts after adding new icon names. |

### Why the bundle has a build step

The cards, the UI kits and the templates all load `_ds_bundle.js` with a plain `<script src>`. In the design tool that file is regenerated automatically at the end of every turn. Here it was a frozen artifact — adding a component put its source on disk and left every card rendering `undefined`, with no error to say why. `tools/build-bundle.mjs` reproduces the format byte-for-byte, so the bundle is a build output again rather than something to hand-edit.

The build follows the same rules the design tool applies: a component is a PascalCase `.jsx` under `components/`; only capitalized exports are attached to the namespace; a sibling `.d.ts` gives the props contract but is not what makes a file bundle.

### Why there are two checks

`check` is fast and catches the structural failures — a broken import, a component missing from the namespace, an icon that does not exist. It cannot tell you whether GSAP loaded, whether a card's inline JSX compiled, or whether a drag actually snaps. A card that throws renders as a blank rectangle with no other symptom, which was the failure reported over and over in the design sessions, so `verify` opens every page in a real browser and fails on it.

`verify` also drives `SnapField` with a real pointer and asserts the two invariants the composition model rests on: dragging an Agent onto an occupied cell must return it home, and dragging it to a free cell must land it exactly on a lattice slot.

## Notes on this environment

`npm run verify` needs a Chromium. It uses the sandbox's pre-installed one at `/opt/pw-browsers/` when present, otherwise Playwright's own.

The cards load React, Babel and GSAP from CDN, as they do in the design tool. Where egress to those CDNs is blocked, the verifier serves the same libraries from `node_modules` — that substitution is in the test harness only and the shipped cards are untouched. Icons and webfonts are **not** CDN-dependent; they are vendored into `project/assets/`.
