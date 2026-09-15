export interface ProcessStep {
  name: string;
  /** agent = an Agent does it · human = a person decides · tool · decision */
  kind: 'agent' | 'human' | 'tool' | 'decision';
}

export interface ProcessConnector {
  /** The system category — "ERP", "CRM", "Helpdesk". Never a single vendor. */
  category: string;
  /** Candidate providers, as Simple Icons slugs. */
  providers: string[];
  permission: 'Read' | 'Write' | 'Admin';
  /** Why this process needs it. Shown beside the access grant. */
  why: string;
}

export interface ProcessOutcome {
  /** What good looks like, as a statement. */
  label: string;
  /** How you would know. */
  measure: string;
  /** The number to beat, where there is one. */
  target?: string;
}

export interface ProcessCheckpoint {
  name: string;
  /** When a person must decide. */
  when: string;
}

export interface BusinessProcessDef {
  id: string;
  name: string;
  domain: string;
  /** Other names the same process goes by. */
  aka?: string[];
  purpose: string;
  trigger: string;
  steps: ProcessStep[];
  /** Agent archetypes this process usually needs. Drives role matching. */
  roles: string[];
  connectors: ProcessConnector[];
  outcomes: ProcessOutcome[];
  checkpoints: ProcessCheckpoint[];
  exceptions: string[];
  /** Words that indicate this process. Matched against Agent names, roles, Skills and Tools. */
  signals: string[];
}

/** The standard process library — eight processes present in essentially every business. */
export declare const BUSINESS_PROCESSES: BusinessProcessDef[];

/** "Something else" — the blank slate, offered alongside every match. */
export declare const BLANK_PROCESS: BusinessProcessDef;

export interface ProcessMatch {
  process: BusinessProcessDef;
  score: number;
  /** Signals that fired. */
  hits: string[];
  /** Roles from the process that look present in the selection. */
  roleHits: string[];
  /** roleHits / roles. */
  coverage: number;
  confidence: 'low' | 'medium' | 'high';
  /** Human-readable reasons, for showing beneath the proposal. */
  evidence: string[];
}

/** Rank the library against a selection. Returns only processes that scored above zero. */
export declare function MatchProcess(context: {
  agents?: Array<{ name?: string; role?: string; skills?: string[]; tools?: string[] }>;
  tools?: Array<string | { name?: string; provider?: string }>;
  notes?: string;
}): ProcessMatch[];

export interface ProcessProposalProps extends React.HTMLAttributes<HTMLElement> {
  match: ProcessMatch;
  selected?: boolean;
  /** The lead proposal — carries the violet inference tint. Runners-up are plain cards. */
  primary?: boolean;
  onUse?: (process: BusinessProcessDef) => void;
  onReview?: (process: BusinessProcessDef) => void;
  onDismiss?: (process: BusinessProcessDef) => void;
  /** Drops the evidence list and the gap note. For a sidebar or a list. */
  compact?: boolean;
}
export declare function ProcessProposal(props: ProcessProposalProps): JSX.Element;
