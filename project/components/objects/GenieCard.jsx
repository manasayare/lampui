import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { StatusBadge } from '../core/StatusBadge.jsx';

export function GenieCard({ name, purpose, status = 'draft', selected = false, live = false, stats = [], hive, actions, onClick, className = '', ...rest }) {
  return (
    <div className={['lamp-genie', selected && 'lamp-genie--selected', live && 'lamp-genie--live', onClick && 'lamp-genie--interactive', className].filter(Boolean).join(' ')}
      onClick={onClick} role={onClick ? 'button' : 'group'} aria-label={'Genie ' + (name || '')} {...rest}>
      <div className="lamp-genie__head">
        <Icon name="hive" size={18} style={{ color: live ? 'var(--gold-500)' : 'var(--text-secondary)', marginTop: 1 }} />
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0, flex: 1 }}>
          <span className="lamp-genie__name">{name}</span>
          {purpose ? <p className="lamp-genie__purpose">{purpose}</p> : null}
        </span>
        <StatusBadge status={status} />
        {actions}
      </div>
      {hive ? <div className="lamp-genie__hive">{hive}</div> : null}
      {stats.length ? (
        <div className="lamp-genie__stats">
          {stats.map((s) => (
            <span className="lamp-genie__stat" key={s.label}>
              <span className="lamp-genie__stat-v">{s.value}</span>
              <span className="lamp-genie__stat-l">{s.label}</span>
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
