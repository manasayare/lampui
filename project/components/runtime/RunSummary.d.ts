/**
 * @startingPoint section="Runtime" subtitle="Technical run overview" viewport="420x520"
 */
export interface RunSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mono, truncated in the middle for long keys. */
  runId?: string;
  status?: string;
  /** Schedule · Webhook · Manual · Message · Tool event */
  trigger?: string;
  started?: string;
  completed?: string;
  duration?: string;
  agents?: number | string;
  toolCalls?: number | string;
  llmCalls?: number | string;
  cacheRate?: string;
  tokens?: string;
  cost?: string;
  interventions?: number | string;
  environment?: string;
  }
export declare function RunSummary(props: RunSummaryProps): JSX.Element;
