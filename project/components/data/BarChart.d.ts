import type { ChartSeries } from './LineChart';
/**
 * @startingPoint section="Data" subtitle="Bars — comparison, ranking, distribution, composition" viewport="700x260"
 */
export interface BarChartProps extends Omit<React.SVGAttributes<SVGElement>, 'format'> {
  series: ChartSeries[];
  labels?: string[];
  width?: number;
  height?: number;
  /** horizontal for ranking (Agent workload, cost by Playbook); vertical for time and distributions. */
  orientation?: 'vertical' | 'horizontal';
  stacked?: boolean;
  /** 100% stacked — composition share. */
  normalized?: boolean;
  yMax?: number;
  showGrid?: boolean;
  showAxis?: boolean;
  /** Value labels at the end of horizontal bars. */
  showValues?: boolean;
  barGap?: number;
  pad?: { l: number; r: number; t: number; b: number };
  format?: (v: number) => string | number;
}
export declare const BarChart: React.ForwardRefExoticComponent<BarChartProps & React.RefAttributes<SVGSVGElement>>;
