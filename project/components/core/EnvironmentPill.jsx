import React from 'react';
import { Icon } from './Icon.jsx';

const ENV = {
  draft:      { icon: 'edit',   label: 'Draft' },
  simulation: { icon: 'science', label: 'Simulation' },
  live:       { icon: 'bolt',           label: 'Live' },
  paused:     { icon: 'pause',         label: 'Paused' },
  killed:     { icon: 'dangerous', label: 'Emergency stopped' },
};

export function EnvironmentPill({ environment = 'draft', label, scope, className = '', ...rest }) {
  const e = ENV[environment] || ENV.draft;
  return (
    <span className={['lamp-env', 'lamp-env--' + environment, className].filter(Boolean).join(' ')} {...rest}>
      <Icon name={e.icon} size={12} />
      {label || e.label}
      {scope ? <span style={{ opacity: 0.7, fontWeight: 500, letterSpacing: 0, textTransform: 'none' }}>{scope}</span> : null}
    </span>
  );
}
