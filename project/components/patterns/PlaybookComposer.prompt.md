The dialog that opens when Agents are outlined into a Playbook — it arrives pre-filled from the standard process library, so the operator reviews rather than authors.

```jsx
<SnapField
  selectable
  agents={agents}
  selectedIds={selection}
  onSelectionChange={setSelection}
  onGroup={(ids) => setComposing(ids)}
  renderAgent={(a, f) => <AgentHex {...a} {...f} />}
/>

{composing ? (
  <PlaybookComposer
    agents={agents.filter((a) => composing.includes(a.id))}
    availableTools={connectedTools}
    onCreate={createPlaybook}
    onPreviewGenie={previewGenie}
    onCancel={() => setComposing(null)}
  />
) : null}
```

**It opens filled in, not blank.** LAMP matches the selection against `BUSINESS_PROCESSES`, proposes the best fit with its reasoning visible, and pre-fills name, purpose, trigger, connectors, outcomes and human checkpoints. People cannot specify a business process cold; they can correct one.

**Three rules the dialog enforces, and you should not work around:**

1. **Nothing is accepted silently.** Every pre-filled connector, outcome and checkpoint is a checkbox; unticked items never reach `onCreate`.
2. **The proposal is never the only option.** Other matches are one click away, the library is browsable, and "Something else" starts blank.
3. **Outcomes are required.** Create is disabled until at least one is chosen, and says why. A Playbook with no expected outcome cannot be simulated against anything and cannot be said to have failed.

**Pass `availableTools` whenever you have them.** Connector rows then show real connection state, so "this needs ERP write access and you don't have it" surfaces here — before the Playbook exists — instead of at the first failed run. Missing connectors are a warning, not a blocker: a draft Playbook is allowed to name access it does not yet hold.

`onCreate` receives a `ComposedPlaybook` with `createGenie` set from the checkbox. If it is true, run `BuildGenie` and show `GenieBlueprint` before writing anything — the operator agreed to a Genie, not to eleven unseen objects.

Everything produced here is a **draft**. Nothing runs until it is simulated.
