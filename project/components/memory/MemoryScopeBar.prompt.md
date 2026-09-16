The four memory scopes as one bar — use it to filter a memory list, or (with `readOnly`) as an Inspector read-out of what an object owns and what it inherits.

```jsx
<MemoryScopeBar
  value={scope}
  onChange={setScope}
  owned="agent"
  counts={{ agent: 12, playbook: 34, genie: 140, lamp: 612 }}
/>
```

**Order never changes: Agent → Playbook → Genie → LAMP, narrow to broad.** Every surface in LAMP that shows scope shows it in this sequence, so "further right" always means "broader". Pass `scopes` to restrict the set, not to reorder it.

**The step marks carry the meaning.** Each scope's tick grows 4 → 7 → 10 → 13px, matching `MemoryScope`'s badge, so scope is readable by shape and not only by the label — which is what keeps it working at micro sizes and for colour-blind operators.

`owned` is the scope the selected object writes to; everything broader is automatically marked **Inherited** in words. Use `inherited` directly only when the relationship is not positional.

Clicking the active scope clears the filter and fires `onChange(undefined)` — a scope filter should never be a trap you cannot get out of.

For a single scope inline (on a fact, in a table cell), use `MemoryScope` instead.
