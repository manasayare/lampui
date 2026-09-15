export interface ChatQuickReply {
  label: string;
  icon?: string;
  /** primary for the expected answer, danger for a rejection. */
  tone?: 'default' | 'primary' | 'danger';
  onSelect?: () => void;
}
/**
 * @startingPoint section="Chat" subtitle="Composer with scope, quick replies, voice and attachments" viewport="700x200"
 */
export interface ChatComposerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  onChange?: (v: string) => void;
  onSend?: (v: string) => void;
  onAttach?: () => void;
  onVoice?: () => void;
  onSlash?: () => void;
  placeholder?: string;
  /** Who you are talking to — always visible, so the user is never guessing. */
  scope?: string;
  scopeGlyph?: string;
  /** 2–4 short answers. Structured replies beat free text for decisions. */
  quickReplies?: Array<string | ChatQuickReply>;
  disabled?: boolean;
  sending?: boolean;
  /** Show the Enter / Shift+Enter hint. Default true. */
  hint?: boolean;
}
export declare function ChatComposer(props: ChatComposerProps): JSX.Element;
export declare function ChatQuickReplies(props: { options: Array<string | ChatQuickReply>; onSelect?: (o: ChatQuickReply) => void }): JSX.Element;
