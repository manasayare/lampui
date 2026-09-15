import React from 'react';

export function Card({ padding = 'md', raised = false, interactive = false, selected = false, tone = 'default', header, footer, title, actions, children, className = '', ...rest }) {
  const structured = header || footer || title || actions;
  const cls = ['lamp-card', !structured && padding === 'md' && 'lamp-card--pad', !structured && padding === 'sm' && 'lamp-card--pad-sm', raised && 'lamp-card--raised', interactive && 'lamp-card--interactive', selected && 'lamp-card--selected', tone === 'danger' && 'lamp-card--danger', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {structured && (header || title || actions) ? (
        <div className="lamp-card__head">{header || <h3 className="lamp-card__title">{title}</h3>}{actions ? <div style={{ display: 'flex', gap: 4 }}>{actions}</div> : null}</div>
      ) : null}
      {structured ? <div className="lamp-card__body">{children}</div> : children}
      {footer ? <div className="lamp-card__foot">{footer}</div> : null}
    </div>
  );
}
