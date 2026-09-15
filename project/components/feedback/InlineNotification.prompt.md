Inline messages (in place, keeps context), banners (page or app level) and toasts (transient, bottom right, usually with Undo).

```jsx
<InlineNotification tone="warning" title="Salesforce authorization expires in 3 days"
  actions={<Button size="sm" variant="secondary">Reconnect</Button>} />
<ToastStack><Toast tone="success" title="Agent archived" action={<Button size="xs" variant="quiet">Undo</Button>} /></ToastStack>
```

Never flood the user with toasts during a simulation — batch into the run summary instead.
