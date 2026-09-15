/**
 * @startingPoint section="Data" subtitle="Matrix and calendar heatmaps" viewport="700x280"
 */
export interface HeatmapProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Row labels — Agents, Tools, days, hours. Omit for a calendar strip. */
  rows?: string[];
  columns?: string[];
  /** values[row][column]. */
  values: number[][];
  max?: number;
  /** gold = activity · blue = simulation · memory = retrieval · risk = green→red · neutral */
  ramp?: 'gold' | 'blue' | 'memory' | 'neutral' | 'risk';
  cellSize?: number;
  gap?: number;
  showScale?: boolean;
  format?: (v: number) => string | number;
}
export declare function Heatmap(props: HeatmapProps): JSX.Element;
/** Ramp lookup for custom cells — same steps as the component. */
export declare function heatColor(value: number, max: number, ramp?: string): string;
