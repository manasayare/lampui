# Dashboard with shadcn chat

_Started 2026-09-15 03:06 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "Design System"
Current date is now September 15, 2026
</system-info>

<pasted_text name="Create design system">
We will create a design system in this project.

**Company description:** LAMP

**Additional notes:**
# LAMP — MASTER PRODUCT DESIGN SYSTEM BRIEF

Design a complete, production-grade design system for **LAMP**, an enterprise AI operating environment for configuring, simulating, understanding, and operating autonomous AI workers.

This task is specifically to create the **design system and component library**, not the final application screens.

The output must be sufficiently systematic that future screens can be generated from these components without inventing new visual rules.

The system must cover:
- visual foundations
- tokens
- primitives
- components
- layouts
- canvas mechanics
- agent objects
- Playbook composition
- data visualization
- memory visualization
- tool/integration states
- runtime states
- simulation
- live operations
- safety controls
- forms
- navigation
- feedback
- motion
- accessibility
- density
- responsive behaviour

Create this like an enterprise-grade internal design system comparable in completeness to mature systems from:
- Figma
- Linear
- Vercel / Geist
- GitHub Primer
- IBM Carbon
- Atlassian Design System
- Shopify Polaris
- Radix UI
- shadcn/ui
- Stripe Dashboard
- Railway
- Relevance AI
- Framer
- tldraw

Use those as references for:
- clarity
- density
- state design
- tokenization
- accessibility
- inspector patterns
- technical surfaces
- toolbars
- forms
- tables
- contextual controls

Do not copy any one system.

LAMP needs its own interaction grammar.

---

# 1. PRODUCT CONTEXT

LAMP is an AI operating environment used by businesses.

Core hierarchy:

Business
→ LAMP
→ Genie
→ Playbook
→ Agent
→ Skill / Tool

Memory exists at multiple levels:

- LAMP Memory
- Genie Memory
- Playbook Memory
- Agent Working Memory

Important ontology:

## LAMP
The business operating environment.

For many businesses, one Business can operate through one LAMP.

A LAMP contains:
- multiple Genies
- shared business context
- business memory
- tools
- integrations
- policies
- permissions
- operational history

## Genie
A business capability or digital team.

Examples:
- Finance Genie
- Sales Genie
- Customer Operations Genie
- Recruitment Genie

A Genie can contain:
- multiple Playbooks
- multiple Agents
- Skills
- Tools
- Memory
- Guardrails

## Agent
The primary executable AI worker.

VISUAL PRIMITIVE:
**Hexagon**

An Agent:
- has a purpose
- has Working Memory
- has Skills
- can use Tools
- can act independently
- can participate in Playbooks
- can delegate
- can require human input
- has authority limits
- has runtime status

## Skill
Reusable capability.

VISUAL PRIMITIVE:
**Circle**

Examples:
- summarize
- reconcile
- classify
- extract
- search
- verify
- translate
- schedule

## Tool
External integration or capability.

VISUAL PRIMITIVE:
**Square**

Examples:
- Gmail
- Salesforce
- SAP
- Google Drive
- Calendar
- WhatsApp
- APIs
- MCP tools

## Playbook
A deterministic or semi-deterministic business process composed from Agents, Skills, Tools, decisions, policies and human checkpoints.

CRITICAL:

PLAYBOOKS ARE NOT VISUAL NODE GRAPHS.

Agents physically snap together into coherent hexagonal compositions.

A Playbook should feel:

**assembled, not diagrammed.**

Do not use visible:
- bezier wires
- port-to-port connectors
- React Flow style nodes
- arrows between everything
- traditional flowchart UI
- Zapier/n8n visual language

The runtime may internally use graphs, but this is hidden from the main design language.

---

# 2. CORE VISUAL DIRECTION

The product should feel:

- minimal
- technical
- precise
- calm
- high-trust
- sophisticated
- spatial
- responsive
- advanced without looking complicated
- enterprise capable
- engineered rather than decorated

Visual quality target:

Figma × Linear × Vercel × Railway × high-end scientific software.

Avoid:

- cyberpunk
- excessive neon
- gaming UI clichés
- glassmorphism everywhere
- gratuitous gradients
- giant glowing borders
- AI-purple clichés
- cartoon AI mascots
- robot illustrations
- generic SaaS dashboards
- over-rounded cards
- excessive shadows
- enormous whitespace
- low-density consumer SaaS layouts

The interface should remain visually quiet until something is happening.

**Energy and motion appear during interaction or runtime.**

At rest:
- stable
- quiet
- precise
- low visual noise

During:
- snapping
- bonding
- simulation
- execution
- waiting
- warning
- failure

the system can become visibly energetic.

---

# 3. THEMING

Design both:

## Light theme
Primary:
- neutral
- slightly warm or neutral white
- highly readable
- appropriate for daytime enterprise work

## Dark theme
Primary:
- deep neutral graphite
- avoid pure black except deliberate contrast
- appropriate for prolonged technical work

Do not create two unrelated themes.

Every token must be semantic and themeable.

Never hard-code component colours.

Create semantic tokens such as:

surface.canvas
surface.primary
surface.secondary
surface.raised
surface.overlay
surface.selected
surface.hover
surface.disabled

border.subtle
border.default
border.strong
border.focus
border.selected

text.primary
text.secondary
text.tertiary
text.disabled
text.inverse

status.success
status.warning
status.danger
status.info
status.waiting

runtime.simulation
runtime.live
runtime.paused
runtime.stopped
runtime.learning

energy.primary
energy.secondary

Brand accent must be implemented as a replaceable semantic token.

Do not make the entire product depend on one specific brand colour.

---

# 4. DESIGN TOKEN ARCHITECTURE

Create a full token system.

Organize tokens into:

## Primitive tokens

color.gray.0–1000
color.brand.*
color.red.*
color.orange.*
color.green.*
color.blue.*
color.purple.*

space.*
radius.*
shadow.*
opacity.*
duration.*
easing.*
font.*
lineHeight.*
letterSpacing.*
borderWidth.*
zIndex.*

## Semantic tokens

surface.*
text.*
border.*
interactive.*
status.*
runtime.*
object.*
energy.*
dataViz.*

## Component tokens

button.*
input.*
panel.*
hexagon.*
skill.*
tool.*
playbook.*
badge.*
table.*
tooltip.*
popover.*
canvas.*

Every component must consume semantic/component tokens.

---

# 5. SPACING SYSTEM

Use a 4px base unit.

Suggested scale:

0
2
4
6
8
12
16
20
24
32
40
48
64
80
96

Prefer:
- 8px / 12px internal compact padding
- 16px default card padding
- 24px larger composition spacing
- 32px+ major structural spacing

Support three densities:

Compact
Default
Comfortable

Most LAMP builder surfaces should use:

**Compact / Default**

Do not default to oversized SaaS spacing.

---

# 6. TYPOGRAPHY

Use a modern neutral technical sans.

Preferred reference:
**Geist / Geist Sans**

Also support:
**Geist Mono** for technical values.

Typography must feel engineered and highly legible.

Create styles for:

Display
Heading 1
Heading 2
Heading 3
Heading 4

Body large
Body
Body small

Label large
Label
Label small

Caption
Micro

Code
Code small

Numeric metric large
Numeric metric
Numeric metric small

Do not rely on excessive font weights.

Suggested main weights:
400
500
600

700 only when materially necessary.

Tables, data values, IDs and execution metadata can use mono selectively.

---

# 7. ICONOGRAPHY

Use a single coherent stroke icon library.

Reference:
- Lucide
- Radix Icons
- Phosphor

Do not mix icon families.

Default:
16px icon
1.5–2px stroke

Support:
12
14
16
18
20
24

Icons should rarely appear without text when meaning is ambiguous.

Provide icon rules for:
- active
- disabled
- warning
- selected
- destructive
- inline
- standalone

---

# 8. CORNER RADII

The interface should not look excessively bubbly.

Use restrained radii.

Example scale:

2px — precision elements
4px — tags / controls
6px — inputs / buttons
8px — cards / panels
12px — major dialogs
999px — only pills/status where semantically appropriate

Agent hexagons remain geometric and do not inherit card radii.

---

# 9. ELEVATION

Use elevation sparingly.

Most structure should be communicated using:
- border
- surface contrast
- spacing

Elevation levels:

0 Canvas
1 Panels
2 Popovers
3 Menus
4 Dialogs
5 Critical overlays

Dark theme shadows must remain subtle.

---

# 10. CORE PRODUCT SHELL

Create the shell primitives before product-specific objects.

## App shell

Components:

GlobalHeader
WorkspaceSwitcher
Breadcrumb
GlobalSearch
CommandPalette
PrimaryNavigation
SecondaryNavigation
ContextSidebar
InspectorPanel
BottomToolbar
StatusBar
NotificationCenter
AccountMenu

The core builder layout should support:

LEFT
structure / object hierarchy

CENTER
infinite canvas

RIGHT
contextual inspector

TOP
breadcrumb + environment state + simulation/live actions

BOTTOM
optional canvas or runtime controls

The canvas must remain visually dominant.

---

# 11. CANVAS SYSTEM

The canvas is central to LAMP.

Create a full canvas design language.

Canvas states:

empty
populated
selected
multi-selected
dragging
snapping
zooming
panning
simulating
live
paused
stopped
error

Canvas primitives:

CanvasGrid
CanvasDots
CanvasOrigin
CanvasSelectionBox
CanvasLasso
CanvasSnapGuide
CanvasDropZone
CanvasViewportControls
CanvasMinimap
CanvasZoomControls
CanvasContextMenu
CanvasCommandBar
CanvasObjectToolbar
CanvasBreadcrumb

Grid should remain extremely subtle.

Do not visually overwhelm the Agent objects.

---

# 12. AGENT HEXAGON SYSTEM

Agent = primary visual object.

Create an exhaustive Agent component.

Name:

AgentHex

Sizes:
XS
S
M
L
XL

Variants:

standard
coordinator
specialist
human-supervised
system
external

States:

idle
hover
selected
multi-selected
dragging
compatible
snap-ready
bonding
bonded
running
delegating
waiting
needs-human
success
warning
error
paused
killed
disabled
simulation
live

An AgentHex should support:

icon/avatar
agent name
role
status
activity indicator
runtime state
memory state
authority indicator
warning state
badge count
tool availability
optional cost
optional confidence
optional active task

Do not display everything simultaneously.

Create progressive information density:

