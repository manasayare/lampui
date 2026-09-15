/**
 * @startingPoint section="Safety" subtitle="Emergency stop with scope, consequences and acknowledgement" viewport="560x340"
 */
export interface KillSwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  /** What gets stopped — "Finance Genie", "this LAMP". Always explicit. */
  scope?: string;
  /** Overrides the standard three consequences. Present tense, lower case. */
  consequences?: string[];
  /** Active run count — states plainly that completed steps are not reversed. */
  activeRuns?: number;
  requireAcknowledge?: boolean;
  confirmLabel?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}
export declare function KillSwitch(props: KillSwitchProps): JSX.Element;
export interface SafetyControlsProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: 'live' | 'paused';
  onPause?: () => void;
  onSafeStop?: () => void;
  onEmergency?: () => void;
  onResume?: () => void;
}
export declare function SafetyControls(props: SafetyControlsProps): JSX.Element;
