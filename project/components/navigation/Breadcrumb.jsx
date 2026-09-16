import React from 'react';
import { Icon } from '../core/Icon.jsx';

export const Breadcrumb = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Breadcrumb({ items = [], maxVisible = 5, onNavigate, className = '', ...rest }, ref) {
  const overflow = items.length > maxVisible;
  const shown = overflow ? [items[0], { label: '…', overflow: true }, ...items.slice(-(maxVisible - 2))] : items;
  return (
    <nav ref={ref} className={'lamp-crumb ' + className} aria-label="Object path" {...rest}>
      {shown.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 ? <span className="lamp-crumb__sep"><Icon name="chevron_right" size={14} /></span> : null}
          <button type="button" className={'lamp-crumb__item' + (i === shown.length - 1 ? ' lamp-crumb__item--current' : '')}
            onClick={() => onNavigate && !it.overflow && onNavigate(it, i)} aria-current={i === shown.length - 1 ? 'page' : undefined}>
            {it.icon ? <Icon name={it.icon} size={14} /> : null}
            {it.label}
          </button>
        </React.Fragment>
      ))}
    </nav>
  );
}), { displayName: 'Breadcrumb' });
