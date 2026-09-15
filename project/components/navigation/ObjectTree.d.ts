export interface ObjectTreeNode {
  id: string;
  label: string;
  /** Material Symbol name. */
  icon?: string;
  /** LAMP status key — renders a StatusDot on the right. */
  status?: string;
  meta?: string;
  children?: ObjectTreeNode[];
}
export interface ObjectTreeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  nodes: ObjectTreeNode[];
  selectedId?: string;
  expanded?: Record<string, boolean>;
  onSelect?: (node: ObjectTreeNode) => void;
  onToggle?: (node: ObjectTreeNode) => void;
}
export declare const ObjectTree: React.ForwardRefExoticComponent<ObjectTreeProps & React.RefAttributes<HTMLDivElement>>;
