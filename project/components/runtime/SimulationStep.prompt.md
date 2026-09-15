One step of a simulation run — use it in place of `RunStep` whenever the timeline is a simulation, never for live execution.

```jsx
<SimulationStep
  index={3}
  state="blocked"
  title="Post payment batch"
  actor="Payment Approver"
  tools={['SAP']}
  blockedReason="Would write to SAP. Simulation does not make external writes."
  duration="0.4s"
/>
```

**A simulated step is not a live step in a different colour.** Two states exist only here and both are stamped as micro uppercase labels, not implied by a tint: `mocked` (the Tool was never called — `mockedValue` is a stand-in) and `blocked` (the step would have written externally and simulation stopped it). An operator reading numbers off a timeline has to know which ones are real without having learnt a colour code.

**`divergence` is the payoff.** Pass it with `expected` when the simulated outcome differs from the recorded live behaviour, and the step shows both, labelled — that difference is usually the reason the simulation was run at all.

Everything else — chips, durations, token counts, the index bubble — is `RunStep`, so a simulation timeline and a live timeline line up column for column and can be read side by side.

Wrap a list of these in `SimulationBar`'s drawer or a plain container; there is no `SimulationTimeline` because `RunTimeline` already renders any step component you hand it.
