export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
export declare function TextInput(props: TextInputProps): JSX.Element;
export interface SearchInputProps extends TextInputProps { shortcut?: string }
export declare function SearchInput(props: SearchInputProps): JSX.Element;
export declare function NumberInput(props: TextInputProps & { step?: number }): JSX.Element;
export interface SecretFieldProps { value?: string; revealed?: boolean; onReveal?: (v: boolean) => void; expiring?: boolean }
export declare function SecretField(props: SecretFieldProps): JSX.Element;
export declare function Textarea(props: any): JSX.Element;
