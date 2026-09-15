import React from 'react';

export function Divider({ orientation = 'horizontal', label, className = '', ...rest }) {
  if (label) return <div className={'lamp-divider lamp-divider--label ' + className} {...rest}>{label}</div>;
  return <hr className={['lamp-divider', orientation === 'vertical' && 'lamp-divider--v', className].filter(Boolean).join(' ')} {...rest} />;
}
