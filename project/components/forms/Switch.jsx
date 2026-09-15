import React from 'react';

export const Switch = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Switch({ label, tone = 'default', disabled = false, className = '', ...rest }, ref) {
  return (
    <label className={['lamp-switch', tone === 'brand' && 'lamp-switch--brand', disabled && 'lamp-switch--disabled', className].filter(Boolean).join(' ')}>
      <input ref={ref} type="checkbox" role="switch" disabled={disabled} {...rest} />
      <span className="lamp-switch__track" />
      {label ? <span>{label}</span> : null}
    </label>
  );
}), { displayName: 'Switch' });
