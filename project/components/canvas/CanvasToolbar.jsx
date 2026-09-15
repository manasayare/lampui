import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
import { Divider } from '../core/Divider.jsx';

export function CanvasToolbar({ position = 'floating', children, className = '', style, ...rest }) {
  return <div className={['lamp-ctoolbar', 'lamp-ctoolbar--' + position, className].filter(Boolean).join(' ')} style={style} role="toolbar" {...rest}>{children}</div>;
}

export function CanvasZoomControls({ zoom = 1, onZoomIn, onZoomOut, onFit, onReset, ...rest }) {
  return (
    <CanvasToolbar position="topright" {...rest}>
      <IconButton icon="remove" label="Zoom out" size="sm" onClick={onZoomOut} />
      <button type="button" className="lamp-ctoolbar__zoom" onClick={onReset} title="Reset zoom">{Math.round(zoom * 100)}%</button>
      <IconButton icon="add" label="Zoom in" size="sm" onClick={onZoomIn} />
      <Divider orientation="vertical" />
      <IconButton icon="fit_screen" label="Fit selection" size="sm" onClick={onFit} />
    </CanvasToolbar>
  );
}

export function CanvasObjectToolbar({ x, y, children, ...rest }) {
  return <div className="lamp-ctoolbar lamp-ctoolbar--object" style={{ left: x, top: y }} role="toolbar" {...rest}>{children}</div>;
}

export function CanvasMinimap({ blips = [], viewport, onJump, ...rest }) {
  return (
    <div className="lamp-minimap" onClick={onJump} aria-label="Canvas overview" {...rest}>
      {blips.map((b, i) => <span key={i} className={'lamp-minimap__blip' + (b.tone ? ' lamp-minimap__blip--' + b.tone : '')} style={{ left: b.x, top: b.y, width: b.w || 4, height: b.h || 4 }} />)}
      {viewport ? <span className="lamp-minimap__viewport" style={viewport} /> : null}
    </div>
  );
}
