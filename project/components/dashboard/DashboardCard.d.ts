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
export declare const DashboardCard: React.ForwardRefExoticComponent<DashboardCardProps & React.RefAttributes<HTMLElement>>;
export interface DashboardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 2 · 3 · 4 — collapses to 2 below 1100px and 1 below 760px. */
  columns?: 2 | 3 | 4;
}
export declare const DashboardGrid: React.ForwardRefExoticComponent<DashboardGridProps & React.RefAttributes<HTMLDivElement>>;
/** Auto-fitting row of MetricCards, minimum 180px each. */
export declare const StatGrid: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
