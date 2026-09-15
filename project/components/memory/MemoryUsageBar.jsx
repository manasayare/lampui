import React from 'react';

const SCOPE_COLOR = {
  agent: 'var(--memory-accent)', playbook: 'var(--purple-400)', genie: 'var(--steel-500)',
  lamp: 'var(--slate-500)', evidence: 'var(--gold-500)', prompt: 'var(--dataviz-neutral-3)',
  completion: 'var(--dataviz-neutral-4)', cached: 'var(--green-500)', tool: 'var(--teal-500)',
};

export function MemoryUsageBar({ segments = [], total, unit = 'tokens', legend = true, className = '', ...rest }) {
  const sum = total != null ? total : segments.reduce((a, s) => a + s.value, 0);
  return (
    <div className={'lamp-memusage ' + className} {...rest}>
      <div className="lamp-memusage__bar" role="img" aria-label={'Context breakdown, ' + sum + ' ' + unit}>
        {segments.map((s) => (
          <span key={s.label} className="lamp-memusage__seg" title={s.label + ': ' + s.value}
            style={{ width: (s.value / sum) * 100 + '%', background: s.color || SCOPE_COLOR[s.key] || 'var(--dataviz-neutral-3)' }} />
        ))}
      </div>
      {legend ? (
        <div className="lamp-memusage__legend">
          {segments.map((s) => (
            <span className="lamp-memusage__row" key={s.label}>
              <span className="lamp-memusage__swatch" style={{ background: s.color || SCOPE_COLOR[s.key] || 'var(--dataviz-neutral-3)' }} />
              {s.label}
              <span className="lamp-memusage__val">{s.value.toLocaleString()}</span>
            </span>
          ))}
          <span className="lamp-memusage__total">Total<span className="lamp-memusage__val">{sum.toLocaleString()} {unit}</span></span>
        </div>
      ) : null}
    </div>
  );
}
