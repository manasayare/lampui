import React from 'react';
import { seriesColor } from './ChartFrame.jsx';

const niceTick = (v, max) => {
  if (max >= 1000) return Math.round(v / 100) * 100 >= 1000 ? (Math.round(v / 100) / 10) + 'k' : String(Math.round(v));
  if (max >= 10) return String(Math.round(v));
  if (max >= 1) return (Math.round(v * 10) / 10).toFixed(1);
  return (Math.round(v * 100) / 100).toFixed(2);
};


/* LAMP line / area chart. Production renderer: shadcn Charts + Recharts, tokenised to match. */
export function LineChart({
  series = [], labels = [], width = 640, height = 180, variant = 'line', yTicks = 4, yMax, yMin = 0,
  thresholds = [], showGrid = true, showAxis = true, pad = { l: 42, r: 10, t: 8, b: 20 }, format, className = '', ...rest
}) {
  const n = Math.max.apply(null, series.map((s) => s.data.length).concat([1]));
  const flat = series.reduce((a, s) => a.concat(s.data), []);
  const max = yMax != null ? yMax : Math.max.apply(null, flat.concat(thresholds.map((t) => t.value)).concat([1]));
  const iw = width - pad.l - pad.r;
  const ih = height - pad.t - pad.b;
  const x = (i) => pad.l + (i / Math.max(1, n - 1)) * iw;
  const y = (v) => pad.t + ih - ((v - yMin) / (max - yMin || 1)) * ih;
  const ticks = Array.from({ length: yTicks + 1 }, (_, i) => yMin + ((max - yMin) / yTicks) * i);
  const fmt = format || ((v) => niceTick(v, max));
  return (
    <svg width="100%" height={height} viewBox={'0 0 ' + width + ' ' + height} className={'lamp-chart__svg ' + className} role="img" preserveAspectRatio="none" {...rest}>
      {showGrid ? <g className="lamp-chart__grid">{ticks.map((t, i) => <line key={i} x1={pad.l} x2={width - pad.r} y1={y(t)} y2={y(t)} />)}</g> : null}
      {showAxis ? (
        <g className="lamp-chart__axis">
          {ticks.map((t, i) => <text key={i} x={pad.l - 6} y={y(t) + 4} textAnchor="end">{fmt(t)}</text>)}
          {labels.map((l, i) => (i % Math.ceil(labels.length / 7) === 0 ? <text key={i} x={x(i)} y={height - 5} textAnchor="middle">{l}</text> : null))}
        </g>
      ) : null}
      {thresholds.map((t, i) => (
        <g key={i}>
          <line x1={pad.l} x2={width - pad.r} y1={y(t.value)} y2={y(t.value)} stroke={t.critical ? 'var(--chart-critical)' : 'var(--chart-threshold)'} strokeWidth={1} strokeDasharray="4 3" />
        </g>
      ))}
      {series.map((s, si) => {
        const color = s.color || seriesColor(si);
        const path = s.data.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ',' + y(v).toFixed(1)).join(' ');
        return (
          <g key={s.label || si}>
            {variant === 'area' ? <path d={path + ' L' + x(s.data.length - 1) + ',' + y(yMin) + ' L' + pad.l + ',' + y(yMin) + ' Z'} fill={color} opacity={0.14} /> : null}
            <path d={path} fill="none" stroke={color} strokeWidth={1.5} strokeDasharray={s.dashed ? '4 3' : undefined} strokeLinejoin="round" strokeLinecap="round" />
            {s.points ? s.data.map((v, i) => <circle key={i} cx={x(i)} cy={y(v)} r={2} fill="var(--surface-primary)" stroke={color} strokeWidth={1.25} />) : null}
          </g>
        );
      })}
    </svg>
  );
}
