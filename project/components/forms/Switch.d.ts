export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** brand = gold track; reserve for switches that arm runtime behaviour. */
  tone?: 'default' | 'brand';
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
