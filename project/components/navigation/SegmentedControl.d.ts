export interface SegmentedOption { value: string; label?: string; icon?: string }
export interface SegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {
  options: Array<string | SegmentedOption>;
  value?: string;
  onChange?: (v: string) => void;
  size?: 'sm' | 'md';
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;
