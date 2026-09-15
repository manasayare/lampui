export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  tone?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'memory';
  height?: number;
  /** Sliding bar for unknown duration. */
  indeterminate?: boolean;
  label?: string;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
/**
 * @startingPoint section="Data" subtitle="Usage meters — tokens, runs, seats, storage" viewport="700x180"
 */
export interface UsageMeterProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  used: number;
  limit: number;
  unit?: string;
  /** Auto-escalates to warning at 85% and danger at 100% unless set. */
  tone?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'memory';
  footnote?: string;
  format?: (v: number) => string;
}
export declare function UsageMeter(props: UsageMeterProps): JSX.Element;
