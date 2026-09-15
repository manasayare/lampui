import React from 'react';
import { HexCenter } from '../objects/HexLattice.jsx';
import { AGENT_SIZES } from '../objects/AgentHex.jsx';
import { SnapGuide } from './CanvasSurface.jsx';
import { useGsap, GSAP_DURATION, GSAP_EASE } from './CanvasMotion.jsx';

/* Drag-to-snap field, running on GSAP Draggable.

   THE LATTICE
   -----------
   Every position an Agent can occupy is a cell of a flat-top hexagonal lattice,
   and the set of legal cells is computed from the field's own size — not a fixed
   window — so an Agent can never be dropped outside the field or half off its
   edge. Each cell is reduced to a single pixel point (its centre) and snapping
   is nothing more than "which of these points is nearest".

   NO OVERLAP, EVER
   ----------------
   A cell holding another Agent is not a candidate. It is excluded before the
   distance search, so an occupied slot cannot be chosen, cannot show a guide,
   and cannot be committed to. If a drag ends with no free cell in range the
   Agent returns to where it came from. Two Agents therefore cannot occupy one
   cell by any sequence of drags, and because cells are a lattice they cannot
   partially overlap either.

   TWO RANGES
   ----------
   proximityRange (72px)  the nearest free slot lights up, the Agent does not
                          move — "there is something here"
   snapTolerance  (34px)  the slot is armed and the Agent drifts toward it —
                          "release and it lands here"

   That is the brief's bond lifecycle — proximity, then compatible proximity,
   then snap threshold — made literal. Without the outer range the operator gets
   no warning before the object starts moving on its own, which is what makes
   magnetic snapping feel like a glitch rather than an affordance.

   SELECTION
   ---------
   Dragging on empty canvas draws a marquee and selects the Agents it touches.
   With two or more selected, `onGroup` is offered — that is the path into
   PlaybookComposer. The marquee runs on pointer events rather than Draggable:
   it is a rubber band, not an object with a transform, and giving it to
   Draggable would mean fighting the per-Agent instances for the same press.

   KEYBOARD
   --------
   Focus an Agent and the arrow keys move it one cell at a time, refusing
   occupied and out-of-bounds cells. This path never touches GSAP and works even
   if GSAP never loads. Composition in LAMP is not pointer-only. */

const HEX_CLIP = 'polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)';

/* How far toward the armed slot the Agent drifts. At the 34px default tolerance
   this keeps the visible shift inside the specified 2–6px band for most of the
   approach — a hint that it is about to land, not a decision made for you. */
const PULL = 0.35;

