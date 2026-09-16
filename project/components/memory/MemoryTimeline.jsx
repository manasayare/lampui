import React from 'react';

export const MemoryTimeline = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function MemoryTimeline({ items = [], className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={'lamp-timeline ' + className} {...rest}>
      {items.map((it, i) => (
        <div className="lamp-timeline__item" key={i}>
          <span className="lamp-timeline__rail">
            <span className={'lamp-timeline__dot' + (it.current ? ' lamp-timeline__dot--current' : it.accent ? ' lamp-timeline__dot--accent' : '')} />
            {i < items.length - 1 ? <span className="lamp-timeline__line" /> : null}
          </span>
          <span className="lamp-timeline__body">
            <span className="lamp-timeline__title">{it.title}</span>
            {it.detail ? <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{it.detail}</span> : null}
            <span className="lamp-timeline__meta">{[it.actor, it.timestamp].filter(Boolean).join(' · ')}</span>
          </span>
        </div>
      ))}
    </div>
  );
}), { displayName: 'MemoryTimeline' });
