export interface GlobalHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Replaces the wordmark. No logo asset ships with this system — the default is type. */
  brand?: React.ReactNode;
  /** Breadcrumb / ObjectPath and environment state. */
  center?: React.ReactNode;
  /** Simulation + Live actions, search, notifications, account. */
  right?: React.ReactNode;
  wordmark?: string;
}
export declare function GlobalHeader(props: GlobalHeaderProps): JSX.Element;
