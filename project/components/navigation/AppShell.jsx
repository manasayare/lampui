import React from 'react';

export function AppShell({ header, rail, dock, bottom, statusBar, dockWidth = 'var(--inspector-width)', children, className = '', style, ...rest }) {
  return (
    <div className={'lamp-shell ' + className} style={{ height: '100%', ...style }} {...rest}>
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
}