### Zoomed out
hexagon + state

### Medium zoom
name + status

### Close zoom
name + role + compact metadata

### Selected
full details move into Inspector

---

# 13. AGENT BONDING SYSTEM

This is a signature LAMP interaction.

Agents snap edge-to-edge.

The design system must define exact visual states.

## Bond lifecycle

Idle

Proximity

Compatible proximity

Snap threshold entered

Bond preview

Bond commit

Bond settling

Bonded

Disconnect drag

Bond tension

Bond threshold

Bond break

Post-break settle

Define visual treatment for:

- edge glow
- attraction
- magnetic preview
- edge highlight
- energy filament
- compression
- release
- error/rejection

Avoid excessive visual spectacle.

The moment of bonding may be expressive.
The resting state must be calm.

---

# 14. BOND SEMANTICS

A physical bond means:

- membership
- collaboration
- composition
- Playbook relationship

Do not visually imply direct data wiring.

Define:

BondEdge
BondJunction
BondHighlight
BondEnergy
BondStatus
BondWarning

Possible bond states:

valid
incomplete
conflicting
requires-config
learned
suggested
manual
locked

Suggested learned bonds should visually differ from confirmed bonds.

---

# 15. PLAYBOOK COMPONENT

A Playbook represents a deterministic business process composed from Agents.

Create:

PlaybookCluster
PlaybookFrame
PlaybookHeader
PlaybookStatus
PlaybookMeta
PlaybookInspector
PlaybookPreview
PlaybookMiniature

States:

observed
inferred
draft
simulation
validated
stable
live
learning
warning
error
paused
disabled

A Playbook may show:

name
purpose
number of Agents
historical examples
confidence
simulation success rate
last run
current run
human checkpoints
tool dependencies
memory state

Do not make Playbook visually resemble a connected node flow.

---

# 16. GENIE COMPONENT

A Genie is a larger operating unit containing:
- Playbooks
- Agents
- Skills
- Tools
- Memory

Create:

GenieCard
GenieHive
GenieHeader
GenieSummary
GenieStatus
GenieInspector
GenieMiniMapRepresentation

A Genie may visually resemble a larger cluster/hive of hexagonal systems.

Support semantic zoom.

At high zoom-out:
one coherent Genie object

At medium zoom:
Playbooks become visible

At high zoom:
Agents become individually inspectable

---

# 17. SKILL COMPONENT

Skill = circle.

Create:

SkillOrb / SkillCircle

Sizes:
XS
S
M
L

States:
available
attached
active
running
waiting
error
disabled
suggested
learned

Skill metadata:
name
category
inputs
outputs
version
usage count
associated Agents

Skill circles should remain visually subordinate to Agent hexagons.

---

# 18. TOOL COMPONENT

Tool = square.

Create:

ToolTile
ToolBadge
ToolInline
ToolAuthorizationCard
ToolHealthRow
ToolCapabilityRow

States:

available
connected
authorization-required
expired
healthy
degraded
error
read-only
write-enabled
blocked

Show:
tool icon
name
account
connection state
permission level
used by
last activity
health
risk

---

# 19. MEMORY SYSTEM

Memory is first-class.

Create components for:

MemoryBadge
MemoryCard
MemoryScope
MemoryInspector
MemoryFact
MemoryEvidence
MemoryConfidence
MemoryConflict
MemoryTimeline
MemorySource
MemoryPromotion
MemoryInheritance
MemoryUsageBar

Memory scopes:

Agent Working Memory
Playbook Memory
Genie Memory
LAMP Memory

Each memory item can show:

fact
scope
source
confidence
last confirmed
freshness
owner
contradictions
evidence count
privacy/access

Do not expose vector/database implementation language to normal users.

---

# 20. MEMORY VISUALIZATION

Use a clear visual system to distinguish:

explicit fact
observed pattern
inferred pattern
preference
policy
exception
temporary assumption

Create semantic badges for these.

Example:

POLICY
Observed
92% confidence

EXCEPTION
3 occurrences

INFERRED
Needs confirmation

Use confidence carefully.

Do not overuse percentage values in end-user surfaces.

---

# 21. HUMAN-IN-THE-LOOP COMPONENTS

Create:

HumanCheckpoint
ApprovalCard
DecisionCard
EscalationCard
ReviewRequest
ConfirmationDialog
CriticalConfirmation
DelegationRequest

Decision structures:

binary
multiple choice
review and approve
edit before approve
acknowledge
provide missing information

Design for very fast comprehension.

---

# 22. ENVIRONMENT STATES

Create global environment treatments.

Draft

Simulation

Live

Paused

Emergency stopped

These states must be visible without overwhelming the UI.

Simulation:
safe
clearly distinguishable
must not look identical to Live

Live:
calm but unmistakable

Emergency stopped:
high-confidence critical state
all external execution visibly disabled

---

# 23. SIMULATION SYSTEM

Create components:

SimulationBar
SimulationControls
SimulationRunCard
SimulationScenario
SimulationTimeline
SimulationStep
SimulationResult
SimulationCompare
SimulationReplay
SimulationWarning

Simulation step states:

pending
running
success
warning
failed
skipped
waiting-human
mocked
blocked

---

# 24. LIVE EXECUTION SYSTEM

Create:

LiveActivityIndicator
RunPulse
ActiveAgent
ExecutionTrail
RuntimeTooltip
RunSummary
RunInspector
RunTimeline
CurrentTask
WaitingState
DelegationState

Execution can be visualized with energy moving across bonded Agent systems.

Avoid permanent animation.

Only active processes should move.

---

# 25. RUN INSPECTOR

Design a technical run inspector.

Sections:

Overview
Timeline
Agents
Tools
Memory Used
Inputs
Outputs
Warnings
Approvals
Cost
Performance

Display:

run ID
duration
status
started
completed
trigger
Agent count
Tool calls
LLM calls
cache utilization
tokens
estimated cost
human intervention count

Use mono selectively.

---

# 26. COST / INFERENCE COMPONENTS

LAMP needs inference efficiency visibility.

Create:

TokenUsage
ContextBreakdown
CacheRate
RunCost
CostTrend
CostByAgent
CostByPlaybook
CostPerOutcome
ModelUsage
LatencyBreakdown

Example:

Context
Agent working memory     618
Playbook memory          402
Genie memory             771
LAMP memory              340
Retrieved evidence     1,281

Total                   3,412 tokens

Create:
stacked bars
compact tables
tooltips
metric cards

Never make cost visualizations overly financial-dashboard-like.

---

# 27. DATA VISUALIZATION SYSTEM

Create a full LAMP chart system.

Charts needed:

line
area
bar
stacked bar
horizontal bar
donut
scatter
timeline
histogram
heatmap
sparkline
progress
distribution
funnel only where appropriate

Operational charts:

execution success
runtime
cost
Agent workload
Playbook frequency
human intervention
Tool reliability
memory retrieval
confidence distribution
automation rate
exception frequency

Use restrained colours.

No rainbow chart palettes.

Suggested palette:
8–10 accessible categorical colours.

Create:
chart grid
axes
ticks
labels
legend
tooltip
empty state
loading state
comparison state
threshold line
critical line
simulation/live comparison

---

# 28. STATUS SYSTEM

Create consistent statuses.

Semantic:

Neutral
Info
Success
Warning
Danger

Operational:

Draft
Observed
Inferred
Learning
Simulation
Ready
Live
Waiting
Needs attention
Paused
Stopped
Error
Killed

Create:

StatusDot
StatusBadge
StatusPill
StatusLabel
StatusBanner
StatusIcon

Avoid having ten visually unrelated badge systems.

---

# 29. BUTTON SYSTEM

Create full button family.

Primary
Secondary
Tertiary
Ghost
Danger
Quiet
Icon
Split button

Sizes:
XS
S
M
L

States:
default
hover
active
focus
disabled
loading

Critical actions:

Go Live
Pause
Stop
Emergency Kill

must have deliberate interaction patterns.

Emergency actions must not resemble ordinary primary buttons.

---

# 30. FORM SYSTEM

Create:

TextInput
Textarea
SearchInput
NumberInput
PasswordInput
TokenInput
PromptInput
CodeInput
Select
MultiSelect
Combobox
Autocomplete
Checkbox
Radio
Switch
Slider
RangeSlider
Date
DateTime
FileUpload
TagInput
KeyValueInput
JSONEditor
VariablePicker
EntityPicker

States:

default
hover
focus
filled
disabled
readonly
success
warning
error
loading

Provide:
label
description
helper
error
optional
required
character count

---

# 31. TECHNICAL INPUT COMPONENTS

Because LAMP is technical, create:

PromptEditor
SchemaEditor
CodeEditorFrame
VariableToken
TemplateVariable
ExpressionField
SecretField
EnvironmentVariable
KeyValueList
JSONPreview
PayloadViewer
DiffViewer
LogViewer

These should integrate visually with normal forms.

---

# 32. INSPECTOR SYSTEM

The right-side Inspector is critical.

Create:

InspectorPanel
InspectorHeader
InspectorTabs
InspectorSection
InspectorAccordion
InspectorField
InspectorFooter
InspectorStickyActions

Inspector should change based on selection.

Agent:
Purpose
Skills
Tools
Memory
Authority
Guardrails
Runtime

Playbook:
Purpose
Agents
Execution
Memory
Rules
Simulation
Outcomes

Skill:
Instructions
Inputs
Outputs
Tool dependencies

Tool:
Authentication
Permissions
Capabilities
Health

Memory:
Facts
Sources
Confidence
Scope
History

Use progressive disclosure.

Do not expose all advanced configuration simultaneously.

---

# 33. TABLE SYSTEM

Create enterprise-grade compact tables.

Features:

column sorting
filtering
pinning
resizing
selection
bulk actions
pagination
virtualization state
empty state
loading state
row actions
expandable rows

Variants:

standard
compact
dense
technical
audit

Typical data:

runs
Agents
Playbooks
memory facts
Tools
approvals
activity
audit logs

---

# 34. LIST COMPONENTS

Create:

ObjectList
AgentList
PlaybookList
ToolList
MemoryList
RunList
ActivityList
ApprovalQueue

Rows should support:
icon
name
status
metadata
secondary metadata
badge
timestamp
menu

---

# 35. NAVIGATION

Create:

TopNav
SideNav
ObjectTree
Breadcrumb
Tabs
SegmentedControl
SubNav
BackButton
WorkspaceSwitcher

Do not use excessive nested menus.

