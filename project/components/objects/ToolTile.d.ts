export type ToolState = 'available' | 'connected' | 'authorizationRequired' | 'expired' | 'healthy' | 'degraded' | 'error' | 'readOnly' | 'writeEnabled' | 'blocked' | 'disabled';
/**
 * @startingPoint section="LAMP objects" subtitle="Tool squares and connection rows" viewport="700x200"
 */
export interface ToolTileProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** sm 24 · md 32 (default) · lg 40 · xl 48 */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  state?: ToolState;
  /** Simple Icons slug for the provider mark — "gmail", "salesforce", "sap". */
  provider?: string;
  /** Material Symbol fallback when there is no provider mark. */
  glyph?: string;
  name?: string;
  /** Official brand hex. Allowed on the glyph only — the tile itself stays neutral. */
  brandColor?: string;
}
export declare const ToolTile: React.ForwardRefExoticComponent<ToolTileProps & React.RefAttributes<HTMLSpanElement>>;
export interface ToolRowProps extends React.HTMLAttributes<HTMLDivElement> {
  provider?: string;
  glyph?: string;
  name: string;
  /** Connected account, e.g. "finance@northwind.com". */
  account?: string;
  state?: ToolState;
  /** Read · Write · Admin · Scoped */
  permission?: string;
  usedBy?: number | string;
  lastActivity?: string;
  health?: string;
  risk?: 'Low' | 'Medium' | 'High';
  actions?: React.ReactNode;
}
export declare const ToolRow: React.ForwardRefExoticComponent<ToolRowProps & React.RefAttributes<HTMLDivElement>>;
