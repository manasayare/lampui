import React from 'react';
import { AGENT_SIZES } from './AgentHex.jsx';

/* Honeycomb layout for flat-top hexagons. Column step = 0.75w; odd columns drop half a row. */
export const HexLattice = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function HexLattice({ size = 'md', gap = 2, cells = [], overlay, className = '', style, ...rest }, ref) {
  const [w, h] = AGENT_SIZES[size] || AGENT_SIZES.md;
  const stepX = w * 0.75 + gap;
  const stepY = h + gap;
  let maxX = 0, maxY = 0;
  const placed = cells.map((c, i) => {
    const x = c.col * stepX;
    const y = c.row * stepY + (Math.abs(c.col % 2) ? stepY / 2 : 0);
    if (x + w > maxX) maxX = x + w;
    if (y + h > maxY) maxY = y + h;
    return { key: c.key == null ? i : c.key, x, y, node: c.node };
  });
  return (
    <div ref={ref} className={'lamp-lattice ' + className} style={{ width: maxX, height: maxY, ...style }} {...rest}>
      {overlay}
      {placed.map((p) => (
        <div key={p.key} className="lamp-lattice__cell" style={{ left: p.x, top: p.y, width: w, height: h }}>{p.node}</div>
      ))}
    </div>
  );
}), { displayName: 'HexLattice' });

export function hexCenter(col, row, size = 'md', gap = 2) {
  const [w, h] = AGENT_SIZES[size] || AGENT_SIZES.md;
  const stepX = w * 0.75 + gap;
  const stepY = h + gap;
  return { x: col * stepX + w / 2, y: row * stepY + (Math.abs(col % 2) ? stepY / 2 : 0) + h / 2 };
}

/* Capitalized alias so the helper is reachable on the design-system namespace. */
export function HexCenter(col, row, size = 'md', gap = 2) {
  return hexCenter(col, row, size, gap);
}
