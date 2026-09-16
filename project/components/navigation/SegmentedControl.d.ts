export interface SegmentedOption { value: string; label?: string; icon?: string }
export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: Array<string | SegmentedOption>;
  value?: string;
  onChange?: (v: string) => void;
  size?: 'sm' | 'md';
}
export declare const SegmentedControl: React.ForwardRefExoticComponent<SegmentedControlProps & React.RefAttributes<HTMLDivElement>>;
