export interface TagInputProps extends React.HTMLAttributes<HTMLDivElement> {
  values?: string[];
  onChange?: (values: string[]) => void;
  placeholder?: string;
  mono?: boolean;
}
export declare function TagInput(props: TagInputProps): JSX.Element;
