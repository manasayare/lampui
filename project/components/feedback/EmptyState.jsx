import React from 'react';
import { Icon } from '../core/Icon.jsx';

export const EmptyState = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function EmptyState({ glyph = 'inbox', title, description, action, secondaryAction, align = 'center', className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={['lamp-empty', align === 'left' && 'lamp-empty--left', className].filter(Boolean).join(' ')} {...rest}>
      <span className="lamp-empty__icon"><Icon name={glyph} size={18} /></span>
      {title ? <span className="lamp-empty__title">{title}</span> : null}
      {description ? <span className="lamp-empty__text">{description}</span> : null}
      {(action || secondaryAction) ? <span className="lamp-empty__actions">{action}{secondaryAction}</span> : null}
    </div>
  );
}), { displayName: 'EmptyState' });
