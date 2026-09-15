export interface SideNavProps extends React.HTMLAttributes<HTMLElement> {
  /** 48px icon rail. */
  collapsed?: boolean;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function SideNav(props: SideNavProps): JSX.Element;
export interface NavSectionProps { label?: string; actions?: React.ReactNode; children?: React.ReactNode }
export declare function NavSection(props: NavSectionProps): JSX.Element;
export interface NavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  label: string;
  /** Right-aligned mono value — counts, durations. */
  meta?: string;
  active?: boolean;
  collapsed?: boolean;
  badge?: React.ReactNode;
}
export declare function NavItem(props: NavItemProps): JSX.Element;
