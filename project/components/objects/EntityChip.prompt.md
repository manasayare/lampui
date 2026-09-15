A reference to something in the business: a person, vendor, invoice, policy, channel. One chip type for all of them — the glyph carries the kind.

```jsx
<EntityChip type="vendor" name="Meridian Supplies" />
<EntityChip type="person" name="Asha Rao" initials="AR" />
<EntityChip type="policy" name="Vendor approval > ₹50,000" showType />
```

Use inside memory facts, run traces, approvals and search results. Not for LAMP objects — those use ObjectRow or their own primitive.
