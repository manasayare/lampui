import React from 'react';
import { seriesColor } from './ChartFrame.jsx';

/* Scatter / bubble. Large point counts belong on the ECharts tier with the same API. */
export const ScatterPlot = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ScatterPlot({ points = [], width = 640, height = 200, xMax, yMax, xLabel, yLabel, quadrant, pad = { l: 36, r: 10, t: 10, b: 22 }, format = (v) => v, className = '', ...rest }, ref) {
  const xm = xMax != null ? xMax : Math.max.apply(null, points.map((p) => p.x).concat([1]));
  const ym = yMax != null ? yMax : Math.max.apply(null, points.map((p) => p.y).concat([1]));
  const iw = width - pad.l - pad.r;
  const ih = height - pad.t - pad.b;
  const X = (v) => pad.l + (v / xm) * iw;
  const Y = (v) => pad.t + ih - (v / ym) * ih;
  const ticks = [0, 0.25, 0.5, 0.75, 1];
  return (
    <svg ref={ref} width="100%" height={height} viewBox={'0 0 ' + width + ' ' + height} role="img" className={className} preserveAspectRatio="none" {...rest}>
      <g className="lamp-chart__grid">
        {ticks.map((t, i) => <line key={'h' + i} x1={pad.l} x2={width - pad.r} y1={Y(ym * t)} y2={Y(ym * t)} />)}
        {ticks.map((t, i) => <line key={'v' + i} y1={pad.t} y2={pad.t + ih} x1={X(xm * t)} x2={X(xm * t)} />)}
      </g>
      {quadrant ? <line x1={X(quadrant.x)} x2={X(quadrant.x)} y1={pad.t} y2={pad.t + ih} stroke="var(--chart-threshold)" strokeDasharray="4 3" /> : null}
      {quadrant ? <line y1={Y(quadrant.y)} y2={Y(quadrant.y)} x1={pad.l} x2={width - pad.r} stroke="var(--chart-threshold)" strokeDasharray="4 3" /> : null}
      <g className="lamp-chart__axis">
        {ticks.map((t, i) => <text key={i} x={pad.l - 6} y={Y(ym * t) + 4} textAnchor="end">{format(Math.round(ym * t))}</text>)}
        {xLabel ? <text x={pad.l + iw / 2} y={height - 4} textAnchor="middle">{xLabel}</text> : null}
        {yLabel ? <text x={10} y={pad.t + 4} textAnchor="start">{yLabel}</text> : null}
      </g>
      {points.map((p, i) => (
        <circle key={i} cx={X(p.x)} cy={Y(p.y)} r={p.r || 3.5} fill={p.color || seriesColor(p.group || 0)} opacity={0.75} stroke="var(--surface-primary)" strokeWidth={0.75}>
          {p.label ? <title>{p.label}</title> : null}
        </circle>
      ))}
    </svg>
  );
}), { displayName: 'ScatterPlot' });
