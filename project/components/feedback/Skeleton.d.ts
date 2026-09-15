export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  /** hex = Agent placeholder on the canvas · circle = Skill · text = stacked lines */
  variant?: 'block' | 'text' | 'circle' | 'hex';
  lines?: number;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> { size?: number }
export declare function Spinner(props: SpinnerProps): JSX.Element;
