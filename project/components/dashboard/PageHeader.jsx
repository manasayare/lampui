import React from 'react';

export function PageHeader({ title, description, meta, actions, className = '', ...rest }) {
  return (
    <header className={'lamp-pagehead ' + className} {...rest}>
      <div className="lamp-pagehead__titles">
        <h1 className="lamp-pagehead__title">{title}</h1>
        {description ? <p className="lamp-pagehead__desc">{description}</p> : null}
        {meta ? <div className="lamp-pagehead__meta">{meta}</div> : null}
      </div>
      {actions ? <div className="lamp-pagehead__actions">{actions}</div> : null}
    </header>
  );
}

export function DashboardPage({ header, toolbar, flush = false, children, className = '', ...rest }) {
  return (
    <div className={['lamp-page', flush && 'lamp-page--flush', className].filter(Boolean).join(' ')} {...rest}>
      {header}
      {toolbar}
      {children}
    </div>
  );
}

export function SectionHeader({ title, actions, className = '', ...rest }) {
  return (
    <div className={'lamp-section ' + className} {...rest}>
      <span className="lamp-section__title">{title}</span>
      <span className="lamp-section__rule" />
      {actions ? <span className="lamp-section__actions">{actions}</span> : null}
    </div>
  );
}
