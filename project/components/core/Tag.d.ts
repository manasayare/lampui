export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: string | React.ReactNode;
  /** Mono variant for IDs, variables, versions. */
  mono?: boolean;
  onRemove?: () => void;
  children?: React.ReactNode;
}
export declare const Tag: React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLSpanElement>>;
