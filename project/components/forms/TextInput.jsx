import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function TextInput({ size = 'md', icon, suffix, trailing, mono = false, state = 'default', disabled = false, readOnly = false, loading = false, className = '', ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const cls = ['lamp-inputwrap', 'lamp-inputwrap--' + size, focus && 'lamp-inputwrap--focus', state !== 'default' && 'lamp-inputwrap--' + state, disabled && 'lamp-inputwrap--disabled', readOnly && 'lamp-inputwrap--readonly', mono && 'lamp-inputwrap--mono', className].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      {icon ? <span className="lamp-inputwrap__icon"><Icon name={icon} size={14} /></span> : null}
      <input className="lamp-input" disabled={disabled} readOnly={readOnly} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} aria-invalid={state === 'error' || undefined} {...rest} />
      {loading ? <span className="lamp-inputwrap__icon"><Icon name="progress_activity" size={14} /></span> : null}
      {suffix ? <span className="lamp-inputwrap__suffix">{suffix}</span> : null}
      {trailing}
    </div>
  );
}

export function SearchInput({ placeholder = 'Search', shortcut, size = 'md', ...rest }) {
  return <TextInput icon="search" placeholder={placeholder} size={size} trailing={shortcut ? <span className="lamp-inputwrap__suffix" style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>{shortcut}</span> : null} {...rest} />;
}

export function NumberInput({ suffix, step = 1, ...rest }) {
  return <TextInput type="number" step={step} suffix={suffix} mono {...rest} />;
}

export function SecretField({ value = '', revealed: revealedProp, onReveal, expiring = false, ...rest }) {
  const [revealed, setRevealed] = React.useState(!!revealedProp);
  return (
    <div className="lamp-secret" {...rest}>
      <TextInput mono readOnly value={revealed ? value : '••••••••••••••••'} state={expiring ? 'warning' : 'default'} />
      <button type="button" className="lamp-iconbtn lamp-iconbtn--md lamp-iconbtn--bordered" aria-label={revealed ? 'Hide value' : 'Reveal value'} onClick={() => { setRevealed(!revealed); onReveal && onReveal(!revealed); }}>
        <Icon name={revealed ? 'visibility_off' : 'visibility'} size={14} />
      </button>
    </div>
  );
}
