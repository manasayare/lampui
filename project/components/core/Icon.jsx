import React from 'react';

/* Material Symbols Outlined (weight 400) — real SVG vectors, inlined so they inherit
   currentColor. Never rendered as font ligatures or typed text.

   Icons are vendored into assets/, not fetched from a CDN: an enterprise operating
   console should not have a toolbar that empties when a CDN is unreachable, and a
   blocked request renders a placeholder box where a control's meaning should be.

   The asset root is derived from the bundle's own <script src>, so a card three
   directories deep and a kit two directories deep both resolve correctly without
   either of them configuring anything. Set window.LAMP_ASSET_BASE before the
   bundle loads to serve the assets from somewhere else; the CDN is kept only as
   the last resort when neither is available (a bundler-built app, say, where
   there is no _ds_bundle.js script tag to read). */

function assetRoot() {
  try {
    if (typeof window !== 'undefined' && window.LAMP_ASSET_BASE) return window.LAMP_ASSET_BASE;
    if (typeof document === 'undefined') return null;
    const tag = document.currentScript
      || Array.prototype.slice.call(document.scripts).filter((s) => /_ds_bundle\.js/.test(s.src))[0];
    if (tag && tag.src) return tag.src.replace(/_ds_bundle\.js.*$/, '') + 'assets/';
  } catch (e) { /* no DOM, or a sandboxed document — fall through to the CDN */ }
  return null;
}

const ASSETS = assetRoot();

export const MATERIAL_SYMBOLS_BASE = ASSETS
  ? ASSETS + 'icons/'
  : 'https://cdn.jsdelivr.net/npm/@material-symbols/svg-400/outlined/';

/* Official third-party brand marks; Simple Icons is the fallback when a provider
   mark is not vendored. Simple Icons carries no Microsoft marks, so Outlook,
   Excel and SharePoint fall back to the generic Tool glyph. */
export const BRAND_ICON_BASE = ASSETS
  ? ASSETS + 'brand/'
  : 'https://cdn.jsdelivr.net/npm/simple-icons@13/icons/';

const cache = new Map();

/* A missing glyph renders a neutral placeholder so it is caught in review,
   never an invisible gap in a toolbar or a status badge. */
const FALLBACK = '<svg viewBox="0 0 24 24"><rect x="4.5" y="4.5" width="15" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.45"/></svg>';

function load(url) {
  if (!cache.has(url)) {
    cache.set(url, fetch(url)
      .then((r) => (r.ok ? r.text() : null))
      .catch(() => null)
      .then((text) => {
        if (!text) console.warn('[LAMP] icon not found: ' + url);
        return text || FALLBACK;
      }));
  }
  return cache.get(url);
}

function useSvg(url, size) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let alive = true;
    load(url).then((text) => {
      const host = ref.current;
      if (!alive || !host || !text) return;
      host.innerHTML = text;
      const svg = host.firstElementChild;
      if (!svg) return;
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('aria-hidden', 'true');
      svg.style.display = 'block';
    });
    return () => { alive = false; };
  }, [url, size]);
  return ref;
}

export function Icon({ name, size = 16, className = '', style, label, ...rest }) {
  const ref = useSvg(MATERIAL_SYMBOLS_BASE + String(name).replace(/-/g, '_') + '.svg', size);
  return React.createElement('span', {
    ref, className,
    role: label ? 'img' : undefined,
    'aria-label': label,
    'aria-hidden': label ? undefined : 'true',
    style: { display: 'inline-flex', flex: 'none', width: size, height: size, color: 'currentColor', ...style },
    ...rest,
  });
}

export function BrandIcon({ slug, size = 16, color, className = '', style, label, ...rest }) {
  const ref = useSvg(BRAND_ICON_BASE + String(slug).toLowerCase() + '.svg', size);
  return React.createElement('span', {
    ref, className,
    role: label ? 'img' : undefined,
    'aria-label': label,
    'aria-hidden': label ? undefined : 'true',
    style: { display: 'inline-flex', flex: 'none', width: size, height: size, color: color || 'var(--text-secondary)', ...style },
    ...rest,
  });
}
