import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';

const STEP = {
  pending:      { glyph: null,             cls: '' },
  running:      { glyph: 'sync',           cls: 'running' },
  success:      { glyph: 'check',          cls: 'success' },
  warning:      { glyph: 'warning',        cls: 'warning' },
  failed:       { glyph: 'close',          cls: 'failed' },
  skipped:      { glyph: 'remove',         cls: 'skipped' },
  waitingHuman: { glyph: 'how_to_reg',     cls: 'waitingHuman' },
  mocked:       { glyph: 'inventory_2',    cls: 'skipped' },
  blocked:      { glyph: 'block',          cls: 'blocked' },
};

export function RunStep({ index, state = 'pending', title, detail, actor, tools = [], memory, duration, tokens, cost, expandable = false, onToggle, children, className = '', ...rest }) {
  const s = STEP[state] || STEP.pending;
  return (
    <div className={'lamp-step ' + className} {...rest}>
      <span className={'lamp-step__icon' + (s.cls ? ' lamp-step__icon--' + s.cls : '')}>
        {s.glyph ? <Icon name={s.glyph} size={11} /> : index}
      </span>
      <span className="lamp-step__main">
        <span className="lamp-step__title">{title}</span>
        {detail ? <span className="lamp-step__sub">{detail}</span> : null}
        {(actor || tools.length || memory) ? (
          <span className="lamp-step__chips">
            {actor ? <Badge outline icon="hexagon">{actor}</Badge> : null}
            {tools.map((t) => <Badge key={t} outline icon="square">{t}</Badge>)}
            {memory ? <Badge tone="memory" icon="database">{memory}</Badge> : null}
          </span>
        ) : null}
        {children}
      </span>
      <span className="lamp-step__right">
        {tokens ? <span>{tokens}</span> : null}
        {cost ? <span>{cost}</span> : null}
        {duration ? <span>{duration}</span> : null}
        {expandable ? <Icon name="keyboard_arrow_down" size={14} /> : null}
      </span>
    </div>
  );
}

export function RunTimeline({ steps = [], className = '', ...rest }) {
  return (
    <div className={className} role="list" aria-label="Run timeline" {...rest}>
      {steps.map((s, i) => <RunStep key={i} index={i + 1} {...s} />)}
    </div>
  );
}
