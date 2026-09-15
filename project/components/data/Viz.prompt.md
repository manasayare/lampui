The single entry point for any LAMP visualization, including AI-generated analysis. Ask for a type; the system picks the renderer tier, applies LAMP tokens and wraps it in ChartFrame.

```jsx
<Viz type="area" title="Runs per day" subtitle="Last 30 days" series={[{data:runs}]} labels={days} />
<Viz type="hbar" title="Cost by Agent" labels={names} series={[{data:cost}]} format={(v)=>'$'+v} />
<Viz type="hive" title="Agent workload" cells={cells} />
```

Tiers: **standard** shadcn Charts + Recharts, **advanced** Apache ECharts, **native** visx (LAMP-specific geometry), **realtime** uPlot. Never mix library defaults into a screen — the user should never be able to tell which renderer ran.
