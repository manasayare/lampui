import React from 'react';
import { ToolTile } from '../objects/ToolTile.jsx';
import { StatusBadge } from '../core/StatusBadge.jsx';
import { Badge } from '../core/Badge.jsx';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';

const STATE = {
  connected: { status: 'success', label: 'Connected' },
  requiresAuth: { status: 'attention', label: 'Authorization required' },
  expired: { status: 'attention', label: 'Credentials expired' },
  degraded: { status: 'attention', label: 'Degraded' },
  error: { status: 'error', label: 'Error' },
  disabled: { status: 'disabled', label: 'Disabled' },
  available: { status: 'draft', label: 'Not connected' },
};

export const IntegrationCard = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function IntegrationCard({
  name, provider, glyph, account, state = 'connected', permission, scopes = [], usedBy = [], health, expiry, risk,
  onConnect, onReconnect, onDisconnect, onTest, actions, className = '', ...rest
}, ref) {
  const s = STATE[state] || STATE.connected;
  const tone = state === 'error' ? 'error' : (state === 'requiresAuth' || state === 'expired' || state === 'degraded') ? 'attention' : '';
  return (
    <article ref={ref} className={['lamp-integ', tone && 'lamp-integ--' + tone, className].filter(Boolean).join(' ')} {...rest}>
      <div className="lamp-integ__head">
        <ToolTile provider={provider} glyph={glyph} name={name} size="lg" state={state === 'connected' ? 'connected' : state === 'error' ? 'error' : 'authorizationRequired'} />
        <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span className="lamp-integ__name">{name}</span>
          {account ? <span className="lamp-integ__account">{account}</span> : null}
        </span>
        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <StatusBadge status={s.status} label={s.label} />
          {permission ? <Badge outline icon={permission === 'Admin' ? 'shield' : permission === 'Write' ? 'edit' : 'visibility'}>{permission}</Badge> : null}
        </span>
      </div>
      {scopes.length ? (
        <div className="lamp-integ__scopes">
          {scopes.map((sc) => (
            <span className="lamp-integ__scope" key={sc.label}>
              <Icon name={sc.write ? 'edit' : 'visibility'} size={13} style={{ color: sc.write ? 'var(--status-warning)' : 'var(--text-tertiary)' }} />
              {sc.label}
              {sc.key ? <span className="lamp-integ__scope-k">{sc.key}</span> : null}
            </span>
          ))}
        </div>
      ) : null}
      {(usedBy.length || health || expiry || risk) ? (
        <div className="lamp-integ__users">
          {usedBy.length ? <><Icon name="hexagon" size={13} />{usedBy.join(', ')}</> : null}
          {health ? <span>Health {health}</span> : null}
          {expiry ? <span>Expires {expiry}</span> : null}
          {risk ? <Badge tone={risk === 'High' ? 'danger' : risk === 'Medium' ? 'warning' : 'neutral'}>{risk} risk</Badge> : null}
        </div>
      ) : null}
      <div className="lamp-integ__actions">
        {actions}
        {onConnect ? <Button size="sm" variant="primary" icon="link">Connect</Button> : null}
        {onReconnect ? <Button size="sm" variant="primary" icon="autorenew" onClick={onReconnect}>Reconnect</Button> : null}
        {onTest ? <Button size="sm" variant="secondary" icon="play_arrow" onClick={onTest}>Test connection</Button> : null}
        {onDisconnect ? <Button size="sm" variant="danger-quiet" icon="link_off" onClick={onDisconnect}>Disconnect</Button> : null}
      </div>
    </article>
  );
}), { displayName: 'IntegrationCard' });
