import React from 'react';
import { HexCenter } from '../objects/HexLattice.jsx';
import { AGENT_SIZES } from '../objects/AgentHex.jsx';
import { SnapGuide } from './CanvasSurface.jsx';

/* Drag-to-snap field. Agents are dragged freely; on release they snap to the nearest
   free cell of the hexagonal lattice. The lattice is invisible — only the candidate
   slot shows, and only while a drag is in flight.
   Every drag has a keyboard equivalent: select an Agent, then arrow keys move it one
   cell at a time and Enter commits. See guidelines/bonding.md. */

const ROUND = (v) => Math.round(v * 100) / 100;

export function SnapField({
  agents = [], size = 'md', gap = 2, width = 720, height = 380, snapTolerance = 34,
  renderAgent, bonds, selectedId, onSelect, onChange, onSnapStateChange,
  origin = { x: 40, y: 40 }, readOnly = false, className = '', style, ...rest
}) {
  const [hexW, hexH] = AGENT_SIZES[size] || AGENT_SIZES.md;
  const [drag, setDrag] = React.useState(null);
  const ref = React.useRef(null);

  const at = (col, row) => {
    const c = HexCenter(col, row, size, gap);
    return { x: origin.x + c.x, y: origin.y + c.y };
  };
  const occupied = React.useMemo(() => {
    const m = {};
    agents.forEach((a) => { m[a.col + ':' + a.row] = a.id; });
    return m;
  }, [agents]);

  /* Nearest lattice cell to a pixel point, searching a small window around the
     Agent's current cell — enough for a drag, cheap enough for every pointer move. */
  const nearestCell = (px, py, self) => {
    let best = null;
    for (let col = -2; col <= 10; col++) {
      for (let row = -2; row <= 6; row++) {
        const p = at(col, row);
        const d = Math.hypot(p.x - px, p.y - py);
        const taken = occupied[col + ':' + row];
        if (taken && taken !== self) continue;
        if (!best || d < best.d) best = { col, row, d, x: p.x, y: p.y };
      }
    }
    return best;
  };

  const pointerPos = (e) => {
    const box = ref.current.getBoundingClientRect();
    return { x: e.clientX - box.left, y: e.clientY - box.top };
  };

  const onDown = (a) => (e) => {
    onSelect && onSelect(a);
    if (readOnly || e.button !== 0) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
    const p = pointerPos(e);
    const home = at(a.col, a.row);
    setDrag({ id: a.id, dx: p.x - home.x, dy: p.y - home.y, x: home.x, y: home.y, cell: null, ready: false });
  };

  const onMove = (e) => {
    if (!drag) return;
    const p = pointerPos(e);
    const x = p.x - drag.dx, y = p.y - drag.dy;
    const cell = nearestCell(x, y, drag.id);
    const ready = !!cell && cell.d <= snapTolerance;
    // Magnetic pull: inside the tolerance the object drifts toward the slot.
    const mx = ready ? x + (cell.x - x) * 0.35 : x;
    const my = ready ? y + (cell.y - y) * 0.35 : y;
    if (ready !== drag.ready) onSnapStateChange && onSnapStateChange(ready ? 'snapReady' : 'dragging');
    setDrag({ ...drag, x: ROUND(mx), y: ROUND(my), cell, ready });
  };

  const onUp = () => {
    if (!drag) return;
    if (drag.cell && drag.ready && onChange) {
      onChange(agents.map((a) => (a.id === drag.id ? { ...a, col: drag.cell.col, row: drag.cell.row } : a)));
    }
    onSnapStateChange && onSnapStateChange('idle');
    setDrag(null);
  };

  const onKeyDown = (a) => (e) => {
    if (readOnly || !onChange) return;
    const step = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
    if (!step) return;
    e.preventDefault();
    const col = a.col + step[0], row = a.row + step[1];
    if (occupied[col + ':' + row]) return;
    onChange(agents.map((x) => (x.id === a.id ? { ...x, col, row } : x)));
  };

  return (
    <div ref={ref} className={['lamp-snapfield', drag && 'lamp-snapfield--dragging', className].filter(Boolean).join(' ')}
      style={{ position: 'relative', width, height, touchAction: 'none', ...style }}
      onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} {...rest}>
      {bonds ? <div className="lamp-snapfield__bonds" style={{ position: 'absolute', left: origin.x, top: origin.y, pointerEvents: 'none' }}>{bonds}</div> : null}
      {drag && drag.cell && drag.ready ? (
        <SnapGuide rect={{ position: 'absolute', left: drag.cell.x - hexW / 2, top: drag.cell.y - hexH / 2, width: hexW, height: hexH, clipPath: 'polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)' }} />
      ) : null}
      {agents.map((a) => {
        const isDrag = drag && drag.id === a.id;
        const p = isDrag ? { x: drag.x, y: drag.y } : at(a.col, a.row);
        const state = isDrag ? (drag.ready ? 'snapReady' : 'dragging') : a.state;
        return (
          <div key={a.id} className="lamp-snapfield__slot"
            style={{ position: 'absolute', left: p.x - hexW / 2, top: p.y - hexH / 2, zIndex: isDrag ? 5 : 1, cursor: readOnly ? 'default' : isDrag ? 'grabbing' : 'grab' }}
            onPointerDown={onDown(a)} onKeyDown={onKeyDown(a)}>
            {renderAgent(Object.assign({}, a, { state }), { dragging: !!isDrag, snapReady: !!(isDrag && drag.ready), selected: selectedId === a.id })}
          </div>
        );
      })}
    </div>
  );
}
