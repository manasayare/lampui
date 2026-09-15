import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Kbd } from '../core/Kbd.jsx';

export const CommandPalette = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function CommandPalette({ open = true, query = '', onQueryChange, groups = [], activeId, onSelect, onClose, placeholder = 'Search or run a command', footer, className = '', ...rest }, ref) {
  if (!open) return null;
  return (
    <div ref={ref} className={'lamp-palette ' + className} role="dialog" aria-modal="true" aria-label="Command palette" onClick={onClose} {...rest}>
      <div className="lamp-palette__box" onClick={(e) => e.stopPropagation()}>
        <div className="lamp-palette__search">
          <Icon name="search" size={16} />
          <input autoFocus value={query} placeholder={placeholder} onChange={(e) => onQueryChange && onQueryChange(e.target.value)} />
          <Kbd>Esc</Kbd>
        </div>
        <div className="lamp-palette__list" role="listbox">
          {groups.length === 0 ? <div style={{ padding: '24px 12px', textAlign: 'center', fontSize: 13, color: 'var(--text-tertiary)' }}>No matches</div> : null}
          {groups.map((g) => (
            <div key={g.label}>
              <div className="lamp-palette__group">{g.label}</div>
              {g.items.map((it) => (
                <button key={it.id} type="button" role="option" aria-selected={activeId === it.id}
                  className={'lamp-palette__item' + (activeId === it.id ? ' lamp-palette__item--active' : '') + (it.danger ? ' lamp-palette__item--danger' : '')}
                  onClick={() => onSelect && onSelect(it)}>
                  {it.icon ? <Icon name={it.icon} size={16} /> : null}
                  <span>{it.label}</span>
                  {it.context ? <span style={{ color: 'var(--text-tertiary)', fontSize: 12 }}>{it.context}</span> : null}
                  {it.shortcut ? <span className="lamp-palette__hint"><Kbd keys={it.shortcut} /></span> : null}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="lamp-palette__foot">{footer || <><span>Navigate</span><Kbd keys={['↑','↓']} /><span>Open</span><Kbd>Enter</Kbd></>}</div>
      </div>
    </div>
  );
}), { displayName: 'CommandPalette' });
