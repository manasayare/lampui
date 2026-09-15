import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

const TONE = {
  neutral: 'info', info: 'info', success: 'check_circle', warning: 'warning', danger: 'error', critical: 'dangerous',
};

export function InlineNotification({ tone = 'neutral', title, children, actions, banner = false, onDismiss, className = '', ...rest }) {
  return (
    <div className={['lamp-note', 'lamp-note--' + tone, banner && 'lamp-note--banner', className].filter(Boolean).join(' ')}
      role={tone === 'danger' || tone === 'critical' ? 'alert' : 'status'} {...rest}>
      <span className="lamp-note__icon"><Icon name={TONE[tone] || 'info'} size={16} /></span>
      <span className="lamp-note__body">
        {title ? <span className="lamp-note__title">{title}</span> : null}
        {children ? <span className="lamp-note__text">{children}</span> : null}
        {actions ? <span className="lamp-note__actions">{actions}</span> : null}
      </span>
      {onDismiss ? <IconButton icon="close" label="Dismiss" size="xs" onClick={onDismiss} /> : null}
    </div>
  );
}

export function Toast({ tone = 'neutral', title, children, action, onDismiss, className = '', ...rest }) {
  return (
    <div className={'lamp-toast ' + className} role="status" {...rest}>
      <span className="lamp-note__icon" style={{ color: tone === 'success' ? 'var(--status-success)' : tone === 'danger' ? 'var(--status-danger)' : tone === 'warning' ? 'var(--status-warning)' : 'var(--text-tertiary)' }}>
        <Icon name={TONE[tone] || 'info'} size={16} />
      </span>
      <span className="lamp-note__body">
        {title ? <span className="lamp-note__title">{title}</span> : null}
        {children ? <span className="lamp-note__text">{children}</span> : null}
      </span>
      {action ? <span className="lamp-toast__undo">{action}</span> : null}
      {onDismiss ? <IconButton icon="close" label="Dismiss" size="xs" onClick={onDismiss} /> : null}
    </div>
  );
}

export function ToastStack({ children, ...rest }) {
  return <div className="lamp-toast__stack" {...rest}>{children}</div>;
}
