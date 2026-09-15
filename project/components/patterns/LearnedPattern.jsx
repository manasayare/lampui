import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';
import { MemoryConfidence } from '../memory/MemoryBadge.jsx';

export function LearnedPattern({
  kind = 'observed', observation, occurrences, period, confidence = 'high', evidence = [], entities,
  onUse, onReview, onIgnore, actions, note, className = '', ...rest
}) {
  const label = kind === 'inferred' ? 'LAMP inferred' : kind === 'suggested' ? 'LAMP suggests' : kind === 'proposal' ? 'Process proposal' : 'LAMP noticed';
  return (
    <article className={'lamp-learn ' + className} {...rest}>
      <div className="lamp-learn__top">
        <Icon name="auto_awesome" size={14} style={{ color: 'var(--status-waiting-text)' }} />
        <span className="lamp-learn__note">{note || label}</span>
        <span style={{ marginLeft: 'auto' }}><MemoryConfidence level={confidence} /></span>
      </div>
      <p className="lamp-learn__quote">{observation}</p>
      <div className="lamp-learn__ev">
        {occurrences != null ? <span>Observed <b>{occurrences} times</b>{period ? ' over ' + period : ''}</span> : null}
        {evidence.map((e) => <span key={e}>{e}</span>)}
      </div>
      {entities ? <div className="lamp-learn__ev">{entities}</div> : null}
      <div className="lamp-learn__actions">
        {actions}
        {onUse ? <Button size="sm" variant="primary" icon="check" onClick={onUse}>Use this pattern</Button> : null}
        {onReview ? <Button size="sm" variant="secondary" icon="visibility" onClick={onReview}>Review</Button> : null}
        {onIgnore ? <Button size="sm" variant="quiet" onClick={onIgnore}>Ignore</Button> : null}
      </div>
    </article>
  );
}
