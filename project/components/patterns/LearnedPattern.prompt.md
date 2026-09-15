LAMP reporting what it learned about the business. Calm, evidence-first, always with a way to accept, inspect or reject.

```jsx
<LearnedPattern kind="observed" occurrences={23} period="6 weeks" confidence="high"
  observation="Vendor approvals usually happen through WhatsApp before they are entered in SAP."
  evidence={['WhatsApp · 23 threads','SAP · 21 matching records']}
  entities={<><EntityChip type="vendor" name="Meridian Supplies" /><EntityChip type="person" name="Asha Rao" initials="AR" /></>}
  onUse={accept} onReview={review} onIgnore={ignore} />
```

Dashed violet frame — the same language as inferred Playbooks, so nothing learned ever looks confirmed.
