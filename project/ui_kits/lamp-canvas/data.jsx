const AGENTS = [
  { id: 'intake', name: 'Invoice Intake', role: 'coordinator', roleLabel: 'Coordinator', col: 0, row: 0, status: 'success', state: 'bonded', purpose: 'Watch the shared inbox and Drive folder for new vendor invoices, then start the Playbook.', skills: [['Extract', 'content_paste'], ['Classify', 'category']], tools: [['googledrive', 'Google Drive'], ['gmail', 'Gmail']], limit: '—', memory: 4, task: 'Idle' },
  { id: 'matcher', name: 'Invoice Matcher', role: 'specialist', roleLabel: 'Specialist', col: 1, row: 0, status: 'running', state: 'running', purpose: 'Match each invoice to its purchase order and flag any mismatch above tolerance.', skills: [['Reconcile', 'rule'], ['Verify', 'fact_check']], tools: [['sap', 'SAP']], limit: '₹0', memory: 12, task: 'Matching INV-20418' },
  { id: 'verifier', name: 'Vendor Verifier', role: 'specialist', roleLabel: 'Specialist', col: 2, row: 0, status: 'waiting', state: 'bonded', purpose: 'Confirm the vendor is approved, active and has current banking details.', skills: [['Search', 'search'], ['Verify', 'fact_check']], tools: [['salesforce', 'Salesforce']], limit: '₹0', memory: 7, task: 'Waiting for Matcher' },
  { id: 'approver', name: 'Payment Approver', role: 'humanSupervised', roleLabel: 'Human-supervised', col: 1, row: 1, status: 'needsHuman', state: 'needsHuman', purpose: 'Approve payments within the authority limit and escalate anything above it.', skills: [['Summarize', 'summarize']], tools: [['sap', 'SAP']], limit: '₹50,000', memory: 9, task: 'Awaiting approval · ₹184,200' },
  { id: 'ledger', name: 'Ledger Sync', role: 'standard', roleLabel: 'Worker', col: 3, row: 0, status: 'error', state: 'error', purpose: 'Write settled payments back to the ledger and reconcile the daily statement.', skills: [['Reconcile', 'rule']], tools: [['salesforce', 'Salesforce']], limit: '—', memory: 3, task: 'Salesforce write failed' },
  { id: 'notifier', name: 'Vendor Notifier', role: 'standard', roleLabel: 'Worker', col: 2, row: 1, status: 'draft', state: 'compatible', purpose: 'Tell the vendor when a payment is scheduled, in their preferred channel.', skills: [['Translate', 'translate']], tools: [['whatsapp', 'WhatsApp']], limit: '—', memory: 2, task: 'Not configured' },
];

const BONDS = [
  ['intake', 'matcher', 'valid'],
  ['matcher', 'verifier', 'valid'],
  ['matcher', 'approver', 'valid'],
  ['verifier', 'ledger', 'requiresConfig'],
  ['approver', 'notifier', 'suggested'],
];

const TREE = [
  { id: 'fin', label: 'Finance Genie', icon: 'hive', status: 'live', children: [
    { id: 'vp', label: 'Vendor payment', icon: 'layers', status: 'live', meta: '6' },
    { id: 'mc', label: 'Month-end close', icon: 'layers', status: 'simulation', meta: '11' },
    { id: 'rc', label: 'Reconciliation', icon: 'layers', status: 'validated', meta: '4' },
  ] },
  { id: 'cops', label: 'Customer Ops Genie', icon: 'hive', status: 'live', children: [
    { id: 'tick', label: 'Ticket triage', icon: 'layers', status: 'live', meta: '7' },
  ] },
  { id: 'rec', label: 'Recruitment Genie', icon: 'hive', status: 'draft', children: [
    { id: 'scr', label: 'CV screening', icon: 'layers', status: 'inferred', meta: '3' },
  ] },
];

const MEMORY = [
  { type: 'policy', scope: 'lamp', confidence: 'veryHigh', fact: 'Payments above ₹50,000 require a second approver.', source: 'Finance policy v4', evidenceCount: 1, lastConfirmed: '12 Sep', access: 'Shared' },
  { type: 'observedPattern', scope: 'genie', confidence: 'high', fact: 'Vendor approvals usually happen through WhatsApp before they are entered in SAP.', source: 'WhatsApp threads, SAP records', evidenceCount: 23, lastConfirmed: '2 days ago', owner: 'Finance' },
  { type: 'exception', scope: 'playbook', confidence: 'medium', fact: 'Meridian Supplies invoices arrive without a PO reference in about one case in five.', source: 'Invoice history', evidenceCount: 9, lastConfirmed: '4 days ago', contradictions: 1 },
  { type: 'preference', scope: 'agent', confidence: 'high', fact: 'Asha Rao prefers approval requests batched at 09:00 rather than sent individually.', source: 'Approval timing', evidenceCount: 14, freshness: 'today' },
];

Object.assign(window, { AGENTS, BONDS, TREE, MEMORY });
