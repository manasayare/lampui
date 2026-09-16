const L = window.LAMPDesignSystem_980d6d;

const RUNS = [
  { id: 'run_8f21c4', playbook: 'Vendor payment', genie: 'Finance', status: 'error', started: '06:00:02', dur: '6.2s', agents: 9, tools: 14, tokens: '3,412', cost: '$0.14', human: 1 },
  { id: 'run_8f20a1', playbook: 'Month-end close', genie: 'Finance', status: 'success', started: '05:58:41', dur: '12.8s', agents: 11, tools: 22, tokens: '8,104', cost: '$0.31', human: 0 },
  { id: 'run_8f1f77', playbook: 'Reconciliation', genie: 'Finance', status: 'needsHuman', started: '05:55:10', dur: '2.1s', agents: 4, tools: 5, tokens: '1,210', cost: '$0.04', human: 1 },
  { id: 'run_8f1e02', playbook: 'Ticket triage', genie: 'Customer Ops', status: 'success', started: '05:52:00', dur: '5.9s', agents: 7, tools: 9, tokens: '2,880', cost: '$0.12', human: 0 },
  { id: 'run_8f1d55', playbook: 'Vendor payment', genie: 'Finance', status: 'success', started: '05:49:33', dur: '5.4s', agents: 9, tools: 13, tokens: '3,180', cost: '$0.13', human: 0 },
  { id: 'run_8f1c18', playbook: 'CV screening', genie: 'Recruitment', status: 'skipped', started: '05:44:07', dur: '0.4s', agents: 3, tools: 2, tokens: '180', cost: '$0.01', human: 0 },
];

