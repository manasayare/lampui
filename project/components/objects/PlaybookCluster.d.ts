export type PlaybookState = 'observed' | 'inferred' | 'draft' | 'unvalidated' | 'simulation' | 'simulationFailed' | 'validated' | 'stable' | 'live' | 'learning' | 'paused' | 'degraded' | 'failed' | 'error' | 'disabled' | 'deprecated';
/**
 * @startingPoint section="LAMP objects" subtitle="Playbook frame around a snapped Agent composition" viewport="700x300"
 */
export interface PlaybookClusterProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  /** Drives the frame: dashed violet when inferred, blue in simulation, gold when live, red on failure. */
  state?: PlaybookState;
  selected?: boolean;
  /** Agent count shown in the header. */
  agents?: number;
  /** Mono footer facts — last run, success rate, checkpoints, tool dependencies. */
  meta?: string[];
  actions?: React.ReactNode;
  padding?: number | string;
  /** flow = children lay out normally · free = FigJam-style section you position AgentIslands inside. */
  layout?: 'flow' | 'free';
  /** Drag-over feedback while an Agent is being dropped into the section. */
  dropState?: 'valid' | 'invalid';
  /** Title row only — the composition is hidden. */
  collapsed?: boolean;
  /** Shows the corner resize grip. */
  resizable?: boolean;
  width?: number | string;
  height?: number | string;
  /** The snapped composition — normally a HexLattice of AgentHex. */
  children?: React.ReactNode;
}
export declare function PlaybookCluster(props: PlaybookClusterProps): JSX.Element;
