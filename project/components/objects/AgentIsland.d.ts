/**
 * @startingPoint section="LAMP objects" subtitle="Groups inside a Playbook section — bonded or standalone" viewport="700x300"
 */
export interface AgentIslandProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Short label for what this group does — "Intake", "Approval", "Ledger". */
  name?: string;
  /** Quiet suffix: "runs in parallel", "on failure only", "3 of 4 cases". */
  note?: string;
  /** A single Agent working on its own — the label is quieter. */
  solo?: boolean;
  /** Dashed outline around the group. Use when the grouping itself needs to be visible. */
  outlined?: boolean;
  selected?: boolean;
  /** Free position inside a PlaybookCluster with layout="free". */
  x?: number;
  y?: number;
  actions?: React.ReactNode;
  /** A HexLattice of bonded Agents, or a single AgentHex. */
  children?: React.ReactNode;
}
export declare const AgentIsland: React.ForwardRefExoticComponent<AgentIslandProps & React.RefAttributes<HTMLDivElement>>;
