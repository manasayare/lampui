import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { StatusDot } from '../core/StatusBadge.jsx';

export const ObjectTree = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ObjectTree({ nodes = [], selectedId, onSelect, onToggle, expanded = {}, className = '', ...rest }, ref) {
  const render = (node, depth) => {
    const open = expanded[node.id] !== false;
    const kids = node.children || [];
    return (
      <React.Fragment key={node.id}>
        <div className={'lamp-tree__row' + (selectedId === node.id ? ' lamp-tree__row--selected' : '')}
          style={{ paddingLeft: 4 + depth * 14 }} onClick={() => onSelect && onSelect(node)}
          role="treeitem" aria-selected={selectedId === node.id} aria-expanded={kids.length ? open : undefined} tabIndex={0}>
          {kids.length ? (
            <span className={'lamp-tree__twist' + (open ? ' lamp-tree__twist--open' : '')} onClick={(e) => { e.stopPropagation(); onToggle && onToggle(node); }}>
              <Icon name="chevron_right" size={14} />
            </span>
          ) : <span className="lamp-tree__twist" />}
          {node.icon ? <Icon name={node.icon} size={14} /> : null}
          <span className="lamp-tree__text">{node.label}</span>
          {node.status ? <StatusDot status={node.status} /> : null}
          {node.meta ? <span className="lamp-nav__meta">{node.meta}</span> : null}
        </div>
        {open && kids.map((k) => render(k, depth + 1))}
      </React.Fragment>
    );
  };
  return <div ref={ref} className={'lamp-tree ' + className} role="tree" {...rest}>{nodes.map((n) => render(n, 0))}</div>;
}), { displayName: 'ObjectTree' });
