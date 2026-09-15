export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export interface RadioGroupProps {
  name: string;
  options: Array<string | { value: string; label: string; description?: string }>;
  value?: string;
  onChange?: (v: string) => void;
  direction?: 'row' | 'column';
}
export declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
