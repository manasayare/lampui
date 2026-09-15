/**
 * @startingPoint section="Memory" subtitle="The four memory scopes as a filter or read-out" viewport="700x120"
 */
export interface MemoryScopeBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Selected scope. Clicking the active one clears it (onChange fires undefined). */
  value?: 'agent' | 'playbook' | 'genie' | 'lamp';
  /** Fact counts per scope: { agent: 12, genie: 140 }. */
  counts?: Partial<Record<'agent' | 'playbook' | 'genie' | 'lamp', number>>;
  /** The scope this object owns. Everything broader is marked inherited. */
  owned?: 'agent' | 'playbook' | 'genie' | 'lamp';
  /** Explicit inherited scopes, where the relationship is not simply positional. */
  inherited?: Array<'agent' | 'playbook' | 'genie' | 'lamp'>;
  onChange?: (scope?: string) => void;
  /** Static summary rather than a filter — no hover, no click. */
  readOnly?: boolean;
  /** Restrict or reorder the scopes shown. Defaults to all four, narrow to broad. */
  scopes?: Array<'agent' | 'playbook' | 'genie' | 'lamp'>;
  showCounts?: boolean;
  /** Full scope names instead of the short form. */
  full?: boolean;
}
export declare function MemoryScopeBar(props: MemoryScopeBarProps): JSX.Element;
