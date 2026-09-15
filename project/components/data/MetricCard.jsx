import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function MetricCard({ label, value, unit, delta, deltaDirection, deltaTone, deltaLabel, size = 'lg', flush = false, glyph, footnote, spark, actions, className = '', ...rest }) {
  const dir = deltaDirection || (delta && String(delta).trim().startsWith('-') ? 'down' : delta ? 'up' : 'flat');
  const tone = deltaTone || (dir === 'up' ? 'positive' : dir === 'down' ? 'negative' : 'flat');
  return (
    <div className={['lamp-metric', size === 'sm' && 'lamp-metric--sm', flush && 'lamp-metric--flush', className].filter(Boolean).join(' ')} {...rest}>
      <span className="lamp-metric__label">
        {glyph ? <Icon name={glyph} size={12} /> : null}{label}
        {actions ? <span style={{ marginLeft: 'auto' }}>{actions}</span> : null}
      </span>
      <span className="lamp-metric__row">
        <span className="lamp-metric__value">{value}</span>
        {unit ? <span className="lamp-metric__unit">{unit}</span> : null}
        {delta ? (
          <span className={'lamp-metric__delta lamp-metric__delta--' + tone}>
            <Icon name={dir === 'up' ? 'trending_up' : dir === 'down' ? 'trending_down' : 'trending_flat'} size={13} />{delta}
          </span>
        ) : null}
      </span>
      {spark ? <span className="lamp-metric__spark">{spark}</span> : null}
      {(footnote || deltaLabel) ? <span className="lamp-metric__foot">{footnote || deltaLabel}</span> : null}
    </div>
  );
}
