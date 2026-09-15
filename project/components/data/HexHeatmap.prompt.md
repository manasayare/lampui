LAMP's own visualization: the hive itself as the chart. One hexagon per Agent slot, shaded by load, cost, exception count or human-intervention rate — so analytics keep the product's geometry.

```jsx
<ChartFrame title="Agent workload" subtitle="Runs today · Finance Genie">
  <HexHeatmap cells={agents.map(a => ({ col:a.col, row:a.row, value:a.runs, label:a.name }))} ramp="gold" />
</ChartFrame>
```

Use for workload constellations, Genie composition maps, automation coverage and exception clusters. Not a substitute for a bar chart when exact comparison matters.
