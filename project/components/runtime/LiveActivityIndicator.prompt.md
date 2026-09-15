The only permanently animated element in LAMP, and only while something is actually running.

```jsx
<LiveActivityIndicator mode="live" count={7} />
<LiveActivityIndicator mode="idle" label="No active runs" />
```

Idle mode does not animate. Under reduced-motion the pulse becomes a static ring.
