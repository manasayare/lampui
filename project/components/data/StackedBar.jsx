import React from 'react';
import { seriesColor } from './ChartFrame.jsx';

/* A single row of composition — "what is this made of", not "how did it change".

   Distinct from <BarChart stacked>, which is a categorical chart with axes and
   ticks across many groups. StackedBar is one bar: context windows, cost split
   by Agent, authority split by scope, a Playbook's step outcomes. It fits on an
   inspector row and inside a table cell, where a chart would not.

   Values are absolute; the bar normalizes them. Segments below `minLabel` of the
   total are still drawn but never labelled inline, because a 3px segment with a
   number on it is noise. */

export function StackedBar({
  segments = [], total, unit, height = 8, legend = false, inlineValues = false,
  showTotal = false, minLabel = 0.08, format, label, className = '', ...rest
}) {
  const sum = total != null ? total : segments.reduce((a, s) => a + (s.value || 0), 0);
  const fmt = format || ((v) => (typeof v === 'number' ? v.toLocaleString() : v));
  const colorOf = (s, i) => s.color || seriesColor(i);

  return (
    <div className={'lamp-sbar ' + className} {...rest}>
      {label ? <span className="lamp-sbar__label">{label}</span> : null}
      <div
        className="lamp-sbar__track"
        style={{ height }}
        role="img"
        aria-label={
          (label ? label + ': ' : '') +
          segments.map((s) => s.label + ' ' + fmt(s.value)).join(', ') +
          (sum ? '. Total ' + fmt(sum) + (unit ? ' ' + unit : '') : '')
        }
      >
        {segments.map((s, i) => {
          const share = sum ? (s.value || 0) / sum : 0;
          return (
            <span
              key={s.key || s.label || i}
              className={'lamp-sbar__seg' + (s.muted ? ' lamp-sbar__seg--muted' : '')}
              title={s.label + ': ' + fmt(s.value) + (unit ? ' ' + unit : '')}
              style={{ width: share * 100 + '%', background: colorOf(s, i) }}
            >
              {inlineValues && share >= minLabel ? (
                <span className="lamp-sbar__inline">{fmt(s.value)}</span>
              ) : null}
            </span>
          );
        })}
      </div>

      {legend ? (
        <div className="lamp-sbar__legend">
          {segments.map((s, i) => (
            <span className="lamp-sbar__row" key={s.key || s.label || i}>
              <span className="lamp-sbar__swatch" style={{ background: colorOf(s, i) }} />
              <span className="lamp-sbar__name">{s.label}</span>
              <span className="lamp-sbar__val">{fmt(s.value)}</span>
            </span>
          ))}
          {showTotal ? (
            <span className="lamp-sbar__total">
              <span className="lamp-sbar__name">Total</span>
              <span className="lamp-sbar__val">{fmt(sum)}{unit ? ' ' + unit : ''}</span>
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
