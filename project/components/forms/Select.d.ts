export interface SelectOption { value: string; label: string; disabled?: boolean }
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options?: Array<string | SelectOption>;
  size?: 'sm' | 'md';
  placeholder?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
