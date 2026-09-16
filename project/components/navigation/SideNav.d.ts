export interface SideNavProps extends React.HTMLAttributes<HTMLElement> {
  /** 48px icon rail. */
  collapsed?: boolean;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export declare const SideNav: React.ForwardRefExoticComponent<SideNavProps & React.RefAttributes<HTMLElement>>;
export interface NavSectionProps { label?: string; actions?: React.ReactNode; children?: React.ReactNode }
export declare const NavSection: React.ForwardRefExoticComponent<NavSectionProps & React.RefAttributes<HTMLDivElement>>;
export interface NavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  label: string;
  /** Right-aligned mono value — counts, durations. */
  meta?: string;
  active?: boolean;
  collapsed?: boolean;
  badge?: React.ReactNode;
}
export declare const NavItem: React.ForwardRefExoticComponent<NavItemProps & React.RefAttributes<HTMLButtonElement>>;
