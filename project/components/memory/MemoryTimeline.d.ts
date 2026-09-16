/**
 * @startingPoint section="Memory" subtitle="History of a fact, run, version or audit trail" viewport="700x260"
 */
export interface TimelineEntry {
  title: React.ReactNode;
  detail?: React.ReactNode;
  /** Who or what caused it — a person, an Agent, "LAMP". */
  actor?: string;
  timestamp?: string;
  /** Memory-accent dot. */
  accent?: boolean;
  /** Gold dot with a glow — the current point in time. */
  current?: boolean;
}
export interface MemoryTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TimelineEntry[];
}
export declare const MemoryTimeline: React.ForwardRefExoticComponent<MemoryTimelineProps & React.RefAttributes<HTMLDivElement>>;
