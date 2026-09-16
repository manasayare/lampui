import type { AgentState, AgentRole } from '../objects/AgentHex';

export interface SnapFieldAgent {
  id: string;
  /** Lattice coordinates. SnapField writes these back through onChange. */
  col: number;
  row: number;
  /** The Agent's runtime state, typed as AgentHex's — SnapField hands this
   *  straight back to renderAgent, so a looser type here would force a cast at
   *  every call site of the one pattern this component exists for. */
  state?: AgentState;
  /** Declared so a selection composes with PlaybookComposer without a cast —
   *  the canvas hands its selection straight to the composer. */
  name?: string;
  role?: AgentRole;
  skills?: string[];
  tools?: string[];
  [key: string]: any;
}

export interface FieldGeometry {
  agents?: Array<{ id?: string; col: number; row: number }>;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  gap?: number;
  width?: number;
  height?: number;
  origin?: { x: number; y: number };
  /** Agent id whose own cell stays a candidate — used while dragging it. */
  exclude?: string | null;
}

export interface FreeCell {
  col: number;
  row: number;
  /** Centre, in the field's own coordinates. */
  x: number;
  y: number;
}

/** Every free lattice cell of a field, as pixel points. Cells holding an Agent
 *  are omitted, which is why nothing placed by this math can overlap. */
export declare function freeCells(opts: FieldGeometry): FreeCell[];

/** The free cell nearest a point in field coordinates — the other half of
 *  AgentLibrary's `onDrop`, which reports exactly that point. Null only when the
 *  field is completely full. */
export declare function freeCellAt(
  point: { x: number; y: number },
  opts: FieldGeometry,
): (FreeCell & { d: number }) | null;

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
export interface SnapFieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSelect'> {
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
  /** BondLayer positioned at the lattice origin.
   *
   *  As a node it is fixed, so a bond drawn from an Agent's committed cell stays
   *  behind while that Agent is dragged — a gold stub pointing at where it used
   *  to be. Pass a function instead and it is called with every Agent's live
   *  position (in the same space HexCenter returns), so bonds follow the drag:
   *
   *    bonds={(pos) => (
   *      <BondLayer>
   *        <BondEdge from={pos.intake} to={pos.matcher} state="valid" />
   *      </BondLayer>
   *    )}
   */
  bonds?: React.ReactNode | ((
    positions: Record<string, { x: number; y: number }>,
    info: { draggingId: string | null },
  ) => React.ReactNode);
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
export declare const SnapField: React.ForwardRefExoticComponent<SnapFieldProps & React.RefAttributes<HTMLDivElement>>;

/** Capitalized aliases, reachable on the design-system namespace. */
export declare function FreeCells(opts: FieldGeometry): FreeCell[];
export declare function FreeCellAt(
  point: { x: number; y: number },
  opts: FieldGeometry,
): (FreeCell & { d: number }) | null;
