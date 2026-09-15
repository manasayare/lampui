Label / description / control / message wrapper. Every form control in LAMP is wrapped in one.

```jsx
<Field label="Authority limit" description="Maximum value this Agent can approve without a human." error="Must be below the Genie limit.">
  <TextInput value="5,000" suffix="USD" />
</Field>
```

Use `layout="row"` inside the Inspector (32px rows). Messages replace helper text; only one message tone at a time.
