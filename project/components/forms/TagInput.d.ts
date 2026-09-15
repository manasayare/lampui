export interface TagInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  values?: string[];
  onChange?: (values: string[]) => void;
  placeholder?: string;
  mono?: boolean;
}
export declare function TagInput(props: TagInputProps): JSX.Element;
