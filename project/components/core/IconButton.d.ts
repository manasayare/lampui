export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string | React.ReactNode;
  /** Required — icon-only controls always carry an accessible name. */
  label: string;
  /** xs 20 · sm 24 · md 28 · lg 32 */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Adds a border + surface, for standalone toolbar buttons. */
  bordered?: boolean;
  /** Toggled-on state (gold). */
  active?: boolean;
  tone?: 'default' | 'danger';
}
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
