Floating canvas chrome: tool cluster at bottom centre, viewport controls top right, contextual toolbar above the selection, minimap bottom right.

```jsx
<CanvasZoomControls zoom={0.8} onZoomIn={zin} onZoomOut={zout} onFit={fit} />
<CanvasObjectToolbar x={320} y={210}>
  <IconButton icon="link" label="Bond" size="sm" /><IconButton icon="content_copy" label="Duplicate" size="sm" />
</CanvasObjectToolbar>
```

Keep these to icon controls with tooltips; anything needing explanation belongs in the Inspector.
