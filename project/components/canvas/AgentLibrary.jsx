import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';
import { SearchInput } from '../forms/TextInput.jsx';
import { AgentHex } from '../objects/AgentHex.jsx';
import { useGsap } from './CanvasMotion.jsx';
import { useMergedRefs } from '../core/refs.js';

/* The library an Agent is dragged onto the canvas from.

   Creating an Agent used to mean a command-palette entry that dropped a blank
   hexagon somewhere and left the operator to configure it afterwards. Dragging
   one out of a library answers two questions the blank hexagon leaves open —
   what kind of Agent, and where it goes — in the same gesture, and the archetype
   arrives already carrying a purpose, the Skills it needs and the Tools it
   usually touches.

   The drag is a GHOST, not the list item. The item stays put, so the library
   never looks like it is being emptied, and the ghost is the Agent as it will
   appear on the canvas — an AgentHex at the real lattice size, so the operator
   is judging the actual object against the actual spacing while they aim.

   Dropping does not create anything on its own. It reports the point, and the
   canvas resolves it to a free lattice cell and opens NewAgentDialog. An Agent
   that appears the instant a pointer is released is an Agent nobody named, and
   the whole system rests on Agents being named for the work they do. */

/** Sensible starting archetypes. Replace wholesale via the `archetypes` prop. */
export const AGENT_ARCHETYPES = [
  {
    id: 'coordinator', name: 'Coordinator', role: 'coordinator', glyph: 'account_tree',
    purpose: 'Receives the work, decides what happens next, and hands off.',
    skills: ['classify', 'route'], tools: [], group: 'Roles',
  },
  {
    id: 'specialist', name: 'Specialist', role: 'specialist', glyph: 'target',
    purpose: 'Does one thing well — match, reconcile, verify, extract.',
    skills: ['extract', 'verify'], tools: [], group: 'Roles',
  },
  {
    id: 'approver', name: 'Human-supervised', role: 'humanSupervised', glyph: 'supervisor_account',
    purpose: 'Prepares a decision and waits for a person to make it.',
    skills: ['summarize'], tools: [], group: 'Roles',
    checkpoint: true,
  },
  {
    id: 'watcher', name: 'Watcher', role: 'standard', glyph: 'visibility',
    purpose: 'Observes a system and raises the exceptions worth acting on.',
    skills: ['monitor', 'classify'], tools: [], group: 'Roles',
  },
  {
    id: 'invoice-matcher', name: 'Invoice Matcher', role: 'specialist', glyph: 'receipt_long',
    purpose: 'Matches an invoice to its purchase order and receipt.',
    skills: ['extract', 'reconcile'], tools: ['sap'], group: 'Finance',
  },
  {
    id: 'vendor-verifier', name: 'Vendor Verifier', role: 'specialist', glyph: 'fact_check',
    purpose: 'Checks a supplier exists, is approved, and its bank details hold.',
    skills: ['verify', 'search'], tools: ['sap'], group: 'Finance',
  },
  {
    id: 'reconciler', name: 'Reconciler', role: 'specialist', glyph: 'balance',
    purpose: 'Reconciles accounts and explains what does not tie out.',
    skills: ['reconcile'], tools: ['sap'], group: 'Finance',
  },
  {
    id: 'triager', name: 'Triager', role: 'coordinator', glyph: 'forum',
    purpose: 'Classifies an incoming issue and routes it to whoever resolves it.',
    skills: ['classify', 'route'], tools: ['zendesk'], group: 'Customer operations',
  },
  {
    id: 'collections', name: 'Collections Agent', role: 'standard', glyph: 'schedule',
    purpose: 'Chases an overdue invoice, and stops the moment it is paid.',
    skills: ['schedule', 'summarize'], tools: ['gmail'], group: 'Finance',
  },
];

