export interface ChartSeries {
  label?: string;
  data: number[];
  /** Defaults to the categorical order — gold first, blue second. */
  color?: string;
  /** Dashed = comparison, forecast or simulation series. */
  dashed?: boolean;
  points?: boolean;
}
/**
 * @startingPoint section="Data" subtitle="Line and area — trends, telemetry, cost over time" viewport="700x260"
 */
export interface LineChartProps extends React.SVGAttributes<SVGElement> {
  series: ChartSeries[];
  /** X labels; thinned automatically. */
  labels?: string[];
  width?: number;
  height?: number;
  variant?: 'line' | 'area';
  yTicks?: number;
  yMax?: number;
  yMin?: number;
  /** Reference lines — targets, budgets, SLOs. critical renders red. */
  thresholds?: Array<{ value: number; label?: string; critical?: boolean }>;
  showGrid?: boolean;
  showAxis?: boolean;
  pad?: { l: number; r: number; t: number; b: number };
  format?: (v: number) => string | number;
}
export declare function LineChart(props: LineChartProps): JSX.Element;
