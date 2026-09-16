import type { AgentRole } from '../objects/AgentHex';

export interface AgentArchetype {
  id: string;
  /** Pre-fills the dialog's name. The operator is expected to correct it —
   *  "Specialist" is a template, "Invoice Matcher" is an Agent. */
  name: string;
  role?: AgentRole;
  /** Material Symbols name shown in the list and on the drag ghost. */
  glyph?: string;
  purpose?: string;
  skills?: string[];
  /** Tool providers this archetype usually touches, as Simple Icons slugs. */
  tools?: string[];
  /** Pre-ticks the human checkpoint in the dialog. */
  checkpoint?: boolean;
  /** Heading it is filed under. Groups appear in first-seen order. */
  group?: string;
}

/** The nine starting archetypes: four roles, four finance Agents, one for
 *  customer operations. Replace wholesale via `archetypes`. */
export declare const AGENT_ARCHETYPES: AgentArchetype[];

/**
 * @startingPoint section="Canvas" subtitle="Drag an Agent out of the library onto the canvas" viewport="320x520"
 */
export interface AgentLibraryProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrop'> {
  archetypes?: AgentArchetype[];
  /** Size of the drag ghost. Match the SnapField it is dropped onto, so the
   *  operator is aiming the object at its real size against the real spacing. */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  title?: string;
  searchable?: boolean;
  /** Ref to the drop surface — normally the SnapField. A release outside its
   *  box is ignored, so dragging an item back into the panel cancels. */
  dropTarget?: React.RefObject<HTMLElement | null>;
  /** The click and Enter path. Every creation route in LAMP has a non-drag one;
   *  this should open the same dialog, at a cell you pick. */
  onAdd?: (archetype: AgentArchetype) => void;
  /** Released inside the drop target. `point` is in the target's own
   *  coordinates — resolve it with `freeCellAt` and open `NewAgentDialog`.
   *
   *  It deliberately does not create an Agent: an Agent that appears the instant
   *  a pointer is released is an Agent nobody named. */
  onDrop?: (archetype: AgentArchetype, point: { x: number; y: number }) => void;
  disabled?: boolean;
}
export declare const AgentLibrary: React.ForwardRefExoticComponent<AgentLibraryProps & React.RefAttributes<HTMLDivElement>>;
