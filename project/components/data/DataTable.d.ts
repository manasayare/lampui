export interface DataColumn<T = any> {
  key: string;
  header: React.ReactNode;
  /** Right-align numbers. */
  align?: 'left' | 'right';
  /** Geist Mono + tabular numerals — IDs, durations, costs, token counts. */
  mono?: boolean;
  sortable?: boolean;
  /** Sticky first column. */
  pinned?: boolean;
  width?: number | string;
  render?: (row: T) => React.ReactNode;
}
/**
 * @startingPoint section="Tables" subtitle="Compact enterprise table — runs, agents, memory, audit" viewport="900x420"
 */
export interface DataTableProps<T = any> extends React.HTMLAttributes<HTMLDivElement> {
  columns: DataColumn<T>[];
  rows: T[];
  /** compact 32 · default 40 · comfortable 48 */
  density?: 'compact' | 'default' | 'comfortable';
  /** technical renders every cell in mono — logs, traces, payload tables. */
  variant?: 'standard' | 'technical' | 'audit';
  sort?: { key: string; dir: 'asc' | 'desc' };
  onSort?: (key: string) => void;
  selectable?: boolean;
  /** Selected row keys. */
  selected?: Array<string | number>;
  onSelect?: (key: string | number, next: boolean) => void;
  onSelectAll?: (next: boolean) => void;
  onRowClick?: (row: T) => void;
  rowKey?: (row: T, index: number) => string | number;
  /** FilterBar / SearchInput / view controls. */
  toolbar?: React.ReactNode;
  /** Actions shown while rows are selected. */
  bulkActions?: React.ReactNode;
  /** Totals row cells. */
  footerRow?: React.ReactNode;
  state?: 'ready' | 'loading' | 'empty';
  emptyState?: React.ReactNode;
}
export declare function DataTable<T>(props: DataTableProps<T>): JSX.Element;
