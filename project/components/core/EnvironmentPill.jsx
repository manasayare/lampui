import React from 'react';
import { Icon } from './Icon.jsx';

const ENV = {
  draft:      { icon: 'edit',   label: 'Draft' },
  simulation: { icon: 'science', label: 'Simulation' },
  live:       { icon: 'bolt',           label: 'Live' },
  paused:     { icon: 'pause',         label: 'Paused' },
  killed:     { icon: 'dangerous', label: 'Emergency stopped' },
};

export const EnvironmentPill = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function EnvironmentPill({ environment = 'draft', label, scope, className = '', ...rest }, ref) {
  const e = ENV[environment] || ENV.draft;
  return (
    <span ref={ref} className={['lamp-env', 'lamp-env--' + environment, className].filter(Boolean).join(' ')} {...rest}>
      <Icon name={e.icon} size={12} />
      {label || e.label}
      {scope ? <span style={{ opacity: 0.7, fontWeight: 500, letterSpacing: 0, textTransform: 'none' }}>{scope}</span> : null}
    </span>
  );
}), { displayName: 'EnvironmentPill' });
