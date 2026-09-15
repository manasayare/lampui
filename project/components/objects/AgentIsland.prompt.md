A group inside a Playbook. **A Playbook is a section, not a single blob** — it can hold one bonded cluster, several islands working in parallel, and Agents working entirely on their own.

```jsx
<PlaybookCluster name="Vendor payment" state="live" layout="free" agents={6}>
  <AgentIsland name="Intake and matching" x={0} y={0}>
    <HexLattice size="md" gap={0} cells={bondedCells} overlay={bonds} />
  </AgentIsland>
  <AgentIsland name="Approval" note="human checkpoint" x={300} y={16}>
    <HexLattice size="md" gap={0} cells={approvalCells} />
  </AgentIsland>
  <AgentIsland solo name="Ledger Sync" note="runs after settlement" x={470} y={96}>
    <AgentHex name="Ledger Sync" status="error" state="failed" />
  </AgentIsland>
</PlaybookCluster>
```

Bonds only exist **within** an island — two islands in the same Playbook are related by membership, not by a wire. If a group needs its boundary shown, add `outlined`; otherwise let the spacing do the work.
