Collapsible Inspector section plus the 32px property row used inside it. Also serves as PropertyGrid / Accordion / DetailsPanel.

```jsx
<InspectorSection label="Authority" count={3}>
  <PropertyRow label="Approval limit" value="₹50,000" mono />
  <PropertyRow label="Escalation" value={<EntityChip type="person" name="Asha Rao" initials="AR" />} />
  <PropertyRow label="External writes" inherited value="Allowed" />
</InspectorSection>
<InspectorSection label="Advanced" advanced>…</InspectorSection>
```
