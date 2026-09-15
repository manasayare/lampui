import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';
import { Button } from '../core/Button.jsx';
import { MemoryConfidence } from '../memory/MemoryBadge.jsx';

/* The standard business process library.

   Operators do not arrive knowing how to specify a Playbook. Asking someone to
   name a process, list its connectors and define its expected outcomes on a
   blank form gets you a blank form back — or worse, a Playbook that runs without
   anyone having decided what "done" means. So LAMP proposes.

   Every entry here is a process that exists in essentially every business, under
   names that have been stable for decades: procure-to-pay, order-to-cash,
   record-to-report, hire-to-retire. Each carries the steps, the connector
   categories, the human checkpoints, the exceptions that actually happen, and —
   the part nobody writes down — the expected outcomes and how they are measured.

   MatchProcess scores a set of Agents against the library and returns ranked
   candidates with the evidence for each, so the proposal can be argued with
   rather than merely accepted. Nothing here is auto-applied: a match is a
   suggestion with its reasoning shown, and the operator confirms.

   This is deliberately not an ontology of every process a business can have. It
   is the set LAMP can recognise from a handful of Agents with reasonable
   confidence. Everything else is authored by hand, starting from `blank`.

   A note on `providers`: these are Simple Icons slugs, and Simple Icons carries
   no Microsoft marks, so Outlook, Excel and SharePoint are absent from the
   candidate lists despite being extremely common in these processes. The
   connector is the CATEGORY ("Email", "Spreadsheets"); providers only decide
   which mark is drawn on the tile. A business running Outlook still matches the
   Email connector — it just renders with the generic glyph until a real mark is
   vendored into assets/brand/. */

