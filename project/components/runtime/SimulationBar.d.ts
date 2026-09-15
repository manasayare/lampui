/**
 * @startingPoint section="Runtime" subtitle="Simulation and live run controls" viewport="700x150"
 */
export interface SimulationBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** simulation = blue progress + graphite primary · live = gold. */
  mode?: 'simulation' | 'live';
  state?: 'idle' | 'running' | 'paused' | 'stopped' | 'complete';
  /** 0–1. */
  progress?: number;
  step?: number;
  stepCount?: number;
  /** Named scenario or dataset driving the run. */
  scenario?: string;
  /** Mono elapsed time, e.g. "00:06.2". */
  elapsed?: string;
  /** Mono run cost so far. */
  cost?: string;
  onRun?: () => void;
  onPause?: () => void;
  onStop?: () => void;
  onStepForward?: () => void;
  onReplay?: () => void;
  onScenario?: () => void;
  right?: React.ReactNode;
}
export declare const SimulationBar: React.ForwardRefExoticComponent<SimulationBarProps & React.RefAttributes<HTMLDivElement>>;
