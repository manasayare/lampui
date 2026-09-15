import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({ options = [], size = 'md', placeholder, className = '', ...rest }) {
  return (
    <div className={['lamp-select', size === 'sm' && 'lamp-select--sm', className].filter(Boolean).join(' ')}>
      <select {...rest}>
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((o) => {
          const v = typeof o === 'string' ? o : o.value;
          const l = typeof o === 'string' ? o : o.label;
          return <option key={v} value={v} disabled={typeof o === 'object' && o.disabled}>{l}</option>;
        })}
      </select>
      <span className="lamp-select__chev"><Icon name="keyboard_arrow_down" size={14} /></span>
    </div>
  );
}
