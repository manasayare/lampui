export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** sm 28 · md 32 (default) · lg 40 */
  size?: 'sm' | 'md' | 'lg';
  /** Leading Material Symbol name (Outlined). */
  icon?: string;
  /** Static unit on the right, e.g. "USD", "ms". */
  suffix?: React.ReactNode;
  trailing?: React.ReactNode;
  /** Geist Mono — for IDs, keys, expressions. */
  mono?: boolean;
  state?: 'default' | 'error' | 'warning' | 'success';
  loading?: boolean;
}
export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
export interface SearchInputProps extends TextInputProps { shortcut?: string }
export declare const SearchInput: React.ForwardRefExoticComponent<SearchInputProps & React.RefAttributes<HTMLInputElement>>;
export declare const NumberInput: React.ForwardRefExoticComponent<TextInputProps & { step?: number } & React.RefAttributes<HTMLInputElement>>;
export interface SecretFieldProps { value?: string; revealed?: boolean; onReveal?: (v: boolean) => void; expiring?: boolean }
export declare const SecretField: React.ForwardRefExoticComponent<SecretFieldProps & React.RefAttributes<HTMLDivElement>>;
