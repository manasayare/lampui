import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

export function InspectorPanel({ title, subtitle, glyph, badges, actions, tabs, footer, stickyFooter = true, onClose, children, className = '', ...rest }) {
  return (
    <aside className={'lamp-insp ' + className} aria-label="Inspector" {...rest}>
      {title ? (
        <header className="lamp-insp__head">
          {glyph ? <span className="lamp-insp__glyph"><Icon name={glyph} size={16} /></span> : null}
          <span className="lamp-insp__titles">
            <span className="lamp-insp__title">{title}</span>
            {subtitle ? <span className="lamp-insp__sub">{subtitle}</span> : null}
            {badges ? <span style={{ display: 'flex', gap: 4, marginTop: 4, flexWrap: 'wrap' }}>{badges}</span> : null}
          </span>
          <span className="lamp-insp__actions">
            {actions}
            {onClose ? <IconButton icon="close" label="Close inspector" size="sm" onClick={onClose} /> : null}
          </span>
        </header>
      ) : null}
      {tabs}
      <div className="lamp-insp__body">{children}</div>
      {footer ? <footer className={'lamp-insp__foot' + (stickyFooter ? ' lamp-insp__foot--sticky' : '')}>{footer}</footer> : null}
    </aside>
  );
}
