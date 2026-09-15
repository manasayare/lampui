export interface CodeFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shown as an uppercase mono tag: json, sql, yaml, log, diff. */
  language?: string;
  title?: string;
  actions?: React.ReactNode;
  maxHeight?: number;
  onCopy?: () => void;
  children?: React.ReactNode;
}
export declare function CodeFrame(props: CodeFrameProps): JSX.Element;
