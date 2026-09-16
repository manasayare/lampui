import React from 'react';
import { Button } from '../core/Button.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { Icon } from '../core/Icon.jsx';
import { Divider } from '../core/Divider.jsx';

export const SimulationBar = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function SimulationBar({ mode = 'simulation', state = 'idle', progress = 0, step, stepCount, scenario, elapsed, cost, onRun, onPause, onStop, onStepForward, onReplay, onScenario, right, className = '', ...rest }, ref) {
  const running = state === 'running';
  return (
    <div ref={ref} className={'lamp-simbar ' + className} role="toolbar" aria-label={mode === 'live' ? 'Live controls' : 'Simulation controls'} {...rest}>
      {running
        ? <Button size="sm" variant="secondary" icon="pause" onClick={onPause}>Pause</Button>
        : <Button size="sm" variant={mode === 'live' ? 'brand' : 'primary'} icon="play_arrow" onClick={onRun}>{state === 'paused' ? 'Resume' : mode === 'live' ? 'Start run' : 'Run simulation'}</Button>}
      <IconButton icon="skip_next" label="Step forward" size="md" onClick={onStepForward} disabled={running} />
      <IconButton icon="stop_circle" label="Stop" size="md" onClick={onStop} disabled={state === 'idle'} />
      <Divider orientation="vertical" />
      {scenario ? (
        <button type="button" onClick={onScenario} style={{ display: 'flex', alignItems: 'center', gap: 6, height: 24, padding: '0 6px', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', background: 'var(--surface-primary)', font: '500 12px var(--font-sans)', color: 'var(--text-primary)', cursor: 'pointer' }}>
          <Icon name="dataset" size={13} />{scenario}
        </button>
      ) : null}
      <span className="lamp-simbar__progress"><span className={'lamp-simbar__fill' + (mode === 'live' ? ' lamp-simbar__fill--live' : '')} style={{ width: Math.round(progress * 100) + '%' }} /></span>
      <span className="lamp-simbar__meta">
        {stepCount ? <span>Step {step}/{stepCount}</span> : null}
        {elapsed ? <span>{elapsed}</span> : null}
        {cost ? <span>{cost}</span> : null}
      </span>
      {onReplay ? <IconButton icon="replay" label="Replay run" size="md" onClick={onReplay} /> : null}
      {right}
    </div>
  );
}), { displayName: 'SimulationBar' });
