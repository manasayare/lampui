import React from 'react';

export const Textarea = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Textarea({ mono = false, state = 'default', rows = 4, className = '', ...rest }, ref) {
  return <textarea ref={ref} rows={rows} className={['lamp-textarea', mono && 'lamp-textarea--mono', state === 'error' && 'lamp-textarea--error', className].filter(Boolean).join(' ')} aria-invalid={state === 'error' || undefined} {...rest} />;
}), { displayName: 'Textarea' });
