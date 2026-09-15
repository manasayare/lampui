/**
 * @startingPoint section="Safety" subtitle="Go-live readiness checklist" viewport="700x240"
 */
export interface ReadinessItem {
  label: string;
  state?: 'passed' | 'warning' | 'failed' | 'pending';
  /** What is wrong or what was verified. */
  detail?: string;
  /** Inline fix — "Reconnect", "Review". */
  action?: React.ReactNode;
}
export interface ReadinessCheckProps extends React.HTMLAttributes<HTMLDivElement> {
  checks: ReadinessItem[];
}
export declare function ReadinessCheck(props: ReadinessCheckProps): JSX.Element;
