A Playbook is a *cluster*, not a flow: a 12px frame around a snapped Agent composition, title outside the top-left, mono facts along the bottom. No wires, no arrows, no node graph.

```jsx
<PlaybookCluster name="Vendor payment" state="live" agents={9} meta={['Last run 4m ago', '98% success', '2 checkpoints']}>
  <HexLattice cells={cells} overlay={bonds} />
</PlaybookCluster>
```

A Playbook behaves like a **section on a FigJam board**: a named, resizable frame you put things into. Its Agents may be one bonded cluster, several `AgentIsland` groups working in parallel, or Agents working entirely on their own — use `layout="free"` and position islands inside. `dropState` gives the drag-over feedback when an Agent is dragged in or out; `collapsed` reduces the section to its title row.

Inferred and observed Playbooks are dashed violet with a 4% tint so they never read as confirmed.
