import React from 'react';
import { Button } from '../core/Button.jsx';
import { Badge } from '../core/Badge.jsx';
import { Icon } from '../core/Icon.jsx';
import { StatusBadge } from '../core/StatusBadge.jsx';

export function ApprovalCard({
  question, amount, tone = 'default', kind = 'approve', requestedBy, playbook, dueIn, facts = [],
  options = [], onApprove, onReject, onEdit, onRequestInfo, onEscalate, evidence, className = '', ...rest
}) {
  return (
    <article className={['lamp-approval', tone !== 'default' && 'lamp-approval--' + tone, className].filter(Boolean).join(' ')} {...rest}>
      <div className="lamp-approval__top">
        <Badge tone={tone === 'critical' ? 'danger' : 'waiting'} icon="how_to_reg" micro>Approval required</Badge>
        {playbook ? <Badge outline icon="layers">{playbook}</Badge> : null}
        {requestedBy ? <Badge outline icon="hexagon">{requestedBy}</Badge> : null}
        {dueIn ? <span className="lamp-approval__timer">{dueIn}</span> : null}
      </div>
      <h3 className="lamp-approval__q">{question}</h3>
      {amount ? <div className="lamp-approval__amount">{amount}</div> : null}
      {facts.length ? (
        <div className="lamp-approval__facts">
          {facts.map((f) => (
            <React.Fragment key={f.label}>
              <span className="lamp-approval__k">{f.label}</span>
              <span className="lamp-approval__v">{f.value}</span>
            </React.Fragment>
          ))}
        </div>
      ) : null}
      {evidence}
      <div className="lamp-approval__actions">
        {kind === 'choice' ? options.map((o) => (
          <Button key={o.id} size="md" variant={o.primary ? 'primary' : 'secondary'} onClick={o.onSelect}>{o.label}</Button>
        )) : (
          <>
            {onApprove ? <Button size="md" variant={tone === 'critical' ? 'danger' : 'primary'} icon="check" onClick={onApprove}>{tone === 'critical' ? 'Approve anyway' : 'Approve'}</Button> : null}
            {onEdit ? <Button size="md" variant="secondary" icon="edit" onClick={onEdit}>Edit before approving</Button> : null}
            {onReject ? <Button size="md" variant="secondary" icon="close" onClick={onReject}>Reject</Button> : null}
            {onRequestInfo ? <Button size="md" variant="ghost" onClick={onRequestInfo}>Request information</Button> : null}
            {onEscalate ? <Button size="md" variant="quiet" onClick={onEscalate}>Escalate</Button> : null}
          </>
        )}
      </div>
    </article>
  );
}

export function HumanCheckpoint({ label = 'Human checkpoint', detail, ...rest }) {
  return (
    <span className="lamp-checkpoint" {...rest}>
      <Icon name="how_to_reg" size={14} />
      <b style={{ fontWeight: 600 }}>{label}</b>
      {detail ? <span>{detail}</span> : null}
    </span>
  );
}
