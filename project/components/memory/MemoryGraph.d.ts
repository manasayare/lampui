export interface MemoryGraphNode {
  id: string;
  label: string;
  /** Colour carries kind; geometry follows the product grammar —
   *  agent = hexagon, tool = square, scope = diamond, everything else a circle. */
  kind?: 'fact' | 'policy' | 'observed' | 'inferred' | 'exception' | 'entity' | 'agent' | 'tool' | 'scope';
  /** Drives node radius — evidence count, retrieval count or degree. */
  value?: number;
  /** Tooltip detail line. */
  detail?: string;
  color?: string;
}
export interface MemoryGraphLink {
  source: string;
  target: string;
  /** Spring weight. Higher pulls the pair closer. */
  strength?: number;
  /** inferred / suggested render dashed; conflict renders red and heavier. */
  kind?: 'explicit' | 'inferred' | 'suggested' | 'conflict';
}

/**
 * @startingPoint section="Memory" subtitle="Obsidian-style force graph over LAMP memory" viewport="700x420"
 */
export interface MemoryGraphProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'onSelect'> {
  nodes: MemoryGraphNode[];
  links: MemoryGraphLink[];
  width?: number;
  height?: number;
  showLabels?: boolean;
  /** Nodes below this radius stay unlabelled — never render type under 10px. */
  labelMinRadius?: number;
  selectedId?: string;
  onSelect?: (node: MemoryGraphNode) => void;
  onHover?: (node: MemoryGraphNode | null) => void;
  legend?: boolean;
  /** Simulation frame cap. Default 260 — it settles and then stops. */
  iterations?: number;
}
export declare function MemoryGraph(props: MemoryGraphProps): JSX.Element;
