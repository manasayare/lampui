LAMP's conversational surface — for people who operate the business by message rather than on the canvas (field staff, approvers, mobile, low-literacy users).

What makes it LAMP's and not a generic chatbot:

- **Hexagonal crew.** The header shows which Agents are in the thread as overlapping hexagons; the acting one is gold-ringed.
- **Visible work.** Tool calls and memory reads appear as chips above each message, so the user sees what was actually done.
- **Openable provenance.** Claims carry evidence pills instead of asking for trust.
- **Decisions in the thread.** Approvals are `attachment` cards, not modals.
- **An honest status line.** ChatStatus says who is working, on what, with a Stop button — and says plainly when nothing is running.
- **Always-visible scope.** The composer states which Genie you are addressing.

```jsx
<AgentChat title="Vendor payment" scope="Finance Genie" environment="Live"
  crew={[{ name:'Vendor Verifier', initials:'VV', state:'acting' }, { name:'Payment Approver', initials:'PA' }]}
  status={<ChatStatus state="working" author="Vendor Verifier" action="is checking SAP" tokens="1,204 tokens" onStop={stop} onInspect={openRun} />}
  composer={<ChatComposer scope="Finance Genie" quickReplies={['Approve','Ask for details']} onSend={send} />}>
  <ChatDayDivider label="Today" />
  <ChatMessage role="agent" author="Vendor Verifier" initials="VV" timestamp="14:02" activity={[{kind:'tool',label:'SAP',duration:'0.9s'}]}>…</ChatMessage>
</AgentChat>
```

Never use it as the primary builder surface — composition happens on the canvas.
