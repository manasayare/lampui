/**
 * @startingPoint section="Canvas" subtitle="Canvas surface with subtle grid and environment framing" viewport="900x520"
 */
export interface CanvasSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  /** dots (8px minor) · dots-major (32px) · lines · plain. Downgrades automatically below 50% and 30% zoom. */
  grid?: 'dots' | 'dots-major' | 'lines' | 'plain';
  /** Scales the world layer and drives grid + semantic-zoom decisions. */
  zoom?: number;
  /** Adds the inset environment frame: blue in simulation, gold when live, red when stopped. */
  environment?: 'draft' | 'simulation' | 'live' | 'killed';
  state?: 'idle' | 'panning' | 'zooming' | 'dragging' | 'marquee';
  locked?: boolean;
  readOnly?: boolean;
  /** EmptyState shown when the canvas holds nothing. */
  empty?: React.ReactNode;
  /** Marquee rect as CSS box values. */
  marquee?: { left: number; top: number; width: number; height: number };
  /** Alignment guides: { axis: 'x'|'y', at: number }. */
  guides?: Array<{ axis: 'x' | 'y'; at: number }>;
  /** Enables space-and-drag panning on GSAP Draggable. Off by default, so a drag
   *  on the canvas stays a marquee selection unless the operator asks to pan. */
  pannable?: boolean;
  /** Forces pan mode on without the space key — for a toolbar hand tool. */
  panMode?: boolean;
  /** Fires with the world offset during a pan. */
  onPanChange?: (offset: { x: number; y: number }) => void;
}
export declare const CanvasSurface: React.ForwardRefExoticComponent<CanvasSurfaceProps & React.RefAttributes<HTMLDivElement>>;
export interface SnapGuideProps {
  rect: { left: number; top: number; width: number; height: number };
  invalid?: boolean;
  /** snap = dashed gold outline at the snap slot · drop = filled drop preview */
  kind?: 'snap' | 'drop';
}
export declare const SnapGuide: React.ForwardRefExoticComponent<SnapGuideProps & React.RefAttributes<HTMLSpanElement>>;
