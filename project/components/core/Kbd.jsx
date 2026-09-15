import React from 'react';

export function Kbd({ keys, children, className = '', ...rest }) {
  const list = keys || (typeof children === 'string' ? children.split('+') : null);
  if (!list) return <kbd className={'lamp-kbd ' + className} {...rest}>{children}</kbd>;
  return (
    <span style={{ display: 'inline-flex', gap: 3, alignItems: 'center' }} {...rest}>
      {list.map((k, i) => <kbd key={i} className={'lamp-kbd ' + className}>{k}</kbd>)}
    </span>
  );
}
