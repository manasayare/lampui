import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';
import { Button } from '../core/Button.jsx';
import { Modal } from '../feedback/Modal.jsx';
import { Checkbox } from '../forms/Checkbox.jsx';
import { TextInput } from '../forms/TextInput.jsx';
import { Textarea } from '../forms/Textarea.jsx';
import { Tabs } from '../navigation/Tabs.jsx';
import { ToolTile } from '../objects/ToolTile.jsx';
import { StatusDot } from '../core/StatusBadge.jsx';
import { MatchProcess, BUSINESS_PROCESSES, BLANK_PROCESS, ProcessProposal } from './BusinessProcess.jsx';

/* What opens when Agents are outlined into a Playbook.

   The operator has just drawn a box round four hexagons. They know these Agents
   belong together. They almost certainly cannot tell you, cold, what the
   business process is called, which systems it has to touch, or what "working"
   would look like — and a blank form asking for exactly that is how you end up
   with a Playbook running in production that nobody has defined success for.

   So the dialog opens already filled in. LAMP matches the selection against the
   standard process library, proposes the best fit with its reasoning visible,
   and pre-fills the name, purpose, trigger, connectors, expected outcomes and
   human checkpoints from that process. The operator's job becomes reviewing and
   correcting rather than authoring — which is a job people can actually do.

   Three rules hold this together:

   1. NOTHING IS ACCEPTED SILENTLY. Every pre-filled outcome and connector is a
      checkbox, unticked items are dropped, and the proposal shows what it matched
      on so it can be argued with.
   2. THE PROPOSAL IS NEVER THE ONLY OPTION. Other matches are listed, the whole
      library is browsable, and "Something else" starts blank.
   3. OUTCOMES ARE NOT OPTIONAL. A Playbook with no expected outcome cannot be
      simulated against anything and cannot be said to have failed. The dialog
      says so rather than letting it through quietly.

   Connectors show live connection state, so "this process needs SAP write access
   and you do not have it" is visible here — before the Playbook exists — rather
   than at the first failed run. */

const STEP_GLYPH = { agent: 'hexagon', human: 'how_to_reg', tool: 'square', decision: 'call_split' };

function keyOf(list) {
  const map = {};
  list.forEach((item, i) => { map[item.id != null ? item.id : i] = true; });
  return map;
}

