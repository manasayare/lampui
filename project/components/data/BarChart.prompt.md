Comparison, ranking, composition and distribution: Playbook frequency, Agent workload, cost by Genie, confidence distribution, exception frequency, run outcomes.

```jsx
<ChartFrame title="Cost by Playbook" subtitle="Last 7 days">
  <BarChart orientation="horizontal" showValues labels={names} series={[{data:costs}]} format={(v)=>'$'+v} />
</ChartFrame>
<BarChart stacked labels={days} series={[{label:'Success',data:ok,color:'var(--dataviz-3)'},{label:'Failed',data:bad,color:'var(--chart-failure)'}]} />
```

Use horizontal bars whenever the category labels are words. Normalized stacks only for share-of-total.
