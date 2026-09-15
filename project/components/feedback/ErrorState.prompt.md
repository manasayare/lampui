Every LAMP error answers four questions in this order: what happened, what did not happen, the impact, and the recovery action.

```jsx
<ErrorState title="Salesforce write failed"
  happened="The connection was rejected after 3 attempts."
  notHappened="No opportunity records were created or modified."
  impact="4 invoices are waiting in the Vendor payment Playbook."
  recovery="Reconnect the Salesforce account, then retry the run."
  code="tool_auth_expired · run_8f21c4" onRetry={retry} />
```

Covers tool failure, authorization failure, Agent failure, Playbook failure, partial completion, memory conflict, connection loss, permission denied, simulation failure, live failure.
