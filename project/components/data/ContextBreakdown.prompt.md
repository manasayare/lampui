What went into a run's context window, by memory scope — use it in the Run Inspector, on an Agent's runtime section, and anywhere inference efficiency is the question.

```jsx
<ContextBreakdown
  limit={8000}
  cached={1840}
  context={{
    agent: 618,
    playbook: 402,
    genie: 771,
    lamp: 340,
    evidence: 1281,
  }}
/>
```

**Rows always run narrow → broad** — Agent working memory, Playbook, Genie, LAMP, then retrieved evidence — whatever order you pass the keys in. Memory inheritance reads left-to-right and top-to-bottom the same way on every surface, so an operator never has to re-orient.

**`cached` is a saving, not a cost.** It sits below the total and is never stacked into the bar; stacking it would double-count the tokens.

Pass `segments` instead of `context` when the breakdown is not by scope (by Agent, by Tool). You lose the standard labels and colours and own them yourself.

Keep it an efficiency read-out. No currency, no trend arrows, no sparkline — **cost belongs on `RunSummary`**, and a context breakdown dressed as a finance widget is exactly the "financial-dashboard" look the system avoids.
