The memory topology — an **Obsidian-style force graph** over what LAMP knows about the business: facts, policies, observed patterns, entities, and the Agents and Tools that touch them.

```jsx
<MemoryGraph nodes={nodes} links={links} height={360} selectedId={sel}
  onSelect={(n) => openInspector(n.id)} />
```

Behaviour that makes it readable rather than a hairball:

- **Hover isolates a neighbourhood.** The hovered node and its direct links stay at full strength; everything else drops to 18%. This is the single most useful interaction in the graph — it is how you answer "what does this fact touch?".
- **Geometry, not just colour.** Hexagon = Agent, square = Tool, diamond = scope, circle = fact or entity. Dashed links are inferred or suggested; red heavier links are conflicts.
- **Size carries weight** — evidence count, retrieval count or degree, via `value`.
- **It settles and then stops.** The simulation decays over ~260 frames and freezes; a memory graph at rest does not drift. Layout is deterministically seeded, so the same graph always looks the same.
- **Reduced motion** runs the whole simulation synchronously and paints the settled result, with no animation at all.

Use it for LAMP-level and Genie-level memory exploration, entity relationship maps and conflict investigation. For a single fact and its evidence use `MemoryFact`; for scope totals use `MemoryUsageBar`. Production tier: **visx** (custom LAMP visualization), per `guidelines/visualization.md`.
