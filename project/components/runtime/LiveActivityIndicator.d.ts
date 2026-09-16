export interface LiveActivityIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** live = gold pulse · simulation = blue pulse · idle = static grey dot (no animation at rest) */
  mode?: 'live' | 'simulation' | 'idle';
  label?: string;
  /** Active run count. */
  count?: number;
}
export declare const LiveActivityIndicator: React.ForwardRefExoticComponent<LiveActivityIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
