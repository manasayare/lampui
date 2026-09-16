export interface MenuItemDef { id: string; label: string; icon?: string; shortcut?: string; danger?: boolean; disabled?: boolean }
export interface CanvasContextMenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  x?: number;
  y?: number;
  /** Grouped items; destructive actions last and in the danger colour. */
  groups?: Array<{ label?: string; items: MenuItemDef[] }>;
  onSelect?: (item: MenuItemDef) => void;
}
export declare const CanvasContextMenu: React.ForwardRefExoticComponent<CanvasContextMenuProps & React.RefAttributes<HTMLDivElement>>;
