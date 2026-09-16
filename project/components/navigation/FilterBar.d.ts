export interface FilterBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Filter controls — Select, SegmentedControl, Tag chips. */
  children?: React.ReactNode;
  /** Shows a "Clear n" action when above zero. */
  activeCount?: number;
  onClear?: () => void;
  /** Right cluster — density switch, view switch, export. */
  right?: React.ReactNode;
}
export declare const FilterBar: React.ForwardRefExoticComponent<FilterBarProps & React.RefAttributes<HTMLDivElement>>;
export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  page?: number;
  pageCount?: number;
  /** Mono range label, e.g. "1–50 of 12,480". */
  range?: string;
  onPage?: (page: number) => void;
}
export declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;
