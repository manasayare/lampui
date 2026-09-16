import React from 'react';
import { Icon, BrandIcon } from '../core/Icon.jsx';
import { StatusDot, StatusBadge } from '../core/StatusBadge.jsx';
import { Badge } from '../core/Badge.jsx';

export const TOOL_SIZES = { sm: 24, md: 32, lg: 40, xl: 48 };
const STATE_STATUS = {
  available: null, connected: 'success', authorizationRequired: 'attention', expired: 'attention',
  healthy: 'success', degraded: 'attention', error: 'error', readOnly: null, writeEnabled: null, blocked: 'blocked', disabled: 'disabled',
};

export const ToolTile = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ToolTile({ size = 'md', state = 'connected', provider, glyph = 'extension', name, brandColor, onClick, className = '', style, ...rest }, ref) {
  const px = TOOL_SIZES[size] || TOOL_SIZES.md;
  const dot = STATE_STATUS[state];
  return (
    <span ref={ref} className={['lamp-tool', 'lamp-tool--' + state, onClick && 'lamp-tool--interactive', className].filter(Boolean).join(' ')}
      style={{ width: px, height: px, ...style }} onClick={onClick} role={onClick ? 'button' : 'img'}
      aria-label={(name || provider || 'Tool') + ' Tool'} tabIndex={onClick ? 0 : undefined} title={name || provider} {...rest}>
      {provider ? <BrandIcon slug={provider} size={px <= 24 ? 14 : px <= 32 ? 18 : 22} color={brandColor} />
        : <Icon name={glyph} size={px <= 24 ? 14 : px <= 32 ? 18 : 22} />}
      {dot ? <span className="lamp-tool__dot"><StatusDot status={dot} /></span> : null}
    </span>
  );
}), { displayName: 'ToolTile' });

export const ToolRow = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ToolRow({ provider, glyph, name, account, state = 'connected', permission, usedBy, lastActivity, health, risk, actions, onClick, className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={'lamp-toolrow ' + className} onClick={onClick} {...rest}>
      <ToolTile provider={provider} glyph={glyph} name={name} state={state} />
      <span style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
        <span className="lamp-toolrow__name">{name}</span>
        {account ? <span className="lamp-toolrow__sub">{account}</span> : null}
      </span>
      <span className="lamp-toolrow__right">
        {permission ? <Badge outline>{permission}</Badge> : null}
        {risk ? <Badge tone={risk === 'High' ? 'danger' : risk === 'Medium' ? 'warning' : 'neutral'}>{risk} risk</Badge> : null}
        {usedBy != null ? <span className="lamp-toolrow__sub">Used by {usedBy}</span> : null}
        {health ? <span className="lamp-toolrow__sub" style={{ fontFamily: 'var(--font-mono)' }}>{health}</span> : null}
        {lastActivity ? <span className="lamp-toolrow__sub" style={{ fontFamily: 'var(--font-mono)' }}>{lastActivity}</span> : null}
        <StatusBadge status={state === 'connected' || state === 'healthy' ? 'success' : state === 'error' ? 'error' : state === 'blocked' ? 'blocked' : 'attention'}
          label={state === 'authorizationRequired' ? 'Auth required' : state === 'expired' ? 'Expired' : state === 'degraded' ? 'Degraded' : state === 'connected' ? 'Connected' : undefined} />
        {actions}
      </span>
    </div>
  );
}), { displayName: 'ToolRow' });
