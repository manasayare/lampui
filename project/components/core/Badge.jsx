import React from 'react';
import { Icon } from './Icon.jsx';

export function Badge({ tone = 'neutral', icon, shape = 'pill', micro = false, count = false, outline = false, children, className = '', ...rest }) {
  const cls = ['lamp-badge', 'lamp-badge--' + (outline ? 'outline' : tone), shape === 'square' && 'lamp-badge--square', micro && 'lamp-badge--micro', count && 'lamp-badge--count', className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {icon ? (typeof icon === 'string' ? <Icon name={icon} size={11} /> : icon) : null}
      {children}
    </span>
  );
}
