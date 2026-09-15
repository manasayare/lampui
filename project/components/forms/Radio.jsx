import React from 'react';

export function Radio({ label, description, disabled = false, className = '', ...rest }) {
  return (
    <label className={['lamp-check', disabled && 'lamp-check--disabled', className].filter(Boolean).join(' ')}>
      <input type="radio" disabled={disabled} {...rest} />
      <span className="lamp-check__box lamp-check__box--radio"><span className="lamp-check__radio-dot" /></span>
      {label ? <span>{label}{description ? <span className="lamp-check__desc">{description}</span> : null}</span> : null}
    </label>
  );
}

export function RadioGroup({ name, options = [], value, onChange, direction = 'column', ...rest }) {
  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: direction, gap: direction === 'row' ? 16 : 8 }} {...rest}>
      {options.map((o) => {
        const v = typeof o === 'string' ? o : o.value;
        const l = typeof o === 'string' ? o : o.label;
        return <Radio key={v} name={name} value={v} label={l} description={typeof o === 'object' ? o.description : undefined} checked={value === v} onChange={() => onChange && onChange(v)} />;
      })}
    </div>
  );
}
