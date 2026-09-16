The palette an Agent is dragged onto the canvas from — use it wherever Agents are created, in place of a command-palette entry that drops a blank hexagon.

```jsx
const fieldRef = useRef(null);
const [pending, setPending] = useState(null);
const geometry = { agents, size: 'md', gap: 36, width: 720, height: 380, origin };

<AgentLibrary
  size="md"
  dropTarget={fieldRef}
  onDrop={(archetype, point) => setPending({ archetype, cell: freeCellAt(point, geometry) })}
  onAdd={(archetype) => setPending({ archetype, cell: freeCellAt({ x: 0, y: 0 }, geometry) })}
/>
<SnapField ref={fieldRef} agents={agents} {...geometry} renderAgent={…} />
```

## Why a drag and not a menu item

A menu item that drops a blank hexagon leaves two questions open — what kind of Agent, and where does it go — and answers neither. The drag answers both in one gesture, and the archetype arrives already carrying a purpose, the Skills it needs and the Tools it usually touches, so the dialog it opens is a thing to correct rather than a blank to fill.

## The ghost

The dragged thing is a **ghost**, not the list item. The item stays exactly where it is, so the library never looks like it is being emptied, and the ghost is an `AgentHex` at the size you pass — the real object at the real lattice size, so the operator is judging actual spacing while they aim. Set `size` to match the `SnapField`.

The ghost is fixed to the viewport, so it is not clipped by the panel it started in.

## Dropping creates nothing

`onDrop` reports the archetype and a **point in the drop target's own coordinates**. Resolve it with `freeCellAt` and open `NewAgentDialog`. Do not create an Agent here: an Agent that appears the instant a pointer is released is an Agent nobody named, and the whole ontology rests on Agents being named for the work they do.

A release outside `dropTarget` is ignored, so dragging an item back into the panel cancels.

## Keyboard

Click or Enter fires `onAdd` — the non-drag path, which every creation route in LAMP has. Point it at the same dialog with a cell of your choosing.

## Notes

GSAP loads from CDN on first use — see `CanvasMotion`. Until it arrives the list renders and `onAdd` works; only the drag is unavailable.

`archetypes` replaces `AGENT_ARCHETYPES` wholesale. Group headings come from each archetype's `group` and appear in first-seen order, so order the array the way you want the panel read.
