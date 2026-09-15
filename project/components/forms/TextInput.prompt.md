The text control family: TextInput, SearchInput (leading search glyph + shortcut hint), NumberInput (mono, tabular), SecretField (masked with reveal).

```jsx
<TextInput placeholder="Agent name" />
<SearchInput shortcut="/" placeholder="Search LAMP" />
<NumberInput value={5000} suffix="USD" />
<SecretField value="sk_live_8f21…" expiring />
```

32px default height, 6px radius, gold focus ring. Wrap in `Field` for labels and messages.
