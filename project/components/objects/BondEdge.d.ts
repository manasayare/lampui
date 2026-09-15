export type BondState = 'valid' | 'incomplete' | 'conflicting' | 'requiresConfig' | 'learned' | 'suggested' | 'manual' | 'locked' | 'preview';
export interface BondEdgeProps {
  /** Lattice-space point — from hexCenter(col,row). */
  from: { x: number; y: number };
  to: { x: number; y: number };
  /** Confirmed bonds are solid gold; suggested and learned bonds are dashed violet. */
  state?: BondState;
  /** Travelling spark — only while that bond is actually carrying execution. */
  energy?: boolean;
  environment?: 'draft' | 'simulation' | 'live';
  junction?: boolean;
}
export declare function BondEdge(props: BondEdgeProps): JSX.Element;
export interface BondLayerProps { width: number; height: number; children?: React.ReactNode }
export declare function BondLayer(props: BondLayerProps): JSX.Element;
