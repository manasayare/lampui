import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

const HEX_POINTS = '25,0 75,0 100,50 75,100 25,100 0,50';

/** Hexagonal Agent identity — the chat's signature mark. */
export const ChatAvatar = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ChatAvatar({ role = 'agent', initials, glyph, state = 'idle', size = 26 }, ref) {
  if (role === 'user') {
    return <span className="lamp-cm__avatar lamp-cm__avatar--user" style={{ width: size, height: size }}>{initials || 'You'.slice(0, 2)}</span>;
  }
  if (role === 'system' || role === 'tool') {
    return (
      <span className={'lamp-cm__avatar lamp-cm__avatar--' + role} style={{ width: size, height: size }}>
        <Icon name={glyph || (role === 'tool' ? 'square' : 'info')} size={13} />
      </span>
    );
  }
  const stroke = state === 'acting' ? 'var(--gold-500)' : state === 'failed' ? 'var(--status-danger)' : 'var(--border-strong)';
  const fill = state === 'acting' ? 'var(--gold-100)' : 'var(--surface-secondary)';
  return (
    <span ref={ref} className="lamp-cm__avatar" style={{ width: size, height: size }}>
      <svg className="lamp-cm__hex" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points={HEX_POINTS} fill={fill} stroke={stroke} strokeWidth={state === 'acting' ? 6 : 4} vectorEffect="non-scaling-stroke" />
      </svg>
      {glyph ? <Icon name={glyph} size={12} className="lamp-cm__ini" /> : <span className="lamp-cm__ini">{initials || 'AG'}</span>}
    </span>
  );
}), { displayName: 'ChatAvatar' });

/** Visible work: what the Agent called, read and used — never hidden behind a spinner. */
export const ChatActivity = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ChatActivity({ items = [], max = 4, onSelect }, ref) {
  const [open, setOpen] = React.useState(false);
  const shown = open ? items : items.slice(0, max);
  const rest = items.length - shown.length;
  const glyph = (k) => (k === 'tool' ? 'square' : k === 'memory' ? 'database' : k === 'skill' ? 'flare' : k === 'human' ? 'how_to_reg' : 'bolt');
  return (
    <div ref={ref} className="lamp-act">
      {shown.map((a, i) => (
        <span key={i} className={['lamp-act__chip', 'lamp-act__chip--' + (a.kind || 'tool'), a.state === 'running' && 'lamp-act__chip--running', a.state === 'failed' && 'lamp-act__chip--failed'].filter(Boolean).join(' ')}
          title={a.detail} onClick={onSelect ? () => onSelect(a) : undefined} style={onSelect ? { cursor: 'pointer' } : undefined}>
          <Icon name={a.glyph || glyph(a.kind)} size={11} />
          {a.label}
          {a.duration ? <span className="lamp-act__dur">{a.duration}</span> : null}
        </span>
      ))}
      {rest > 0 ? <button type="button" className="lamp-act__more" onClick={() => setOpen(true)}>{'+' + rest + ' more'}</button> : null}
      {open && items.length > max ? <button type="button" className="lamp-act__more" onClick={() => setOpen(false)}>Show less</button> : null}
    </div>
  );
}), { displayName: 'ChatActivity' });

/** Provenance you can open — replaces "trust me" with "here's where it came from". */
export const ChatCitation = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ChatCitation({ index, source, scope, onClick }, ref) {
  return (
    <button ref={ref} type="button" className="lamp-cite" onClick={onClick} title={[source, scope].filter(Boolean).join(' · ')} aria-label={'Evidence ' + index + (source ? ': ' + source : '')}>
      <Icon name="fact_check" size={9} />{index}
    </button>
  );
}), { displayName: 'ChatCitation' });

export const ChatDayDivider = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ChatDayDivider({ label }, ref) {
  return <div ref={ref} className="lamp-chat__day"><span>{label}</span></div>;
}), { displayName: 'ChatDayDivider' });

export const ChatMessage = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ChatMessage({
  role = 'agent', author, roleLabel, initials, glyph, timestamp, grouped = false,
  state = 'idle', status, streaming = false, activity = [], citations = [], attachment,
  actions = true, onRetry, onCopy, onInspect, children, className = '', ...rest
}, ref) {
  const failed = state === 'failed' || status === 'failed';
  return (
    <article ref={ref} className={['lamp-cm', 'lamp-cm--' + role, grouped && 'lamp-cm--grouped', state === 'acting' && 'lamp-cm--acting', failed && 'lamp-cm--failed', className].filter(Boolean).join(' ')} {...rest}>
      <ChatAvatar role={role} initials={initials} glyph={glyph} state={state} />
      <div className="lamp-cm__body">
        <div className="lamp-cm__meta">
          <span className="lamp-cm__who">{author || (role === 'user' ? 'You' : role === 'tool' ? 'Tool' : role === 'system' ? 'LAMP' : 'Agent')}</span>
          {roleLabel ? <span className="lamp-cm__role">{roleLabel}</span> : null}
          {timestamp ? <span className="lamp-cm__time">{timestamp}</span> : null}
        </div>
        {activity.length ? <ChatActivity items={activity} /> : null}
        <div className="lamp-cm__text">
          {children}
          {citations.length ? (
            <span style={{ marginLeft: 2 }}>{citations.map((c, i) => <ChatCitation key={i} index={c.index || i + 1} source={c.source} scope={c.scope} onClick={c.onClick} />)}</span>
          ) : null}
          {streaming ? <span className="lamp-cm__caret" /> : null}
        </div>
        {attachment ? <div className="lamp-cm__attach">{attachment}</div> : null}
        {status && status !== 'failed' ? <div className="lamp-cm__status"><Icon name={status === 'sending' ? 'schedule' : 'check'} size={11} />{status === 'sending' ? 'Sending' : status}</div> : null}
        {failed ? (
          <div className="lamp-cm__status lamp-cm__status--failed">
            <Icon name="error" size={11} />Not delivered
            {onRetry ? <button type="button" className="lamp-act__more" onClick={onRetry}>Retry</button> : null}
          </div>
        ) : null}
      </div>
      {actions ? (
        <div className="lamp-cm__tools">
          {onInspect ? <IconButton icon="open_in_new" label="Open in Inspector" size="xs" onClick={onInspect} /> : null}
          {onCopy ? <IconButton icon="content_copy" label="Copy message" size="xs" onClick={onCopy} /> : null}
        </div>
      ) : null}
    </article>
  );
}), { displayName: 'ChatMessage' });
