Loads GSAP + Draggable on demand and maps LAMP's motion tokens onto GSAP's API — use it from any canvas component that needs direct manipulation or timeline-driven energy.

```jsx
function DraggableThing() {
  const api = useGsap();
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!api) return;
    const [d] = api.Draggable.create(ref.current, {
      type: 'x,y',
      onRelease() {
        api.gsap.to(ref.current, {
          x: 0, y: 0,
          duration: GSAP_DURATION.medium,
          ease: GSAP_EASE.magnetic,
        });
      },
    });
    return () => d.kill();
  }, [api]);

  return <div ref={ref} />;
}
```

**`useGsap()`** returns `null` until GSAP has loaded, then `{ gsap, Draggable }`. Guard every effect on it. It never throws and never rejects — if the CDN is unreachable it stays `null` forever and logs one warning.

**Always build the keyboard path outside the GSAP effect.** Composition in LAMP is never pointer-only, so drag is the enhancement and the keyboard is the guarantee. A surface that becomes unusable when `useGsap()` returns `null` is a bug.

**`GSAP_EASE.magnetic`** (`power4.out`) is the snap curve — the approximation of `ease.magnetic` `cubic-bezier(.16,1,.3,1)` in `tokens/motion.css`. Use it for anything that should feel pulled rather than placed: snap settle, bond commit, panel magnetism. `GSAP_DURATION` mirrors the same file in seconds.

**`prefersReducedMotion()`** — when true, replace travelling energy, compression and pulse loops with a static end state. Don't merely shorten the animation; skip it and set the final values.

**`GSAP_CDN`** is exported so a host can preload the two tags itself. Repoint it to vendored copies if the deployment forbids CDN.
