export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  /** Rendered as an 11px uppercase panel title. */
  title?: string;
  actions?: React.ReactNode;
  /** Drops radius + border, for panels docked inside the app shell. */
  flush?: boolean;
  width?: number | string;
  children?: React.ReactNode;
}
export declare const Panel: React.ForwardRefExoticComponent<PanelProps & React.RefAttributes<HTMLElement>>;
