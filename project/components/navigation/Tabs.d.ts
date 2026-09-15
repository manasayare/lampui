export interface TabDef { id: string; label: string; icon?: string; count?: number; disabled?: boolean }
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: Array<string | TabDef>;
  value?: string;
  onChange?: (id: string) => void;
  /** underline = section tabs · pill = compact inline switch */
  variant?: 'underline' | 'pill';
}
export declare function Tabs(props: TabsProps): JSX.Element;
