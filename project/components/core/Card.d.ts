export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ignored when header/title/footer are present (those bring their own padding). */
  padding?: 'none' | 'sm' | 'md';
  raised?: boolean;
  interactive?: boolean;
  selected?: boolean;
  tone?: 'default' | 'danger';
  title?: string;
  header?: React.ReactNode;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
