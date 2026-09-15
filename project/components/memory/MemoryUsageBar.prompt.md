Where a run's context came from — the stacked bar plus a mono breakdown. Also used for TokenUsage and ContextBreakdown.

```jsx
<MemoryUsageBar segments={[
  { key:'agent', label:'Agent working memory', value:618 },
  { key:'playbook', label:'Playbook memory', value:402 },
  { key:'genie', label:'Genie memory', value:771 },
  { key:'lamp', label:'LAMP memory', value:340 },
  { key:'evidence', label:'Retrieved evidence', value:1281 },
]} />
```

Keep it informational, not financial-dashboard-like.
