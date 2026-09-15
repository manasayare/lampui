import React from 'react';
import { MEMORY_SCOPES } from './MemoryBadge.jsx';

/* The four memory scopes, narrow → broad, as one selectable bar.

   Agent working memory → Playbook memory → Genie memory → LAMP memory.

   Reading order is the inheritance order, and it never changes — every surface
   that shows scope shows it left-to-right in this sequence, so "broader" is
   always "further right". The step marks grow with scope (4 → 13px), matching
   MemoryScope's badge, so the shape carries the meaning and not just the label.

   Two modes. As a filter it is a segmented control: click a scope to narrow a
   memory list to it, and `inherited` dims the scopes the current object only
   reads from rather than owns. As a read-out (`readOnly`) it is a static
   summary with counts — what an Inspector shows for a selected Agent. */

const ORDER = ['agent', 'playbook', 'genie', 'lamp'];

export function MemoryScopeBar({
  value, counts = {}, inherited = [], owned, onChange, readOnly = false,
  scopes = ORDER, showCounts = true, full = false, className = '', ...rest
}) {
  /* An object owns one scope and reads from every broader one. Naming `owned` is
     enough to mark the rest inherited; `inherited` overrides it where the
     relationship is not simply positional. */
  const ownedAt = owned ? scopes.indexOf(owned) : -1;
  const isInherited = (k) =>
    inherited.indexOf(k) !== -1 || (ownedAt >= 0 && scopes.indexOf(k) > ownedAt);

  return (
    <div
      className={['lamp-scopebar', readOnly && 'lamp-scopebar--static', className].filter(Boolean).join(' ')}
      role={readOnly ? 'group' : 'radiogroup'}
      aria-label="Memory scope"
      {...rest}
    >
      {scopes.map((k) => {
        const s = MEMORY_SCOPES[k];
        if (!s) return null;
        const active = value === k;
        const dim = isInherited(k);
        const count = counts[k];
        const isOwned = owned === k;
        const cls = [
          'lamp-scopebar__item',
          'lamp-scopebar__item--' + k,
          active && 'lamp-scopebar__item--active',
          isOwned && 'lamp-scopebar__item--owned',
          dim && 'lamp-scopebar__item--inherited',
        ].filter(Boolean).join(' ');

        const body = (
          <React.Fragment>
            <span className="lamp-scopebar__mark" />
            <span className="lamp-scopebar__name">{full ? s.label : s.short}</span>
            {showCounts && count != null ? <span className="lamp-scopebar__count">{count}</span> : null}
            {isOwned ? <span className="lamp-scopebar__owned">Owns</span> : null}
            {dim ? <span className="lamp-scopebar__inherit">Inherited</span> : null}
          </React.Fragment>
        );

        if (readOnly) {
          return <span key={k} className={cls} title={s.label}>{body}</span>;
        }
        return (
          <button
            key={k}
            type="button"
            role="radio"
            aria-checked={active}
            className={cls}
            title={s.label}
            onClick={() => onChange && onChange(active ? undefined : k)}
          >
            {body}
          </button>
        );
      })}
    </div>
  );
}