export const AgentLibrary = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function AgentLibrary({
  archetypes = AGENT_ARCHETYPES,
  size = 'sm',
  title = 'Agents',
  searchable = true,
  dropTarget,
  onAdd,
  onDrop,
  disabled = false,
  className = '',
  ...rest
}, ref) {
  const api = useGsap();
  const [query, setQuery] = React.useState('');
  const [dragging, setDragging] = React.useState(null);

  const ghostRef = React.useRef(null);
  const rootRef = React.useRef(null);
  const setRoot = useMergedRefs(ref, rootRef);
  const itemRefs = React.useRef({});

  const live = React.useRef({});
  live.current = { onDrop, dropTarget, archetypes };

  const shown = archetypes.filter((a) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (a.name + ' ' + a.purpose + ' ' + (a.skills || []).join(' ') + ' ' + a.group)
      .toLowerCase().includes(q);
  });

  const groups = [];
  for (const a of shown) {
    const g = groups.find((x) => x.name === a.group);
    if (g) g.items.push(a);
    else groups.push({ name: a.group, items: [a] });
  }

  /* One Draggable per item, dragging a proxy and drawing a ghost.

     Draggable always transforms the element it is created on. Created on the
     list item, it carries the item out of the panel and leaves a hole in the
     list, so it is created on a throwaway proxy instead and only `trigger`
     points at the item — the item is then genuinely never moved.

     Each item needs its OWN proxy: Draggable allows one instance per element,
     and creating a second on the same node replaces the first, which would
     leave only the last item in the list draggable. */
  React.useEffect(() => {
    if (!api || disabled) return undefined;
    const { gsap, Draggable } = api;
    const ghost = ghostRef.current;
    const root = rootRef.current;
    const instances = [];
    const proxies = [];

    shown.forEach((archetype) => {
      const el = itemRefs.current[archetype.id];
      if (!el || !ghost || !root) return;

      const proxy = document.createElement('div');
      proxy.className = 'lamp-agentlib__proxy';
      proxy.setAttribute('aria-hidden', 'true');
      root.appendChild(proxy);
      proxies.push(proxy);

      const d = Draggable.create(proxy, {
        type: 'x,y',
        /* The press is on the list item; what moves is the proxy, which nobody
           can see. The ghost is positioned from the pointer directly. */
        trigger: el,
        cursor: 'grab',
        activeCursor: 'grabbing',
        onPress() {
          const box = el.getBoundingClientRect();
          gsap.set(ghost, {
            x: box.left + box.width / 2,
            y: box.top + box.height / 2,
            xPercent: -50,
            yPercent: -50,
            autoAlpha: 0,
          });
        },
        onDragStart() {
          setDragging(archetype);
          gsap.set(ghost, { autoAlpha: 1 });
        },
        onDrag(e) {
          const x = e.clientX != null ? e.clientX : this.pointerX;
          const y = e.clientY != null ? e.clientY : this.pointerY;
          gsap.set(ghost, { x, y });
        },
        onRelease(e) {
          gsap.set(proxy, { x: 0, y: 0 });
          gsap.set(ghost, { autoAlpha: 0 });
          setDragging(null);

          const x = e.clientX != null ? e.clientX : this.pointerX;
          const y = e.clientY != null ? e.clientY : this.pointerY;
          const target = live.current.dropTarget && live.current.dropTarget.current;
          const drop = live.current.onDrop;
          if (!target || !drop) return;

          const box = target.getBoundingClientRect();
          const inside = x >= box.left && x <= box.right && y >= box.top && y <= box.bottom;
          if (!inside) return;
          /* Point reported in the target's own coordinates — the canvas owns
             turning it into a lattice cell. */
          drop(archetype, { x: x - box.left, y: y - box.top });
        },
      })[0];
      if (d) instances.push(d);
    });

    return () => {
      instances.forEach((d) => d.kill());
      proxies.forEach((p) => p.remove());
    };
  }, [api, disabled, shown.map((a) => a.id).join('|')]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={setRoot} className={['lamp-agentlib', className].filter(Boolean).join(' ')} {...rest}>
      <div className="lamp-agentlib__head">
        <span className="lamp-agentlib__title">{title}</span>
        <span className="lamp-agentlib__hint">Drag onto the canvas</span>
      </div>

      {searchable ? (
        <div className="lamp-agentlib__search">
          <SearchInput
            size="sm"
            value={query}
            placeholder="Find an Agent"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      ) : null}

      <div className="lamp-agentlib__list">
        {groups.map((g) => (
          <div key={g.name} className="lamp-agentlib__group">
            <span className="lamp-agentlib__grouplabel">{g.name}</span>
            {g.items.map((a) => (
              <div
                key={a.id}
                ref={(el) => { if (el) itemRefs.current[a.id] = el; else delete itemRefs.current[a.id]; }}
                className={'lamp-agentlib__item' + (dragging && dragging.id === a.id ? ' lamp-agentlib__item--dragging' : '')}
                role="button"
                tabIndex={0}
                aria-label={'Add ' + a.name}
                /* Click and Enter are the non-drag path — every creation route
                   in LAMP has one. Both open the same dialog. */
                onClick={() => onAdd && onAdd(a)}
                onKeyDown={(e) => {
                  if (e.key !== 'Enter' && e.key !== ' ') return;
                  e.preventDefault();
                  if (onAdd) onAdd(a);
                }}
              >
                <span className="lamp-agentlib__glyph"><Icon name={a.glyph} size={16} /></span>
                <span className="lamp-agentlib__body">
                  <span className="lamp-agentlib__name">
                    {a.name}
                    {a.checkpoint ? <Badge tone="waiting" micro>Human</Badge> : null}
                  </span>
                  <span className="lamp-agentlib__purpose">{a.purpose}</span>
                </span>
                <span className="lamp-agentlib__grip" aria-hidden="true">
                  <Icon name="drag_indicator" size={14} />
                </span>
              </div>
            ))}
          </div>
        ))}
        {!shown.length ? (
          <p className="lamp-agentlib__empty">No Agent matches “{query}”.</p>
        ) : null}
      </div>

      {/* The ghost. Fixed to the viewport so it is not clipped by the panel. */}
      <div ref={ghostRef} className="lamp-agentlib__ghost" aria-hidden="true">
        {dragging ? (
          <AgentHex size={size} detail="glyph" glyph={dragging.glyph} role={dragging.role} state="snapReady" />
        ) : null}
      </div>
    </div>
  );
}), { displayName: 'AgentLibrary' });
