export interface PromptEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase micro label in the editor bar. */
  label?: string;
  /** Insertable variable names shown in the bar. */
  tokens?: string[];
  onInsert?: (token: string) => void;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export declare const PromptEditor: React.ForwardRefExoticComponent<PromptEditorProps & React.RefAttributes<HTMLDivElement>>;
export interface VariableTokenProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: string;
  /** variable = gold {{…}} · entity = memory-violet @mention · missing = red, unresolved */
  kind?: 'variable' | 'entity' | 'missing';
  children?: React.ReactNode;
}
export declare const VariableToken: React.ForwardRefExoticComponent<VariableTokenProps & React.RefAttributes<HTMLSpanElement>>;
