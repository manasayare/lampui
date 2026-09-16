export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (v: number) => void;
  /** Value formatter, e.g. v => v + '%'. */
  format?: (v: number) => string;
  showValue?: boolean;
}
export declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLInputElement>>;
