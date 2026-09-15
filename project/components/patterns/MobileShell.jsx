import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

export const MobileShell = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function MobileShell({ title, leading, actions, tabs = [], activeTab, onTab, banner, children, className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={'lamp-mobile ' + className} {...rest}>
      <header className="lamp-mobile__top">
        {leading}
        <span className="lamp-mobile__title">{title}</span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>{actions}</span>
      </header>
      {banner}
      <div className="lamp-mobile__body">{children}</div>
      {tabs.length ? (
        <nav className="lamp-mobile__nav">
          {tabs.map((t) => (
            <button key={t.id} type="button" className={'lamp-mobile__tab' + (activeTab === t.id ? ' lamp-mobile__tab--active' : '')}
              onClick={() => onTab && onTab(t.id)} aria-current={activeTab === t.id ? 'page' : undefined}>
              <Icon name={t.icon} size={20} />
              {t.label}
            </button>
          ))}
        </nav>
      ) : null}
    </div>
  );
}), { displayName: 'MobileShell' });