export const BUSINESS_PROCESSES = [
  {
    id: 'procure-to-pay',
    name: 'Procure to pay',
    domain: 'Finance',
    aka: ['P2P', 'Accounts payable', 'Vendor payment'],
    purpose: 'Take a purchase from requisition through to a paid, reconciled invoice.',
    trigger: 'A purchase requisition is raised, or a supplier invoice arrives.',
    steps: [
      { name: 'Receive requisition', kind: 'agent' },
      { name: 'Verify vendor and terms', kind: 'agent' },
      { name: 'Match invoice to PO and receipt', kind: 'agent' },
      { name: 'Resolve exceptions', kind: 'agent' },
      { name: 'Approve payment', kind: 'human' },
      { name: 'Post and schedule payment', kind: 'agent' },
      { name: 'Reconcile', kind: 'agent' },
    ],
    roles: ['Invoice Matcher', 'Vendor Verifier', 'Exception Handler', 'Payment Approver'],
    connectors: [
      { category: 'ERP', providers: ['sap', 'oracle', 'xero'], permission: 'Write', why: 'Post invoices and payment runs.' },
      { category: 'Email', providers: ['gmail'], permission: 'Read', why: 'Invoices arrive as attachments.' },
      { category: 'Document storage', providers: ['googledrive', 'dropbox'], permission: 'Read', why: 'Contracts and purchase orders.' },
      { category: 'Messaging', providers: ['slack', 'whatsapp'], permission: 'Write', why: 'Chase approvals where they actually happen.' },
    ],
    outcomes: [
      { label: 'Invoices matched without human touch', measure: 'Share of runs with no intervention', target: '85%' },
      { label: 'Payment made within terms', measure: 'Days to pay against agreed terms', target: 'On or before' },
      { label: 'No duplicate payments', measure: 'Duplicates detected before posting', target: '100%' },
      { label: 'Exceptions explained', measure: 'Every held invoice carries a reason', target: '100%' },
    ],
    checkpoints: [
      { name: 'Approve payment', when: 'Above the authority limit, or any new vendor.' },
      { name: 'Confirm vendor bank change', when: 'Always. Bank detail changes are the fraud surface.' },
    ],
    exceptions: ['Invoice with no purchase order', 'Quantity mismatch on receipt', 'Duplicate invoice number', 'Vendor not on file', 'Currency or tax mismatch'],
    signals: ['invoice', 'vendor', 'supplier', 'payment', 'purchase', 'procure', 'po', 'ap', 'payable', 'sap', 'reconcile', 'approve'],
  },
  {
    id: 'order-to-cash',
    name: 'Order to cash',
    domain: 'Finance',
    aka: ['O2C', 'Accounts receivable', 'Billing'],
    purpose: 'Take a customer order through fulfilment, invoicing and collection to cash received.',
    trigger: 'An order is placed, or a billing period closes.',
    steps: [
      { name: 'Validate order and credit', kind: 'agent' },
      { name: 'Confirm fulfilment', kind: 'agent' },
      { name: 'Raise invoice', kind: 'agent' },
      { name: 'Send and track', kind: 'agent' },
      { name: 'Chase overdue', kind: 'agent' },
      { name: 'Escalate or write off', kind: 'human' },
      { name: 'Apply cash and reconcile', kind: 'agent' },
    ],
    roles: ['Order Validator', 'Invoice Raiser', 'Collections Agent', 'Cash Applier'],
    connectors: [
      { category: 'CRM', providers: ['salesforce', 'hubspot'], permission: 'Read', why: 'Customer, contract and order records.' },
      { category: 'ERP', providers: ['sap', 'xero'], permission: 'Write', why: 'Raise invoices and apply cash.' },
      { category: 'Email', providers: ['gmail'], permission: 'Write', why: 'Send invoices and chase.' },
      { category: 'Payments', providers: ['stripe'], permission: 'Read', why: 'Match settlements to invoices.' },
    ],
    outcomes: [
      { label: 'Invoice raised same day as fulfilment', measure: 'Lag between fulfilment and invoice', target: '< 1 day' },
      { label: 'Days sales outstanding falling', measure: 'Rolling 90-day DSO', target: 'Down on quarter' },
      { label: 'Every chase is accurate', measure: 'Chases sent against already-paid invoices', target: '0' },
      { label: 'Disputes routed to a person quickly', measure: 'Time to human on a disputed invoice', target: '< 2 hours' },
    ],
    checkpoints: [
      { name: 'Escalate or write off', when: 'Before any write-off, and before legal escalation.' },
      { name: 'Credit hold', when: 'Before releasing an order for a customer over their limit.' },
    ],
    exceptions: ['Customer disputes the amount', 'Partial payment received', 'Credit limit exceeded', 'Order fulfilled but not confirmed'],
    signals: ['order', 'customer', 'invoice', 'billing', 'receivable', 'ar', 'collections', 'dunning', 'cash', 'salesforce', 'dso'],
  },
  {
    id: 'record-to-report',
    name: 'Record to report',
    domain: 'Finance',
    aka: ['R2R', 'Month-end close', 'Financial close'],
    purpose: 'Close the books for a period and produce reviewed, explainable statements.',
    trigger: 'A period ends.',
    steps: [
      { name: 'Freeze the period', kind: 'agent' },
      { name: 'Reconcile accounts', kind: 'agent' },
      { name: 'Post accruals and adjustments', kind: 'agent' },
      { name: 'Investigate variances', kind: 'agent' },
      { name: 'Review and sign off', kind: 'human' },
      { name: 'Publish statements', kind: 'agent' },
    ],
    roles: ['Reconciler', 'Variance Analyst', 'Accrual Poster', 'Close Coordinator'],
    connectors: [
      { category: 'ERP', providers: ['sap', 'oracle', 'quickbooks'], permission: 'Write', why: 'Ledger, journals and trial balance.' },
      { category: 'Spreadsheets', providers: ['googlesheets'], permission: 'Write', why: 'Close schedules still live here.' },
      { category: 'Banking', providers: [], permission: 'Read', why: 'Statement lines for reconciliation.' },
    ],
    outcomes: [
      { label: 'Close completed on schedule', measure: 'Working days to close', target: '≤ 5' },
      { label: 'Every variance has an explanation', measure: 'Unexplained variances at sign-off', target: '0' },
      { label: 'Reconciliations clean', measure: 'Accounts reconciled without manual entry', target: '90%' },
      { label: 'Audit trail complete', measure: 'Journals with evidence attached', target: '100%' },
    ],
    checkpoints: [
      { name: 'Review and sign off', when: 'Always. A close is not a close until a person signs it.' },
      { name: 'Material adjustment', when: 'Any journal above the materiality threshold.' },
    ],
    exceptions: ['Unreconciled bank line', 'Late invoice after freeze', 'Intercompany mismatch', 'FX revaluation dispute'],
    signals: ['close', 'month-end', 'reconcile', 'ledger', 'journal', 'accrual', 'variance', 'statement', 'audit', 'period', 'balance'],
  },
  {
    id: 'hire-to-retire',
    name: 'Hire to retire',
    domain: 'People',
    aka: ['H2R', 'Recruitment', 'Employee lifecycle'],
    purpose: 'Take a role from opening through hiring and onboarding to a productive employee.',
    trigger: 'A role is approved, or an application arrives.',
    steps: [
      { name: 'Open and publish the role', kind: 'agent' },
      { name: 'Screen applications', kind: 'agent' },
      { name: 'Schedule interviews', kind: 'agent' },
      { name: 'Collect feedback', kind: 'agent' },
      { name: 'Decide and offer', kind: 'human' },
      { name: 'Run onboarding', kind: 'agent' },
    ],
    roles: ['Screener', 'Scheduler', 'Feedback Collector', 'Onboarding Coordinator'],
    connectors: [
      { category: 'ATS', providers: ['greenhouse', 'personio'], permission: 'Write', why: 'Candidate records and stages.' },
      { category: 'Calendar', providers: ['googlecalendar'], permission: 'Write', why: 'Interview scheduling.' },
      { category: 'Email', providers: ['gmail'], permission: 'Write', why: 'Candidate correspondence.' },
      { category: 'Identity', providers: ['okta'], permission: 'Admin', why: 'Provision accounts on day one.' },
    ],
    outcomes: [
      { label: 'Time to first interview falling', measure: 'Days from application to first interview', target: '< 5' },
      { label: 'Every candidate gets an answer', measure: 'Applications closed without response', target: '0' },
      { label: 'Onboarding ready on day one', measure: 'Accounts and access provisioned before start', target: '100%' },
    ],
    checkpoints: [
      { name: 'Decide and offer', when: 'Always. Hiring decisions are not delegated to an Agent.' },
      { name: 'Reject at screening', when: 'Where the Agent is below confidence on a borderline application.' },
    ],
    exceptions: ['Candidate withdraws', 'Interviewer unavailable', 'Offer declined', 'Right-to-work check fails'],
    signals: ['candidate', 'applicant', 'interview', 'recruit', 'hire', 'onboard', 'role', 'cv', 'resume', 'offer', 'screening'],
  },
  {
    id: 'lead-to-opportunity',
    name: 'Lead to opportunity',
    domain: 'Sales',
    aka: ['Lead qualification', 'Inbound routing'],
    purpose: 'Turn inbound interest into a qualified, routed, owned opportunity.',
    trigger: 'A lead arrives from a form, an event or an inbox.',
    steps: [
      { name: 'Capture and deduplicate', kind: 'agent' },
      { name: 'Enrich the record', kind: 'agent' },
      { name: 'Qualify against criteria', kind: 'agent' },
      { name: 'Route to an owner', kind: 'agent' },
      { name: 'Confirm ownership', kind: 'human' },
    ],
    roles: ['Lead Capturer', 'Enrichment Agent', 'Qualifier', 'Router'],
    connectors: [
      { category: 'CRM', providers: ['salesforce', 'hubspot'], permission: 'Write', why: 'Lead and opportunity records.' },
      { category: 'Email', providers: ['gmail'], permission: 'Read', why: 'Inbound enquiries.' },
      { category: 'Messaging', providers: ['slack'], permission: 'Write', why: 'Notify the owner where they work.' },
    ],
    outcomes: [
      { label: 'Lead answered quickly', measure: 'Time from arrival to first response', target: '< 30 min' },
      { label: 'No duplicate records created', measure: 'Duplicates merged before routing', target: '100%' },
      { label: 'Routing accepted by owners', measure: 'Leads reassigned after routing', target: '< 10%' },
    ],
    checkpoints: [{ name: 'Confirm ownership', when: 'Where the routing rule is ambiguous or the account is strategic.' }],
    exceptions: ['Existing customer submits as a new lead', 'Competitor or spam submission', 'No owner for the territory'],
    signals: ['lead', 'prospect', 'enquiry', 'inbound', 'qualify', 'route', 'crm', 'salesforce', 'hubspot', 'opportunity', 'enrich'],
  },
  {
    id: 'issue-to-resolution',
    name: 'Issue to resolution',
    domain: 'Customer operations',
    aka: ['Support ticket', 'Incident handling'],
    purpose: 'Take a reported problem to a resolution the customer accepts.',
    trigger: 'A ticket, email or message reports a problem.',
    steps: [
      { name: 'Triage and classify', kind: 'agent' },
      { name: 'Gather context', kind: 'agent' },
      { name: 'Attempt resolution', kind: 'agent' },
      { name: 'Escalate if unresolved', kind: 'human' },
      { name: 'Confirm and close', kind: 'agent' },
    ],
    roles: ['Triager', 'Context Gatherer', 'Resolver', 'Escalation Handler'],
    connectors: [
      { category: 'Helpdesk', providers: ['zendesk', 'intercom'], permission: 'Write', why: 'Tickets and conversations.' },
      { category: 'CRM', providers: ['salesforce'], permission: 'Read', why: 'Who the customer is and what they bought.' },
      { category: 'Messaging', providers: ['slack', 'whatsapp'], permission: 'Write', why: 'Reach the customer and the escalation path.' },
    ],
    outcomes: [
      { label: 'First response fast', measure: 'Time to first substantive reply', target: '< 15 min' },
      { label: 'Resolved without escalation', measure: 'Share closed by the Agent', target: '60%' },
      { label: 'No unanswered customer', measure: 'Tickets with no reply past SLA', target: '0' },
      { label: 'Escalations carry context', measure: 'Escalations with a written summary', target: '100%' },
    ],
    checkpoints: [
      { name: 'Escalate if unresolved', when: 'Past the SLA, or where the customer asks for a person.' },
      { name: 'Offer compensation', when: 'Always. Credits and refunds are a human decision.' },
    ],
    exceptions: ['Customer is angry or threatens to leave', 'Problem is a known outage', 'Duplicate of an open ticket', 'Out of support scope'],
    signals: ['ticket', 'support', 'issue', 'incident', 'customer', 'triage', 'escalate', 'resolve', 'sla', 'zendesk', 'helpdesk'],
  },
  {
    id: 'vendor-onboarding',
    name: 'Vendor onboarding',
    domain: 'Procurement',
    aka: ['Supplier onboarding', 'Third-party due diligence'],
    purpose: 'Take a new supplier from first contact to approved, compliant and payable.',
    trigger: 'Someone wants to buy from a supplier who is not on file.',
    steps: [
      { name: 'Collect supplier details', kind: 'agent' },
      { name: 'Verify identity and bank details', kind: 'agent' },
      { name: 'Run compliance checks', kind: 'agent' },
      { name: 'Review risk', kind: 'human' },
      { name: 'Create the vendor record', kind: 'agent' },
    ],
    roles: ['Detail Collector', 'Identity Verifier', 'Compliance Checker', 'Record Creator'],
    connectors: [
      { category: 'ERP', providers: ['sap'], permission: 'Write', why: 'Create the vendor master record.' },
      { category: 'Document storage', providers: ['googledrive'], permission: 'Read', why: 'Certificates, insurance, contracts.' },
      { category: 'Messaging', providers: ['whatsapp', 'slack'], permission: 'Write', why: 'Suppliers often answer here first.' },
    ],
    outcomes: [
      { label: 'Bank details independently verified', measure: 'Records created without callback verification', target: '0' },
      { label: 'Onboarding completed quickly', measure: 'Days from request to payable', target: '< 5' },
      { label: 'Compliance evidence on file', measure: 'Vendors with complete documentation', target: '100%' },
    ],
    checkpoints: [
      { name: 'Review risk', when: 'Always for a new vendor; again for any high-risk jurisdiction.' },
      { name: 'Confirm bank details', when: 'Always, by callback on a known number. Never from the document alone.' },
    ],
    exceptions: ['Supplier already exists under another name', 'Sanctions or adverse media hit', 'Incomplete documentation', 'Bank details change mid-process'],
    signals: ['vendor', 'supplier', 'onboard', 'compliance', 'due diligence', 'kyc', 'sanctions', 'bank', 'verify', 'master', 'record'],
  },
  {
    id: 'expense-to-reimbursement',
    name: 'Expense to reimbursement',
    domain: 'Finance',
    aka: ['Expense claims', 'T&E'],
    purpose: 'Take a submitted expense through policy check and approval to reimbursement.',
    trigger: 'An employee submits a claim or a receipt.',
    steps: [
      { name: 'Read the receipt', kind: 'agent' },
      { name: 'Check against policy', kind: 'agent' },
      { name: 'Query the submitter', kind: 'agent' },
      { name: 'Approve', kind: 'human' },
      { name: 'Post and reimburse', kind: 'agent' },
    ],
    roles: ['Receipt Reader', 'Policy Checker', 'Reimbursement Poster'],
    connectors: [
      { category: 'Expense system', providers: [], permission: 'Write', why: 'Claims and reimbursement runs.' },
      { category: 'Email', providers: ['gmail'], permission: 'Read', why: 'Receipts forwarded by employees.' },
      { category: 'Messaging', providers: ['slack'], permission: 'Write', why: 'Query a claim without an email thread.' },
    ],
    outcomes: [
      { label: 'Claims settled quickly', measure: 'Days from submission to payment', target: '< 7' },
      { label: 'Policy applied consistently', measure: 'Claims approved outside policy', target: '0' },
      { label: 'Queries are specific', measure: 'Queries that name the exact problem', target: '100%' },
    ],
    checkpoints: [{ name: 'Approve', when: 'Above the auto-approval threshold, or any policy exception.' }],
    exceptions: ['Receipt unreadable', 'Claim outside policy', 'Duplicate submission', 'Personal expense mixed with business'],
    signals: ['expense', 'receipt', 'claim', 'reimburse', 'policy', 'travel', 'mileage', 'per diem'],
  },
];

