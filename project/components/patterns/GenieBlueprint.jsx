import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';
import { Button } from '../core/Button.jsx';
import { StatusDot } from '../core/StatusBadge.jsx';
import { MemoryScopeBar } from '../memory/MemoryScopeBar.jsx';
import { BUSINESS_PROCESSES } from './BusinessProcess.jsx';

/* Auto-creating a Genie from a standard business process.

   A Genie is a business capability — Finance, Sales, Customer Operations — and
   the processes inside it are not a random collection. A business that runs
   procure-to-pay almost always also runs record-to-report and expense claims;
   they share vendors, a ledger, an approval hierarchy and a definition of
   materiality. So when an operator defines one of them, LAMP can set up the
   whole capability around it rather than leaving them to discover the other
   three later.

   Everything created this way is a DRAFT. Nothing is live, nothing is
   connected, nothing runs. The blueprint is shown in full before it is
   committed — every Playbook, every Agent, every access grant — because
   "LAMP created eleven things while you weren't looking" is the opposite of the
   trust this product needs. The operator sees the list and can drop any of it.

   Guardrails are not optional and are not a suggestion. A Genie created here
   starts with the safety posture its domain requires: nothing external writes
   without an approval, spend authority is unset rather than unlimited, and the
   kill switch is scoped to the Genie from the moment it exists. */

const DOMAIN_GLYPH = {
  Finance: 'account_balance',
  Sales: 'trending_up',
  People: 'groups',
  Procurement: 'inventory_2',
  'Customer operations': 'forum',
  Custom: 'hive',
};

/* Guardrails every auto-created Genie starts with, before anything domain-specific. */
const BASE_GUARDRAILS = [
  'No external write action without an approved human checkpoint.',
  'Spend authority starts unset. An Agent cannot commit money until a limit is set deliberately.',
  'Every run records its evidence, its Tool calls and its cost.',
  'Emergency stop is scoped to this Genie and available from the moment it exists.',
];

const DOMAIN_GUARDRAILS = {
  Finance: [
    'Bank detail changes always require callback verification on a known number.',
    'Journals above the materiality threshold require a named approver.',
  ],
  Procurement: ['New vendors cannot be made payable without a completed risk review.'],
  People: ['Hiring and rejection decisions are never delegated to an Agent.'],
  'Customer operations': ['Credits, refunds and compensation are a human decision.'],
  Sales: ['Discounts beyond the standard schedule require approval.'],
};

/**
 * Build the Genie a process belongs to.
 *
 * Returns a plain object describing everything that would be created. It is
 * deliberately inert — nothing is written, nothing is connected — so a caller
 * can render it, diff it, edit it or throw it away.
 */
export function BuildGenie(businessProcess, options = {}) {
  if (!businessProcess || !businessProcess.domain) return null;
  const { includeSiblings = true, agents = [], name } = options;

  const siblings = includeSiblings
    ? BUSINESS_PROCESSES.filter((p) => p.domain === businessProcess.domain && p.id !== businessProcess.id)
    : [];

  const playbooks = [{ process: businessProcess, primary: true, agents, state: 'draft' }].concat(
    siblings.map((p) => ({ process: p, primary: false, agents: [], state: 'suggested' })),
  );

  /* Connector categories de-duplicated across the capability, keeping the
     broadest permission any of its processes needs — so the access list the
     operator approves is the real one, not a per-Playbook fragment. */
  const rank = { Read: 1, Write: 2, Admin: 3 };
  const connectorMap = {};
  playbooks.forEach((pb) => {
    (pb.process.connectors || []).forEach((c) => {
      const existing = connectorMap[c.category];
      if (!existing || rank[c.permission] > rank[existing.permission]) {
        connectorMap[c.category] = { ...c, usedBy: existing ? existing.usedBy.concat([pb.process.name]) : [pb.process.name] };
      } else {
        existing.usedBy = existing.usedBy.concat([pb.process.name]);
      }
    });
  });
  const connectors = Object.keys(connectorMap).map((k) => connectorMap[k]);

  const roles = [];
  playbooks.forEach((pb) => {
    if (!pb.primary) return;
    (pb.process.roles || []).forEach((r) => { if (roles.indexOf(r) === -1) roles.push(r); });
  });

  return {
    name: name || businessProcess.domain,
    domain: businessProcess.domain,
    purpose: 'The ' + businessProcess.domain.toLowerCase() + ' capability, starting from ' + businessProcess.name.toLowerCase() + '.',
    glyph: DOMAIN_GLYPH[businessProcess.domain] || 'hive',
    state: 'draft',
    playbooks,
    connectors,
    roles,
    agents,
    guardrails: BASE_GUARDRAILS.concat(DOMAIN_GUARDRAILS[businessProcess.domain] || []),
    memory: {
      scopes: ['agent', 'playbook', 'genie', 'lamp'],
      seeded: [
        businessProcess.domain + ' policies and approval thresholds',
        'The entities this capability deals with — ' + (businessProcess.domain === 'Finance' ? 'vendors, customers, accounts' : 'the people, systems and records it touches'),
        'Exceptions observed in runs, so the Playbook learns what actually happens',
      ],
    },
  };
}

