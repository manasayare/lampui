import React from 'react';
import { Icon } from '../core/Icon.jsx';

export const SideNav = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function SideNav({ children, collapsed = false, footer, className = '', ...rest }, ref) {
  return (
    <nav ref={ref} className={['lamp-nav', collapsed && 'lamp-nav__rail', className].filter(Boolean).join(' ')} {...rest}>
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>{children}</div>
      {footer ? <div className="lamp-nav__foot">{footer}</div> : null}
    </nav>
  );
}), { displayName: 'SideNav' });

export const NavSection = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function NavSection({ label, actions, children, ...rest }, ref) {
  return (
    <div ref={ref} className="lamp-nav__section" {...rest}>
      {label ? <div className="lamp-nav__label">{label}{actions ? <span style={{ marginLeft: 'auto' }}>{actions}</span> : null}</div> : null}
      {children}
    </div>
  );
}), { displayName: 'NavSection' });

export const NavItem = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function NavItem({ icon, label, meta, active = false, collapsed = false, badge, onClick, ...rest }, ref) {
  return (
    <button ref={ref} type="button" className={'lamp-nav__item' + (active ? ' lamp-nav__item--active' : '')} onClick={onClick}
      aria-current={active ? 'page' : undefined} title={collapsed ? label : undefined} {...rest}>
      {icon ? <Icon name={icon} size={16} /> : null}
      {!collapsed ? <span className="lamp-nav__text">{label}</span> : null}
      {!collapsed && meta ? <span className="lamp-nav__meta">{meta}</span> : null}
      {!collapsed ? badge : null}
    </button>
  );
}), { displayName: 'NavItem' });
