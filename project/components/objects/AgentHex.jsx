import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { StatusDot, STATUS } from '../core/StatusBadge.jsx';
import { Badge } from '../core/Badge.jsx';

export const AGENT_SIZES = { xs: [36, 31], sm: [48, 42], md: [64, 55], lg: [88, 76], xl: [120, 104] };

const STATE_BORDER = {
  idle: 'var(--agent-border)', hover: 'var(--agent-border-hover)', selected: 'var(--agent-border-selected)',
  multiSelected: 'var(--canvas-multiselect)', dragging: 'var(--agent-border-selected)', compatible: 'var(--agent-border-compatible)',
  snapReady: 'var(--gold-500)', bonding: 'var(--gold-500)', bonded: 'var(--agent-border)', running: 'var(--agent-border-running)',
  delegating: 'var(--agent-border-running)', waiting: 'var(--agent-border-waiting)', needsHuman: 'var(--agent-border-waiting)',
  success: 'var(--status-success)', warning: 'var(--agent-border-warning)', error: 'var(--agent-border-error)',
  paused: 'var(--agent-border-paused)', killed: 'var(--agent-border-killed)', disabled: 'var(--agent-border)',
  unconfigured: 'var(--border-strong)', queued: 'var(--agent-border)', retrying: 'var(--agent-border-warning)', degraded: 'var(--agent-border-warning)',
};
const ACTIVE = { selected: 1, snapReady: 1, bonding: 1, running: 1, delegating: 1, error: 1, failed: 1, killed: 1, multiSelected: 1, succeeded: 1, retrying: 1 };
/* States that earn a visible beat. Everything else is completely still. */
const PULSE = { starting: 1, running: 1, delegating: 1, retrying: 1, succeeded: 1, paused: 1 };
const PULSE_COLOR = { succeeded: 'var(--status-success)', retrying: 'var(--status-warning)', paused: 'var(--neutral-400)' };
const ROLE_GLYPH = { standard: 'smart_toy', coordinator: 'account_tree', specialist: 'target', humanSupervised: 'supervisor_account', system: 'settings', external: 'cloud' };

export function AgentHex({
  size = 'md', state = 'idle', role = 'standard', environment = 'draft', detail = 'name',
  name, roleLabel, glyph, status, badgeCount, memoryActive = false, authority, task, cost, confidence,
  tools = 0, dashed = false, labelWidth, onClick, className = '', style, ...rest
}) {
  const [w, h] = AGENT_SIZES[size] || AGENT_SIZES.md;
  const border = STATE_BORDER[state] || STATE_BORDER.idle;
  const sw = ACTIVE[state] ? 1.5 : 1;
  const fill = state === 'selected' || state === 'bonding' || state === 'snapReady' ? 'var(--agent-fill-selected)' : 'var(--agent-fill)';
  const pts = [[w * 0.25, 0], [w * 0.75, 0], [w, h / 2], [w * 0.75, h], [w * 0.25, h], [0, h / 2]].map((p) => p.join(',')).join(' ');
  const energy = environment === 'simulation' ? 'var(--simulation-energy)' : 'var(--energy-core)';
  const glyphSize = size === 'xs' ? 14 : size === 'sm' ? 16 : size === 'md' ? 18 : size === 'lg' ? 22 : 28;
  const label = (name || 'Agent') + (status ? ', ' + (STATUS[status] ? STATUS[status].label : status) : '');
  const labelled = detail !== 'glyph' && !!(name || status);
  return (
    <div className={['lamp-agent', 'lamp-agent--' + state, onClick && 'lamp-agent--interactive', className].filter(Boolean).join(' ')} style={style} {...rest}>
      <div className="lamp-agent__hex" style={{ width: w, height: h }} onClick={onClick}
        tabIndex={0} role={onClick ? 'button' : 'img'} aria-label={label}>
        <svg width={w} height={h} viewBox={'0 0 ' + w + ' ' + h} style={{ display: 'block', overflow: 'visible' }}>
          <polygon points={pts} fill={fill} stroke={border} strokeWidth={sw}
            strokeDasharray={dashed || state === 'compatible' || state === 'unconfigured' ? '3 3' : undefined} strokeLinejoin="round" />
        </svg>
        {PULSE[state] ? (
          <svg className="lamp-agent__pulse" width={w} height={h} viewBox={'0 0 ' + w + ' ' + h} aria-hidden="true">
            <polygon points={pts} fill="none" strokeWidth={2} stroke={PULSE_COLOR[state] || energy} />
          </svg>
        ) : null}
        <div className="lamp-agent__glyph" style={{ color: ACTIVE[state] ? 'var(--text-brand)' : 'var(--text-secondary)' }}>
          <Icon name={glyph || ROLE_GLYPH[role] || ROLE_GLYPH.standard} size={glyphSize} />
        </div>
        {badgeCount ? <span className="lamp-agent__badge"><Badge tone={state === 'error' ? 'danger' : 'waiting'} count>{badgeCount}</Badge></span> : null}
        {(memoryActive || tools > 0) && detail !== 'glyph' && size !== 'xs' ? (
          <span className="lamp-agent__pin">
            {memoryActive ? <Icon name="database" size={10} style={{ color: 'var(--memory-accent)' }} /> : null}
            {tools > 0 ? <Icon name="handyman" size={10} style={{ color: 'var(--text-tertiary)' }} /> : null}
          </span>
        ) : null}
      </div>
      {/* The label is wider than the hexagon, so on a lattice it can reach into
          the neighbouring column and collide with the hexagon there — odd columns
          sit half a row lower, which puts their body exactly in the label band.
          The clearance rule is labelWidth <= 0.5 * hexWidth + 2 * gap; at the
          default 104px cap that means a gap of at least 36 at size md. Pass
          labelWidth to tighten the cap instead of opening the lattice. */}
      {labelled ? (
        <div className="lamp-agent__label" style={labelWidth ? { maxWidth: labelWidth } : undefined}>
          {name ? <span className="lamp-agent__name">{name}</span> : null}
          {status ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--text-secondary)' }}>
              <StatusDot status={status} pulse={status === 'running' || status === 'live'} />
              {STATUS[status] ? STATUS[status].label : status}
            </span>
          ) : null}
          {detail === 'meta' && roleLabel ? <span className="lamp-agent__role">{roleLabel}</span> : null}
          {detail === 'meta' && task ? <span className="lamp-agent__role">{task}</span> : null}
          {detail === 'meta' && (cost || confidence || authority) ? (
            <span className="lamp-agent__meta">{[authority, confidence, cost].filter(Boolean).join(' · ')}</span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
