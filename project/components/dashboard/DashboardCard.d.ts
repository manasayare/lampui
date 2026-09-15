/**
 * @startingPoint section="Dashboard" subtitle="shadcn-shaped dashboard cards and grids" viewport="700x320"
 */
export interface DashboardCardProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  /** Range or basis — "Last 30 days · Live only". */
  description?: string;
  actions?: React.ReactNode;
  /** Quiet footer line — sample size, caveat, link. */
  footer?: React.ReactNode;
  raised?: boolean;
  /** Removes content padding, for tables and full-bleed charts. */
  flush?: boolean;
  /** Grid columns to span. */
  span?: number;
}
export declare function DashboardCard(props: DashboardCardProps): JSX.Element;
export interface DashboardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 2 · 3 · 4 — collapses to 2 below 1100px and 1 below 760px. */
  columns?: 2 | 3 | 4;
}
export declare function DashboardGrid(props: DashboardGridProps): JSX.Element;
/** Auto-fitting row of MetricCards, minimum 180px each. */
export declare function StatGrid(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
