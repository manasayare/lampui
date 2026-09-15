export interface CanvasToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** floating = bottom centre (tools) · topleft · topright (viewport) · object = above the selection */
  position?: 'floating' | 'topleft' | 'topright' | 'object';
  children?: React.ReactNode;
}
export declare function CanvasToolbar(props: CanvasToolbarProps): JSX.Element;
export interface CanvasZoomControlsProps {
  zoom?: number;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onFit?: () => void;
  onReset?: () => void;
}
export declare function CanvasZoomControls(props: CanvasZoomControlsProps): JSX.Element;
export interface CanvasObjectToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Canvas-space anchor; the toolbar centres above it. */
  x: number;
  y: number;
}
export declare function CanvasObjectToolbar(props: CanvasObjectToolbarProps): JSX.Element;
export interface CanvasMinimapProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Object blips: position, size and tone (live = gold, error = red). */
  blips?: Array<{ x: number; y: number; w?: number; h?: number; tone?: 'live' | 'error' }>;
  viewport?: { left: number; top: number; width: number; height: number };
  onJump?: (e: React.MouseEvent) => void;
}
export declare function CanvasMinimap(props: CanvasMinimapProps): JSX.Element;
