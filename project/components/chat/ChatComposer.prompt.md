The composer. Three things make it user-friendly: the scope pill (you always know which Genie or Agent you are addressing), quick replies for the common answer, and voice for field users.

```jsx
<ChatComposer value={v} onChange={setV} onSend={send} scope="Finance Genie"
  quickReplies={[{ label:'Approve', icon:'check', tone:'primary' }, { label:'Ask for details' }, { label:'Reject', tone:'danger' }]}
  onAttach={attach} onVoice={record} />
```

Enter sends, Shift+Enter breaks the line. Disable it (`disabled`) while the environment is emergency stopped rather than letting messages queue silently.
