import React from 'react';

export function Slider({ min = 0, max = 100, step = 1, value, onChange, format, showValue = true, ...rest }) {
  const v = value == null ? min : value;
  return (
    <div className="lamp-slider">
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => onChange && onChange(Number(e.target.value))} {...rest} />
      {showValue ? <span className="lamp-slider__val">{format ? format(v) : v}</span> : null}
    </div>
  );
}