export function PlaybookComposer({
  open = true, agents = [], availableTools = [], suggestions,
  onCreate, onCancel, onPreviewGenie, allowGenie = true, className = '', ...rest
}) {
  /* Matches are derived from the selection, not held in state — reselecting on
     the canvas must not leave a stale proposal behind. */
  const matches = React.useMemo(
    () => suggestions || MatchProcess({ agents, tools: availableTools }),
    [suggestions, agents, availableTools],
  );

  const best = matches[0] || null;
  const [chosen, setChosen] = React.useState(() => (best ? best.process : BLANK_PROCESS));
  const [tab, setTab] = React.useState('process');
  const [browsing, setBrowsing] = React.useState(false);

  const [name, setName] = React.useState(chosen.name === BLANK_PROCESS.name ? '' : chosen.name);
  const [purpose, setPurpose] = React.useState(chosen.purpose);
  const [trigger, setTrigger] = React.useState(chosen.trigger);
  const [outcomes, setOutcomes] = React.useState(() => keyOf(chosen.outcomes || []));
  const [connectors, setConnectors] = React.useState(() => keyOf(chosen.connectors || []));
  const [checkpoints, setCheckpoints] = React.useState(() => keyOf(chosen.checkpoints || []));
  const [extraOutcome, setExtraOutcome] = React.useState('');
  const [extras, setExtras] = React.useState([]);
  const [makeGenie, setMakeGenie] = React.useState(false);

  /* Picking a different process refills the form. Anything the operator has
     already typed into name/purpose is theirs and is left alone. */
  const pick = (process) => {
    setChosen(process);
    setBrowsing(false);
    setName((prev) => (prev && prev !== chosen.name ? prev : process.name === BLANK_PROCESS.name ? '' : process.name));
    setPurpose((prev) => (prev && prev !== chosen.purpose ? prev : process.purpose));
    setTrigger((prev) => (prev && prev !== chosen.trigger ? prev : process.trigger));
    setOutcomes(keyOf(process.outcomes || []));
    setConnectors(keyOf(process.connectors || []));
    setCheckpoints(keyOf(process.checkpoints || []));
  };

  const toggle = (setter) => (key) => setter((m) => ({ ...m, [key]: !m[key] }));

  const connectionFor = (connector) => {
    const provider = (connector.providers || []).find((p) =>
      availableTools.some((t) => (t.provider || t.id || t) === p),
    );
    if (!provider) return { state: 'missing', label: 'Not connected', provider: (connector.providers || [])[0] };
    const tool = availableTools.find((t) => (t.provider || t.id || t) === provider);
    const state = (tool && tool.state) || 'connected';
    return {
      state,
      provider,
      label: state === 'connected' || state === 'healthy' ? 'Connected'
        : state === 'authorizationRequired' ? 'Needs authorization'
        : state === 'expired' ? 'Credentials expired'
        : state,
    };
  };

  const chosenOutcomes = (chosen.outcomes || [])
    .filter((o, i) => outcomes[o.id != null ? o.id : i])
    .concat(extras.map((label) => ({ label, measure: 'Defined by you', target: '' })));

  const chosenConnectors = (chosen.connectors || []).filter((c, i) => connectors[c.id != null ? c.id : i]);
  const chosenCheckpoints = (chosen.checkpoints || []).filter((c, i) => checkpoints[c.id != null ? c.id : i]);

  const blockers = [];
  if (!name.trim()) blockers.push('Give the Playbook a name.');
  if (!chosenOutcomes.length) blockers.push('Choose at least one expected outcome — without one the Playbook cannot be simulated or judged.');

  const missingConnectors = chosenConnectors.filter((c) => connectionFor(c).state === 'missing');

  const build = () => ({
    name: name.trim(),
    purpose,
    trigger,
    processId: chosen.id,
    processName: chosen.name,
    domain: chosen.domain,
    agents,
    steps: chosen.steps || [],
    outcomes: chosenOutcomes,
    connectors: chosenConnectors,
    checkpoints: chosenCheckpoints,
    exceptions: chosen.exceptions || [],
    createGenie: makeGenie,
  });

  const tabs = [
    { id: 'process', label: 'Process' },
    { id: 'connectors', label: 'Connectors', count: chosenConnectors.length },
    { id: 'outcomes', label: 'Outcomes', count: chosenOutcomes.length },
  ];

  return (
    <Modal
      open={open}
      size="lg"
      glyph="layers"
      title="Make these Agents a Playbook"
      subtitle={agents.length + ' Agents selected. LAMP has suggested what this process is — correct anything that is wrong.'}
      onClose={onCancel}
      className={'lamp-composer ' + className}
      footer={
        <React.Fragment>
          <span className="lamp-composer__footnote">
            {blockers.length
              ? <span className="lamp-composer__blocker"><Icon name="warning" size={13} />{blockers[0]}</span>
              : missingConnectors.length
                ? <span className="lamp-composer__blocker"><Icon name="link_off" size={13} />{missingConnectors.length} connector{missingConnectors.length > 1 ? 's' : ''} still need authorizing. The Playbook can be drafted without them.</span>
                : <span>Draft only. Nothing runs until you simulate it.</span>}
          </span>
          <Button variant="quiet" onClick={onCancel}>Cancel</Button>
          <Button
            variant="primary"
            icon="check"
            disabled={!!blockers.length}
            onClick={() => onCreate && onCreate(build())}
          >
            {makeGenie ? 'Create Playbook and Genie' : 'Create Playbook'}
          </Button>
        </React.Fragment>
      }
      {...rest}
    >
      <div className="lamp-composer__selection">
        {agents.map((a) => (
          <span key={a.id || a.name} className="lamp-composer__agent">
            <Icon name="hexagon" size={13} />
            {a.name}
            {a.role ? <span className="lamp-composer__role">{a.role}</span> : null}
          </span>
        ))}
      </div>

      {best && !browsing ? (
        <ProcessProposal
          primary
          match={best}
          selected={chosen.id === best.process.id}
          onUse={pick}
          onDismiss={() => setBrowsing(true)}
        />
      ) : null}

      {browsing || !best ? (
        <div className="lamp-composer__browse">
          <div className="lamp-composer__browse-head">
            <span>Pick the process this is</span>
            {best ? <Button size="xs" variant="quiet" onClick={() => setBrowsing(false)}>Back to the suggestion</Button> : null}
          </div>
          <div className="lamp-composer__browse-list">
            {BUSINESS_PROCESSES.concat([BLANK_PROCESS]).map((p) => (
              <button
                key={p.id}
                type="button"
                className={'lamp-composer__browse-item' + (chosen.id === p.id ? ' lamp-composer__browse-item--active' : '')}
                onClick={() => pick(p)}
              >
                <span className="lamp-composer__browse-name">{p.name}</span>
                <span className="lamp-composer__browse-domain">{p.domain}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {matches.length > 1 && !browsing ? (
        <div className="lamp-composer__alts">
          <span>Or:</span>
          {matches.slice(1, 4).map((m) => (
            <button key={m.process.id} type="button" className="lamp-composer__alt" onClick={() => pick(m.process)}>
              {m.process.name}
            </button>
          ))}
          <button type="button" className="lamp-composer__alt" onClick={() => setBrowsing(true)}>Something else</button>
        </div>
      ) : null}

      <Tabs tabs={tabs} value={tab} onChange={setTab} />

      {tab === 'process' ? (
        <div className="lamp-composer__pane">
          <label className="lamp-composer__label" htmlFor="pb-name">Name</label>
          <TextInput id="pb-name" value={name} placeholder="Vendor payment" onChange={(e) => setName(e.target.value)} />

          <label className="lamp-composer__label" htmlFor="pb-purpose">Purpose</label>
          <Textarea id="pb-purpose" rows={2} value={purpose} placeholder="What this process is for, in one sentence." onChange={(e) => setPurpose(e.target.value)} />

          <label className="lamp-composer__label" htmlFor="pb-trigger">Trigger</label>
          <TextInput id="pb-trigger" value={trigger} placeholder="What starts a run." onChange={(e) => setTrigger(e.target.value)} />

          {chosen.steps && chosen.steps.length ? (
            <React.Fragment>
              <span className="lamp-composer__label">Usual shape of this process</span>
              <ol className="lamp-composer__steps">
                {chosen.steps.map((s, i) => (
                  <li key={s.name} className={'lamp-composer__step lamp-composer__step--' + s.kind}>
                    <span className="lamp-composer__step-n">{i + 1}</span>
                    <Icon name={STEP_GLYPH[s.kind] || 'hexagon'} size={13} />
                    <span>{s.name}</span>
                    {s.kind === 'human' ? <Badge tone="waiting" micro>Human</Badge> : null}
                  </li>
                ))}
              </ol>
              <p className="lamp-composer__hint">
                Execution order lives in the runtime, not in how the Agents are arranged on the canvas. You can change this later in the Inspector.
              </p>
            </React.Fragment>
          ) : null}

          {chosen.exceptions && chosen.exceptions.length ? (
            <React.Fragment>
              <span className="lamp-composer__label">What usually goes wrong</span>
              <div className="lamp-composer__chips">
                {chosen.exceptions.map((e) => <Badge key={e} tone="warning" icon="report" micro>{e}</Badge>)}
              </div>
            </React.Fragment>
          ) : null}
        </div>
      ) : null}

      {tab === 'connectors' ? (
        <div className="lamp-composer__pane">
          <p className="lamp-composer__hint">
            The systems this process has to touch. Untick anything it does not need — each one is an access grant.
          </p>
          {(chosen.connectors || []).length === 0 ? (
            <p className="lamp-composer__empty">No connectors suggested. Add Tools to the Agents and they will appear here.</p>
          ) : null}
          {(chosen.connectors || []).map((c, i) => {
            const key = c.id != null ? c.id : i;
            const conn = connectionFor(c);
            return (
              <div key={key} className="lamp-composer__conn">
                <Checkbox checked={!!connectors[key]} onChange={() => toggle(setConnectors)(key)} />
                <ToolTile size="sm" provider={conn.provider} state={conn.state === 'missing' ? 'available' : conn.state} name={c.category} />
                <span className="lamp-composer__conn-main">
                  <span className="lamp-composer__conn-name">{c.category}</span>
                  <span className="lamp-composer__conn-why">{c.why}</span>
                </span>
                <Badge outline micro>{c.permission}</Badge>
                <span className={'lamp-composer__conn-state lamp-composer__conn-state--' + conn.state}>
                  <StatusDot status={conn.state === 'missing' ? 'blocked' : conn.state === 'connected' || conn.state === 'healthy' ? 'success' : 'attention'} />
                  {conn.label}
                </span>
              </div>
            );
          })}
        </div>
      ) : null}

      {tab === 'outcomes' ? (
        <div className="lamp-composer__pane">
          <p className="lamp-composer__hint">
            What this Playbook is supposed to achieve, and how you would know. Simulation is judged against these, so a Playbook with none cannot pass or fail.
          </p>
          {(chosen.outcomes || []).map((o, i) => {
            const key = o.id != null ? o.id : i;
            return (
              <div key={key} className="lamp-composer__outcome">
                <Checkbox checked={!!outcomes[key]} onChange={() => toggle(setOutcomes)(key)} />
                <span className="lamp-composer__outcome-main">
                  <span className="lamp-composer__outcome-label">{o.label}</span>
                  <span className="lamp-composer__outcome-measure">{o.measure}</span>
                </span>
                {o.target ? <Badge outline micro>{o.target}</Badge> : null}
              </div>
            );
          })}

          {extras.map((label) => (
            <div key={label} className="lamp-composer__outcome">
              <Checkbox checked readOnly />
              <span className="lamp-composer__outcome-main">
                <span className="lamp-composer__outcome-label">{label}</span>
                <span className="lamp-composer__outcome-measure">Added by you</span>
              </span>
              <Button size="xs" variant="quiet" onClick={() => setExtras(extras.filter((x) => x !== label))}>Remove</Button>
            </div>
          ))}

          <div className="lamp-composer__addrow">
            <TextInput
              value={extraOutcome}
              placeholder="Add an outcome of your own"
              onChange={(e) => setExtraOutcome(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== 'Enter' || !extraOutcome.trim()) return;
                e.preventDefault();
                setExtras(extras.concat([extraOutcome.trim()]));
                setExtraOutcome('');
              }}
            />
            <Button
              size="sm"
              variant="secondary"
              icon="add"
              disabled={!extraOutcome.trim()}
              onClick={() => { setExtras(extras.concat([extraOutcome.trim()])); setExtraOutcome(''); }}
            >
              Add
            </Button>
          </div>

          {(chosen.checkpoints || []).length ? (
            <React.Fragment>
              <span className="lamp-composer__label">Where a person decides</span>
              {(chosen.checkpoints || []).map((c, i) => {
                const key = c.id != null ? c.id : i;
                return (
                  <div key={key} className="lamp-composer__outcome">
                    <Checkbox checked={!!checkpoints[key]} onChange={() => toggle(setCheckpoints)(key)} />
                    <span className="lamp-composer__outcome-main">
                      <span className="lamp-composer__outcome-label">{c.name}</span>
                      <span className="lamp-composer__outcome-measure">{c.when}</span>
                    </span>
                  </div>
                );
              })}
            </React.Fragment>
          ) : null}
        </div>
      ) : null}

      {allowGenie && chosen.id !== BLANK_PROCESS.id ? (
        <div className="lamp-composer__genie">
          <Checkbox
            checked={makeGenie}
            onChange={() => setMakeGenie(!makeGenie)}
            label={'Also create a ' + chosen.domain + ' Genie'}
            description={'Sets up the Genie this process belongs to, with its memory, guardrails and the other Playbooks it usually contains — as drafts.'}
          />
          {makeGenie && onPreviewGenie ? (
            <Button size="sm" variant="secondary" icon="visibility" onClick={() => onPreviewGenie(chosen)}>
              Preview what gets created
            </Button>
          ) : null}
        </div>
      ) : null}
    </Modal>
  );
}
