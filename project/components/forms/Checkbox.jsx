import React from 'react';
import { Icon } from '../core/Icon.jsx';

export const Checkbox = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Checkbox({ label, description, indeterminate = false, disabled = false, className = '', ...rest }, ref) {
  return (
    <label className={['lamp-check', disabled && 'lamp-check--disabled', className].filter(Boolean).join(' ')}>
      <input ref={ref} type="checkbox" disabled={disabled} {...rest} />
      <span className="lamp-check__box">{indeterminate ? <Icon name="remove" size={12} /> : <Icon name="check" size={12} />}</span>
      {label ? <span>{label}{description ? <span className="lamp-check__desc">{description}</span> : null}</span> : null}
    </label>
  );
}), { displayName: 'Checkbox' });
