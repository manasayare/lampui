import type { FactType, MemoryScopeKey } from './MemoryBadge';
/**
 * @startingPoint section="Memory" subtitle="A memory fact with evidence, scope and confidence" viewport="700x260"
 */
export interface MemoryFactProps extends React.HTMLAttributes<HTMLElement> {
  type?: FactType;
  scope?: MemoryScopeKey;
  /** The fact in plain business language — no implementation terms. */
  fact: React.ReactNode;
  confidence?: 'low' | 'medium' | 'high' | 'veryHigh';
  confidenceValue?: number;
  /** Percentages only in Inspector/technical surfaces. */
  showConfidenceValue?: boolean;
  /** Where it came from — "WhatsApp threads, SAP records". */
  source?: string;
  evidenceCount?: number;
  lastConfirmed?: string;
  freshness?: string;
  owner?: string;
  /** Above zero renders the conflict treatment. */
  contradictions?: number;
  /** Private · Shared · Restricted */
  access?: string;
  /** Lifecycle: candidate, pendingReview, approved, rejected, promoted, expired, stale, contradicted, superseded. */
  state?: 'candidate' | 'pendingReview' | 'approved' | 'rejected' | 'promoted' | 'expired' | 'stale' | 'contradicted' | 'superseded';
  onConfirm?: () => void;
  onCorrect?: () => void;
  onIgnore?: () => void;
  actions?: React.ReactNode;
}
export declare const MemoryFact: React.ForwardRefExoticComponent<MemoryFactProps & React.RefAttributes<HTMLElement>>;
