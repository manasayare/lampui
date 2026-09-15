/**
 * @startingPoint section="Feedback" subtitle="Inline notifications, banners and toasts" viewport="700x300"
 */
export interface InlineNotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'critical';
  title?: string;
  /** Actions live inside the notification, never floating beside it. */
  actions?: React.ReactNode;
  /** Full-width, square corners — page or app level. */
  banner?: boolean;
  onDismiss?: () => void;
  children?: React.ReactNode;
}
export declare const InlineNotification: React.ForwardRefExoticComponent<InlineNotificationProps & React.RefAttributes<HTMLDivElement>>;
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  /** Usually an Undo button. */
  action?: React.ReactNode;
  onDismiss?: () => void;
}
export declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLDivElement>>;
export declare const ToastStack: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
