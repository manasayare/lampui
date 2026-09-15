import React from 'react';

/* GSAP runtime for the canvas.

   Direct manipulation on the LAMP canvas runs on GSAP Draggable
   (https://gsap.com/docs/v3/Plugins/Draggable/). Draggable owns the pointer
   maths — capture, touch-action, transforms, bounds, the pointer/touch/pen
   differences — so SnapField and CanvasSurface only have to answer the two
   questions that are actually LAMP's: which lattice slot is nearest, and is it
   free.

   GSAP is loaded from CDN at first use rather than imported, because components
   in this system import React and nothing else — the card HTML, the UI kits and
   the templates all load the bundle as a plain script. A page that wants GSAP
   present up front can include the two tags itself; the loader will see
   window.gsap and skip the injection.

   Everything degrades: if GSAP cannot load, drag is unavailable but the canvas
   still renders and every Agent is still movable from the keyboard. Composition
   in LAMP is never pointer-only, so the keyboard path is not a fallback — it is
   the guaranteed path, and the drag is the enhancement. */

export const GSAP_CDN = {
  core: 'https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js',
  draggable: 'https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/Draggable.min.js',
};

/* Token easings (tokens/motion.css) mapped to their nearest GSAP equivalent.
   ease.magnetic cubic-bezier(.16,1,.3,1) is the snap ease — a hard decelerating
   curve, which is what makes an Agent feel pulled rather than placed. */
export const GSAP_EASE = {
  standard: 'power2.out',
  enter: 'power2.out',
  exit: 'power2.in',
  magnetic: 'power4.out',
  critical: 'power3.inOut',
};

/* Durations in seconds, mirroring tokens/motion.css which is authored in ms. */
export const GSAP_DURATION = {
  instant: 0.08,
  fast: 0.12,
  standard: 0.18,
  medium: 0.24,
  slow: 0.36,
  bond: 0.42,
  ceremonial: 0.6,
};

let loading = null;

function injectScript(src) {
  return new Promise((done, fail) => {
    const existing = document.querySelector('script[src="' + src + '"]');
    if (existing) {
      if (existing.dataset.loaded) return done();
      existing.addEventListener('load', () => done());
      existing.addEventListener('error', () => fail(new Error('failed: ' + src)));
      return;
    }
    const tag = document.createElement('script');
    tag.src = src;
    tag.crossOrigin = 'anonymous';
    tag.addEventListener('load', () => { tag.dataset.loaded = '1'; done(); });
    tag.addEventListener('error', () => fail(new Error('failed: ' + src)));
    document.head.appendChild(tag);
  });
}

/** Resolves to { gsap, Draggable }, or null if GSAP is unavailable. */
export function loadGsap() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return Promise.resolve(null);
  }
  if (window.gsap && window.Draggable) {
    return Promise.resolve({ gsap: window.gsap, Draggable: window.Draggable });
  }
  if (!loading) {
    loading = injectScript(GSAP_CDN.core)
      .then(() => injectScript(GSAP_CDN.draggable))
      .then(() => {
        if (!window.gsap || !window.Draggable) return null;
        window.gsap.registerPlugin(window.Draggable);
        return { gsap: window.gsap, Draggable: window.Draggable };
      })
      .catch((e) => {
        console.warn('[LAMP] GSAP unavailable, canvas drag disabled (keyboard still works):', e.message);
        return null;
      });
  }
  return loading;
}

/**
 * Returns { gsap, Draggable } once loaded, or null. Re-renders the caller when
 * it arrives so Draggable instances can be created in a later effect.
 */
export function useGsap() {
  const [api, setApi] = React.useState(() =>
    typeof window !== 'undefined' && window.gsap && window.Draggable
      ? { gsap: window.gsap, Draggable: window.Draggable }
      : null,
  );
  React.useEffect(() => {
    if (api) return;
    let alive = true;
    loadGsap().then((next) => { if (alive && next) setApi(next); });
    return () => { alive = false; };
  }, [api]);
  return api;
}

/** True when the viewer has asked for reduced motion. Energy becomes state change. */
export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}
