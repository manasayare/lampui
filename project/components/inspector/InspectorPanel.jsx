import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { Tabs } from '../navigation/Tabs.jsx';

/* The Inspector's anatomy, as separate parts.

   InspectorPanel still takes `title`, `tabs` and `footer` as props — that is the
   short path, and most surfaces should keep using it. The parts exist for the
   cases the props can't reach: a header with a custom identity block, a footer
   that scrolls with the body, tabs driven by something other than the panel.
   They are the same implementation, so a composed Inspector and a prop-driven
   one are pixel-identical. */

export function InspectorHeader({ title, subtitle, glyph, badges, actions, onClose, className = '', ...rest }) {
  return (
    <header className={'lamp-insp__head ' + className} {...rest}>
      {glyph ? <span className="lamp-insp__glyph"><Icon name={glyph} size={16} /></span> : null}
      <span className="lamp-insp__titles">
        <span className="lamp-insp__title">{title}</span>
        {subtitle ? <span className="lamp-insp__sub">{subtitle}</span> : null}
        {badges ? <span className="lamp-insp__badges">{badges}</span> : null}
      </span>
      <span className="lamp-insp__actions">
        {actions}
        {onClose ? <IconButton icon="close" label="Close inspector" size="sm" onClick={onClose} /> : null}
      </span>
    </header>
  );
}

/* Inspector tabs sit flush under the header and use the underline variant, so the
   panel reads as one surface rather than a card stack. Keep them to the object's
   own facets — Purpose, Skills, Tools, Memory, Runtime — never app navigation. */
export function InspectorTabs({ tabs = [], value, onChange, className = '', ...rest }) {
  return (
    <div className={'lamp-insp__tabs ' + className}>
      <Tabs tabs={tabs} value={value} onChange={onChange} variant="underline" {...rest} />
    </div>
  );
}

/* Sticky by default: the Inspector's commit actions must stay reachable however
   long the body runs. `align="split"` pushes the first child left and the rest
   right — the usual Cancel / Apply shape. */
export function InspectorFooter({ sticky = true, align = 'end', children, className = '', ...rest }) {
  const cls = [
    'lamp-insp__foot',
    sticky && 'lamp-insp__foot--sticky',
    align !== 'end' && 'lamp-insp__foot--' + align,
    className,
  ].filter(Boolean).join(' ');
  return <footer className={cls} {...rest}>{children}</footer>;
}

export function InspectorPanel({ title, subtitle, glyph, badges, actions, tabs, footer, stickyFooter = true, onClose, children, className = '', ...rest }) {
  return (
    <aside className={'lamp-insp ' + className} aria-label="Inspector" {...rest}>
      {title ? (
        <InspectorHeader
          title={title}
          subtitle={subtitle}
          glyph={glyph}
          badges={badges}
          actions={actions}
          onClose={onClose}
        />
      ) : null}
      {tabs}
      <div className="lamp-insp__body">{children}</div>
      {footer ? <InspectorFooter sticky={stickyFooter}>{footer}</InspectorFooter> : null}
    </aside>
  );
}
