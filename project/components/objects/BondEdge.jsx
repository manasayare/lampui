import React from 'react';
import { AGENT_SIZES } from './AgentHex.jsx';

/* Distance from a flat-top hexagon's centre to its boundary along `angle`.
   A hexagon is not a circle: that distance runs from the apothem (h/2, toward a
   flat side) out to the circumradius (w/2, toward a point), and a bond trimmed
   by a single radius is visibly short in one direction and visibly buried in the
   other. Edge normals sit at 30° + k·60° for a flat-top hexagon, so the reach in
   any direction is the apothem over the cosine of the angle to the nearest one. */
function hexReach(w, h, angle) {
  const sixty = Math.PI / 3;
  const thirty = Math.PI / 6;
  let rel = ((angle - thirty) % sixty + sixty) % sixty;
  if (rel > thirty) rel -= sixty;
  const apothem = h / 2;
  /* Clamped to the circumradius: floating-point angles near a vertex can push
     the cosine far enough toward zero to send the reach to infinity. */
  return Math.min(apothem / Math.cos(rel), w / 2);
}

const BOND_STROKE = {
  valid: 'var(--bond-edge-confirmed)',
  incomplete: 'var(--bond-edge)',
  conflicting: 'var(--bond-edge-conflict)',
  requiresConfig: 'var(--status-warning)',
  learned: 'var(--bond-edge-suggested)',
  suggested: 'var(--bond-edge-suggested)',
  manual: 'var(--bond-edge-confirmed)',
  locked: 'var(--bond-edge-locked)',
  preview: 'var(--gold-400)',
};

/* One bond between two lattice slots. Render inside an SVG overlay sized to the lattice.
   A bond means membership and composition — never a data wire, never a port connector. */
export const BondEdge = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function BondEdge({ from, to, size = 'md', state = 'valid', energy = false, environment = 'draft', junction = true, className = '', ...rest }, ref) {
  const stroke = BOND_STROKE[state] || BOND_STROKE.valid;
  const dashed = state === 'suggested' || state === 'learned' || state === 'preview' || state === 'incomplete';
  const mid = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 };

  /* Where the line starts and ends, which depends entirely on whether the two
     Agents are touching.

     Touching (gap 0–2), a centre-to-centre line would run under both fills, so
     the bond is a short seam marker straddling the shared edge. Spaced apart, it
     is a real connector and has to reach from one hexagon's boundary to the
     other's — trimmed by each hexagon's reach along the line, plus a small gap
     so the stroke does not touch the outline.

     Drawing the seam marker at every gap is what leaves a bond hanging in open
     space between two distant Agents, attached to neither. */
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const span = Math.hypot(dx, dy) || 1;
  const angle = Math.atan2(dy, dx);
  const [hw, hh] = AGENT_SIZES[size] || AGENT_SIZES.md;
  const PAD = 3;
  const reachFrom = hexReach(hw, hh, angle) + PAD;
  const reachTo = hexReach(hw, hh, angle + Math.PI) + PAD;

  let a;
  let b;
  if (span - reachFrom - reachTo < 6) {
    const t = 0.34;
    a = { x: from.x + dx * t, y: from.y + dy * t };
    b = { x: to.x - dx * t, y: to.y - dy * t };
  } else {
    a = { x: from.x + (dx / span) * reachFrom, y: from.y + (dy / span) * reachFrom };
    b = { x: to.x - (dx / span) * reachTo, y: to.y - (dy / span) * reachTo };
  }
  const spark = environment === 'simulation' ? 'var(--simulation-energy)' : 'var(--energy-bright)';
  return (
    <g ref={ref} className={['lamp-bond', energy && 'lamp-bond--energy', className].filter(Boolean).join(' ')} {...rest}>
      <line className="lamp-bond__line" x1={a.x} y1={a.y} x2={b.x} y2={b.y}
        stroke={stroke} strokeWidth={state === 'preview' ? 2 : 2.5} strokeLinecap="round"
        strokeDasharray={dashed ? '3 3' : undefined} opacity={state === 'preview' ? 0.85 : 1} />
      {junction ? <circle cx={mid.x} cy={mid.y} r={3.5} fill={stroke} stroke="var(--surface-primary)" strokeWidth={1} /> : null}
      {state === 'locked' ? <circle cx={mid.x} cy={mid.y} r={5} fill="none" stroke={stroke} strokeWidth={1} /> : null}
      {energy ? <circle className="lamp-bond__spark" r={2.5} fill={spark} style={{ offsetPath: 'path("M' + a.x + ',' + a.y + ' L' + b.x + ',' + b.y + '")' }} /> : null}
    </g>
  );
}), { displayName: 'BondEdge' });

/* Overlay host: an absolutely-positioned SVG matching the lattice box. */
export const BondLayer = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function BondLayer({ width, height, children, ...rest }, ref) {
  return (
    <svg ref={ref} width={width} height={height} style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible', pointerEvents: 'none', zIndex: 2 }} aria-hidden="true" {...rest}>
      {children}
    </svg>
  );
}), { displayName: 'BondLayer' });
