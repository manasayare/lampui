export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** brand = gold track; reserve for switches that arm runtime behaviour. */
  tone?: 'default' | 'brand';
}
export declare function Switch(props: SwitchProps): JSX.Element;
