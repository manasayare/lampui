export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  htmlFor?: string;
  /** Sits above the control — explains what the field is for. */
  description?: string;
  /** Sits below the control — format hints. Hidden when a message is present. */
  helper?: string;
  error?: string;
  warning?: string;
  success?: string;
  required?: boolean;
  optional?: boolean;
  /** Character count string, e.g. "128/500". */
  count?: string;
  /** row = label left / control right, for Inspector rows. */
  layout?: 'stack' | 'row';
  children?: React.ReactNode;
}
export declare function Field(props: FieldProps): JSX.Element;
