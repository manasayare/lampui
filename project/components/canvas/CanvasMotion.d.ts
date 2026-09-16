/**
 * GSAP runtime for the canvas. Exports no component — every export here is a
 * helper, so nothing is published to the design-system namespace. SnapField and
 * CanvasSurface consume it directly.
 */

export interface GsapApi {
  gsap: any;
  Draggable: any;
}

/** CDN sources. A host page that already provides window.gsap is left alone. */
export declare const GSAP_CDN: { core: string; draggable: string };

/** tokens/motion.css easings mapped to their nearest GSAP equivalent. */
export declare const GSAP_EASE: {
  standard: string;
  enter: string;
  exit: string;
  /** ease.magnetic — the snap curve. */
  magnetic: string;
  critical: string;
};

/** tokens/motion.css durations, in seconds. */
export declare const GSAP_DURATION: {
  instant: number;
  fast: number;
  standard: number;
  medium: number;
  slow: number;
  bond: number;
  ceremonial: number;
};

/**
 * Hand the canvas a GSAP instance you imported yourself — the path a bundled
 * React app should use. Call once, before the first canvas surface mounts.
 *
 *   import gsap from 'gsap';
 *   import { Draggable } from 'gsap/Draggable';
 *   setGsap({ gsap, Draggable });
 *
 * Without it the canvas falls back to window.gsap and then to the CDN, and if
 * neither is available drag is unavailable while the keyboard path still works.
 */
export declare function setGsap(api: GsapApi): void;

/** Resolves to the GSAP API, or null when it cannot be loaded. Never rejects. */
export declare function loadGsap(): Promise<GsapApi | null>;

/** Returns the GSAP API once loaded, re-rendering the caller when it arrives. */
export declare function useGsap(): GsapApi | null;

export declare function prefersReducedMotion(): boolean;
