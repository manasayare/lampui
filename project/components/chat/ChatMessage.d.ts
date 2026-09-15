export interface ChatActivityItem {
  /** tool = square chip · memory = violet pill · skill = round · human = checkpoint */
  kind?: 'tool' | 'memory' | 'skill' | 'human' | 'event';
  label: string;
  /** Material Symbol override. */
  glyph?: string;
  /** Mono duration, e.g. "1.2s". */
  duration?: string;
  state?: 'done' | 'running' | 'failed';
  /** Tooltip detail — the observable call, not reasoning. */
  detail?: string;
}
export interface ChatCitationRef {
  index?: number;
  /** Where the claim came from — "SAP · PO-9921", "Genie memory". */
  source?: string;
  scope?: string;
  onClick?: () => void;
}
/**
 * @startingPoint section="Chat" subtitle="Agent, user, tool and system messages with visible work" viewport="700x340"
 */
export interface ChatMessageProps extends React.HTMLAttributes<HTMLElement> {
  /** agent = hexagonal avatar · user = round · tool = mono, quiet · system = quiet */
  role?: 'agent' | 'user' | 'tool' | 'system';
  author?: string;
  /** Uppercase micro role — "Specialist", "Human-supervised". */
  roleLabel?: string;
  initials?: string;
  glyph?: string;
  timestamp?: string;
  /** Hides avatar and meta for consecutive messages from the same author. */
  grouped?: boolean;
  /** acting = gold rail + tinted row while the Agent is working. */
  state?: 'idle' | 'acting' | 'failed';
  /** Delivery state: "sending" | "Delivered" | "failed". */
  status?: string;
  /** Gold caret while text is still arriving. No fake typing animation. */
  streaming?: boolean;
  /** Tool calls, memory reads and checkpoints shown above the text. */
  activity?: ChatActivityItem[];
  /** Evidence pills appended to the message. */
  citations?: ChatCitationRef[];
  /** Inline card — ApprovalCard, MemoryFact, CodeFrame, Viz. */
  attachment?: React.ReactNode;
  /** Hover actions. Default true. */
  actions?: boolean;
  onRetry?: () => void;
  onCopy?: () => void;
  onInspect?: () => void;
}
export declare function ChatMessage(props: ChatMessageProps): JSX.Element;
export declare function ChatAvatar(props: { role?: string; initials?: string; glyph?: string; state?: string; size?: number }): JSX.Element;
export declare function ChatActivity(props: { items: ChatActivityItem[]; max?: number; onSelect?: (a: ChatActivityItem) => void }): JSX.Element;
export declare function ChatCitation(props: ChatCitationRef & { index: number }): JSX.Element;
export declare function ChatDayDivider(props: { label: string }): JSX.Element;
