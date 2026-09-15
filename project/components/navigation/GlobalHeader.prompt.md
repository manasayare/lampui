48px top bar: brand, object path + environment in the centre, run controls and account on the right.

```jsx
<GlobalHeader center={<><Breadcrumb items={path} /><EnvironmentPill environment="simulation" /></>}
  right={<><Button size="sm" icon="science">Simulate</Button><Button variant="brand" size="sm" icon="bolt">Go live</Button></>} />
```
