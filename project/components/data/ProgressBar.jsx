import React from 'react';

export function ProgressBar({ value = 0, max = 100, tone = 'primary', height = 6, indeterminate = false, label, className = '', ...rest }) {
  const pct = indeterminate ? 0 : Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={'lamp-bar-track ' + className} style={{ height }} role="progressbar" aria-valuenow={indeterminate ? undefined : value} aria-valuemax={max} aria-label={label} {...rest}>
      <div className={['lamp-bar-fill', tone !== 'primary' && 'lamp-bar-fill--' + tone, indeterminate && 'lamp-bar-fill--indeterminate'].filter(Boolean).join(' ')}
        style={indeterminate ? undefined : { width: pct + '%' }} />
    </div>
  );
}

export function UsageMeter({ label, used, limit, unit, tone, footnote, format = (v) => v.toLocaleString(), className = '', ...rest }) {
  const pct = limit ? (used / limit) * 100 : 0;
  const auto = pct >= 100 ? 'danger' : pct >= 85 ? 'warning' : 'primary';
  return (
    <div className={'lamp-usage ' + className} {...rest}>
      <div className="lamp-usage__top">
        {label}
        <span className="lamp-usage__val">{format(used)} / {format(limit)}{unit ? ' ' + unit : ''}</span>
      </div>
      <ProgressBar value={used} max={limit} tone={tone || auto} label={label} />
      {footnote ? <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{footnote}</span> : null}
    </div>
  );
}
