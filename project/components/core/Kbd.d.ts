export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  /** e.g. ["Cmd","K"]. Or pass "Cmd+K" as children. */
  keys?: string[];
  children?: React.ReactNode;
}
export declare function Kbd(props: KbdProps): JSX.Element;
