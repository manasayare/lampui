LAMP's only interface icon: **Material Symbols Outlined**, fetched as real SVG vectors and inlined so they inherit `currentColor`. Never a font ligature, never emoji, never a typed glyph.

```jsx
<Icon name="play_arrow" size={14} />
<Icon name="dangerous" size={16} label="Emergency stop" />
<BrandIcon slug="salesforce" size={20} />
```

Sizes 12/14/16/18/20/24, default 16. `BrandIcon` renders official third-party marks (Simple Icons fallback) and is the only place non-gold brand colour may appear. Object primitives are NOT icons — use AgentHex / SkillOrb / ToolTile. To vendor assets offline, repoint `MATERIAL_SYMBOLS_BASE` at a local directory.
