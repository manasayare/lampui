import React from 'react';
import { Icon } from './Icon.jsx';

export const Tag = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Tag({ icon, mono = false, onRemove, children, className = '', ...rest }, ref) {
  return (
    <span ref={ref} className={['lamp-tag', mono && 'lamp-tag--mono', className].filter(Boolean).join(' ')} {...rest}>
      {icon ? (typeof icon === 'string' ? <Icon name={icon} size={12} /> : icon) : null}
      {children}
      {onRemove ? <button type="button" className="lamp-tag__x" aria-label="Remove" onClick={onRemove}><Icon name="close" size={10} /></button> : null}
    </span>
  );
}), { displayName: 'Tag' });
