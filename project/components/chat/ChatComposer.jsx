import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { Button } from '../core/Button.jsx';
import { Kbd } from '../core/Kbd.jsx';

/** Quick replies keep the common answer one tap away. */
export const ChatQuickReplies = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ChatQuickReplies({ options = [], onSelect }, ref) {
  if (!options.length) return null;
  return (
    <div ref={ref} className="lamp-cc__quick">
      {options.map((o) => {
        const label = typeof o === 'string' ? o : o.label;
        const tone = typeof o === 'object' && o.tone;
        return (
          <Button key={label} size="sm" variant={tone === 'primary' ? 'primary' : tone === 'danger' ? 'danger-quiet' : 'secondary'}
            icon={typeof o === 'object' ? o.icon : undefined}
            onClick={() => onSelect && onSelect(typeof o === 'string' ? { label: o } : o)}>{label}</Button>
        );
      })}
    </div>
  );
}), { displayName: 'ChatQuickReplies' });

export const ChatComposer = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ChatComposer({
  value = '', onChange, onSend, onAttach, onVoice, onSlash, placeholder = 'Ask, instruct, or answer',
  scope, scopeGlyph = 'hive', quickReplies = [], disabled = false, sending = false, hint = true, className = '', ...rest
}, ref) {
  const [focus, setFocus] = React.useState(false);
  const send = () => { if (!disabled && value.trim()) onSend && onSend(value); };
  return (
    <div ref={ref} className={['lamp-cc', disabled && 'lamp-cc--disabled', className].filter(Boolean).join(' ')} {...rest}>
      <ChatQuickReplies options={quickReplies} onSelect={(o) => (o.onSelect ? o.onSelect() : onSend && onSend(o.label))} />
      <div className="lamp-cc__box">
        <div className={['lamp-cc__field', focus && 'lamp-cc__field--focus'].filter(Boolean).join(' ')}>
          {scope ? (
            <div className="lamp-cc__scope">
              Talking to
              <span className="lamp-cc__scope-pill"><Icon name={scopeGlyph} size={11} />{scope}</span>
            </div>
          ) : null}
          <textarea className="lamp-cc__input" rows={1} value={value} placeholder={placeholder} disabled={disabled}
            onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            onChange={(e) => onChange && onChange(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }} />
          <div className="lamp-cc__row">
            {onAttach ? <IconButton icon="attach_file" label="Attach a file" size="sm" onClick={onAttach} /> : null}
            {onSlash ? <IconButton icon="terminal" label="Commands" size="sm" onClick={onSlash} /> : null}
            {onVoice ? <IconButton icon="mic" label="Record a voice message" size="sm" onClick={onVoice} /> : null}
            {hint ? <span className="lamp-cc__hint"><Kbd>Enter</Kbd> to send<Kbd keys={['Shift','Enter']} /> for a new line</span> : null}
          </div>
        </div>
        <Button className="lamp-cc__send" size="md" variant="primary" icon="send" loading={sending} disabled={disabled || !value.trim()} onClick={send}>Send</Button>
      </div>
    </div>
  );
}), { displayName: 'ChatComposer' });
