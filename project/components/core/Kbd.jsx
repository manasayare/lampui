import React from 'react';

export const Kbd = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Kbd({ keys, children, className = '', ...rest }, ref) {
  const list = keys || (typeof children === 'string' ? children.split('+') : null);
  if (!list) return <kbd className={'lamp-kbd ' + className} {...rest}>{children}</kbd>;
  return (
    <span ref={ref} style={{ display: 'inline-flex', gap: 3, alignItems: 'center' }} {...rest}>
      {list.map((k, i) => <kbd key={i} className={'lamp-kbd ' + className}>{k}</kbd>)}
    </span>
  );
}), { displayName: 'Kbd' });
