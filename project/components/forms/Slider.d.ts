export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (v: number) => void;
  /** Value formatter, e.g. v => v + '%'. */
  format?: (v: number) => string;
  showValue?: boolean;
}
export declare function Slider(props: SliderProps): JSX.Element;
