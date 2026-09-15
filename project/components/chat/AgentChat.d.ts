/**
 * @startingPoint section="Chat" subtitle="LAMP conversation — hexagonal crew, visible work, decisions in the thread" viewport="560x640"
 */
export interface AgentChatProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  /** The Genie, Playbook or run this thread belongs to. */
  scope?: string;
  scopeGlyph?: string;
  /** Environment suffix — "Live", "Simulation". */
  environment?: string;
  /** Agents in the thread, shown as overlapping hexagons. */
  crew?: Array<{ name: string; initials?: string; glyph?: string; role?: string; state?: 'idle' | 'acting' | 'failed' }>;
  actions?: React.ReactNode;
  /** A ChatStatus element. */
  status?: React.ReactNode;
  /** A ChatComposer element. */
  composer?: React.ReactNode;
  flush?: boolean;
  /** Keeps the thread pinned to the newest message. Default true. */
  autoScroll?: boolean;
}
export declare function AgentChat(props: AgentChatProps): JSX.Element;
export interface ChatStatusProps {
  state?: 'idle' | 'working';
  author?: string;
  /** Verb phrase — "is reading SAP", "is waiting for your approval". */
  action?: string;
  detail?: string;
  /** Mono running token count. */
  tokens?: string;
  onStop?: () => void;
  onInspect?: () => void;
}
export declare function ChatStatus(props: ChatStatusProps): JSX.Element;
