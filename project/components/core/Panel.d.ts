export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  /** Rendered as an 11px uppercase panel title. */
  title?: string;
  actions?: React.ReactNode;
  /** Drops radius + border, for panels docked inside the app shell. */
  flush?: boolean;
  width?: number | string;
  children?: React.ReactNode;
}
export declare function Panel(props: PanelProps): JSX.Element;
