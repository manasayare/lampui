export type VizType = 'line' | 'area' | 'bar' | 'hbar' | 'stackedBar' | 'normalizedBar' | 'histogram' | 'donut' | 'gauge' | 'scatter' | 'sparkline' | 'heatmap' | 'calendar' | 'treemap' | 'sunburst' | 'sankey' | 'graph' | 'parallel' | 'hive' | 'constellation' | 'topology' | 'fingerprint' | 'telemetry';
/**
 * @startingPoint section="Data" subtitle="One visualization API across all renderer tiers" viewport="700x300"
 */
export interface VizProps {
  type?: VizType;
  title?: string;
  subtitle?: string;
  legend?: Array<{ label: string; color?: string; value?: string | number; dashed?: boolean }>;
  legendVariant?: 'swatch' | 'line';
  footnote?: string;
  state?: 'ready' | 'loading' | 'empty' | 'error';
  height?: number;
  actions?: React.ReactNode;
  flush?: boolean;
  /** Renderer props for the chosen type — series/labels/values/cells/data. */
  config?: Record<string, any>;
  /** Renderer props may also be passed flat. */
  [key: string]: any;
}
export declare function Viz(props: VizProps): JSX.Element;
/** type → renderer tier: standard (Recharts) · advanced (ECharts) · native (visx) · realtime (uPlot). */
export declare const VIZ_TIERS: Record<VizType, 'standard' | 'advanced' | 'native' | 'realtime'>;
