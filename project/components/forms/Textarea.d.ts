export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  mono?: boolean;
  state?: 'default' | 'error' | 'warning' | 'success';
}
export declare function Textarea(props: TextareaProps): JSX.Element;
