Drag-to-snap composition on the hexagonal lattice, on GSAP Draggable — use it for any canvas where Agents are arranged by hand.

```jsx
<SnapField
  selectable
  agents={agents}
  onChange={setAgents}
  selectedId={selected}
  onSelect={(a) => setSelected(a.id)}
  selectedIds={marquee}
  onSelectionChange={setMarquee}
  onGroup={(ids) => openComposer(ids)}
  onSnapStateChange={setSnapState}
  bonds={<BondLayer bonds={bonds} />}
  renderAgent={(agent, flags) => <AgentHex {...agent} {...flags} />}
/>
```

## Snapping

**Agents cannot overlap, by construction.** A cell holding another Agent is excluded before the distance search runs, so an occupied slot can never be chosen, lit, or committed to. If a drag ends with no free cell in range, the Agent returns where it came from. Because positions are lattice cells rather than free pixels, two Agents cannot partially overlap either.

**Legal cells come from the field's own box**, not a fixed window — an Agent can never be dropped outside the field or half off its edge. Change `width`/`height` and the legal area changes with it.

**Two ranges, and both matter.** `proximityRange` (72px) lights the nearest free slot while the Agent stays exactly under the pointer — "there is something here". `snapTolerance` (34px) arms that slot and the Agent begins to drift toward it — "release and it lands here". Removing the outer range gives you magnetism with no warning, which reads as the canvas glitching rather than helping. The drift is a partial pull, not a lock: the operator is still in control until they release.

`onSnapStateChange` emits `dragging` → `proximity` → `snapReady` → `idle`. Drive the canvas status line, the bond preview and the sound hooks from this one source rather than recomputing distance anywhere else.

## Selection and grouping

With `selectable`, dragging on **empty canvas** draws a marquee; dragging on a hexagon still moves it. An Agent is caught when its **centre** falls inside the band — the same rule the lattice uses, so selection and snapping always agree about where an Agent is.

Two or more selected draws the group outline and offers `onGroup`. That is the path into **`PlaybookComposer`** — outline a cluster, name the process, and the Playbook exists.

## Keyboard

Focus an Agent and the arrow keys move it one cell at a time, refusing occupied and out-of-bounds cells. **This path never touches GSAP** and works even if GSAP fails to load. Composition in LAMP is not pointer-only, so don't build a surface that depends on the drag.

## Notes

GSAP loads from CDN on first use — see `CanvasMotion`. Until it arrives, Agents render and the keyboard works; only the drag is unavailable.

Position during a drag is written to the transform by GSAP, so React re-renders only when the snap state actually changes, not once per frame. Keep `renderAgent` cheap anyway — it runs for every Agent on every state change.
