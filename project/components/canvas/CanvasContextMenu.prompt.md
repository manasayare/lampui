Right-click menu for canvas objects and empty canvas; also serves as DropdownMenu and ObjectMenu.

```jsx
<CanvasContextMenu x={280} y={160} groups={[
  { items: [{ id:'inspect', label:'Open in Inspector', icon:'right_panel_open', shortcut:'Enter' }] },
  { items: [{ id:'unbond', label:'Break bond', icon:'link_off' }, { id:'del', label:'Delete Agent', icon:'delete', danger:true, shortcut:'Del' }] },
]} />
```

Secondary actions only — primary workflows stay direct.
