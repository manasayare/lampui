export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}
export declare function Radio(props: RadioProps): JSX.Element;
export interface RadioGroupProps {
  name: string;
  options: Array<string | { value: string; label: string; description?: string }>;
  value?: string;
  onChange?: (v: string) => void;
  direction?: 'row' | 'column';
}
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
