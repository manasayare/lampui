import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';
import { RunStep } from './RunTimeline.jsx';

/* One step of a simulation run.

   A simulated step is not a live step wearing a different colour. Two things are
   true of simulation and of nothing else, and the component makes both
   unmissable:

     MOCKED    the Tool was never called; the value shown is a stand-in
     BLOCKED   the step would have written externally and simulation stopped it

   Both are stamped as micro uppercase labels rather than a tint, because an
   operator reading a timeline needs to know which numbers are real without
   having learnt a colour code. `divergence` marks a step whose simulated
   outcome differs from the recorded live behaviour it is being compared with —
   the whole point of running the simulation.

   Everything else — chips, durations, token counts — is RunStep, so a
   simulation timeline and a live timeline line up column for column. */

const SIM_NOTE = {
  mocked: { label: 'Mocked', glyph: 'inventory_2', tone: 'neutral' },
  blocked: { label: 'Blocked', glyph: 'block', tone: 'warning' },
  waitingHuman: { label: 'Awaiting approval', glyph: 'how_to_reg', tone: 'waiting' },
  skipped: { label: 'Skipped', glyph: 'remove', tone: 'neutral' },
};

export const SimulationStep = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function SimulationStep({
  state = 'pending', mockedValue, blockedReason, divergence, expected, scenario,
  children, className = '', ...rest
}, ref) {
  const note = SIM_NOTE[state];
  return (
    <RunStep ref={ref}
      state={state}
      className={['lamp-simstep', 'lamp-simstep--' + state, divergence && 'lamp-simstep--diverged', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {note || divergence || scenario ? (
        <span className="lamp-simstep__chips">
          {note ? <Badge tone={note.tone} icon={note.glyph} micro>{note.label}</Badge> : null}
          {scenario ? <Badge outline icon="science" micro>{scenario}</Badge> : null}
          {divergence ? <Badge tone="warning" icon="swap_horiz" micro>Differs from live</Badge> : null}
        </span>
      ) : null}

      {state === 'mocked' && mockedValue ? (
        <span className="lamp-simstep__mock">
          <Icon name="inventory_2" size={12} />
          <span>Stand-in value: <b>{mockedValue}</b></span>
        </span>
      ) : null}

      {state === 'blocked' && blockedReason ? (
        <span className="lamp-simstep__blocked">
          <Icon name="block" size={12} />
          <span>{blockedReason}</span>
        </span>
      ) : null}

      {divergence && expected ? (
        <span className="lamp-simstep__diverge">
          <span className="lamp-simstep__diverge-row"><span>Live</span><b>{expected}</b></span>
          <span className="lamp-simstep__diverge-row"><span>Simulated</span><b>{divergence}</b></span>
        </span>
      ) : null}

      {children}
    </RunStep>
  );
}), { displayName: 'SimulationStep' });
