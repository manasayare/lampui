/**
 * @startingPoint section="Layout" subtitle="Builder shell — header, structure rail, canvas, inspector dock, status bar" viewport="1280x800"
 */
export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** GlobalHeader. 48px, fixed. */
  header?: React.ReactNode;
  /** Left structure panel (240px) or collapsed rail (48px). */
  rail?: React.ReactNode;
  /** Right inspector dock. */
  dock?: React.ReactNode;
  /** 40px bottom toolbar for canvas/runtime controls. */
  bottom?: React.ReactNode;
  /** 28px StatusBar. */
  statusBar?: React.ReactNode;
  dockWidth?: number | string;
  /** The dominant centre region — usually CanvasSurface. */
  children?: React.ReactNode;
}
export declare function AppShell(props: AppShellProps): JSX.Element;
