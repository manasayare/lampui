# LAMP Design System

The design system for **LAMP** — an enterprise AI operating environment for configuring, simulating, understanding and operating autonomous AI workers.

This repository is the system, not the product. It contains the token architecture, the primitives, the LAMP-specific object components (Agents, Skills, Tools, Playbooks, Genies, Memory), the canvas and runtime languages, and layout templates that prove coverage. Screens built from here should not need to invent new visual rules.

---

## 1. Product context

LAMP is the operating environment a business runs its AI workers inside. The ontology is strict and every surface should respect it:

```
Business → LAMP → Genie → Playbook → Agent → Skill / Tool
```

| Object | What it is | Visual primitive |
| --- | --- | --- |
| **LAMP** | The business operating environment. Holds shared business context, memory, tools, integrations, policies, permissions, history. | Environment (chrome, not an object) |
| **Genie** | A business capability or digital team — Finance Genie, Sales Genie, Recruitment Genie. Contains Playbooks, Agents, Skills, Tools, Memory, Guardrails. | Hive / cluster container |
| **Playbook** | A deterministic or semi-deterministic business process **assembled** from Agents, decisions, policies and human checkpoints. | Cluster frame |
| **Agent** | The primary executable AI worker. Purpose, working memory, skills, tools, authority limits, runtime status. | **Flat-top hexagon** |
| **Skill** | A reusable capability — summarize, reconcile, classify, extract, verify. | **Circle** |
| **Tool** | An external integration — Gmail, Salesforce, SAP, Drive, WhatsApp, MCP tools. | **Square** (6px radius) |

Memory is first-class and scoped at four levels, from narrow to broad: **Agent Working Memory → Playbook Memory → Genie Memory → LAMP Memory**.

### The signature mechanic

**Agents are physical hexagonal units that snap edge-to-edge.** A Playbook feels *assembled*, not diagrammed.

Forbidden, without exception:

- bezier wires, port-to-port connectors, visible input/output ports
- React Flow / Zapier / n8n style rectangular nodes
- arrows between everything, flowchart layouts
- treating spatial arrangement as the runtime graph

Composition is communicated **spatially** (adjacency, bonding, clustering). Execution order lives in the runtime and is exposed in the **Inspector** when needed. A bond means *membership, collaboration, composition* — never a data wire.

### Sources

No codebase, Figma file, screenshots, or brand assets were supplied. The system was authored from a written product design brief ("LAMP — Master Product Design System Brief" plus "LAMP — Core Visual Foundations"), pasted into the project on 15 Sep 2026. Every token value in `tokens/` traces to that brief.

If you have access to material the brief refers to, add it here so future contributors can find it:

