export interface WorkspaceSwitcherProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Business or LAMP name. */
  name: string;
  /** Secondary line — the LAMP inside the Business, or member count. */
  subtitle?: string;
  initials?: string;
}
export declare const WorkspaceSwitcher: React.ForwardRefExoticComponent<WorkspaceSwitcherProps & React.RefAttributes<HTMLButtonElement>>;
