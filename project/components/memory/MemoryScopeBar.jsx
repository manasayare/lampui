import React from 'react';
import { MEMORY_SCOPES } from './MemoryBadge.jsx';

/* The four memory scopes, narrow → broad, as one selectable bar.

   Agent working memory → Playbook memory → Genie memory → LAMP memory.

   Reading order is the inheritance order, and it never changes — every surface
   that shows scope shows it left-to-right in this sequence, so "broader" is
   always "further right". The step marks grow with scope (4 → 13px), matching
   MemoryScope's badge, so the shape carries the meaning and not just the label.

   Two modes, and two layouts, because they are different jobs.

   As a FILTER it is a segmented control: click a scope to narrow a memory list
   to it. Four segments across is right for a toolbar or a full-width panel.

   As a READ-OUT (`readOnly`) it is a vertical list by default. Four scopes, each
   with a count and possibly an "Inherited" mark, do not fit across a 320px
   Inspector — the names get squeezed out entirely and the counts collide. A
   list gives every scope a 28px row with its count right-aligned, which is the
   same rhythm as PropertyRow beside it. Pass layout="bar" to force the
   segmented look where there is room for it. */

const ORDER = ['agent', 'playbook', 'genie', 'lamp'];

export const MemoryScopeBar = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function MemoryScopeBar({
  value, counts = {}, inherited = [], owned, onChange, readOnly = false,
  scopes = ORDER, showCounts = true, full = false, layout, className = '', ...rest
}, ref) {
  /* A read-out lists; a filter is a bar. Either can be forced. */
  const asList = (layout || (readOnly ? 'list' : 'bar')) === 'list';
  /* An object owns one scope and reads from every broader one. Naming `owned` is
     enough to mark the rest inherited; `inherited` overrides it where the
     relationship is not simply positional. */
  const ownedAt = owned ? scopes.indexOf(owned) : -1;
  const isInherited = (k) =>
    inherited.indexOf(k) !== -1 || (ownedAt >= 0 && scopes.indexOf(k) > ownedAt);

  return (
    <div ref={ref}
      className={[
        'lamp-scopebar',
        asList ? 'lamp-scopebar--list' : 'lamp-scopebar--bar',
        readOnly && 'lamp-scopebar--static',
        className,
      ].filter(Boolean).join(' ')}
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
            <span className="lamp-scopebar__name">{asList || full ? s.label : s.short}</span>
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
}), { displayName: 'MemoryScopeBar' });
