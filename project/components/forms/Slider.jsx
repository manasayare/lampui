import React from 'react';

export const Slider = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Slider({ min = 0, max = 100, step = 1, value, onChange, format, showValue = true, ...rest }, ref) {
  const v = value == null ? min : value;
  return (
    <div className="lamp-slider">
      <input ref={ref} type="range" min={min} max={max} step={step} value={v} onChange={(e) => onChange && onChange(Number(e.target.value))} {...rest} />
      {showValue ? <span className="lamp-slider__val">{format ? format(v) : v}</span> : null}
    </div>
  );
}), { displayName: 'Slider' });