/** The blank slate. Offered alongside every match so a proposal is never the only option. */
export const BLANK_PROCESS = {
  id: 'blank',
  name: 'Something else',
  domain: 'Custom',
  purpose: '',
  trigger: '',
  steps: [],
  roles: [],
  connectors: [],
  outcomes: [],
  checkpoints: [],
  exceptions: [],
  signals: [],
};

const words = (s) => String(s || '').toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);

/**
 * Score a set of Agents against the library.
 *
 * Returns ranked candidates, each with the evidence for the score, so the
 * proposal can be argued with. Confidence is deliberately coarse — a word-overlap
 * match is a decent hint and a terrible measurement, so it is reported as
 * high / medium / low and never as a percentage on an end-user surface.
 */
export function MatchProcess(context = {}) {
  const { agents = [], tools = [], notes = '' } = context;

  const haystack = [];
  agents.forEach((a) => {
    haystack.push.apply(haystack, words(a.name));
    haystack.push.apply(haystack, words(a.role));
    (a.skills || []).forEach((s) => haystack.push.apply(haystack, words(s)));
    (a.tools || []).forEach((t) => haystack.push.apply(haystack, words(t)));
  });
  tools.forEach((t) => haystack.push.apply(haystack, words(typeof t === 'string' ? t : t.name || t.provider)));
  haystack.push.apply(haystack, words(notes));

  const bag = {};
  haystack.forEach((w) => { bag[w] = (bag[w] || 0) + 1; });

  const scored = BUSINESS_PROCESSES.map((process) => {
    const hits = process.signals.filter((sig) => {
      const parts = words(sig);
      return parts.every((p) => bag[p]);
    });

    /* Which of the process's own roles look like Agents that are present. */
    const roleHits = process.roles.filter((role) =>
      agents.some((a) => {
        const rw = words(role);
        const aw = words(a.name).concat(words(a.role));
        return rw.some((w) => aw.indexOf(w) !== -1);
      }),
    );

    const score = hits.length * 2 + roleHits.length * 3;
    const coverage = process.roles.length ? roleHits.length / process.roles.length : 0;
    const confidence = score >= 10 ? 'high' : score >= 5 ? 'medium' : 'low';

    const evidence = [];
    if (roleHits.length) {
      evidence.push(
        roleHits.length + ' of the ' + process.roles.length + ' usual roles are here: ' + roleHits.join(', '),
      );
    }
    if (hits.length) evidence.push('Matches on ' + hits.slice(0, 5).join(', '));
    if (agents.length) evidence.push(agents.length + ' Agents selected');

    return { process, score, hits, roleHits, coverage, confidence, evidence };
  });

  return scored
    .filter((m) => m.score > 0)
    .sort((a, b) => b.score - a.score);
}

