import React from 'react';

export const GlobalHeader = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function GlobalHeader({ brand, center, right, wordmark = 'LAMP', className = '', ...rest }, ref) {
  return (
    <header ref={ref} className={'lamp-header ' + className} {...rest}>
      <div className="lamp-header__brand">
        {brand || <span className="lamp-header__wordmark">{wordmark}</span>}
      </div>
      <div className="lamp-header__center">{center}</div>
      <div className="lamp-header__right">{right}</div>
    </header>
  );
}), { displayName: 'GlobalHeader' });
