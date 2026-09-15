import React from 'react';

export const PageHeader = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function PageHeader({ title, description, meta, actions, className = '', ...rest }, ref) {
  return (
    <header ref={ref} className={'lamp-pagehead ' + className} {...rest}>
      <div className="lamp-pagehead__titles">
        <h1 className="lamp-pagehead__title">{title}</h1>
        {description ? <p className="lamp-pagehead__desc">{description}</p> : null}
        {meta ? <div className="lamp-pagehead__meta">{meta}</div> : null}
      </div>
      {actions ? <div className="lamp-pagehead__actions">{actions}</div> : null}
    </header>
  );
}), { displayName: 'PageHeader' });

export const DashboardPage = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function DashboardPage({ header, toolbar, flush = false, children, className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={['lamp-page', flush && 'lamp-page--flush', className].filter(Boolean).join(' ')} {...rest}>
      {header}
      {toolbar}
      {children}
    </div>
  );
}), { displayName: 'DashboardPage' });

export const SectionHeader = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function SectionHeader({ title, actions, className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={'lamp-section ' + className} {...rest}>
      <span className="lamp-section__title">{title}</span>
      <span className="lamp-section__rule" />
      {actions ? <span className="lamp-section__actions">{actions}</span> : null}
    </div>
  );
}), { displayName: 'SectionHeader' });
