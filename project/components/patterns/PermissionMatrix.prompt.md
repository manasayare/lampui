Effective permissions per resource and action, distinguishing granted, inherited, overridden and conflicting — inherited is deliberately dimmer than granted.

```jsx
<PermissionMatrix scopeLabel="Genie" actions={['View','Edit','Run','Approve','Go live']}
  resources={[{key:'fin',label:'Finance',glyph:'hive',scope:'Genie'},{key:'sales',label:'Sales',glyph:'hive',scope:'Genie'}]}
  values={{fin:{View:'granted',Edit:'granted',Run:'inherited',Approve:'conflict'},sales:{View:'inherited'}}} />
<RoleBadge role="Admin" scope="Finance Genie" />
```

Scopes are LAMP, Genie, Playbook, Agent, Tool and Memory. Never show permission state by colour alone — each cell has a glyph and a title.
