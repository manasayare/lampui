import type { AgentArchetype } from './AgentLibrary';
import type { AgentRole } from '../objects/AgentHex';

export interface NewAgentDraft {
  name: string;
  role: AgentRole;
  purpose: string;
  skills: string[];
  /** Tool providers, as Simple Icons slugs. */
  tools: string[];
  /** A person decides before this Agent acts. */
  checkpoint: boolean;
  /** Always 'propose' — a new Agent never arrives able to act. Raising it is a
   *  separate, deliberate decision in the Inspector. */
  authority: 'propose';
  /** Always 'unconfigured' — it has a name and a purpose, not yet a prompt. */
  state: 'unconfigured';
  col: number;
  row: number;
}

/**
 * @startingPoint section="Canvas" subtitle="Name a dropped Agent before it exists" viewport="640x640"
 */
export interface NewAgentDialogProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onCreate'> {
  open?: boolean;
  /** The dropped archetype. Everything is pre-filled from it, so the operator
   *  confirms and corrects rather than authoring from blank. */
  archetype?: AgentArchetype | null;
  /** Where it will land — already resolved by `freeCellAt` at the drop. Shown,
   *  not asked. */
  cell?: { col: number; row: number } | null;
  /** Tools offered as toggles. Provider slugs plus display names. */
  availableTools?: Array<{ id?: string; provider?: string; name?: string; state?: string }>;
  /** Confirmed. The draft is ready to append to a SnapField's agents array. */
  onCreate?: (draft: NewAgentDraft) => void;
  onCancel?: () => void;
}
export declare const NewAgentDialog: React.ForwardRefExoticComponent<NewAgentDialogProps & React.RefAttributes<HTMLDivElement>>;
