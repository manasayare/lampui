export interface CanvasToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** floating = bottom centre (tools) · topleft · topright (viewport) · object = above the selection */
  position?: 'floating' | 'topleft' | 'topright' | 'object';
  children?: React.ReactNode;
}
export declare const CanvasToolbar: React.ForwardRefExoticComponent<CanvasToolbarProps & React.RefAttributes<HTMLDivElement>>;
export interface CanvasZoomControlsProps {
  zoom?: number;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onFit?: () => void;
  onReset?: () => void;
}
export declare const CanvasZoomControls: React.ForwardRefExoticComponent<CanvasZoomControlsProps & React.RefAttributes<HTMLDivElement>>;
export interface CanvasObjectToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Canvas-space anchor; the toolbar centres above it. */
  x: number;
  y: number;
}
export declare const CanvasObjectToolbar: React.ForwardRefExoticComponent<CanvasObjectToolbarProps & React.RefAttributes<HTMLDivElement>>;
export interface CanvasMinimapProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Object blips: position, size and tone (live = gold, error = red). */
  blips?: Array<{ x: number; y: number; w?: number; h?: number; tone?: 'live' | 'error' }>;
  viewport?: { left: number; top: number; width: number; height: number };
  onJump?: (e: React.MouseEvent) => void;
}
export declare const CanvasMinimap: React.ForwardRefExoticComponent<CanvasMinimapProps & React.RefAttributes<HTMLDivElement>>;
