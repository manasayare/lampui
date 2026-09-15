export type AgentRole =
  | 'standard' | 'coordinator' | 'specialist' | 'humanSupervised' | 'system' | 'external';

export type AgentState =
  /* composition */ 'idle' | 'hover' | 'selected' | 'multiSelected' | 'dragging' | 'compatible' | 'snapReady' | 'bonding' | 'bonded' | 'unconfigured' | 'disabled'
  /* runtime */ | 'queued' | 'starting' | 'running' | 'delegating' | 'waiting' | 'needsHuman' | 'retrying' | 'succeeded' | 'success' | 'warning' | 'failed' | 'error' | 'degraded' | 'paused' | 'killed';

/**
 * @startingPoint section="LAMP objects" subtitle="The Agent hexagon in every size and runtime state" viewport="700x280"
 */
export interface AgentHexProps extends React.HTMLAttributes<HTMLDivElement> {
  /** xs 36×31 · sm 48×42 · md 64×55 (canvas default) · lg 88×76 (hero) · xl 120×104 */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  state?: AgentState;
  role?: AgentRole;
  /** Drives energy colour: draft = none, simulation = blue, live = gold. */
  environment?: 'draft' | 'simulation' | 'live';
  /** Semantic-zoom tier: glyph (<50%) · name (50–120%) · meta (>120%). */
  detail?: 'glyph' | 'name' | 'meta';
  name?: string;
  /** Role text under the name at detail="meta" — "Coordinator", "Human-supervised". */
  roleLabel?: string;
  /** Override the role glyph with any Material Symbol. */
  glyph?: string;
  /** LAMP status key — rendered as an adjacent dot + label, never as a fill. */
  status?: string;
  badgeCount?: number;
  memoryActive?: boolean;
  /** Count of attached Tools — renders a small pin, not individual tiles. */
  tools?: number;
  authority?: string;
  task?: string;
  cost?: string;
  confidence?: string;
  dashed?: boolean;
  /** Passing onClick makes the hexagon itself focusable and hoverable — the label and
   *  bounding box are never part of the hit area. */
  onClick?: (e: React.MouseEvent) => void;
  /** Caps the label, which by default may be wider than the hexagon (104px).
   *  On a lattice the clearance rule is `labelWidth <= 0.5 * hexWidth + 2 * gap`
   *  — at the 104px default that needs a gap of 36 or more at size md, because
   *  odd columns sit half a row lower and their body lands in the label band.
   *  Tighten this instead when the lattice must stay dense. */
  labelWidth?: number;
}
export declare const AgentHex: React.ForwardRefExoticComponent<AgentHexProps & React.RefAttributes<HTMLDivElement>>;
export declare const AGENT_SIZES: Record<string, [number, number]>;
