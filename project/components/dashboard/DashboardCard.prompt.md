The dashboard card, structured the way shadcn/ui does it — header (title + description + actions), content, optional footer — with LAMP's 8px radius, 1px border and flat surface.

```jsx
<DashboardGrid columns={3}>
  <DashboardCard title="Execution outcomes" description="Last 30 days" span={2} flush>
    <ChartFrame flush><BarChart … /></ChartFrame>
  </DashboardCard>
  <DashboardCard title="Tool health" actions={<IconButton icon="more_horiz" label="More" size="sm" />} footer="8 of 9 Tools healthy" flush>
    <ToolRow … />
  </DashboardCard>
</DashboardGrid>
```

Use `flush` for tables and charts so they meet the card edge. Charts inside a DashboardCard use `<ChartFrame flush>` — never two nested frames.
