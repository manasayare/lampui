import React from 'react';

export const Divider = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Divider({ orientation = 'horizontal', label, className = '', ...rest }, ref) {
  if (label) return <div className={'lamp-divider lamp-divider--label ' + className} {...rest}>{label}</div>;
  return <hr ref={ref} className={['lamp-divider', orientation === 'vertical' && 'lamp-divider--v', className].filter(Boolean).join(' ')} {...rest} />;
}), { displayName: 'Divider' });
