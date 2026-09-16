/**
 * @startingPoint section="Data" subtitle="Scatter — automation potential, latency vs cost" viewport="700x260"
 */
export interface ScatterPlotProps extends Omit<React.SVGAttributes<SVGElement>, 'format' | 'points'> {
  /** r sets bubble size; group picks the categorical colour. */
  points: Array<{ x: number; y: number; r?: number; label?: string; group?: number; color?: string }>;
  width?: number;
  height?: number;
  xMax?: number;
  yMax?: number;
  xLabel?: string;
  yLabel?: string;
  /** Dashed crosshair splitting the plot into quadrants — e.g. frequency × automation potential. */
  quadrant?: { x: number; y: number };
  pad?: { l: number; r: number; t: number; b: number };
  format?: (v: number) => string | number;
}
export declare const ScatterPlot: React.ForwardRefExoticComponent<ScatterPlotProps & React.RefAttributes<SVGSVGElement>>;
