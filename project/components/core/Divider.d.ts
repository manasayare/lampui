export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  orientation?: 'horizontal' | 'vertical';
  /** Renders a micro uppercase section label with a trailing rule. */
  label?: string;
}
export declare function Divider(props: DividerProps): JSX.Element;
