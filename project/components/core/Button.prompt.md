The LAMP button family. Primary is graphite, not gold — gold (`brand`) is only for Go Live and explicit bond confirmation, and `danger` only for stop/destructive actions.

```jsx
<Button variant="primary" icon="play">Run simulation</Button>
<Button variant="brand" size="md" icon="zap">Go live</Button>
<Button variant="danger" icon="octagon-alert">Emergency stop</Button>
<Button variant="ghost" size="sm" icon="plus">New Agent</Button>
```

Sizes xs/sm/md/lg = 24/28/32/40px. `loading` swaps the label for a spinner and disables. Never put two `brand` buttons on one surface.
