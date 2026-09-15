import React from 'react';

export function GlobalHeader({ brand, center, right, wordmark = 'LAMP', className = '', ...rest }) {
  return (
    <header className={'lamp-header ' + className} {...rest}>
      <div className="lamp-header__brand">
        {brand || <span className="lamp-header__wordmark">{wordmark}</span>}
      </div>
      <div className="lamp-header__center">{center}</div>
      <div className="lamp-header__right">{right}</div>
    </header>
  );
}
