import React from 'react';
import { StackedBar } from './StackedBar.jsx';

/* What went into the context window for a run, by memory scope.

   The brief's shape, exactly:

     Context
     Agent working memory     618
     Playbook memory          402
     Genie memory             771
     LAMP memory              340
     Retrieved evidence     1,281
     ─────────────────────────────
     Total                  3,412 tokens

   Rows keep the scope order narrow → broad, so the reader sees inheritance in
   the same direction everywhere in the product. The cache row is a saving, not a
   cost, so it sits below the total and is never stacked into the bar.

   This is an efficiency read-out, not a financial dashboard: no currency framing,
   no trend arrows, no sparkline. Cost belongs on RunSummary. */

const SCOPE_ORDER = ['agent', 'playbook', 'genie', 'lamp', 'evidence'];

const DEFAULT_LABELS = {
  agent: 'Agent working memory',
  playbook: 'Playbook memory',
  genie: 'Genie memory',
  lamp: 'LAMP memory',
  evidence: 'Retrieved evidence',
  prompt: 'Instructions',
  completion: 'Completion',
};

const SCOPE_COLOR = {
  agent: 'var(--memory-accent)',
  playbook: 'var(--purple-400)',
  genie: 'var(--steel-500)',
  lamp: 'var(--slate-500)',
  evidence: 'var(--gold-500)',
  prompt: 'var(--dataviz-neutral-3)',
  completion: 'var(--dataviz-neutral-4)',
};

export function ContextBreakdown({
  segments, context, unit = 'tokens', cached, limit, showBar = true,
  title = 'Context', className = '', ...rest
}) {
  /* Accept either an explicit segments array or a { agent: 618, … } map. */
  const rows = segments
    ? segments
    : SCOPE_ORDER
        .filter((k) => context && context[k] != null)
        .map((k) => ({ key: k, label: DEFAULT_LABELS[k], value: context[k] }));

  const withColor = rows.map((r) => ({ ...r, color: r.color || SCOPE_COLOR[r.key] || undefined }));
  const total = withColor.reduce((a, r) => a + (r.value || 0), 0);
  const fmt = (v) => v.toLocaleString();
  const pctOfLimit = limit ? Math.round((total / limit) * 100) : null;

  return (
    <div className={'lamp-ctxb ' + className} {...rest}>
      {title ? <span className="lamp-ctxb__title">{title}</span> : null}

      {showBar ? <StackedBar segments={withColor} total={total} unit={unit} height={8} /> : null}

      <table className="lamp-ctxb__table">
        <tbody>
          {withColor.map((r, i) => (
            <tr key={r.key || r.label || i}>
              <td className="lamp-ctxb__swatchcell">
                <span className="lamp-ctxb__swatch" style={{ background: r.color || 'var(--dataviz-neutral-3)' }} />
              </td>
              <td className="lamp-ctxb__name">{r.label}</td>
              <td className="lamp-ctxb__val">{fmt(r.value)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td />
            <td className="lamp-ctxb__name">Total</td>
            <td className="lamp-ctxb__val">{fmt(total)} {unit}</td>
          </tr>
        </tfoot>
      </table>

      {(cached != null || limit) ? (
        <div className="lamp-ctxb__meta">
          {cached != null ? <span>{fmt(cached)} {unit} served from cache</span> : null}
          {limit ? <span>{pctOfLimit}% of the {fmt(limit)} {unit} window</span> : null}
        </div>
      ) : null}
    </div>
  );
}
