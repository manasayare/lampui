import React from 'react';
import { Icon } from '../core/Icon.jsx';

export const DATAVIZ = ['var(--dataviz-1)','var(--dataviz-2)','var(--dataviz-3)','var(--dataviz-4)','var(--dataviz-5)','var(--dataviz-6)','var(--dataviz-7)','var(--dataviz-8)'];
export const seriesColor = (i) => DATAVIZ[i % DATAVIZ.length];

export const ChartLegend = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ChartLegend({ items = [], variant = 'swatch', className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={'lamp-chart__legend ' + className} {...rest}>
      {items.map((it, i) => (
        <span className="lamp-chart__legend-item" key={it.label}>
          <span className={'lamp-chart__swatch' + (variant === 'line' ? ' lamp-chart__swatch--line' : '') + (it.dashed ? ' lamp-chart__swatch--dashed' : '')}
            style={it.dashed ? { color: it.color || seriesColor(i), background: 'transparent' } : { background: it.color || seriesColor(i) }} />
          {it.label}
          {it.value != null ? <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>{it.value}</span> : null}
        </span>
      ))}
    </div>
  );
}), { displayName: 'ChartLegend' });

export const ChartFrame = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ChartFrame({ title, subtitle, actions, legend, legendVariant = 'swatch', state = 'ready', emptyLabel = 'No data yet', errorLabel = 'Could not load this chart', footnote, flush = false, height, children, className = '', ...rest }, ref) {
  return (
    <figure ref={ref} className={['lamp-chart', flush && 'lamp-chart--flush', className].filter(Boolean).join(' ')} style={{ margin: 0 }} {...rest}>
      {(title || actions) ? (
        <div className="lamp-chart__head">
          <figcaption className="lamp-chart__titles">
            {title ? <span className="lamp-chart__title">{title}</span> : null}
            {subtitle ? <span className="lamp-chart__sub">{subtitle}</span> : null}
          </figcaption>
          {actions ? <span className="lamp-chart__actions">{actions}</span> : null}
        </div>
      ) : null}
      {legend ? <ChartLegend items={legend} variant={legendVariant} /> : null}
      <div className="lamp-chart__body" style={height ? { height } : undefined}>
        {state === 'ready' ? children : null}
        {state === 'loading' ? <div className="lamp-chart__state"><Icon name="progress_activity" size={16} />Loading</div> : null}
        {state === 'empty' ? <div className="lamp-chart__state"><Icon name="bar_chart" size={18} />{emptyLabel}</div> : null}
        {state === 'error' ? <div className="lamp-chart__state" style={{ color: 'var(--status-danger-text)' }}><Icon name="warning" size={16} />{errorLabel}</div> : null}
      </div>
      {footnote ? <div className="lamp-chart__foot">{footnote}</div> : null}
    </figure>
  );
}), { displayName: 'ChartFrame' });

export const ChartTooltip = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function ChartTooltip({ x, y, title, rows = [], ...rest }, ref) {
  return (
    <div ref={ref} className="lamp-chart__tip" style={{ left: x, top: y }} {...rest}>
      {title ? <div style={{ fontWeight: 500, marginBottom: 4, color: 'var(--text-primary)' }}>{title}</div> : null}
      {rows.map((r, i) => (
        <div className="lamp-chart__tip-row" key={i}>
          <span className="lamp-chart__swatch" style={{ background: r.color || seriesColor(i) }} />
          {r.label}<span className="lamp-chart__tip-val">{r.value}</span>
        </div>
      ))}
    </div>
  );
}), { displayName: 'ChartTooltip' });

/* Reachable from the namespace as ChartFrame.seriesColor. */
ChartFrame.seriesColor = seriesColor;
ChartFrame.palette = DATAVIZ;
