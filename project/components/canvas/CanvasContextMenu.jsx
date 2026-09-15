import React from 'react';
import { Icon } from '../core/Icon.jsx';

export const CanvasContextMenu = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function CanvasContextMenu({ x = 0, y = 0, groups = [], onSelect, className = '', style, ...rest }, ref) {
  return (
    <div ref={ref} className={'lamp-cmenu ' + className} style={{ position: 'absolute', left: x, top: y, ...style }} role="menu" {...rest}>
      {groups.map((g, gi) => (
        <div key={gi}>
          {gi > 0 ? <div className="lamp-cmenu__sep" /> : null}
          {g.label ? <div className="lamp-cmenu__label">{g.label}</div> : null}
          {g.items.map((it) => (
            <button key={it.id} type="button" role="menuitem" disabled={it.disabled}
              className={'lamp-cmenu__item' + (it.danger ? ' lamp-cmenu__item--danger' : '')}
              onClick={() => onSelect && onSelect(it)}>
              {it.icon ? <Icon name={it.icon} size={14} /> : null}
              <span>{it.label}</span>
              {it.shortcut ? <span className="lamp-cmenu__kbd">{it.shortcut}</span> : null}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}), { displayName: 'CanvasContextMenu' });
