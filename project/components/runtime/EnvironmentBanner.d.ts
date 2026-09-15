/**
 * @startingPoint section="Runtime" subtitle="Environment bar — draft, simulation, live, paused, stopped" viewport="700x200"
 */
export interface EnvironmentBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  environment?: 'draft' | 'simulation' | 'live' | 'paused' | 'killed';
  /** What the environment applies to — "Finance Genie". */
  scope?: string;
  /** Overrides the standard consequence sentence. */
  detail?: string;
  actions?: React.ReactNode;
}
export declare function EnvironmentBanner(props: EnvironmentBannerProps): JSX.Element;
