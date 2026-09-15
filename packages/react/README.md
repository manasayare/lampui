# @lamp/design-system

React components for **LAMP** — the enterprise AI operating environment. Tokens, primitives, and the Agent / Playbook / Genie object system.

186 exports. ESM and CJS. Real TypeScript types. No runtime dependency other than React.

```bash
npm install @lamp/design-system
```

```jsx
import '@lamp/design-system/styles.css';
import { Button, AgentHex, InspectorPanel } from '@lamp/design-system';

<Button variant="brand" icon="bolt">Go live</Button>
<AgentHex name="Invoice Matcher" state="running" />
```

`styles.css` carries the tokens, both themes and every component's styles, with the Geist webfonts alongside it. Import it once at your app root.

## Themes and density

Both are attributes on the root element — no provider, no context, no re-render.

```html
<html data-theme="dark" data-density="compact">
```

`data-theme` is `light` (the default) or `dark`. `data-density` is `compact`, `default` or `comfortable`; builder surfaces want compact–default.

## Icons

Icons are **inlined**. `<Icon name="hexagon" />` renders synchronously from path data bundled with the package — no request, no placeholder frame, no CDN, no asset base to configure, and correct under SSR.

```jsx
<Icon name="database" size={20} />
<IconButton icon="close" label="Close inspector" />
<BrandIcon slug="sap" />
```

The set is the 159 Material Symbols and 19 provider marks the system actually uses (~50kB minified, ~15kB gzipped, and it is why a Button-only app is bigger than a Button). Any other Material Symbol name still works — it falls back to fetching that one glyph. To add one permanently:

```js
import { registerGlyphs } from '@lamp/design-system';
registerGlyphs({ my_icon: 'M480-80…' });
```

## The canvas needs GSAP, and you provide it

`SnapField` and `CanvasSurface` run their direct manipulation on [GSAP Draggable](https://gsap.com/docs/v3/Plugins/Draggable/). GSAP is an **optional peer dependency** that the package never imports — so an app that only wants a Button does not pay for it, and no bundler has to resolve it.

```jsx
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { setGsap } from '@lamp/design-system';

setGsap({ gsap, Draggable });   // once, before the first canvas mounts
```

Without it the canvas falls back to `window.gsap`, then to a CDN, and if neither is there it still renders — drag is unavailable but **every Agent is still movable from the keyboard**. Composition in LAMP is never pointer-only, so build on that guarantee rather than on the drag.

## The canvas

```jsx
<CanvasSurface pannable grid="dots">
  <SnapField
    agents={agents}
    onChange={setAgents}
    selectable
    selectedIds={selection}
    onSelectionChange={setSelection}
    onGroup={(ids) => setComposing(ids)}
    onSnapStateChange={setSnapState}
    renderAgent={(agent, flags) => (
      <AgentHex
        name={agent.name}
        state={flags.multiSelected ? 'multiSelected' : agent.state}
      />
    )}
  />
</CanvasSurface>
```

- **Agents cannot overlap.** Occupied lattice cells are excluded before the nearest-slot search, and legal cells derive from the field's own box, so nothing lands outside it or half off an edge.
- **Two ranges.** `proximityRange` (72px) lights the nearest free slot without moving the Agent; `snapTolerance` (34px) arms it and the Agent drifts toward it.
- **Only the hexagon takes the pointer.** A press in the gaps between hexagons, or on a label, starts a marquee selection instead.
- `onSnapStateChange` emits `dragging` → `proximity` → `snapReady` → `idle`.

## Defining a Playbook

Outlining Agents into a Playbook opens a composer that arrives **pre-filled**. LAMP matches the selection against a library of eight standard business processes and proposes one with its reasoning visible.

```jsx
import { PlaybookComposer, MatchProcess, BuildGenie, GenieBlueprint } from '@lamp/design-system';

<PlaybookComposer
  agents={selectedAgents}
  availableTools={connectedTools}
  onCreate={(playbook) => save(playbook)}
/>
```

Outcomes are required — a Playbook with none cannot be simulated against anything. `BuildGenie` turns a chosen process into the capability it belongs to, and `GenieBlueprint` shows everything that would be created before any of it exists. See §18 of the design guide.

## Types

Every component ships a props interface.

```ts
import type { ButtonProps, SnapFieldAgent, ComposedPlaybook } from '@lamp/design-system';
```

Types are checked in CI against a usage file and against the example app, so a prop that does not exist fails the build rather than rendering an empty page.

## Tree-shaking

The package is side-effect-free apart from its CSS, so a bundler drops what you do not import. Verified in CI: an app importing only `Button` is about half the size of one using thirty components.

## Example

`examples/vite-app` in this repository is a working builder screen — shell, canvas, inspector, the composer — built only from package exports. `npm run build:example`.

## What this is generated from

`project/components` in this repository is the single source. The design-system bundle (`_ds_bundle.js`) and this package are two outputs of it, so a fix lands in both. Don't edit `dist/`.
