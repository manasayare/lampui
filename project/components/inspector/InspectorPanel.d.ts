/**
 * @startingPoint section="Layout" subtitle="Contextual inspector for the current selection" viewport="400x640"
 */
export interface InspectorPanelProps extends React.HTMLAttributes<HTMLElement> {
  /** The selected object's name. */
  title?: string;
  /** Its path or role — "Finance Genie / Vendor payment". */
  subtitle?: string;
  /** Material Symbol for the object kind. */
  glyph?: string;
  /** StatusBadge / EnvironmentPill row under the title. */
  badges?: React.ReactNode;
  actions?: React.ReactNode;
  /** A Tabs element rendered directly under the header. */
  tabs?: React.ReactNode;
  /** Sticky action row — Save, Simulate, Go live. */
  footer?: React.ReactNode;
  stickyFooter?: boolean;
  onClose?: () => void;
}
export declare const InspectorPanel: React.ForwardRefExoticComponent<InspectorPanelProps & React.RefAttributes<HTMLElement>>;

export interface InspectorHeaderProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  glyph?: string;
  badges?: React.ReactNode;
  actions?: React.ReactNode;
  onClose?: () => void;
}
export declare const InspectorHeader: React.ForwardRefExoticComponent<InspectorHeaderProps & React.RefAttributes<HTMLElement>>;

export interface InspectorTabsProps {
  /** The object's own facets — Purpose, Skills, Tools, Memory, Runtime. Never app navigation. */
  tabs: Array<string | { id: string; label: string; icon?: string; count?: number; disabled?: boolean }>;
  value?: string;
  onChange?: (id: string) => void;
}
export declare const InspectorTabs: React.ForwardRefExoticComponent<InspectorTabsProps & React.RefAttributes<HTMLDivElement>>;

export interface InspectorFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Sticky by default — commit actions stay reachable however long the body runs. */
  sticky?: boolean;
  /** split pushes the first child left and the rest right. */
  align?: 'end' | 'start' | 'split';
  children?: React.ReactNode;
}
export declare const InspectorFooter: React.ForwardRefExoticComponent<InspectorFooterProps & React.RefAttributes<HTMLElement>>;
