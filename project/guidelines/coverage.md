# Coverage

What the system covers, what it covers *through composition*, and what is specified but not yet built. Screens should be composition of these primitives; a genuinely new product concept is the only reason to add a primitive.

## Layers

| Layer | Contents |
| --- | --- |
| 0 Foundations | `tokens/` — colour, type, space, geometry, elevation, motion, object geometry, dataviz |
| 1 Primitive UI | `components/core`, `components/forms` |
| 2 Composite UI | `components/navigation`, `components/inspector`, `components/data`, `components/feedback` |
| 3 Product objects | `components/objects`, `components/memory`, `components/canvas` |
| 4 Product patterns | `components/runtime`, `components/patterns` |
| 5 Page templates | `ui_kits/lamp-canvas`, `ui_kits/lamp-operations` |

## Composition map

Many requested component names are **variants or compositions**, not separate components. This is deliberate — duplicating a primitive for a trivial visual difference is how systems rot.

| Asked for | Built as |
| --- | --- |
| DangerButton, EmergencyButton, LoadingButton, CopyButton, RetryButton, ApproveButton, GoLiveButton, PauseButton, KillButton | `Button` variants (`danger`, `danger-quiet`, `brand`) + `loading` + icon |
| ToggleButton, ButtonGroup, ViewSwitcher, ChartTableSwitcher, SimulationLiveSwitcher, DensitySwitcher | `SegmentedControl` |
| CurrencyInput, PercentageInput, EmailInput, URLInput, PhoneInput, DurationInput, KeyInput | `TextInput` / `NumberInput` with `suffix`, `icon`, `mono` |
| EntityPicker, PersonPicker, ToolPicker, AgentPicker, SkillPicker, PlaybookPicker, GeniePicker, ModelPicker | `Select` / `Combobox` pattern over `ObjectRow` + `EntityChip` |
| JSONEditor, YAMLEditor, SchemaEditor, SQLViewer, PayloadViewer, DiffViewer, LogViewer, RawJSON | `CodeFrame` (`language`, `.k .s .n .c` token classes) |
| ExpressionField, TemplateEditor, VariablePicker, SystemPromptEditor | `PromptEditor` + `VariableToken` |
| Chip, Pill, Label, Kicker, VersionBadge, BetaBadge, NewBadge, CountBadge, NotificationBadge, RiskBadge, ConfidenceBadge, SourceBadge | `Badge` (tone, `micro`, `count`, `outline`) and `Tag` |
| StatusDot, StatusPill, StatusLabel, StatusIcon | `StatusBadge` `mode` = badge / label / icon, plus `StatusDot` |
| EnvironmentBadge, EnvironmentSwitcher, EnvironmentSummary | `EnvironmentPill` + `EnvironmentBanner` + `SegmentedControl` |
| AgentMini, AgentPreview, AgentCard, AgentListItem | `AgentHex` sizes + `detail` tiers, `ObjectRow kind="agent"` |
| GenieHive, GenieCollapsed, GenieExpanded, GenieMiniMapRepresentation | `GenieCard` + `HexLattice` (`size="xs"`) + `CanvasMinimap` |
| PlaybookMini, PlaybookCard, PlaybookMiniature, PlaybookPreview | `PlaybookCluster` + `ObjectRow kind="playbook"` |
| Bond, BondPreview, BondCandidate, BondEnergy, BondJunction, BondConflict, BondSuggestion, BondLearned, BondLocked | `BondEdge` `state` + `energy` |
| AgentList, PlaybookList, ToolList, SkillList, MemoryList, RunList, ApprovalList, AuditList, ActivityList, MemberList, IntegrationList | `ObjectRow` + `ObjectList` (`kind`) |
| TableHeader/Body/Row/Cell, ColumnMenu, SortControl, ColumnVisibility, Pagination, BulkActionBar, TotalsRow, DataGrid | `DataTable` (columns config, `toolbar`, `bulkActions`, `footerRow`) + `FilterBar` + `Pagination` |
| Line/Area/Bar/HBar/Stacked/Donut/Gauge/Scatter/Histogram/Heatmap/Calendar/Hive/Treemap/Sankey/Graph/Telemetry | `Viz` `type` — dispatches to the Recharts / ECharts / visx / uPlot tier |
| TokenUsage, CacheRate, CostByAgent, CostByPlaybook, LatencyBreakdown | `ContextBreakdown` + `StackedBar` + `Viz type="hbar"` + `MetricCard` |
| Toast, ToastStack, InlineAlert, Banner, SystemAlert, CriticalAlert, UndoToast | `InlineNotification` (`tone`, `banner`) + `Toast` + `ToastStack` |
| SearchEmpty, TableEmpty, CanvasEmpty, MemoryEmpty, RunEmpty, NoPermissionState, FilteredEmpty | `EmptyState` (glyph, title, one action) |
| ToolError, AgentError, PlaybookError, AuthorizationError, NetworkError, PartialFailure, RateLimitError | `ErrorState` (happened / did not happen / impact / recovery) |
| Skeleton*, InlineLoading, PanelLoading, StreamingIndicator, ThinkingIndicator, AgentRunningIndicator | `Skeleton` (`variant="hex"` included), `Spinner`, `LiveActivityIndicator`, `ProgressBar` |
| Modal, Dialog, AlertDialog, ConfirmationDialog, CriticalDialog, Sheet, BottomSheet | `Modal` (`size`, `critical`) + `CriticalConfirmation` + `Drawer` |
| DropdownMenu, ContextMenu, OverflowMenu, ObjectMenu, Submenu, BulkActionMenu | `CanvasContextMenu` (grouped items, danger, shortcuts) |
| Trace, TraceSpan, TraceEvent, SimulationTimeline | `RunTimeline` / `RunStep` / `SimulationStep` (mocked, blocked, divergence) |
| ApprovalRequest, DecisionCard, EscalationCard, ReviewRequest, DelegationRequest, ChoiceCard, BinaryDecisionCard | `ApprovalCard` (`kind`, `tone`, `options`) + `HumanCheckpoint` |
| KillSwitch, SafeStop, PauseAutomation, EmergencyStop, KillScope, KillImpact | `KillSwitch` + `SafetyControls` |
| IntegrationDirectory, ConnectedAccount, OAuthState, PermissionsList, CredentialExpiry, ConnectionHealth | `IntegrationCard` + `ToolRow` |
| RoleList, RoleCard, PermissionCell, EffectivePermissions, InheritedPermission, PermissionConflict, AccessBadge | `PermissionMatrix` + `PermissionCell` + `RoleBadge` |
| MemoryCard, MemoryValue, MemorySource, MemoryEvidence, MemoryFreshness, MemoryCorrection, lifecycle states | `MemoryFact` (`type`, `scope`, `state`, `contradictions`) + `MemoryBadge` + `MemoryScope` + `MemoryScopeBar` + `MemoryConflict` |
| ObservedStep, ProcessVariant, ProcessException, ProcessHandoff, ProcessRework, ProcessApproval | `ObservedProcess` step `kind` |
| LearnedPattern, ObservedPattern, SuggestedPlaybook, UncertainFact, ConfirmationRequest | `LearnedPattern` `kind` · `ProcessProposal` for a matched standard process |
| Playbook definition, process discovery, capability set-up | `PlaybookComposer` + `BUSINESS_PROCESSES` + `MatchProcess` + `BuildGenie` + `GenieBlueprint` (see readme §18) |
| Conversation, MessageList, Message, UserMessage, AgentMessage, SystemMessage, ToolMessage, Composer, QuickReply | `Conversation` + `Message` `role` + `Composer` |
| VoiceButton, HoldToSpeak, VoiceRecording, VoiceWaveform, Listening, ProcessingSpeech, Speaking | `VoiceButton` `state` + `VoiceWaveform` |
| MobileShell, MobileTopBar, MobileBottomNav, MobileApproval, MobileActivity, MobileEmergency | `MobileShell` + the same cards as desktop at comfortable density |
| Timeline, History, ChangeHistory, VersionHistory, AuditLog rows, ActivityFeed | `MemoryTimeline` + `ObjectRow kind="audit"/"activity"` |

