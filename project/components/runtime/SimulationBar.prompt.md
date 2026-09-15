Run controls for simulation and live: play/pause/stop, step, scenario, progress, elapsed, cost. Step-through and breakpoints are simulation-only.

```jsx
<SimulationBar mode="simulation" state="running" progress={0.4} step={4} stepCount={10}
  scenario="March invoices (120 cases)" elapsed="00:06.2" cost="$0.18" onPause={pause} onStop={stop} />
```
