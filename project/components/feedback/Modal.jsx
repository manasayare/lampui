import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { Button } from '../core/Button.jsx';

export function Modal({ open = true, title, subtitle, glyph, size = 'md', critical = false, footer, onClose, children, className = '', ...rest }) {
  if (!open) return null;
  const width = size === 'sm' ? 'var(--modal-width-sm)' : size === 'lg' ? 'var(--modal-width-lg)' : 'var(--modal-width-md)';
  return (
    <div className="lamp-scrim" onClick={onClose}>
      <div className={['lamp-modal', critical && 'lamp-modal--critical', className].filter(Boolean).join(' ')} style={{ width }}
        role={critical ? 'alertdialog' : 'dialog'} aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()} {...rest}>
        <div className="lamp-modal__head">
          {glyph ? <Icon name={glyph} size={18} style={{ marginTop: 2, color: critical ? 'var(--status-danger)' : 'var(--text-secondary)' }} /> : null}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 className="lamp-modal__title">{title}</h2>
            {subtitle ? <p className="lamp-modal__sub">{subtitle}</p> : null}
          </div>
          {onClose ? <IconButton icon="close" label="Close" size="sm" onClick={onClose} /> : null}
        </div>
        <div className="lamp-modal__body">{children}</div>
        {footer ? <div className="lamp-modal__foot">{footer}</div> : null}
      </div>
    </div>
  );
}

export function CriticalConfirmation({ open = true, title, consequences = [], scope, confirmLabel = 'Confirm', cancelLabel = 'Cancel', onCancel, onConfirm, children, ...rest }) {
  return (
    <Modal open={open} critical glyph="dangerous" size="sm" title={title} onClose={onCancel}
      footer={<><Button size="md" variant="secondary" onClick={onCancel}>{cancelLabel}</Button><Button size="md" variant="danger" onClick={onConfirm}>{confirmLabel}</Button></>} {...rest}>
      {scope ? <p style={{ margin: '0 0 8px', color: 'var(--text-primary)' }}>{scope}</p> : null}
      {consequences.length ? (
        <>
          <p style={{ margin: '0 0 4px' }}>Immediately:</p>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: '19px' }}>{consequences.map((c) => <li key={c}>{c}</li>)}</ul>
        </>
      ) : null}
      {children}
    </Modal>
  );
}

export function Drawer({ open = true, title, side = 'right', width, actions, footer, onClose, children, className = '', ...rest }) {
  if (!open) return null;
  return (
    <aside className={['lamp-drawer', side === 'left' && 'lamp-drawer--left', className].filter(Boolean).join(' ')} style={width ? { width } : undefined}
      role="dialog" aria-label={title} {...rest}>
      <header className="lamp-drawer__head">
        <span className="lamp-drawer__title">{title}</span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
          {actions}
          {onClose ? <IconButton icon="close" label="Close" size="sm" onClick={onClose} /> : null}
        </span>
      </header>
      <div className="lamp-drawer__body">{children}</div>
      {footer ? <div className="lamp-modal__foot">{footer}</div> : null}
    </aside>
  );
}

export function Popover({ title, children, x, y, className = '', style, ...rest }) {
  return (
    <div className={'lamp-popover ' + className} style={{ position: x != null ? 'absolute' : undefined, left: x, top: y, ...style }} role="dialog" {...rest}>
      {title ? <div className="lamp-popover__head">{title}</div> : null}
      {children}
    </div>
  );
}
