import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function InspectorSection({ label, count, actions, collapsible = true, defaultOpen = true, advanced = false, children, className = '', ...rest }) {
  const [open, setOpen] = React.useState(advanced ? false : defaultOpen);
  const isOpen = collapsible ? open : true;
  return (
    <section className={['lamp-insp-sec', !collapsible && 'lamp-insp-sec--static', advanced && 'lamp-insp-sec--advanced', className].filter(Boolean).join(' ')} {...rest}>
      <button type="button" className="lamp-insp-sec__head" onClick={() => collapsible && setOpen(!open)} aria-expanded={isOpen}>
        <span className="lamp-insp-sec__label">{label}</span>
        {count != null ? <span className="lamp-insp-sec__count">{count}</span> : null}
        {actions ? <span style={{ marginLeft: 'auto', display: 'flex', gap: 2 }} onClick={(e) => e.stopPropagation()}>{actions}</span> : null}
        {collapsible ? <span className={'lamp-insp-sec__twist' + (isOpen ? ' lamp-insp-sec__twist--open' : '')} style={actions ? { marginLeft: 4 } : undefined}><Icon name="keyboard_arrow_down" size={14} /></span> : null}
      </button>
      {isOpen ? <div className="lamp-insp-sec__body">{children}</div> : null}
    </section>
  );
}

export function PropertyRow({ label, value, mono = false, stack = false, inherited = false, empty, children, className = '', ...rest }) {
  const content = children != null ? children : (value == null || value === '' ? <span className="lamp-prop__empty">{empty || 'Not set'}</span> : value);
  return (
    <div className={['lamp-prop', stack && 'lamp-prop--stack', inherited && 'lamp-prop--inherited', className].filter(Boolean).join(' ')} {...rest}>
      <span className="lamp-prop__label">{label}</span>
      <span className={'lamp-prop__value' + (mono ? ' lamp-prop__value--mono' : '')}>
        {content}
        {inherited ? <span className="lamp-prop__inherit">Inherited</span> : null}
      </span>
    </div>
  );
}
