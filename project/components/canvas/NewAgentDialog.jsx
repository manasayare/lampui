import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';
import { Button } from '../core/Button.jsx';
import { Modal } from '../feedback/Modal.jsx';
import { TextInput } from '../forms/TextInput.jsx';
import { Textarea } from '../forms/Textarea.jsx';
import { Select } from '../forms/Select.jsx';
import { TagInput } from '../forms/TagInput.jsx';
import { Checkbox } from '../forms/Checkbox.jsx';
import { AgentHex } from '../objects/AgentHex.jsx';
import { ToolTile } from '../objects/ToolTile.jsx';

/* The dialog that opens when an Agent is dropped on the canvas.

   An Agent created by a pointer release alone is an Agent nobody named, and the
   whole ontology rests on Agents being named for the work they do — Invoice
   Matcher, Vendor Verifier, Payment Approver. So the drop opens this instead of
   creating anything, and the archetype arrives pre-filled: a role, a purpose,
   the Skills it needs and the Tools it usually touches. The operator confirms
   or corrects, which is a job people can do, rather than authoring from blank,
   which they cannot.

   Two rules it enforces:

   1. A NAME IS REQUIRED. Everything else has a workable default; a name does
      not, because "Agent 4" on a canvas of thirty tells a reader nothing.
   2. AUTHORITY STARTS AT ITS LOWEST. A new Agent proposes; it does not act.
      Raising that is a deliberate, separate decision in the Inspector, never a
      default carried in from a template.

   Where the Agent lands is already decided — the drop resolved it to a free
   lattice cell — so the dialog shows that cell rather than asking again. */

const ROLES = [
  { value: 'standard', label: 'Standard — works on its own' },
  { value: 'coordinator', label: 'Coordinator — routes and hands off' },
  { value: 'specialist', label: 'Specialist — does one thing well' },
  { value: 'humanSupervised', label: 'Human-supervised — a person decides' },
  { value: 'system', label: 'System — internal plumbing' },
  { value: 'external', label: 'External — someone else operates it' },
];

export const NewAgentDialog = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function NewAgentDialog({
  open = true,
  archetype,
  cell,
  availableTools = [],
  onCreate,
  onCancel,
  className = '',
  ...rest
}, ref) {
  const base = archetype || {};
  const [name, setName] = React.useState(base.name || '');
  const [role, setRole] = React.useState(base.role || 'standard');
  const [purpose, setPurpose] = React.useState(base.purpose || '');
  const [skills, setSkills] = React.useState(base.skills || []);
  const [tools, setTools] = React.useState(base.tools || []);
  const [checkpoint, setCheckpoint] = React.useState(!!base.checkpoint);

  /* Re-seed when a different archetype is dropped without the dialog closing. */
  const seed = base.id;
  React.useEffect(() => {
    setName(base.name || '');
    setRole(base.role || 'standard');
    setPurpose(base.purpose || '');
    setSkills(base.skills || []);
    setTools(base.tools || []);
    setCheckpoint(!!base.checkpoint);
  }, [seed]); // eslint-disable-line react-hooks/exhaustive-deps

  const named = name.trim().length > 0;

  const toggleTool = (provider) =>
    setTools((t) => (t.includes(provider) ? t.filter((x) => x !== provider) : t.concat([provider])));

  const build = () => ({
    name: name.trim(),
    role,
    purpose: purpose.trim(),
    skills,
    tools,
    checkpoint,
    /* A new Agent proposes. Acting is a decision taken deliberately, later. */
    authority: 'propose',
    state: 'unconfigured',
    col: cell ? cell.col : 0,
    row: cell ? cell.row : 0,
  });

  return (
    <Modal
      ref={ref}
      open={open}
      size="md"
      glyph="hexagon"
      title="New Agent"
      subtitle={archetype ? 'From the ' + archetype.name + ' template. Correct anything that is wrong.' : 'Name it for the work it does.'}
      onClose={onCancel}
      className={'lamp-newagent ' + className}
      footer={
        <React.Fragment>
          <span className="lamp-newagent__footnote">
            {named
              ? 'Created as a draft. It proposes until you raise its authority.'
              : (<span className="lamp-newagent__blocker"><Icon name="warning" size={13} />Give it a name — Agents are named for the work they do.</span>)}
          </span>
          <Button variant="quiet" onClick={onCancel}>Cancel</Button>
          <Button variant="primary" icon="check" disabled={!named} onClick={() => onCreate && onCreate(build())}>
            Add Agent
          </Button>
        </React.Fragment>
      }
      {...rest}
    >
      <div className="lamp-newagent__preview">
        <AgentHex size="lg" detail="glyph" glyph={base.glyph} role={role} state="unconfigured" />
        <div className="lamp-newagent__previewmeta">
          <span className="lamp-newagent__previewname">{name.trim() || 'Unnamed Agent'}</span>
          {cell ? (
            <span className="lamp-newagent__cell">
              <Icon name="near_me" size={12} />
              Lands at column {cell.col}, row {cell.row}
            </span>
          ) : null}
          <Badge outline micro>Proposes only</Badge>
        </div>
      </div>

      <label className="lamp-newagent__label" htmlFor="na-name">Name</label>
      <TextInput
        id="na-name"
        value={name}
        autoFocus
        placeholder="Invoice Matcher"
        onChange={(e) => setName(e.target.value)}
      />

      <label className="lamp-newagent__label" htmlFor="na-role">Role</label>
      <Select id="na-role" value={role} options={ROLES} onChange={(e) => setRole(e.target.value)} />

      <label className="lamp-newagent__label" htmlFor="na-purpose">Purpose</label>
      <Textarea
        id="na-purpose"
        rows={2}
        value={purpose}
        placeholder="What this Agent is for, in one sentence."
        onChange={(e) => setPurpose(e.target.value)}
      />

      <label className="lamp-newagent__label" htmlFor="na-skills">Skills</label>
      <TagInput id="na-skills" values={skills} onChange={setSkills} placeholder="Add a Skill" />

      {availableTools.length ? (
        <React.Fragment>
          <span className="lamp-newagent__label">Tools it may use</span>
          <div className="lamp-newagent__tools">
            {availableTools.map((t) => {
              const provider = t.provider || t.id;
              const on = tools.includes(provider);
              return (
                <button
                  key={provider}
                  type="button"
                  className={'lamp-newagent__tool' + (on ? ' lamp-newagent__tool--on' : '')}
                  aria-pressed={on}
                  onClick={() => toggleTool(provider)}
                >
                  <ToolTile size="sm" provider={provider} name={t.name} state={t.state || 'connected'} />
                  {t.name || provider}
                </button>
              );
            })}
          </div>
        </React.Fragment>
      ) : null}

      <div className="lamp-newagent__checkpoint">
        <Checkbox
          checked={checkpoint}
          onChange={() => setCheckpoint(!checkpoint)}
          label="A person decides before this Agent acts"
          description="Adds a human checkpoint. Required for anything that spends money or writes to a system of record."
        />
      </div>
    </Modal>
  );
}), { displayName: 'NewAgentDialog' });
