# Assets

## What is here

Nothing yet, deliberately.

## What is missing, and why

**No logo or brand mark was supplied with the brief, and none was drawn.** Inventing a company's mark is worse than having none, so wherever a mark would go, LAMP is set as a wordmark in Geist Sans 600 with +0.14em tracking. See `guidelines/brand-wordmark.card.html` for the three approved treatments.

Places that render the wordmark today, and would use a real mark instead:

- `thumbnail.html` — the design-system tile
- `components/navigation/GlobalHeader.jsx` — the `brand` slot default
- `ui_kits/lamp-canvas/index.html` and `ui_kits/lamp-operations/index.html` — via `WorkspaceSwitcher`

To add the real mark: drop `assets/logo.svg` (and `logo-mono.svg` if you have it) here, then pass it into `GlobalHeader`'s `brand` prop and swap the wordmark in `thumbnail.html`.

## Fonts

**Geist Sans** and **Geist Mono** are loaded from Google Fonts in `tokens/fonts.css`, because no font binaries were supplied. These are the families the brief specifies, not substitutes. To self-host, put the `.woff2` files in `assets/fonts/` and replace the `@import` in `tokens/fonts.css` with local `@font-face` rules — no other file needs to change.

## Icons

**Material Symbols Outlined (weight 400)** are fetched as real SVG vectors from `cdn.jsdelivr.net/npm/@material-symbols/svg-400/outlined/` and inlined by the `Icon` component so they inherit `currentColor`. They are never rendered as font ligatures or text.

**Third-party provider marks** (Gmail, Salesforce, SAP, Drive, WhatsApp) come from the official Simple Icons set at `cdn.jsdelivr.net/npm/simple-icons@13/icons/` via `BrandIcon`. Where a provider publishes its own brand asset, vendor that instead and point `BrandIcon` at it.

To vendor icons offline, `npm i @material-symbols/svg-400 simple-icons`, copy the SVGs into `assets/icons/` and `assets/brands/`, then repoint `MATERIAL_SYMBOLS_BASE` and `BRAND_ICON_BASE` in `components/core/Icon.jsx`. No other change is needed.

## No imagery

LAMP uses no photography, illustration, texture or gradient. The only patterned surface in the product is the canvas dot grid, which is generated from tokens. Empty states use a small Material Symbol, never an illustration.
