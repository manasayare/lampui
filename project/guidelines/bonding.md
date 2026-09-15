# Bonding — the signature LAMP interaction

Agents are physical hexagonal units that **snap edge-to-edge**. A bond means membership, collaboration and composition inside a Playbook. It never means a data wire, and it is never drawn as a port-to-port connector.

## Lifecycle

| Phase | Trigger | Visual | Timing |
| --- | --- | --- | --- |
| Idle | — | 1px `border.default`, no motion | — |
| Proximity | dragged Agent within ~3 cells | edge glow 0 → 20%, scale 1 → 1.01 | 120ms `ease.magnetic` |
| Compatible proximity | target accepts this Agent | target border → Gold 300, dashed | 120ms |
| Incompatible proximity | target rejects (role, authority, scope) | target border → `status.danger`, 1px, no glow; cursor `not-allowed` | 120ms |
| Snap threshold entered | within snap tolerance of a lattice slot | glow 20 → 45%, magnetic shift 2–6px toward the slot, dashed SnapGuide on the slot | 180ms |
| Bond preview | held at the slot | ghost hexagon at 40% in the slot, BondEdge in `preview` state (1.5px dashed Gold 400) | — |
| Bond commit | release | four phases: compress 80ms → edge merge 120ms → energy pulse 180ms → settle 120ms | 420ms total |
| Bonded | settled | gap 0–2px, solid BondEdge + junction dot, **no animation** | — |
| Disconnect drag | drag a bonded Agent | filament stretches, opacity 100 → 20% proportional to distance | live |
| Bond tension | past resting tolerance | filament thins, junction dot shrinks | live |
| Bond threshold | ~24–36px past tolerance | filament flashes once at `energy.bright` | 80ms |
| Bond break | release past threshold | filament snaps, both Agents settle back to idle borders | 180ms |
| Post-break settle | — | neighbours re-flow into the lattice | 180ms `ease.standard` |

## Non-visual feedback

Do not rely on glow alone. Every phase is carried by at least two of: geometry (magnetic shift, gap), border (colour and weight), energy (glow, filament), and text (canvas status line, e.g. "Snap to Vendor payment").

## Bond states (BondEdge)

`valid` solid Gold 600 · `manual` solid Gold 600 · `incomplete` dashed neutral · `requiresConfig` solid orange · `conflicting` solid red · `suggested` dashed violet · `learned` dashed violet · `locked` solid graphite with a ring on the junction · `preview` dashed Gold 400.

Suggested and learned bonds must always be visually weaker than confirmed ones.

## Non-drag alternative (required)

Bonding must be completable without a pointer:

1. Select an Agent (`Tab` / arrow keys on the canvas).
2. Press `B` to enter bond mode — compatible targets get the `compatible` treatment and are announced in a live region.
3. Arrow keys cycle candidate slots; `Enter` commits; `Esc` cancels.
4. Or: Inspector → Playbook → **Add to Playbook**, which performs the same commit without the canvas.

Breaking a bond: select the Agent, `Shift+B`, or Inspector → **Break bond**.

## Feedback hooks (sound / haptics)

Documented for implementation; all optional, all short, none arcade-like.

| Event | Sound | Haptic |
| --- | --- | --- |
| snap-ready | 8ms soft tick, −24dB | light |
| bond | two-tone 40ms settle | medium |
| unbond | single 30ms damped click | light |
| simulation-start | 60ms rising pair | — |
| simulation-success | 90ms resolved pair | light |
| Live activation | 140ms warm three-note settle | medium |
| warning | 50ms flat double tick | light double |
| critical stop | 200ms descending damped tone | strong |

Accessibility alternative: every audio cue has a corresponding status-bar text change and a live-region announcement, so sound is never the only signal.
