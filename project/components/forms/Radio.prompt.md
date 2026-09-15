Exclusive choice where each option needs a description — approval modes, escalation paths.

```jsx
<RadioGroup name="decision" value={v} onChange={setV} options={[
  { value: 'approve', label: 'Approve and continue' },
  { value: 'edit', label: 'Edit before approving', description: 'Opens the payload for correction.' },
]} />
```
