export type FactType = 'explicitFact' | 'observedPattern' | 'inferredPattern' | 'policy' | 'preference' | 'exception' | 'assumption' | 'historicalEvent' | 'relationship' | 'decision' | 'rule' | 'temporaryContext' | 'workingMemory';
export type MemoryScopeKey = 'agent' | 'playbook' | 'genie' | 'lamp';
/**
 * @startingPoint section="Memory" subtitle="Fact types, memory scopes and confidence" viewport="700x200"
 */
export interface MemoryBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: FactType;
  label?: string;
  micro?: boolean;
}
export declare function MemoryBadge(props: MemoryBadgeProps): JSX.Element;
export interface MemoryScopeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Bar height encodes breadth: Agent < Playbook < Genie < LAMP. */
  scope?: MemoryScopeKey;
  /** Spell out the full scope name. */
  full?: boolean;
}
export declare function MemoryScope(props: MemoryScopeProps): JSX.Element;
export interface MemoryConfidenceProps extends React.HTMLAttributes<HTMLSpanElement> {
  level?: 'low' | 'medium' | 'high' | 'veryHigh';
  /** Exact percentage — technical surfaces only. */
  value?: number;
  /** Show the percentage instead of the word. Inspector and run surfaces only. */
  showValue?: boolean;
}
export declare function MemoryConfidence(props: MemoryConfidenceProps): JSX.Element;
export declare const FACT_TYPES: Record<FactType, { label: string; glyph: string; tone: string }>;
export declare const MEMORY_SCOPES: Record<MemoryScopeKey, { label: string; short: string }>;
