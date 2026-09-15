export interface CodeFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shown as an uppercase mono tag: json, sql, yaml, log, diff. */
  language?: string;
  title?: string;
  actions?: React.ReactNode;
  maxHeight?: number;
  onCopy?: () => void;
  children?: React.ReactNode;
}
export declare const CodeFrame: React.ForwardRefExoticComponent<CodeFrameProps & React.RefAttributes<HTMLDivElement>>;
