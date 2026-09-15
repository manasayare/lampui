# UI kit — LAMP Operations

The operating surface: what is running, what needs a human, what is unsafe, and what LAMP has learned. This is the screen LAMP is used to *run* the business.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Entry point. Loads `styles.css`, React, Babel and `_ds_bundle.js`, then `OpsApp.jsx`. |
| `OpsApp.jsx` | Four views behind one shell: Runs, Approvals, Safety, Intelligence. |

## Views

**Runs** — operational metrics, stacked outcome chart, Agent-workload hive heatmap, a compact run table with selection and bulk actions, and a 400px Run Inspector with Overview / Timeline / Cost tabs (structured failure, execution trace, context breakdown, latency).

**Approvals** — the human-in-the-loop queue: a financial approval with evidence, a multiple-choice entity-resolution decision, a critical destructive confirmation, plus the queue list and weekly decision metrics.

**Safety** — Genie-level Pause / Safe stop / Emergency stop, an emergency-stopped Genie in its recovery state, the go-live readiness gate, an expired Tool authorization, and Tool health rows.

**Intelligence** — an observed pattern with evidence and a choice, the observed process as a structured sequence (with exception and rework steps), memory-retrieval and confidence-distribution charts, and a LAMP-scope policy fact.

## Interactions

Switch views from the rail or the segmented control in the environment bar · click a run row to load it into the Inspector · switch Inspector tabs · select rows for bulk actions · trigger **Emergency stop** to arm the kill switch.
