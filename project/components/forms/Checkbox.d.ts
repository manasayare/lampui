export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  indeterminate?: boolean;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
