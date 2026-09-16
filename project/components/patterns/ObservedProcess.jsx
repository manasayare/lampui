import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';
import { EntityChip } from '../objects/EntityChip.jsx';

export const ObservedProcess = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ObservedProcess({ steps = [], showLinks = true, className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={'lamp-proc ' + className} role="list" {...rest}>
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <div className={['lamp-proc__step', s.kind === 'exception' && 'lamp-proc__step--exception', s.kind === 'rework' && 'lamp-proc__step--rework'].filter(Boolean).join(' ')} role="listitem">
            <span className="lamp-proc__n">{i + 1}</span>
            <span className="lamp-proc__main">
              <span className="lamp-proc__title">{s.title}</span>
              <span className="lamp-proc__who">
                {s.actor ? <EntityChip type="person" name={s.actor} /> : null}
                {s.tool ? <Badge outline icon="square">{s.tool}</Badge> : null}
                {s.channel ? <Badge outline icon="forum">{s.channel}</Badge> : null}
                {s.kind === 'approval' ? <Badge tone="waiting" icon="how_to_reg">Approval</Badge> : null}
                {s.kind === 'handoff' ? <Badge outline icon="swap_horiz">Handoff</Badge> : null}
                {s.kind === 'exception' ? <Badge tone="warning" icon="report">Exception</Badge> : null}
                {s.kind === 'rework' ? <Badge tone="warning" icon="refresh">Rework</Badge> : null}
              </span>
            </span>
            <span className="lamp-proc__right">
              {s.frequency ? <span>{s.frequency}</span> : null}
              {s.duration ? <span>{s.duration}</span> : null}
            </span>
          </div>
          {showLinks && i < steps.length - 1 ? <span className="lamp-proc__link" /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}), { displayName: 'ObservedProcess' });
