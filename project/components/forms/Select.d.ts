export interface SelectOption { value: string; label: string; disabled?: boolean }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<string | SelectOption>;
  size?: 'sm' | 'md';
  placeholder?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
