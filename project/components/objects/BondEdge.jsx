import React from 'react';

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
export const BondEdge = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function BondEdge({ from, to, state = 'valid', energy = false, environment = 'draft', junction = true, className = '', ...rest }, ref) {
  const stroke = BOND_STROKE[state] || BOND_STROKE.valid;
  const dashed = state === 'suggested' || state === 'learned' || state === 'preview' || state === 'incomplete';
  const mid = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 };
  // Agents touch edge-to-edge, so a centre-to-centre line would sit under their fills.
  // The bond is drawn as a short seam marker straddling the shared edge instead.
  const t = 0.34;
  const a = { x: from.x + (to.x - from.x) * t, y: from.y + (to.y - from.y) * t };
  const b = { x: to.x + (from.x - to.x) * t, y: to.y + (from.y - to.y) * t };
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
