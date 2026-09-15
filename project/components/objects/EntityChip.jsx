import React from 'react';
import { Icon } from '../core/Icon.jsx';

const ENTITY_GLYPH = {
  person: 'person', team: 'groups', customer: 'store', vendor: 'local_shipping', project: 'folder_open',
  product: 'inventory_2', service: 'room_service', invoice: 'receipt', order: 'shopping_cart', contract: 'handshake',
  policy: 'gavel', document: 'description', system: 'dns', channel: 'forum', location: 'place',
  event: 'event', decision: 'rule', exception: 'report', relationship: 'link',
};

export function EntityChip({ type = 'person', name, initials, showType = false, glyph, onClick, className = '', ...rest }) {
  const round = type === 'person';
  return (
    <span className={['lamp-entity', onClick && 'lamp-entity--interactive', className].filter(Boolean).join(' ')}
      onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined} {...rest}>
      {initials
        ? <span className={'lamp-entity__avatar' + (round ? ' lamp-entity__avatar--round' : '')}>{initials}</span>
        : <Icon name={glyph || ENTITY_GLYPH[type] || 'circle'} size={13} style={{ color: 'var(--text-tertiary)' }} />}
      {showType ? <span className="lamp-entity__type">{type}</span> : null}
      <span>{name}</span>
    </span>
  );
}
