export interface HexCell {
  /** Lattice column. Neighbours are col±1 (offset half a row) and row±1. */
  col: number;
  row: number;
  key?: string | number;
  /** Usually an AgentHex. */
  node: React.ReactNode;
}
export interface HexLatticeProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Edge gap in px: 0 fully bonded, 2 resting default, 6+ unbonded. */
  gap?: number;
  cells: HexCell[];
  /** Absolutely-positioned layer behind the cells — usually an SVG of BondEdges. */
  overlay?: React.ReactNode;
}
export declare function HexLattice(props: HexLatticeProps): JSX.Element;
/** Centre of a lattice slot — anchor BondEdge and energy paths with it.
 *  Use `HexCenter` from the design-system namespace; `hexCenter` is the sibling-import name. */
export declare function hexCenter(col: number, row: number, size?: string, gap?: number): { x: number; y: number };
export declare function HexCenter(col: number, row: number, size?: string, gap?: number): { x: number; y: number };
