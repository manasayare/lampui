/**
 * @startingPoint section="Process intelligence" subtitle="Observed process as a structured sequence, not a flowchart" viewport="700x320"
 */
export interface ObservedStep {
  title: string;
  /** Person who performs the step. */
  actor?: string;
  /** System or Tool used. */
  tool?: string;
  /** Where it happens — WhatsApp, Email, Phone. */
  channel?: string;
  /** normal · approval · handoff · exception · rework */
  kind?: 'normal' | 'approval' | 'handoff' | 'exception' | 'rework';
  /** How often this step appears, e.g. "92% of cases". */
  frequency?: string;
  /** Average duration. */
  duration?: string;
}
export interface ObservedProcessProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: ObservedStep[];
  showLinks?: boolean;
}
export declare const ObservedProcess: React.ForwardRefExoticComponent<ObservedProcessProps & React.RefAttributes<HTMLDivElement>>;
