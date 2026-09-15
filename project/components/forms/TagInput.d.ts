export interface TagInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  values?: string[];
  onChange?: (values: string[]) => void;
  placeholder?: string;
  mono?: boolean;
}
export declare const TagInput: React.ForwardRefExoticComponent<TagInputProps & React.RefAttributes<HTMLInputElement>>;
