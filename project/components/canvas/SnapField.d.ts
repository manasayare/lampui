export interface SnapFieldAgent {
  id: string;
  /** Lattice coordinates. SnapField writes these back through onChange. */
  col: number;
  row: number;
  state?: string;
  [key: string]: any;
}

export interface SnapFieldFlags {
  dragging: boolean;
  /** Within proximityRange of a free slot — the slot is lit, the Agent has not moved. */
  proximity: boolean;
  /** Within snapTolerance — the slot is armed and the Agent is drifting toward it. */
  snapReady: boolean;
  selected: boolean;
  multiSelected: boolean;
}

/**
 * @startingPoint section="Canvas" subtitle="Drag Agents onto the hexagonal lattice" viewport="760x420"
 */
export interface SnapFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  agents: SnapFieldAgent[];
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Lattice gap. 0–2 for bonded compositions where the hexagons touch.
   *  When Agent names are visible it must satisfy AgentHex's clearance rule,
   *  `labelWidth <= 0.5 * hexWidth + 2 * gap` — so **36 or more at size md**
   *  with the default 104px label cap. Below that, a label reaches into the
   *  next column and collides with the hexagon there, because odd columns sit
   *  half a row lower and their body lands in the label band. */
  gap?: number;
  /** The field's box. Legal lattice cells are derived from it, so an Agent can
   *  never be dropped outside or half off the edge. */
  width?: number;
  height?: number;
  /** Pixels from a slot centre at which the slot arms and the Agent starts to
   *  drift toward it. Default 34. */
  snapTolerance?: number;
  /** Pixels at which the nearest free slot lights up without the Agent moving.
   *  Must be larger than snapTolerance. Default 72. Set equal to snapTolerance
   *  to remove the warning stage — not recommended; magnetism with no warning
   *  reads as a glitch. */
  proximityRange?: number;
  /** (agent, flags) => node. Return an AgentHex. */
  renderAgent: (agent: SnapFieldAgent, flags: SnapFieldFlags) => React.ReactNode;
  /** BondLayer positioned at the lattice origin. */
  bonds?: React.ReactNode;
  /** Single selection — the Inspector's subject. */
  selectedId?: string;
  onSelect?: (agent: SnapFieldAgent) => void;
  /** Commit — called with the next agents array once a drag snaps. */
  onChange?: (agents: SnapFieldAgent[]) => void;
  /** 'dragging' | 'proximity' | 'snapReady' | 'idle' — drive the canvas status
   *  line, the bond preview and the sound hooks from this one source. */
  onSnapStateChange?: (state: string) => void;
  /** Enables marquee selection by dragging on empty canvas. */
  selectable?: boolean;
  /** Marquee selection, as Agent ids. */
  selectedIds?: string[];
  onSelectionChange?: (ids: string[]) => void;
  /** Offered above the selection outline once two or more Agents are selected.
   *  This is the entry point to PlaybookComposer. */
  onGroup?: (ids: string[]) => void;
  groupLabel?: string;
  origin?: { x: number; y: number };
  readOnly?: boolean;
}
export declare function SnapField(props: SnapFieldProps): JSX.Element;
