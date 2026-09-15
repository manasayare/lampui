/**
 * @startingPoint section="Data" subtitle="Chart shell — title, legend, states, footnote" viewport="700x300"
 */
export interface ChartFrameProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  /** Range or comparison basis — "Last 30 days · Live only". */
  subtitle?: string;
  actions?: React.ReactNode;
  /** Legend entries; omit for single-series charts. */
  legend?: Array<{ label: string; color?: string; value?: string | number; dashed?: boolean }>;
  /** line for line/area charts, swatch for bars and categories. */
  legendVariant?: 'swatch' | 'line';
  state?: 'ready' | 'loading' | 'empty' | 'error';
  emptyLabel?: string;
  errorLabel?: string;
  /** Threshold explanations, sample size, caveats. */
  footnote?: string;
  flush?: boolean;
  height?: number;
}
export declare function ChartFrame(props: ChartFrameProps): JSX.Element;
export declare function ChartLegend(props: { items: Array<{ label: string; color?: string; value?: string | number; dashed?: boolean }>; variant?: 'swatch' | 'line' }): JSX.Element;
export interface ChartTooltipProps { x: number; y: number; title?: string; rows?: Array<{ label: string; value: string | number; color?: string }> }
export declare function ChartTooltip(props: ChartTooltipProps): JSX.Element;
/** The categorical sequence: gold, blue, green, violet, orange, teal, magenta, steel. */
export declare const DATAVIZ: string[];
export declare function seriesColor(i: number): string;
