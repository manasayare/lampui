One row showing what something is made of — use it wherever the question is composition, not change over time.

```jsx
<StackedBar
  legend
  showTotal
  unit="tokens"
  segments={[
    { key: 'agent',    label: 'Agent working memory', value: 618 },
    { key: 'playbook', label: 'Playbook memory',      value: 402 },
    { key: 'genie',    label: 'Genie memory',         value: 771 },
  ]}
/>
```

**Use this, not `<BarChart stacked>`, for a single subject.** BarChart is a categorical chart with axes and ticks across many groups — reach for it when you are comparing weeks or Playbooks. StackedBar is one bar, small enough for an inspector row or a table cell, where a chart would not fit and axes would be noise.

**Values are absolute; the bar normalizes them.** Pass `total` explicitly only when you want visible headroom — a context window that is 40% used should pass the window size as `total` so the empty 60% reads as capacity.

`inlineValues` prints the number inside each segment, but only where the segment is at least `minLabel` (8%) of the total — a number crammed into a 3px sliver is noise, not data.

`muted` drops a segment to 45% for something present but not the point of the chart. `legend` + `showTotal` gives the full read-out; both are off by default because the common use is a bare bar next to a label.

For the specific case of a run's context window, use **`ContextBreakdown`** instead — it wraps this with the scope ordering, the standard labels and the cache row.
