Overlays, in order of weight: Popover (small contextual controls) → Drawer (runtime detail beside the canvas) → Modal (focused creation) → CriticalConfirmation (irreversible actions).

```jsx
<Modal title="New Agent" size="sm" onClose={close} footer={<><Button variant="secondary" size="md">Cancel</Button><Button variant="primary" size="md">Create</Button></>}>…</Modal>
<CriticalConfirmation title="Stop Finance Genie?" scope="All Finance automation stops." confirmLabel="Emergency stop"
  consequences={['block new external write actions','stop new runs','isolate active tasks']} onCancel={c} onConfirm={k} />
<Drawer title="Run rn_8f21" onClose={close}>…</Drawer>
```

Never open a modal for routine configuration — that belongs in the Inspector.
