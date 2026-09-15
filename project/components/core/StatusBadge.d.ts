export type LampStatus = 'draft' | 'observed' | 'inferred' | 'learning' | 'simulation' | 'validated' | 'ready' | 'live' | 'running' | 'waiting' | 'attention' | 'needsHuman' | 'paused' | 'stopped' | 'error' | 'killed' | 'success' | 'skipped' | 'mocked' | 'blocked' | 'disabled';

/**
 * @startingPoint section="Status" subtitle="Every operational state as colour + icon + text" viewport="700x220"
 */
export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: LampStatus;
  /** Override the canonical label. Keep it sentence case. */
  label?: string;
  /** badge = pill with icon · label = dot + text · icon = glyph only (needs surrounding text) */
  mode?: 'badge' | 'label' | 'icon';
  size?: 'sm' | 'md';
}
export declare function StatusBadge(props: StatusBadgeProps): JSX.Element;
export interface StatusDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: LampStatus;
  size?: 'md' | 'lg';
  pulse?: boolean;
  ring?: boolean;
}
export declare function StatusDot(props: StatusDotProps): JSX.Element;
export declare const STATUS: Record<LampStatus, { tone: string; icon: string; label: string; color: string }>;
