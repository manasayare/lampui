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
export declare function InspectorPanel(props: InspectorPanelProps): JSX.Element;
