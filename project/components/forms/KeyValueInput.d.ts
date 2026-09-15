export interface KeyValueRow { key: string; value: string }
export interface KeyValueInputProps extends React.HTMLAttributes<HTMLDivElement> {
  rows?: KeyValueRow[];
  onChange?: (rows: KeyValueRow[]) => void;
  keyPlaceholder?: string;
  valuePlaceholder?: string;
  addLabel?: string;
  mono?: boolean;
}
export declare function KeyValueInput(props: KeyValueInputProps): JSX.Element;
