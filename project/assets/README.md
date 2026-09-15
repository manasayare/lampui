# Assets

## What is here

| Path | What | Count |
| --- | --- | --- |
| `icons/` | Material Symbols Outlined, weight 400, as SVG | 159 |
| `brand/` | Third-party provider marks from Simple Icons | 19 |
| `fonts/` | Geist Sans and Geist Mono, `.woff2` | 5 faces |
| `manifest.json` | What was copied, and by what | — |

Everything here is **generated** by `tools/vendor-assets.mjs`. Don't hand-edit it; add the icon name to a component and re-run:

```
npm run assets     # copies what the source actually references
npm run check      # fails if a component names an icon that is not here
```

Only the glyphs the system references are copied, not the 7,000-icon set. The script takes every quoted lowercase token in the source and keeps the ones that are real icon names — matching call sites with a regex silently misses forms like `icon={cond ? 'a' : 'b'}`, and an under-copied icon ships as an invisible gap in a toolbar.

## Why vendored rather than CDN

The handoff loaded fonts from Google Fonts and icons from jsDelivr at runtime. That is fine in a design tool and wrong in an enterprise operating console: it makes every screen depend on two third parties being reachable, and a blocked request renders a placeholder box where a control's meaning should be.

`Icon` derives the asset root from the bundle's own `<script src>`, so a card three directories deep and a kit two directories deep both resolve without configuring anything. Set `window.LAMP_ASSET_BASE` before the bundle loads to serve them from elsewhere. The CDN URLs survive only as a last resort for a bundler-built app where there is no `_ds_bundle.js` tag to read.

## Fonts

**Geist Sans** and **Geist Mono**, self-hosted from `tokens/fonts.css`. Weights 400/500/600 only — the brief rules out light weights and calls 700 rare enough not to ship by default. Add a face by extending `FACES` in `tools/vendor-assets.mjs` and the `@font-face` block in `tokens/fonts.css`.

## Icons

**Material Symbols Outlined (weight 400)**, inlined by the `Icon` component so they inherit `currentColor`. Never font ligatures, never text.

Two names from the original handoff did not exist in this Material Symbols release and were rendering as placeholder boxes: `auto_awesome` (now `flare`) and `slash` (a Lucide name; now `terminal`). `npm run check` now fails on any icon that is not vendored, so that class of defect cannot return silently.

**Provider marks** come from Simple Icons via `BrandIcon`. **Simple Icons carries no Microsoft marks**, so Outlook, Excel and SharePoint fall back to the generic Tool glyph — a gap in the icon set, not in the system. A connector is a *category* ("Email"), and a business running Outlook still matches it. Where a provider publishes its own brand asset under terms you can use, drop it in `brand/` and it wins.

## What is missing, and why

**No logo or brand mark was supplied with the brief, and none was drawn.** Inventing a company's mark is worse than having none, so wherever a mark would go, LAMP is set as a wordmark in Geist Sans 600 with +0.14em tracking. See `guidelines/brand-wordmark.card.html` for the three approved treatments.

Places that render the wordmark today, and would use a real mark instead:

- `thumbnail.html` — the design-system tile
- `components/navigation/GlobalHeader.jsx` — the `brand` slot default
- `ui_kits/lamp-canvas/index.html` and `ui_kits/lamp-operations/index.html` — via `WorkspaceSwitcher`

To add the real mark: drop `assets/logo.svg` (and `logo-mono.svg` if you have it) here, then pass it into `GlobalHeader`'s `brand` prop and swap the wordmark in `thumbnail.html`.

## No imagery

LAMP uses no photography, illustration, texture or gradient. The only patterned surface in the product is the canvas dot grid, which is generated from tokens. Empty states use a small Material Symbol, never an illustration.
