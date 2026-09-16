The popup that opens when an Agent is dropped on the canvas — use it for every Agent creation route, drag and non-drag alike.

```jsx
{pending ? (
  <NewAgentDialog
    archetype={pending.archetype}
    cell={pending.cell}
    availableTools={tools}
    onCancel={() => setPending(null)}
    onCreate={(draft) => {
      setAgents(agents.concat([{ id: nextId(), ...draft }]));
      setPending(null);
    }}
  />
) : null}
```

## Two rules it enforces

**A name is required.** Everything else has a workable default; a name does not, because "Agent 4" on a canvas of thirty tells a reader nothing. The primary action stays disabled and the footer says why.

**Authority starts at its lowest.** A new Agent is created with `authority: 'propose'` and `state: 'unconfigured'`, always. It proposes; it does not act. Raising that is a deliberate, separate decision in the Inspector, never a default carried in from a template — which is exactly the mistake a templating system makes if you let the archetype set it.

## Pre-filled, not blank

The archetype supplies the name, role, purpose, Skills and Tools. The operator confirms or corrects, which is a job people can do; authoring from blank is one they mostly cannot. Drop a different archetype without closing the dialog and every field re-seeds.

## Where it lands is already decided

The drop resolved the point to a free lattice cell before the dialog opened, so `cell` is **shown, not asked**. Passing no cell is legal but leaves the operator without that confirmation — pass one.

## The checkpoint

"A person decides before this Agent acts" adds a human checkpoint. Tick it by default in the archetype for anything that spends money or writes to a system of record.
