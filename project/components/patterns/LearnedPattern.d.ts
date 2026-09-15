/**
 * @startingPoint section="Learning" subtitle="What LAMP observed, with evidence and a choice" viewport="700x260"
 */
export interface LearnedPatternProps extends React.HTMLAttributes<HTMLElement> {
  /** observed · inferred · suggested · proposal — sets the kicker. */
  kind?: 'observed' | 'inferred' | 'suggested' | 'proposal';
  /** The observation in the business's own words. Quote it; don't editorialize. */
  observation: React.ReactNode;
  occurrences?: number;
  /** "6 weeks", "the last quarter". */
  period?: string;
  confidence?: 'low' | 'medium' | 'high' | 'veryHigh';
  /** Extra evidence facts — channels, systems, people involved. */
  evidence?: string[];
  /** EntityChips for the people, vendors and systems involved. */
  entities?: React.ReactNode;
  /** Overrides the kicker text. */
  note?: string;
  onUse?: () => void;
  onReview?: () => void;
  onIgnore?: () => void;
  actions?: React.ReactNode;
}
export declare const LearnedPattern: React.ForwardRefExoticComponent<LearnedPatternProps & React.RefAttributes<HTMLElement>>;
