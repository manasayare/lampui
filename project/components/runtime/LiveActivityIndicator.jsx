import React from 'react';

export function LiveActivityIndicator({ mode = 'live', label, count, className = '', ...rest }) {
  const text = label || (mode === 'live' ? 'Live' : mode === 'simulation' ? 'Simulating' : 'Idle');
  return (
    <span className={['lamp-live', mode !== 'live' && 'lamp-live--' + mode, className].filter(Boolean).join(' ')} role="status" {...rest}>
      <span className="lamp-live__pulse" />
      {text}
      {count != null ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.8 }}>{count} active</span> : null}
    </span>
  );
}
