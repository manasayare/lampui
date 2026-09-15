The LAMP application frame: 48px header, left structure rail, dominant centre, right inspector dock, optional bottom toolbar, 28px status bar. The centre must stay visually dominant.

```jsx
<AppShell header={<GlobalHeader …/>} rail={<SideNav …/>} dock={<InspectorPanel …/>} statusBar={<StatusBar …/>}>
  <CanvasSurface>…</CanvasSurface>
</AppShell>
```

Below 1024px collapse the rail to 48px; below that overlay the dock.
