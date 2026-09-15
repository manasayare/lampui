import * as React from 'react';
import {
  AppShell, GlobalHeader, WorkspaceSwitcher, Breadcrumb, EnvironmentPill, StatusBar,
  SideNav, NavSection, NavItem,
  Button, Kbd,
  CanvasSurface, SnapField,
  AgentHex, BondLayer, BondEdge, HexCenter,
  InspectorPanel, InspectorSection, InspectorField, InspectorFooter, PropertyRow,
  TextInput, Select,
  MemoryScopeBar, ContextBreakdown,
  PlaybookComposer, GenieBlueprint, BuildGenie, BUSINESS_PROCESSES,
  Modal, InlineNotification, StatusBadge,
  type SnapFieldAgent, type ComposedPlaybook, type GenieBlueprintModel,
} from '@lamp/design-system';

/* A small but real builder screen, assembled only from package exports.
 *
 * It is TypeScript on purpose: `npm run check:types` compiles this file, so a
 * wrong prop name fails the build rather than rendering an empty page. The
 * first pass of this example was JSX and guessed four prop APIs wrong — the
 * page was blank and nothing said why. */

const START: SnapFieldAgent[] = [
  { id: 'intake',   name: 'Invoice Intake',   col: 0, row: 0, role: 'coordinator',     state: 'bonded' },
  { id: 'matcher',  name: 'Invoice Matcher',  col: 1, row: 0, role: 'specialist',      state: 'running' },
  { id: 'verifier', name: 'Vendor Verifier',  col: 2, row: 0, role: 'specialist',      state: 'bonded' },
  { id: 'approver', name: 'Payment Approver', col: 5, row: 1, role: 'humanSupervised', state: 'waiting' },
];
const BONDS: Array<[string, string]> = [['intake', 'matcher'], ['matcher', 'verifier']];

const TOOLS = [
  { provider: 'sap',   name: 'SAP',   state: 'connected' },
  { provider: 'gmail', name: 'Gmail', state: 'connected' },
  { provider: 'slack', name: 'Slack', state: 'authorizationRequired' },
];

const HINT: Record<string, string> = {
  idle: 'Drag an Agent, or drag on empty canvas to select',
  dragging: 'No free slot in range',
  proximity: 'Slot nearby',
  snapReady: 'Release to snap',
};

