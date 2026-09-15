import React from 'react';
import { useGsap } from './CanvasMotion.jsx';

/* The canvas surface: grid, environment tint, guides, marquee, empty state, and
   — when `pannable` — space-and-drag panning on GSAP Draggable.

   Pan and zoom live on two different nodes on purpose. GSAP owns the transform
   of `__world` (the pan) and React owns the transform of `__scale` (the zoom),
   so neither clobbers the other on re-render. */

export function CanvasSurface({
  grid = 'dots', zoom = 1, environment = 'draft', state = 'idle', locked = false, readOnly = false,
  empty, marquee, guides = [], pannable = false, panMode = false, onPanChange,
  children, className = '', style, ...rest
}) {
  const gridClass = zoom < 0.3 ? 'plain' : zoom < 0.5 ? 'dots-major' : grid;
  const api = useGsap();
  const hostRef = React.useRef(null);
  const worldRef = React.useRef(null);

  /* Space is held, or the caller has put the canvas in an explicit pan mode.
     Held-key state rather than a toggle, so releasing space returns you to
     selection without a second keystroke. */
  const [spaceHeld, setSpaceHeld] = React.useState(false);
  const panning = pannable && !locked && (panMode || spaceHeld);

  const report = React.useRef(onPanChange);
  report.current = onPanChange;

  React.useEffect(() => {
    if (!pannable || locked) return undefined;
    const down = (e) => {
      if (e.code !== 'Space' || e.repeat) return;
      const el = e.target;
      /* Space belongs to the focused control if there is one. */
      if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(el.tagName))) return;
      e.preventDefault();
      setSpaceHeld(true);
    };
    const up = (e) => { if (e.code === 'Space') setSpaceHeld(false); };
    const blur = () => setSpaceHeld(false);
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    window.addEventListener('blur', blur);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
      window.removeEventListener('blur', blur);
    };
  }, [pannable, locked]);

  const dragRef = React.useRef(null);

  React.useEffect(() => {
    if (!api || !pannable || !worldRef.current) return undefined;
    const [drag] = api.Draggable.create(worldRef.current, {
      type: 'x,y',
      trigger: hostRef.current,
      cursor: 'grab',
      activeCursor: 'grabbing',
      allowContextMenu: true,
      onDrag() {
        const fn = report.current;
        if (fn) fn({ x: this.x, y: this.y });
      },
    });
    dragRef.current = drag || null;
    return () => {
      if (drag) drag.kill();
      dragRef.current = null;
    };
  }, [api, pannable]);

  /* Enabled only while panning, so a drag on the canvas is a marquee selection by
     default and a pan only when the operator asks for one. */
  React.useEffect(() => {
    const drag = dragRef.current;
    if (!drag) return;
    if (panning) drag.enable();
    else drag.disable();
  }, [api, pannable, panning]);

  const cls = [
    'lamp-canvas',
    'lamp-canvas--' + gridClass,
    environment !== 'draft' && 'lamp-canvas--' + environment,
    (state === 'panning' || panning) && 'lamp-canvas--panning',
    locked && 'lamp-canvas--locked',
    readOnly && 'lamp-canvas--readonly',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div ref={hostRef} className={cls} style={style} role="application" aria-label="LAMP canvas" {...rest}>
      <div ref={worldRef} className="lamp-canvas__world">
        <div className="lamp-canvas__scale" style={{ transform: 'scale(' + zoom + ')' }}>{children}</div>
      </div>
      {guides.map((g, i) => (
        <span key={i} className={'lamp-canvas__guide lamp-canvas__guide--' + (g.axis === 'x' ? 'v' : 'h')} style={g.axis === 'x' ? { left: g.at } : { top: g.at }} />
      ))}
      {marquee ? <span className="lamp-canvas__marquee" style={marquee} /> : null}
      {empty ? <div className="lamp-canvas__empty">{empty}</div> : null}
    </div>
  );
}

export function SnapGuide({ rect, invalid = false, kind = 'snap' }) {
  return <span className={kind === 'drop' ? ('lamp-canvas__drop' + (invalid ? ' lamp-canvas__drop--invalid' : '')) : 'lamp-canvas__snapguide'} style={rect} />;
}
