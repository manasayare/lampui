The canvas: the dominant region of the builder. Grid stays at 5–8% opacity and disappears as you zoom out; the environment frame is the only chrome that colours the whole surface.

```jsx
<CanvasSurface zoom={0.8} environment="simulation" empty={<EmptyState … />}>
  <PlaybookCluster …>…</PlaybookCluster>
</CanvasSurface>
```

Never let the grid compete with Agent objects. Use SnapGuide for snap slots and drop previews.
