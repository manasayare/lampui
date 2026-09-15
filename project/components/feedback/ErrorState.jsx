import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';

export const ErrorState = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ErrorState({ kind = 'recoverable', title, happened, notHappened, impact, recovery, code, actions, onRetry, onReport, children, className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={'lamp-err ' + className} role="alert" {...rest}>
      <div className="lamp-err__title"><Icon name={kind === 'fatal' ? 'dangerous' : 'error'} size={16} />{title}</div>
      <div className="lamp-err__facts">
        {happened ? <><span className="lamp-err__k">What happened</span><span className="lamp-err__v">{happened}</span></> : null}
        {notHappened ? <><span className="lamp-err__k">What did not</span><span className="lamp-err__v">{notHappened}</span></> : null}
        {impact ? <><span className="lamp-err__k">Impact</span><span className="lamp-err__v">{impact}</span></> : null}
        {recovery ? <><span className="lamp-err__k">Recovery</span><span className="lamp-err__v">{recovery}</span></> : null}
      </div>
      {children}
      {code ? <span className="lamp-err__code">{code}</span> : null}
      {(actions || onRetry || onReport) ? (
        <div className="lamp-err__actions">
          {actions}
          {onRetry ? <Button size="sm" variant="secondary" icon="refresh" onClick={onRetry}>Retry</Button> : null}
          {onReport ? <Button size="sm" variant="quiet" onClick={onReport}>Report problem</Button> : null}
        </div>
      ) : null}
    </div>
  );
}), { displayName: 'ErrorState' });
