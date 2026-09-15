export interface EnvironmentPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  environment?: 'draft' | 'simulation' | 'live' | 'paused' | 'killed';
  label?: string;
  /** Optional scope suffix, e.g. "Finance Genie". */
  scope?: string;
}
export declare function EnvironmentPill(props: EnvironmentPillProps): JSX.Element;
