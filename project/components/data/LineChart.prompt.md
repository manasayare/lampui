Trends over time: execution success, runtime, cost, token usage, latency, automation rate. Wrap in ChartFrame for title, legend and states.

```jsx
<ChartFrame title="Cost per run" subtitle="Last 30 days" legendVariant="line" legend={[{label:'Live'},{label:'Simulation',color:'var(--dataviz-2)',dashed:true}]}>
  <LineChart variant="area" labels={days} thresholds={[{value:0.2,label:'Budget'}]}
    series={[{data:live},{data:sim,color:'var(--dataviz-2)',dashed:true}]} />
</ChartFrame>
```

In production this maps to Recharts; for very dense realtime telemetry (thousands of points) switch to the uPlot tier and keep this API.
