import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';
import { Badge } from '../core/Badge.jsx';
import { MemoryBadge, MemoryScope, MemoryConfidence } from './MemoryBadge.jsx';

export const MemoryFact = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function MemoryFact({
  type = 'explicitFact', scope = 'genie', fact, confidence = 'high', confidenceValue, showConfidenceValue = false,
  source, evidenceCount, lastConfirmed, freshness, owner, contradictions = 0, access, state = 'approved',
  actions, onConfirm, onCorrect, onIgnore, className = '', ...rest
}, ref) {
  const conflict = contradictions > 0;
  return (
    <article ref={ref} className={['lamp-fact', conflict && 'lamp-fact--conflict', 'lamp-fact--' + state, className].filter(Boolean).join(' ')} {...rest}>
      <div className="lamp-fact__top">
        <MemoryBadge type={type} />
        <MemoryScope scope={scope} />
        {access ? <Badge outline icon={access === 'Private' ? 'lock' : 'group'}>{access}</Badge> : null}
        {state === 'stale' ? <Badge tone="warning" icon="schedule">Stale</Badge> : null}
        {state === 'pendingReview' ? <Badge tone="waiting" icon="how_to_reg">Needs confirmation</Badge> : null}
        {conflict ? <Badge tone="warning" icon="warning">{contradictions} contradiction{contradictions > 1 ? 's' : ''}</Badge> : null}
        <span style={{ marginLeft: 'auto' }}><MemoryConfidence level={confidence} value={confidenceValue} showValue={showConfidenceValue} /></span>
      </div>
      <p className="lamp-fact__text">{fact}</p>
      {(source || evidenceCount != null) ? (
        <div className="lamp-fact__ev">
          <Icon name="fact_check" size={13} style={{ color: 'var(--memory-accent)' }} />
          {evidenceCount != null ? <span><b>{evidenceCount}</b> pieces of evidence</span> : null}
          {source ? <span>{evidenceCount != null ? '· ' : ''}{source}</span> : null}
        </div>
      ) : null}
      <div className="lamp-fact__meta">
        {lastConfirmed ? <span>Last confirmed <b>{lastConfirmed}</b></span> : null}
        {freshness ? <span>Updated <b>{freshness}</b></span> : null}
        {owner ? <span>Owner <b>{owner}</b></span> : null}
      </div>
      {(actions || onConfirm || onCorrect || onIgnore) ? (
        <div className="lamp-fact__actions">
          {actions}
          {onConfirm ? <Button size="sm" variant="secondary" icon="check" onClick={onConfirm}>Confirm</Button> : null}
          {onCorrect ? <Button size="sm" variant="ghost" icon="edit" onClick={onCorrect}>Correct</Button> : null}
          {onIgnore ? <Button size="sm" variant="quiet" onClick={onIgnore}>Ignore</Button> : null}
        </div>
      ) : null}
    </article>
  );
}), { displayName: 'MemoryFact' });
