import React from 'react';

export function Switch({ label, tone = 'default', disabled = false, className = '', ...rest }) {
  return (
    <label className={['lamp-switch', tone === 'brand' && 'lamp-switch--brand', disabled && 'lamp-switch--disabled', className].filter(Boolean).join(' ')}>
      <input type="checkbox" role="switch" disabled={disabled} {...rest} />
      <span className="lamp-switch__track" />
      {label ? <span>{label}</span> : null}
    </label>
  );
}
