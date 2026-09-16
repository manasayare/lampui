const L = window.LAMPDesignSystem_980d6d;

function BuilderApp() {
  const {
    AppShell, GlobalHeader, WorkspaceSwitcher, Breadcrumb, EnvironmentPill, Button, IconButton, SideNav, NavSection, NavItem,
    ObjectTree, StatusBar, CanvasSurface, CanvasToolbar, CanvasZoomControls, CanvasObjectToolbar, CanvasMinimap, SnapGuide,
    AgentHex, HexLattice, HexCenter, BondEdge, BondLayer, PlaybookCluster, AgentIsland, InspectorPanel, Tabs, StatusBadge, Badge, Divider,
    SimulationBar, EnvironmentBanner, LiveActivityIndicator, CommandPalette, SearchInput, Tooltip, EmptyState,
  } = L;

  const [selected, setSelected] = React.useState('matcher');
  const [tab, setTab] = React.useState('purpose');
  const [treeSel, setTreeSel] = React.useState('vp');
  const [environment, setEnvironment] = React.useState('live');
  const [zoom, setZoom] = React.useState(1);
  const [bondMode, setBondMode] = React.useState(false);
  const [palette, setPalette] = React.useState(false);
  const [simState, setSimState] = React.useState('idle');
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setPalette(true); }
      if (e.key === 'Escape') { setPalette(false); setBondMode(false); }
      if (e.key.toLowerCase() === 'b' && !e.metaKey && !e.ctrlKey) setBondMode((v) => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  React.useEffect(() => {
    if (simState !== 'running') return;
    const t = setInterval(() => setProgress((p) => (p >= 1 ? (clearInterval(t), 1) : p + 0.08)), 420);
    return () => clearInterval(t);
  }, [simState]);

  const agents = window.AGENTS;
  const byId = {};
  agents.forEach((a) => { byId[a.id] = a; });
  const agent = byId[selected];
  const size = zoom < 0.55 ? 'sm' : 'md';
  const detail = zoom < 0.55 ? 'glyph' : zoom < 1.2 ? 'name' : 'meta';
  const inSim = environment === 'simulation';

  const gap = detail === 'glyph' ? 2 : 22;
  const runState = (a) => {
    if (selected === a.id) return 'selected';
    if (bondMode && a.state === 'compatible') return 'compatible';
    if (simState === 'running' && a.state === 'running') return 'running';
    if (simState === 'idle' && a.state === 'running') return 'succeeded';
    return a.state;
  };
  const renderAgent = (a) => (
    <AgentHex key={a.id} size={size} detail={detail} role={a.role} roleLabel={a.roleLabel} name={a.name}
      status={detail === 'glyph' ? undefined : a.status}
      state={runState(a)}
      environment={environment === 'simulation' ? 'simulation' : a.state === 'running' ? 'live' : 'draft'}
      memoryActive={a.memory > 6} tools={a.tools.length} cost="$0.04"
      badgeCount={a.status === 'needsHuman' ? 1 : undefined}
      onClick={() => { setSelected(a.id); setTab('purpose'); }} />
  );
  const coreIds = ['intake', 'matcher', 'verifier'];
  const coreCells = coreIds.map((id, i) => ({ col: i, row: 0, key: id, node: renderAgent(byId[id]) }));
  const c = (id) => HexCenter(coreIds.indexOf(id), 0, size, gap);
  const coreBonds = [['intake', 'matcher', 'valid'], ['matcher', 'verifier', 'valid']];
  const coreW = coreIds.length * ((size === 'md' ? 64 : 48) * 0.75 + gap) + 48;
  const coreH = (size === 'md' ? 55 : 42) + 48;

  return (
    <>
      <AppShell
        header={
          <GlobalHeader
            brand={<WorkspaceSwitcher name="Northwind Trading" subtitle="Operations LAMP" onClick={() => setPalette(true)} />}
            center={
              <>
                <Breadcrumb items={[{ label: 'Northwind' }, { label: 'Operations LAMP' }, { label: 'Finance Genie', icon: 'hive' }, { label: 'Vendor payment' }]} />
                <EnvironmentPill environment={environment} scope="Finance Genie" />
              </>
            }
            right={
              <>
                <SearchInput size="sm" placeholder="Search LAMP" shortcut="/" style={{ width: 180 }} />
                <Tooltip content="Command palette" shortcut="⌘K"><IconButton icon="bolt" label="Command palette" size="lg" onClick={() => setPalette(true)} /></Tooltip>
                <Divider orientation="vertical" />
                {inSim
                  ? <Button size="sm" variant="secondary" icon="stop_circle" onClick={() => { setEnvironment('live'); setSimState('idle'); setProgress(0); }}>Exit simulation</Button>
                  : <Button size="sm" variant="secondary" icon="science" shortcut="S" onClick={() => { setEnvironment('simulation'); setSimState('running'); setProgress(0.08); }}>Simulate</Button>}
                <Button size="sm" variant="brand" icon="bolt" disabled={inSim}>Go live</Button>
                <IconButton icon="account_circle" label="Account" size="lg" />
              </>
            }
          />
        }
        rail={
          <SideNav footer={<NavItem icon="settings" label="Settings" />}>
            <NavSection label="Operate">
              <NavItem icon="how_to_reg" label="Approvals" meta="7" badge={<Badge count tone="waiting">7</Badge>} />
              <NavItem icon="history" label="Runs" />
              <NavItem icon="bolt" label="Activity" />
              <NavItem icon="shield" label="Safety" />
            </NavSection>
            <NavSection label="Structure" actions={<IconButton icon="add" label="New Genie" size="xs" />}>
              <ObjectTree nodes={window.TREE} selectedId={treeSel} onSelect={(n) => setTreeSel(n.id)} />
            </NavSection>
            <NavSection label="Business">
              <NavItem icon="database" label="Memory" meta="1.2k" />
              <NavItem icon="extension" label="Tools" meta="9" />
              <NavItem icon="groups" label="Context" />
            </NavSection>
          </SideNav>
        }
        dock={
          <InspectorPanel
            title={agent.name} subtitle={'Finance Genie / Vendor payment'} glyph="hexagon"
            badges={<><StatusBadge status={agent.status} /><Badge outline>{agent.roleLabel}</Badge>{inSim ? <Badge tone="info" icon="science">Simulation</Badge> : null}</>}
            actions={<IconButton icon="more_horiz" label="Agent actions" size="sm" />}
            tabs={<Tabs value={tab} onChange={setTab} tabs={[{ id: 'purpose', label: 'Configure' }, { id: 'memory', label: 'Memory', count: agent.memory }, { id: 'runtime', label: 'Runtime' }]} />}
            footer={<><Button size="sm" variant="ghost" icon="science">Test Agent</Button><span style={{ flex: 1 }} /><Button size="sm" variant="secondary">Discard</Button><Button size="sm" variant="primary">Save</Button></>}>
            <window.InspectorBody agent={agent} tab={tab} environment={environment} />
          </InspectorPanel>
        }
        bottom={
          <>
            <CanvasToolbar position="floating" style={{ position: 'static', transform: 'none', border: 'none', boxShadow: 'none', background: 'transparent', padding: 0 }}>
              <IconButton icon="near_me" label="Select" bordered active />
              <IconButton icon="pan_tool" label="Pan" bordered />
              <IconButton icon="add" label="Add Agent" bordered />
              <IconButton icon="link" label="Bond mode" bordered active={bondMode} onClick={() => setBondMode(!bondMode)} />
            </CanvasToolbar>
            <Divider orientation="vertical" />
            <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>
              {bondMode ? 'Bond mode — pick a compatible Agent, or press Esc' : 'Space + drag to pan · B to bond · F to fit'}
            </span>
            <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
              <LiveActivityIndicator mode={inSim ? 'simulation' : 'live'} count={inSim ? 3 : 7} />
            </span>
          </>
        }
        statusBar={
          <StatusBar
            items={[{ icon: inSim ? 'science' : 'bolt', label: inSim ? 'Simulation' : 'Live' }, { label: 'Zoom', value: Math.round(zoom * 100) + '%' }, { label: 'Selected', value: 1 }, { label: 'Agents', value: agents.length }]}
            right={[{ icon: 'cloud_done', label: 'Saved 12s ago' }, { label: 'Tools', value: '8/9 healthy' }, { label: 'Run cost', value: '$0.42' }]}
          />
        }>
        {inSim ? (
          <SimulationBar mode="simulation" state={simState} progress={progress} step={Math.max(1, Math.round(progress * 10))} stepCount={10}
            scenario="March invoices (120 cases)" elapsed="00:06.2" cost="$0.18"
            onRun={() => setSimState('running')} onPause={() => setSimState('paused')} onStop={() => { setSimState('idle'); setProgress(0); }} onReplay={() => setProgress(0)} />
        ) : (
          <EnvironmentBanner environment="live" scope="Finance Genie" actions={<Button size="sm" variant="danger-quiet" icon="pause">Pause Genie</Button>} />
        )}
        {/* Space and drag pans. Marquee selection stays the default drag. */}
        <CanvasSurface pannable zoom={zoom} environment={inSim ? 'simulation' : 'live'} style={{ minHeight: 0 }}>
          <div style={{ position: 'absolute', left: 56, top: 40 }}>
            <PlaybookCluster name="Vendor payment" state={inSim ? 'simulation' : 'live'} agents={agents.length} layout="free" resizable
              width={detail === 'glyph' ? 560 : 730} height={detail === 'glyph' ? 168 : 214}
              meta={['Last run 4m ago', '98% success over 120 runs', '2 human checkpoints', '3 Tools']}
              actions={<Badge outline icon="schedule">Daily 06:00</Badge>}>
              <AgentIsland name="Intake and matching" note="bonded" x={0} y={0}>
                <HexLattice size={size} gap={gap} cells={coreCells}
                  overlay={
                    <BondLayer width={coreW} height={coreH}>
                      {coreBonds.map((b) => (
                        <BondEdge key={b[0] + b[1]} from={c(b[0])} to={c(b[1])} state={b[2]}
                          energy={!!(simState === 'running' && b[2] === 'valid')}
                          environment={inSim ? 'simulation' : 'live'} />
                      ))}
                    </BondLayer>
                  } />
              </AgentIsland>
              <AgentIsland name="Approval" note="human checkpoint" outlined x={detail === 'glyph' ? 200 : 268} y={0}>
                {renderAgent(byId.approver)}
              </AgentIsland>
              <AgentIsland solo name="Ledger Sync" note="after settlement" x={detail === 'glyph' ? 300 : 412} y={4}>
                {renderAgent(byId.ledger)}
              </AgentIsland>
              <AgentIsland solo name="Vendor Notifier" note="not configured" x={detail === 'glyph' ? 400 : 556} y={4}>
                {renderAgent(byId.notifier)}
              </AgentIsland>
            </PlaybookCluster>
          </div>
          {bondMode ? <SnapGuide rect={{ left: 56 + 24 + 3 * (64 * 0.75 + gap), top: 40 + 24 + 55 + gap + 28, width: 72, height: 62 }} /> : null}
          <CanvasObjectToolbar x={320} y={34}>
            <IconButton icon="link" label="Bond" size="sm" onClick={() => setBondMode(true)} />
            <IconButton icon="content_copy" label="Duplicate" size="sm" />
            <IconButton icon="science" label="Test" size="sm" />
            <Divider orientation="vertical" />
            <IconButton icon="delete" label="Delete Agent" size="sm" tone="danger" />
          </CanvasObjectToolbar>
          <CanvasZoomControls zoom={zoom} onZoomIn={() => setZoom((z) => Math.min(1.8, z + 0.2))} onZoomOut={() => setZoom((z) => Math.max(0.3, z - 0.2))} onFit={() => setZoom(1)} onReset={() => setZoom(1)} />
          <CanvasMinimap viewport={{ left: 16, top: 14, width: 84, height: 56 }}
            blips={agents.map((a, i) => ({ x: 26 + a.col * 14, y: 26 + a.row * 12, w: 6, h: 5, tone: a.status === 'error' ? 'error' : a.status === 'running' ? 'live' : undefined }))} />
        </CanvasSurface>
      </AppShell>
      <CommandPalette open={palette} query="" onClose={() => setPalette(false)} activeId="sim"
        onSelect={(it) => { setPalette(false); if (it.id === 'sim') { setEnvironment('simulation'); setSimState('running'); setProgress(0.08); } }}
        groups={[
          { label: 'Create', items: [{ id: 'na', label: 'Create Agent', icon: 'add', shortcut: ['A'] }, { id: 'np', label: 'Create Playbook', icon: 'layers' }, { id: 'ns', label: 'Create Skill', icon: 'flare' }] },
          { label: 'Run', items: [{ id: 'sim', label: 'Run simulation', icon: 'science', context: 'Vendor payment', shortcut: ['S'] }, { id: 'live', label: 'Go live', icon: 'bolt', context: 'Vendor payment' }] },
          { label: 'Navigate', items: [{ id: 'g1', label: 'Finance Genie', icon: 'hive', context: 'Operations LAMP' }, { id: 'm1', label: 'Inspect memory', icon: 'database', context: 'Genie memory' }] },
          { label: 'Safety', items: [{ id: 'pause', label: 'Pause Finance Genie', icon: 'pause', danger: true }, { id: 'kill', label: 'Emergency stop Finance Genie', icon: 'dangerous', danger: true }] },
        ]} />
    </>
  );
}

window.BuilderApp = BuilderApp;
