Auto-creates the Genie a business process belongs to, and shows everything it would contain before any of it exists.

```jsx
const blueprint = BuildGenie(process, { agents: selectedAgents });

<GenieBlueprint
  blueprint={blueprint}
  excluded={skipped}
  onTogglePlaybook={toggleSkip}
  onCreate={commitGenie}
  onCancel={justThePlaybook}
/>
```

**Why a Genie and not just a Playbook.** The processes inside a capability are not a random collection — a business running procure-to-pay almost always also runs record-to-report and expense claims, and they share vendors, a ledger, an approval hierarchy and a definition of materiality. Setting the capability up around the first defined process saves the operator discovering the other three months later, badly.

**Show the blueprint before you write anything.** "LAMP created eleven objects while you weren't looking" is the opposite of the trust this product needs. Every Playbook, every Agent role and every access grant is listed, and `onTogglePlaybook` lets the operator drop the suggestions they don't want. Only the primary Playbook cannot be skipped — it is the one they just defined.

**Everything is a draft.** Nothing is live, nothing is connected, nothing runs. The connector list is what the Genie will *ask for*; creating it authorizes none of it, and the card says so.

**Guardrails are not suggestions.** A Genie created this way starts with its domain's safety posture already on: no external write without a human checkpoint, spend authority unset rather than unlimited, and a kill switch scoped to the Genie from the moment it exists. Don't render a blueprint with `guardrails` stripped out.

`BuildGenie` is inert and returns a plain object — render it, diff it, edit it, or throw it away. It returns `null` for a process with no domain, so `GenieBlueprint` safely renders nothing.
