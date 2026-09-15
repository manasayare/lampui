Cmd/Ctrl+K. The fastest path to creating objects, navigating the hierarchy, running simulations and reaching safety controls. Safety items are red and always last.

```jsx
<CommandPalette groups={[{label:'Run',items:[{id:'sim',label:'Run simulation',icon:'science',shortcut:['S']}]},
  {label:'Safety',items:[{id:'kill',label:'Emergency stop Finance Genie',icon:'dangerous',danger:true}]}]} />
```
