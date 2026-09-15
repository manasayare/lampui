import React from 'react';

export function CanvasSurface({ grid = 'dots', zoom = 1, environment = 'draft', state = 'idle', locked = false, readOnly = false, empty, marquee, guides = [], children, className = '', style, ...rest }) {
  const gridClass = zoom < 0.3 ? 'plain' : zoom < 0.5 ? 'dots-major' : grid;
  return (
    <div className={['lamp-canvas', 'lamp-canvas--' + gridClass, environment !== 'draft' && 'lamp-canvas--' + environment,
      state === 'panning' && 'lamp-canvas--panning', locked && 'lamp-canvas--locked', readOnly && 'lamp-canvas--readonly', className].filter(Boolean).join(' ')}
      style={style} role="application" aria-label="LAMP canvas" {...rest}>
      <div className="lamp-canvas__world" style={{ transform: 'scale(' + zoom + ')' }}>{children}</div>
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
