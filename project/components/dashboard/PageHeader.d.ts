export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** H3-scale page title, sentence case. */
  title: string;
  /** One flat sentence of orientation. */
  description?: string;
  /** Badges, environment pills, last-updated stamps. */
  meta?: React.ReactNode;
  /** Primary + secondary page actions, right-aligned. */
  actions?: React.ReactNode;
}
export declare const PageHeader: React.ForwardRefExoticComponent<PageHeaderProps & React.RefAttributes<HTMLElement>>;
export interface DashboardPageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** A PageHeader element. */
  header?: React.ReactNode;
  /** FilterBar / Tabs / SegmentedControl row under the header. */
  toolbar?: React.ReactNode;
  /** Removes the 20px page padding — for pages docked inside AppShell. */
  flush?: boolean;
}
export declare const DashboardPage: React.ForwardRefExoticComponent<DashboardPageProps & React.RefAttributes<HTMLDivElement>>;
export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  actions?: React.ReactNode;
}
export declare const SectionHeader: React.ForwardRefExoticComponent<SectionHeaderProps & React.RefAttributes<HTMLDivElement>>;
