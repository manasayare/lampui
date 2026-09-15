export interface BreadcrumbItem { label: string; icon?: string; id?: string }
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Business / LAMP / Genie / Playbook / Agent — in that order. */
  items: BreadcrumbItem[];
  /** Collapses the middle into an overflow item beyond this count. Default 5. */
  maxVisible?: number;
  onNavigate?: (item: BreadcrumbItem, index: number) => void;
}
export declare const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>>;
