import React from 'react';

/* LAMP memory topology — an Obsidian-style force graph over what LAMP knows.
   Node geometry follows the product grammar: hexagon = Agent, circle = fact or Skill,
   square = Tool, diamond = Genie/Playbook scope. Colour carries kind, size carries weight.
   The simulation settles and then stops — at rest the graph is completely still. */

const KIND_COLOR = {
  fact: 'var(--memory-core)',
  policy: 'var(--gold-600)',
  observed: 'var(--slate-500)',
  inferred: 'var(--purple-500)',
  exception: 'var(--orange-500)',
  entity: 'var(--steel-500)',
  agent: 'var(--gold-500)',
  tool: 'var(--teal-500)',
  scope: 'var(--neutral-500)',
};
const SHAPE = { agent: 'hex', tool: 'square', scope: 'diamond' };

function shapePath(shape, r) {
  if (shape === 'square') return 'M' + (-r) + ',' + (-r) + 'h' + (r * 2) + 'v' + (r * 2) + 'h' + (-r * 2) + 'Z';
  if (shape === 'diamond') return 'M0,' + (-r * 1.15) + 'L' + (r * 1.15) + ',0L0,' + (r * 1.15) + 'L' + (-r * 1.15) + ',0Z';
  if (shape === 'hex') {
    const w = r * 1.15, h = r;
    return 'M' + (-w * 0.5) + ',' + (-h) + 'L' + (w * 0.5) + ',' + (-h) + 'L' + w + ',0L' + (w * 0.5) + ',' + h + 'L' + (-w * 0.5) + ',' + h + 'L' + (-w) + ',0Z';
  }
  return null;
}