Hierarchy must remain comprehensible.

---

# 36. COMMAND PALETTE

LAMP should support a powerful command palette.

Create:

CommandPalette
CommandSearch
CommandGroup
CommandItem
CommandShortcut
RecentCommands

Possible actions:

Create Agent
Create Skill
Create Playbook
Find Genie
Open Tool
Run Simulation
Go Live
Pause Genie
Inspect Memory
Open Runs
Search Business

---

# 37. SEARCH

Create universal object search.

Search targets:

LAMP
Genies
Playbooks
Agents
Skills
Tools
Memory
Runs
People
Customers
Vendors
Documents

Search results should show:
type
name
context
location
status

---

# 38. TOOLTIP / POPOVER / MENU SYSTEM

Create:

Tooltip
RichTooltip
Popover
DropdownMenu
ContextMenu
Submenu
ObjectMenu

Use menus for secondary actions only.

Primary workflows should remain direct.

---

# 39. MODALS AND DIALOGS

Create:

Modal
Drawer
Sheet
Confirmation
CriticalConfirmation
CommandDialog

Avoid opening modals for routine configuration.

Use Inspector first.

Dialogs should be reserved for:
- confirmation
- authorization
- high-risk actions
- focused creation
- destructive actions

---

# 40. NOTIFICATIONS

Create:

Toast
InlineNotification
Banner
SystemNotice
ActivityNotification

Severity:
info
success
warning
error
critical

Do not overwhelm users with toasts during simulation.

---

# 41. EMPTY STATES

Create restrained empty states for:

No LAMP
No Genie
No Agent
No Playbook
No Skill
No Tool
No Memory
No Runs
No activity

Avoid giant illustrations.

Use:
small icon
clear statement
single next action

---

# 42. LOADING STATES

Create:

Skeleton
InlineSpinner
ButtonSpinner
CanvasLoading
ObjectLoading
ProgressiveLoad
RunProgress

Avoid full-screen blocking loaders whenever possible.

---

# 43. ERROR STATES

Create patterns for:

recoverable error
Tool failure
authorization failure
Agent failure
Playbook failure
partial completion
memory conflict
connection problem
permission denied
simulation failure
live execution failure

Errors should clearly communicate:

what happened
what did not happen
impact
recovery action

---

# 44. SAFETY SYSTEM

Create safety primitives.

KillSwitch
PauseButton
SafeStop
EmergencyStop
ExecutionBlocked
PermissionWarning
HighRiskAction
ApprovalRequired

Emergency Kill must require:
- deliberate action
- clear scope
- clear consequences
- unambiguous post-action state

Example:

STOP FINANCE GENIE?

Immediately:
- block new external write actions
- stop new runs
- isolate active tasks

[Cancel]
[Emergency Stop]

---

# 45. AUTHORIZATION / INTEGRATION SYSTEM

Create:

IntegrationDirectory
IntegrationCard
ConnectedAccount
OAuthState
PermissionsList
AuthorizationRequest
ConnectionHealth
Reconnect
Disconnect
CredentialExpiry

Connection statuses:

connected
requires-auth
expired
degraded
error
disabled

Support:

Read
Write
Admin
Scoped permissions

Show which:
Agents
Genies
Playbooks

use each Tool.

---

# 46. ACCESS AND PERMISSIONS

Create:

RoleBadge
PermissionTable
AccessSelector
MemberSelector
AuthorityRule
PolicyRule
ScopeIndicator

Possible scopes:

LAMP
Genie
Playbook
Agent
Tool
Memory

---

# 47. ACTIVITY / AUDIT SYSTEM

Create:

ActivityFeed
AuditLog
EventRow
ChangeDiff
ActorBadge
Timestamp
SourceBadge

Audit events:

Agent created
Playbook modified
Tool authorized
Permission changed
Simulation run
Went live
Agent paused
Kill switch activated
Memory corrected
Policy changed

---

# 48. BUSINESS CONTEXT COMPONENTS

LAMP learns the business.

Create components for:

Person
Team
Customer
Vendor
Project
Policy
Document
Process
Decision
Exception
System
Channel

Use a shared Entity component system.

Create:

EntityChip
EntityCard
EntityReference
EntityAvatar
EntityRelation
EntityInspector

---

# 49. LEARNING / INFERENCE UI

Create UI for LAMP learning how the business works.

Components:

LearnedPattern
ObservedPattern
SuggestedPlaybook
ProcessProposal
NewRelationship
UncertainFact
ConfirmationRequest
ExceptionPattern

Example:

LAMP noticed:

"Vendor approvals usually happen through WhatsApp before they are entered in SAP."

Observed:
23 times

Confidence:
High

[Use this pattern]
[Review]
[Ignore]

Keep this calm and evidence-based.

---

# 50. BUSINESS PROCESS DISCOVERY

Create interfaces for:

Observed process
Most common path
Exceptions
Variants
People involved
Tools involved
Average duration
Frequency
Automation potential

Do not default to flowchart diagrams.

Use:
structured sequence
timeline
stack
cluster
frequency visualization
process summary

---

# 51. OBJECT CREATION

Create object creation patterns for:

New LAMP
New Genie
New Agent
New Skill
New Tool
New Playbook

Prefer:
command palette
inline create
contextual create
drag into canvas

Avoid wizard-heavy onboarding unless required.

---

# 52. SEMANTIC ZOOM

Specify exactly what appears at each zoom range.

Example:

&amp;lt;30%
Genie only

30–50%
Playbook clusters

50–80%
Agents

80–120%
Agent labels + state

120–180%
skills/tools indications

&amp;gt;180%
advanced internal details

Do not expose text below legibility threshold.

---

# 53. MOTION SYSTEM

Create a formal motion system.

Durations:

Instant
80ms

Fast
120ms

Standard
180ms

Medium
240ms

Slow
360ms

Ceremonial
500–700ms only for rare major events

Easing:

standard
enter
exit
spring
magnetic
critical

Define motion for:

hover
selection
panel open
popover
drag
snap proximity
snap capture
bond
bond break
simulation execution
success
failure
waiting
Live activation
Pause
Emergency Stop

Do not animate routine text/forms unnecessarily.

---

# 54. ENERGY VISUAL LANGUAGE

Energy is a LAMP-specific visual metaphor.

Use only for:

compatible snap
bond creation
active execution
delegation
simulation
Live runtime
warning/error propagation

Do not use constant decorative energy.

Energy states:

faint
forming
active
transferring
stable
warning
failure
dissipating

Support reduced-motion mode.

---

# 55. SOUND / HAPTIC DESIGN TOKENS

Even if visual design only, document intended feedback hooks.

Events:

snap-ready
bond
unbond
simulation-start
simulation-success
Live activation
warning
critical stop

Do not design loud arcade feedback.

Use:
subtle
technical
short
functional

Provide accessibility alternatives.

---

# 56. ACCESSIBILITY

Target WCAG 2.2 AA minimum.

Requirements:

minimum 4.5:1 normal text contrast
minimum 3:1 large text/UI where appropriate
visible focus
keyboard navigation
reduced motion
high contrast support
no colour-only meaning
44px touch target where touch is relevant
minimum 32px compact desktop controls where appropriate

All statuses require:
colour + icon/shape/text

Canvas objects must be keyboard selectable.

Bonding must have non-drag alternatives.

---

# 57. KEYBOARD SYSTEM

Document shortcuts.

Examples:

Space + drag
Pan

Cmd/Ctrl + K
Command palette

Delete
Remove selected

Escape
Deselect/close

Enter
Open selected

Cmd/Ctrl + Z
Undo

Cmd/Ctrl + Shift + Z
Redo

F
Fit selection

+
Zoom in

-
Zoom out

S
Simulation

Do not hijack standard browser shortcuts unnecessarily.

---

# 58. RESPONSIVE BEHAVIOUR

Primary product:
desktop-first.

Target:
1440px+
1280px
1024px

Support smaller widths by:
- collapsing left panel
- overlaying Inspector
- simplifying secondary controls

Do not attempt full builder parity on phones.

Mobile can primarily support:
- activity
- approvals
- alerts
- conversation
- monitoring
- emergency controls

---

# 59. COMPONENT NAMING

Use consistent PascalCase names.

Examples:

AgentHex
SkillOrb
ToolTile
PlaybookCluster
GenieHive
MemoryFact
RunTimeline
SimulationBar
InspectorSection

Variants use explicit properties.

Example:

AgentHex
size=M
state=running
environment=simulation
role=coordinator

Do not create duplicate components for trivial visual differences.

---

# 60. COMPONENT DOCUMENTATION

Every component must document:

Purpose

Anatomy

Variants

Sizes

States

Interactions

Content rules

Accessibility

Do

Don't

Token dependencies

Example contexts

Responsive behaviour

For interactive components include:

Default
Hover
Focus
Active
Disabled
Loading
Error

---

# 61. DESIGN SYSTEM PAGE STRUCTURE

Create these pages / sections in the design file:

00 — Cover / Principles

01 — Foundations

02 — Tokens

03 — Typography

04 — Colour

05 — Iconography

06 — Layout &amp;amp; Grid

07 — Controls

08 — Forms

09 — Navigation

10 — Panels &amp;amp; Surfaces

11 — Canvas System

12 — LAMP Objects

13 — Agent Hexagons

14 — Skills &amp;amp; Tools

15 — Bonding &amp;amp; Composition

16 — Playbooks

17 — Genies

18 — Memory

19 — Simulation

20 — Live Runtime

21 — Safety

22 — Integrations

23 — Permissions

24 — Tables &amp;amp; Lists

25 — Data Visualization

26 — Business Context

27 — Learning &amp;amp; Inference

28 — Feedback &amp;amp; Errors

29 — Motion

30 — Accessibility

31 — Layout Templates

32 — Component Playground

---

# 62. LAYOUT TEMPLATES

After completing the component system, create reusable templates for:

LAMP Home

LAMP Canvas

Genie Canvas

Playbook Composition

Agent Selected

Agent Inspector

Memory Inspector

Tool Authorization

Simulation Mode

Simulation Run

Live Mode

Run Inspector

Emergency Stop

Approval Queue

Business Context

Observed Process

Do not fully style these as polished product screens.

Use them to prove system coverage.

---

# 63. REFERENCE-SPECIFIC GUIDANCE

Borrow from Figma:
- canvas dominance
- contextual inspector
- direct manipulation
- compact controls

