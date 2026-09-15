/**
 * @startingPoint section="Lists" subtitle="One row type for every LAMP object list" viewport="700x260"
 */
export interface ObjectRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Picks the glyph and sets the row's semantics. */
  kind?: 'agent' | 'skill' | 'tool' | 'playbook' | 'genie' | 'lamp' | 'memory' | 'run' | 'approval' | 'activity' | 'audit' | 'person' | 'team' | 'customer' | 'vendor' | 'document' | 'policy' | 'process' | 'integration' | 'member';
  /** Override the kind glyph. */
  glyph?: string;
  name: string;
  /** Secondary line — role, purpose, account, context. */
  secondary?: string;
  /** LAMP status key. */
  status?: string;
  statusLabel?: string;
  badges?: React.ReactNode;
  /** Inline metadata string. */
  meta?: string;
  /** Mono timestamp, right-aligned. */
  timestamp?: string;
  actions?: React.ReactNode;
  selected?: boolean;
  /** 32px instead of 40px. */
  compact?: boolean;
}
export declare const ObjectRow: React.ForwardRefExoticComponent<ObjectRowProps & React.RefAttributes<HTMLDivElement>>;
export declare const ObjectList: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
