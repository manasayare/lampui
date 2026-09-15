import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';

const CELL = {
  granted:   { glyph: 'check', cls: 'granted', label: 'Granted' },
  inherited: { glyph: 'check', cls: 'inherited', label: 'Inherited' },
  denied:    { glyph: 'remove', cls: 'denied', label: 'Not granted' },
  overridden:{ glyph: 'edit', cls: 'granted', label: 'Overridden' },
  conflict:  { glyph: 'warning', cls: 'conflict', label: 'Conflict' },
};

export function PermissionCell({ state = 'denied', onClick, ...rest }) {
  const c = CELL[state] || CELL.denied;
  return (
    <span className={'lamp-perm__cell lamp-perm__cell--' + c.cls} role={onClick ? 'button' : 'img'} aria-label={c.label} title={c.label} onClick={onClick} {...rest}>
      <Icon name={c.glyph} size={14} />
    </span>
  );
}

export function PermissionMatrix({ resources = [], actions = [], values = {}, onToggle, scopeLabel = 'Resource', className = '', ...rest }) {
  return (
    <table className={'lamp-perm ' + className} {...rest}>
      <thead>
        <tr>
          <th><span className="lamp-perm__scope">{scopeLabel}</span></th>
          {actions.map((a) => <th key={a}>{a}</th>)}
        </tr>
      </thead>
      <tbody>
        {resources.map((r) => (
          <tr key={r.key || r.label}>
            <td>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                {r.glyph ? <Icon name={r.glyph} size={14} style={{ color: 'var(--text-tertiary)' }} /> : null}
                {r.label}
                {r.scope ? <Badge outline>{r.scope}</Badge> : null}
              </span>
            </td>
            {actions.map((a) => {
              const state = (values[r.key || r.label] || {})[a] || 'denied';
              return <td key={a}><PermissionCell state={state} onClick={onToggle ? () => onToggle(r, a, state) : undefined} /></td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function RoleBadge({ role, scope, ...rest }) {
  const tone = role === 'Owner' ? 'brand' : role === 'Admin' ? 'info' : role === 'Viewer' ? 'neutral' : 'neutral';
  return <Badge tone={tone} icon={role === 'Owner' ? 'workspace_premium' : role === 'Admin' ? 'shield' : 'person'} {...rest}>{scope ? role + ' · ' + scope : role}</Badge>;
}
