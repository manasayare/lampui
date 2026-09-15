The right dock. Content is driven entirely by what is selected — Agent, Playbook, Skill, Tool, Memory — and nothing configures an object outside it.

```jsx
<InspectorPanel title="Invoice Matcher" subtitle="Finance Genie / Vendor payment" glyph="hexagon"
  badges={<StatusBadge status="running" />} tabs={<Tabs …/>} footer={<Button variant="primary" size="sm">Save</Button>}>
  <InspectorSection label="Purpose">…</InspectorSection>
</InspectorPanel>
```

320px default, resizable 280–480px. Advanced configuration stays collapsed behind an `advanced` section.
