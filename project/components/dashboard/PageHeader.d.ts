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
export declare function PageHeader(props: PageHeaderProps): JSX.Element;
export interface DashboardPageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** A PageHeader element. */
  header?: React.ReactNode;
  /** FilterBar / Tabs / SegmentedControl row under the header. */
  toolbar?: React.ReactNode;
  /** Removes the 20px page padding — for pages docked inside AppShell. */
  flush?: boolean;
}
export declare function DashboardPage(props: DashboardPageProps): JSX.Element;
export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  actions?: React.ReactNode;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
