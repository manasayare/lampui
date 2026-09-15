/**
 * @startingPoint section="Voice" subtitle="Voice capture, waveform and playback states" viewport="700x180"
 */
export interface VoiceButtonProps extends React.HTMLAttributes<HTMLSpanElement> {
  state?: 'idle' | 'recording' | 'processing' | 'speaking' | 'error';
  /** md 48px · lg 64px — lg for low-literacy and mobile surfaces. */
  size?: 'md' | 'lg';
  /** Mono elapsed time while recording. */
  duration?: string;
  /** Amplitude values 0–1 for the waveform. */
  levels?: number[];
  label?: string;
  onPress?: () => void;
  onCancel?: () => void;
  onSend?: () => void;
}
export declare function VoiceButton(props: VoiceButtonProps): JSX.Element;
export declare function VoiceWaveform(props: { levels?: number[]; bars?: number; height?: number }): JSX.Element;
