export interface KeyValueRow { key: string; value: string }
export interface KeyValueInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  rows?: KeyValueRow[];
  onChange?: (rows: KeyValueRow[]) => void;
  keyPlaceholder?: string;
  valuePlaceholder?: string;
  addLabel?: string;
  mono?: boolean;
}
export declare const KeyValueInput: React.ForwardRefExoticComponent<KeyValueInputProps & React.RefAttributes<HTMLDivElement>>;