export function SnapField({
  agents = [], size = 'md', gap = 2, width = 720, height = 380,
  snapTolerance = 34, proximityRange = 72,
  renderAgent, bonds, selectedId, selectedIds, onSelect, onSelectionChange, onChange,
  onSnapStateChange, onGroup, groupLabel = 'Group into Playbook',
  selectable = false, origin = { x: 40, y: 40 }, readOnly = false,
  className = '', style, ...rest
}) {
  const [hexW, hexH] = AGENT_SIZES[size] || AGENT_SIZES.md;
  const api = useGsap();

  const [dragId, setDragId] = React.useState(null);
  const [snapState, setSnapState] = React.useState('idle');
  const [marquee, setMarquee] = React.useState(null);

  const nodes = React.useRef({});
  const guideRef = React.useRef(null);
  const fieldRef = React.useRef(null);

  const multi = selectedIds || [];

  /* Draggable callbacks outlive a render, so everything they read goes through
     a ref rather than a closed-over prop. */
  const live = React.useRef({});
  live.current = { agents, origin, size, gap, snapTolerance, proximityRange, onChange, onSelect, onSnapStateChange };

  const stepX = hexW * 0.75 + gap;
  const stepY = hexH + gap;

  const at = React.useCallback((col, row) => {
    const { origin: o, size: s, gap: g } = live.current;
    const c = HexCenter(col, row, s, g);
    return { x: o.x + c.x, y: o.y + c.y };
  }, []);

  /* Legal cells, derived from the field's own box. A cell is legal when the whole
     hexagon fits inside the field — this is what stops an Agent being dropped
     half off the edge, and it is why the candidate search has no magic numbers. */
  const bounds = React.useMemo(() => {
    const minCol = Math.ceil((-origin.x) / stepX);
    const maxCol = Math.floor((width - hexW - origin.x) / stepX);
    const minRow = Math.ceil((-origin.y) / stepY);
    const maxRow = Math.floor((height - hexH - origin.y) / stepY);
    return { minCol, maxCol, minRow, maxRow };
  }, [origin.x, origin.y, width, height, hexW, hexH, stepX, stepY]);

  const inBounds = React.useCallback((col, row) => {
    if (col < bounds.minCol || col > bounds.maxCol) return false;
    if (row < bounds.minRow) return false;
    /* Odd columns sit half a row lower, so they lose the last row. */
    const last = Math.abs(col % 2) ? bounds.maxRow - 1 : bounds.maxRow;
    return row <= last;
  }, [bounds]);

  /**
   * Every free lattice cell as a pixel point. Cells holding another Agent are
   * left out entirely, which is the guarantee that a snap can never overlap.
   * The Agent's own cell stays in — releasing where you started is a no-op, not
   * a rejection.
   */
  const freePoints = React.useCallback((selfId) => {
    const taken = {};
    live.current.agents.forEach((a) => { if (a.id !== selfId) taken[a.col + ':' + a.row] = true; });
    const points = [];
    for (let col = bounds.minCol; col <= bounds.maxCol; col++) {
      const last = Math.abs(col % 2) ? bounds.maxRow - 1 : bounds.maxRow;
      for (let row = bounds.minRow; row <= last; row++) {
        if (taken[col + ':' + row]) continue;
        const p = at(col, row);
        points.push({ col, row, x: p.x, y: p.y });
      }
    }
    return points;
  }, [bounds, at]);

  const nearest = (points, px, py) => {
    let best = null;
    for (let i = 0; i < points.length; i++) {
      const d = Math.hypot(points[i].x - px, points[i].y - py);
      if (!best || d < best.d) best = { ...points[i], d };
    }
    return best;
  };

  const emit = React.useCallback((state) => {
    setSnapState((was) => (was === state ? was : state));
    const fn = live.current.onSnapStateChange;
    if (fn) fn(state);
  }, []);

  /* Identity of the layout, not of the array — a parent re-render handing back an
     equivalent agents array must not tear down every Draggable. */
  const layoutKey = agents.map((a) => a.id + ':' + a.col + ':' + a.row).join('|');

  /* Committing a move changes an Agent's left/top. Zeroing the transform in a
     layout effect — after the new left/top is in the DOM, before paint — is what
     keeps the commit from flashing. */
  React.useLayoutEffect(() => {
    if (!api) return;
    agents.forEach((a) => {
      const el = nodes.current[a.id];
      if (el) api.gsap.set(el, { x: 0, y: 0 });
    });
  }, [api, layoutKey]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (!api || readOnly) return undefined;
    const { gsap, Draggable } = api;
    const guide = guideRef.current;
    const instances = [];

    agents.forEach((agent) => {
      const el = nodes.current[agent.id];
      if (!el) return;

      const home = at(agent.col, agent.row);
      let points = [];
      let armed = null;

      const showGuide = (cell, ready) => {
        if (!guide) return;
        if (!cell) { gsap.set(guide, { autoAlpha: 0 }); return; }
        gsap.set(guide, {
          x: cell.x - hexW / 2,
          y: cell.y - hexH / 2,
          autoAlpha: ready ? 1 : 0.45,
        });
      };

      const created = Draggable.create(el, {
        type: 'x,y',
        allowContextMenu: true,
        cursor: 'grab',
        activeCursor: 'grabbing',
        liveSnap: {
          points(point) {
            const cx = home.x + point.x;
            const cy = home.y + point.y;
            const cell = nearest(points, cx, cy);
            if (!cell) { armed = null; showGuide(null); emit('dragging'); return point; }

            const { snapTolerance: tol, proximityRange: near } = live.current;
            if (cell.d <= tol) {
              armed = cell;
              showGuide(cell, true);
              emit('snapReady');
              /* Drift toward the slot — a hint, not a commitment. */
              return {
                x: point.x + (cell.x - cx) * PULL,
                y: point.y + (cell.y - cy) * PULL,
              };
            }
            armed = null;
            if (cell.d <= near) { showGuide(cell, false); emit('proximity'); }
            else { showGuide(null); emit('dragging'); }
            return point;
          },
        },
        onPress() {
          const select = live.current.onSelect;
          if (select) select(agent);
        },
        onDragStart() {
          /* Recomputed per drag: which cells are free depends on where every
             other Agent is right now. */
          points = freePoints(agent.id);
          armed = null;
          setDragId(agent.id);
          emit('dragging');
        },
        onRelease() {
          const cell = armed;
          armed = null;
          showGuide(null);
          setDragId(null);
          emit('idle');

          const commit = live.current.onChange;
          if (!cell || !commit || (cell.col === agent.col && cell.row === agent.row)) {
            gsap.to(el, { x: 0, y: 0, duration: GSAP_DURATION.standard, ease: GSAP_EASE.magnetic });
            return;
          }
          /* Settle onto the slot with the transform, then commit. The layout
             effect re-homes the element to the same pixel, so nothing jumps. */
          gsap.to(el, {
            x: cell.x - home.x,
            y: cell.y - home.y,
            duration: GSAP_DURATION.medium,
            ease: GSAP_EASE.magnetic,
            onComplete() {
              commit(
                live.current.agents.map((a) =>
                  a.id === agent.id ? { ...a, col: cell.col, row: cell.row } : a,
                ),
              );
            },
          });
        },
      })[0];

      if (created) instances.push(created);
    });

    return () => instances.forEach((d) => d.kill());
  }, [api, readOnly, layoutKey, hexW, hexH, at, freePoints, emit]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ------------------------------------------------------------ marquee */

  const marqueeFrom = React.useRef(null);

  const localPoint = (e) => {
    const box = fieldRef.current.getBoundingClientRect();
    return { x: e.clientX - box.left, y: e.clientY - box.top };
  };

  const rectOf = (a, b) => ({
    left: Math.min(a.x, b.x),
    top: Math.min(a.y, b.y),
    width: Math.abs(a.x - b.x),
    height: Math.abs(a.y - b.y),
  });

  const onFieldPointerDown = (e) => {
    if (!selectable || readOnly || e.button !== 0) return;
    /* Only a press on bare canvas starts a marquee; a press on an Agent is a drag. */
    if (e.target !== fieldRef.current) return;
    e.preventDefault();
    fieldRef.current.setPointerCapture(e.pointerId);
    marqueeFrom.current = localPoint(e);
    setMarquee({ left: marqueeFrom.current.x, top: marqueeFrom.current.y, width: 0, height: 0 });
    if (onSelectionChange) onSelectionChange([]);
  };

  const onFieldPointerMove = (e) => {
    if (!marqueeFrom.current) return;
    setMarquee(rectOf(marqueeFrom.current, localPoint(e)));
  };

  const onFieldPointerUp = (e) => {
    if (!marqueeFrom.current) return;
    const rect = rectOf(marqueeFrom.current, localPoint(e));
    marqueeFrom.current = null;
    setMarquee(null);
    if (!onSelectionChange) return;
    /* A hexagon counts as caught when its centre is inside the band — the same
       rule the lattice uses, so selection and snapping agree about where an
       Agent "is". */
    const hits = agents
      .filter((a) => {
        const p = at(a.col, a.row);
        return p.x >= rect.left && p.x <= rect.left + rect.width
          && p.y >= rect.top && p.y <= rect.top + rect.height;
      })
      .map((a) => a.id);
    onSelectionChange(hits);
  };

  /* Centroid of the selection, for placing the floating group action. */
  const groupAnchor = React.useMemo(() => {
    if (multi.length < 2) return null;
    const picked = agents.filter((a) => multi.indexOf(a.id) !== -1);
    if (!picked.length) return null;
    const pts = picked.map((a) => at(a.col, a.row));
    return {
      x: pts.reduce((s, p) => s + p.x, 0) / pts.length,
      y: Math.min.apply(null, pts.map((p) => p.y)) - hexH / 2 - 12,
    };
  }, [multi, agents, at, hexH]);

  /* Outline enclosing the selection — the "outline into a Playbook" preview. */
  const groupOutline = React.useMemo(() => {
    if (multi.length < 2) return null;
    const picked = agents.filter((a) => multi.indexOf(a.id) !== -1);
    if (!picked.length) return null;
    const pts = picked.map((a) => at(a.col, a.row));
    const pad = 14;
    /* Deeper at the bottom: the Agent name sits below the hexagon, and an outline
       that cuts through the labels of the very Agents it is enclosing reads as a
       clipping bug rather than a grouping. */
    const padBottom = 36;
    const left = Math.min.apply(null, pts.map((p) => p.x)) - hexW / 2 - pad;
    const top = Math.min.apply(null, pts.map((p) => p.y)) - hexH / 2 - pad;
    return {
      left,
      top,
      width: Math.max.apply(null, pts.map((p) => p.x)) + hexW / 2 + pad - left,
      height: Math.max.apply(null, pts.map((p) => p.y)) + hexH / 2 + padBottom - top,
    };
  }, [multi, agents, at, hexW, hexH]);

  /* ----------------------------------------------------------- keyboard */

  const onKeyDown = (a) => (e) => {
    if (readOnly || !onChange) return;
    const step = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
    if (!step) return;
    e.preventDefault();
    const col = a.col + step[0];
    const row = a.row + step[1];
    if (!inBounds(col, row)) return;
    if (agents.some((x) => x.id !== a.id && x.col === col && x.row === row)) return;
    onChange(agents.map((x) => (x.id === a.id ? { ...x, col, row } : x)));
  };

  return (
    <div
      ref={fieldRef}
      className={[
        'lamp-snapfield',
        dragId && 'lamp-snapfield--dragging',
        snapState === 'proximity' && 'lamp-snapfield--proximity',
        snapState === 'snapReady' && 'lamp-snapfield--ready',
        className,
      ].filter(Boolean).join(' ')}
      style={{ position: 'relative', width, height, touchAction: 'none', ...style }}
      onPointerDown={onFieldPointerDown}
      onPointerMove={onFieldPointerMove}
      onPointerUp={onFieldPointerUp}
      onPointerCancel={onFieldPointerUp}
      {...rest}
    >
      {bonds ? (
        <div className="lamp-snapfield__bonds" style={{ position: 'absolute', left: origin.x, top: origin.y, pointerEvents: 'none' }}>
          {bonds}
        </div>
      ) : null}

      {groupOutline ? <span className="lamp-snapfield__outline" style={groupOutline} /> : null}

      <div ref={guideRef} className="lamp-snapfield__guide" style={{ position: 'absolute', left: 0, top: 0, width: hexW, height: hexH, opacity: 0, visibility: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
        <SnapGuide rect={{ position: 'absolute', inset: 0, clipPath: HEX_CLIP }} />
      </div>

      {agents.map((a) => {
        const isDrag = dragId === a.id;
        const p = at(a.col, a.row);
        const state = isDrag && snapState !== 'idle' ? snapState : a.state;
        return (
          <div
            key={a.id}
            ref={(el) => { if (el) nodes.current[a.id] = el; else delete nodes.current[a.id]; }}
            className="lamp-snapfield__slot"
            style={{ position: 'absolute', left: p.x - hexW / 2, top: p.y - hexH / 2, width: hexW, height: hexH, zIndex: isDrag ? 5 : 1, cursor: readOnly ? 'default' : 'grab' }}
            onKeyDown={onKeyDown(a)}
          >
            {/* The slot is exactly the hexagon — that is what GSAP transforms and
                what the lattice positions. The Agent sits in an inner wrapper
                centred on it, so a name wider than the hexagon overhangs evenly
                instead of pushing the hexagon off its own lattice point. The
                wrapper's transform is untouched by Draggable, which owns the
                slot's. */}
            <div className="lamp-snapfield__cell">
              {renderAgent(Object.assign({}, a, { state }), {
                dragging: isDrag,
                proximity: isDrag && snapState === 'proximity',
                snapReady: isDrag && snapState === 'snapReady',
                selected: selectedId === a.id,
                multiSelected: multi.indexOf(a.id) !== -1,
              })}
            </div>
          </div>
        );
      })}

      {marquee ? <span className="lamp-canvas__marquee" style={{ position: 'absolute', ...marquee }} /> : null}

      {groupAnchor && onGroup ? (
        <div className="lamp-snapfield__group" style={{ left: groupAnchor.x, top: groupAnchor.y }}>
          <button type="button" className="lamp-snapfield__group-btn" onClick={() => onGroup(multi)}>
            {groupLabel}
            <span className="lamp-snapfield__group-count">{multi.length}</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
