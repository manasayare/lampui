export type RunStepState = 'pending' | 'running' | 'success' | 'warning' | 'failed' | 'skipped' | 'waitingHuman' | 'mocked' | 'blocked';
/**
 * @startingPoint section="Runtime" subtitle="Run and simulation step trace" viewport="700x300"
 */
export interface RunStepProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  index?: number;
  state?: RunStepState;
  title: React.ReactNode;
  /** What observably happened — never internal reasoning. */
  detail?: React.ReactNode;
  /** The Agent that ran the step. */
  actor?: string;
  /** Tool names called. */
  tools?: string[];
  /** Memory scope used, e.g. "Genie memory". */
  memory?: string;
  duration?: string;
  tokens?: string;
  cost?: string;
  expandable?: boolean;
  onToggle?: () => void;
}
export declare const RunStep: React.ForwardRefExoticComponent<RunStepProps & React.RefAttributes<HTMLDivElement>>;
export interface RunTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: RunStepProps[];
}
export declare const RunTimeline: React.ForwardRefExoticComponent<RunTimelineProps & React.RefAttributes<HTMLDivElement>>;
