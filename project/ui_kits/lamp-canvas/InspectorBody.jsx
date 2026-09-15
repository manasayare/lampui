const L = window.LAMPDesignSystem_980d6d;

function InspectorBody({ agent, tab, environment }) {
  const { InspectorSection, PropertyRow, SkillOrb, ToolTile, EntityChip, MemoryScope, MemoryFact, Switch, Badge, Button, IconButton, StatusBadge, RunTimeline, MemoryUsageBar, ErrorState, Textarea } = L;
  if (tab === 'memory') {
    return (
      <>
        <InspectorSection label="Working memory" count={agent.memory}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <MemoryScope scope="agent" /><MemoryScope scope="playbook" /><MemoryScope scope="genie" /><MemoryScope scope="lamp" />
          </div>
          <PropertyRow label="Retrieval" value="On demand, evidence-first" />
          <PropertyRow label="Last retrieval" value="14:32:04" mono />
        </InspectorSection>
        <InspectorSection label="Context used" count="3,412">
          <MemoryUsageBar segments={[
            { key: 'agent', label: 'Agent working memory', value: 618 },
            { key: 'playbook', label: 'Playbook memory', value: 402 },
            { key: 'genie', label: 'Genie memory', value: 771 },
            { key: 'lamp', label: 'LAMP memory', value: 340 },
            { key: 'evidence', label: 'Retrieved evidence', value: 1281 },
          ]} />
        </InspectorSection>
        <InspectorSection label="Facts in scope" count={window.MEMORY.length}>
          {window.MEMORY.slice(0, 2).map((m) => <MemoryFact key={m.fact} {...m} onConfirm={() => {}} onCorrect={() => {}} />)}
        </InspectorSection>
      </>
    );
  }
  if (tab === 'runtime') {
    return (
      <>
        <InspectorSection label="Runtime" collapsible={false}>
          <PropertyRow label="State" value={<StatusBadge status={agent.status} />} />
          <PropertyRow label="Current task" value={agent.task} />
          <PropertyRow label="Environment" value={environment === 'simulation' ? 'Simulation' : 'Live'} />
          <PropertyRow label="Runs today" value="412" mono />
          <PropertyRow label="p95 duration" value="6.2s" mono />
          <PropertyRow label="Cost / run" value="$0.04" mono />
        </InspectorSection>
        {agent.status === 'error' ? (
          <InspectorSection label="Last failure" collapsible={false}>
            <ErrorState title="Salesforce write failed"
              happened="The connection was rejected after 3 attempts."
              notHappened="No opportunity records were created or modified."
              impact="4 invoices are waiting in this Playbook."
              recovery="Reconnect the Salesforce account, then retry the run."
              code="tool_auth_expired" onRetry={() => {}} />
          </InspectorSection>
        ) : null}
        <InspectorSection label="Recent steps">
          <RunTimeline steps={[
            { state: 'success', title: 'Invoice extracted', tools: ['Google Drive'], duration: '1.2s', tokens: '812' },
            { state: 'success', title: 'Matched to PO-9921', memory: 'Genie memory', duration: '0.6s' },
            { state: agent.status === 'error' ? 'failed' : 'running', title: agent.status === 'error' ? 'Ledger write failed' : 'Verifying vendor', tools: ['SAP'], duration: '3.1s' },
          ]} />
        </InspectorSection>
      </>
    );
  }
  return (
    <>
      <InspectorSection label="Purpose" collapsible={false}>
        <Textarea rows={3} defaultValue={agent.purpose} />
      </InspectorSection>
      <InspectorSection label="Skills" count={agent.skills.length} actions={<IconButton icon="add" label="Add Skill" size="xs" />}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {agent.skills.map((s) => <SkillOrb key={s[0]} name={s[0]} glyph={s[1]} state={agent.status === 'running' ? 'active' : 'attached'} label />)}
        </div>
      </InspectorSection>
      <InspectorSection label="Tools" count={agent.tools.length} actions={<IconButton icon="add" label="Connect Tool" size="xs" />}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {agent.tools.map((t) => <ToolTile key={t[1]} provider={t[0]} name={t[1]} state={agent.status === 'error' ? 'error' : 'connected'} />)}
        </div>
      </InspectorSection>
      <InspectorSection label="Authority">
        <PropertyRow label="Approval limit" value={agent.limit} mono />
        <PropertyRow label="Escalation" value={<EntityChip type="person" name="Asha Rao" initials="AR" />} />
        <PropertyRow label="External writes" inherited value="Allowed" />
        <PropertyRow label="Delegation" value={<Switch defaultChecked={agent.role === 'coordinator'} />} />
      </InspectorSection>
      <InspectorSection label="Guardrails" count={3}>
        <PropertyRow label="Max spend / run" value="₹250,000" mono />
        <PropertyRow label="Blocked actions" value={<Badge tone="danger" icon="block">Delete records</Badge>} />
        <PropertyRow label="Human checkpoint" value="Above authority limit" />
      </InspectorSection>
      <InspectorSection label="Advanced" advanced>
        <PropertyRow label="Model" value="Default routing" />
        <PropertyRow label="Retry policy" value="3 attempts, exponential" />
        <PropertyRow label="Agent ID" value="ag_4b21c9" mono />
      </InspectorSection>
    </>
  );
}

window.InspectorBody = InspectorBody;
