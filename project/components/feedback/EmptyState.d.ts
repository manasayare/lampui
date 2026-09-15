/**
 * @startingPoint section="Feedback" subtitle="Restrained empty states — icon, statement, one action" viewport="700x220"
 */
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small Material Symbol. Never an illustration. */
  glyph?: string;
  /** One flat sentence — what is not here. */
  title?: string;
  /** One sentence of orientation. Optional. */
  description?: string;
  /** A single primary next action. */
  action?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  align?: 'center' | 'left';
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
