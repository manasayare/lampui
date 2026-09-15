import type { StackedBarSegment } from './StackedBar';

/**
 * @startingPoint section="Data" subtitle="Token context by memory scope, with total" viewport="700x260"
 */
export interface ContextBreakdownProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shorthand: { agent: 618, playbook: 402, genie: 771, lamp: 340, evidence: 1281 }.
   *  Rows are ordered narrow to broad regardless of key order. */
  context?: Partial<Record<'agent' | 'playbook' | 'genie' | 'lamp' | 'evidence', number>>;
  /** Explicit rows, when the breakdown is not by memory scope. Wins over `context`. */
  segments?: StackedBarSegment[];
  unit?: string;
  /** Tokens served from cache. Shown below the total as a saving, never stacked in. */
  cached?: number;
  /** Context window size — adds "N% of the X token window". */
  limit?: number;
  showBar?: boolean;
  title?: string;
}
export declare const ContextBreakdown: React.ForwardRefExoticComponent<ContextBreakdownProps & React.RefAttributes<HTMLDivElement>>;
