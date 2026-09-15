A message in the LAMP thread. Agents carry a hexagonal avatar, their work is visible as tool/memory chips above the text, and claims carry openable evidence pills.

```jsx
<ChatMessage role="agent" author="Vendor Verifier" roleLabel="Specialist" initials="VV" timestamp="14:02" state="acting"
  activity={[{ kind:'tool', label:'SAP', duration:'0.9s' }, { kind:'memory', label:'Genie memory' }, { kind:'tool', label:'Salesforce', state:'failed' }]}
  citations={[{ index:1, source:'SAP · PO-9921' }, { index:2, source:'Genie memory' }]}
  attachment={<ApprovalCard … />} onInspect={open}>
  The invoice total is ₹4,200 higher than PO-9921. I have not paid anything yet.
</ChatMessage>
<ChatMessage role="user" initials="AR" timestamp="14:04" status="Delivered">Use the revised PO.</ChatMessage>
<ChatMessage role="tool" author="SAP" timestamp="14:02">GET /purchase-orders/9921 → 200</ChatMessage>
```

Use `grouped` for consecutive messages from one author, `streaming` while text is arriving, and `attachment` to put a decision *in* the thread rather than in a modal. Never surface hidden reasoning — activity chips show observable calls only.