Borrow from Linear:
- density
- typography
- keyboard-first behaviour
- status clarity

Borrow from Vercel / Geist:
- technical restraint
- neutral tokens
- sharp hierarchy

Borrow from GitHub Primer:
- states
- accessibility
- enterprise component completeness

Borrow from IBM Carbon:
- systematic data-heavy components
- enterprise information hierarchy

Borrow from Atlassian:
- interaction states
- enterprise navigation
- accessibility discipline

Borrow from Polaris:
- structured component documentation
- semantic state naming

Borrow from Radix:
- accessible interactive primitives
- predictable behaviour

Borrow from Railway:
- dark technical surfaces
- operational status clarity

Borrow from Relevance AI:
- Agent configuration ontology
- Tools
- Knowledge
- Memory
- Triggers
- Variables

Borrow from tldraw:
- canvas interaction mechanics

Borrow from Rive:
- precise animated-state thinking

Do not copy:
- generic node editor UI
- excessive workflow wiring
- large SaaS dashboard cards
- generic AI gradients
- consumer chatbot styling

---

# 64. CRITICAL INTERACTION RULE

The product's signature mechanic is:

**Agents are hexagonal physical units that snap together.**

Do not turn them into rectangular nodes.

Do not expose connector ports.

Do not make Playbooks look like flowcharts.

Do not assume spatial arrangement alone determines runtime logic.

The UI communicates composition spatially.

The runtime stores deterministic execution separately.

The Inspector exposes execution rules when required.

---

# 65. VISUAL HIERARCHY

At all times:

1. Current operating object
2. Current state
3. Current required action
4. Relevant operational detail
5. Advanced configuration

Avoid simultaneous emphasis.

The interface must remain understandable even when the underlying system is complex.

---

# 66. DESIGN QUALITY BAR

Every component should feel:

- intentional
- engineered
- reusable
- composable
- production-ready
- accessible
- appropriate for enterprise operations

Do not create conceptual mock components with vague states.

Specify them enough that an engineer could implement them.

---

# 67. FINAL DELIVERABLE

Produce a complete design system with:

1. Token architecture
2. Light and dark themes
3. All primitive components
4. LAMP-specific object components
5. Canvas system
6. Bonding system
7. Inspector system
8. Memory system
9. Simulation system
10. Live runtime system
11. Safety controls
12. Tool authorization
13. Permissions
14. Tables
15. Data visualization
16. Motion specifications
17. Accessibility rules
18. Layout templates
19. Component documentation
20. Component playground showing combinations and edge cases

Before designing polished application screens, validate that the component system can represent:

- one independent Agent
- a complex Playbook of 8–12 Agents
- one Genie containing several Playbooks
- Agent Working Memory
- Playbook Memory
- Genie Memory
- LAMP Memory
- tool authorization failure
- simulation execution
- human approval
- Live execution
- Agent error
- Playbook error
- emergency kill
- learned business process
- suggested process improvement
- high-density run history
- low-density empty LAMP

The system is complete only if all of these cases can be represented without inventing new primitives.

# LAMP — Core Visual Foundations

## 1. Typography

Use one primary family and one mono family.

| Role             | Font           | Usage                                                                   |
| ---------------- | -------------- | ----------------------------------------------------------------------- |
| Primary UI       | **Geist Sans** | Navigation, labels, body, controls, inspectors                          |
| Technical/Data   | **Geist Mono** | IDs, tokens, costs, runtime data, logs, code, timestamps                |
| Optional display | **Geist Sans** | Keep same family; use scale/weight rather than introducing a third font |

### Font weights

| Token    |     Weight |
| -------- | ---------: |
| Regular  |        400 |
| Medium   |        500 |
| Semibold |        600 |
| Bold     | 700 — rare |

Avoid 300/light weights in UI.

### Type scale

| Style       | Size | Line height | Weight |
| ----------- | ---: | ----------: | -----: |
| Display     |   40 |          44 |    600 |
| H1          |   32 |          38 |    600 |
| H2          |   24 |          30 |    600 |
| H3          |   20 |          26 |    600 |
| H4          |   16 |          22 |    600 |
| Body Large  |   16 |          24 |    400 |
| Body        |   14 |          20 |    400 |
| Body Small  |   13 |          18 |    400 |
| Label       |   13 |          16 |    500 |
| Label Small |   12 |          16 |    500 |
| Caption     |   11 |          16 |    400 |
| Micro       |   10 |          14 |    500 |
| Mono        |   12 |          18 |    400 |
| Metric XL   |   28 |          32 |    500 |
| Metric      |   18 |          24 |    500 |

### Letter spacing

| Type                   | Tracking |
| ---------------------- | -------: |
| Headings               |  -0.02em |
| Body                   |        0 |
| Labels                 | -0.005em |
| Uppercase micro labels |  +0.06em |
| Mono                   |        0 |

Avoid excessive uppercase. Reserve uppercase for tiny status/system labels.

---

# 2. Core Gold Palette

LAMP's core brand colour should be **gold**, but the product should not become visually yellow.

Use gold for:

* selected Agent
* bonding
* execution energy
* primary interaction
* active simulation states
* important focus states
* brand moments

## Primary Gold

Recommended core:

**LAMP Gold 500 — `#D6A82E`**

This is warm, technical, slightly metallic, and avoids looking like bright consumer yellow.

### Gold scale

| Token        | Hex           |
| ------------ | ------------- |
| Gold 50      | `#FFF9E8`     |
| Gold 100     | `#FFF0C2`     |
| Gold 200     | `#F8DB83`     |
| Gold 300     | `#EDC451`     |
| Gold 400     | `#E1B33A`     |
| **Gold 500** | **`#D6A82E`** |
| Gold 600     | `#B88A1F`     |
| Gold 700     | `#916A17`     |
| Gold 800     | `#684B13`     |
| Gold 900     | `#45320F`     |
| Gold 950     | `#281C08`     |

### Brand aliases

```text
brand.primary             #D6A82E
brand.primary.hover       #E1B33A
brand.primary.active      #B88A1F
brand.primary.subtle      #FFF9E8
brand.primary.border      #EDC451
brand.primary.text        #684B13
```

For dark mode:

```text
brand.primary             #E1B33A
brand.primary.hover       #EDC451
brand.primary.active      #D6A82E
brand.primary.subtle      #281C08
brand.primary.border      #916A17
```

---

# 3. Neutral Palette

The interface should primarily be neutral.

## Graphite scale

| Token        | Hex       |
| ------------ | --------- |
| Neutral 0    | `#FFFFFF` |
| Neutral 25   | `#FCFCFB` |
| Neutral 50   | `#F8F8F6` |
| Neutral 100  | `#F1F1EE` |
| Neutral 150  | `#E9E9E5` |
| Neutral 200  | `#DEDED9` |
| Neutral 300  | `#C8C8C0` |
| Neutral 400  | `#A7A79F` |
| Neutral 500  | `#82827A` |
| Neutral 600  | `#63635D` |
| Neutral 700  | `#454541` |
| Neutral 800  | `#30302D` |
| Neutral 850  | `#262624` |
| Neutral 900  | `#1D1D1B` |
| Neutral 925  | `#171716` |
| Neutral 950  | `#111110` |
| Neutral 975  | `#0B0B0A` |
| Neutral 1000 | `#050505` |

Slight warmth complements the gold.

---

# 4. Light Theme

```text
surface.canvas             #F8F8F6
surface.primary            #FFFFFF
surface.secondary          #F1F1EE
surface.tertiary           #E9E9E5
surface.raised             #FFFFFF
surface.overlay            #FFFFFF
surface.hover              #F1F1EE
surface.selected           #FFF9E8
surface.disabled           #F8F8F6

text.primary               #1D1D1B
text.secondary             #63635D
text.tertiary              #82827A
text.disabled              #A7A79F
text.inverse               #FFFFFF
text.brand                 #916A17

border.subtle              #E9E9E5
border.default             #DEDED9
border.strong              #C8C8C0
border.focus               #D6A82E
border.selected            #D6A82E
```

---

# 5. Dark Theme

```text
surface.canvas             #0B0B0A
surface.primary            #111110
surface.secondary          #171716
surface.tertiary           #1D1D1B
surface.raised             #262624
surface.overlay            #30302D
surface.hover              #1D1D1B
surface.selected           #281C08
surface.disabled           #111110

text.primary               #F8F8F6
text.secondary             #C8C8C0
text.tertiary              #82827A
text.disabled              #63635D
text.inverse               #111110
text.brand                 #EDC451

border.subtle              #262624
border.default             #30302D
border.strong              #454541
border.focus               #D6A82E
border.selected            #E1B33A
```

---

# 6. Runtime Status Colours

Do not use gold for every state.

| Status  | Core      | Background light | Background dark |
| ------- | --------- | ---------------- | --------------- |
| Success | `#22A06B` | `#EAF8F1`        | `#0E2B20`       |
| Warning | `#D9822B` | `#FFF4E5`        | `#321D0B`       |
| Danger  | `#D64545` | `#FDECEC`        | `#351111`       |
| Info    | `#3478F6` | `#EBF2FF`        | `#102040`       |
| Waiting | `#7A6FF0` | `#F0EEFF`        | `#1E193D`       |
| Neutral | `#82827A` | `#F1F1EE`        | `#262624`       |

---

# 7. Environment Colours

These need consistent meaning across the application.

| Environment      | Colour       |
| ---------------- | ------------ |
| Draft            | Neutral 500  |
| Observed         | `#78909C`    |
| Inferred         | `#7A6FF0`    |
| Learning         | `#9B6ED6`    |
| Simulation       | `#3478F6`    |
| Validated        | `#22A06B`    |
| Live             | **Gold 500** |
| Paused           | `#D9822B`    |
| Stopped          | Neutral 700  |
| Emergency killed | `#D64545`    |

### Important

**Gold = active LAMP intelligence / execution / Live.**

That gives the colour actual semantic value.

---

# 8. LAMP Object Colours

Keep object identity mostly geometric. Colour should communicate state rather than category.

### Agent — Hexagon

Default:

```text
fill.light       #FFFFFF
fill.dark        #171716
border           Neutral 300 / 700
```

Selected:

```text
border           Gold 500
fill.light       Gold 50
fill.dark        Gold 950
```

Running:

```text
border           Gold 400
energy           Gold 300 → Gold 500
```

### Skill — Circle

Use neutral surfaces.

Active skill can inherit the Agent's gold execution state.

### Tool — Square

