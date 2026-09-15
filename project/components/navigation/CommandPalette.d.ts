export interface CommandItemDef {
  id: string;
  label: string;
  icon?: string;
  /** Where the object lives — "Finance Genie / Vendor payment". */
  context?: string;
  shortcut?: string[];
  /** Safety commands (Pause, Emergency stop) render in danger colour. */
  danger?: boolean;
}
export interface CommandGroupDef { label: string; items: CommandItemDef[] }
export interface CommandPaletteProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  query?: string;
  onQueryChange?: (q: string) => void;
  /** Recent, Create, Navigate, Run, Safety — in that order. */
  groups?: CommandGroupDef[];
  activeId?: string;
  onSelect?: (item: CommandItemDef) => void;
  onClose?: () => void;
  placeholder?: string;
  footer?: React.ReactNode;
}
export declare function CommandPalette(props: CommandPaletteProps): JSX.Element;
