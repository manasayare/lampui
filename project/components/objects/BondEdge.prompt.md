The bond between two Agents: membership and composition, not a data wire. Short, straight, edge-to-edge, with a junction dot — no beziers, no arrowheads, no ports.

```jsx
<HexLattice size="md" cells={cells} overlay={
  <BondLayer width={260} height={120}>
    <BondEdge from={hexCenter(0,0)} to={hexCenter(1,0)} state="valid" energy environment="live" />
    <BondEdge from={hexCenter(1,0)} to={hexCenter(2,0)} state="suggested" />
  </BondLayer>
} />
```

Suggested/learned bonds are dashed violet so they never read as confirmed. `energy` only while that bond is carrying execution.
