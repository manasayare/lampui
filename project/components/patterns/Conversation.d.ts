/**
 * @startingPoint section="Communication" subtitle="Operational conversation with agent, tool and system messages" viewport="560x420"
 */
export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** agent = hexagonal avatar · user = round · system and tool = quiet, smaller type */
  role?: 'agent' | 'user' | 'system' | 'tool' | 'decision';
  author?: string;
  timestamp?: string;
  /** Delivery or execution state, e.g. "Delivered", "Waiting". */
  status?: string;
}
export declare const Message: React.ForwardRefExoticComponent<MessageProps & React.RefAttributes<HTMLDivElement>>;
export declare const MessageList: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export interface ComposerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  onSend?: () => void;
  onAttach?: () => void;
  onVoice?: () => void;
  /** Structured replies offered to the human — keep to 2–4 short options. */
  quickReplies?: Array<string | { label: string; onSelect?: () => void }>;
  disabled?: boolean;
}
export declare const Composer: React.ForwardRefExoticComponent<ComposerProps & React.RefAttributes<HTMLDivElement>>;
export interface ConversationProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  /** Context line — the Playbook or run the thread belongs to. */
  subtitle?: string;
  actions?: React.ReactNode;
  /** Message elements. */
  messages?: React.ReactNode;
  /** A Composer element. */
  composer?: React.ReactNode;
}
export declare const Conversation: React.ForwardRefExoticComponent<ConversationProps & React.RefAttributes<HTMLDivElement>>;
