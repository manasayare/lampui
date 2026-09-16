import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { StatusBadge } from '../core/StatusBadge.jsx';

const KIND_GLYPH = {
  agent: 'hexagon', skill: 'circle', tool: 'square', playbook: 'layers', genie: 'hive', lamp: 'lightbulb',
  memory: 'database', run: 'history', approval: 'how_to_reg', activity: 'bolt', audit: 'receipt_long',
  person: 'person', team: 'groups', customer: 'store', vendor: 'local_shipping', document: 'description',
  policy: 'gavel', process: 'account_tree', integration: 'extension', member: 'person',
};

export const ObjectRow = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ObjectRow({ kind = 'agent', glyph, name, secondary, status, statusLabel, badges, meta, timestamp, actions, selected = false, compact = false, onClick, className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={['lamp-objrow', compact && 'lamp-objrow--compact', selected && 'lamp-objrow--selected', className].filter(Boolean).join(' ')}
      onClick={onClick} role="button" tabIndex={0} aria-selected={selected} {...rest}>
      <span className="lamp-objrow__glyph"><Icon name={glyph || KIND_GLYPH[kind] || 'circle'} size={compact ? 14 : 16} /></span>
      <span className="lamp-objrow__main">
        <span className="lamp-objrow__name">{name}</span>
        {secondary ? <span className="lamp-objrow__sub">{secondary}</span> : null}
      </span>
      <span className="lamp-objrow__right">
        {badges}
        {meta ? <span className="lamp-objrow__sub">{meta}</span> : null}
        {status ? <StatusBadge status={status} label={statusLabel} mode={compact ? 'label' : 'badge'} /> : null}
        {timestamp ? <span className="lamp-objrow__time">{timestamp}</span> : null}
        {actions}
      </span>
    </div>
  );
}), { displayName: 'ObjectRow' });

export const ObjectList = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ObjectList({ children, className = '', ...rest }, ref) {
  return <div ref={ref} className={'lamp-objlist ' + className} role="list" style={{ display: 'flex', flexDirection: 'column' }} {...rest}>{children}</div>;
}), { displayName: 'ObjectList' });