export function App() {
  const [agents, setAgents] = React.useState(START);
  const [selected, setSelected] = React.useState('matcher');
  const [picked, setPicked] = React.useState<string[]>([]);
  const [snap, setSnap] = React.useState('idle');
  const [composing, setComposing] = React.useState<string[] | null>(null);
  const [blueprint, setBlueprint] = React.useState<GenieBlueprintModel | null>(null);
  const [created, setCreated] = React.useState<{ name: string; connectors: unknown[] } | null>(null);

  const size = 'md' as const;
  const gap = 40;
  const by: Record<string, SnapFieldAgent> = {};
  agents.forEach((a) => { by[a.id] = a; });
  const agent = by[selected];

  return (
    <AppShell
      style={{ height: '100vh' }}
      header={
        <GlobalHeader
          brand={<WorkspaceSwitcher name="Northwind" subtitle="LAMP" />}
          center={<Breadcrumb items={[{ label: 'Finance' }, { label: 'Vendor payment' }]} />}
          right={
            <>
              <EnvironmentPill environment="draft" />
              <Button size="sm" variant="secondary" icon="science">Run simulation</Button>
              <Button size="sm" variant="brand" icon="bolt">Go live</Button>
            </>
          }
        />
      }
      rail={
        <SideNav>
          <NavSection label="Genie">
            <NavItem icon="hive" label="Finance" active />
            <NavItem icon="layers" label="Vendor payment" />
            <NavItem icon="database" label="Memory" meta="612" />
            <NavItem icon="handyman" label="Tools" meta="9" />
          </NavSection>
        </SideNav>
      }
      dock={
        <InspectorPanel
          title={agent ? agent.name : 'Nothing selected'}
          subtitle="Finance / Vendor payment"
          glyph="hexagon"
          badges={agent ? <StatusBadge status={agent.state === 'running' ? 'running' : 'ready'} /> : undefined}
          footer={
            <InspectorFooter align="split">
              <Button size="sm" variant="quiet">Reset</Button>
              <Button size="sm" variant="primary">Apply</Button>
            </InspectorFooter>
          }
        >
          <InspectorSection label="Purpose">
            <PropertyRow label="Role" value={agent?.role} />
            <InspectorField label="Authority" htmlFor="auth" inherited inheritedFrom="Finance Genie">
              <Select id="auth" options={['Read only', 'Propose', 'Act within limit']} />
            </InspectorField>
            <InspectorField label="Escalate to" htmlFor="esc" hint="Who receives what this Agent cannot decide.">
              <TextInput id="esc" defaultValue="Asha Rao" />
            </InspectorField>
          </InspectorSection>

          <InspectorSection label="Memory">
            <MemoryScopeBar readOnly owned="agent" counts={{ agent: 12, playbook: 34, genie: 140, lamp: 612 }} />
          </InspectorSection>

          <InspectorSection label="Cost" defaultOpen={false}>
            <ContextBreakdown
              limit={8000}
              cached={1840}
              context={{ agent: 618, playbook: 402, genie: 771, lamp: 340, evidence: 1281 }}
            />
          </InspectorSection>
        </InspectorPanel>
      }
      statusBar={
        <StatusBar
          items={[
            { icon: 'hexagon', label: 'Agents', value: agents.length },
            { label: picked.length > 1 ? picked.length + ' selected' : HINT[snap] },
          ]}
          right={[{ icon: 'search', label: 'Command palette', value: '⌘K' }]}
        />
      }
    >
      <CanvasSurface pannable grid="dots" environment="draft" style={{ minHeight: 0 }}>
        <SnapField
          agents={agents}
          size={size}
          gap={gap}
          width={900}
          height={520}
          origin={{ x: 90, y: 80 }}
          onChange={setAgents}
          selectedId={selected}
          onSelect={(a) => setSelected(a.id)}
          selectable
          selectedIds={picked}
          onSelectionChange={setPicked}
          onGroup={(ids) => setComposing(ids)}
          onSnapStateChange={setSnap}
          bonds={
            <BondLayer width={520} height={260}>
              {BONDS.map((b) => {
                const A = by[b[0]];
                const B = by[b[1]];
                const adjacent = Math.abs(A.col - B.col) <= 1 && Math.abs(A.row - B.row) <= 1;
                return adjacent ? (
                  <BondEdge
                    key={b.join()}
                    from={HexCenter(A.col, A.row, size, gap)}
                    to={HexCenter(B.col, B.row, size, gap)}
                    state="valid"
                  />
                ) : null;
              })}
            </BondLayer>
          }
          renderAgent={(a, flags) => (
            <AgentHex
              size={size}
              name={a.name}
              role={a.role}
              detail={flags.dragging ? 'glyph' : 'name'}
              state={
                flags.multiSelected ? 'multiSelected'
                  : flags.selected && !flags.dragging ? 'selected'
                    : a.state
              }
              onClick={() => setSelected(a.id)}
            />
          )}
        />
      </CanvasSurface>

      {composing ? (
        <PlaybookComposer
          agents={agents.filter((a) => composing.includes(a.id))}
          availableTools={TOOLS}
          onCancel={() => setComposing(null)}
          onPreviewGenie={(p) => setBlueprint(BuildGenie(p, { agents: agents.filter((a) => composing.includes(a.id)) }))}
          onCreate={(playbook: ComposedPlaybook) => {
            setComposing(null);
            setPicked([]);
            if (playbook.createGenie) {
              const process = BUSINESS_PROCESSES.find((p) => p.id === playbook.processId);
              setBlueprint(process ? BuildGenie(process, { agents: playbook.agents }) : null);
            } else {
              setCreated({ name: playbook.name, connectors: playbook.connectors });
            }
          }}
        />
      ) : null}

      {blueprint ? (
        <Modal
          size="lg"
          glyph="hive"
          title="This is what gets created"
          subtitle="All drafts. Nothing is connected and nothing runs."
          onClose={() => setBlueprint(null)}
        >
          <GenieBlueprint
            blueprint={blueprint}
            onCancel={() => setBlueprint(null)}
            onCreate={() => {
              setCreated({ name: blueprint.name + ' Genie', connectors: blueprint.connectors });
              setBlueprint(null);
            }}
          />
        </Modal>
      ) : null}

      {created ? (
        <div style={{ position: 'absolute', right: 16, bottom: 40, width: 360, zIndex: 40 }}>
          <InlineNotification
            tone="success"
            title={'"' + created.name + '" created as a draft'}
            onDismiss={() => setCreated(null)}
          >
            {created.connectors.length} connectors recorded. Nothing is authorized yet.
          </InlineNotification>
        </div>
      ) : null}

      <span hidden><Kbd keys={['⌘', 'K']} /></span>
    </AppShell>
  );
}
