import React from 'react';

export const LiveActivityIndicator = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function LiveActivityIndicator({ mode = 'live', label, count, className = '', ...rest }, ref) {
  const text = label || (mode === 'live' ? 'Live' : mode === 'simulation' ? 'Simulating' : 'Idle');
  return (
    <span ref={ref} className={['lamp-live', mode !== 'live' && 'lamp-live--' + mode, className].filter(Boolean).join(' ')} role="status" {...rest}>
      <span className="lamp-live__pulse" />
      {text}
      {count != null ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.8 }}>{count} active</span> : null}
    </span>
  );
}), { displayName: 'LiveActivityIndicator' });
