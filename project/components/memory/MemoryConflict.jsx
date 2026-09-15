import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';
import { Badge } from '../core/Badge.jsx';
import { MemoryBadge, MemoryScope, MemoryConfidence } from './MemoryBadge.jsx';

/* Two remembered things that cannot both be true.

   A conflict is presented as a choice between claims, never as an error. LAMP
   does not know which one is right — that is the entire reason the card exists —
   so it shows both with their evidence side by side and lets the operator
   decide. Each side carries where it came from, how many times it was seen and
   when it was last confirmed, because that is what the decision actually turns
   on.

   Scope is shown per claim: a narrower scope contradicting a broader one is the
   common case (a Playbook has learnt an exception to a LAMP-level policy), and
   the resolution there is usually "keep both, scoped" rather than picking a
   winner — which is why `onKeepBoth` exists alongside the two picks.

   Never auto-resolve. Never hide the losing claim; resolving records the
   decision, and the audit trail keeps both. */

function Claim({ claim, index, selected, onPick, pickLabel, readOnly }) {
  return (
    <div className={['lamp-conflict__claim', selected && 'lamp-conflict__claim--picked'].filter(Boolean).join(' ')}>
      <div className="lamp-conflict__claim-top">
        {claim.type ? <MemoryBadge type={claim.type} /> : null}
        {claim.scope ? <MemoryScope scope={claim.scope} /> : null}
        <span style={{ marginLeft: 'auto' }}>
          <MemoryConfidence level={claim.confidence || 'medium'} value={claim.confidenceValue} />
        </span>
      </div>

      <p className="lamp-conflict__text">{claim.fact}</p>

      <div className="lamp-conflict__ev">
        {claim.evidenceCount != null ? (
          <span><Icon name="fact_check" size={12} /><b>{claim.evidenceCount}</b> pieces of evidence</span>
        ) : null}
        {claim.occurrences != null ? <span>Seen <b>{claim.occurrences}</b> times</span> : null}
        {claim.source ? <span>{claim.source}</span> : null}
        {claim.lastConfirmed ? <span>Last confirmed <b>{claim.lastConfirmed}</b></span> : null}
      </div>

      {!readOnly && onPick ? (
        <Button
          size="sm"
          variant={selected ? 'brand' : 'secondary'}
          icon={selected ? 'check' : undefined}
          onClick={() => onPick(claim.id != null ? claim.id : index)}
        >
          {pickLabel || 'Keep this'}
        </Button>
      ) : null}
    </div>
  );
}

export const MemoryConflict = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function MemoryConflict({
  claims = [], title = 'Two memories disagree', detail, resolved = false, resolution,
  picked, onPick, onKeepBoth, onInvestigate, readOnly = false, actions,
  className = '', ...rest
}, ref) {
  return (
    <article ref={ref}
      className={['lamp-conflict', resolved && 'lamp-conflict--resolved', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <header className="lamp-conflict__head">
        <span className="lamp-conflict__glyph">
          <Icon name={resolved ? 'check_circle' : 'warning'} size={14} />
        </span>
        <span className="lamp-conflict__titles">
          <span className="lamp-conflict__title">{title}</span>
          {detail ? <span className="lamp-conflict__detail">{detail}</span> : null}
        </span>
        {resolved ? <Badge tone="success" icon="check" micro>Resolved</Badge> : null}
      </header>

      <div className="lamp-conflict__claims">
        {claims.map((c, i) => (
          <Claim
            key={c.id != null ? c.id : i}
            claim={c}
            index={i}
            selected={picked != null && picked === (c.id != null ? c.id : i)}
            onPick={resolved ? undefined : onPick}
            pickLabel={c.pickLabel}
            readOnly={readOnly || resolved}
          />
        ))}
      </div>

      {resolved && resolution ? <p className="lamp-conflict__resolution">{resolution}</p> : null}

      {!resolved && !readOnly && (onKeepBoth || onInvestigate || actions) ? (
        <footer className="lamp-conflict__foot">
          {actions}
          {onKeepBoth ? (
            <Button size="sm" variant="secondary" icon="call_split" onClick={onKeepBoth}>
              Keep both, scoped
            </Button>
          ) : null}
          {onInvestigate ? (
            <Button size="sm" variant="quiet" icon="search" onClick={onInvestigate}>
              See the evidence
            </Button>
          ) : null}
        </footer>
      ) : null}
    </article>
  );
}), { displayName: 'MemoryConflict' });
