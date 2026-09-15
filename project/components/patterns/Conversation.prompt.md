Lightweight operational conversation — used where people work with Agents by message rather than on the canvas. Agent avatars are hexagonal; Tool and system messages are quiet.

```jsx
<MessageList>
  <Message role="agent" author="Vendor Verifier" timestamp="14:02">Meridian's invoice does not match PO-9921.</Message>
  <Message role="tool" author="SAP" timestamp="14:02">GET /purchase-orders/9921 → 200</Message>
  <Message role="user" timestamp="14:04">Use the revised PO.</Message>
</MessageList>
<Composer quickReplies={['Approve','Reject','Ask for details']} onSend={send} onVoice={rec} />
```

Put decisions in an ApprovalCard inside the thread rather than asking for free text.
