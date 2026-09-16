The standard business process library, plus the matcher that recognises one from a set of Agents — use it anywhere LAMP should propose what a process is instead of asking.

```jsx
const matches = MatchProcess({ agents: selectedAgents, tools: connectedTools });

<ProcessProposal
  match={matches[0]}
  onUse={useProcess}
  onDismiss={() => setBrowsing(true)}
/>
```

**Why this exists.** Asking an operator to name a process, list its connectors and define its expected outcomes on a blank form gets you a blank form back — or a Playbook running in production that nobody defined success for. Every entry here carries the steps, the connector categories, the human checkpoints, the exceptions that actually happen, and the expected outcomes with how they are measured. That is enough to pre-fill a definition the operator only has to correct.

**A match is a suggestion with its reasoning attached, never a result.** `evidence` says what it matched on — which roles it recognised, which signals fired — so the proposal can be argued with. Always render it, and always offer `onDismiss`; a proposal you cannot reject is a decision made for you.

**Confidence is coarse on purpose.** Word overlap is a decent hint and a terrible measurement, so it is reported as `high` / `medium` / `low` and never as a percentage on an end-user surface. Don't dress it up.

**`MatchProcess` returns only non-zero scores** — an unrecognised selection returns `[]`, and the calling surface should fall back to browsing the library or `BLANK_PROCESS`. Never force a bad match on an empty result.

Connectors are **categories, not vendors** ("ERP", not "SAP"), with candidate `providers` beneath. A business runs one ERP, not the list — the category is the requirement and the provider is the instance.

Use with **`PlaybookComposer`**, which wires the whole flow, and **`BuildGenie`** to create the capability the process belongs to.
