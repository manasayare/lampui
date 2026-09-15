Agent/Skill instruction editor: sans body text with inline VariableToken chips, an insertable token bar, and an optional footer for model/context metadata.

```jsx
<PromptEditor tokens={['vendor.name', 'invoice.total']} footer={<span>Uses Playbook memory</span>}>
  Match the invoice to <VariableToken name="vendor.name" /> then verify against <VariableToken name="sap.record" kind="entity" />.
</PromptEditor>
```

Unresolved variables render `kind="missing"` in red — never fail silently.