Neutral by default.

Use external brand icon colours only inside the tool icon itself.

Do not make a Gmail Tool tile red or Salesforce blue.

### Memory

Suggested accent:

**Warm silver / muted violet**, rather than another gold.

```text
memory.core       #786F90
memory.subtle     #F1EEF5
memory.dark       #211E29
```

This helps distinguish stored context from active runtime energy.

---

# 9. Energy Palette

For bonding and execution.

```text
energy.core             #D6A82E
energy.bright           #F2CA58
energy.highlight        #FFE89B
energy.deep             #916A17
energy.glow             rgba(214,168,46,0.22)
energy.glowStrong       rgba(225,179,58,0.38)
```

For simulation:

```text
simulation.energy       #3478F6
simulation.glow         rgba(52,120,246,0.22)
```

Use animation to distinguish simulation from Live rather than introducing many colours.

---

# 10. Data Visualization Palette

Use restrained colours.

Primary sequence:

| Index | Hex       |
| ----- | --------- |
| 1     | `#D6A82E` |
| 2     | `#3478F6` |
| 3     | `#22A06B` |
| 4     | `#7A6FF0` |
| 5     | `#D9822B` |
| 6     | `#3CA6A6` |
| 7     | `#B55FC1` |
| 8     | `#657A9A` |

Neutral comparison:

```text
data.neutral.1     #454541
data.neutral.2     #63635D
data.neutral.3     #82827A
data.neutral.4     #A7A79F
data.neutral.5     #C8C8C0
```

Avoid gradients in normal charts.

---

# 11. Spacing

4px base grid.

```text
space.0     0
space.0.5   2px
space.1     4px
space.1.5   6px
space.2     8px
space.3     12px
space.4     16px
space.5     20px
space.6     24px
space.8     32px
space.10    40px
space.12    48px
space.16    64px
space.20    80px
space.24    96px
```

---

# 12. Component Heights

Desktop-first.

| Component         | Height |
| ----------------- | -----: |
| Small button      |     28 |
| Default button    |     32 |
| Large button      |     40 |
| Small input       |     28 |
| Default input     |     32 |
| Large input       |     40 |
| Top header        |     48 |
| Sidebar row       |     32 |
| Inspector row     |     32 |
| Table row compact |     32 |
| Table row default |     40 |
| Toolbar           |     40 |

Avoid defaulting to 44–48px desktop controls everywhere.

---

# 13. Radius

```text
radius.xs       2px
radius.sm       4px
radius.md       6px
radius.lg       8px
radius.xl       12px
radius.2xl      16px
radius.round    999px
```

Usage:

* inputs: 6px
* buttons: 6px
* cards: 8px
* panels: 8–12px
* dialog: 12px
* pill: 999px
* Agent: hexagonal geometry, no radius token

---

# 14. Borders

```text
border.hairline     1px
border.emphasis     1.5px
border.strong       2px
```

Default should remain 1px.

Gold Agent selection can use 1.5–2px.

---

# 15. Shadows

Very restrained.

### Light

```text
shadow.1
0 1px 2px rgba(0,0,0,0.05)

shadow.2
0 4px 12px rgba(0,0,0,0.08)

shadow.3
0 12px 32px rgba(0,0,0,0.12)
```

### Dark

```text
shadow.1
0 1px 2px rgba(0,0,0,0.30)

shadow.2
0 4px 12px rgba(0,0,0,0.36)

shadow.3
0 12px 32px rgba(0,0,0,0.44)
```

Canvas objects should rely primarily on borders.

---

# 16. Opacity

```text
opacity.disabled     0.40
opacity.secondary    0.70
opacity.tertiary     0.55
opacity.overlay      0.72
opacity.scrim        0.56
```

---

# 17. Motion

### Durations

```text
motion.instant       80ms
motion.fast          120ms
motion.standard      180ms
motion.medium        240ms
motion.slow          360ms
motion.bond          420ms
motion.ceremonial    600ms
```

### Easings

```text
ease.standard
cubic-bezier(0.2, 0, 0, 1)

ease.enter
cubic-bezier(0, 0, 0.2, 1)

ease.exit
cubic-bezier(0.4, 0, 1, 1)

ease.magnetic
cubic-bezier(0.16, 1, 0.3, 1)

ease.spring
spring(420, 32, 0.82)
```

---

# 18. Bonding Motion

### Proximity

```text
duration        120ms
edge glow       0 → 20%
scale           1 → 1.01
```

### Snap ready

```text
duration        180ms
edge glow       20 → 45%
magnetic shift  2–6px
```

### Bond

```text
duration        420ms

Phase 1
compression     80ms

Phase 2
edge merge      120ms

Phase 3
energy pulse    180ms

Phase 4
settle          120ms
```

### Disconnect

```text
bond stretch    proportional to drag
filament opacity 100 → 20%
break threshold ~24–36px beyond bond tolerance
release          180ms
```

Exact values need prototype tuning.

---

# 19. Canvas

### Light

```text
canvas.background      #F8F8F6
canvas.grid            rgba(69,69,65,0.08)
canvas.selection       #D6A82E
canvas.guides          #3478F6
```

### Dark

```text
canvas.background      #0B0B0A
canvas.grid            rgba(248,248,246,0.055)
canvas.selection       #E1B33A
canvas.guides          #5C91F7
```

Grid should almost disappear at rest.

---

# 20. Canvas Grid

Default:

```text
Minor spacing     8px
Major spacing     32px
```

At lower zoom:
hide minor grid.

At extreme zoom-out:
hide grid completely.

Hexagonal composition should use its own geometric snap lattice independent of visible grid.

---

# 21. Panel Widths

Recommended defaults:

```text
Primary sidebar        240px
Collapsed sidebar       48px

Inspector              320px
Inspector wide         400px

Runtime drawer         360px

Modal small            400px
Modal medium           560px
Modal large            720px
```

Inspector can resize between roughly:

```text
280–480px
```

---

# 22. Layout Grid

Application UI:

```text
4px base
8px common internal grid
16px component rhythm
24px section rhythm
```

Marketing-style 12-column grids are not relevant inside the builder.

---

# 23. Agent Hex Geometry

Use a **flat-top hexagon**.

This supports left/right adjacency and hive composition well.

Ratio:

```text
width : height ≈ 1.1547 : 1
```

Suggested sizes:

| Size | Width | Height |
| ---- | ----: | -----: |
| XS   |    36 |     31 |
| S    |    48 |     42 |
| M    |    64 |     55 |
| L    |    88 |     76 |
| XL   |   120 |    104 |

Default canvas Agent:

**64 × 55**

Close inspection / hero:

**88 × 76**

Do not put long labels inside smaller hexagons.

---

# 24. Agent State Tokens

```text
agent.idle.border        border.default
agent.hover.border       neutral.400
agent.selected.border    gold.500
agent.running.border     gold.400
agent.waiting.border     purple.500
agent.warning.border     orange.500
agent.error.border       red.500
agent.paused.border      neutral.500
agent.killed.border      red.700
```

At runtime, the Agent should communicate state through:

* border
* subtle internal pulse
* adjacent label/status
* optional energy

Avoid filling the whole object with status colour.

---

# 25. Skill Geometry

Circle.

Suggested sizes:

```text
XS      16
S       20
M       28
L       36
XL      48
```

Default:

**28px**

Skill circles should be visually subordinate to Agents.

---

# 26. Tool Geometry

Square with 6px radius.

Suggested sizes:

```text
S       24
M       32
L       40
XL      48
```

Default:

**32px**

Use provider icon at 16–20px.

---

# 27. Playbook Visual Treatment

A Playbook is primarily a cluster.

Recommended visual container:

```text
border          1px dashed/solid contextual
radius          12px
padding         24px
background      transparent / very subtle
```

States:

### Draft

```text
border          neutral.300
```

### Inferred

```text
border          purple.400
background      purple subtle at 3–5%
```

### Simulation

```text
border          blue.500
```

### Live

```text
border          gold.500
```

### Error

```text
border          red.500
```

Playbook title sits outside/top-left of cluster where possible.

---

# 28. Genie Hive

The Genie should be represented by:

* one large collapsed object at far zoom
* composite hive when expanded

Use a gold perimeter only when selected or live.

Do not permanently outline every Genie in gold.

---

# 29. Focus Ring

Accessibility token:

```text
focus.ring
0 0 0 2px surface.canvas,
0 0 0 4px #D6A82E
```

Dark theme:

```text
0 0 0 2px #0B0B0A,
0 0 0 4px #E1B33A
```

---

# 30. Selection

Normal component selection:

```text
border: Gold 500
background: Gold 50 / Gold 950
```

Canvas object selection:

```text
outline: 2px Gold 500
handle: Gold 500
```

For multi-selection:

```text
outline: Blue 500
```

This avoids conflating selected group with Agent activation.

---

# 31. Button Colours

## Primary

Light:

```text
bg              #1D1D1B
text            #FFFFFF
hover           #30302D
```

Dark:

```text
bg              #F8F8F6
text            #111110
hover           #DEDED9
```

Important: do **not** make every primary button gold.

Gold should remain a system-significance colour.

## Brand/Live button

Use gold only for:

* Go Live
* Confirm bond where explicit
* selected brand-level CTA

```text
bg              #D6A82E
text            #111110
hover           #E1B33A
active          #B88A1F
```

## Danger

```text
bg              #D64545
text            #FFFFFF
```

Emergency Kill should use Danger.

---

# 32. Status Badges

Default height:

```text
20px
```

Padding:

```text
0 6px
```

Radius:

```text
999px
```

Font:

```text
11px / 16px / 500
```

Use subtle backgrounds rather than fully saturated fills.

---

# 33. Tables

Headers:

```text
12px
500
text.secondary
```

Rows:

```text
13px body
```

Numerical cells:
Geist Mono optional.

Row height:

```text
compact      32
default      40
comfortable  48
```

No alternating row stripes by default.

Use hover and border separation.

---

# 34. Charts

### Grid lines

Light:

```text
#E9E9E5
```

Dark:

```text
#262624
```

### Axis

```text
text.tertiary
11px
```

### Primary data series

Gold.

### Comparison series

Blue.

### Success / failure

Green / red.

Do not use 3D charts or large donut charts.

---

# 35. Icon System

Use:

**Lucide**

Default:

```text
16px
stroke-width 1.75px
```

Small:

```text
14px
```

Large:

```text
20px
```

Avoid filled icons except:

