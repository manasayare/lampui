One row for every LAMP list — AgentList, PlaybookList, ToolList, MemoryList, RunList, ApprovalQueue, ActivityList, AuditLog, MemberList. Don't invent per-feature rows.

```jsx
<ObjectList>
  <ObjectRow kind="run" name="Vendor payment" secondary="Triggered by schedule" status="error" timestamp="14:32:08" />
  <ObjectRow kind="agent" name="Invoice Matcher" secondary="Specialist" status="running" compact />
</ObjectList>
```

40px default, 32px compact. Order is always glyph → name/secondary → badges → status → timestamp → actions.
