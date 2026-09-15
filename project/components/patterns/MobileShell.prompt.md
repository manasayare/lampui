Mobile is for operating, not building: approvals, activity, alerts, conversation, monitoring and emergency controls. No canvas, no composition, no configuration.

```jsx
<MobileShell title="Approvals" activeTab="approvals" onTab={setTab}
  tabs={[{id:'approvals',label:'Approvals',icon:'how_to_reg'},{id:'activity',label:'Activity',icon:'bolt'},{id:'safety',label:'Safety',icon:'shield'}]}
  banner={<EnvironmentBanner environment="live" scope="Finance Genie" />}>
  <ApprovalCard … />
</MobileShell>
```

Touch targets are 44px minimum here (56px nav), and density steps up to comfortable.
