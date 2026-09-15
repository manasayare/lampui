Emergency stop. Deliberate by construction: explicit scope, listed consequences, an acknowledgement, and a danger-styled confirm that never resembles a primary button.

```jsx
<KillSwitch scope="Finance Genie" activeRuns={4} onCancel={close} onConfirm={stop} />
<SafetyControls state="live" onPause={p} onSafeStop={s} onEmergency={e} />
```

Pause, Safe stop and Emergency stop are three different actions with three different levels of consequence — never collapse them into one control.