* status indicators
* provider logos
* deliberate active state.

---

# 36. Brand Mark Direction

LAMP's brand should align with:

* geometric
* technical
* premium
* calm
* magical without fantasy illustration

Recommended visual ingredients:

* geometric lamp/seal abstraction
* hexagonal construction
* gold-on-graphite
* controlled luminous energy
* slight ceremonial quality

Avoid:

* literal cartoon lamp
* genie smoke illustration
* stars/sparkles everywhere
* purple magic gradients

---

# 37. Logo Usage

Primary:

```text
Gold mark + dark wordmark
```

Dark mode:

```text
Gold mark + light wordmark
```

Monochrome:

```text
black
white
```

Minimum clear space:
1× logo symbol width.

---

# 38. Core Material Feel

The design system should feel like:

```text
Graphite
+
Warm white
+
Brushed gold
+
Controlled light
```

Gold behaves like an **active conductive material**.

It can:

* illuminate
* connect
* pulse
* transfer
* settle

That gives the brand colour a functional role.

---

# 39. Reduced Motion

When reduced motion is enabled:

Replace:

* travelling energy
* bond compression
* pulse loops

with:

* border state change
* static highlight
* opacity transition
* status indicator

Maximum transition:

```text
120–180ms
```

---

# 40. Final Token Summary

```text
FONT
Geist Sans
Geist Mono

BRAND
Gold 500      #D6A82E

BACKGROUND LIGHT
#F8F8F6

SURFACE LIGHT
#FFFFFF

BACKGROUND DARK
#0B0B0A

SURFACE DARK
#111110

TEXT LIGHT
#1D1D1B

TEXT DARK
#F8F8F6

SUCCESS
#22A06B

WARNING
#D9822B

ERROR
#D64545

INFO
#3478F6

WAITING
#7A6FF0

MEMORY
#786F90

RADIUS DEFAULT
6px

CARD RADIUS
8px

PANEL RADIUS
8–12px

DEFAULT CONTROL HEIGHT
32px

BASE GRID
4px

DEFAULT ICON
16px

DEFAULT BODY
14/20

DEFAULT AGENT
64 × 55 flat-top hexagon
```

## Recommended visual identity

The balance should be roughly:

**80% neutral graphite/white
15% semantic/status colours
5% gold**

Gold becomes more prominent during:

* bonding
* selected Agent state
* Live execution
* energy propagation
* high-value brand moments

That restraint is what will make the gold feel premium and technically meaningful rather than decorative.

---

Design systems are folders on the file system containing typography guidelines, colors, assets, brand style and tone guides, css styles, and React recreations of UIs, decks, etc. They give design agents the ability to create designs against a company's existing products, and create assets using that company's brand. Design systems should contain real visual assets (logos, brand illustrations, etc), low-level visual foundations (e.g. typography specifics; color system, shadow, border, spacing systems), reusable UI components, and high-level UI kits (full screens).

No need to invoke the create_design_system skill; this is it.

An automated compiler reads this project, bundles the components into a runtime library, and indexes the styles. It discovers everything from file content and sibling relationships — not from folder names — so the only fixed location is:

- `styles.css` at the project root (or `index.css` / `globals.css` / `global.css` / `main.css` / `theme.css` / `tokens.css` — first match wins). This is the global-CSS entry point; consumers link this one file. Keep it as a list of `@import` lines only. Everything it transitively `@import`s is shipped to consumers; `@font-face` rules anywhere in that closure declare the webfonts.

Organize everything else however suits the brand. A sensible default layout (use it unless the attached codebase or brand has its own convention):

- `tokens/` — CSS custom properties, one file per concern (`colors.css`, `typography.css`, `spacing.css`, …), each `@import`ed from `styles.css`.
- `components/&lt;group&gt;/` — reusable React UI primitives.
- `ui_kits/&lt;product&gt;/` — full-screen click-through recreations of real product views.
- `guidelines/` — foundation specimen cards and deeper-dive prose.
- `assets/` — logos, icons, illustrations, imagery.
- `readme.md` (root) — the design guide and manifest.

What the compiler looks for, regardless of path:
- A **component** is any `&lt;Name&gt;.jsx` / `&lt;Name&gt;.tsx` (PascalCase stem) with a sibling `&lt;Name&gt;.d.ts` in the same directory. Add `&lt;Name&gt;.prompt.md` alongside, and one `@dsCard`-tagged `.html` per directory (its first line is `&lt;!-- @dsCard group="…" --&gt;`; details under "Components" below).
- A **token** is any `--*` custom property declared under `:root` (or a single-selector theme scope) in a file reachable from `styles.css`.
- A **font** is any `@font-face` rule in that same closure; its `src: url(…)` targets are the binaries shipped to consumers.

To begin, create a todo list with the tasks below, then follow it:

- Explore provided assets and materials to gain a high-level understanding of the company/product context, the different products represented, etc. Read each asset (codebase, figma, file etc) and see what they do. Find some product copy; examine core screens; find any design system definitions.
- Create a readme.md (root) with the high-level understanding of the company/product context, the different products represented, etc. Mention the sources you were given: full Figma links, GitHub repos, codebase paths, etc. Do not assume the reader has access, but store in case they do.
- Call set_project_title with a short name derived from the brand/product (e.g. "Acme Design System"). This replaces the generic placeholder so the project is findable.
- IF any slide decks attached, use your repl tool to look at them, extract key assets + text, write to disk.
- Explore the codebase and/or figma design contexts and write the token CSS files — CSS custom properties on `:root`, both base values (`--fg-1`, `--font-serif-display`) and semantic aliases (`--text-body`, `--surface-card`). Copy any webfonts/ttfs into the project and write the `@font-face` rules in a CSS file. Then write the root `styles.css` as a list of `@import` lines only (never inline rules there) that reaches every token and font-face file.
- Explore, then update readme.md with a CONTENT FUNDAMENTALS section: how is copy written? What is tone, casing, etc? I vs you, etc? are emoji used? What is the vibe? Include specific examples
- Explore, update readme.md with VISUAL FOUNDATIONS section that talks about the visual motifs and foundations of the brand. Colors, type, spacing, backgrounds (images? full-bleed? hand-drawn illustrations? repeating patterns/textures? gradients?), animation (easing? fades? bounces? no anims?), hover states (opacity, darker colors, lighter colors?), press states (color? shrink?), borders, inner/outer shadow systems, protection gradients vs capsules, layout rules (fixed elements), use of transparency and blur (when?), color vibe of imagery (warm? cool? b&amp;w? grain?), corner radii, what do cards look like (shadow, rounding, border), etc. whatever else you can think of. answer ALL these questions.
- If you are missing font files, find the nearest match on Google Fonts. Flag this substitution to the user and ask for updated font files.
- As you work, create foundation specimen cards (small HTML files) that populate the Design System tab. Target ~700×150px each (400px max) — err toward MORE small cards, not fewer dense ones. Split at the sub-concept level: separate cards for primary vs neutral vs semantic colors; display vs body vs mono type; spacing tokens vs a spacing-in-use example. A typical foundations set is 12–20+ cards. Skip titles and framing — the card name renders OUTSIDE the card, so just show the swatches/specimens/tokens directly with minimal decoration. Each card links `styles.css` (relative path from wherever you put it) so it picks up the real tokens. Tag each card with `&lt;!-- @dsCard group="&lt;Group&gt;" viewport="700x&lt;height&gt;" subtitle="&lt;one line&gt;" name="&lt;Card name&gt;" --&gt;` as its first line — the Design System tab renders every tagged `.html` in the project, grouped verbatim by `group`. Suggested groups: "Type", "Colors", "Spacing", "Brand" — title-cased, consistent.
- Copy logos, icons and other visual assets into `assets/`. **If the provided sources contain no logo, do not create one**: render the brand name in plain type wherever a mark would go and note the absence in readme.md. Never draw, reconstruct, or approximate a company's real logo or brand mark from memory — even when the company seems identifiable from font names or sample content — and never rebrand the design system with a company identity the user didn't provide. Update readme.md with an ICONOGRAPHY section describing the brand's approach to iconography. Answer ALL these and more: are certain icon systems used? is there a builtin icon font? are there SVGs used commonly, or png icons? (if so, copy them in!) Is emoji ever used? Are unicode chars used as icons? Make sure to copy key logos, background images, maybe 1-2 full-bleed generic images, and ALL generic illustrations you find. NEVER draw your own SVGs or generate images; COPY icons programmatically if you can.
- For icons: FIRST copy the codebase's own icon font/sprite/SVGs into `assets/` if you can. Otherwise, if the set is CDN-available (e.g. Lucide, Heroicons), link it from CDN. If neither, substitute the closest CDN match (same stroke weight / fill style) and FLAG the substitution. Document usage in ICONOGRAPHY.
- Author the reusable components (see the Components section). Each directory's card HTML must carry `&lt;!-- @dsCard group="Components" … --&gt;` on line 1.
- For each product given (e.g. app and website), create a UI kit — `{README.md, index.html, Screen1.jsx, …}` in its own directory; see the UI kits section. Verify visually. Make one todo list item for each product/surface.
- If you were given a slide template, create sample slides — `{index.html, TitleSlide.jsx, ComparisonSlide.jsx, BigQuoteSlide.jsx, …}` in their own directory. If no sample slides were given, don't create them. Create an HTML file per slide type; if decks were provided, copy their style. Use the visual foundations and bring in logos + other assets. Tag each slide HTML with `&lt;!-- @dsCard group="Slides" viewport="1280x720" --&gt;` on line 1 so the 16:9 frame scales to fit the card.
- Tag each UI kit's index.html with `&lt;!-- @dsCard group="&lt;Product&gt;" viewport="&lt;design width&gt;x&lt;above-fold height&gt;" --&gt;` — the declared height caps what's shown, so pick the portion worth previewing.
- Update readme.md with a short "index" pointing the reader to the other files available. This should serve as a manifest of the root folder, plus a list of components, ui kits, etc.
- Create SKILL.md file (details below)
- You are done! The Design System tab shows every registered card. Do NOT summarize your output; just mention CAVEATS (e.g. things you were unable to do or unsure) and have a CLEAR, BOLD ASK for the user to help you ITERATE to make things PERFECT.

