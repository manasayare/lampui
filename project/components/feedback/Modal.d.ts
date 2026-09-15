/**
 * @startingPoint section="Overlays" subtitle="Modal, critical confirmation, drawer, popover" viewport="700x420"
 */
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  subtitle?: string;
  glyph?: string;
  /** sm 400 · md 560 · lg 720 */
  size?: 'sm' | 'md' | 'lg';
  /** Red border + alertdialog semantics. */
  critical?: boolean;
  footer?: React.ReactNode;
  onClose?: () => void;
}
export declare function Modal(props: ModalProps): JSX.Element;
export interface CriticalConfirmationProps extends Omit<ModalProps, 'critical' | 'size'> {
  /** What is affected, in one sentence. */
  scope?: string;
  /** Present-tense consequences, lower case. */
  consequences?: string[];
  confirmLabel?: string;
  cancelLabel?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}
export declare function CriticalConfirmation(props: CriticalConfirmationProps): JSX.Element;
export interface DrawerProps extends React.HTMLAttributes<HTMLElement> {
  open?: boolean;
  title?: string;
  side?: 'left' | 'right';
  width?: number | string;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
}
export declare function Drawer(props: DrawerProps): JSX.Element;
export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  x?: number;
  y?: number;
}
export declare function Popover(props: PopoverProps): JSX.Element;