export const buildGenie = BuildGenie;

/** Everything that would be created, shown before it is created. */
export const GenieBlueprint = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function GenieBlueprint({
  blueprint, onCreate, onCancel, onTogglePlaybook, excluded = [], compact = false, className = '', ...rest
}, ref) {
  if (!blueprint) return null;
  const isOut = (id) => excluded.indexOf(id) !== -1;
  const included = blueprint.playbooks.filter((pb) => !isOut(pb.process.id));

  return (
    <section ref={ref} className={['lamp-blueprint', compact && 'lamp-blueprint--compact', className].filter(Boolean).join(' ')} {...rest}>
      <header className="lamp-blueprint__head">
        <span className="lamp-blueprint__glyph"><Icon name={blueprint.glyph} size={18} /></span>
        <span className="lamp-blueprint__titles">
          <span className="lamp-blueprint__name">{blueprint.name} Genie</span>
          <span className="lamp-blueprint__purpose">{blueprint.purpose}</span>
        </span>
        <Badge tone="neutral" icon="edit_note" micro>Draft</Badge>
      </header>

      <div className="lamp-blueprint__summary">
        <span><b>{included.length}</b> Playbooks</span>
        <span><b>{blueprint.roles.length}</b> Agent roles</span>
        <span><b>{blueprint.connectors.length}</b> connectors</span>
        <span><b>{blueprint.guardrails.length}</b> guardrails</span>
      </div>

      <div className="lamp-blueprint__group">
        <span className="lamp-blueprint__label">Playbooks</span>
        {blueprint.playbooks.map((pb) => (
          <div
            key={pb.process.id}
            className={['lamp-blueprint__pb', isOut(pb.process.id) && 'lamp-blueprint__pb--out'].filter(Boolean).join(' ')}
          >
            <Icon name="layers" size={14} />
            <span className="lamp-blueprint__pb-main">
              <span className="lamp-blueprint__pb-name">{pb.process.name}</span>
              <span className="lamp-blueprint__pb-purpose">{pb.process.purpose}</span>
            </span>
            {pb.primary
              ? <Badge tone="brand" micro>The one you just made</Badge>
              : <Badge outline micro>Suggested</Badge>}
            {onTogglePlaybook && !pb.primary ? (
              <Button size="xs" variant="quiet" onClick={() => onTogglePlaybook(pb.process.id)}>
                {isOut(pb.process.id) ? 'Include' : 'Skip'}
              </Button>
            ) : null}
          </div>
        ))}
      </div>

      <div className="lamp-blueprint__group">
        <span className="lamp-blueprint__label">Access this Genie will ask for</span>
        {blueprint.connectors.map((c) => (
          <div key={c.category} className="lamp-blueprint__conn">
            <StatusDot status="blocked" />
            <span className="lamp-blueprint__conn-name">{c.category}</span>
            <Badge outline micro>{c.permission}</Badge>
            <span className="lamp-blueprint__conn-used">Used by {c.usedBy.join(', ')}</span>
          </div>
        ))}
        <p className="lamp-blueprint__note">
          Nothing is authorized by creating the Genie. Each connector is granted separately, by you.
        </p>
      </div>

      <div className="lamp-blueprint__group">
        <span className="lamp-blueprint__label">Guardrails it starts with</span>
        <ul className="lamp-blueprint__rules">
          {blueprint.guardrails.map((g) => <li key={g}><Icon name="shield" size={12} />{g}</li>)}
        </ul>
      </div>

      <div className="lamp-blueprint__group">
        <span className="lamp-blueprint__label">Memory</span>
        <MemoryScopeBar readOnly owned="genie" full={false} showCounts={false} />
        <ul className="lamp-blueprint__rules">
          {blueprint.memory.seeded.map((m) => <li key={m}><Icon name="database" size={12} />{m}</li>)}
        </ul>
      </div>

      {(onCreate || onCancel) ? (
        <footer className="lamp-blueprint__foot">
          {onCancel ? <Button variant="quiet" onClick={onCancel}>Just the Playbook</Button> : null}
          {onCreate ? (
            <Button variant="primary" icon="check" onClick={() => onCreate(blueprint, excluded)}>
              Create {included.length} Playbooks as drafts
            </Button>
          ) : null}
        </footer>
      ) : null}
    </section>
  );
}), { displayName: 'GenieBlueprint' });
