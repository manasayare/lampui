# Accessibility

Target: **WCAG 2.2 AA** minimum.

## Contrast

- Normal text 4.5:1; large text (≥ 19px semibold or ≥ 24px) and UI boundaries 3:1.
- **Gold is a border and fill colour, not a text colour on light surfaces.** Gold-tinted text uses `text.brand` (Gold 700/800) on light and Gold 300/400 on dark.
- Status backgrounds always pair with their matching `*-text` token, never with the core status colour as text.
- Disabled content sits at 40% opacity and is never the only carrier of meaning.

## No colour-only meaning

Every status carries **colour + icon/shape + text**. `StatusBadge` enforces this; `StatusDot` always has an `aria-label`. Permission cells, memory fact types, bond states and chart series all carry a glyph, a shape or a label in addition to colour.

## Keyboard

Everything is reachable and operable by keyboard, including the canvas. See the keyboard map in `readme.md`. Specific requirements:

- Canvas objects are tab-selectable with a visible gold focus ring; arrow keys move selection, `Enter` opens the Inspector.
- **Bonding has a non-drag alternative** (`B` bond mode, or Inspector → Add to Playbook). Any drag interaction in LAMP must have a keyboard equivalent.
- Dialogs trap focus and restore it on close; `Esc` always closes the topmost layer.
- The command palette is reachable from anywhere with `Cmd/Ctrl+K`.
- Roving tabindex inside trees, tab lists, menus and toolbars — one stop per group.

## Screen readers

- Object names include their type: "Invoice Matcher, Agent, running".
- Runs and simulations announce step changes through a polite live region; failures announce assertively.
- Charts carry a text summary (`ChartFrame` title + subtitle + footnote) and the underlying table is always reachable via the chart/table switch.
- Tables use real `th`/`aria-sort`; selection state is announced.

## Motion and density

- `prefers-reduced-motion` removes travelling energy, pulses and the Live sweep.
- Compact desktop controls never go below 32px; touch surfaces use 44px minimum (mobile nav 56px).
- High-contrast support: borders step to `border.strong`, all subtle backgrounds drop to surfaces, and energy glows become solid 1.5px borders.

## Content

- Errors state what happened, what did not happen, the impact and the recovery.
- Confidence is a word, not only a percentage, in end-user surfaces.
- Icon-only controls always have an accessible name.
