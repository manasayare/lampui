export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'content'> {
  content: React.ReactNode;
  /** Keyboard hint appended on the right. */
  shortcut?: string;
  /** 240px multi-line panel for runtime detail rather than a one-line label. */
  rich?: boolean;
  children: React.ReactNode;
}
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLSpanElement>>;
