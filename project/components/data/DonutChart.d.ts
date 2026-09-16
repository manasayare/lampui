/**
 * @startingPoint section="Data" subtitle="Donut and radial gauge" viewport="700x200"
 */
export interface DonutChartProps extends React.SVGAttributes<SVGElement> {
  /** Max 5 slices; beyond that use a horizontal BarChart. */
  data: Array<{ label?: string; value: number; color?: string }>;
  size?: number;
  thickness?: number;
  /** Tabular figure in the middle. */
  centerValue?: React.ReactNode;
  centerLabel?: string;
  /** 270° arc with round caps — progress toward a target. */
  gauge?: boolean;
  /** Denominator for gauges. */
  max?: number;
  startAngle?: number;
}
export declare const DonutChart: React.ForwardRefExoticComponent<DonutChartProps & React.RefAttributes<SVGSVGElement>>;
