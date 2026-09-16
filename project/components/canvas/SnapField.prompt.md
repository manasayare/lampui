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

**Agents cannot overlap, by construction.** A cell holding another Agent is excluded before the distance search runs, so an occupied slot can never be chosen, lit, or committed to. Because positions are lattice cells rather than free pixels, two Agents cannot partially overlap either.

**Legal cells come from the field's own box**, not a fixed window — an Agent can never be dropped outside the field or half off its edge. Change `width`/`height` and the legal area changes with it.

**A drag always lands.** The target cell is drawn from the first frame and a release always commits to it. The ranges below style that target and decide whether the Agent is pulled toward it; they never veto the drop. They used to, and a release into open canvas — where the nearest lattice centre can be half a step away — silently undid the drag. From the operator's side that is indistinguishable from the object being stuck.

**Two ranges, and both matter.** Beyond `proximityRange` (72px) the target is drawn faintly: "this is where it lands". Inside it the slot brightens: "you are near a real position". Inside `snapTolerance` (34px) the slot arms and the Agent drifts toward it: "release and it lands here". Removing the outer range gives you magnetism with no warning, which reads as the canvas glitching rather than helping. The drift is a partial pull, not a lock: the operator is still in control until they release.

`onSnapStateChange` emits `dragging` → `proximity` → `snapReady` → `idle`. Drive the canvas status line, the bond preview and the sound hooks from this one source rather than recomputing distance anywhere else.

## Bonds during a drag

`bonds` as a node is **fixed**: a bond drawn from an Agent's committed cell stays behind while that Agent is dragged, leaving a gold stub pointing at where it used to be. Pass a function instead and it is called with every Agent's live position, so bonds follow the drag:

```jsx
bonds={(pos) => (
  <BondLayer>
    <BondEdge from={pos.intake} to={pos.matcher} state="valid" />
  </BondLayer>
)}
```

Positions are in the same space `hexCenter` returns — the bonds layer is already offset to the lattice origin. The second argument carries `{ draggingId }` if you want to style the moving edge.

## Adding Agents

`AgentLibrary` reports a drop as a point in the field's coordinates; `freeCellAt(point, geometry)` turns it into a free cell, and `NewAgentDialog` names it. Pass `freeCellAt` the same `agents`, `size`, `gap`, `width`, `height` and `origin` the field has, or the two will disagree about where the lattice is.

```jsx
const geometry = { agents, size: 'md', gap: 36, width: 720, height: 380, origin };
<AgentLibrary dropTarget={fieldRef} onDrop={(a, p) => setPending({ archetype: a, cell: freeCellAt(p, geometry) })} />
```

## Selection and grouping

With `selectable`, dragging on **empty canvas** draws a marquee; dragging on a hexagon still moves it. An Agent is caught when its **centre** falls inside the band — the same rule the lattice uses, so selection and snapping always agree about where an Agent is.

Two or more selected draws the group outline and offers `onGroup`. That is the path into **`PlaybookComposer`** — outline a cluster, name the process, and the Playbook exists.

## Keyboard

Focus an Agent and the arrow keys move it one cell at a time, refusing occupied and out-of-bounds cells. **This path never touches GSAP** and works even if GSAP fails to load. Composition in LAMP is not pointer-only, so don't build a surface that depends on the drag.

## Notes

GSAP loads from CDN on first use — see `CanvasMotion`. Until it arrives, Agents render and the keyboard works; only the drag is unavailable.

Position during a drag is written to the transform by GSAP, so React re-renders only when the snap state actually changes, not once per frame. Keep `renderAgent` cheap anyway — it runs for every Agent on every state change.
