Density over two dimensions: Agent activity by hour, Tool reliability by day, memory retrieval frequency, exception clusters, permission matrices.

```jsx
<ChartFrame title="Agent activity" subtitle="Runs per hour, last 7 days">
  <Heatmap rows={days} columns={hours} values={matrix} ramp="gold" />
</ChartFrame>
```

Five discrete steps, never a continuous gradient. Large matrices render on the ECharts tier with the same props.
