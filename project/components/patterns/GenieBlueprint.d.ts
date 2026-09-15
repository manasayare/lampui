import type { BusinessProcessDef, ProcessConnector } from './BusinessProcess';

export interface GenieBlueprintModel {
  name: string;
  domain: string;
  purpose: string;
  glyph: string;
  state: 'draft';
  playbooks: Array<{
    process: BusinessProcessDef;
    /** The Playbook the operator actually defined. The rest are suggestions. */
    primary: boolean;
    agents: any[];
    state: 'draft' | 'suggested';
  }>;
  /** Connector categories de-duplicated across the capability, at the broadest
   *  permission any of its Playbooks needs. */
  connectors: Array<ProcessConnector & { usedBy: string[] }>;
  roles: string[];
  agents: any[];
  guardrails: string[];
  memory: { scopes: string[]; seeded: string[] };
}

/** Build the Genie a process belongs to. Inert — describes what would be created. */
export declare function BuildGenie(
  process: BusinessProcessDef,
  options?: {
    /** Include the other standard processes in the same domain as suggestions. Default true. */
    includeSiblings?: boolean;
    agents?: any[];
    /** Overrides the domain-derived name. */
    name?: string;
  },
): GenieBlueprintModel | null;

/**
 * @startingPoint section="Canvas" subtitle="Everything an auto-created Genie would contain" viewport="700x720"
 */
export interface GenieBlueprintProps extends React.HTMLAttributes<HTMLElement> {
  blueprint: GenieBlueprintModel | null;
  onCreate?: (blueprint: GenieBlueprintModel, excluded: string[]) => void;
  /** "Just the Playbook" — decline the Genie. */
  onCancel?: () => void;
  onTogglePlaybook?: (processId: string) => void;
  /** Process ids the operator has skipped. */
  excluded?: string[];
  compact?: boolean;
}
export declare const GenieBlueprint: React.ForwardRefExoticComponent<GenieBlueprintProps & React.RefAttributes<HTMLElement>>;
