The Agent: a flat-top hexagon (w:h 1.1547:1). State lives in the border, an adjacent label and optional energy — never a full colour fill. Never a rectangle, never a connector port.

```jsx
<AgentHex name="Invoice Matcher" state="running" status="running" environment="live" />
<AgentHex name="Vendor Verifier" state="selected" detail="meta" roleLabel="Specialist" cost="$0.04" memoryActive tools={2} />
<AgentHex state="compatible" size="sm" detail="glyph" />
```

Follow semantic zoom with `detail`: glyph below 50%, name to 120%, meta above. The name always sits *beside* the hexagon, never inside it — long names stay legible at every size. Sizes xs/sm/md/lg/xl = 36/48/64/88/120px wide; md is the canvas default. Full configuration belongs in the Inspector, not on the object.

Hover, focus and the click target are the **hexagon only** — never the bounding box or the label beside it. That keeps two Agents sitting close together unambiguous.
