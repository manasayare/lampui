A labelled, editable field at Inspector density — use it for anything in the Inspector the operator can change, so it lines up with the read-only `PropertyRow`s around it.

```jsx
<InspectorSection label="Authority">
  <PropertyRow label="Scope" value="Finance Genie" />
  <InspectorField label="Spend limit" htmlFor="limit" inherited inheritedFrom="Finance Genie">
    <NumberInput id="limit" value={limit} onChange={setLimit} prefix="£" />
  </InspectorField>
  <InspectorField label="Escalate to" htmlFor="esc" hint="Who receives approvals this Agent cannot make itself.">
    <Select id="esc" value={owner} onChange={setOwner} options={people} />
  </InspectorField>
</InspectorSection>
```

**Use this, not `forms/Field`, inside the Inspector.** Field stacks its label above the control for a form being filled in. InspectorField puts the label in the same 104px column `PropertyRow` uses, so a section can mix read-only and editable rows without the labels stepping out of line. That alignment is the whole point — an Inspector where half the labels sit in a different place reads as two panels bolted together.

**`inherited` and `overridden` are stated in words**, never implied by a tint. `inheritedFrom` names the source, which is what makes an override decision possible: "Inherited from Finance Genie" tells the operator what they are about to depart from.

`stack` moves the label above the control — for textareas, `PromptEditor` and `CodeFrame`, where a 104px column would leave the control unusably narrow.

`advanced` dims the label for configuration most operators should not touch; put those in an `InspectorSection advanced` so they start collapsed too. Progressive disclosure is a section-level decision first and a field-level one second.