## Specified, not built

Documented in this repo but without a dedicated component — build these from the primitives above when the first real screen needs them, and add them here if they earn a primitive:

**Built since the first pass**, and no longer on this list: `InspectorHeader` · `InspectorTabs` · `InspectorField` · `InspectorFooter` · `MemoryScopeBar` · `MemoryConflict` · `SimulationStep` · `StackedBar` · `ContextBreakdown` — all nine were named in readme.md §9 but had no source behind them. `npm run check` now fails if the documentation names a component the source does not define.

Still specified, not built:

Auth and onboarding surfaces (`AuthShell`, `OTPInput`, onboarding steps) · billing · calendar and scheduling (`CronEditor`, `ScheduleCalendar`) · collaboration (presence, comments, locking) · file handling (`FileUploader`, `DocumentViewer`) · import/export wizards · data mapping and entity resolution · webhooks and API developer surfaces · feature flags · localization controls (`RTLProvider`, `LocaleSelector`) · treemap / sunburst / sankey / graph renderers on the ECharts tier · uPlot telemetry renderer · TanStack virtualization wiring.

Each of these has token, content and accessibility rules already defined; none of them needs a new visual language.

## Representable cases (validated)

One independent Agent · a Playbook of 8–12 Agents · a Genie of several Playbooks · all four memory scopes · tool authorization failure · simulation execution · human approval · Live execution · Agent error · Playbook error · emergency kill · learned business process · suggested process improvement · high-density run history · an empty LAMP.
