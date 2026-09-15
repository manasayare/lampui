Every LAMP chart sits in this shell: title, optional legend, the plot, and a footnote. It also owns the loading, empty and error states so charts never invent their own.

```jsx
<ChartFrame title="Execution success" subtitle="Last 30 days · Live only" height={180}
  legend={[{label:'Live'},{label:'Simulation',color:'var(--dataviz-2)'}]} legendVariant="line"
  footnote="Dashed line marks the 95% target.">
  <LineChart series={series} />
</ChartFrame>
```

Gold is always the primary series and blue the comparison; `seriesColor(i)` gives the categorical order.
