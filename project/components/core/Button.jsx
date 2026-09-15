import React from 'react';
import { Icon } from './Icon.jsx';

export function Button({ variant = 'secondary', size = 'md', icon, iconRight, loading = false, disabled = false, block = false, shortcut, children, className = '', ...rest }) {
  const cls = ['lamp-btn', 'lamp-btn--' + variant, 'lamp-btn--' + size, block && 'lamp-btn--block', loading && 'lamp-btn--loading', className].filter(Boolean).join(' ');
  const glyph = size === 'lg' ? 16 : 14;
  return (
    <button type="button" className={cls} disabled={disabled || loading} aria-busy={loading || undefined} {...rest}>
      {icon ? (typeof icon === 'string' ? <Icon name={icon} size={glyph} /> : icon) : null}
      {children}
      {iconRight ? (typeof iconRight === 'string' ? <Icon name={iconRight} size={glyph} /> : iconRight) : null}
      {shortcut ? <span className="lamp-btn__kbd">{shortcut}</span> : null}
      {loading ? <span className="lamp-btn__spin"><i /></span> : null}
    </button>
  );
}

export function SplitButton({ variant = 'secondary', size = 'md', icon, children, onMenu, menuLabel = 'More actions', ...rest }) {
  return (
    <span className="lamp-split">
      <Button variant={variant} size={size} icon={icon} {...rest}>{children}</Button>
      <Button variant={variant} size={size} onClick={onMenu} aria-label={menuLabel} icon="keyboard_arrow_down" />
    </span>
  );
}
