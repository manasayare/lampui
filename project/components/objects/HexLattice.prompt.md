Places Agents on the hexagonal snap lattice so compositions read as assembled, not diagrammed. This is the only sanctioned way to arrange Agents.

```jsx
<HexLattice size="md" gap={2} cells={[
  { col: 0, row: 0, node: <AgentHex name="Intake" /> },
  { col: 1, row: 0, node: <AgentHex name="Matcher" state="running" /> },
]} />
```

`gap={0}` for bonded clusters shown at `detail="glyph"`, `2` at rest, and **20–24 whenever Agent names are visible** — labels need room or they collide with neighbours. The bond seam sits in that gap, which makes bonds read more clearly, not less. Use `HexCenter(col,row,size,gap)` to anchor BondEdge overlays (`hexCenter` is the same function, for sibling imports).
