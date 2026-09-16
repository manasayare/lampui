import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { Button } from '../core/Button.jsx';
import { ChatAvatar } from './ChatMessage.jsx';

/** What is happening right now, in words, with a way to stop it. */
export const ChatStatus = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ChatStatus({ state = 'idle', author, action, detail, tokens, onStop, onInspect }, ref) {
  if (state === 'idle') {
    return (
      <div className="lamp-chat__status lamp-chat__status--idle">
        <Icon name="check_circle" size={13} />
        {detail || 'Up to date. Nothing is running.'}
      </div>
    );
  }
  return (
    <div ref={ref} className="lamp-chat__status" role="status">
      <span className="lamp-chat__status-hex"><ChatAvatar role="agent" glyph="bolt" state="acting" size={16} /></span>
      <span><b style={{ fontWeight: 600 }}>{author || 'Agent'}</b> {action || 'is working'}</span>
      <span className="lamp-chat__dots" aria-hidden="true"><i /><i /><i /></span>
      {detail ? <span style={{ color: 'var(--text-tertiary)' }}>{detail}</span> : null}
      <span className="lamp-chat__status-right">
        {tokens ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-tertiary)' }}>{tokens}</span> : null}
        {onInspect ? <Button size="xs" variant="quiet" onClick={onInspect}>Open run</Button> : null}
        {onStop ? <Button size="xs" variant="secondary" icon="stop_circle" onClick={onStop}>Stop</Button> : null}
      </span>
    </div>
  );
}), { displayName: 'ChatStatus' });

export const AgentChat = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function AgentChat({
  title, scope, scopeGlyph = 'hive', environment, crew = [], actions, status, composer,
  flush = false, autoScroll = true, children, className = '', ...rest
}, ref) {
  const threadRef = React.useRef(null);
  React.useEffect(() => {
    const el = threadRef.current;
    if (autoScroll && el) el.scrollTop = el.scrollHeight;
  }, [children, autoScroll]);
  return (
    <section ref={ref} className={['lamp-chat', flush && 'lamp-chat--flush', className].filter(Boolean).join(' ')} aria-label={title || 'Conversation'} {...rest}>
      <header className="lamp-chat__head">
        <span className="lamp-chat__id">
          <span className="lamp-chat__title">{title}</span>
          {scope ? <span className="lamp-chat__scope"><Icon name={scopeGlyph} size={11} /><b>{scope}</b>{environment ? <>· {environment}</> : null}</span> : null}
        </span>
        {crew.length ? (
          <span className="lamp-chat__crew" title={crew.map((c) => c.name).join(', ')}>
            {crew.slice(0, 4).map((c) => <span key={c.name}><ChatAvatar role={c.role || 'agent'} initials={c.initials} glyph={c.glyph} state={c.state} size={22} /></span>)}
            {crew.length > 4 ? <span style={{ fontSize: 11, color: 'var(--text-tertiary)', marginLeft: 6 }}>+{crew.length - 4}</span> : null}
          </span>
        ) : null}
        <span className="lamp-chat__actions">
          {actions}
          <IconButton icon="more_horiz" label="Conversation actions" size="sm" />
        </span>
      </header>
      <div className="lamp-chat__thread" ref={threadRef} role="log" aria-live="polite">{children}</div>
      {status}
      {composer}
    </section>
  );
}), { displayName: 'AgentChat' });
