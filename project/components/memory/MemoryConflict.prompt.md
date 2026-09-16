Two remembered things that cannot both be true — use it in the Memory inspector, in an approval queue, and inline in chat when LAMP hits a contradiction mid-conversation.

```jsx
<MemoryConflict
  detail="Both were learnt from vendor onboarding runs."
  onPick={keep}
  onKeepBoth={scopeBoth}
  onInvestigate={openEvidence}
  claims={[
    { id: 'a', type: 'policy',          scope: 'lamp',
      fact: 'Vendor invoices over £10,000 need two approvers.',
      evidenceCount: 14, source: 'Finance policy', lastConfirmed: '6 weeks ago', confidence: 'high' },
    { id: 'b', type: 'observedPattern', scope: 'playbook',
      fact: 'Invoices from Aldergate Ltd are approved by one person.',
      occurrences: 9, source: 'Observed in runs', lastConfirmed: 'yesterday', confidence: 'medium' },
  ]}
/>
```

**Present it as a choice, never as an error.** LAMP does not know which claim is right — that is the entire reason the card exists. Both sides show their evidence, how often they were seen and when they were last confirmed, because that is what the decision actually turns on.

**`onKeepBoth` is usually the right answer, not a fallback.** The common conflict is a narrow scope having learnt a real exception to a broader policy. Picking a winner there destroys true information; scoping both keeps it. Offer it whenever the two claims sit at different scopes.

**Never auto-resolve, and never hide the losing claim.** Resolving records a decision — `resolved` + `resolution` states what was decided, and the audit trail keeps both claims.

Confidence is shown as a word on this card. Don't pass `confidenceValue` unless you are in a technical inspector context; percentages on an end-user decision surface imply a precision LAMP does not have.
