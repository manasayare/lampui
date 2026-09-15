export type EntityType = 'person' | 'team' | 'customer' | 'vendor' | 'project' | 'product' | 'service' | 'invoice' | 'order' | 'contract' | 'policy' | 'document' | 'system' | 'channel' | 'location' | 'event' | 'decision' | 'exception' | 'relationship';
/**
 * @startingPoint section="Business context" subtitle="Entity chips for people, vendors, documents and policies" viewport="700x150"
 */
export interface EntityChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: EntityType;
  name: string;
  /** Renders an avatar instead of the type glyph; round for people. */
  initials?: string;
  /** Prefix the uppercase type — use in mixed result lists. */
  showType?: boolean;
  glyph?: string;
}
export declare const EntityChip: React.ForwardRefExoticComponent<EntityChipProps & React.RefAttributes<HTMLSpanElement>>;
