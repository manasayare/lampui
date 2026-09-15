Dashboard page scaffolding in the shadcn/ui shape: page title + description + actions, an optional toolbar row, then sections of cards.

```jsx
<DashboardPage
  header={<PageHeader title="Finance Genie" description="Vendor payments, reconciliation and month-end close."
    meta={<><EnvironmentPill environment="live" /><Badge outline>23 Agents</Badge></>}
    actions={<><Button size="sm" variant="secondary" icon="science">Simulate</Button><Button size="sm" variant="brand" icon="bolt">Go live</Button></>} />}
  toolbar={<FilterBar>…</FilterBar>}>
  <StatGrid>…</StatGrid>
  <SectionHeader title="Execution" />
  <DashboardGrid columns={2}>…</DashboardGrid>
</DashboardPage>
```

Page padding is 20px; sections are 16px apart; cards 12px apart.
