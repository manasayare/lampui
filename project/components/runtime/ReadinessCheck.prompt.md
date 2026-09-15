The gate before Go live, and the same pattern for deployment, migration and compliance checks.

```jsx
<ReadinessCheck checks={[
  { label:'Simulation passed on 120 historical cases', state:'passed', detail:'98% match' },
  { label:'Salesforce authorization', state:'failed', detail:'Credentials expired', action:<Button size="xs" variant="secondary">Reconnect</Button> },
  { label:'Human checkpoints defined', state:'warning', detail:'No escalation owner' },
]} />
```

A failed check blocks Go live; a warning requires explicit acknowledgement.
