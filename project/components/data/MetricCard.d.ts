/**
 * @startingPoint section="Data" subtitle="Metric cards with delta and sparkline" viewport="700x180"
 */
export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase micro label. */
  label: string;
  /** Tabular figure — pre-formatted, including currency. */
  value: React.ReactNode;
  unit?: string;
  /** Signed change, e.g. "+12%" or "-3.2s". Direction is inferred from the sign. */
  delta?: string;
  /** The arrow direction. Inferred from the sign of `delta` when omitted. */
  deltaDirection?: 'up' | 'down' | 'flat';
  /** Whether the change is good news — colours the delta independently of the arrow.
   *  Falling cost or latency is `positive` even though the arrow points down. */
  deltaTone?: 'positive' | 'negative' | 'flat';
  /** Comparison basis, e.g. "vs last 7 days". */
  deltaLabel?: string;
  /** lg = 28px metric · sm = 18px, for inspector rows. */
  size?: 'lg' | 'sm';
  /** Drops border and padding for embedding in a grid. */
  flush?: boolean;
  glyph?: string;
  footnote?: string;
  /** A Sparkline element. */
  spark?: React.ReactNode;
  actions?: React.ReactNode;
}
export declare function MetricCard(props: MetricCardProps): JSX.Element;
