export interface InspectorFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  /** id of the control, for the label's htmlFor. */
  htmlFor?: string;
  /** Tooltip on a help glyph beside the label. For a sentence of explanation. */
  hint?: string;
  helper?: string;
  error?: string;
  warning?: string;
  required?: boolean;
  optional?: boolean;
  /** Value comes from a broader scope. Stated in words under the control. */
  inherited?: boolean;
  /** "Inherited from Finance Genie". */
  inheritedFrom?: string;
  /** This object has set its own value over an inherited one. */
  overridden?: boolean;
  /** Dims the label — configuration most operators should not need. */
  advanced?: boolean;
  /** Label above the control instead of beside it, for textareas and editors. */
  stack?: boolean;
  /** Trailing control — a Reset or Override button. */
  action?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function InspectorField(props: InspectorFieldProps): JSX.Element;
