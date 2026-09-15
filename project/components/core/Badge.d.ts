export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'waiting' | 'brand' | 'memory';
  icon?: string | React.ReactNode;
  shape?: 'pill' | 'square';
  /** 10px uppercase stamp — POLICY, EXCEPTION, INFERRED. */
  micro?: boolean;
  /** Numeric count chip. */
  count?: boolean;
  outline?: boolean;
  children?: React.ReactNode;
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
