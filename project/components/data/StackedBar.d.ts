export interface StackedBarSegment {
  /** Stable key; also selects a default colour in ContextBreakdown. */
  key?: string;
  label: string;
  value: number;
  /** Overrides the categorical sequence colour. */
  color?: string;
  /** Renders at 45% — for a segment that is present but not the point. */
  muted?: boolean;
}

/**
 * @startingPoint section="Data" subtitle="One-row composition bar with optional legend" viewport="700x120"
 */
export interface StackedBarProps extends React.HTMLAttributes<HTMLDivElement> {
  segments: StackedBarSegment[];
  /** Defaults to the sum of segment values. Set it to show headroom. */
  total?: number;
  /** Appended to the total in the legend — "tokens", "runs". */
  unit?: string;
  /** Bar height. 8 default, 6 in a table cell, 12 when it is the subject. */
  height?: number;
  legend?: boolean;
  /** Prints each value inside its segment where the segment is wide enough. */
  inlineValues?: boolean;
  showTotal?: boolean;
  /** Minimum share of the total before a segment gets an inline value. Default 0.08. */
  minLabel?: number;
  format?: (value: number) => string;
  label?: string;
}
export declare function StackedBar(props: StackedBarProps): JSX.Element;