/* Lowercase alias for sibling modules; MatchProcess is the published name. */
export const matchProcess = MatchProcess;

/**
 * A matched process, offered as a proposal rather than a result.
 *
 * Same grammar as LearnedPattern: what LAMP thinks, what it is going on, and
 * three ways out — use it, look closer, or dismiss it.
 */
export function ProcessProposal({
  match, selected = false, primary = false, onUse, onReview, onDismiss, compact = false, className = '', ...rest
}) {
  if (!match) return null;
  const { process, confidence, evidence = [], roleHits = [] } = match;

  return (
    <article
      className={['lamp-proposal', primary && 'lamp-proposal--primary', selected && 'lamp-proposal--selected', compact && 'lamp-proposal--compact', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <div className="lamp-proposal__top">
        <Icon name="flare" size={14} style={{ color: 'var(--status-waiting-text)' }} />
        <span className="lamp-proposal__note">LAMP thinks this is</span>
        <span style={{ marginLeft: 'auto' }}><MemoryConfidence level={confidence} /></span>
      </div>

      <div className="lamp-proposal__name">
        {process.name}
        <Badge outline micro>{process.domain}</Badge>
        {process.aka && process.aka.length ? <span className="lamp-proposal__aka">{process.aka[0]}</span> : null}
      </div>

      <p className="lamp-proposal__purpose">{process.purpose}</p>

      {!compact && evidence.length ? (
        <ul className="lamp-proposal__ev">
          {evidence.map((e) => <li key={e}>{e}</li>)}
        </ul>
      ) : null}

      {!compact && roleHits.length < process.roles.length ? (
        <p className="lamp-proposal__gap">
          Usually also has: {process.roles.filter((r) => roleHits.indexOf(r) === -1).join(', ')}
        </p>
      ) : null}

      {(onUse || onReview || onDismiss) ? (
        <div className="lamp-proposal__actions">
          {onUse ? <Button size="sm" variant={selected ? 'brand' : 'primary'} icon={selected ? 'check' : undefined} onClick={() => onUse(process)}>{selected ? 'Selected' : 'Use this process'}</Button> : null}
          {onReview ? <Button size="sm" variant="secondary" icon="visibility" onClick={() => onReview(process)}>Review steps</Button> : null}
          {onDismiss ? <Button size="sm" variant="quiet" onClick={() => onDismiss(process)}>Not this</Button> : null}
        </div>
      ) : null}
    </article>
  );
}
