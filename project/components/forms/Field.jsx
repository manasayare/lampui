import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Field({ label, htmlFor, description, helper, error, warning, success, required = false, optional = false, count, layout = 'stack', children, className = '', ...rest }) {
  const msg = error || warning || success;
  const msgTone = error ? 'error' : warning ? 'warning' : 'success';
  const msgIcon = error ? 'cancel' : warning ? 'warning' : 'check_circle';
  return (
    <div className={['lamp-field', layout === 'row' && 'lamp-field--row', className].filter(Boolean).join(' ')} {...rest}>
      {label ? (
        <div className="lamp-field__top">
          <label className="lamp-field__label" htmlFor={htmlFor}>{label}{required ? <span className="lamp-field__req"> *</span> : null}</label>
          {optional ? <span className="lamp-field__opt">Optional</span> : null}
        </div>
      ) : null}
      {description ? <p className="lamp-field__desc">{description}</p> : null}
      {children}
      {(msg || helper || count != null) ? (
        <div className="lamp-field__foot">
          {msg ? <span className={'lamp-field__msg lamp-field__msg--' + msgTone}><Icon name={msgIcon} size={12} />{msg}</span> : helper ? <span>{helper}</span> : null}
          {count != null ? <span className="lamp-field__count">{count}</span> : null}
        </div>
      ) : null}
    </div>
  );
}
