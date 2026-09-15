import React from 'react';
import { Icon } from './Icon.jsx';

/** Single source of truth for operational state → colour + icon + label. */
export const STATUS = {
  draft:      { tone: 'neutral', icon: 'edit',     label: 'Draft',          color: 'var(--runtime-draft)' },
  observed:   { tone: 'neutral', icon: 'visibility',             label: 'Observed',       color: 'var(--runtime-observed)' },
  inferred:   { tone: 'waiting', icon: 'flare',   label: 'Inferred',       color: 'var(--runtime-inferred)' },
  learning:   { tone: 'waiting', icon: 'school',  label: 'Learning',       color: 'var(--runtime-learning)' },
  simulation: { tone: 'info',    icon: 'science',   label: 'Simulation',     color: 'var(--runtime-simulation)' },
  validated:  { tone: 'success', icon: 'check',           label: 'Validated',      color: 'var(--runtime-validated)' },
  ready:      { tone: 'success', icon: 'check',           label: 'Ready',          color: 'var(--status-success)' },
  live:       { tone: 'brand',   icon: 'bolt',             label: 'Live',           color: 'var(--runtime-live)' },
  running:    { tone: 'brand',   icon: 'sync',          label: 'Running',        color: 'var(--runtime-live)' },
  waiting:    { tone: 'waiting', icon: 'hourglass_top',       label: 'Waiting',        color: 'var(--status-waiting)' },
  attention:  { tone: 'warning', icon: 'warning',  label: 'Needs attention',color: 'var(--status-warning)' },
  needsHuman: { tone: 'waiting', icon: 'how_to_reg',      label: 'Needs human',    color: 'var(--status-waiting)' },
  paused:     { tone: 'warning', icon: 'pause',           label: 'Paused',         color: 'var(--runtime-paused)' },
  stopped:    { tone: 'neutral', icon: 'stop_circle',          label: 'Stopped',        color: 'var(--runtime-stopped)' },
  error:      { tone: 'danger',  icon: 'cancel',        label: 'Error',          color: 'var(--status-danger)' },
  killed:     { tone: 'danger',  icon: 'dangerous',   label: 'Killed',         color: 'var(--runtime-killed)' },
  success:    { tone: 'success', icon: 'check_circle',    label: 'Success',        color: 'var(--status-success)' },
  skipped:    { tone: 'neutral', icon: 'remove',           label: 'Skipped',        color: 'var(--status-neutral)' },
  mocked:     { tone: 'info',    icon: 'inventory_2',             label: 'Mocked',         color: 'var(--status-info)' },
  blocked:    { tone: 'danger',  icon: 'block',             label: 'Blocked',        color: 'var(--status-danger)' },
  disabled:   { tone: 'neutral', icon: 'do_not_disturb_on',    label: 'Disabled',       color: 'var(--status-neutral)' },
};

export const StatusDot = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function StatusDot({ status = 'draft', size = 'md', pulse = false, ring = false, style, ...rest }, ref) {
  const s = STATUS[status] || STATUS.draft;
  const cls = ['lamp-dot', size === 'lg' && 'lamp-dot--lg', ring && 'lamp-dot--ring', pulse && 'lamp-dot--pulse'].filter(Boolean).join(' ');
  return <span ref={ref} className={cls} style={{ background: s.color, color: s.color, ...style }} role="img" aria-label={s.label} {...rest} />;
}), { displayName: 'StatusDot' });

export const StatusBadge = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function StatusBadge({ status = 'draft', label, mode = 'badge', size = 'md', className = '', ...rest }, ref) {
  const s = STATUS[status] || STATUS.draft;
  const text = label || s.label;
  if (mode === 'label') {
    return (
      <span className={'lamp-status-label ' + className} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: size === 'sm' ? 12 : 13, fontWeight: 500, color: 'var(--text-secondary)' }} {...rest}>
        <StatusDot status={status} pulse={status === 'running' || status === 'live'} />{text}
      </span>
    );
  }
  if (mode === 'icon') {
    return <span className={className} style={{ display: 'inline-flex', color: s.color }} role="img" aria-label={text} {...rest}><Icon name={s.icon} size={14} /></span>;
  }
  return (
    <span ref={ref} className={['lamp-badge', 'lamp-badge--' + s.tone, className].filter(Boolean).join(' ')} {...rest}>
      <Icon name={s.icon} size={11} />{text}
    </span>
  );
}), { displayName: 'StatusBadge' });
