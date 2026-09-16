import React from 'react';
import { heatColor } from './Heatmap.jsx';

/* LAMP-native hive visualization: a value per Agent slot on the hexagonal lattice.
   Production renderer: visx — this is product language, not a generic chart. */
export const HexHeatmap = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function HexHeatmap({ cells = [], size = 26, gap = 2, max, ramp = 'gold', showLabels = false, onSelect, className = '', ...rest }, ref) {
  const w = size;
  const h = size / 1.1547;
  const stepX = w * 0.75 + gap;
  const stepY = h + gap;
  const m = max != null ? max : Math.max.apply(null, cells.map((c) => c.value || 0).concat([1]));
  let maxX = 0, maxY = 0;
  const placed = cells.map((c, i) => {
    const x = c.col * stepX;
    const y = c.row * stepY + (Math.abs(c.col % 2) ? stepY / 2 : 0);
    if (x + w > maxX) maxX = x + w;
    if (y + h > maxY) maxY = y + h;
    return { ...c, x, y, key: c.key == null ? i : c.key };
  });
  const pts = [[w * 0.25, 0], [w * 0.75, 0], [w, h / 2], [w * 0.75, h], [w * 0.25, h], [0, h / 2]].map((p) => p.join(',')).join(' ');
  return (
    <svg ref={ref} width={maxX} height={maxY} viewBox={'0 0 ' + maxX + ' ' + maxY} role="img" className={className} {...rest}>
      {placed.map((c) => (
        <g key={c.key} transform={'translate(' + c.x + ',' + c.y + ')'} onClick={onSelect ? () => onSelect(c) : undefined} style={onSelect ? { cursor: 'pointer' } : undefined}>
          <polygon points={pts} fill={c.color || heatColor(c.value, m, ramp)} stroke={c.selected ? 'var(--gold-500)' : 'var(--border-subtle)'} strokeWidth={c.selected ? 1.5 : 0.75} />
          <title>{(c.label || '') + (c.value != null ? ': ' + c.value : '')}</title>
          {showLabels && c.short ? <text x={w / 2} y={h / 2 + 3} textAnchor="middle" style={{ fill: 'var(--text-primary)', font: '600 8px var(--font-sans)' }}>{c.short}</text> : null}
        </g>
      ))}
    </svg>
  );
}), { displayName: 'HexHeatmap' });
