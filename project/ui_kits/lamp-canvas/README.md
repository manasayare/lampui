# UI kit — LAMP Builder (Genie canvas)

The builder surface: the shell, the canvas, the composition and the Inspector. This is the screen LAMP is used to *configure* the business.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Entry point. Loads `styles.css`, React, Babel and `_ds_bundle.js`, then the JSX below. |
| `data.jsx` | Mock Finance-Genie data: 6 Agents with lattice positions, 5 bonds, the object tree, 4 memory facts. |
| `InspectorBody.jsx` | The Inspector content per tab — Configure, Memory, Runtime. |
| `BuilderApp.jsx` | The screen: shell, header, structure rail, canvas, inspector, bottom toolbar, status bar, command palette. |

## What it demonstrates

- The full builder layout: 48px header · 240px structure rail · dominant canvas · 320px Inspector · 40px toolbar · 28px status bar.
- A Playbook of 6 bonded Agents on the hexagonal lattice, including a suggested (dashed violet) bond and one that requires configuration.
- Semantic zoom: the zoom control changes Agent size and `detail` tier (glyph → name → meta) and the grid density.
- Selection driving the Inspector; three Inspector tabs with progressive disclosure and an `advanced` section.
- Simulation: **Simulate** switches the environment to blue, swaps the banner for `SimulationBar`, and animates execution energy along confirmed bonds only.
- Bond mode (`B`) showing compatible targets and a snap guide — the non-drag bonding path.
- Command palette (`Cmd/Ctrl+K`) with Create / Run / Navigate / Safety groups.

## Interactions

Click any Agent · switch Inspector tabs · zoom in and out · press `B` for bond mode · press `Cmd/Ctrl+K` · **Simulate** / **Exit simulation** · `Esc` closes.

Nothing here re-implements a primitive — every element comes from `window.LAMPDesignSystem_980d6d`.
