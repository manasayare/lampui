import React from 'react';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';
import { Checkbox } from '../forms/Checkbox.jsx';

export const KillSwitch = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function KillSwitch({ scope = 'this Genie', consequences, activeRuns, onCancel, onConfirm, requireAcknowledge = true, confirmLabel = 'Emergency stop', className = '', ...rest }, ref) {
  const [ack, setAck] = React.useState(!requireAcknowledge);
  const list = consequences || ['block new external write actions', 'stop new runs', 'isolate active tasks'];
  return (
    <div ref={ref} className={'lamp-kill ' + className} role="alertdialog" aria-label={'Stop ' + scope} {...rest}>
      <div className="lamp-kill__title"><Icon name="dangerous" size={16} />Stop {scope}?</div>
      <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Immediately:</div>
      <ul className="lamp-kill__list">{list.map((c) => <li key={c}>{c}</li>)}</ul>
      {activeRuns != null ? (
        <div className="lamp-kill__armed"><Icon name="warning" size={14} />{activeRuns} runs are active right now. Their completed steps are not reversed.</div>
      ) : null}
      {requireAcknowledge ? <Checkbox label={'I understand this stops all automation in ' + scope + '.'} checked={ack} onChange={(e) => setAck(e.target.checked)} /> : null}
      <div className="lamp-kill__actions">
        <Button size="md" variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button size="md" variant="danger" icon="dangerous" disabled={!ack} onClick={onConfirm}>{confirmLabel}</Button>
      </div>
    </div>
  );
}), { displayName: 'KillSwitch' });

export const SafetyControls = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function SafetyControls({ state = 'live', onPause, onSafeStop, onEmergency, onResume, className = '', ...rest }, ref) {
  return (
    <div ref={ref} style={{ display: 'flex', alignItems: 'center', gap: 6 }} className={className} {...rest}>
      {state === 'paused'
        ? <Button size="sm" variant="secondary" icon="play_arrow" onClick={onResume}>Resume</Button>
        : <Button size="sm" variant="secondary" icon="pause" onClick={onPause}>Pause</Button>}
      <Button size="sm" variant="secondary" icon="stop_circle" onClick={onSafeStop}>Safe stop</Button>
      <Button size="sm" variant="danger-quiet" icon="dangerous" onClick={onEmergency}>Emergency stop</Button>
    </div>
  );
}), { displayName: 'SafetyControls' });
