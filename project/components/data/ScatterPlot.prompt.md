Two measures against each other: process frequency vs automation potential, latency vs cost, confidence vs volume.

```jsx
<ChartFrame title="Automation potential" subtitle="Observed processes">
  <ScatterPlot xLabel="Frequency / month" yLabel="Manual effort" quadrant={{x:40,y:20}} points={processes} />
</ChartFrame>
```

Beyond a few hundred points, render on the ECharts tier with this same prop shape.
