Makes Agents on the canvas **draggable and snapping**. Agents drag freely; within the snap tolerance they drift magnetically toward the nearest free lattice slot, the slot shows as a dashed hexagonal guide, and on release they commit to it.

```jsx
<SnapField agents={agents} size="md" gap={22} onChange={setAgents} selectedId={sel} onSelect={(a) => setSel(a.id)}
  onSnapStateChange={setSnapState}
  bonds={<BondLayer width={340} height={150}>{bondEdges}</BondLayer>}
  renderAgent={(a, f) => <AgentHex name={a.name} state={a.state} detail={f.dragging ? 'glyph' : 'name'} onClick={() => {}} />} />
```

The lattice itself is never drawn — only the candidate slot, and only during a drag. `onSnapStateChange` gives you `dragging` / `snapReady` / `idle` for the status line, sound hooks and the bond preview.

**Keyboard equivalent is built in:** with an Agent focused, the arrow keys move it one lattice cell at a time and occupied cells are refused. Never ship a canvas where composition is pointer-only — see `guidelines/bonding.md`.
