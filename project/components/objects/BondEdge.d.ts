export type BondState = 'valid' | 'incomplete' | 'conflicting' | 'requiresConfig' | 'learned' | 'suggested' | 'manual' | 'locked' | 'preview';
export interface BondEdgeProps {
  /** Lattice-space point — from hexCenter(col,row). */
  from: { x: number; y: number };
  to: { x: number; y: number };
  /** The size of the two Agents, so the line can be trimmed to their boundaries.
   *  Must match the lattice, or a bond either stops short of its Agents or runs
   *  under their fills. Default md. */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Confirmed bonds are solid gold; suggested and learned bonds are dashed violet. */
  state?: BondState;
  /** Travelling spark — only while that bond is actually carrying execution. */
  energy?: boolean;
  environment?: 'draft' | 'simulation' | 'live';
  junction?: boolean;
}
export declare const BondEdge: React.ForwardRefExoticComponent<BondEdgeProps & React.RefAttributes<HTMLElement>>;
export interface BondLayerProps { width: number; height: number; children?: React.ReactNode }
export declare const BondLayer: React.ForwardRefExoticComponent<BondLayerProps & React.RefAttributes<SVGSVGElement>>;
