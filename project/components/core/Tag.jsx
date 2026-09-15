import React from 'react';
import { Icon } from './Icon.jsx';

export function Tag({ icon, mono = false, onRemove, children, className = '', ...rest }) {
  return (
    <span className={['lamp-tag', mono && 'lamp-tag--mono', className].filter(Boolean).join(' ')} {...rest}>
      {icon ? (typeof icon === 'string' ? <Icon name={icon} size={12} /> : icon) : null}
      {children}
      {onRemove ? <button type="button" className="lamp-tag__x" aria-label="Remove" onClick={onRemove}><Icon name="close" size={10} /></button> : null}
    </span>
  );
}
