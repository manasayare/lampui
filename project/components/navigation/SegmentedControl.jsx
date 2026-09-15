import React from 'react';
import { Icon } from '../core/Icon.jsx';

export const SegmentedControl = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function SegmentedControl({ options = [], value, onChange, size = 'sm', className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={['lamp-seg', size === 'md' && 'lamp-seg--lg', className].filter(Boolean).join(' ')} role="group" {...rest}>
      {options.map((o) => {
        const id = typeof o === 'string' ? o : o.value;
        const label = typeof o === 'string' ? o : o.label;
        const active = value === id;
        return (
          <button key={id} type="button" aria-pressed={active} className={'lamp-seg__item' + (active ? ' lamp-seg__item--active' : '')} onClick={() => onChange && onChange(id)}>
            {typeof o === 'object' && o.icon ? <Icon name={o.icon} size={14} /> : null}
            {label}
          </button>
        );
      })}
    </div>
  );
}), { displayName: 'SegmentedControl' });
