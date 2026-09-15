import React from 'react';

export function Textarea({ mono = false, state = 'default', rows = 4, className = '', ...rest }) {
  return <textarea rows={rows} className={['lamp-textarea', mono && 'lamp-textarea--mono', state === 'error' && 'lamp-textarea--error', className].filter(Boolean).join(' ')} aria-invalid={state === 'error' || undefined} {...rest} />;
}
