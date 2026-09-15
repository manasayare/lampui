import type { BusinessProcessDef, ProcessMatch, ProcessConnector, ProcessOutcome, ProcessCheckpoint } from './BusinessProcess';

export interface ComposedPlaybook {
  name: string;
  purpose: string;
  trigger: string;
  processId: string;
  processName: string;
  domain: string;
  agents: any[];
  steps: BusinessProcessDef['steps'];
  /** Only the outcomes left ticked, plus anything the operator added. */
  outcomes: ProcessOutcome[];
  connectors: ProcessConnector[];
  checkpoints: ProcessCheckpoint[];
  exceptions: string[];
  createGenie: boolean;
}

/**
 * @startingPoint section="Canvas" subtitle="Define a Playbook from an outlined group of Agents" viewport="720x760"
 */
export interface PlaybookComposerProps {
  open?: boolean;
  /** The outlined selection, exactly as SnapField hands it over. `name` is
   *  optional because an Agent that has not been configured yet does not have
   *  one; it renders as "Unnamed Agent" and still matches on its Tools. */
  agents: Array<{ id?: string; name?: string; role?: string; skills?: string[]; tools?: string[] }>;
  /** Tools already connected, so connector rows can show real state.
   *  Entries are matched on `provider` (a Simple Icons slug). */
  availableTools?: Array<{ provider?: string; id?: string; name?: string; state?: string }>;
  /** Pre-computed matches. Omit and the composer runs MatchProcess itself. */
  suggestions?: ProcessMatch[];
  onCreate?: (playbook: ComposedPlaybook) => void;
  onCancel?: () => void;
  /** Called with the chosen process when the operator asks to see the Genie first. */
  onPreviewGenie?: (process: BusinessProcessDef) => void;
  /** Hides the "also create a Genie" option. */
  allowGenie?: boolean;
}
export declare function PlaybookComposer(props: PlaybookComposerProps): JSX.Element;
