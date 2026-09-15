import React from 'react';
import { Icon } from '../core/Icon.jsx';

const ENV = {
  draft:      { glyph: 'edit',        label: 'Draft',             detail: 'Nothing here can act on the business yet.' },
  simulation: { glyph: 'science',     label: 'Simulation',        detail: 'Tool writes are mocked. Nothing leaves LAMP.' },
  live:       { glyph: 'bolt',        label: 'Live',              detail: 'Agents can act on the business.' },
  paused:     { glyph: 'pause',       label: 'Paused',            detail: 'No new runs will start.' },
  killed:     { glyph: 'dangerous',   label: 'Emergency stopped', detail: 'All external writes are blocked.' },
};

export const EnvironmentBanner = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function EnvironmentBanner({ environment = 'draft', scope, detail, actions, className = '', ...rest }, ref) {
  const e = ENV[environment] || ENV.draft;
  return (
    <div ref={ref} className={['lamp-envbar', 'lamp-envbar--' + environment, className].filter(Boolean).join(' ')} role={environment === 'killed' ? 'alert' : 'status'} {...rest}>
      <span className="lamp-envbar__label"><Icon name={e.glyph} size={14} />{e.label}</span>
      {scope ? <span style={{ fontWeight: 500 }}>{scope}</span> : null}
      <span className="lamp-envbar__detail">{detail || e.detail}</span>
      {actions ? <span className="lamp-envbar__right">{actions}</span> : null}
    </div>
  );
}), { displayName: 'EnvironmentBanner' });
