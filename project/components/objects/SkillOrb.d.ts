export type SkillState = 'available' | 'attached' | 'active' | 'running' | 'waiting' | 'error' | 'disabled' | 'suggested' | 'learned';
/**
 * @startingPoint section="LAMP objects" subtitle="Skill circles — sizes and states" viewport="700x150"
 */
export interface SkillOrbProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** xs 16 · sm 20 · md 28 (default) · lg 36 · xl 48 */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  state?: SkillState;
  /** Material Symbol for the capability — summarize, verify, translate. */
  glyph?: string;
  name?: string;
  /** Render the name beside the circle. */
  label?: boolean;
}
export declare function SkillOrb(props: SkillOrbProps): JSX.Element;
export declare const SKILL_SIZES: Record<string, number>;