- Figma file: _not provided_
- Repository: _not provided_
- Product screenshots: _not provided_
- Logo / brand assets: _not provided_ (see [Brand mark](#6-brand-mark) — nothing was drawn in their place)

Reference systems named in the brief, used for calibration only and never copied: Figma (canvas dominance, contextual inspector), Linear (density, status clarity, keyboard-first), Vercel/Geist (technical restraint), GitHub Primer (state and accessibility completeness), IBM Carbon (data-heavy enterprise components), Atlassian (interaction states), Polaris (documentation structure), Radix (accessible primitives), Railway (dark operational surfaces), Relevance AI (agent configuration ontology), tldraw (canvas mechanics), Rive (animated-state thinking).

---

## 2. Design principles

1. **Quiet at rest, energetic in motion.** Nothing moves, glows or pulses unless something is actually happening. Energy is earned.
2. **Geometry carries identity, colour carries state.** A hexagon is always an Agent; gold always means active LAMP intelligence.
3. **Gold is a conductive material, not a paint.** Roughly 80% neutral graphite/white, 15% semantic status, 5% gold. Primary buttons are graphite — gold is reserved for selection, bonding, execution and Live.
4. **Density is a feature.** Compact 28–32px controls, 32px rows, 8/12px internal padding. This is an operating console, not a marketing page.
5. **Border before shadow.** Structure comes from 1px borders and surface contrast; elevation is used for things that genuinely float.
6. **Progressive disclosure everywhere.** The object shows state; the Inspector shows configuration. Semantic zoom decides what is legible at what scale.
7. **One emphasis at a time.** Current object → current state → required action → operational detail → advanced configuration.
8. **Evidence over assertion.** Learned and inferred content always shows what it observed, how often, and how to confirm or reject it.

---

## 3. Content fundamentals

How LAMP writes. Copy is part of the interaction grammar; it is as systematic as the tokens.

### Voice

Operational, precise, calm. LAMP sounds like a competent colleague reporting facts, not like a product selling itself and not like a chatbot with a personality. Enthusiasm is expressed through precision.

### Person

- Address the operator as **you** — "You'll need to reconnect Salesforce before this Playbook can go live."
- LAMP refers to itself as **LAMP**, in the third person, and only when it is reporting something it did or noticed: "LAMP noticed vendor approvals usually happen in WhatsApp before SAP." Never "I".
- Objects are named, not personified: "Invoice Matcher paused" — not "Invoice Matcher decided to pause" or "I paused".
- Avoid "we". The product is not a team talking to the user.

### Casing

- **Sentence case** everywhere: buttons, labels, headers, menu items, dialog titles, table headers. "Go live", "Run simulation", "Needs attention".
- **UPPERCASE** only at micro size (10–11px, +0.06em tracking) for system/state labels stamped on objects: `SIMULATION`, `POLICY`, `EXCEPTION`, `LIVE`. Never for a sentence, never above 11px.
- Ontology nouns are capitalized when referring to the object type: Agent, Skill, Tool, Playbook, Genie, LAMP Memory. Lowercase when generic: "the agent you selected" is wrong; "the Agent you selected" is right.

### Tone by surface

| Surface | Tone | Example |
| --- | --- | --- |
| Labels & fields | Terse, noun-first | `Authority limit`, `Working memory`, `Escalation path` |
| Buttons | Verb + object, 1–3 words | `Go live`, `Run simulation`, `Approve payment`, `Emergency stop` |
| Status | One or two words, no punctuation | `Running`, `Needs human`, `Auth required`, `Killed` |
| Errors | What happened → what didn't → recovery | "Salesforce write failed. No records were created. Reconnect the account and retry the run." |
| Learned content | Observation + evidence + choice | "Observed 23 times over 6 weeks. [Use this pattern] [Review] [Ignore]" |
| Empty states | One flat sentence + one action | "No Playbooks yet. Playbooks assemble Agents into a process. [New Playbook]" |
| Critical confirmation | Consequence list, present tense | "Immediately: blocks new external write actions, stops new runs, isolates active tasks." |

### Rules

- **No exclamation marks.** Not in success toasts, not anywhere.
- **No emoji.** Status is colour + shape + text, never a glyph from the emoji table.
- **No hype adjectives** — powerful, seamless, magical, effortless, smart, intelligent (as a boast).
- **No anthropomorphism** — Agents don't "think", "want", "try" or "feel". They run, wait, delegate, fail, escalate.
- **No implementation language** in end-user surfaces — no vectors, embeddings, chunks, RAG, prompts-as-plumbing. Say "evidence", "memory", "sources", "instructions".
- **Numbers are specific and tabular.** "3,412 tokens", "23 times", "6.2s". Confidence is a word (`High`, `Needs confirmation`) on end-user surfaces; a percentage only in technical/inspector contexts.
- **Never blame the user.** "Salesforce rejected the write" not "You configured this wrong".
- **Truncate, don't summarize.** IDs, run keys and paths are shown in mono and truncated at the middle (`run_8f21…c4`), never paraphrased.
- Serial commas. No em-dash decoration in UI strings. Periods in sentences, not in labels or status.

### Naming conventions inside the product

Agents are named for the work: `Invoice Matcher`, `Vendor Verifier`, `Payment Approver`. Roles are separate metadata: `Coordinator`, `Specialist`, `Human-supervised`. Playbooks are named as processes: `Vendor onboarding`, `Month-end close`. Genies are named as teams: `Finance`, `Customer Operations`.

---

## 4. Visual foundations

### Material

The system is built from four materials: **graphite**, **warm white**, **brushed gold**, and **controlled light**. Gold behaves like an active conductive material — it illuminates, connects, pulses, transfers and settles. It never decorates.

### Colour

- Neutrals are **warm** graphite (`#F8F8F6` → `#0B0B0A`, 19 steps) so gold sits naturally against them. Never pure black except as deliberate contrast.
- Brand is **LAMP Gold 500 `#D6A82E`** — warm, metallic, not consumer yellow. Light theme text-on-light uses Gold 700/800; dark theme uses Gold 300/400.
- Gold is semantically loaded: **selected Agent, bonding, execution energy, Live environment, primary focus ring**. If something is gold, LAMP is doing something.
- Status: success `#22A06B`, warning `#D9822B`, danger `#D64545`, info `#3478F6`, waiting `#7A6FF0`, neutral `#82827A` — each with a subtle background per theme.
- Environment colours are fixed and must not drift: Draft neutral, Observed slate `#78909C`, Inferred `#7A6FF0`, Learning `#9B6ED6`, Simulation blue `#3478F6`, Validated green, **Live gold**, Paused orange, Stopped graphite, Emergency killed red.
- Memory has its own accent — muted violet-silver `#786F90` — deliberately *not* gold, so stored context reads differently from active runtime energy.
- Tools keep provider colour **inside the provider icon only**. A Gmail tile is neutral with a Gmail glyph; it is never a red tile.
- Charts: gold primary series, blue comparison, green/red for success/failure, then a restrained 8-colour categorical sequence. No gradients, no rainbows, no 3D.

Both themes are the same system: `:root` is light, `[data-theme="dark"]` re-points the same semantic names. Components never reference a primitive scale directly.

### Type

Geist Sans for everything, Geist Mono for technical values — IDs, costs, token counts, durations, timestamps, logs, code. Weights 400/500/600; 700 is rare. No light weights. Headings track −0.02em; micro uppercase labels track +0.06em. Numeric values use `tabular-nums` so columns don't jitter as runs update. Default body is 14/20.

### Space, grid, density

4px base. Internal padding 8/12px, card padding 16px, composition spacing 24px, structural 32px+. Three densities (compact / default / comfortable) via `[data-density]`; builder surfaces default to compact–default. Sidebar 240px, Inspector 320px (resizable 280–480px), runtime drawer 360px, modals 400/560/720px.

### Corners

2px precision elements, 4px tags, 6px inputs and buttons, 8px cards and panels, 12px dialogs and Playbook frames, 999px only for status pills. Agents are hexagonal and inherit no radius. The interface should never look bubbly.

### Borders and elevation

1px hairline is the default; 1.5px for emphasis (selected Agent), 2px for canvas selection outlines. Elevation ladder: 0 canvas → 1 panels → 2 popovers → 3 menus → 4 dialogs → 5 critical overlays, implemented as three shadow tokens that get heavier in dark mode. **Canvas objects rely on borders, not shadows.** Cards are: 1px `border-default`, 8px radius, `surface-primary` fill, `shadow-1` at most — often no shadow at all.

### Backgrounds

No photography, no illustration, no texture, no gradient fills. Surfaces are flat token colours. The only patterned surface in the product is the **canvas**: a dot grid at 8px minor / 32px major, drawn at 5–8% opacity so it nearly disappears at rest, with minor dots hidden below 50% zoom and the grid removed entirely at extreme zoom-out. Hexagonal composition snaps to its own geometric lattice, independent of the visible grid.

### Transparency and blur

Used sparingly and only for: scrims behind dialogs (`rgba` 56–64%), energy glows (`rgba(214,168,46,0.22)`), and inferred/simulation cluster tints at 3–5%. No frosted-glass panels. Panels are opaque so text on them is always at full contrast.

### Motion

Durations: instant 80ms, fast 120ms, standard 180ms, medium 240ms, slow 360ms, bond 420ms, ceremonial 600ms (rare — Go Live, Emergency Stop). Easings: `standard` `cubic-bezier(.2,0,0,1)`, `enter`, `exit`, `magnetic` `cubic-bezier(.16,1,.3,1)` for snapping, `critical`. Forms and text never animate. Panels slide 180ms; popovers fade+scale 120ms; hover is a 120ms colour change only.

The bond sequence is the one expressive moment: proximity (120ms, edge glow 0→20%, scale 1→1.01) → snap-ready (180ms, glow 20→45%, 2–6px magnetic shift) → bond (420ms in four phases: compress 80 / merge 120 / pulse 180 / settle 120) → calm bonded rest. Disconnect stretches a filament proportional to drag, breaks ~24–36px past tolerance, releases in 180ms.

Under `prefers-reduced-motion`, travelling energy, compression and pulse loops are replaced by border state changes, static highlights and opacity transitions capped at 120–180ms.

### Interaction states

- **Hover:** one step of surface change (`surface-hover`), or one step of border darkening on canvas objects. Never a lift, never a scale on UI chrome.
- **Press:** one step further (`surface-active`) plus, on canvas objects only, a 0.99 scale. No shadows appear on press.
- **Focus:** always visible — `0 0 0 2px canvas, 0 0 0 4px gold` double ring. Never removed, never replaced by colour alone.
- **Selected:** gold 1.5–2px border plus gold-50/gold-950 fill. **Multi-selected:** blue outline, so "selected group" never reads as "activated Agent".
- **Disabled:** 40% opacity, no pointer, no hover.
- **Loading:** inline spinner or skeleton in place; never a full-screen blocking loader.

### Layout rules

Desktop-first at 1440/1280/1024. The builder is a fixed shell: 48px header, 240px left structure panel, dominant centre canvas, 320px right Inspector, optional 40px bottom toolbar, 28px status bar. Header, panels and toolbars are fixed; only the canvas and panel bodies scroll. At 1024px the left panel collapses to 48px icons; below that the Inspector overlays. Phones get monitoring, approvals, alerts and emergency controls only — never builder parity.

---

## 5. Iconography

**Material Symbols Outlined (weight 400)**, one family, no mixing. Icons are **real SVG vectors** — fetched from `@material-symbols/svg-400/outlined/` and inlined by the `Icon` component so they inherit `currentColor`. Default 16px; 14px small, 20px large; 12/18/24 available.

Absolutely prohibited: emoji as interface icons, Unicode characters standing in for icons (no ✓ ✗ → ● +), ASCII symbols, letters inside circles pretending to be icons, a Material Symbol **name rendered as visible text** (`<span>settings</span>`), font ligatures, glyphs typed from Geist, or hand-drawn SVG approximations of a symbol that already exists.

Rules:

- Stroke/outlined forms everywhere. **Filled** only for: status indicators (the dot inside a StatusBadge), provider marks, and deliberate active states.
- Icons follow the text they sit with: `text-secondary` inline, `text-primary` active, `text-disabled` at 40%, the status colour for status, `status-danger` for destructive.
- An icon may stand alone only where its meaning is unambiguous (canvas toolbar, close, chevron, overflow) and then it needs an `aria-label` — `IconButton` requires one.
- Object primitives are **not** icons: an Agent is a drawn hexagon, a Skill a circle, a Tool a square. Never substitute a glyph for an object.
- **Third-party logos** use official provider marks, with [Simple Icons](https://simpleicons.org) as the fallback, rendered through `BrandIcon`. Inside a neutral ToolTile at 16–20px — the only place brand colour other than gold appears.

Mapping used across the kits: Agent `hexagon`, Skill `circle`/capability glyph, Tool `square`, Playbook `layers`, Genie `hive`, LAMP `lightbulb`, Memory `database`, Simulation `science`, Live `bolt`, Pause `pause`, Safe stop `stop_circle`, Emergency `dangerous`, Approval `how_to_reg`, Run `play_arrow`/`history`, Learning `flare`, Policy `gavel`, Evidence `fact_check`, Cost `receipt`, Audit `receipt_long`, Tools `handyman`/`extension`, Safety `shield`.

Icons and webfonts are **vendored into `assets/`**, not CDN-loaded. An operating console should not have a toolbar that empties when a CDN is unreachable, and a blocked request renders a placeholder box where a control's meaning should be. `tools/vendor-assets.mjs` copies only the glyphs the system actually references (159 of the 7,000-icon set) plus the five Geist faces, and `npm run check` fails if any component names an icon that is not there.

The `Icon` component derives the asset root from the bundle's own `<script src>`, so a card three directories deep and a kit two directories deep both resolve without configuring anything. Set `window.LAMP_ASSET_BASE` before the bundle loads to serve them elsewhere.

**Simple Icons carries no Microsoft marks**, so Outlook, Excel and SharePoint fall back to the generic Tool glyph. That is a gap in the icon set, not in the system: a connector is a *category* ("Email"), and a business running Outlook still matches it.

## 6. Brand mark

**No logo was provided and none was drawn.** Anywhere a mark would go, LAMP is set as a wordmark in Geist Sans 600 with +0.08em tracking — gold on graphite, or graphite on warm white. `thumbnail.html` and the UI kit headers use this treatment. If you have the real mark, drop it at `assets/logo.svg` and replace the wordmark usages; `assets/README.md` lists them.

Brand direction from the brief, for whoever makes the mark: geometric, technical, premium, calm — a geometric lamp/seal abstraction with hexagonal construction, gold-on-graphite, controlled luminous energy, slightly ceremonial. Not a cartoon lamp, not genie smoke, no sparkles, no purple magic gradients.

---

## 7. Accessibility

WCAG 2.2 AA minimum. 4.5:1 for normal text, 3:1 for large text and UI boundaries. Visible focus on everything focusable. Full keyboard operation including the canvas: Agents are tab-selectable, and **bonding has a non-drag alternative** (select Agent → `B` → pick target, or Inspector → Add to Playbook). No colour-only meaning — every status is colour **plus** icon/shape **plus** text. Reduced-motion and high-contrast supported. 32px minimum for compact desktop controls, 44px where touch is relevant.

Known contrast care points: gold on white fails for body text — use `text-brand` (Gold 700/800) for gold-tinted text on light, and Gold 300/400 on dark. Gold is a *border and fill* colour in light theme, not a text colour.

---

## 8. Keyboard

`Cmd/Ctrl+K` command palette · `Space+drag` pan · `F` fit selection · `+`/`-` zoom · `Delete` remove selected · `Esc` deselect/close · `Enter` open selected · `B` bond mode · `S` simulation · `Cmd+Z` / `Cmd+Shift+Z` undo/redo · `/` search · `G` then `R` go to runs. Standard browser shortcuts are not hijacked.

---

## 9. Index

| Path | What's there |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` list only. |
| `tokens/fonts.css` | Geist Sans + Geist Mono (Google Fonts) and the family tokens. |
| `tokens/colors.css` | Primitive scales, light semantics on `:root`, dark on `[data-theme="dark"]`. |
| `tokens/typography.css` | Type scale, weights, tracking, `.lamp-*` text utilities. |
| `tokens/space.css` | 4px scale, control heights, row heights, panel widths, `[data-density]`. |
| `tokens/geometry.css` | Radius, border widths, opacity, z-index, icon sizes. |
| `tokens/elevation.css` | Three shadows, six-level elevation ladder, dark overrides. |
| `tokens/motion.css` | Durations, easings, bond phase timings, keyframes, reduced-motion. |
| `tokens/objects.css` | Agent/Skill/Tool/Playbook/Genie/Bond/Canvas geometry and state tokens. |
| `tokens/dataviz.css` | Categorical sequence, neutral comparison ramp, chart chrome. |
| `tokens/base.css` | Element defaults, focus ring, link colours, scrollbars, canvas surface. |
| `guidelines/` | 22 foundation specimen cards (the Design System tab) + deeper prose specs. |
| `guidelines/bonding.md` | Full bond lifecycle spec: states, visuals, timings, non-drag path. |
| `guidelines/semantic-zoom.md` | What renders at each zoom range. |
| `guidelines/motion.md` | Motion inventory per interaction. |
| `guidelines/accessibility.md` | WCAG 2.2 AA rules, keyboard, screen-reader and contrast specifics. |
| `guidelines/coverage.md` | Coverage matrix: layers, the composition map, and what is specified but unbuilt. |
| `components/core/` | Button, IconButton, Badge, StatusBadge, StatusDot, Tag, Card, Panel, Tooltip, Kbd, EnvironmentPill, Divider. |
| `components/forms/` | Field, TextInput, Textarea, SearchInput, NumberInput, Select, Checkbox, Radio, Switch, Slider, TagInput, KeyValueInput, PromptEditor, CodeFrame, SecretField, VariableToken. |
| `components/navigation/` | GlobalHeader, Breadcrumb, SideNav, ObjectTree, Tabs, SegmentedControl, WorkspaceSwitcher, StatusBar. |
| `components/objects/` | AgentHex, SkillOrb, ToolTile, PlaybookCluster, GenieCard, BondEdge, EntityChip, ObjectRow. |
| `components/canvas/` | SnapField, CanvasSurface, CanvasToolbar, CanvasZoomControls, CanvasMinimap, CanvasObjectToolbar, CanvasContextMenu, SnapGuide, CanvasMotion (GSAP runtime). |
| `components/inspector/` | InspectorPanel, InspectorHeader, InspectorTabs, InspectorSection, InspectorField, InspectorFooter, PropertyRow. |
| `components/memory/` | MemoryGraph, MemoryBadge, MemoryFact, MemoryScope, MemoryScopeBar, MemoryConfidence, MemoryConflict, MemoryTimeline, MemoryUsageBar. |
| `components/runtime/` | EnvironmentBanner, SimulationBar, SimulationStep, RunTimeline, RunStep, RunSummary, LiveActivityIndicator, ApprovalCard, HumanCheckpoint, KillSwitch, SafetyControls, ReadinessCheck. |
| `components/data/` | Viz, DataTable, MetricCard, Sparkline, LineChart, BarChart, StackedBar, DonutChart, ScatterPlot, Heatmap, HexHeatmap, ContextBreakdown, ProgressBar, UsageMeter, ChartFrame. |
| `components/feedback/` | Toast, InlineNotification, Banner, EmptyState, Skeleton, Spinner, Modal, Drawer, CommandPalette, ErrorState. |
| `ui_kits/lamp-canvas/` | The builder: Genie canvas, bonded Playbook, Agent selection, Inspector, simulation, command palette. |
| `ui_kits/lamp-operations/` | Operations: run history, Run Inspector, approval queue, safety centre, learned intelligence. |

| `assets/` | Vendored icons (`icons/`), provider marks (`brand/`), Geist webfonts (`fonts/`) and `manifest.json`. Generated by `tools/vendor-assets.mjs`. |
| `assets/README.md` | Asset inventory, absences, and the wordmark treatment. |
| `../tools/` | `build-bundle.mjs` regenerates `_ds_bundle.js`; `check-system.mjs` and `verify-browser.mjs` are the two checks. See the repository README. |
| `SKILL.md` | Agent Skills entry point. |
| `thumbnail.html` | Homepage tile. |

## 10. Component index

150+ exports across twelve groups. Read a component's `.prompt.md` before using it; its `.d.ts` is the props contract.

**core** — `Icon`, `BrandIcon`, `Button`, `SplitButton`, `IconButton`, `Badge`, `StatusBadge`, `StatusDot`, `Tag`, `Card`, `Panel`, `Tooltip`, `Kbd`, `EnvironmentPill`, `Divider`

**forms** — `Field`, `TextInput`, `SearchInput`, `NumberInput`, `SecretField`, `Textarea`, `Select`, `Checkbox`, `Radio`, `RadioGroup`, `Switch`, `Slider`, `TagInput`, `KeyValueInput`, `PromptEditor`, `VariableToken`, `CodeFrame`

**navigation** — `AppShell`, `GlobalHeader`, `WorkspaceSwitcher`, `Breadcrumb`, `SideNav`, `NavSection`, `NavItem`, `ObjectTree`, `Tabs`, `SegmentedControl`, `StatusBar`, `CommandPalette`, `FilterBar`, `Pagination`

**objects** — `AgentHex`, `HexLattice`, `HexCenter`, `BondEdge`, `BondLayer`, `SkillOrb`, `ToolTile`, `ToolRow`, `AgentIsland`, `PlaybookCluster`, `GenieCard`, `ObjectRow`, `ObjectList`, `EntityChip`

**canvas** — `SnapField`, `CanvasSurface`, `SnapGuide`, `CanvasToolbar`, `CanvasZoomControls`, `CanvasObjectToolbar`, `CanvasMinimap`, `CanvasContextMenu`

**inspector** — `InspectorPanel`, `InspectorHeader`, `InspectorTabs`, `InspectorFooter`, `InspectorSection`, `InspectorField`, `PropertyRow`

**memory** — `MemoryGraph`, `MemoryBadge`, `MemoryScope`, `MemoryScopeBar`, `MemoryConfidence`, `MemoryFact`, `MemoryConflict`, `MemoryUsageBar`, `MemoryTimeline`

**runtime** — `EnvironmentBanner`, `SimulationBar`, `SimulationStep`, `RunTimeline`, `RunStep`, `LiveActivityIndicator`, `RunSummary`, `ApprovalCard`, `HumanCheckpoint`, `KillSwitch`, `SafetyControls`, `ReadinessCheck`

**data** — `Viz`, `ChartFrame`, `ChartLegend`, `ChartTooltip`, `MetricCard`, `Sparkline`, `LineChart`, `BarChart`, `StackedBar`, `DonutChart`, `ScatterPlot`, `Heatmap`, `HexHeatmap`, `ContextBreakdown`, `ProgressBar`, `UsageMeter`, `DataTable`

**feedback** — `InlineNotification`, `Toast`, `ToastStack`, `EmptyState`, `Skeleton`, `Spinner`, `Modal`, `CriticalConfirmation`, `Drawer`, `Popover`, `ErrorState`

**dashboard** — `DashboardPage`, `PageHeader`, `SectionHeader`, `DashboardCard`, `DashboardGrid`, `StatGrid`

**chat** — `AgentChat`, `ChatStatus`, `ChatMessage`, `ChatAvatar`, `ChatActivity`, `ChatCitation`, `ChatDayDivider`, `ChatComposer`, `ChatQuickReplies`

**patterns** — `IntegrationCard`, `PermissionMatrix`, `PermissionCell`, `RoleBadge`, `LearnedPattern`, `ObservedProcess`, `ProcessProposal`, `PlaybookComposer`, `GenieBlueprint`, `Conversation`, `Message`, `MessageList`, `Composer`, `VoiceButton`, `VoiceWaveform`, `MobileShell`

Also exported for composition: `STATUS` (the status map), `AGENT_SIZES`, `SKILL_SIZES`, `TOOL_SIZES`, `FACT_TYPES`, `MEMORY_SCOPES`, `DATAVIZ`, `VIZ_TIERS`, `BUSINESS_PROCESSES`, `BLANK_PROCESS`, `MatchProcess`, `BuildGenie`, `GSAP_CDN`, `GSAP_EASE`, `GSAP_DURATION`, `MATERIAL_SYMBOLS_BASE`, `BRAND_ICON_BASE`.

### Intentional additions

Two components exist that no brief named, because the system needs them and consumers would otherwise invent them:

- **`Icon` / `BrandIcon`** — the wrapper that guarantees Material Symbols arrive as real SVG vectors inheriting `currentColor`, and that provider marks stay monochrome inside neutral tiles.
- **`HexLattice` / `HexCenter`** — the honeycomb layout maths. Without it every screen would hand-place hexagons and the snap lattice would drift.
- **`CanvasMotion`** — the GSAP loader and the token-to-GSAP mapping. Exports no component; it exists so `SnapField` and `CanvasSurface` share one motion runtime instead of each loading their own.
- **`BusinessProcess` / `PlaybookComposer` / `GenieBlueprint`** — the standard process library, the dialog that proposes from it, and the Genie it builds. Added because the brief's object model assumes a Playbook already has a purpose, connectors and expected outcomes, and never says where those come from. See §18.

## 11. Visualization architecture

One API, four renderer tiers. The user never learns which library ran.

| Tier | Library | Used for |
| --- | --- | --- |
| standard | shadcn Charts + Recharts | line, area, bar, horizontal bar, stacked, 100% stacked, histogram, donut, gauge, scatter, sparkline |
| advanced | Apache ECharts | heatmap, calendar, treemap, sunburst, sankey, graph/network, parallel coordinates, large scatter, dense time series, brush interactions |
| native | visx | LAMP-specific geometry: hive heatmaps, Agent constellations, Genie composition maps, memory topology, process fingerprints, authority surfaces |
| realtime | uPlot | token telemetry, model and tool latency, throughput, active runs per second — thousands of points |
| tables | TanStack Table | sorting, filtering, selection, grouping, pinning, resizing, virtualization, pagination — presented through `DataTable` |

Every tier consumes LAMP tokens and renders inside `ChartFrame`. No library defaults, ever. `Viz` carries the type → tier map in `VIZ_TIERS`.

## 12. Dashboards

Dashboards follow **shadcn/ui structure** with LAMP tokens — the card is header (title + description + actions) / content / optional footer, at 8px radius with a 1px border and no shadow by default.

The page scaffold is fixed so no two dashboards drift apart:

`DashboardPage` (20px padding, 16px section rhythm) → `PageHeader` (title, one-sentence description, meta badges, right-aligned actions) → optional toolbar (`FilterBar` / `Tabs` / `SegmentedControl`) → `StatGrid` of `MetricCard`s → `SectionHeader` → `DashboardGrid` of `DashboardCard`s.

Rules:

- Charts inside a card use `<ChartFrame flush>` — never two nested frames, never two titles for one chart.
- Tables and full-bleed charts use `<DashboardCard flush>` so they meet the card edge.
- `DashboardGrid` collapses 4 → 2 columns at 1100px and to a single column at 760px. Cards must never set a fixed height that clips text.
- A dashboard opens with at most four stat cards. If it needs more, it needs a section.
- No shadow stacking, no coloured left borders, no card-in-card.

## 13. Chat

The conversational surface is where people who don't build in the canvas actually meet LAMP — field staff, approvers, mobile users, low-literacy users. It is deliberately not a generic chatbot.

Six things make it LAMP's:

1. **Hexagonal identity.** Agent avatars are hexagons; the thread header shows the crew as overlapping hexagons, with the acting Agent gold-ringed. Users are circles, Tools and system notes are quiet squares.
2. **Visible work.** Every Agent message can carry an activity strip above the text — square chips for Tool calls, violet pills for memory reads, round chips for Skills, with durations and a failed state. The user sees what was actually done, not a spinner.
3. **Openable provenance.** Claims carry numbered evidence pills (`ChatCitation`) that name their source — "SAP · PO-9921", "Genie memory" — instead of asking for trust.
4. **Decisions in the thread.** Approvals, choices and memory conflicts arrive as `attachment` cards inside the message (`ApprovalCard`, `MemoryFact`, `CodeFrame`, `Viz`). No modal interrupts a conversation.
5. **An honest status line.** `ChatStatus` names who is working, on what, with the running token count and a **Stop** button — and when nothing is running it says so plainly rather than idling an animation.
6. **Always-visible scope.** The composer carries a scope pill ("Talking to · Finance Genie"), so the user is never guessing which Genie or Agent they are addressing.

Conventions: Enter sends, Shift+Enter breaks the line, quick replies cover the expected answers (2–4, structured beats free text for decisions), attach and voice sit in the composer row, streaming shows a gold caret and never fake typing, failed messages show "Not delivered" with Retry, and consecutive messages from one author are `grouped`. Under `prefers-reduced-motion` the working dots and caret become static.

`Conversation` / `Message` / `Composer` in `components/patterns/` remain as the minimal embedded thread (a run trace, a side panel). Use `AgentChat` for any surface where conversation is the primary interaction.

## 14. Playbooks are sections, not blobs

A Playbook frame behaves like a **section on a FigJam board** — a named, resizable region you put work into. Inside it, Agents can be arranged three ways at once:

- **Bonded** — snapped edge-to-edge in a `HexLattice` with visible bond seams. Use when the Agents genuinely hand work to each other in sequence.
- **Islands** — several `AgentIsland` groups working in parallel, each with a short label and an optional note ("human checkpoint", "runs in parallel").
- **Standalone** — a single Agent working on its own, `solo`, labelled quietly.

Bonds exist **only within an island**. Two islands in the same Playbook are related by *membership in the section*, not by a wire — which is exactly why the system has no connectors. `layout="free"` positions islands by coordinate, `dropState` gives drag-in/drag-out feedback, `collapsed` reduces a section to its title row, and `resizable` shows the corner grip.

## 15. Live behaviour

The canvas earns its stillness. Movement always means work in progress, so a board of thirty Agents only animates where something is actually happening.

- **queued** completely still · **starting** one 240ms ring contracting inward · **running** a slow 1.8s gold throb · **delegating** the same throb plus a spark travelling the bond to the delegate · **waiting / needs human** the throb stops and only the status dot pulses · **retrying** a faster 900ms throb · **succeeded** one 520ms ring expanding outward, then **still**, with the green border fading back to default over 1.2s · **failed** one 160ms 2px shake, then quiet with a persistent red border · **paused** the energy dissipates once · **killed** no motion, slight desaturation.

The full table is in `guidelines/motion.md`. Under `prefers-reduced-motion` every beat becomes a static ring at 35% opacity.

Hover, focus and the click target are the **hexagon itself** — never its bounding box, never the label beside it — so two Agents sitting close together are never ambiguous.

## 16. Direct manipulation on the canvas

`SnapField` owns drag-to-snap, and it runs on **GSAP Draggable**. GSAP owns the pointer maths — capture, touch-action, transforms, the pointer/touch/pen differences — so the component only answers the two questions that are actually LAMP's: which lattice slot is nearest, and is it free.

**Agents cannot overlap, by construction.** Every position is a cell of the hexagonal lattice, and a cell holding another Agent is excluded *before* the distance search runs. An occupied slot can never be chosen, lit, or committed to; a drag that ends with no free cell in range returns the Agent where it came from. Because positions are cells rather than free pixels, two Agents cannot partially overlap either.

**Legal cells are derived from the field's own box**, not a fixed window, so an Agent can never be dropped outside the canvas or half off its edge.

**Two ranges, and both matter:**

| Range | Default | What happens |
| --- | --- | --- |
| Proximity | 72px | The nearest free slot lights up. The Agent stays exactly under the pointer. *"There is something here."* |
| Snap tolerance | 34px | The slot arms and the Agent drifts toward it — a partial pull, in the specified 2–6px band. *"Release and it lands here."* |

That is the brief's bond lifecycle — proximity, then compatible proximity, then snap threshold — made literal. Remove the outer range and you get magnetism with no warning, which reads as the canvas glitching rather than helping.

`onSnapStateChange` emits `dragging` → `proximity` → `snapReady` → `idle`. Drive the canvas status line, the bond preview and the sound hooks from that one source.

**Selection.** With `selectable`, dragging on empty canvas draws a marquee; dragging on a hexagon still moves it. An Agent is caught when its **centre** falls inside the band — the same rule the lattice uses, so selection and snapping always agree about where an Agent is. Two or more selected draws the group outline and offers the action that opens `PlaybookComposer`.

**Panning** is `CanvasSurface pannable` — space-and-drag, also on Draggable, with pan and zoom on separate nodes so GSAP and React never fight for the same transform.

**The keyboard equivalent is built in, not bolted on:** focus an Agent and the arrow keys move it one lattice cell at a time, refusing occupied and out-of-bounds cells. That path never touches GSAP and works even if GSAP fails to load. No composition in LAMP is pointer-only — the drag is the enhancement, the keyboard is the guarantee.

GSAP loads from CDN on first use (`CanvasMotion`), with `GSAP_EASE` and `GSAP_DURATION` mapping `tokens/motion.css` onto GSAP's API. `ease.magnetic` is the snap curve.

## 17. Memory as a graph

`MemoryGraph` is the memory topology — an Obsidian-style force graph over facts, policies, observed patterns, entities, and the Agents and Tools that touch them.

- **Hover isolates a neighbourhood** — the hovered node and its direct links stay full strength, everything else drops to 18%. This is the interaction that makes the graph answer "what does this fact touch?" instead of being a hairball.
- **Geometry carries type, not just colour** — hexagon = Agent, square = Tool, diamond = scope, circle = fact or entity. Dashed links are inferred or suggested; heavier red links are conflicts.
- **It settles and stops.** The simulation decays over ~260 frames and freezes, and the layout is deterministically seeded so the same graph always looks the same. A memory graph at rest does not drift. Reduced motion runs the simulation synchronously and paints only the settled result.

## 18. From a group of Agents to a defined Playbook

The brief's object model assumes a Playbook already has a purpose, connectors and expected outcomes, and never says where those come from. In practice an operator draws a box around four hexagons knowing the Agents belong together, and cannot tell you cold what the process is called, which systems it has to touch, or what "working" would mean. Asking them on a blank form gets a blank form back — or worse, a Playbook running in production that nobody defined success for.

So LAMP proposes. The flow is one path with three components behind it:

```
SnapField (marquee select → outline → Group into Playbook)
  → PlaybookComposer   (proposes the process, pre-fills the definition)
    → GenieBlueprint   (optional — the capability the process belongs to)
```

**`BUSINESS_PROCESSES`** is a library of eight processes present in essentially every business, under names that have been stable for decades: procure-to-pay, order-to-cash, record-to-report, hire-to-retire, lead-to-opportunity, issue-to-resolution, vendor onboarding, expense-to-reimbursement. Each carries its steps, its connector categories, its human checkpoints, the exceptions that actually happen, and — the part nobody writes down — its expected outcomes and how they are measured.

**`MatchProcess`** scores a selection against the library and returns ranked candidates **with the evidence for each**: which of the usual roles it recognised, which signals fired. Confidence is reported as `High` / `Medium` / `Low` and never as a percentage; word overlap is a decent hint and a terrible measurement.

**`PlaybookComposer`** opens already filled in, and enforces three rules:

1. **Nothing is accepted silently.** Every pre-filled connector, outcome and checkpoint is a checkbox; unticked items never reach the result.
2. **The proposal is never the only option.** Other matches are one click away, the library is browsable, and "Something else" starts blank.
3. **Outcomes are required.** Create is disabled until at least one is chosen, and says why. *A Playbook with no expected outcome cannot be simulated against anything and cannot be said to have failed.*

Connector rows show **live connection state**, so "this needs ERP write access and you do not hold it" surfaces before the Playbook exists rather than at the first failed run. A missing connector is a warning, not a blocker — a draft is allowed to name access it does not yet have.

**`BuildGenie` / `GenieBlueprint`** set up the capability the process belongs to. A business running procure-to-pay almost always also runs record-to-report and expense claims; they share vendors, a ledger, an approval hierarchy and a definition of materiality. The blueprint lists **everything that would be created** — every Playbook, every Agent role, every access grant — before any of it exists, and suggested Playbooks can be dropped. "LAMP created eleven objects while you weren't looking" is the opposite of the trust this product needs.

Everything produced by this flow is a **draft**. Creating a Genie authorizes no connector; each is granted separately, by a person. Guardrails are not optional: a Genie starts with its domain's safety posture already on — no external write without a human checkpoint, spend authority unset rather than unlimited, and a kill switch scoped to it from the moment it exists.
