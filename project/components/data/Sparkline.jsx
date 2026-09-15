import React from 'react';

export function Sparkline({ data = [], width = 96, height = 24, color = 'var(--chart-primary)', variant = 'line', area = true, baseline, className = '', ...rest }) {
  if (!data.length) return null;
  const max = Math.max.apply(null, data);
  const min = Math.min.apply(null, data);
  const span = max - min || 1;
  const x = (i) => (i / Math.max(1, data.length - 1)) * width;
  const y = (v) => height - ((v - min) / span) * (height - 2) - 1;
  if (variant === 'bar') {
    const bw = Math.max(1, width / data.length - 1);
    return (
      <svg width={width} height={height} className={className} role="img" aria-hidden="true" {...rest}>
        {data.map((v, i) => <rect key={i} x={(i / data.length) * width} y={y(v)} width={bw} height={height - y(v)} fill={color} rx={1} />)}
      </svg>
    );
  }
  const path = data.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ',' + y(v).toFixed(1)).join(' ');
  return (
    <svg width={width} height={height} className={className} role="img" aria-hidden="true" {...rest}>
      {area ? <path d={path + ' L' + width + ',' + height + ' L0,' + height + ' Z'} fill={color} opacity={0.12} /> : null}
      {baseline != null ? <line x1={0} x2={width} y1={y(baseline)} y2={y(baseline)} stroke="var(--chart-grid)" strokeDasharray="2 2" /> : null}
      <path d={path} fill="none" stroke={color} strokeWidth={1.25} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
