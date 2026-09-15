import React from 'react';
import { StatusBadge } from '../core/StatusBadge.jsx';
import { Icon } from '../core/Icon.jsx';

const STATE_STATUS = {
  observed: 'observed', inferred: 'inferred', draft: 'draft', unvalidated: 'draft', simulation: 'simulation',
  simulationFailed: 'error', validated: 'validated', stable: 'validated', live: 'live', learning: 'learning',
  paused: 'paused', degraded: 'attention', failed: 'error', error: 'error', disabled: 'disabled', deprecated: 'disabled',
};

export const PlaybookCluster = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function PlaybookCluster({ name, state = 'draft', selected = false, agents, meta = [], actions, padding, layout = 'flow', dropState, collapsed = false, resizable = false, width, height, children, onClick, className = '', style, ...rest }, ref) {
  return (
    <div ref={ref} className={['lamp-pb', 'lamp-pb--' + state, selected && 'lamp-pb--selected', layout === 'free' && 'lamp-pb--free',
      dropState === 'valid' && 'lamp-pb--drop', dropState === 'invalid' && 'lamp-pb--drop-invalid', collapsed && 'lamp-pb--collapsed', className].filter(Boolean).join(' ')}
      style={{ padding, width, height, ...style }} onClick={onClick} role="group" aria-label={'Playbook ' + (name || '')} {...rest}>
      {name || actions ? (
        <div className="lamp-pb__head">
          <Icon name="layers" size={13} style={{ color: 'var(--text-tertiary)' }} />
          <span className="lamp-pb__title">{name}</span>
          <StatusBadge status={STATE_STATUS[state] || 'draft'} />
          {agents != null ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-tertiary)' }}>{agents} Agents</span> : null}
          {actions}
        </div>
      ) : null}
      {collapsed ? null : <div className="lamp-pb__body">{children}</div>}
      {resizable && !collapsed ? <span className="lamp-pb__grip" aria-hidden="true" /> : null}
      {meta.length ? <div className="lamp-pb__foot">{meta.map((m, i) => <span key={i}>{m}</span>)}</div> : null}
    </div>
  );
}), { displayName: 'PlaybookCluster' });
