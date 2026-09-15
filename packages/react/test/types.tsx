/* Type-level smoke test. Not shipped — it exists so `npm run check:types` fails
   if the generated declarations stop describing the real components. */
import * as React from 'react';
import {
  Button, IconButton, Icon, BrandIcon, Badge, StatusBadge, Card, Panel,
  TextInput, Textarea, Select, Checkbox, Field,
  AgentHex, SkillOrb, ToolTile, PlaybookCluster, HexLattice, hexCenter,
  SnapField, CanvasSurface, setGsap,
  InspectorPanel, InspectorSection, InspectorField, PropertyRow,
  MemoryFact, MemoryScopeBar, MemoryConflict,
  SimulationStep, RunTimeline, KillSwitch,
  StackedBar, ContextBreakdown, MetricCard, DataTable,
  PlaybookComposer, GenieBlueprint, BuildGenie, MatchProcess, BUSINESS_PROCESSES,
  useMergedRefs,
  type ButtonProps, type SnapFieldAgent, type ComposedPlaybook, type BusinessProcessDef,
} from '@lamp/design-system';

/* Props are really typed, not `any`. */
const variant: ButtonProps['variant'] = 'brand';
// @ts-expect-error 'chartreuse' is not a Button variant
const bad: ButtonProps['variant'] = 'chartreuse';

const agents: SnapFieldAgent[] = [{ id: 'a', col: 0, row: 0, name: 'Invoice Matcher' }];

export function Smoke() {
  const [picked, setPicked] = React.useState<string[]>([]);
  const [composing, setComposing] = React.useState(false);

  const matches = MatchProcess({ agents: [{ name: 'Invoice Matcher' }] });
  const process: BusinessProcessDef = matches[0].process;
  const blueprint = BuildGenie(process, { agents });

  return (
    <>
      <Button variant={variant} size="sm" icon="add" onClick={() => setComposing(true)}>New Agent</Button>
      <IconButton icon="close" label="Close" />
      <Icon name="hexagon" size={20} />
      <BrandIcon slug="sap" />
      <Badge tone="warning" icon="report" micro>Exception</Badge>
      <StatusBadge status="running" />
      <Card title="Tool health"><Panel title="Structure" width={240}>x</Panel></Card>

      <Field label="Purpose" htmlFor="p"><Textarea id="p" rows={2} /></Field>
      <TextInput icon="search" placeholder="Find" />
      <Select options={[{ value: 'a', label: 'A' }]} />
      <Checkbox label="Include" />

      <AgentHex name="Invoice Matcher" state="running" size="md" labelWidth={96} />
      <SkillOrb name="Reconcile" />
      <ToolTile provider="sap" name="SAP" state="connected" />
      <PlaybookCluster name="Vendor payment" state="live" agents={4} />
      <HexLattice cells={[{ key: 'a', col: 0, row: 0, node: <AgentHex name="A" /> }]} />
      <CanvasSurface pannable zoom={1}>
        <SnapField
          agents={agents}
          selectable
          selectedIds={picked}
          onSelectionChange={setPicked}
          onGroup={() => setComposing(true)}
          snapTolerance={34}
          proximityRange={72}
          renderAgent={(a, f) => <AgentHex name={a.name} state={f.snapReady ? 'snapReady' : a.state} />}
        />
      </CanvasSurface>

      <InspectorPanel title="Invoice Matcher">
        <InspectorSection label="Authority">
          <PropertyRow label="Scope" value="Finance" />
          <InspectorField label="Limit" inherited inheritedFrom="Finance Genie">
            <TextInput />
          </InspectorField>
        </InspectorSection>
      </InspectorPanel>

      <MemoryScopeBar owned="agent" counts={{ agent: 12 }} onChange={() => {}} />
      <MemoryFact fact="Vendor approvals happen in WhatsApp first." scope="genie" />
      <MemoryConflict claims={[{ fact: 'A' }, { fact: 'B' }]} onPick={() => {}} />

      <RunTimeline steps={[{ title: 'Match invoice' }]} />
      <SimulationStep index={1} state="mocked" title="Read SAP" mockedValue="PO-9921" />
      <KillSwitch scope="Finance Genie" />

      <StackedBar segments={[{ label: 'Agent', value: 618 }]} legend showTotal unit="tokens" />
      <ContextBreakdown context={{ agent: 618, genie: 771 }} limit={8000} />
      <MetricCard label="Runs" value="412" />
      <DataTable columns={[{ key: 'a', header: 'A' }]} rows={[{ a: 1 }]} />

      {composing ? (
        <PlaybookComposer
          agents={[{ name: 'Invoice Matcher' }]}
          onCreate={(pb: ComposedPlaybook) => console.log(pb.outcomes.length)}
          onCancel={() => setComposing(false)}
        />
      ) : null}
      <GenieBlueprint blueprint={blueprint} />
    </>
  );
}

/* Refs reach the DOM node, and are typed to the right element. */
export function Refs() {
  const button = React.useRef<HTMLButtonElement>(null);
  const panel = React.useRef<HTMLElement>(null);
  const field = React.useRef<HTMLDivElement>(null);
  const extra = React.useRef<HTMLDivElement>(null);

  /* CanvasSurface keeps its own ref internally and still honours this one. */
  const merged = useMergedRefs(field, extra);

  React.useEffect(() => {
    button.current?.focus();
    field.current?.getBoundingClientRect();
  }, []);

  return (
    <>
      <Button ref={button}>Go live</Button>
      <InspectorPanel ref={panel} title="Invoice Matcher" />
      <CanvasSurface ref={merged} pannable>
        <SnapField ref={field} agents={[]} renderAgent={() => null} />
      </CanvasSurface>
      {/* @ts-expect-error a button ref is not an input ref */}
      <TextInput ref={button} />
    </>
  );
}

/* setGsap takes the real gsap shapes. */
setGsap({ gsap: {} as any, Draggable: {} as any });
void bad;
