The one status system. Pass a LAMP status key and it renders the canonical colour + icon + label, so status is never colour-only.

```jsx
<StatusBadge status="running" />
<StatusBadge status="needsHuman" mode="label" />
<StatusDot status="live" pulse />
```

Statuses: draft, observed, inferred, learning, simulation, validated, ready, live, running, waiting, attention, needsHuman, paused, stopped, error, killed, success, skipped, mocked, blocked, disabled. Never invent a new badge style for a state that exists here.
