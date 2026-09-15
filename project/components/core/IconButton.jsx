import React from 'react';
import { Icon } from './Icon.jsx';

export function IconButton({ icon, label, size = 'md', bordered = false, active = false, tone = 'default', className = '', ...rest }) {
  const cls = ['lamp-iconbtn', 'lamp-iconbtn--' + size, bordered && 'lamp-iconbtn--bordered', active && 'lamp-iconbtn--active', tone === 'danger' && 'lamp-iconbtn--danger', className].filter(Boolean).join(' ');
  const glyph = size === 'xs' ? 12 : size === 'sm' ? 14 : 16;
  return (
    <button type="button" className={cls} aria-label={label} aria-pressed={active || undefined} title={label} {...rest}>
      {typeof icon === 'string' ? <Icon name={icon} size={glyph} /> : icon}
    </button>
  );
}
