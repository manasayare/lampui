export interface MemoryClaim {
  id?: string | number;
  /** The claim itself, as a sentence. */
  fact: string;
  type?: string;
  scope?: 'agent' | 'playbook' | 'genie' | 'lamp';
  confidence?: 'low' | 'medium' | 'high' | 'veryHigh';
  confidenceValue?: number;
  evidenceCount?: number;
  /** How many times this was observed. */
  occurrences?: number;
  source?: string;
  lastConfirmed?: string;
  /** Overrides "Keep this" on this side's button. */
  pickLabel?: string;
}

/**
 * @startingPoint section="Memory" subtitle="Two memories that cannot both be true" viewport="700x300"
 */
export interface MemoryConflictProps extends React.HTMLAttributes<HTMLElement> {
  /** Usually two. Rendered side by side, stacking below 640px. */
  claims: MemoryClaim[];
  title?: string;
  detail?: string;
  resolved?: boolean;
  /** What was decided. Shown only when `resolved`. */
  resolution?: string;
  /** id (or index) of the claim that was kept. */
  picked?: string | number;
  onPick?: (id: string | number) => void;
  /** Scope both claims rather than picking a winner — the usual resolution when a
   *  narrow scope contradicts a broader one. */
  onKeepBoth?: () => void;
  onInvestigate?: () => void;
  readOnly?: boolean;
  actions?: React.ReactNode;
}
export declare function MemoryConflict(props: MemoryConflictProps): JSX.Element;
