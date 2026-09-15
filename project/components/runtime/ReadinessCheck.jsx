import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONE = {
  passed: { glyph: 'check_circle', color: 'var(--status-success)' },
  warning: { glyph: 'warning', color: 'var(--status-warning)' },
  failed: { glyph: 'cancel', color: 'var(--status-danger)' },
  pending: { glyph: 'radio_button_unchecked', color: 'var(--text-disabled)' },
};

export function ReadinessCheck({ checks = [], className = '', ...rest }) {
  return (
    <div className={'lamp-readiness ' + className} role="list" {...rest}>
      {checks.map((c) => {
        const t = TONE[c.state] || TONE.pending;
        return (
          <div className="lamp-readiness__row" key={c.label} role="listitem">
            <Icon name={t.glyph} size={15} style={{ color: t.color }} />
            <span>{c.label}</span>
            {c.detail ? <span className="lamp-readiness__detail">{c.detail}</span> : null}
            {c.action}
          </div>
        );
      })}
    </div>
  );
}
