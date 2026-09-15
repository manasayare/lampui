export interface SparklineProps extends React.SVGAttributes<SVGElement> {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  variant?: 'line' | 'bar';
  area?: boolean;
  /** Draws a dashed reference line at this value. */
  baseline?: number;
}
export declare function Sparkline(props: SparklineProps): JSX.Element;
