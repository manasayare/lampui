/**
 * @startingPoint section="Human in the loop" subtitle="Approval, decision and escalation cards" viewport="700x340"
 */
export interface ApprovalCardProps extends React.HTMLAttributes<HTMLElement> {
  /** The decision, phrased as a question in sentence case. */
  question: React.ReactNode;
  /** Large tabular amount when money is involved. */
  amount?: string;
  /** critical = red rail (destructive/irreversible) · financial = gold rail (money) */
  tone?: 'default' | 'critical' | 'financial';
  /** approve = approve/edit/reject · choice = explicit options */
  kind?: 'approve' | 'choice';
  /** The Agent that asked. */
  requestedBy?: string;
  playbook?: string;
  /** Mono countdown, e.g. "Due in 2h". */
  dueIn?: string;
  /** The facts a human needs to decide — label/value pairs, no more than six. */
  facts?: Array<{ label: string; value: React.ReactNode }>;
  options?: Array<{ id: string; label: string; primary?: boolean; onSelect?: () => void }>;
  /** Supporting evidence block — MemoryFact, CodeFrame, EntityChips. */
  evidence?: React.ReactNode;
  onApprove?: () => void;
  onReject?: () => void;
  onEdit?: () => void;
  onRequestInfo?: () => void;
  onEscalate?: () => void;
}
export declare function ApprovalCard(props: ApprovalCardProps): JSX.Element;
export interface HumanCheckpointProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
  detail?: string;
}
export declare function HumanCheckpoint(props: HumanCheckpointProps): JSX.Element;
