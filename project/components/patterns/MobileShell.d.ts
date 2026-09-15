/**
 * @startingPoint section="Mobile" subtitle="Mobile operations shell — approvals, activity, alerts, emergency" viewport="390x740"
 */
export interface MobileShellProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  leading?: React.ReactNode;
  actions?: React.ReactNode;
  /** 3–5 tabs max: Approvals, Activity, Runs, Alerts, Safety. 56px targets. */
  tabs?: Array<{ id: string; label: string; icon: string }>;
  activeTab?: string;
  onTab?: (id: string) => void;
  /** EnvironmentBanner or InlineNotification pinned under the bar. */
  banner?: React.ReactNode;
}
export declare const MobileShell: React.ForwardRefExoticComponent<MobileShellProps & React.RefAttributes<HTMLDivElement>>;
