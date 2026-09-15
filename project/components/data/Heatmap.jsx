import React from 'react';

const RAMPS = {
  gold: ['var(--gold-50)', 'var(--gold-200)', 'var(--gold-400)', 'var(--gold-600)', 'var(--gold-800)'],
  blue: ['var(--blue-100)', 'var(--blue-300)', 'var(--blue-500)', 'var(--blue-600)', 'var(--blue-700)'],
  memory: ['var(--memory-subtle)', '#CFC7DD', 'var(--memory-core)', '#5C5570', 'var(--memory-dark)'],
  neutral: ['var(--neutral-100)', 'var(--neutral-200)', 'var(--neutral-400)', 'var(--neutral-600)', 'var(--neutral-800)'],
  risk: ['var(--green-100)', 'var(--green-400)', 'var(--orange-400)', 'var(--red-400)', 'var(--red-600)'],
};

export function heatColor(value, max, ramp = 'gold') {
  const steps = RAMPS[ramp] || RAMPS.gold;
  if (!value) return 'var(--surface-secondary)';
  const i = Math.min(steps.length - 1, Math.floor((value / (max || 1)) * steps.length));
  return steps[i];
}

/* Matrix / calendar heatmap. Production renderer for large matrices: Apache ECharts, same props. */
export const Heatmap = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Heatmap({ rows = [], columns = [], values = [], max, ramp = 'gold', cellSize = 18, gap = 2, showScale = true, format = (v) => v, className = '', ...rest }, ref) {
  const m = max != null ? max : Math.max.apply(null, values.reduce((a, r) => a.concat(r), [0]));
  return (
    <div ref={ref} className={className} {...rest}>
      <div style={{ display: 'grid', gridTemplateColumns: (rows.length ? 'auto ' : '') + 'repeat(' + columns.length + ', ' + cellSize + 'px)', gap, alignItems: 'center' }}>
        {rows.length ? <span /> : null}
        {columns.map((c) => <span key={c} style={{ fontSize: 10, color: 'var(--text-tertiary)', textAlign: 'center' }}>{c}</span>)}
        {values.map((row, ri) => (
          <React.Fragment key={ri}>
            {rows.length ? <span style={{ fontSize: 11, color: 'var(--text-tertiary)', paddingRight: 6, whiteSpace: 'nowrap', textAlign: 'right' }}>{rows[ri]}</span> : null}
            {row.map((v, ci) => (
              <span key={ci} className="lamp-heat__cell" title={(rows[ri] || '') + ' ' + (columns[ci] || '') + ': ' + format(v)}
                style={{ width: cellSize, height: cellSize, background: heatColor(v, m, ramp), borderRadius: 2 }} />
            ))}
          </React.Fragment>
        ))}
      </div>
      {showScale ? (
        <div className="lamp-heat__scale" style={{ marginTop: 8 }}>
          <span>Low</span>
          {(RAMPS[ramp] || RAMPS.gold).map((c) => <span key={c} className="lamp-heat__scale-swatch" style={{ background: c }} />)}
          <span>High</span>
          <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)' }}>max {format(m)}</span>
        </div>
      ) : null}
    </div>
  );
}), { displayName: 'Heatmap' });

/* Reachable from the namespace as Heatmap.heatColor. */
Heatmap.heatColor = heatColor;
