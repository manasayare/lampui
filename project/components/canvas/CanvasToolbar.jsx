import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
import { Divider } from '../core/Divider.jsx';

export const CanvasToolbar = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function CanvasToolbar({ position = 'floating', children, className = '', style, ...rest }, ref) {
  return <div ref={ref} className={['lamp-ctoolbar', 'lamp-ctoolbar--' + position, className].filter(Boolean).join(' ')} style={style} role="toolbar" {...rest}>{children}</div>;
}), { displayName: 'CanvasToolbar' });

export const CanvasZoomControls = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function CanvasZoomControls({ zoom = 1, onZoomIn, onZoomOut, onFit, onReset, ...rest }, ref) {
  return (
    <CanvasToolbar ref={ref} position="topright" {...rest}>
      <IconButton icon="remove" label="Zoom out" size="sm" onClick={onZoomOut} />
      <button type="button" className="lamp-ctoolbar__zoom" onClick={onReset} title="Reset zoom">{Math.round(zoom * 100)}%</button>
      <IconButton icon="add" label="Zoom in" size="sm" onClick={onZoomIn} />
      <Divider orientation="vertical" />
      <IconButton icon="fit_screen" label="Fit selection" size="sm" onClick={onFit} />
    </CanvasToolbar>
  );
}), { displayName: 'CanvasZoomControls' });

export const CanvasObjectToolbar = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function CanvasObjectToolbar({ x, y, children, ...rest }, ref) {
  return <div ref={ref} className="lamp-ctoolbar lamp-ctoolbar--object" style={{ left: x, top: y }} role="toolbar" {...rest}>{children}</div>;
}), { displayName: 'CanvasObjectToolbar' });

export const CanvasMinimap = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function CanvasMinimap({ blips = [], viewport, onJump, ...rest }, ref) {
  return (
    <div ref={ref} className="lamp-minimap" onClick={onJump} aria-label="Canvas overview" {...rest}>
      {blips.map((b, i) => <span key={i} className={'lamp-minimap__blip' + (b.tone ? ' lamp-minimap__blip--' + b.tone : '')} style={{ left: b.x, top: b.y, width: b.w || 4, height: b.h || 4 }} />)}
      {viewport ? <span className="lamp-minimap__viewport" style={viewport} /> : null}
    </div>
  );
}), { displayName: 'CanvasMinimap' });
