/**
 * @startingPoint section="Controls" subtitle="Button family — graphite primary, gold brand, danger" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = graphite (the default action). brand = gold, reserved for Go Live / bond confirmation. danger = Emergency Stop and destructive actions. */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'quiet' | 'brand' | 'danger' | 'danger-quiet';
  /** xs 24px · sm 28px · md 32px (default) · lg 40px */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Material Symbol name (Outlined) or a node. */
  icon?: string | React.ReactNode;
  iconRight?: string | React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  /** Keyboard hint rendered inside the button, e.g. "S". */
  shortcut?: string;
  children?: React.ReactNode;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export interface SplitButtonProps extends ButtonProps { onMenu?: () => void; menuLabel?: string }
export declare const SplitButton: React.ForwardRefExoticComponent<SplitButtonProps & React.RefAttributes<HTMLSpanElement>>;
