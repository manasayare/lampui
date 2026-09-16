import React from 'react';
import { seriesColor } from './ChartFrame.jsx';

/* Donut / radial gauge. Keep donuts small and never use more than 5 slices. */
export const DonutChart = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function DonutChart({ data = [], size = 132, thickness = 12, centerValue, centerLabel, gauge = false, max, startAngle = -90, className = '', ...rest }, ref) {
  const r = (size - thickness) / 2;
  const c = size / 2;
  const total = max != null ? max : data.reduce((a, d) => a + d.value, 0) || 1;
  const sweep = gauge ? 270 : 360;
  let acc = 0;
  const arc = (from, to, color, key) => {
    const a1 = (startAngle + from) * Math.PI / 180;
    const a2 = (startAngle + to) * Math.PI / 180;
    const large = to - from > 180 ? 1 : 0;
    const x1 = c + r * Math.cos(a1), y1 = c + r * Math.sin(a1);
    const x2 = c + r * Math.cos(a2), y2 = c + r * Math.sin(a2);
    return <path key={key} d={'M' + x1 + ',' + y1 + ' A' + r + ',' + r + ' 0 ' + large + ' 1 ' + x2 + ',' + y2} fill="none" stroke={color} strokeWidth={thickness} strokeLinecap={gauge ? 'round' : 'butt'} />;
  };
  return (
    <svg ref={ref} width={size} height={size} viewBox={'0 0 ' + size + ' ' + size} role="img" className={className} {...rest}>
      {arc(0, sweep - 0.01, 'var(--chart-track)', 'track')}
      {data.map((d, i) => {
        const from = (acc / total) * sweep;
        acc += d.value;
        const to = (acc / total) * sweep;
        return arc(from, Math.min(to, sweep - 0.01), d.color || seriesColor(i), d.label || i);
      })}
      {centerValue != null ? (
        <g>
          <text x={c} y={c + (centerLabel ? 0 : 5)} textAnchor="middle" style={{ fill: 'var(--text-primary)', font: '500 18px var(--font-sans)', fontVariantNumeric: 'tabular-nums' }}>{centerValue}</text>
          {centerLabel ? <text x={c} y={c + 15} textAnchor="middle" style={{ fill: 'var(--text-tertiary)', font: '400 10px var(--font-sans)' }}>{centerLabel}</text> : null}
        </g>
      ) : null}
    </svg>
  );
}), { displayName: 'DonutChart' });
