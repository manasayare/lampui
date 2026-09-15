import React from 'react';

export const Panel = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Panel({ title, actions, flush = false, width, children, className = '', style, ...rest }, ref) {
  return (
    <section ref={ref} className={['lamp-panel', flush && 'lamp-panel--flush', className].filter(Boolean).join(' ')} style={{ width, ...style }} {...rest}>
      {title || actions ? (
        <header className="lamp-panel__head">
          {title ? <span className="lamp-panel__title">{title}</span> : null}
          {actions ? <span className="lamp-panel__actions">{actions}</span> : null}
        </header>
      ) : null}
      <div className="lamp-panel__body">{children}</div>
    </section>
  );
}), { displayName: 'Panel' });
