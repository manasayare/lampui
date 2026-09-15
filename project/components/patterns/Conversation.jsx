import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { Button } from '../core/Button.jsx';

export const Message = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Message({ role = 'agent', author, timestamp, status, children, className = '', ...rest }, ref) {
  const initials = (author || (role === 'user' ? 'You' : 'A')).slice(0, 2).toUpperCase();
  return (
    <div ref={ref} className={['lamp-msg', 'lamp-msg--' + role, className].filter(Boolean).join(' ')} {...rest}>
      <span className={'lamp-msg__av lamp-msg__av--' + role}>
        {role === 'system' ? <Icon name="info" size={13} /> : role === 'tool' ? <Icon name="square" size={13} /> : initials}
      </span>
      <span className="lamp-msg__body">
        <span className="lamp-msg__meta">
          <span className="lamp-msg__who">{author || (role === 'user' ? 'You' : role === 'agent' ? 'Agent' : role === 'tool' ? 'Tool' : 'LAMP')}</span>
          {timestamp ? <span>{timestamp}</span> : null}
          {status ? <span>{status}</span> : null}
        </span>
        <span className="lamp-msg__text">{children}</span>
      </span>
    </div>
  );
}), { displayName: 'Message' });

export const MessageList = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function MessageList({ children, className = '', ...rest }, ref) {
  return <div ref={ref} className={className} style={{ display: 'flex', flexDirection: 'column', overflow: 'auto', minHeight: 0 }} role="log" {...rest}>{children}</div>;
}), { displayName: 'MessageList' });

export const Composer = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Composer({ placeholder = 'Write a message', value, onChange, onSend, onAttach, onVoice, quickReplies = [], disabled = false, className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={className} {...rest}>
      {quickReplies.length ? (
        <div className="lamp-quick">{quickReplies.map((q) => <Button key={q.label || q} size="sm" variant="secondary" onClick={q.onSelect}>{q.label || q}</Button>)}</div>
      ) : null}
      <div className="lamp-composer">
        {onAttach ? <IconButton icon="attach_file" label="Attach file" size="lg" onClick={onAttach} /> : null}
        <textarea className="lamp-composer__field" rows={1} placeholder={placeholder} value={value} disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); onSend && onSend(); } }} />
        {onVoice ? <IconButton icon="mic" label="Record voice message" size="lg" onClick={onVoice} /> : null}
        <Button size="md" variant="primary" icon="send" onClick={onSend} disabled={disabled}>Send</Button>
      </div>
    </div>
  );
}), { displayName: 'Composer' });

export const Conversation = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Conversation({ title, subtitle, actions, messages, composer, className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={className} style={{ display: 'flex', flexDirection: 'column', minHeight: 0, height: '100%', background: 'var(--surface-primary)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-panel)', overflow: 'hidden' }} {...rest}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 8, height: 40, padding: '0 10px 0 12px', borderBottom: '1px solid var(--border-subtle)', flex: 'none' }}>
        <span style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>{title}</span>
          {subtitle ? <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{subtitle}</span> : null}
        </span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>{actions}</span>
      </header>
      <MessageList style={{ flex: 1 }}>{messages}</MessageList>
      {composer}
    </div>
  );
}), { displayName: 'Conversation' });
