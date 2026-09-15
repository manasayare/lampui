/**
 * @startingPoint section="LAMP visualizations" subtitle="Hive heatmap — load, cost or exceptions per Agent" viewport="700x260"
 */
export interface HexHeatmapCell {
  col: number;
  row: number;
  value?: number;
  label?: string;
  /** 1–3 characters drawn inside when showLabels is on. */
  short?: string;
  color?: string;
  selected?: boolean;
  key?: string | number;
}
export interface HexHeatmapProps extends Omit<React.SVGAttributes<SVGElement>, 'onSelect'> {
  cells: HexHeatmapCell[];
  /** Hexagon width. */
  size?: number;
  gap?: number;
  max?: number;
  ramp?: 'gold' | 'blue' | 'memory' | 'neutral' | 'risk';
  showLabels?: boolean;
  onSelect?: (cell: HexHeatmapCell) => void;
}
export declare function HexHeatmap(props: HexHeatmapProps): JSX.Element;