export function MemoryGraph({
  nodes = [], links = [], width = 640, height = 360, showLabels = true, labelMinRadius = 7,
  selectedId, onSelect, onHover, legend = true, iterations = 260, className = '', style, ...rest
}) {
  const [tick, setTick] = React.useState(0);
  const [hover, setHover] = React.useState(null);
  const sim = React.useRef({ pos: [], alpha: 1 });

  const key = nodes.map((n) => n.id).join('|') + '#' + links.length + '#' + width + 'x' + height;
  const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  React.useEffect(() => {
    const n = nodes.length;
    const cx = width / 2, cy = height / 2;
    const R = Math.min(width, height) * 0.34;
    // Deterministic seed — the same graph always lays out the same way.
    const pos = nodes.map((nd, i) => {
      const a = (i / Math.max(1, n)) * Math.PI * 2;
      const j = ((i * 2654435761) % 1000) / 1000;
      return { x: cx + Math.cos(a) * R * (0.6 + j * 0.6), y: cy + Math.sin(a) * R * (0.6 + j * 0.6), vx: 0, vy: 0 };
    });
    const index = {};
    nodes.forEach((nd, i) => { index[nd.id] = i; });
    const edges = links
      .map((l) => ({ a: index[l.source], b: index[l.target], k: l.strength == null ? 1 : l.strength }))
      .filter((e) => e.a != null && e.b != null);
    const radius = nodes.map((nd) => 5 + Math.min(9, (nd.value || 1) * 1.6));

    const step = (alpha) => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          let dx = pos[j].x - pos[i].x, dy = pos[j].y - pos[i].y;
          let d2 = dx * dx + dy * dy || 0.01;
          const min = (radius[i] + radius[j] + 26);
          const f = (2200 / d2) * alpha;
          const d = Math.sqrt(d2);
          const push = d < min ? f + (min - d) * 0.12 * alpha : f;
          const ux = dx / d, uy = dy / d;
          pos[i].vx -= ux * push; pos[i].vy -= uy * push;
          pos[j].vx += ux * push; pos[j].vy += uy * push;
        }
      }
      for (const e of edges) {
        const dx = pos[e.b].x - pos[e.a].x, dy = pos[e.b].y - pos[e.a].y;
        const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
        const target = 78 / (0.6 + e.k);
        const f = (d - target) * 0.035 * e.k * alpha;
        const ux = dx / d, uy = dy / d;
        pos[e.a].vx += ux * f; pos[e.a].vy += uy * f;
        pos[e.b].vx -= ux * f; pos[e.b].vy -= uy * f;
      }
      for (let i = 0; i < nodes.length; i++) {
        pos[i].vx += (cx - pos[i].x) * 0.012 * alpha;
        pos[i].vy += (cy - pos[i].y) * 0.012 * alpha;
        pos[i].x += (pos[i].vx *= 0.82);
        pos[i].y += (pos[i].vy *= 0.82);
        const pad = radius[i] + (showLabels ? 16 : 6);
        pos[i].x = Math.max(pad, Math.min(width - pad, pos[i].x));
        pos[i].y = Math.max(pad, Math.min(height - pad - (showLabels ? 8 : 0), pos[i].y));
      }
    };

    sim.current = { pos, alpha: 1, radius, edges, index };

    if (reduced) {
      for (let i = 0; i < iterations; i++) step(Math.max(0.08, 1 - i / iterations));
      setTick((t) => t + 1);
      return undefined;
    }
    let frame, alpha = 1, raf = 0;
    const loop = () => {
      step(alpha);
      alpha *= 0.955;
      sim.current.alpha = alpha;
      setTick((t) => t + 1);
      raf += 1;
      if (alpha > 0.008 && raf < iterations) frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [key]);

  const { pos, radius, edges, index } = sim.current;

  const neighbours = React.useMemo(() => {
    if (!hover || !edges || !index) return null;
    const i = index[hover];
    const set = { [i]: 1 };
    edges.forEach((e) => { if (e.a === i) set[e.b] = 1; if (e.b === i) set[e.a] = 1; });
    return set;
  }, [hover, key, tick > 0]);

  if (!pos || !pos.length) return <div className={'lamp-graph ' + className} style={style}><svg width="100%" height={height} /></div>;

  const dim = (i) => (neighbours && !neighbours[i] ? 0.18 : 1);

  return (
    <div className={'lamp-graph ' + className} style={style}>
      <svg width="100%" height={height} viewBox={'0 0 ' + width + ' ' + height} role="img"
        aria-label={'Memory graph, ' + nodes.length + ' items and ' + links.length + ' relationships'} {...rest}>
        <g>
          {(edges || []).map((e, i) => {
            const l = links[i] || {};
            const on = !neighbours || (neighbours[e.a] && neighbours[e.b]);
            return (
              <line key={i} x1={pos[e.a].x} y1={pos[e.a].y} x2={pos[e.b].x} y2={pos[e.b].y}
                stroke={l.kind === 'inferred' ? 'var(--purple-400)' : l.kind === 'conflict' ? 'var(--status-danger)' : 'var(--border-strong)'}
                strokeWidth={l.kind === 'conflict' ? 1.5 : 1}
                strokeDasharray={l.kind === 'inferred' || l.kind === 'suggested' ? '3 3' : undefined}
                opacity={on ? (neighbours ? 0.9 : 0.5) : 0.1} />
            );
          })}
        </g>
        <g>
          {nodes.map((nd, i) => {
            const r = radius[i];
            const color = nd.color || KIND_COLOR[nd.kind] || KIND_COLOR.fact;
            const shape = SHAPE[nd.kind];
            const isSel = selectedId === nd.id;
            const path = shapePath(shape, r);
            return (
              <g key={nd.id} transform={'translate(' + pos[i].x.toFixed(1) + ',' + pos[i].y.toFixed(1) + ')'}
                opacity={dim(i)} style={{ cursor: onSelect ? 'pointer' : 'default' }}
                onMouseEnter={() => { setHover(nd.id); onHover && onHover(nd); }}
                onMouseLeave={() => { setHover(null); onHover && onHover(null); }}
                onClick={onSelect ? () => onSelect(nd) : undefined}>
                {isSel ? (path
                  ? <path d={shapePath(shape, r + 4)} fill="none" stroke="var(--gold-500)" strokeWidth={1.5} />
                  : <circle r={r + 4} fill="none" stroke="var(--gold-500)" strokeWidth={1.5} />) : null}
                {path
                  ? <path d={path} fill={color} stroke="var(--surface-primary)" strokeWidth={1} />
                  : <circle r={r} fill={color} stroke="var(--surface-primary)" strokeWidth={1} />}
                {showLabels && r >= labelMinRadius ? (
                  <text y={r + 11} textAnchor="middle" style={{ fill: 'var(--text-secondary)', font: '500 10px var(--font-sans)', pointerEvents: 'none' }}>
                    {nd.label}
                  </text>
                ) : null}
                <title>{nd.label + (nd.detail ? ' — ' + nd.detail : '')}</title>
              </g>
            );
          })}
        </g>
      </svg>
      {legend ? (
        <div className="lamp-graph__legend">
          {[['fact', 'Fact'], ['policy', 'Policy'], ['observed', 'Observed'], ['inferred', 'Inferred'], ['exception', 'Exception'], ['entity', 'Entity'], ['agent', 'Agent'], ['tool', 'Tool'], ['scope', 'Scope']].map(([k, label]) => (
            <span className="lamp-graph__key" key={k}>
              <span className={'lamp-graph__swatch lamp-graph__swatch--' + (SHAPE[k] || 'circle')} style={{ background: KIND_COLOR[k] }} />
              {label}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
