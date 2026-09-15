import type { RunStepProps } from './RunTimeline';

export interface SimulationStepProps extends RunStepProps {
  /** mocked = the Tool was never called · blocked = simulation stopped an external write. */
  state?: 'pending' | 'running' | 'success' | 'warning' | 'failed' | 'skipped' | 'waitingHuman' | 'mocked' | 'blocked';
  /** The stand-in the step used instead of a real Tool result. */
  mockedValue?: string;
  /** Why simulation refused the step — "would write to SAP". */
  blockedReason?: string;
  /** The simulated outcome, when it differs from recorded live behaviour. */
  divergence?: string;
  /** The live outcome being compared against. Shown beside `divergence`. */
  expected?: string;
  /** Scenario this step ran under — "Late invoice", "Missing PO". */
  scenario?: string;
}
export declare const SimulationStep: React.ForwardRefExoticComponent<SimulationStepProps & React.RefAttributes<HTMLDivElement>>;
