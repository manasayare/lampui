/**
 * @startingPoint section="Foundations" subtitle="Material Symbols Outlined, inlined as real SVG vectors" viewport="700x200"
 */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Material Symbols Outlined name, snake_case (e.g. "play_arrow", "how_to_reg"). Hyphens are converted. */
  name: string;
  /** 12 | 14 | 16 | 18 | 20 | 24 — default 16. */
  size?: number;
  /** Supply when the icon stands alone and carries meaning. */
  label?: string;
}
export declare function Icon(props: IconProps): JSX.Element;

export interface BrandIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Simple Icons slug — "gmail", "salesforce", "sap", "googledrive", "whatsapp". */
  slug: string;
  size?: number;
  /** Defaults to text-secondary. Pass an official brand hex only inside a ToolTile glyph. */
  color?: string;
  label?: string;
}
export declare function BrandIcon(props: BrandIconProps): JSX.Element;
export declare const MATERIAL_SYMBOLS_BASE: string;
export declare const BRAND_ICON_BASE: string;
