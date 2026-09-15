import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function SideNav({ children, collapsed = false, footer, className = '', ...rest }) {
  return (
    <nav className={['lamp-nav', collapsed && 'lamp-nav__rail', className].filter(Boolean).join(' ')} {...rest}>
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>{children}</div>
      {footer ? <div className="lamp-nav__foot">{footer}</div> : null}
    </nav>
  );
}

export function NavSection({ label, actions, children, ...rest }) {
  return (
    <div className="lamp-nav__section" {...rest}>
      {label ? <div className="lamp-nav__label">{label}{actions ? <span style={{ marginLeft: 'auto' }}>{actions}</span> : null}</div> : null}
      {children}
    </div>
  );
}

export function NavItem({ icon, label, meta, active = false, collapsed = false, badge, onClick, ...rest }) {
  return (
    <button type="button" className={'lamp-nav__item' + (active ? ' lamp-nav__item--active' : '')} onClick={onClick}
      aria-current={active ? 'page' : undefined} title={collapsed ? label : undefined} {...rest}>
      {icon ? <Icon name={icon} size={16} /> : null}
      {!collapsed ? <span className="lamp-nav__text">{label}</span> : null}
      {!collapsed && meta ? <span className="lamp-nav__meta">{meta}</span> : null}
      {!collapsed ? badge : null}
    </button>
  );
}
