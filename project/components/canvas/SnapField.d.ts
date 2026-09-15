export interface SnapFieldAgent {
  id: string;
  /** Lattice coordinates. SnapField writes these back through onChange. */
  col: number;
  row: number;
  state?: string;
  [key: string]: any;
}

export interface SnapFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  agents: SnapFieldAgent[];
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Lattice gap. 0–2 for bonded compositions, 20–24 when Agent names are visible. */
  gap?: number;
  width?: number;
  height?: number;
  /** Pixels from a slot centre at which the snap engages. Default 34. */
  snapTolerance?: number;
  /** (agent, { dragging, snapReady, selected }) => node. Return an AgentHex. */
  renderAgent: (agent: SnapFieldAgent, flags: { dragging: boolean; snapReady: boolean; selected: boolean }) => React.ReactNode;
  /** BondLayer positioned at the lattice origin. */
  bonds?: React.ReactNode;
  selectedId?: string;
  onSelect?: (agent: SnapFieldAgent) => void;
  /** Commit — called with the next agents array once a drag snaps. */
  onChange?: (agents: SnapFieldAgent[]) => void;
  /** 'dragging' | 'snapReady' | 'idle' — drive the canvas status line from this. */
  onSnapStateChange?: (state: string) => void;
  origin?: { x: number; y: number };
  readOnly?: boolean;
}
export declare function SnapField(props: SnapFieldProps): JSX.Element;
