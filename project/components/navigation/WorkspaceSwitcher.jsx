import React from 'react';
import { Icon } from '../core/Icon.jsx';

export const WorkspaceSwitcher = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function WorkspaceSwitcher({ name, subtitle, initials, onClick, className = '', ...rest }, ref) {
  return (
    <button ref={ref} type="button" className={'lamp-wsw ' + className} onClick={onClick} {...rest}>
      <span className="lamp-wsw__avatar">{initials || String(name || '?').slice(0, 2).toUpperCase()}</span>
      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 0 }}>
        <span className="lamp-wsw__name">{name}</span>
        {subtitle ? <span className="lamp-wsw__sub">{subtitle}</span> : null}
      </span>
      <Icon name="unfold_more" size={14} style={{ color: 'var(--text-tertiary)' }} />
    </button>
  );
}), { displayName: 'WorkspaceSwitcher' });
