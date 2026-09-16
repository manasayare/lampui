/**
 * @startingPoint section="Memory" subtitle="The four memory scopes as a filter or read-out" viewport="700x120"
 */
export interface MemoryScopeBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
  /** 'list' stacks one scope per row — the default when readOnly, and the only
   *  layout that fits four scopes with counts in a 320px Inspector. 'bar' is the
   *  segmented control, the default for a filter. */
  layout?: 'bar' | 'list';
  /** Full scope names instead of the short form. */
  full?: boolean;
}
export declare const MemoryScopeBar: React.ForwardRefExoticComponent<MemoryScopeBarProps & React.RefAttributes<HTMLDivElement>>;
