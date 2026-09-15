import React from 'react';
import { seriesColor } from './ChartFrame.jsx';

const niceTick = (v, max) => {
  if (max >= 1000) return Math.round(v / 100) * 100 >= 1000 ? (Math.round(v / 100) / 10) + 'k' : String(Math.round(v));
  if (max >= 10) return String(Math.round(v));
  if (max >= 1) return (Math.round(v * 10) / 10).toFixed(1);
  return (Math.round(v * 100) / 100).toFixed(2);
};


/* Vertical / horizontal / stacked / 100% stacked bars and histograms. Production renderer: Recharts. */
export const BarChart = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function BarChart({
  series = [], labels = [], width = 640, height = 180, orientation = 'vertical', stacked = false, normalized = false,
  yMax, showGrid = true, showAxis = true, showValues = false, barGap = 4, pad, format, className = '', ...rest
}, ref) {
  const p = pad || (orientation === 'horizontal' ? { l: 104, r: 34, t: 4, b: 18 } : { l: 42, r: 10, t: 8, b: 20 });
  const n = labels.length || Math.max.apply(null, series.map((s) => s.data.length).concat([1]));
  const totals = Array.from({ length: n }, (_, i) => series.reduce((a, s) => a + (s.data[i] || 0), 0));
  const flat = series.reduce((a, s) => a.concat(s.data), []);
  const max = normalized ? 1 : yMax != null ? yMax : Math.max.apply(null, (stacked ? totals : flat).concat([1]));
  const iw = width - p.l - p.r;
  const ih = height - p.t - p.b;
  const groupSize = (orientation === 'vertical' ? iw : ih) / n;
  const band = groupSize - barGap;
  const thickness = stacked || series.length === 1 ? band : band / series.length;
  const scale = (v) => (normalized ? v : v / max) * (orientation === 'vertical' ? ih : iw);
  const ticks = Array.from({ length: 5 }, (_, i) => (max / 4) * i);
  const fmt = format || ((v) => niceTick(v, max));
  return (
    <svg ref={ref} width="100%" height={height} viewBox={'0 0 ' + width + ' ' + height} role="img" className={className} preserveAspectRatio="none" {...rest}>
      {showGrid ? (
        <g className="lamp-chart__grid">
          {ticks.map((t, i) => (orientation === 'vertical'
            ? <line key={i} x1={p.l} x2={width - p.r} y1={p.t + ih - scale(t)} y2={p.t + ih - scale(t)} />
            : <line key={i} y1={p.t} y2={p.t + ih} x1={p.l + scale(t)} x2={p.l + scale(t)} />))}
        </g>
      ) : null}
      {showAxis ? (
        <g className="lamp-chart__axis">
          {orientation === 'vertical'
            ? ticks.map((t, i) => <text key={i} x={p.l - 6} y={p.t + ih - scale(t) + 4} textAnchor="end">{fmt(t)}</text>)
            : labels.map((l, i) => <text key={i} x={p.l - 8} y={p.t + i * groupSize + band / 2 + 4} textAnchor="end">{l}</text>)}
          {orientation === 'vertical' ? labels.map((l, i) => <text key={i} x={p.l + i * groupSize + band / 2} y={height - 5} textAnchor="middle">{l}</text>) : null}
        </g>
      ) : null}
      {series.map((s, si) => {
        const color = s.color || seriesColor(si);
        return (
          <g key={s.label || si}>
            {Array.from({ length: n }, (_, i) => {
              const raw = s.data[i] || 0;
              const v = normalized ? (totals[i] ? raw / totals[i] : 0) : raw;
              const prior = stacked ? series.slice(0, si).reduce((a, q) => a + (normalized ? (totals[i] ? (q.data[i] || 0) / totals[i] : 0) : (q.data[i] || 0)), 0) : 0;
              const len = scale(v);
              if (orientation === 'vertical') {
                const bx = p.l + i * groupSize + (stacked ? 0 : si * thickness);
                const by = p.t + ih - len - scale(prior);
                return <rect key={i} x={bx} y={by} width={Math.max(1, thickness)} height={Math.max(0, len)} fill={color} rx={1.5} />;
              }
              const by = p.t + i * groupSize + (stacked ? 0 : si * thickness);
              const bx = p.l + scale(prior);
              return (
                <g key={i}>
                  <rect x={bx} y={by} width={Math.max(0, len)} height={Math.max(1, thickness)} fill={color} rx={1.5} />
                  {showValues && !stacked ? <text className="lamp-chart__axis" x={bx + len + 6} y={by + thickness / 2 + 4} style={{ fill: 'var(--chart-axis-text)', fontSize: 11 }}>{fmt(raw)}</text> : null}
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}), { displayName: 'BarChart' });
