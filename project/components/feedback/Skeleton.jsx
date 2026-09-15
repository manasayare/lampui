import React from 'react';

export function Skeleton({ width = '100%', height = 10, radius, variant = 'block', lines = 1, className = '', style, ...rest }) {
  if (variant === 'text' && lines > 1) {
    return (
      <span className={className} style={{ display: 'block' }} {...rest}>
        {Array.from({ length: lines }, (_, i) => (
          <span key={i} className="lamp-skel lamp-skel--text" style={{ width: i === lines - 1 ? '60%' : '100%' }} />
        ))}
      </span>
    );
  }
  return <span className={['lamp-skel', variant === 'hex' && 'lamp-skel--hex', variant === 'circle' && 'lamp-skel--circle', className].filter(Boolean).join(' ')}
    style={{ width, height, borderRadius: variant === 'circle' ? '50%' : radius, ...style }} aria-hidden="true" {...rest} />;
}

export function Spinner({ size = 14, className = '', style, ...rest }) {
  return <span className={'lamp-spin ' + className} style={{ width: size, height: size, ...style }} role="status" aria-label="Loading" {...rest} />;
}
