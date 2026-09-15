Tool authorization: who is connected, what LAMP may do with it, who depends on it, and how healthy it is. Write scopes are always called out.

```jsx
<IntegrationCard name="Salesforce" provider="salesforce" account="finance@northwind.com" state="expired"
  permission="Write" risk="High" expiry="expired 2 days ago" usedBy={['Vendor Verifier','Payment Approver']}
  scopes={[{label:'Read accounts and opportunities'},{label:'Create and update opportunities',write:true}]}
  onReconnect={fix} onDisconnect={drop} />
```

Always name the dependent Agents — disconnecting a Tool breaks live automation.