Components
- These are the brand's reusable UI primitives. **When a concrete source defines the inventory (a mounted .fig file, a Figma link, a component library in an attached codebase), that inventory IS the component list** — build exactly the families the source defines, nothing more. Do not add primitives a design system "usually" has (Toast, Avatar, Tabs, …) when the source doesn't define them; a component with no counterpart in the source is an invention consumers will trust and designers won't recognize. If an addition is genuinely needed (e.g. an Icon wrapper for a glyph set), list it in readme.md under "Intentional additions" with a one-line reason. Only when NO source defines components (brand-guidelines-only or from-scratch runs) should you author a standard set — Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip — sized to the brand's needs. Either way, group by concern (e.g. `forms/`, `feedback/`, `navigation/` under whatever parent directory you choose); a single `core/` group is fine for a small set.
- Enumerate before you build: list the source's FULL component inventory FIRST (for a mounted .fig, read /METADATA.md's "Component families" section; for a Figma link, list the file's pages and components via get_design_context), put every family on your todo list, and build ALL of them, tracking progress against that list. Do NOT stop at a "core subset". If you cannot finish, end your turn by reporting exactly which families remain unbuilt and ask the user whether to continue — never end silently incomplete.
- Each component is one file `&lt;Name&gt;.jsx` (or `.tsx`) with `export function &lt;Name&gt;(props) {…}` — a named, PascalCase export; that name becomes the public API and the literal `export` keyword is required so the bundler picks it up. Keep them self-contained: import React only, reference styling via the CSS custom properties (no CSS-in-JS libs, no npm packages). Siblings may import each other with relative paths.
- In the same directory, write `&lt;Name&gt;.d.ts` with the props interface — the sibling `.d.ts` is what gives a component its props contract, adherence rules, and starting-point eligibility; a `.jsx` without one is still bundled and exported under the namespace but gets none of those — and `&lt;Name&gt;.prompt.md` (first line is a one-sentence "what &amp; when", then a small JSX usage example, then notable variants/props).
- One card HTML per directory (name it whatever you like — e.g. `buttons.card.html`): first line is `&lt;!-- @dsCard group="Components" viewport="700x&lt;height&gt;" name="&lt;Directory label&gt;" --&gt;`. Link `styles.css` via the correct relative path, load the bundle via `&lt;script src="…/_ds_bundle.js"&gt;` (relative path to project root), then mount with `const { &lt;Name&gt; } = window.&lt;Namespace&gt;` in a `&lt;script type="text/babel"&gt;` block — call `check_design_system` to get the exact `&lt;Namespace&gt;`. Do NOT `&lt;script src&gt;` the `.jsx` directly (its `export` is unreachable from inline script). Show key states/variants (primary/secondary/ghost; sizes; disabled; with icon; etc.). Make it dense and scannable, not a single default render.
- Do NOT write `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`, or a barrel `index.js` — those are generated automatically.

Starting points
- Consuming projects show a "Starting Points" picker that lets users seed a new design with a component or screen from this system. Entries are opt-in via a tag — separate from `@dsCard` (which populates the Design System tab).
- To mark a component: add `@startingPoint section="&lt;group&gt;" subtitle="&lt;one line&gt;" viewport="&lt;WxH&gt;"` to the JSDoc on its `&lt;Name&gt;.d.ts` props interface. The picker thumbnail is that directory's `@dsCard`-tagged HTML, so make sure it renders sensibly at the declared viewport.
- To mark a screen: add `&lt;!-- @startingPoint section="&lt;group&gt;" subtitle="&lt;one line&gt;" viewport="&lt;WxH&gt;" --&gt;` as the first line of the HTML file. The screen itself is the thumbnail.
- When the user says "create a starting point &lt;X&gt;" (or "add &lt;X&gt; as a starting point"), write an HTML file with the `&lt;!-- @startingPoint section="…" --&gt;` comment as its first line — any `.html` in the project with that tag is indexed. `ui_kits/&lt;x&gt;/index.html` is the conventional home but not required.
- When the user asks to remove or retitle a starting point, edit the tag. When they ask to change a thumbnail, edit the `@dsCard`-tagged HTML in that component's directory (component) or the screen HTML itself.

UI kit details:
- UI kits are high-fidelity visual + interaction recreations of full interfaces — screens, not primitives. They cut corners on functionality (not 'real production code') but are pixel-perfect, created by reading the original UI code if possible, or using figma's get-design-context. UI kits compose the component primitives you authored above; don't re-implement Button inside a kit. A UI kit's `index.html` must look like a typical view of the product. These are recreations, not storybooks.
- To start, update the todo list to contain these steps for each product: (1) Explore codebase + components in Figma (design context) and code, (2) Create 3-5 core screens for each product (e.g. homepage or app) with interactive click-thru components, (3) Iterate visually on the designs 1-2x, cross-referencing with design context.
- Figure out the core products from this company/codebase. There may be one, or a few. (e.g. mobile app, marketing website, docs website).
- Each UI kit contains JSX (well-factored; small, neat) for that product's surfaces — sidebars, composers, file panels, hero units, headers, footers, blog posts, video players, settings screens, login, etc.
- The index.html file should demonstrate an interactive version of the UI (e.g a chat app would show you a login screen, let you create a chat, send a message, etc, as fake)
- You should get the visuals exactly right, using design context or codebase import. Don't copy component implementations exactly; make simple mainly-cosmetic versions. It's important to copy.
- Cover every component family the source defines — coverage means the full enumerated inventory, not a hand-picked subset. Within a UI kit screen you may abbreviate repeated content (e.g. 3 rows standing in for 30 identical ones), but never skip a component family.
- Do not invent new designs for UI kits. The job of the UI kit is to replicate the existing design, not create a new one. Copy the design, don't reinvent it. If you do not see it in the project, omit, or leave purposely blank with a disclaimer.

Guidance
- Run independently without stopping unless there's a crucial blocker (E.g. lack of Figma access to a pasted link; lack of codebase access).
- When creating slides and UI kits, avoid cutting corners on iconography; instead, copy icon assets in! Do not create halfway representations of iconography using hand-rolled SVG, emoji, etc.
- CRITICAL: Do not recreate UIs from screenshots alone unless you have no other choice! Use the codebase, or Figma's get-design-context, as a source of truth. Screenshots are much lossier than code; use screenshots as a high-level guide but always find components in the codebase if you can!
- The attached kit is the ground truth. When its values differ from the published conventions of a component library it resembles (shadcn, MUI, etc.), the kit wins. Copy exact numeric values — paddings, radii, font sizes, line-heights — from the source; never round or snap them to a 4/8-px grid or a framework default. If the kit says 5px, write 5px, not 4px.
- Avoid these visual motifs unless you are sure you see them in the codebase or Figma: bluish-purple gradients, emoji cards, cards with rounded corners and colored left-border only
- Avoid reading SVGs -- this is a waste of context! If you know their usage, just copy them and then reference them.
- When using Figma, use get-design-context to understand the design system and components being used. Screenshots are ONLY useful for high-level guidance. Make sure to expand variables and child components to get their content, too. (get_variable_defs)
- Stop if key resources are unnecessible: iff a codebase was attached or mentioned, but you are unable to access it via local_ls, etc, you MUST stop and ask the user to re-attach it using the Import menu. These get reattached often; do not complete a design system if you get a disconnect! Similarly, if a Figma url is inaccessible, stop and ask the user to rectify. NEVER go ahead spending tons of time making a design system if you cannot access all the resources the user gave you. This applies mid-run too: if reads start failing or rate-limiting partway through, stop and report exactly what you did and did not read — never infer or invent component names, structures, or values for content you could not read.

SKILL.md
- When you are done, we should make this file cross-compatible with Agent SKills in case the user wants to download it and use it in Claude Code.
- Create a SKILL.md file like this:

&lt;skill-md&gt;
---
name: {brand}-design
description: Use this skill to generate well-branded interfaces and assets for {brand}, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
&lt;/skill-md&gt;

</pasted_text>

## Assistant

_[tool: list_files]_

_[tool: set_project_title]_

_[tool: update_todos]_

_[tool: run_script]_

_[tool: check_design_system]_

_[tool: run_script]_

_[tool: write_file]_

_[tool: run_script]_

_[tool: list_files]_

Got it — folding the visualization extension in. Note your paste cut off mid-way through the `<Viz>` API block (section 6), so I have sections 1–6 partially; send the rest when you can and I'll reconcile.

_[tool: update_todos]_

_[tool: run_script]_

Two big directives noted — most consequential: **icon family switches from Lucide to Material Symbols Outlined as real SVG vectors**. Let me verify the SVG asset source works before I rewrite the icon layer.

_[tool: write_file]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: write_file]_

_[tool: show_html]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

Inspector + memory next.

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: str_replace_edit]_

Now the runtime, simulation and safety layer.

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

Now feedback, overlays and loading states.

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: check_design_system]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: get_webview_logs]_

Bundle is generated at end of turn, so cards can't render yet — expected on first pass. Continuing.

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

Now the project thumbnail and the guideline deep-dive docs.

_[tool: write_file]_

_[tool: run_script]_

_[tool: snip]_

_[tool: snip]_

_[tool: snip]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: check_design_system]_

_[tool: dc_write]_

_[tool: snip]_

_[tool: snip]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: check_design_system]_

_[tool: delete_file]_

_[tool: ready_for_verification]_

Built out as **LAMP Design System** — 510 tokens, 134 components in 10 groups, 35 Design System cards, 2 UI kits, 2 copyable templates, plus `readme.md`, `SKILL.md` and deep-dive specs for bonding, semantic zoom, motion, accessibility and coverage.

**Caveats you should know about**

1. **Component cards, UI kits and templates can't render until `_ds_bundle.js` compiles**, which happens at the end of this turn. Foundation cards (colour, type, spacing, brand) render now; the component-backed surfaces will render on your next look. If any are still blank, tell me and I'll debug them.
2. **No logo.** None was supplied, so I drew nothing — LAMP is set as a wordmark in Geist Sans 600. `assets/README.md` lists the three places to swap in a real mark.
3. **Fonts and icons are CDN-loaded, not vendored.** Geist/Geist Mono from Google Fonts; Material Symbols Outlined and Simple Icons as real SVGs from jsDelivr, inlined so they inherit `currentColor` — never ligatures, never emoji. One-line change in `Icon.jsx` makes them local.
4. **Charts are token-native SVG implementations, not the real renderers.** They define the visual language and the `Viz` API; `VIZ_TIERS` maps each type to its production tier (Recharts / ECharts / visx / uPlot), and `DataTable` is presentation-only, expecting TanStack Table underneath.
5. **Scope calls I made deliberately:** the last brief named several thousand component names. I built ~134 composable primitives and documented every requested name against them in `guidelines/coverage.md`, with an explicit "specified, not built" list (auth, onboarding, billing, collaboration, files, import/export, webhooks, localization, treemap/sankey/graph renderers). I did not build 2,000 near-duplicate components — that would have produced a system nobody could hold in their head.
6. Your visualization brief **cut off mid-section 6** (the `<Viz>` API block). I inferred the rest; send the remainder and I'll reconcile.

