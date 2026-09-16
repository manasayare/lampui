import React from 'react';

/* A group inside a Playbook section: one bonded cluster, or a single Agent working alone.
   Bonds exist only inside an island; membership in the Playbook is carried by the frame. */
export const AgentIsland = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function AgentIsland({ name, note, solo = false, outlined = false, selected = false, x, y, actions, children, className = '', style, ...rest }, ref) {
  const positioned = x != null || y != null;
  return (
    <div ref={ref} className={['lamp-island', solo && 'lamp-island--solo', outlined && 'lamp-island--outlined', selected && 'lamp-island--selected', className].filter(Boolean).join(' ')}
      style={positioned ? { position: 'absolute', left: x, top: y, ...style } : style} {...rest}>
      {(name || note || actions) ? (
        <div className="lamp-island__head">
          {name ? <span className="lamp-island__name">{name}</span> : null}
          {note ? <span className="lamp-island__note">{note}</span> : null}
          {actions ? <span style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>{actions}</span> : null}
        </div>
      ) : null}
      <div className="lamp-island__body">{children}</div>
    </div>
  );
}), { displayName: 'AgentIsland' });