function OpsApp() {
  const {
    AppShell, GlobalHeader, WorkspaceSwitcher, Breadcrumb, EnvironmentPill, Button, IconButton, SideNav, NavSection, NavItem,
    StatusBar, StatusBadge, Badge, Divider, Tabs, SegmentedControl, FilterBar, Pagination, Select, SearchInput,
    DataTable, MetricCard, Sparkline, ChartFrame, LineChart, BarChart, HexHeatmap, Heatmap, DonutChart, UsageMeter,
    RunTimeline, RunSummary, ErrorState, ApprovalCard, KillSwitch, SafetyControls, ReadinessCheck, EnvironmentBanner,
    LiveActivityIndicator, InspectorPanel, InspectorSection, PropertyRow, MemoryUsageBar, MemoryFact, LearnedPattern,
    ObservedProcess, IntegrationCard, EntityChip, InlineNotification, EmptyState, Panel, Card, ObjectRow, ObjectList, ToolRow,
  } = L;

  const [view, setView] = React.useState('runs');
  const [runTab, setRunTab] = React.useState('overview');
  const [selectedRun, setSelectedRun] = React.useState('run_8f21c4');
  const [killOpen, setKillOpen] = React.useState(false);
  const [sel, setSel] = React.useState([]);
  const run = RUNS.find((r) => r.id === selectedRun) || RUNS[0];
  const days = ['1', '5', '10', '15', '20', '25', '30'];
  const cells = [];
  for (let c = 0; c < 8; c++) for (let r = 0; r < 3; r++) cells.push({ col: c, row: r, value: Math.round(Math.abs(Math.sin(c * 1.4 + r * 0.7)) * 40), label: 'Agent ' + (c * 3 + r + 1) });

  const runColumns = [
    { key: 'id', header: 'Run', mono: true, pinned: true, width: 116 },
    { key: 'playbook', header: 'Playbook', sortable: true },
    { key: 'genie', header: 'Genie' },
    { key: 'status', header: 'Status', render: (r) => <StatusBadge status={r.status} /> },
    { key: 'started', header: 'Started', mono: true, align: 'right' },
    { key: 'dur', header: 'Duration', mono: true, align: 'right', sortable: true },
    { key: 'tokens', header: 'Tokens', mono: true, align: 'right' },
    { key: 'cost', header: 'Cost', mono: true, align: 'right', sortable: true },
    { key: 'human', header: 'Human', mono: true, align: 'right' },
  ];

  const body = () => {
    if (view === 'approvals') {
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16, padding: 16, overflow: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <ApprovalCard tone="financial" question="Approve payment to Meridian Supplies?" amount="₹184,200"
              requestedBy="Payment Approver" playbook="Vendor payment" dueIn="Due in 2h"
              facts={[{ label: 'Invoice', value: 'INV-20418' }, { label: 'Matched PO', value: 'PO-9921' }, { label: 'Authority limit', value: '₹50,000' }, { label: 'Vendor', value: <EntityChip type="vendor" name="Meridian Supplies" /> }]}
              evidence={<MemoryFact type="exception" scope="playbook" confidence="medium" evidenceCount={9} fact="Meridian invoices arrive without a PO reference in about one case in five." source="Invoice history" />}
              onApprove={() => {}} onEdit={() => {}} onReject={() => {}} onEscalate={() => {}} />
            <ApprovalCard question="Which vendor record should LAMP treat as canonical?" kind="choice" requestedBy="Vendor Verifier" playbook="Vendor payment"
              facts={[{ label: 'Conflict', value: 'Two active records with different banking details' }]}
              options={[{ id: 'a', label: 'Use SAP record', primary: true }, { id: 'b', label: 'Use Salesforce record' }, { id: 'c', label: 'Merge and review' }]} />
            <ApprovalCard tone="critical" question="Delete 1,204 duplicate vendor records?" requestedBy="Ledger Sync" playbook="Reconciliation"
              facts={[{ label: 'Scope', value: 'Salesforce · Vendors' }, { label: 'Reversible', value: 'No' }]} onApprove={() => {}} onReject={() => {}} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Panel title="Queue" actions={<Badge count tone="waiting">7</Badge>}>
              <ObjectList>
                <ObjectRow kind="approval" name="₹184,200 to Meridian" secondary="Vendor payment · Finance" status="needsHuman" timestamp="2h" selected />
                <ObjectRow kind="approval" name="Canonical vendor record" secondary="Vendor payment · Finance" status="waiting" timestamp="3h" />
                <ObjectRow kind="approval" name="Delete duplicates" secondary="Reconciliation · Finance" status="attention" timestamp="5h" />
                <ObjectRow kind="approval" name="Offer approval — 2 candidates" secondary="CV screening · Recruitment" status="waiting" timestamp="1d" />
              </ObjectList>
            </Panel>
            <Panel title="This week">
              <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <MetricCard flush size="sm" label="Human touches" value="11" delta="+3" deltaTone="negative" deltaLabel="more than usual" spark={<Sparkline data={[2, 1, 3, 2, 4, 6, 11]} variant="bar" />} />
                <MetricCard flush size="sm" label="Median decision time" value="42m" delta="-12m" deltaTone="positive" />
                <UsageMeter label="Approvals answered" used={38} limit={49} unit="this week" />
              </div>
            </Panel>
          </div>
        </div>
      );
    }
    if (view === 'safety') {
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, padding: 16, overflow: 'auto', alignContent: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <InlineNotification tone="critical" title="Recruitment Genie is emergency stopped" actions={<Button size="sm" variant="secondary" icon="play_arrow">Review and resume</Button>}>
              Stopped by Asha Rao at 04:12. External writes are blocked; 2 runs were isolated mid-task.
            </InlineNotification>
            <Panel title="Genies">
              <ObjectList>
                <ObjectRow kind="genie" name="Finance" secondary="6 Playbooks · 23 Agents" status="live" actions={<SafetyControls state="live" onEmergency={() => setKillOpen(true)} />} />
                <ObjectRow kind="genie" name="Customer Ops" secondary="4 Playbooks · 17 Agents" status="live" actions={<SafetyControls state="live" onEmergency={() => setKillOpen(true)} />} />
                <ObjectRow kind="genie" name="Recruitment" secondary="2 Playbooks · 6 Agents" status="killed" actions={<Button size="sm" variant="secondary" icon="play_arrow">Resume</Button>} />
              </ObjectList>
            </Panel>
            <Panel title="Go-live readiness — Month-end close">
              <div style={{ padding: 12 }}>
                <ReadinessCheck checks={[
                  { label: 'Simulation passed on 120 historical cases', state: 'passed', detail: '98% match' },
                  { label: 'Salesforce authorization', state: 'failed', detail: 'Credentials expired', action: <Button size="xs" variant="secondary">Reconnect</Button> },
                  { label: 'Human checkpoints defined', state: 'warning', detail: 'No escalation owner' },
                  { label: 'Spend limits set', state: 'passed', detail: '₹250,000 / run' },
                  { label: 'Audit logging', state: 'passed' },
                ]} />
              </div>
            </Panel>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {killOpen
              ? <KillSwitch scope="Finance Genie" activeRuns={4} onCancel={() => setKillOpen(false)} onConfirm={() => setKillOpen(false)} />
              : <Card title="Emergency stop" actions={<Badge tone="danger" micro>High risk</Badge>}>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: '19px', color: 'var(--text-secondary)' }}>Stopping a Genie blocks new external write actions, stops new runs and isolates active tasks. Completed steps are not reversed.</p>
                  <div style={{ marginTop: 10 }}><Button size="md" variant="danger" icon="dangerous" onClick={() => setKillOpen(true)}>Emergency stop a Genie</Button></div>
                </Card>}
            <IntegrationCard name="Salesforce" provider="salesforce" account="finance@northwind.com" state="expired" permission="Write" risk="High"
              expiry="expired 2 days ago" usedBy={['Vendor Verifier', 'Ledger Sync']}
              scopes={[{ label: 'Read accounts and opportunities' }, { label: 'Create and update opportunities', write: true }]}
              onReconnect={() => {}} onTest={() => {}} onDisconnect={() => {}} />
            <Panel title="Tool health">
              <ToolRow provider="sap" name="SAP" account="northwind-prod" state="connected" permission="Write" usedBy={4} health="99.4%" risk="High" />
              <ToolRow provider="gmail" name="Gmail" account="ap@northwind.com" state="connected" permission="Read" usedBy={2} health="100%" risk="Low" />
              <ToolRow provider="whatsapp" name="WhatsApp Business" account="+91 ••• 4821" state="degraded" permission="Write" usedBy={1} health="92.1%" risk="Medium" />
            </Panel>
          </div>
        </div>
      );
    }
    if (view === 'intelligence') {
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 16, padding: 16, overflow: 'auto', alignContent: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <LearnedPattern kind="observed" occurrences={23} period="6 weeks" confidence="high"
              observation="Vendor approvals usually happen through WhatsApp before they are entered in SAP."
              evidence={['WhatsApp · 23 threads', 'SAP · 21 matching records', '3 people involved']}
              entities={<><EntityChip type="vendor" name="Meridian Supplies" /><EntityChip type="person" name="Asha Rao" initials="AR" /><EntityChip type="system" name="SAP" /></>}
              onUse={() => {}} onReview={() => {}} onIgnore={() => {}} />
            <Panel title="Observed process — vendor payment">
              <div style={{ padding: 12 }}>
                <ObservedProcess steps={[
                  { title: 'Vendor sends invoice', actor: 'Meridian', channel: 'Email', frequency: '100%' },
                  { title: 'Informal approval', actor: 'Asha Rao', channel: 'WhatsApp', kind: 'approval', frequency: '92%', duration: '4h' },
                  { title: 'Entered into SAP', actor: 'Ravi K', tool: 'SAP', frequency: '100%', duration: '11m' },
                  { title: 'Handoff to payments', kind: 'handoff', frequency: '100%', duration: '1h' },
                  { title: 'Correction after mismatch', kind: 'rework', frequency: '18%', duration: '1d' },
                  { title: 'Missing PO reference', kind: 'exception', frequency: '19%', duration: '2d' },
                ]} />
              </div>
            </Panel>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <ChartFrame title="Memory retrieval" subtitle="By scope, last 30 days" legend={[{ label: 'Genie', color: 'var(--dataviz-8)' }, { label: 'LAMP', color: 'var(--dataviz-4)' }]}>
              <BarChart height={132} stacked labels={days} series={[{ data: [22, 28, 24, 31, 35, 30, 38], color: 'var(--dataviz-8)' }, { data: [8, 9, 12, 10, 14, 12, 16], color: 'var(--dataviz-4)' }]} />
            </ChartFrame>
            <ChartFrame title="Confidence distribution" subtitle="Memory facts in Finance Genie" footnote="Facts below medium confidence are never used without a human checkpoint.">
              <BarChart height={120} labels={['Low', 'Medium', 'High', 'Very high']} series={[{ data: [14, 38, 96, 42] }]} />
            </ChartFrame>
            <MemoryFact type="policy" scope="lamp" confidence="veryHigh" fact="Payments above ₹50,000 require a second approver." source="Finance policy v4" evidenceCount={1} lastConfirmed="12 Sep" access="Shared" />
          </div>
        </div>
      );
    }
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', minHeight: 0, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, padding: 16, gap: 12, overflow: 'auto' }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <MetricCard label="Runs today" value="412" delta="+38" deltaLabel="vs yesterday" spark={<Sparkline data={[18, 24, 21, 32, 28, 41, 38]} />} />
            <MetricCard label="Automation rate" value="94.2" unit="%" delta="+2.1%" deltaLabel="vs last 7 days" />
            <MetricCard label="Cost per outcome" value="$0.14" delta="-9%" deltaTone="positive" deltaLabel="vs last 7 days" />
            <MetricCard label="Failed runs" value="6" delta="+4" deltaTone="negative" deltaLabel="Salesforce auth" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 12 }}>
            <ChartFrame title="Execution outcomes" subtitle="Last 30 days · Live only" legend={[{ label: 'Success', color: 'var(--dataviz-3)' }, { label: 'Needs human', color: 'var(--dataviz-4)' }, { label: 'Failed', color: 'var(--chart-failure)' }]}>
              <BarChart height={140} stacked labels={days} series={[
                { data: [280, 310, 296, 340, 352, 380, 396], color: 'var(--dataviz-3)' },
                { data: [14, 11, 18, 9, 12, 8, 11], color: 'var(--dataviz-4)' },
                { data: [3, 2, 5, 2, 4, 3, 6], color: 'var(--chart-failure)' }]} />
            </ChartFrame>
            <ChartFrame title="Agent workload" subtitle="Runs today · all Genies" footnote="One hexagon per Agent slot.">
              <HexHeatmap cells={cells} size={28} />
            </ChartFrame>
          </div>
          <FilterBar activeCount={1} onClear={() => {}} right={<Pagination page={1} pageCount={38} range="1–6 of 412" />}>
            <Select size="sm" options={['All Genies', 'Finance', 'Customer Ops', 'Recruitment']} />
            <Select size="sm" options={['All statuses', 'Failed', 'Needs human']} defaultValue="All statuses" />
            <Select size="sm" options={['Today', 'Last 7 days', 'Last 30 days']} />
          </FilterBar>
          <DataTable density="compact" columns={runColumns} rows={RUNS} rowKey={(r) => r.id} selectable selected={sel}
            onSelect={(k, next) => setSel(next ? sel.concat([k]) : sel.filter((x) => x !== k))}
            onSelectAll={(next) => setSel(next ? RUNS.map((r) => r.id) : [])}
            onRowClick={(r) => { setSelectedRun(r.id); setRunTab('overview'); }}
            sort={{ key: 'dur', dir: 'desc' }}
            toolbar={<><SearchInput size="sm" placeholder="Search runs" /><span style={{ flex: 1 }} /><Button size="sm" variant="secondary" icon="download">Export</Button></>}
            bulkActions={<><Button size="xs" variant="secondary" icon="replay">Retry</Button><Button size="xs" variant="quiet" onClick={() => setSel([])}>Clear</Button></>} />
        </div>
        <div style={{ borderLeft: '1px solid var(--border-default)', minWidth: 0, background: 'var(--surface-primary)' }}>
          <InspectorPanel title={run.playbook} subtitle={run.id + ' · ' + run.genie + ' Genie'} glyph="history"
            badges={<><StatusBadge status={run.status} /><Badge outline icon="schedule">Schedule</Badge></>}
            actions={<IconButton icon="more_horiz" label="Run actions" size="sm" />}
            tabs={<Tabs value={runTab} onChange={setRunTab} tabs={[{ id: 'overview', label: 'Overview' }, { id: 'timeline', label: 'Timeline' }, { id: 'cost', label: 'Cost' }]} />}
            footer={<><Button size="sm" variant="secondary" icon="replay">Replay</Button><Button size="sm" variant="primary" icon="refresh">Retry run</Button></>}>
            {runTab === 'overview' ? (
              <>
                {run.status === 'error' ? (
                  <InspectorSection label="Failure" collapsible={false}>
                    <ErrorState title="Salesforce write failed"
                      happened="The connection was rejected after 3 attempts."
                      notHappened="No opportunity records were created or modified."
                      impact="4 invoices are waiting in Vendor payment."
                      recovery="Reconnect the Salesforce account, then retry the run."
                      code={'tool_auth_expired · ' + run.id} onRetry={() => {}} onReport={() => {}} />
                  </InspectorSection>
                ) : null}
                <InspectorSection label="Overview" collapsible={false}>
                  <RunSummary runId={run.id} status={run.status} environment="Live" trigger="Schedule · 06:00 IST"
                    started={run.started} duration={run.dur} agents={run.agents} toolCalls={run.tools} llmCalls={11}
                    cacheRate="62%" tokens={run.tokens} cost={run.cost} interventions={run.human} />
                </InspectorSection>
                <InspectorSection label="Agents" count={run.agents}>
                  <ObjectRow kind="agent" name="Invoice Matcher" secondary="Specialist" status="success" compact meta="1.8s" />
                  <ObjectRow kind="agent" name="Payment Approver" secondary="Human-supervised" status="needsHuman" compact meta="42m" />
                  <ObjectRow kind="agent" name="Ledger Sync" secondary="Worker" status="error" compact meta="3.1s" />
                </InspectorSection>
              </>
            ) : null}
            {runTab === 'timeline' ? (
              <InspectorSection label="Execution trace" collapsible={false}>
                <RunTimeline steps={[
                  { state: 'success', title: 'Invoice extracted', actor: 'Invoice Intake', tools: ['Google Drive'], duration: '1.2s', tokens: '812' },
                  { state: 'success', title: 'Matched to PO-9921', actor: 'Invoice Matcher', memory: 'Genie memory', duration: '0.6s', tokens: '1,104' },
                  { state: 'warning', title: 'Vendor banking details differ', actor: 'Vendor Verifier', tools: ['Salesforce'], duration: '0.9s' },
                  { state: 'waitingHuman', title: 'Approval required', detail: '₹184,200 is above the Agent authority limit.', actor: 'Payment Approver', duration: '42m' },
                  { state: 'failed', title: 'Salesforce write failed', detail: 'Credentials expired. No records were created.', actor: 'Ledger Sync', tools: ['Salesforce'], duration: '3.1s' },
                  { state: 'skipped', title: 'Notify vendor', detail: 'Skipped because the write failed.', actor: 'Vendor Notifier' },
                ]} />
              </InspectorSection>
            ) : null}
            {runTab === 'cost' ? (
              <>
                <InspectorSection label="Context breakdown" collapsible={false}>
                  <MemoryUsageBar segments={[
                    { key: 'agent', label: 'Agent working memory', value: 618 },
                    { key: 'playbook', label: 'Playbook memory', value: 402 },
                    { key: 'genie', label: 'Genie memory', value: 771 },
                    { key: 'lamp', label: 'LAMP memory', value: 340 },
                    { key: 'evidence', label: 'Retrieved evidence', value: 1281 },
                  ]} />
                </InspectorSection>
                <InspectorSection label="Inference" collapsible={false}>
                  <PropertyRow label="LLM calls" value="11" mono />
                  <PropertyRow label="Cached tokens" value="2,116 (62%)" mono />
                  <PropertyRow label="Tool calls" value={String(run.tools)} mono />
                  <PropertyRow label="Estimated cost" value={run.cost} mono />
                  <PropertyRow label="Cost per outcome" value="$0.14" mono />
                </InspectorSection>
                <InspectorSection label="Latency" collapsible={false}>
                  <ChartFrame flush><BarChart height={110} orientation="horizontal" showValues labels={['Model', 'Tools', 'Memory', 'Human']} series={[{ data: [2.1, 3.1, 0.6, 42] }]} format={(v) => v + 's'} /></ChartFrame>
                </InspectorSection>
              </>
            ) : null}
          </InspectorPanel>
        </div>
      </div>
    );
  };

  return (
    <AppShell
      header={
        <GlobalHeader
          brand={<WorkspaceSwitcher name="Northwind Trading" subtitle="Operations LAMP" />}
          center={<><Breadcrumb items={[{ label: 'Northwind' }, { label: 'Operations LAMP' }, { label: 'Operations' }]} /><EnvironmentPill environment="live" /></>}
          right={<>
            <LiveActivityIndicator mode="live" count={7} />
            <Divider orientation="vertical" />
            <Button size="sm" variant="secondary" icon="pause">Pause all</Button>
            <Button size="sm" variant="danger-quiet" icon="dangerous" onClick={() => { setView('safety'); setKillOpen(true); }}>Emergency stop</Button>
            <IconButton icon="notifications" label="Notifications" size="lg" />
            <IconButton icon="account_circle" label="Account" size="lg" />
          </>} />
      }
      rail={
        <SideNav footer={<NavItem icon="settings" label="Settings" />}>
          <NavSection label="Operate">
            <NavItem icon="history" label="Runs" active={view === 'runs'} meta="412" onClick={() => setView('runs')} />
            <NavItem icon="how_to_reg" label="Approvals" active={view === 'approvals'} badge={<Badge count tone="waiting">7</Badge>} onClick={() => setView('approvals')} />
            <NavItem icon="shield" label="Safety" active={view === 'safety'} onClick={() => setView('safety')} />
            <NavItem icon="flare" label="Intelligence" active={view === 'intelligence'} onClick={() => setView('intelligence')} />
          </NavSection>
          <NavSection label="Genies">
            <NavItem icon="hive" label="Finance" meta="23" />
            <NavItem icon="hive" label="Customer Ops" meta="17" />
            <NavItem icon="hive" label="Recruitment" meta="6" />
          </NavSection>
        </SideNav>
      }
      statusBar={
        <StatusBar items={[{ icon: 'bolt', label: 'Live' }, { label: 'Active runs', value: 7 }, { label: 'Queue', value: 3 }]}
          right={[{ icon: 'cloud_done', label: 'Synced' }, { label: 'Tools', value: '8/9 healthy' }, { label: 'p95', value: '6.2s' }, { label: 'Today', value: '$58.40' }]} />
      }>
      <EnvironmentBanner environment="live" scope="3 Genies" detail="23 Agents can act on the business." actions={<SegmentedControl value={view} onChange={setView} options={[{ value: 'runs', label: 'Runs', icon: 'history' }, { value: 'approvals', label: 'Approvals', icon: 'how_to_reg' }, { value: 'safety', label: 'Safety', icon: 'shield' }, { value: 'intelligence', label: 'Intelligence', icon: 'flare' }]} />} />
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>{body()}</div>
    </AppShell>
  );
}

window.OpsApp = OpsApp;
