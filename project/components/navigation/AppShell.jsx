import React from 'react';

export const AppShell = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function AppShell({ header, rail, dock, bottom, statusBar, dockWidth = 'var(--inspector-width)', children, className = '', style, ...rest }, ref) {
  return (
    <div ref={ref} className={'lamp-shell ' + className} style={{ height: '100%', ...style }} {...rest}>
      {header}
      <div className="lamp-shell__body">
        {rail ? <div className="lamp-shell__rail">{rail}</div> : null}
        <div className="lamp-shell__main">
          {children}
          {bottom ? <div className="lamp-shell__bottom">{bottom}</div> : null}
        </div>
        {dock ? <div className="lamp-shell__dock" style={{ width: dockWidth }}>{dock}</div> : null}
      </div>
      {statusBar}
    </div>
  );
}), { displayName: 'AppShell' });
