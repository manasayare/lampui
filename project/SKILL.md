---
name: lamp-design
description: Use this skill to generate well-branded interfaces and assets for LAMP, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Orientation for LAMP specifically

- `readme.md` is the design guide: product ontology, content fundamentals, visual foundations, iconography, accessibility, the component index.
- `styles.css` is the single stylesheet to link. It imports every token file and every component stylesheet.
- `tokens/` holds the token architecture. Never hard-code a colour; use the semantic token.
- `components/<group>/` holds the React primitives, each with a `.d.ts` props contract and a `.prompt.md` usage note. Read the `.prompt.md` before using a component.
- `guidelines/` holds the foundation specimen cards plus deeper specs: `bonding.md`, `semantic-zoom.md`, `motion.md`, `accessibility.md`, `coverage.md`.
- `ui_kits/lamp-canvas/` and `ui_kits/lamp-operations/` are full screen recreations to copy from.

## Non-negotiables

1. Agents are flat-top hexagons that snap edge-to-edge. Never rectangular nodes, never ports, never wires, never a flowchart.
2. Gold means active LAMP intelligence — selection, bonding, execution, Live. Primary buttons are graphite. Roughly 5% of a screen is gold.
3. Icons are Material Symbols Outlined as real SVG vectors. Never emoji, never Unicode glyphs, never a typed ligature.
4. Every status is colour **plus** icon/shape **plus** text.
5. Compact density: 32px controls, 32/40px rows, 8–12px internal padding, 14/20 body.
6. Quiet at rest. Animation only while something is actually running.
7. Configuration lives in the Inspector, not in modals.
