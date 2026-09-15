A single operational figure: automation rate, runs today, human touches, cost per outcome, p95 latency.

```jsx
<MetricCard label="Automation rate" value="94.2" unit="%" delta="+2.1%" deltaLabel="vs last 7 days" />
<MetricCard label="Cost per outcome" value="$0.14" delta="-9%" deltaTone="positive" deltaLabel="vs last 7 days" />
```

Up is not automatically good. The arrow follows `deltaDirection`; the colour follows `deltaTone`. Falling cost is `deltaDirection="down" deltaTone="positive"`; rising exceptions are `deltaDirection="up" deltaTone="negative"`.
