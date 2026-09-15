import React from 'react';
import { Icon } from '../core/Icon.jsx';

export const Tabs = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Tabs({ tabs = [], value, onChange, variant = 'underline', className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={['lamp-tabs', variant === 'pill' && 'lamp-tabs--pill', className].filter(Boolean).join(' ')} role="tablist" {...rest}>
      {tabs.map((t) => {
        const id = typeof t === 'string' ? t : t.id;
        const label = typeof t === 'string' ? t : t.label;
        const active = value === id;
        return (
          <button key={id} type="button" role="tab" aria-selected={active} disabled={typeof t === 'object' && t.disabled}
            className={'lamp-tabs__tab' + (active ? ' lamp-tabs__tab--active' : '')} onClick={() => onChange && onChange(id)}>
            {typeof t === 'object' && t.icon ? <Icon name={t.icon} size={14} /> : null}
            {label}
            {typeof t === 'object' && t.count != null ? <span className="lamp-tabs__count">{t.count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}), { displayName: 'Tabs' });