**What I need from you to make this right:** open the Design System tab and tell me which of these three is wrong first — (a) the **Agent hexagon and bonding treatment** (the whole product rests on it: sizes, state borders, the dashed-violet suggested bond, the label-below-object choice), (b) the **gold discipline** (graphite primary buttons, gold reserved for Live/selection/energy — is 5% too little?), or (c) the **density** (32px controls, 32/40px rows — too tight or not tight enough?). Those three decisions propagate into every screen, so I'd rather re-cut them now than after you've built on them.

## User

dashboard etc use shadcn, i also want the chat component to be distinctive and user friebdly

## Assistant

_[tool: list_files]_

Bundle compiled, so I can verify visually as I go. Building two new groups: shadcn-shaped dashboard primitives, and a distinctive LAMP chat.

_[tool: run_script]_

_[tool: run_script]_

_[tool: write_file]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: str_replace_edit]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: show_html]_

_[tool: eval_js]_

_[tool: get_webview_logs]_

Found a real bug: lowercase helpers like `hexCenter` aren't exposed on the namespace (only capitalized exports are). Fixing.

_[tool: run_script]_

_[tool: read_file]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: show_html]_

_[tool: snip]_

_[tool: run_script]_

_[tool: check_design_system]_

_[tool: ready_for_verification]_

Added two groups — **dashboard** (6 exports) and **chat** (9 exports) — plus cards for both, and documented them as `readme.md` §12 and §13.

**Dashboards now follow shadcn/ui structure:** `DashboardPage` → `PageHeader` (title, one-line description, meta badges, right-aligned actions) → toolbar → `StatGrid` of `MetricCard`s → `SectionHeader` → `DashboardGrid` of `DashboardCard`s. The card is header/content/footer exactly as shadcn shapes it, wearing LAMP tokens: 8px radius, 1px border, flat by default. Charts inside cards use `<ChartFrame flush>` so there's never a doubled frame or title; grids collapse 4→2 at 1100px and to one column at 760px.

**Chat is built to be distinctly LAMP, not a generic bot.** Six decisions carry it: hexagonal Agent avatars with the acting Agent gold-ringed (crew shown as overlapping hexes in the header); an activity strip of square Tool chips / violet memory pills / round Skill chips with durations and failure states, so work is visible instead of hidden behind a spinner; numbered evidence pills that name their source; approvals and memory conflicts arriving as cards **inside** the thread rather than modals; a status line that says who is working on what with a running token count and a Stop button — and says plainly when nothing is running; and a scope pill on the composer so you always know which Genie you're addressing. Enter sends, quick replies cover the expected answers, streaming shows a gold caret with no fake typing, failed messages offer Retry.

Two caveats:

1. **The new chat and dashboard cards won't render until the bundle recompiles at the end of this turn** — same timing as before. I confirmed the bundle pipeline itself works (150 exports now compile cleanly, no issues).
2. **I found and fixed a real bug:** lowercase helpers aren't exposed on the design-system namespace, so `hexCenter` was `undefined` and the LAMP-objects card, the builder UI kit and the Genie canvas template were all failing silently. Now exported as `HexCenter`, with `ChartFrame.seriesColor` and `Heatmap.heatColor` as statics. Those three surfaces should come back on the next recompile — **please look at the objects card, the builder kit and the chat card first, and tell me if any are still blank.**

The older `Conversation` / `Message` / `Composer` in `patterns/` are kept as the minimal embedded thread (run traces, side panels); `AgentChat` is for any surface where conversation is the primary interaction. Say the word if you'd rather I retire the old one.

## User

yeah genie card, agent hex etc are blank

## Assistant

_[tool: show_html]_

It renders now — the recompile cleared it. But I can see two real defects: **bonds are invisible** (hex fills cover them) and the `detail="meta"` inline-name branch is inconsistent. Fixing both.

_[tool: run_script]_

_[tool: show_html]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: run_script]_

Two good calls. Making hover hit the hexagon only, and turning the Playbook frame into a FigJam-style section that can hold bonded clusters *and* Agents working on their own.

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: eval_js]_

_[tool: check_design_system]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Three changes made, plus two real bugs fixed on the way.

**Hover is now the hexagon only.** The wrapper is `pointer-events: none`; the hex polygon owns hover, focus and click. Hovering darkens the border and tints the fill one step — no lift, no bounding-box highlight, and the label beside it is never part of the hit area. Two Agents sitting close together are now unambiguous.

**Playbooks are sections, not blobs.** New `AgentIsland` primitive plus `layout="free"` on `PlaybookCluster`, so one Playbook can hold a bonded lattice, several parallel islands, and Agents working entirely on their own — each with a short label and a quiet note ("human checkpoint", "after settlement", "not configured"). Added `dropState` for drag-in/out feedback, `collapsed` for title-only, and `resizable` for the corner grip. The rule I wrote down: **bonds exist only within an island**; two islands in the same section are related by membership, not by a wire — which is precisely why the system still needs no connectors. The builder kit and objects card now show a bonded core + an outlined approval island + two standalone Agents.

**Live behaviour is a documented choreography, one beat per state:** queued still → starting a 240ms ring contracting in → running a slow 1.8s gold throb → delegating the throb plus a spark travelling the bond → waiting stops the throb and pulses only the status dot → retrying a faster 900ms throb → **succeeded fires one 520ms ring expanding out, then goes completely still** with the green border fading back to default over 1.2s → failed shakes once for 160ms then stays quiet with a red border → paused dissipates → killed has no motion at all. Full table in `guidelines/motion.md`, readme §15. The principle: movement means work in progress, so thirty Agents only animate where something is happening, and a finished Agent is visibly calmer than a running one.

Fixed while in there: bonds were invisible (centre-to-centre lines sat under the opaque hex fills — now a gold seam segment plus junction dot drawn above the cells); Agent names collided on the canvas (labels are now capped and the lattice opens to a 22px gap whenever names are shown); `MetricCard` coloured falling cost red (arrow now follows `deltaDirection`, colour follows a new `deltaTone`, so "-9% cost" reads green); chart axes printed raw decimals like `309.75`; and the builder kit had a Babel-breaking `data-type="module"` attribute.

One caveat, same as before: **`AgentIsland` and the live-behaviour CSS only reach the bundle when it recompiles at the end of this turn**, so the builder kit and objects card will be blank until you reload them. Chat and dashboard cards render now.

Worth your eye next: the throb rate (1.8s) and the succeeded ring are the two values most likely to feel wrong in a real board — tell me if running should be more insistent or more subtle.

## User

fix it

## Assistant

_[tool: show_html]_

_[tool: eval_js]_

_[tool: get_webview_logs]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: run_script]_

_[tool: multi_screenshot]_

All four render in the combined card — so you're missing *dedicated* cards for them. Adding one card per object primitive.

_[tool: run_script]_

_[tool: show_html]_

Real bug: icons that fail to load render *nothing* silently. Adding a visible fallback and swapping the risky glyph names.

_[tool: run_script]_

_[tool: run_script]_

That page's own graph is behind JS, but the ask is clear. Building `MemoryGraph` — an Obsidian-style force graph for LAMP memory, using LAMP's geometry grammar for node shapes.

_[tool: write_file]_

_[tool: web_fetch]_

_[tool: update_todos]_

_[tool: write_file]_

_[tool: grep]_

_[tool: list_files]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: check_design_system]_

_[tool: run_script]_

_[tool: show_html]_

Caught a crash before it ships: `useMemo` sits after an early return in `MemoryGraph`, which breaks hook order on the second render.

_[tool: run_script]_

_[tool: ready_for_verification]_

Both built.

**`MemoryGraph`** — Obsidian-style force graph over LAMP memory, in `components/memory/` with its own card. What makes it readable rather than a hairball: **hover isolates a neighbourhood** (hovered node and its direct links stay full strength, everything else drops to 18%) — that's the interaction that answers "what does this fact touch?". Type is carried by **geometry, not just colour**, reusing your product grammar: hexagon = Agent, square = Tool, diamond = scope, circle = fact or entity; dashed links are inferred/suggested, heavier red links are conflicts; node size is evidence or retrieval count. And it **settles then stops** — the sim decays over ~260 frames and freezes, deterministically seeded so the same graph always lays out identically. A memory graph at rest doesn't drift, which matches the stillness rule everything else follows. Reduced motion runs the whole simulation synchronously and paints only the settled result.

**`SnapField`** — drag-to-snap for the whiteboard canvas, in `components/canvas/` with a card you can actually drag. Agents drag freely; inside a 34px tolerance they drift **magnetically** toward the nearest *free* lattice slot, that slot shows as a dashed hexagonal guide, and release commits it. The lattice is never drawn — only the candidate slot, only during a drag. `onSnapStateChange` emits `dragging` / `snapReady` / `idle` so the status line, bond preview and sound hooks all read from one source. Bonds re-evaluate live as Agents move: drag one away and the bond disappears, drop it adjacent and it returns.

The keyboard path is built into the component, not bolted on: focus an Agent, arrow keys move it one lattice cell at a time and occupied cells are refused. That's the non-drag alternative the accessibility spec requires.

Also fixed in passing: icons that 404 were rendering **nothing** silently — they now render a visible placeholder and log a warning, so a missing glyph gets caught in review instead of leaving invisible gaps in toolbars and status badges. And I caught a hook-order crash in `MemoryGraph` (a `useMemo` after an early return) before it shipped.

Two things to know:

1. **Both new components need the end-of-turn recompile before their cards render** — same as every previous addition. They'll be live on your next look.
2. **On your Munder Difflin reference:** its graph is behind JavaScript, so I only got the page text, not the visual. I built from the Obsidian behaviour you named. **If it's the specific look you're after — link thickness, label treatment, the glow — send a screenshot and I'll match it properly.**

Worth flagging: I kept the force sim hand-rolled so it consumes LAMP tokens directly, but production should move it to **visx** per the visualization tiers, which is noted in the prompt doc.

