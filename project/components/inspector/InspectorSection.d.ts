export interface InspectorSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Uppercase micro label — Purpose, Skills, Tools, Memory, Authority, Guardrails, Runtime. */
  label: string;
  /** Mono count beside the label. */
  count?: number | string;
  actions?: React.ReactNode;
  collapsible?: boolean;
  defaultOpen?: boolean;
  /** Dims the label and starts collapsed — progressive disclosure for advanced config. */
  advanced?: boolean;
}
export declare function InspectorSection(props: InspectorSectionProps): JSX.Element;
export interface PropertyRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value?: React.ReactNode;
  /** Geist Mono for IDs, durations, token counts. */
  mono?: boolean;
  /** Label above the value instead of beside it. */
  stack?: boolean;
  /** Marks a value inherited from a parent scope. */
  inherited?: boolean;
  /** Placeholder when the value is empty. Default "Not set". */
  empty?: string;
  children?: React.ReactNode;
}
export declare function PropertyRow(props: PropertyRowProps): JSX.Element;
