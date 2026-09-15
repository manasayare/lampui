The execution trace for a simulation or live run: numbered steps with state, the Agent and Tools involved, memory used, duration, tokens and cost.

```jsx
<RunTimeline steps={[
  { state:'success', title:'Invoice extracted', actor:'Invoice Matcher', tools:['Google Drive'], duration:'1.2s', tokens:'812' },
  { state:'waitingHuman', title:'Approval required', detail:'Above the Agent authority limit.', actor:'Payment Approver' },
  { state:'failed', title:'Salesforce write failed', detail:'Credentials expired. No records were created.', tools:['Salesforce'] },
]} />
```

Expose observable execution, decisions, tools, state, policy and memory — never hidden chain-of-thought.
