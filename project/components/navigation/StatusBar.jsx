import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function StatusBar({ items = [], right = [], className = '', ...rest }) {
  const cell = (it, i, isRight) => (
    <span key={i} className={'lamp-statusbar__item' + (isRight && i === 0 ? ' lamp-statusbar__item--right' : '')} title={it.title}>
      {it.icon ? <Icon name={it.icon} size={12} /> : null}
      {it.label ? <span>{it.label}</span> : null}
      {it.value != null ? <span className="lamp-statusbar__val">{it.value}</span> : null}
    </span>
  );
  return (
    <footer className={'lamp-statusbar ' + className} {...rest}>
      {items.map((it, i) => cell(it, i, false))}
      {right.map((it, i) => cell(it, i, true))}
    </footer>
  );
}
