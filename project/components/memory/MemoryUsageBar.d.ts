/**
 * @startingPoint section="Memory" subtitle="Context breakdown by memory scope" viewport="700x240"
 */
export interface MemoryUsageSegment {
  label: string;
  value: number;
  /** Scope key that picks the standard colour: agent, playbook, genie, lamp, evidence, prompt, completion, cached, tool. */
  key?: string;
  color?: string;
}
export interface MemoryUsageBarProps extends React.HTMLAttributes<HTMLDivElement> {
  segments: MemoryUsageSegment[];
  /** Defaults to the sum of the segments. */
  total?: number;
  unit?: string;
  legend?: boolean;
}
export declare const MemoryUsageBar: React.ForwardRefExoticComponent<MemoryUsageBarProps & React.RefAttributes<HTMLDivElement>>;
