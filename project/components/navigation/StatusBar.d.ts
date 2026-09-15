export interface StatusBarItem {
  icon?: string;
  label?: string;
  /** Mono value — zoom %, selection count, latency, cost. */
  value?: string | number;
  title?: string;
}
export interface StatusBarProps extends React.HTMLAttributes<HTMLElement> {
  items?: StatusBarItem[];
  /** Right-aligned cluster: sync, connection, cost. */
  right?: StatusBarItem[];
}
export declare function StatusBar(props: StatusBarProps): JSX.Element;
