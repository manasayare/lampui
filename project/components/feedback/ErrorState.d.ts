/**
 * @startingPoint section="Errors" subtitle="Structured error — happened, did not happen, impact, recovery" viewport="700x280"
 */
export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** recoverable keeps the surface usable; fatal replaces it. */
  kind?: 'recoverable' | 'fatal';
  /** One sentence naming the failure — never "Something went wrong". */
  title: string;
  happened?: React.ReactNode;
  /** Crucial in an autonomous system: state what did NOT execute. */
  notHappened?: React.ReactNode;
  impact?: React.ReactNode;
  recovery?: React.ReactNode;
  /** Mono error code or trace id. */
  code?: string;
  onRetry?: () => void;
  onReport?: () => void;
  actions?: React.ReactNode;
}
export declare const ErrorState: React.ForwardRefExoticComponent<ErrorStateProps & React.RefAttributes<HTMLDivElement>>;
