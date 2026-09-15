/**
 * @startingPoint section="LAMP objects" subtitle="Genie card with hive preview and operating stats" viewport="700x280"
 */
export interface GenieCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** One flat sentence describing the capability. */
  purpose?: string;
  /** LAMP status key. */
  status?: string;
  selected?: boolean;
  /** Gold perimeter — only when live or selected, never permanently. */
  live?: boolean;
  /** Compact operating figures: Playbooks, Agents, runs today, human touches, cost. */
  stats?: Array<{ label: string; value: string | number }>;
  /** Collapsed hive preview — a small HexLattice at size="xs". */
  hive?: React.ReactNode;
  actions?: React.ReactNode;
}
export declare function GenieCard(props: GenieCardProps): JSX.Element;
