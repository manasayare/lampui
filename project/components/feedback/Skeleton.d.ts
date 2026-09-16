export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  /** hex = Agent placeholder on the canvas · circle = Skill · text = stacked lines */
  variant?: 'block' | 'text' | 'circle' | 'hex';
  lines?: number;
}
export declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<HTMLSpanElement>>;
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> { size?: number }
export declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLSpanElement>>;
