import React from 'react';

export function DashboardCard({ title, description, actions, footer, raised = false, flush = false, span, children, className = '', style, ...rest }) {
  return (
    <section className={['lamp-dcard', raised && 'lamp-dcard--raised', className].filter(Boolean).join(' ')}
      style={span ? { gridColumn: 'span ' + span, ...style } : style} {...rest}>
      {(title || actions) ? (
        <header className="lamp-dcard__head">
          <div className="lamp-dcard__titles">
            {title ? <h3 className="lamp-dcard__title">{title}</h3> : null}
            {description ? <p className="lamp-dcard__desc">{description}</p> : null}
          </div>
          {actions ? <div className="lamp-dcard__actions">{actions}</div> : null}
        </header>
      ) : null}
      <div className={['lamp-dcard__content', flush && 'lamp-dcard__content--flush'].filter(Boolean).join(' ')}>{children}</div>
      {footer ? <footer className="lamp-dcard__foot">{footer}</footer> : null}
    </section>
  );
}

export function DashboardGrid({ columns = 2, children, className = '', style, ...rest }) {
  return <div className={['lamp-grid', 'lamp-grid--' + columns, className].filter(Boolean).join(' ')} style={style} {...rest}>{children}</div>;
}

export function StatGrid({ children, className = '', ...rest }) {
  return <div className={['lamp-grid', 'lamp-grid--stats', className].filter(Boolean).join(' ')} {...rest}>{children}</div>;
}
