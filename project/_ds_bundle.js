/* @ds-bundle: {"namespace":"LAMPDesignSystem_980d6d","components":[{"name":"ICON_VIEWBOX","sourcePath":"components/core/glyphs.js"},{"name":"BRAND_VIEWBOX","sourcePath":"components/core/glyphs.js"},{"name":"MATERIAL_SYMBOLS_BASE","sourcePath":"components/core/Icon.jsx"},{"name":"BRAND_ICON_BASE","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"BrandIcon","sourcePath":"components/core/Icon.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"SearchInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"NumberInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"SecretField","sourcePath":"components/forms/TextInput.jsx"},{"name":"STATUS","sourcePath":"components/core/StatusBadge.jsx"},{"name":"StatusDot","sourcePath":"components/core/StatusBadge.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"AGENT_SIZES","sourcePath":"components/objects/AgentHex.jsx"},{"name":"AgentHex","sourcePath":"components/objects/AgentHex.jsx"},{"name":"GSAP_CDN","sourcePath":"components/canvas/CanvasMotion.jsx"},{"name":"GSAP_EASE","sourcePath":"components/canvas/CanvasMotion.jsx"},{"name":"GSAP_DURATION","sourcePath":"components/canvas/CanvasMotion.jsx"},{"name":"AGENT_ARCHETYPES","sourcePath":"components/canvas/AgentLibrary.jsx"},{"name":"AgentLibrary","sourcePath":"components/canvas/AgentLibrary.jsx"},{"name":"CanvasContextMenu","sourcePath":"components/canvas/CanvasContextMenu.jsx"},{"name":"CanvasSurface","sourcePath":"components/canvas/CanvasSurface.jsx"},{"name":"SnapGuide","sourcePath":"components/canvas/CanvasSurface.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"CanvasToolbar","sourcePath":"components/canvas/CanvasToolbar.jsx"},{"name":"CanvasZoomControls","sourcePath":"components/canvas/CanvasToolbar.jsx"},{"name":"CanvasObjectToolbar","sourcePath":"components/canvas/CanvasToolbar.jsx"},{"name":"CanvasMinimap","sourcePath":"components/canvas/CanvasToolbar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SplitButton","sourcePath":"components/core/Button.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"CriticalConfirmation","sourcePath":"components/feedback/Modal.jsx"},{"name":"Drawer","sourcePath":"components/feedback/Modal.jsx"},{"name":"Popover","sourcePath":"components/feedback/Modal.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TagInput","sourcePath":"components/forms/TagInput.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"TOOL_SIZES","sourcePath":"components/objects/ToolTile.jsx"},{"name":"ToolTile","sourcePath":"components/objects/ToolTile.jsx"},{"name":"ToolRow","sourcePath":"components/objects/ToolTile.jsx"},{"name":"NewAgentDialog","sourcePath":"components/canvas/NewAgentDialog.jsx"},{"name":"HexLattice","sourcePath":"components/objects/HexLattice.jsx"},{"name":"HexCenter","sourcePath":"components/objects/HexLattice.jsx"},{"name":"FreeCells","sourcePath":"components/canvas/SnapField.jsx"},{"name":"FreeCellAt","sourcePath":"components/canvas/SnapField.jsx"},{"name":"SnapField","sourcePath":"components/canvas/SnapField.jsx"},{"name":"ChatAvatar","sourcePath":"components/chat/ChatMessage.jsx"},{"name":"ChatActivity","sourcePath":"components/chat/ChatMessage.jsx"},{"name":"ChatCitation","sourcePath":"components/chat/ChatMessage.jsx"},{"name":"ChatDayDivider","sourcePath":"components/chat/ChatMessage.jsx"},{"name":"ChatMessage","sourcePath":"components/chat/ChatMessage.jsx"},{"name":"ChatStatus","sourcePath":"components/chat/AgentChat.jsx"},{"name":"AgentChat","sourcePath":"components/chat/AgentChat.jsx"},{"name":"Kbd","sourcePath":"components/core/Kbd.jsx"},{"name":"ChatQuickReplies","sourcePath":"components/chat/ChatComposer.jsx"},{"name":"ChatComposer","sourcePath":"components/chat/ChatComposer.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"EnvironmentPill","sourcePath":"components/core/EnvironmentPill.jsx"},{"name":"Panel","sourcePath":"components/core/Panel.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"},{"name":"DashboardCard","sourcePath":"components/dashboard/DashboardCard.jsx"},{"name":"DashboardGrid","sourcePath":"components/dashboard/DashboardCard.jsx"},{"name":"StatGrid","sourcePath":"components/dashboard/DashboardCard.jsx"},{"name":"PageHeader","sourcePath":"components/dashboard/PageHeader.jsx"},{"name":"DashboardPage","sourcePath":"components/dashboard/PageHeader.jsx"},{"name":"SectionHeader","sourcePath":"components/dashboard/PageHeader.jsx"},{"name":"DATAVIZ","sourcePath":"components/data/ChartFrame.jsx"},{"name":"ChartLegend","sourcePath":"components/data/ChartFrame.jsx"},{"name":"ChartFrame","sourcePath":"components/data/ChartFrame.jsx"},{"name":"ChartTooltip","sourcePath":"components/data/ChartFrame.jsx"},{"name":"BarChart","sourcePath":"components/data/BarChart.jsx"},{"name":"StackedBar","sourcePath":"components/data/StackedBar.jsx"},{"name":"ContextBreakdown","sourcePath":"components/data/ContextBreakdown.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"DonutChart","sourcePath":"components/data/DonutChart.jsx"},{"name":"Heatmap","sourcePath":"components/data/Heatmap.jsx"},{"name":"HexHeatmap","sourcePath":"components/data/HexHeatmap.jsx"},{"name":"LineChart","sourcePath":"components/data/LineChart.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"UsageMeter","sourcePath":"components/data/ProgressBar.jsx"},{"name":"ScatterPlot","sourcePath":"components/data/ScatterPlot.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"VIZ_TIERS","sourcePath":"components/data/Viz.jsx"},{"name":"Viz","sourcePath":"components/data/Viz.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ErrorState","sourcePath":"components/feedback/ErrorState.jsx"},{"name":"InlineNotification","sourcePath":"components/feedback/InlineNotification.jsx"},{"name":"Toast","sourcePath":"components/feedback/InlineNotification.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/InlineNotification.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"CodeFrame","sourcePath":"components/forms/CodeFrame.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"KeyValueInput","sourcePath":"components/forms/KeyValueInput.jsx"},{"name":"VariableToken","sourcePath":"components/forms/PromptEditor.jsx"},{"name":"PromptEditor","sourcePath":"components/forms/PromptEditor.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"InspectorField","sourcePath":"components/inspector/InspectorField.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"InspectorHeader","sourcePath":"components/inspector/InspectorPanel.jsx"},{"name":"InspectorTabs","sourcePath":"components/inspector/InspectorPanel.jsx"},{"name":"InspectorFooter","sourcePath":"components/inspector/InspectorPanel.jsx"},{"name":"InspectorPanel","sourcePath":"components/inspector/InspectorPanel.jsx"},{"name":"InspectorSection","sourcePath":"components/inspector/InspectorSection.jsx"},{"name":"PropertyRow","sourcePath":"components/inspector/InspectorSection.jsx"},{"name":"FACT_TYPES","sourcePath":"components/memory/MemoryBadge.jsx"},{"name":"MEMORY_SCOPES","sourcePath":"components/memory/MemoryBadge.jsx"},{"name":"MemoryBadge","sourcePath":"components/memory/MemoryBadge.jsx"},{"name":"MemoryScope","sourcePath":"components/memory/MemoryBadge.jsx"},{"name":"MemoryConfidence","sourcePath":"components/memory/MemoryBadge.jsx"},{"name":"MemoryConflict","sourcePath":"components/memory/MemoryConflict.jsx"},{"name":"MemoryFact","sourcePath":"components/memory/MemoryFact.jsx"},{"name":"MemoryGraph","sourcePath":"components/memory/MemoryGraph.jsx"},{"name":"MemoryScopeBar","sourcePath":"components/memory/MemoryScopeBar.jsx"},{"name":"MemoryTimeline","sourcePath":"components/memory/MemoryTimeline.jsx"},{"name":"MemoryUsageBar","sourcePath":"components/memory/MemoryUsageBar.jsx"},{"name":"AppShell","sourcePath":"components/navigation/AppShell.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"CommandPalette","sourcePath":"components/navigation/CommandPalette.jsx"},{"name":"FilterBar","sourcePath":"components/navigation/FilterBar.jsx"},{"name":"Pagination","sourcePath":"components/navigation/FilterBar.jsx"},{"name":"GlobalHeader","sourcePath":"components/navigation/GlobalHeader.jsx"},{"name":"ObjectTree","sourcePath":"components/navigation/ObjectTree.jsx"},{"name":"SegmentedControl","sourcePath":"components/navigation/SegmentedControl.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"NavSection","sourcePath":"components/navigation/SideNav.jsx"},{"name":"NavItem","sourcePath":"components/navigation/SideNav.jsx"},{"name":"StatusBar","sourcePath":"components/navigation/StatusBar.jsx"},{"name":"WorkspaceSwitcher","sourcePath":"components/navigation/WorkspaceSwitcher.jsx"},{"name":"AgentIsland","sourcePath":"components/objects/AgentIsland.jsx"},{"name":"BondEdge","sourcePath":"components/objects/BondEdge.jsx"},{"name":"BondLayer","sourcePath":"components/objects/BondEdge.jsx"},{"name":"EntityChip","sourcePath":"components/objects/EntityChip.jsx"},{"name":"GenieCard","sourcePath":"components/objects/GenieCard.jsx"},{"name":"ObjectRow","sourcePath":"components/objects/ObjectRow.jsx"},{"name":"ObjectList","sourcePath":"components/objects/ObjectRow.jsx"},{"name":"PlaybookCluster","sourcePath":"components/objects/PlaybookCluster.jsx"},{"name":"SKILL_SIZES","sourcePath":"components/objects/SkillOrb.jsx"},{"name":"SkillOrb","sourcePath":"components/objects/SkillOrb.jsx"},{"name":"BUSINESS_PROCESSES","sourcePath":"components/patterns/BusinessProcess.jsx"},{"name":"BLANK_PROCESS","sourcePath":"components/patterns/BusinessProcess.jsx"},{"name":"MatchProcess","sourcePath":"components/patterns/BusinessProcess.jsx"},{"name":"ProcessProposal","sourcePath":"components/patterns/BusinessProcess.jsx"},{"name":"Message","sourcePath":"components/patterns/Conversation.jsx"},{"name":"MessageList","sourcePath":"components/patterns/Conversation.jsx"},{"name":"Composer","sourcePath":"components/patterns/Conversation.jsx"},{"name":"Conversation","sourcePath":"components/patterns/Conversation.jsx"},{"name":"BuildGenie","sourcePath":"components/patterns/GenieBlueprint.jsx"},{"name":"GenieBlueprint","sourcePath":"components/patterns/GenieBlueprint.jsx"},{"name":"IntegrationCard","sourcePath":"components/patterns/IntegrationCard.jsx"},{"name":"LearnedPattern","sourcePath":"components/patterns/LearnedPattern.jsx"},{"name":"MobileShell","sourcePath":"components/patterns/MobileShell.jsx"},{"name":"ObservedProcess","sourcePath":"components/patterns/ObservedProcess.jsx"},{"name":"PermissionCell","sourcePath":"components/patterns/PermissionMatrix.jsx"},{"name":"PermissionMatrix","sourcePath":"components/patterns/PermissionMatrix.jsx"},{"name":"RoleBadge","sourcePath":"components/patterns/PermissionMatrix.jsx"},{"name":"PlaybookComposer","sourcePath":"components/patterns/PlaybookComposer.jsx"},{"name":"VoiceWaveform","sourcePath":"components/patterns/VoiceButton.jsx"},{"name":"VoiceButton","sourcePath":"components/patterns/VoiceButton.jsx"},{"name":"ApprovalCard","sourcePath":"components/runtime/ApprovalCard.jsx"},{"name":"HumanCheckpoint","sourcePath":"components/runtime/ApprovalCard.jsx"},{"name":"EnvironmentBanner","sourcePath":"components/runtime/EnvironmentBanner.jsx"},{"name":"KillSwitch","sourcePath":"components/runtime/KillSwitch.jsx"},{"name":"SafetyControls","sourcePath":"components/runtime/KillSwitch.jsx"},{"name":"LiveActivityIndicator","sourcePath":"components/runtime/LiveActivityIndicator.jsx"},{"name":"ReadinessCheck","sourcePath":"components/runtime/ReadinessCheck.jsx"},{"name":"RunSummary","sourcePath":"components/runtime/RunSummary.jsx"},{"name":"RunStep","sourcePath":"components/runtime/RunTimeline.jsx"},{"name":"RunTimeline","sourcePath":"components/runtime/RunTimeline.jsx"},{"name":"SimulationBar","sourcePath":"components/runtime/SimulationBar.jsx"},{"name":"SimulationStep","sourcePath":"components/runtime/SimulationStep.jsx"}],"sourceHashes":{"components/canvas/AgentLibrary.jsx":"a0065e70fad8","components/canvas/CanvasContextMenu.jsx":"642e509a361f","components/canvas/CanvasMotion.jsx":"5b16c55bf142","components/canvas/CanvasSurface.jsx":"c75db64ccc44","components/canvas/CanvasToolbar.jsx":"1e90531bb5b7","components/canvas/NewAgentDialog.jsx":"76adfcdd27ad","components/canvas/SnapField.jsx":"a464e4dd3d79","components/chat/AgentChat.jsx":"a993ce5d5724","components/chat/ChatComposer.jsx":"e4797b124cad","components/chat/ChatMessage.jsx":"ec98b6317ffe","components/core/Badge.jsx":"02ec3798d471","components/core/Button.jsx":"01703e75087c","components/core/Card.jsx":"4f07d92ba8fb","components/core/Divider.jsx":"bbef0f29f18a","components/core/EnvironmentPill.jsx":"4b6cb0f1c6e7","components/core/glyphs.js":"64077623c154","components/core/Icon.jsx":"da94632bafd0","components/core/IconButton.jsx":"fe79c7a872c7","components/core/Kbd.jsx":"c907f3fefbd3","components/core/Panel.jsx":"6eafedbbe0e4","components/core/refs.js":"84615fb1a4c1","components/core/StatusBadge.jsx":"e66478913946","components/core/Tag.jsx":"58ae1ed9706a","components/core/Tooltip.jsx":"286494380b24","components/dashboard/DashboardCard.jsx":"9cfc7f7bde21","components/dashboard/PageHeader.jsx":"e64443109f78","components/data/BarChart.jsx":"31b05f10899b","components/data/ChartFrame.jsx":"9c7fb4937c47","components/data/ContextBreakdown.jsx":"183ef6ed90f6","components/data/DataTable.jsx":"dd3c70054ef9","components/data/DonutChart.jsx":"2fd6b68fe28f","components/data/Heatmap.jsx":"ba7d9f459273","components/data/HexHeatmap.jsx":"489204584f86","components/data/LineChart.jsx":"31f3b752c5c7","components/data/MetricCard.jsx":"0c82c139d8a0","components/data/ProgressBar.jsx":"6c205eaea379","components/data/ScatterPlot.jsx":"20ecb73c12b1","components/data/Sparkline.jsx":"aa96565d6ac1","components/data/StackedBar.jsx":"583970cae7e6","components/data/Viz.jsx":"60bdb93790cb","components/feedback/EmptyState.jsx":"6eb22e48bc12","components/feedback/ErrorState.jsx":"dd1ce27be581","components/feedback/InlineNotification.jsx":"830b9b9df14f","components/feedback/Modal.jsx":"dc13ceaf26fe","components/feedback/Skeleton.jsx":"7e7e5393f0c4","components/forms/Checkbox.jsx":"4b0aaee3abcc","components/forms/CodeFrame.jsx":"51033b535629","components/forms/Field.jsx":"811e3e3f47e3","components/forms/KeyValueInput.jsx":"b0cb689d5e7e","components/forms/PromptEditor.jsx":"dad958373036","components/forms/Radio.jsx":"b9664a441848","components/forms/Select.jsx":"a52362727edc","components/forms/Slider.jsx":"6e80bed5923b","components/forms/Switch.jsx":"b3289d2b42ce","components/forms/TagInput.jsx":"bec9c50f529e","components/forms/Textarea.jsx":"e832fc3b06f1","components/forms/TextInput.jsx":"a4fa3bc4afa8","components/inspector/InspectorField.jsx":"a032f02cf6e3","components/inspector/InspectorPanel.jsx":"35f85d629b56","components/inspector/InspectorSection.jsx":"9d41f88569ed","components/memory/MemoryBadge.jsx":"89ce91afc4db","components/memory/MemoryConflict.jsx":"17550dcb5a46","components/memory/MemoryFact.jsx":"62129a1c0b5c","components/memory/MemoryGraph.jsx":"046b34c84f8d","components/memory/MemoryScopeBar.jsx":"130c4cbe8833","components/memory/MemoryTimeline.jsx":"4b619bc0e8ab","components/memory/MemoryUsageBar.jsx":"90444b76b37a","components/navigation/AppShell.jsx":"87a170d10720","components/navigation/Breadcrumb.jsx":"c383403d3e56","components/navigation/CommandPalette.jsx":"a7c890578772","components/navigation/FilterBar.jsx":"71dd18237784","components/navigation/GlobalHeader.jsx":"6b28673c28e5","components/navigation/ObjectTree.jsx":"81286028842a","components/navigation/SegmentedControl.jsx":"e91d309d3a8f","components/navigation/SideNav.jsx":"98c62576a989","components/navigation/StatusBar.jsx":"659853140d5e","components/navigation/Tabs.jsx":"7241285ac4cc","components/navigation/WorkspaceSwitcher.jsx":"22ee04da69fb","components/objects/AgentHex.jsx":"c6265b3c233e","components/objects/AgentIsland.jsx":"156dc2b6faa3","components/objects/BondEdge.jsx":"be79bc03e232","components/objects/EntityChip.jsx":"663c05d1ef94","components/objects/GenieCard.jsx":"533d66206fd8","components/objects/HexLattice.jsx":"8537ceef3be7","components/objects/ObjectRow.jsx":"4622e3c808f7","components/objects/PlaybookCluster.jsx":"45ba9a3da286","components/objects/SkillOrb.jsx":"02119f0c065b","components/objects/ToolTile.jsx":"6e0f665f9515","components/patterns/BusinessProcess.jsx":"7a5f6eb4e465","components/patterns/Conversation.jsx":"48f4290ca7d8","components/patterns/GenieBlueprint.jsx":"79e140ba2dc3","components/patterns/IntegrationCard.jsx":"35fd077fbe8c","components/patterns/LearnedPattern.jsx":"b78185ee2421","components/patterns/MobileShell.jsx":"ef4cec47dab5","components/patterns/ObservedProcess.jsx":"ac26151b779e","components/patterns/PermissionMatrix.jsx":"02fee98ef531","components/patterns/PlaybookComposer.jsx":"f13e60998ce5","components/patterns/VoiceButton.jsx":"17f3f0fb72a7","components/runtime/ApprovalCard.jsx":"7fa6f7a21338","components/runtime/EnvironmentBanner.jsx":"2978da634f79","components/runtime/KillSwitch.jsx":"241913ac79c5","components/runtime/LiveActivityIndicator.jsx":"965485edd7c9","components/runtime/ReadinessCheck.jsx":"1aea9f9b4018","components/runtime/RunSummary.jsx":"c3fda9026198","components/runtime/RunTimeline.jsx":"cbfa22f31999","components/runtime/SimulationBar.jsx":"9f436079df88","components/runtime/SimulationStep.jsx":"7ae0bd2ac1dc","ui_kits/lamp-canvas/BuilderApp.jsx":"0921bf677a52","ui_kits/lamp-canvas/data.jsx":"344e3f41aa89","ui_kits/lamp-canvas/InspectorBody.jsx":"acf3dc1938ec","ui_kits/lamp-operations/OpsApp.jsx":"e7c0627e0660"},"inlinedExternals":[],"unexposedExports":[{"name":"brandGlyphs","sourcePath":"components/core/glyphs.js"},{"name":"buildGenie","sourcePath":"components/patterns/GenieBlueprint.jsx"},{"name":"freeCellAt","sourcePath":"components/canvas/SnapField.jsx"},{"name":"freeCells","sourcePath":"components/canvas/SnapField.jsx"},{"name":"glyphs","sourcePath":"components/core/glyphs.js"},{"name":"heatColor","sourcePath":"components/data/Heatmap.jsx"},{"name":"hexCenter","sourcePath":"components/objects/HexLattice.jsx"},{"name":"loadGsap","sourcePath":"components/canvas/CanvasMotion.jsx"},{"name":"matchProcess","sourcePath":"components/patterns/BusinessProcess.jsx"},{"name":"prefersReducedMotion","sourcePath":"components/canvas/CanvasMotion.jsx"},{"name":"registerGlyphs","sourcePath":"components/core/glyphs.js"},{"name":"seriesColor","sourcePath":"components/data/ChartFrame.jsx"},{"name":"setGsap","sourcePath":"components/canvas/CanvasMotion.jsx"},{"name":"useGsap","sourcePath":"components/canvas/CanvasMotion.jsx"},{"name":"useMergedRefs","sourcePath":"components/core/refs.js"}]} */

(() => {

const __ds_ns = (window.LAMPDesignSystem_980d6d = window.LAMPDesignSystem_980d6d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/glyphs.js
try { (() => {
/* GENERATED by tools/vendor-assets.mjs — do not edit.
 *
 * Path data for the vendored icon set. Every Material Symbol is a single
 * <path> on viewBox "0 -960 960 960"; every Simple Icon is a single <path>
 * on "0 0 24 24". Storing only the path keeps the whole set small enough to
 * ship inline, so icons render synchronously with no fetch and no asset
 * base to configure. Re-run `npm run assets` after adding an icon name. */

const ICON_VIEWBOX = '0 -960 960 960';
const BRAND_VIEWBOX = '0 0 24 24';

/* Material Symbols Outlined, weight 400. */
const glyphs = {
  "account_balance": "M212-241v-339h60v339h-60Zm242 0v-339h60v339h-60ZM80-121v-60h800v60H80Zm608-120v-339h60v339h-60ZM80-640v-53l400-228 400 228v53H80Zm134-60h532-532Zm0 0h532L480-852 214-700Z",
  "account_circle": "M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.81-195q-57.81 0-97.31-39.69-39.5-39.68-39.5-97.5 0-57.81 39.69-97.31 39.68-39.5 97.5-39.5 57.81 0 97.31 39.69 39.5 39.68 39.5 97.5 0 57.81-39.69 97.31-39.68 39.5-97.5 39.5Zm.66 370Q398-80 325-111.5t-127.5-86q-54.5-54.5-86-127.27Q80-397.53 80-480.27 80-563 111.5-635.5q31.5-72.5 86-127t127.27-86q72.76-31.5 155.5-31.5 82.73 0 155.23 31.5 72.5 31.5 127 86t86 127.03q31.5 72.53 31.5 155T848.5-325q-31.5 73-86 127.5t-127.03 86Q562.94-80 480.47-80Zm-.47-60q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z",
  "account_tree": "M604-120v-125H450v-410h-93v130H80v-315h277v125h247v-125h276v315H604v-130h-94v350h94v-130h276v315H604ZM140-780v195-195Zm524 405v195-195Zm0-405v195-195Zm0 195h156v-195H664v195Zm0 405h156v-195H664v195ZM140-585h157v-195H140v195Z",
  "add": "M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z",
  "alternate_email": "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v53q0 56-39.34 94.5Q801.31-294 744-294q-36.08 0-68.04-17.5Q644-329 627-361q-26 34-65.08 50.5Q522.83-294 480-294q-77.61 0-132.3-54Q293-402 293-480.01q0-78.02 54.7-133Q402.39-668 480-668q77.6 0 132.3 54.99Q667-558.02 667-480v53q0 30.61 22.5 51.81Q712-354 743.5-354t54-21.19Q820-396.39 820-427v-53q0-142.38-98.81-241.19T480-820q-142.37 0-241.19 98.81Q140-622.38 140-480q0 142.37 98.81 241.19Q337.63-140 480-140h214v60H480Zm.06-274Q533-354 570-390.75T607-480q0-54-37.06-91t-90-37Q427-608 390-571t-37 91q0 52.5 37.06 89.25t90 36.75Z",
  "api": "M480-375 375-480l105-105 105 105-105 105Zm-85-294-83-83 168-168 168 168-83 83-85-85-85 85ZM208-312 40-480l168-168 83 83-85 85 85 85-83 83Zm544 0-83-83 85-85-85-85 83-83 168 168-168 168ZM480-40 312-208l83-83 85 85 85-85 83 83L480-40Z",
  "approval": "M160-80v-260q0-24 18-42t42-18h520q24 0 42 18t18 42v260H160Zm60-160h520v-100H220v100Zm260-160L281-680q0-83 58.21-141.5T480-880q82.58 0 140.79 58.5Q679-763 679-680L480-400Zm0-78 139-202q0-58.33-40.56-99.17Q537.88-820 479.94-820t-98.44 40.83Q341-738.33 341-680l139 202Zm0-171Z",
  "arrow_downward": "M450-800v526L202-522l-42 42 320 320 320-320-42-42-248 248v-526h-60Z",
  "arrow_upward": "M450-160v-526L202-438l-42-42 320-320 320 320-42 42-248-248v526h-60Z",
  "attach_file": "M728-326q0 103-72.18 174.5-72.17 71.5-175 71.5Q378-80 305.5-151.5T233-326v-380q0-72.5 51.5-123.25T408-880q72 0 123.5 50.75T583-706v360q0 42-30 72t-72.5 30q-42.5 0-72.5-29.67-30-29.68-30-72.33v-370h60v370q0 17 12.5 29.5t30.64 12.5q18.14 0 30-12.5T523-346v-360q0-48-33.5-81t-81.71-33q-48.21 0-81.5 33.06T293-706v380q0 78 54.97 132T481-140q77.92 0 132.46-54Q668-248 668-326v-390h60v390Z",
  "autorenew": "M196-331q-20-36-28-72.5t-8-74.5q0-131 94.5-225.5T480-798h43l-80-80 39-39 149 149-149 149-40-40 79-79h-41q-107 0-183.5 76.5T220-478q0 29 5.5 55t13.5 49l-43 43ZM476-40 327-189l149-149 39 39-80 80h45q107 0 183.5-76.5T740-479q0-29-5-55t-15-49l43-43q20 36 28.5 72.5T800-479q0 131-94.5 225.5T480-159h-45l80 80-39 39Z",
  "badge": "M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42.41-18h59.18Q534-880 552-862q18 18 18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H570v30q0 28-18 44t-42.41 16h-59.18Q426-530 408-546q-18-16-18-44v-30H140v480Zm92-107h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q22.5 0 38.25-15.75T408-418q0-22.5-15.75-38.25T354-472q-22.5 0-38.25 15.75T300-418q0 22.5 15.75 38.25T354-364Zm214-63h170v-50H568v50ZM450-590h60v-230h-60v230Zm30 210Z",
  "balance": "M80-120v-60h370v-484q-26-9-46.5-29.5T374-740H215l125 302q-1 45-38.5 76.5T210-330q-54 0-91.5-31.5T80-438l125-302h-85v-60h254q12-35 41-57.5t65-22.5q36 0 65 22.5t41 57.5h254v60h-85l125 302q-1 45-38.5 76.5T750-330q-54 0-91.5-31.5T620-438l125-302H586q-9 26-29.5 46.5T510-664v484h370v60H80Zm595-320h150l-75-184-75 184Zm-540 0h150l-75-184-75 184Zm345-280q21 0 35.5-15t14.5-35q0-21-14.5-35.5T480-820q-20 0-35 14.5T430-770q0 20 15 35t35 15Z",
  "bar_chart": "M660-160v-280h140v280H660Zm-250 0v-640h140v640H410Zm-250 0v-440h140v440H160Z",
  "block": "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-60q61.01 0 117.51-20.5Q654-181 699-220L220-699q-38 46-59 102.17T140-480q0 142.37 98.81 241.19Q337.63-140 480-140Zm259-121q37-45 59-101.49 22-56.5 22-117.51 0-142.38-98.81-241.19T480-820q-60.66 0-116.83 21T261-739l478 478Z",
  "bolt": "m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm154-396Z",
  "box": "M180-674v494h600v-494H640v342l-160-80-160 80v-342H180Zm0 554q-24.75 0-42.37-17.63Q120-155.25 120-180v-529q0-9.88 3-19.06 3-9.18 9-16.94l52-71q8-11 20.94-17.5Q217.88-840 232-840h495q14.12 0 27.06 6.5T775-816l53 71q6 7.76 9 16.94 3 9.18 3 19.06v529q0 24.75-17.62 42.37Q804.75-120 780-120H180Zm17-614h565l-36.41-46H233l-36 46Zm183 60v245l100-50 100 50v-245H380Zm-200 0h600-600Z",
  "call_split": "M452-160v-306L220-698v123h-60v-225h225v60H263l249 249v331h-60Zm113-364-42-42 174-174H575v-60h225v225h-60v-123L565-524Z",
  "cancel": "m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z",
  "category": "m261-526 220-354 220 354H261ZM706-80q-74 0-124-50t-50-124q0-74 50-124t124-50q74 0 124 50t50 124q0 74-50 124T706-80Zm-586-25v-304h304v304H120Zm586.08-35Q754-140 787-173.08q33-33.09 33-81Q820-302 786.92-335q-33.09-33-81-33Q658-368 625-334.92q-33 33.09-33 81Q592-206 625.08-173q33.09 33 81 33ZM180-165h184v-184H180v184Zm189-421h224L481-767 369-586Zm112 0ZM364-349Zm342 95Z",
  "check": "M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z",
  "check_circle": "m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z",
  "chevron_left": "M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z",
  "chevron_right": "M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z",
  "circle": "M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z",
  "close": "m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z",
  "cloud": "M251-160q-88 0-149.5-61.5T40-371q0-78 50-137t127-71q20-97 94-158.5T482-799q112 0 189 81.5T748-522v24q72-2 122 46.5T920-329q0 69-50 119t-119 50H251Zm0-60h500q45 0 77-32t32-77q0-45-32-77t-77-32h-63v-84q0-91-61-154t-149-63q-88 0-149.5 63T267-522h-19q-62 0-105 43.5T100-371q0 63 44 107t107 44Zm229-260Z",
  "cloud_done": "m412-279 230-230-40-40-189 189-100-100-41 41 140 140ZM251-160q-88 0-149.5-61.5T40-371q0-78 50-137t127-71q20-97 94-158.5T482-799q112 0 189 81.5T748-522v24q72-2 122 46.5T920-329q0 69-50 119t-119 50H251Zm0-60h500q45 0 77-32t32-77q0-45-32-77t-77-32h-63v-84q0-91-61-154t-149-63q-88 0-149.5 63T267-522h-19q-62 0-105 43.5T100-371q0 63 44 107t107 44Zm229-260Z",
  "content_copy": "M300-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560ZM180-80q-24 0-42-18t-18-42v-620h60v620h500v60H180Zm120-180v-560 560Z",
  "content_paste": "M180-120q-26 0-43-17t-17-43v-600q0-26 17-43t43-17h202q7-35 34.5-57.5T480-920q36 0 63.5 22.5T578-840h202q26 0 43 17t17 43v600q0 26-17 43t-43 17H180Zm0-60h600v-600h-60v90H240v-90h-60v600Zm300-600q17 0 28.5-11.5T520-820q0-17-11.5-28.5T480-860q-17 0-28.5 11.5T440-820q0 17 11.5 28.5T480-780Z",
  "dangerous": "M330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm27-195 123-123 123 123 42-42-123-123 123-123-42-42-123 123-123-123-42 42 123 123-123 123 42 42Zm-2 135h250l175-175v-250L605-780H355L180-605v250l175 175Zm125-300Z",
  "data_object": "M570-160v-60h120q21 0 35.5-14.38Q740-248.75 740-270v-100q0-37 22.5-66t57.5-40v-8q-35-10-57.5-39.5T740-590v-100q0-21.25-14.37-35.63Q711.25-740 690-740H570v-60h120q46 0 78 32.08 32 32.09 32 77.92v100q0 21.25 14.38 35.62Q828.75-540 850-540h30v120h-30q-21.25 0-35.62 14.37Q800-391.25 800-370v100q0 45.83-32.08 77.92Q735.83-160 690-160H570Zm-300 0q-46 0-78-32.08-32-32.09-32-77.92v-100q0-21.25-14.37-35.63Q131.25-420 110-420H80v-120h30q21.25 0 35.63-14.38Q160-568.75 160-590v-100q0-45.83 32.08-77.92Q224.17-800 270-800h120v60H270q-21 0-35.5 14.37Q220-711.25 220-690v100q0 37-22.5 66.5T140-484v8q35 11 57.5 40t22.5 66v100q0 21.25 14.38 35.62Q248.75-220 270-220h120v60H270Z",
  "database": "M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-488q86 0 176.5-26.5T773-694q-27-32-117.5-59T480-780q-88 0-177 26t-117 60q28 35 116 60.5T480-608Zm-1 214q42 0 84-4.5t80.5-13.5q38.5-9 73.5-22t63-29v-155q-29 16-64 29t-74 22q-39 9-80 14t-83 5q-42 0-84-5t-80.5-14q-38.5-9-73-22T180-618v155q27 16 61 29t72.5 22q38.5 9 80.5 13.5t85 4.5Zm1 214q48 0 99-8.5t93.5-22.5q42.5-14 72-31t35.5-35v-125q-28 16-63 28.5T643.5-352q-38.5 9-80 13.5T479-334q-43 0-85-4.5T313.5-352q-38.5-9-72.5-21.5T180-402v126q5 17 34 34.5t72 31q43 13.5 94 22t100 8.5Z",
  "dataset": "M290-290h140v-140H290v140Zm240 0h140v-140H530v140ZM290-530h140v-140H290v140Zm240 0h140v-140H530v140ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z",
  "delete": "M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z",
  "description": "M319-250h322v-60H319v60Zm0-170h322v-60H319v60ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554v-186H220v680h520v-494H551ZM220-820v186-186 680-680Z",
  "diamond": "M480-120 80-600l120-240h560l120 240-400 480ZM368-630h224l-75-150h-74l-75 150Zm82 381v-321H183l267 321Zm60 0 267-321H510v321Zm149-381h136l-75-150H584l75 150Zm-494 0h136l75-150H240l-75 150Z",
  "dns": "M286.88-717q-20.88 0-35.38 14.62-14.5 14.62-14.5 35.5 0 20.88 14.62 35.38 14.62 14.5 35.5 14.5 20.88 0 35.38-14.62 14.5-14.62 14.5-35.5 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5Zm0 414q-20.88 0-35.38 14.62-14.5 14.62-14.5 35.5 0 20.88 14.62 35.38 14.62 14.5 35.5 14.5 20.88 0 35.38-14.62 14.5-14.62 14.5-35.5 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5ZM154-839h651q16 0 25.5 9.5t9.5 25.81V-535q0 17.42-9.5 29.21T805-494H154q-15 0-24.5-11.79T120-535v-268.69q0-16.31 9.5-25.81T154-839Zm26 60v225h600v-225H180Zm-26 353h647q15 0 27 12.5t12 28.53V-121q0 20-12 30.5T801-80H159q-16 0-27.5-10.5T120-121v-263.97q0-16.03 9.5-28.53T154-426Zm26 60v226h600v-226H180Zm0-413v225-225Zm0 413v226-226Z",
  "do_not_disturb_on": "M280-453h400v-60H280v60ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z",
  "download": "M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z",
  "draft": "M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554v-186H220v680h520v-494H551ZM220-820v186-186 680-680Z",
  "drag_indicator": "M349.91-160q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5Zm260 0q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5Zm-260-250q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5Zm260 0q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5Zm-260-250q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5Zm260 0q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5Z",
  "edit": "M180-180h44l472-471-44-44-472 471v44Zm-60 60v-128l575-574q8-8 19-12.5t23-4.5q11 0 22 4.5t20 12.5l44 44q9 9 13 20t4 22q0 11-4.5 22.5T823-694L248-120H120Zm659-617-41-41 41 41Zm-105 64-22-22 44 44-22-22Z",
  "edit_note": "M160-410v-60h300v60H160Zm0-165v-60h470v60H160Zm0-165v-60h470v60H160Zm360 580v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22q0 11-4.5 22.5T862.09-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z",
  "error": "M479.98-280q14.02 0 23.52-9.48t9.5-23.5q0-14.02-9.48-23.52t-23.5-9.5q-14.02 0-23.52 9.48t-9.5 23.5q0 14.02 9.48 23.52t23.5 9.5ZM453-433h60v-253h-60v253Zm27.27 353q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z",
  "event": "M596.82-220Q556-220 528-248.18q-28-28.19-28-69Q500-358 528.18-386q28.19-28 69-28Q638-414 666-385.82q28 28.19 28 69Q694-276 665.82-248q-28.19 28-69 28ZM180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Z",
  "extension": "M356-120H180q-24 0-42-18t-18-42v-176q44-5 75.5-34.5T227-463q0-43-31.5-72.5T120-570v-176q0-24 18-42t42-18h177q11-40 39.5-67t68.5-27q40 0 68.5 27t39.5 67h173q24 0 42 18t18 42v173q40 11 65.5 41.5T897-461q0 40-25.5 67T806-356v176q0 24-18 42t-42 18H570q-5-48-35.5-77.5T463-227q-41 0-71.5 29.5T356-120Zm-176-60h130q25-61 69.89-84t83-23Q501-287 546-264t70 84h130v-235h45q20 0 33-13t13-33q0-20-13-33t-33-13h-45v-239H511v-48q0-20-13-33t-33-13q-20 0-33 13t-13 33v48H180v130q48.15 17.82 77.58 59.69Q287-514.45 287-462.78 287-412 257.5-370T180-310v130Zm285-281Z",
  "fact_check": "M132-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h696q24 0 42 18t18 42v600q0 24-18 42t-42 18H132Zm0-60h696v-600H132v600Zm68-100h200v-80H200v80Zm382-80 198-198-57-57-141 142-57-57-56 57 113 113Zm-382-80h200v-80H200v80Zm0-160h200v-80H200v80Zm-68 420v-600 600Z",
  "filter_list": "M400-240v-60h160v60H400ZM240-450v-60h480v60H240ZM120-660v-60h720v60H120Z",
  "finance": "M180-120q-24 0-42-18t-18-42v-660h60v660h660v60H180Zm75-135v-334h119v334H255Zm198 0v-540h119v540H453Zm194 0v-170h119v170H647Z",
  "fit_screen": "M820-610v-130H690v-60h130q24 0 42 18t18 42v130h-60Zm-740 0v-130q0-24 18-42t42-18h130v60H140v130H80Zm610 450v-60h130v-130h60v130q0 24-18 42t-42 18H690Zm-550 0q-24 0-42-18t-18-42v-130h60v130h130v60H140Zm60-120v-400h560v400H200Zm60-60h440v-280H260v280Zm0 0v-280 280Z",
  "flare": "M40-450v-60h232v60H40Zm271-157-80-80 42-42 80 80-42 42Zm139-81v-232h60v232h-60Zm199 81-42-42 80-80 42 42-80 80Zm39 157v-60h232v60H688Zm-208 72q-42.5 0-72.25-29.75T378-480q0-42.5 29.75-72.25T480-582q42.5 0 72.25 29.75T582-480q0 42.5-29.75 72.25T480-378Zm212 152-85-85 42-42 85 85-42 42Zm-424 0-42-42 85-85 42 42-85 85ZM450-40v-232h60v232h-60Z",
  "folder": "M140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v460q0 23-18.5 41.5T820-160H140Zm0-60h680v-460H456l-60-60H140v520Zm0 0v-520 520Z",
  "folder_open": "M140-160q-23 0-41.5-18.5T80-220v-520q0-23 18.5-41.5T140-800h281l60 60h339q23 0 41.5 18.5T880-680H455l-60-60H140v520l102-400h698L833-206q-6 24-22 35t-41 11H140Zm63-60h572l84-340H287l-84 340Zm0 0 84-340-84 340Zm-63-460v-60 60Z",
  "forum": "M880-81 721-240H300q-24.75 0-42.37-17.63Q240-275.25 240-300v-80h440q24.75 0 42.38-17.63Q740-415.25 740-440v-280h80q24.75 0 42.38 17.62Q880-684.75 880-660v579ZM140-425l75-75h405v-320H140v395ZM80-280v-540q0-24.75 17.63-42.38Q115.25-880 140-880h480q24.75 0 42.38 17.62Q680-844.75 680-820v320q0 24.75-17.62 42.37Q644.75-440 620-440H240L80-280Zm60-220v-320 320Z",
  "function": "M402-240v-60h59l121-139-121-141h-74l-71 366q-8 45-34 69.5T215-120q-41 0-68.5-24T119-204q0-27 15-43.5t39-16.5q21 0 34.5 12t13.5 32q0 11-4.5 20.5T204-184q4 2 8.5 3t9.5 1q13 0 22-12.5t13-32.5l69-355H200v-60h137l21-106q9-45 36-69.5t67-24.5q41 0 67.5 24t26.5 60q0 27-15 43.5T501-696q-20 0-34-11.5T453-738q0-10 4-19.5t10-15.5q-2-2-6-3.5t-8-1.5q-13 0-22.5 12T417-735l-18 95h189v60h-47l83 96 78-96h-48v-60h186v60h-58L662-439l120 139h58v60H654v-60h48l-80-93-82 93h48v60H402Z",
  "gavel": "M160-120v-60h480v60H160Zm222-212L160-554l70-72 224 222-72 72Zm254-254L414-810l72-70 222 222-72 72Zm202 426L302-696l42-42 536 536-42 42Z",
  "grid_view": "M120-510v-330h330v330H120Zm0 390v-330h330v330H120Zm390-390v-330h330v330H510Zm0 390v-330h330v330H510ZM180-570h210v-210H180v210Zm390 0h210v-210H570v210Zm0 390h210v-210H570v210Zm-390 0h210v-210H180v210Zm390-390Zm0 180Zm-180 0Zm0-180Z",
  "group": "M38-160v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358-420q62 0 120 14t131 46q32 14 50.5 42.5T678-254v94H38Zm700 0v-94q0-63-32-103.5T622-423q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519-488q24-25 36.5-61.5T568-631q0-45-12.5-79.5T519-774q11-3 24.5-5t24.5-2q66 0 108 42t42 108ZM98-220h520v-34q0-16-9.5-31T585-306q-72-32-121-43t-106-11q-57 0-106.5 11T130-306q-14 6-23 21t-9 31v34Zm260-321q39 0 64.5-25.5T448-631q0-39-25.5-64.5T358-721q-39 0-64.5 25.5T268-631q0 39 25.5 64.5T358-541Zm0 321Zm0-411Z",
  "groups": "M0-240v-53q0-38.57 41.5-62.78Q83-380 150.38-380q12.16 0 23.39.5t22.23 2.15q-8 17.35-12 35.17-4 17.81-4 37.18v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.86-3.5-37.43T765-377.27q11-1.73 22.17-2.23 11.17-.5 22.83-.5 67.5 0 108.75 23.77T960-293v53H780Zm-480-60h360v-6q0-37-50.5-60.5T480-390q-79 0-129.5 23.5T300-305v5ZM149.57-410q-28.57 0-49.07-20.56Q80-451.13 80-480q0-29 20.56-49.5Q121.13-550 150-550q29 0 49.5 20.5t20.5 49.93q0 28.57-20.5 49.07T149.57-410Zm660 0q-28.57 0-49.07-20.56Q740-451.13 740-480q0-29 20.56-49.5Q781.13-550 810-550q29 0 49.5 20.5t20.5 49.93q0 28.57-20.5 49.07T809.57-410ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.35-60Q506-540 523-557.35t17-43Q540-626 522.85-643t-42.5-17q-25.35 0-42.85 17.15t-17.5 42.5q0 25.35 17.35 42.85t43 17.5ZM480-300Zm0-300Z",
  "handshake": "M475-140q5 0 11.5-2.5T497-149l337-338q13-13 19.5-29.67Q860-533.33 860-550q0-17-6.5-34T834-614L654-794q-13-13-30-19.5t-34-6.5q-16.67 0-33.33 6.5Q540-807 527-794l-18 18 81 82q13 14 23 32.5t10 40.5q0 38-29.5 67T526-525q-25 0-41.5-7.5t-30.19-21.34L381-627 200-446q-5 5-7 10.53-2 5.52-2 11.84 0 12.63 8.5 21.13 8.5 8.5 21.17 8.5 6.33 0 11.83-3t9.5-7l138-138 42 42-137 137q-5 5-7 11t-2 12q0 12 9 21t21 9q6 0 11.5-2.5t9.5-6.5l138-138 42 42-137 137q-4 4-6.5 10.33-2.5 6.34-2.5 12.67 0 12 9 21t21 9q6 0 11-2t10-7l138-138 42 42-138 138q-5 5-7 11t-2 11q0 14 8 22t22 8Zm.06 60Q442-80 416-104.5t-31-60.62Q351-170 328-193t-28-57q-34-5-56.5-28.5T216-335q-37-5-61-30t-24-60q0-17 6.72-34.05Q144.45-476.1 157-489l224-224 110 110q8 8 17.33 12.5 9.34 4.5 18.67 4.5 13 0 24.5-11.5t11.5-24.65q0-5.85-3.5-13.35T548-651L405-794q-13-13-30-19.5t-34-6.5q-16.67 0-33.33 6.5-16.67 6.5-29.61 19.36L126-642q-14 14-19.5 29.5t-6.5 35q-1 19.5 7.5 38T128-506l-43 43q-20-22-32.5-53T40-579q0-30 11.5-57.5T84-685l151-151q22-22 49.79-32.5 27.8-10.5 57-10.5 29.21 0 56.71 10.5T448-836l18 18 18-18q22-22 49.79-32.5 27.8-10.5 57-10.5 29.21 0 56.71 10.5T697-836l179 179q22 22 33 50.03 11 28.04 11 57 0 28.97-11 56.47T876-444L539-107q-13 13-29.53 20t-34.41 7ZM377-626Z",
  "handyman": "M764-80q-6 0-11-2t-10-7L501-331q-5-5-7-10t-2-11q0-6 2-11t7-10l85-85q5-5 10-7t11-2q6 0 11 2t10 7l242 242q5 5 7 10t2 11q0 6-2 11t-7 10l-85 85q-5 5-10 7t-11 2Zm0-72 43-43-200-200-43 43 200 200ZM195-80q-6 0-11.5-2T173-89l-84-84q-5-5-7-10.5T80-195q0-6 2-11t7-10l225-225h85l38-38-175-175h-57L80-779l99-99 125 125v57l175 175 130-130-67-67 56-56H485l-18-18 128-128 18 18v113l56-56 169 169q15 15 23.5 34.5T870-600q0 20-6.5 38.5T845-528l-85-85-56 56-52-52-211 211v84L216-89q-5 5-10 7t-11 2Zm0-72 200-200v-43h-43L152-195l43 43Zm0 0-43-43 22 21 21 22Zm569 0 43-43-43 43Z",
  "help": "M484-247q16 0 27-11t11-27q0-16-11-27t-27-11q-16 0-27 11t-11 27q0 16 11 27t27 11Zm-35-146h59q0-26 6.5-47.5T555-490q31-26 44-51t13-55q0-53-34.5-85T486-713q-49 0-86.5 24.5T345-621l53 20q11-28 33-43.5t52-15.5q34 0 55 18.5t21 47.5q0 22-13 41.5T508-512q-30 26-44.5 51.5T449-393Zm31 313q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z",
  "hexagon": "M272-120 64-480l208-360h416l208 360-208 360H272Zm34-60h348l172-300-172-300H306L133-480l173 300Zm174-300Z",
  "history": "M477-120q-149 0-253-105.5T120-481h60q0 125 86 213t211 88q127 0 215-89t88-216q0-124-89-209.5T477-780q-68 0-127.5 31T246-667h105v60H142v-208h60v106q52-61 123.5-96T477-840q75 0 141 28t115.5 76.5Q783-687 811.5-622T840-482q0 75-28.5 141t-78 115Q684-177 618-148.5T477-120Zm128-197L451-469v-214h60v189l137 134-43 43Z",
  "hive": "m394-80-70-123H189l-87-154 69-123-69-123 87-154h135l70-123h172l70 123h135l87 154-69 123 69 123-87 154H636L566-80H394Zm243-429h100l54-94-54-94H637l-54 94 54 94ZM430-388h100l54-92-54-92H430l-54 92 54 92Zm0-244h100l54-94-54-94H430l-54 94 54 94ZM224-509h100l54-94-54-94H224l-54 94 54 94Zm0 246h100l54-94-55-94H223l-54 94 55 94Zm206 123h100l54-94-54-94H430l-54 94 54 94Zm207-123h100l54-94-54-94H637l-51 94 51 94Z",
  "hourglass_top": "M308-140h344v-127q0-72-50-121.5T480-438q-72 0-122 49.5T308-267v127ZM160-80v-60h88v-127q0-71 40-129t106-84q-66-27-106-85t-40-129v-126h-88v-60h640v60h-88v126q0 71-40 129t-106 85q66 26 106 84t40 129v127h88v60H160Z",
  "how_to_reg": "M80-160v-94q0-34 17-62.5t51-43.5q72-32 132-46t120-14q29 0 61.5 3.5T528-404l-49 49q-20-2-39.5-3.5T400-360q-58 0-105.5 10.5T172-306q-17 8-24.5 23t-7.5 29v34h319l60 60H80Zm545 16L484-285l42-42 99 99 213-213 42 42-255 255ZM400-482q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm59 262Zm-59-322q39 0 64.5-25.5T490-632q0-39-25.5-64.5T400-722q-39 0-64.5 25.5T310-632q0 39 25.5 64.5T400-542Zm0-90Z",
  "inbox": "M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-136H634q-26 40-67.5 61.5T480-233q-45 0-86.5-21.5T326-316H180v136Zm300.25-113Q521-293 554-316.5t56-59.5h170v-404H180v404h170q23 36 56.25 59.5 33.24 23.5 74 23.5ZM180-180h600-600Z",
  "info": "M453-280h60v-240h-60v240Zm26.98-314q14.02 0 23.52-9.2T513-626q0-14.45-9.48-24.22-9.48-9.78-23.5-9.78t-23.52 9.78Q447-640.45 447-626q0 13.6 9.48 22.8 9.48 9.2 23.5 9.2Zm.29 514q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z",
  "inventory_2": "M180-80q-24.75 0-42.37-17.63Q120-115.25 120-140v-483q-17-6-28.5-21.39T80-680v-140q0-24.75 17.63-42.38Q115.25-880 140-880h680q24.75 0 42.38 17.62Q880-844.75 880-820v140q0 20.22-11.5 35.61T840-623v483q0 24.75-17.62 42.37Q804.75-80 780-80H180Zm0-540v480h600v-480H180Zm-40-60h680v-140H140v140Zm220 260h240v-60H360v60Zm120 40Z",
  "keyboard_arrow_down": "M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z",
  "label": "M140-160q-24.75 0-42.37-17.63Q80-195.25 80-220v-520q0-24.75 17.63-42.38Q115.25-800 140-800h471q14.25 0 27 6.37 12.75 6.38 21 17.63l222 296-221 296q-8.25 11.25-21 17.62-12.75 6.38-27 6.38H140Zm0-60h471l195-260-195-260H140v520Zm236-260Z",
  "layers": "M480-130 120-410l50-37 310 241 310-241 50 37-360 280Zm0-152L120-562l360-280 360 280-360 280Zm0-301Zm0 225 262-204-262-204-262 204 262 204Z",
  "light": "M480-120q-63 0-106.5-43.5T330-270H180q-24 0-42-18t-18-42q0-152 93.5-258T450-705v-135h60v135q143 11 236.5 117T840-330q0 24-18 42t-42 18H630q0 63-43.5 106.5T480-120ZM180-330h600q0-132-87.5-223.5T480-645q-125 0-212.5 91.5T180-330Zm300 150q38 0 64-26t26-64H390q0 38 26 64t64 26Zm0-90Z",
  "lightbulb": "M480-80q-34 0-57.5-23.5T399-161h162q0 34-23.5 57.5T480-80ZM318-223v-60h324v60H318Zm5-121q-66-43-104.5-107.5T180-597q0-122 89-211t211-89q122 0 211 89t89 211q0 81-38 145.5T637-344H323Zm22-60h271q48-32 76-83t28-110q0-99-70.5-169.5T480-837q-99 0-169.5 70.5T240-597q0 59 28 110t77 83Zm135 0Z",
  "link": "M450-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h170v60H280q-58.33 0-99.17 40.76-40.83 40.77-40.83 99Q140-422 180.83-381q40.84 41 99.17 41h170v60ZM325-450v-60h310v60H325Zm185 170v-60h170q58.33 0 99.17-40.76 40.83-40.77 40.83-99Q820-538 779.17-579q-40.84-41-99.17-41H510v-60h170q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H510Z",
  "link_off": "m750-291-49-49q51-10 85-48t34-89q0-58-41-99t-99-41H525v-60h155q83 0 141.5 58.5T880-477q0 62-36 112t-94 74ZM594-447l-60-60h101v60h-41ZM814-56 63-807l43-43L857-99l-43 43ZM450-280H280q-83 0-141.5-58.5T80-480q0-72 44.5-127T238-676l56 56h-14q-58 0-99 41t-41 99q0 58 41 99t99 41h170v60ZM325-450v-60h79l60 60H325Z",
  "list": "M290-620v-60h550v60H290Zm0 170v-60h550v60H290Zm0 170v-60h550v60H290ZM150-620q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.62 8.5 8.63 8.5 21.38 0 12-8.62 21-8.63 9-21.38 9Zm0 170q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.62 8.5 8.63 8.5 21.38 0 12-8.62 21-8.63 9-21.38 9Zm0 170q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.62 8.5 8.63 8.5 21.38 0 12-8.62 21-8.63 9-21.38 9Z",
  "local_shipping": "M224.12-161q-49.12 0-83.62-34.42Q106-229.83 106-279H40v-461q0-24 18-42t42-18h579v167h105l136 181v173h-71q0 49.17-34.38 83.58Q780.24-161 731.12-161t-83.62-34.42Q613-229.83 613-279H342q0 49-34.38 83.5t-83.5 34.5Zm-.12-60q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17ZM100-339h22q17-27 43.04-43t58-16q31.96 0 58.46 16.5T325-339h294v-401H100v401Zm631 118q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17Zm-52-204h186L754-573h-75v148ZM360-529Z",
  "lock": "M220-80q-24.75 0-42.37-17.63Q160-115.25 160-140v-434q0-24.75 17.63-42.38Q195.25-634 220-634h70v-96q0-78.85 55.61-134.42Q401.21-920 480.11-920q78.89 0 134.39 55.58Q670-808.85 670-730v96h70q24.75 0 42.38 17.62Q800-598.75 800-574v434q0 24.75-17.62 42.37Q764.75-80 740-80H220Zm0-60h520v-434H220v434Zm260.17-140q31.83 0 54.33-22.03T557-355q0-30-22.67-54.5t-54.5-24.5q-31.83 0-54.33 24.5t-22.5 55q0 30.5 22.67 52.5t54.5 22ZM350-634h260v-96q0-54.17-37.88-92.08-37.88-37.92-92-37.92T388-822.08q-38 37.91-38 92.08v96ZM220-140v-434 434Z",
  "maximize": "M160-780v-60h640v60H160Z",
  "memory": "M377-377v-205h205v205H377Zm60-60h85v-85h-85v85Zm-77 317v-80H260q-24 0-42-18t-18-42v-100h-80v-60h80v-124h-80v-60h80v-100q0-24 18-42t42-18h100v-76h60v76h124v-76h60v76h100q24 0 42 18t18 42v100h76v60h-76v124h76v60h-76v100q0 24-18 42t-42 18H604v80h-60v-80H420v80h-60Zm344-140v-444H260v444h444ZM480-480Z",
  "menu": "M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z",
  "mic": "M480-423q-43 0-72-30.92-29-30.91-29-75.08v-251q0-41.67 29.44-70.83Q437.88-880 479.94-880t71.56 29.17Q581-821.67 581-780v251q0 44.17-29 75.08Q523-423 480-423Zm0-228Zm-30 531v-136q-106-11-178-89t-72-184h60q0 91 64.29 153t155.5 62q91.21 0 155.71-62Q700-438 700-529h60q0 106-72 184t-178 89v136h-60Zm30-363q18 0 29.5-13.5T521-529v-251q0-17-11.79-28.5T480-820q-17.42 0-29.21 11.5T439-780v251q0 19 11.5 32.5T480-483Z",
  "monitor": "M260-120v-73l47-47H140q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h680q24 0 42 18t18 42v480q0 24-18 42t-42 18H652l48 47v73H260ZM140-300h680v-480H140v480Zm0 0v-480 480Z",
  "more_horiz": "M207.86-432Q188-432 174-446.14t-14-34Q160-500 174.14-514t34-14Q228-528 242-513.86t14 34Q256-460 241.86-446t-34 14Zm272 0Q460-432 446-446.14t-14-34Q432-500 446.14-514t34-14Q500-528 514-513.86t14 34Q528-460 513.86-446t-34 14Zm272 0Q732-432 718-446.14t-14-34Q704-500 718.14-514t34-14Q772-528 786-513.86t14 34Q800-460 785.86-446t-34 14Z",
  "near_me": "M527-120 413-413 120-527v-43l720-270-270 720h-43Zm18-114 192-503-502 192 224 86 86 225Zm-86-225Z",
  "notifications": "M160-200v-60h80v-304q0-84 49.5-150.5T420-798v-22q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v22q81 17 130.5 83.5T720-564v304h80v60H160Zm320-302Zm0 422q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM300-260h360v-304q0-75-52.5-127.5T480-744q-75 0-127.5 52.5T300-564v304Z",
  "open_in_new": "M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z",
  "overview": "m800-134 28-28-75-75v-112h-40v128l87 87Zm-620 14q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v329q-14-8-29.5-13t-30.5-8v-308H180v600h309q4 16 9.02 31.17Q503.05-133.66 510-120H180Zm0-107v47-600 308-4 249Zm100-53h211q4-16 9-31t13-29H280v60Zm0-170h344q14-7 27-11.5t29-8.5v-40H280v60Zm0-170h400v-60H280v60ZM732.5-41Q655-41 600-96.5T545-228q0-78.43 54.99-133.72Q654.98-417 733-417q77 0 132.5 55.28Q921-306.43 921-228q0 76-55.5 131.5T732.5-41Z",
  "pan_tool": "M402-40q-27 0-51.5-12.5T311-88L54-468l20-16q17-15 39.5-19t44.57 13.19L280-397v-413q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v528L166-410l195 288q7 11 17.5 16.5T402-100h288q38 0 64-26t26-64v-580q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v580q0 63-43.5 106.5T690-40H402Zm45-440v-410q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v410h-60Zm167 0v-370q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v370h-60ZM473-290Z",
  "pause": "M525-200v-560h235v560H525Zm-325 0v-560h235v560H200Zm385-60h115v-440H585v440Zm-325 0h115v-440H260v440Zm0-440v440-440Zm325 0v440-440Z",
  "pending": "M266.12-430q20.88 0 35.38-14.62 14.5-14.62 14.5-35.5 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5-20.88 0-35.38 14.62-14.5 14.62-14.5 35.5 0 20.88 14.62 35.38 14.62 14.5 35.5 14.5Zm214 0q20.88 0 35.38-14.62 14.5-14.62 14.5-35.5 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5-20.88 0-35.38 14.62-14.5 14.62-14.5 35.5 0 20.88 14.62 35.38 14.62 14.5 35.5 14.5Zm213 0q20.88 0 35.38-14.62 14.5-14.62 14.5-35.5 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5-20.88 0-35.38 14.62-14.5 14.62-14.5 35.5 0 20.88 14.62 35.38 14.62 14.5 35.5 14.5ZM480.27-80q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z",
  "person": "M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.92 44.69q31.3 14.13 50.19 40.97Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z",
  "pill": "M345-120q-94 0-159.5-65.5T120-345q0-45 17-86t49-73l270-270q32-32 73-49t86-17q94 0 159.5 65.5T840-615q0 45-17 86t-49 73L504-186q-32 32-73 49t-86 17Zm273-265 114-113q23-23 35.5-53.5T780-615q0-69-48-117t-117-48q-33 0-63.5 12.5T498-732L385-618l233 233ZM345-180q32 0 63-12.5t54-35.5l113-114-233-233-114 113q-23 23-35.5 53.5T180-345q0 69 48 117t117 48Z",
  "play_arrow": "M320-203v-560l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z",
  "policy": "M480-80q-140-35-230-162.5T160-522v-238l320-120 320 120v238q0 78-21.5 154.5T703-225L563-359q-19 11-40.16 18-21.16 7-42.84 7-62 0-105.5-43T331-482.5q0-62.5 43.5-106T480-632q62 0 105.5 43.5T629-482q0 21-6 42t-19 38l88 84q24-43 36-96.5T740-522v-198.48L480-815l-260 94.52V-522q0 131 72.5 236.5T480.2-142q28.8-8 70.3-33t65.5-48l42 43q-35 32-83.5 60.5T480-80Zm.2-314q36.8 0 62.8-25.5t26-63q0-37.5-26.2-63.5-26.21-26-63-26-36.8 0-62.8 26t-26 63.5q0 37.5 26.2 63 26.21 25.5 63 25.5Zm-1.2-90Z",
  "preview": "M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v600q0 24.75-17.62 42.37Q804.75-120 780-120H180Zm0-60h600v-520H180v520Zm300.04-105Q400-285 337-328.15q-63-43.15-92-112Q274-509 336.96-552q62.96-43 143-43Q560-595 623-551.85q63 43.15 92 112Q686-371 623.04-328q-62.96 43-143 43Zm-.04-50q57 0 104.95-27.83Q632.9-390.65 660-440q-27.1-49.35-75.05-77.17Q537-545 480-545t-104.95 27.83Q327.1-489.35 300-440q27.1 49.35 75.05 77.17Q423-335 480-335Zm0-105Zm.12 50q20.88 0 35.38-14.62 14.5-14.62 14.5-35.5 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5-20.88 0-35.38 14.62-14.5 14.62-14.5 35.5 0 20.88 14.62 35.38 14.62 14.5 35.5 14.5Z",
  "progress_activity": "M480-80q-84 0-157-31t-127-85q-54-54-85-127T80-480q0-84 31-157t85-127q54-54 127-85t157-31q12 0 21 9t9 21q0 12-9 21t-21 9q-141 0-240.5 99.5T140-480q0 141 99.5 240.5T480-140q141 0 240.5-99.5T820-480q0-12 9-21t21-9q12 0 21 9t9 21q0 84-31 157t-85 127q-54 54-127 85T480-80Z",
  "psychology": "M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l55 218q4 14-5 25.5T853-360h-93v140q0 24.75-17.62 42.37Q724.75-160 700-160H600v80h-60v-140h160v-200h114l-45-180q-24-97-105-158.5T480-820q-125 0-212.5 86.5T180-522.46q0 64.42 26.32 122.39Q232.65-342.09 281-297l19 18v199h-60Zm257-370Zm-48 76h60l3-44q12-2 22.47-8.46Q544.94-432.92 553-441l42 14 28-48-30-24q5-14 5-29t-5-29l30-24-28-48-42 14q-8.33-7.69-19.17-13.85Q523-635 512-638l-3-44h-60l-3 44q-11 3-21.83 9.15Q413.33-622.69 405-615l-42-14-28 48 30 24q-5 14-5 29t5 29l-30 24 28 48 42-14q8.06 8.08 18.53 14.54Q434-420 446-418l3 44Zm30.12-84q-29.12 0-49.62-20.38-20.5-20.38-20.5-49.5t20.38-49.62q20.38-20.5 49.5-20.5t49.62 20.38q20.5 20.38 20.5 49.5t-20.38 49.62q-20.38 20.5-49.5 20.5Z",
  "radio": "M140-80q-24 0-42-18t-18-42v-511q0-22 15-38.5t35-24.5l496-200 19 50-359 144h534q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-310H140v310Zm179.18-63Q360-203 388-231.18q28-28.19 28-69Q416-341 387.82-369q-28.19-28-69-28Q278-397 250-368.82q-28 28.19-28 69Q222-259 250.18-231q28.19 28 69 28ZM140-510h520v-60h60v60h100v-150H140v150Zm0 370v-310 310Z",
  "radio_button_unchecked": "M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z",
  "receipt": "M120-81v-798l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v798l-60-60-60 60-60-60-60 60-60-60-60 60-60-59.85L360-81l-60-59.85L240-81l-60-59.85L120-81Zm117-215h490v-60H237v60Zm0-154h490v-60H237v60Zm0-155h490v-60H237v60Zm-57 423h600v-596H180v596Zm0-596v596-596Z",
  "receipt_long": "M222-80q-43.75 0-74.37-30.63Q117-141.25 117-185v-125h127v-570l59.8 60 59.8-60 59.8 60 59.8-60 59.8 60 60-60 60 60 60-60 60 60 60-60v695q0 43.75-30.62 74.37Q781.75-80 738-80H222Zm516-60q20 0 32.5-12.5T783-185v-595H304v470h389v125q0 20 12.5 32.5T738-140ZM357-622v-60h240v60H357Zm0 134v-60h240v60H357Zm333-134q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9Zm0 129q-12 0-21-9t-9-21q0-12 9-21t21-9q12 0 21 9t9 21q0 12-9 21t-21 9ZM221-140h412v-110H177v65q0 20 12.65 32.5T221-140Zm-44 0v-110 110Z",
  "refresh": "M480-160q-133 0-226.5-93.5T160-480q0-133 93.5-226.5T480-800q85 0 149 34.5T740-671v-129h60v254H546v-60h168q-38-60-97-97t-137-37q-109 0-184.5 75.5T220-480q0 109 75.5 184.5T480-220q83 0 152-47.5T728-393h62q-29 105-115 169t-195 64Z",
  "remove": "M200-450v-60h560v60H200Z",
  "replay": "M480-80q-75 0-140.5-28T225-185q-49-49-77-114.5T120-440h60q0 125 87.5 212.5T480-140q125 0 212.5-87.5T780-440q0-125-85-212.5T485-740h-23l73 73-41 42-147-147 147-147 41 41-78 78h23q75 0 140.5 28T735-695q49 49 77 114.5T840-440q0 75-28 140.5T735-185q-49 49-114.5 77T480-80Z",
  "report": "M480-281q14 0 24.5-10.5T515-316q0-14-10.5-24.5T480-351q-14 0-24.5 10.5T445-316q0 14 10.5 24.5T480-281Zm-30-144h60v-263h-60v263ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm25-60h250l175-175v-250L605-780H355L180-605v250l175 175Zm125-300Z",
  "resume": "M240-240v-480h60v480h-60Zm174 0 385-240-385-240v480Zm60-115v-250l201 125-201 125Zm0-125Z",
  "right_panel_open": "M433-344v-272L297-480l136 136ZM180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v600q0 24.75-17.62 42.37Q804.75-120 780-120H180Zm453-60h147v-600H633v600Zm-60 0v-600H180v600h393Zm60 0h147-147Z",
  "room_service": "M80-200v-60h800v60H80Zm30-120v-17q0-155 88.5-250T420-710v-30q0-26 17-43t43-17q26 0 43 17t17 43v30q133 28 221.5 123T850-337v17H110Zm63-60h614q-14-128-102.5-200.5T479-653q-117 0-204.5 72.5T173-380Zm307 0Z",
  "route": "M355-120q-65 0-110-45.53T200-275v-349q-35-13-57.5-41.26-22.5-28.27-22.5-64.41Q120-776 152.5-808t78-32q45.5 0 77.5 32.14t32 78.05q0 35.81-22.5 64.31T260-624v349q0 39.19 27.5 67.09Q315-180 355.5-180t67.5-27.91q27-27.9 27-67.09v-410q0-65 45-110t110-45q65 0 110 45t45 110v349q35 13 57.5 41.36Q840-266.27 840-230q0 45-32.08 77.5Q775.83-120 730-120q-45 0-77.5-32.5T620-230q0-36.3 22.5-65.15Q665-324 700-336v-349q0-40-27.5-67.5T605-780q-40 0-67.5 27.5T510-685v410q0 63.94-45 109.47T355-120ZM230.5-680q20.5 0 35-15t14.5-35.5q0-20.5-14.37-35Q251.25-780 230-780q-20 0-35 14.37-15 14.38-15 35.63 0 20 15 35t35.5 15Zm500 500q20.5 0 35-15t14.5-35.5q0-20.5-14.37-35Q751.25-280 730-280q-20 0-35 14.37-15 14.38-15 35.63 0 20 15 35t35.5 15ZM230-730Zm500 500Z",
  "rule": "m576-160-42-42 111-111-111-111 42-42 111 111 111-111 42 42-111 111 111 111-42 42-111-111-111 111Zm83-374L517-676l42-42 100 99 179-179 42 43-221 221ZM80-290v-60h360v60H80Zm0-320v-60h360v60H80Z",
  "schedule": "m627-287 45-45-159-160v-201h-60v225l174 181ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-82 31.5-155t86-127.5Q252-817 325-848.5T480-880q82 0 155 31.5t127.5 86Q817-708 848.5-635T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Zm0-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480-820q-140 0-240 100T140-480q0 140 100 240t240 100Z",
  "school": "M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z",
  "science": "M172-120q-41.78 0-59.39-39T124-230l248-280v-270h-52q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h320q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5h-52v270l248 280q29 32 11.39 71T788-120H172Zm-12-60h640L528-488v-292h-96v292L160-180Zm318-300Z",
  "script": "M332-254q11 0 18-6t8-15q2-17 4.5-32l4.5-27q2-10 3-22t5-28q26-5 51.5-8.5T476-399q26-3 50.5-4.5T574-407q5 20 8.5 40t9.5 40q8 23 17.5 39t23.5 27q9 7 19 9t18-1q11-4 12-12t-6-24q-9-20-15-36.5T651-356q-4-15-7-28l-6-26q6 0 13.5-.5T663-412q17-2 25-11t8-20q0-12-9.5-20t-26.5-8h-13.5q-9.5 0-19.5 1-2-19-4.5-37.5T617-545q-3-22-6.5-40t-7.5-35q-5-20-14.5-36.5T565-685q-12-11-26-16.5t-28-5.5q-23 0-41 8t-35 26q-10 11-21 25.5T390-613q-6-9-12.5-13t-15.5-4q-8 0-13 4.5t-5 11.5q0 28-3.5 54.5T331-506q-4 19-8.5 38t-9.5 38q-13 1-22 2.5t-14 4.5q-6 3-9 8.5t-3 13.5q0 8 2 12.5t7 7.5q5 3 13 4t20 0q0 16-2 31.5t-2 30.5q0 14 .5 24.5T306-274q3 11 9.5 15.5T332-254Zm60-195q9-34 19-62.5t22-53.5q12-26 28.5-53t45.5-27q17 0 28 17.5t17 52.5q4 24 5.5 53.5T562-468q-21 2-42 3.5t-43 3.5q-21 2-42 5t-43 7ZM140-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h680q24 0 42 18t18 42v680q0 24-18 42t-42 18H140Zm0-60h680v-680H140v680Zm0 0v-680 680Z",
  "search": "M796-121 533-384q-30 26-69.96 40.5Q423.08-329 378-329q-108.16 0-183.08-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.13-57.5Q572-504 572-585t-56.87-138.5Q458.25-781 377-781q-82.08 0-139.54 57.5Q180-666 180-585t57.46 138.5Q294.92-389 377-389Z",
  "send": "M120-160v-640l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Zm0 0v-457 457Z",
  "settings": "m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm48-60h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715-480q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538-708l-14-112h-88l-14 112q-34 7-63.5 24T306-642l-106-46-40 72 94 69q-4 17-6.5 33.5T245-480q0 17 2.5 33.5T254-413l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Zm44-210q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-130Z",
  "shield": "M480-81q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z",
  "shopping_cart": "M286.79-81Q257-81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21Zm400 0Q657-81 636-102.21t-21-51Q615-183 636.21-204t51-21Q717-225 738-203.79t21 51Q759-123 737.79-102t-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.07q22.97 0 34.95 21 11.98 21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z",
  "simulation": "M320-280v-23q0-44 44-70.5T480-400q72 0 116 26.5t44 70.5v23H320Zm160-160q-33 0-56.5-23.5T400-520q0-33 23.5-56.5T480-600q33 0 56.5 23.5T560-520q0 33-23.5 56.5T480-440ZM100-605v344q11 19 38.5 33t65.5 22v-363q-32-7-58-16t-46-20Zm760 0q-20 11-46 20t-58 16v363q38-8 65-22t39-33v-344ZM264-133q-111-16-167.5-48T40-261v-424q0-57 111.5-86T480-800q217 0 328.5 29T920-685v424q0 48-56.5 80T696-133v-486q63-11 106.5-26t69.5-35q-49-31-145-46t-247-15q-147 0-243 14.5T86-680q23 20 66 35t112 26v486ZM100-605v399-399Zm760 0v399-399Z",
  "skip_next": "M680-240v-480h60v480h-60Zm-460 0v-480l346 240-346 240Zm60-240Zm0 125 181-125-181-125v250Z",
  "smart_toy": "M147-376q-45 0-76-31.21T40-483q0-44.58 31.21-75.79Q102.42-590 147-590v-123q0-24 18-42t42-18h166q0-45 31.21-76T480-880q44.58 0 75.79 31.21Q587-817.58 587-773h166q24 0 42 18t18 42v123q45 0 76 31.21T920-483q0 44.58-31.21 75.79Q857.58-376 813-376v196q0 24-18 42t-42 18H207q-24 0-42-18t-18-42v-196Zm196.24-100q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm274 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM312-285h336v-60H312v60ZM207-180h546v-533H207v533Zm273-267Z",
  "square": "M120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z",
  "stack": "M260-380v60H140q-24.75 0-42.37-17.63Q80-355.25 80-380v-440q0-24.75 17.63-42.38Q115.25-880 140-880h440q24.75 0 42.38 17.62Q640-844.75 640-820v120h-60v-120H140v440h120ZM380-80q-24.75 0-42.37-17.63Q320-115.25 320-140v-440q0-24.75 17.63-42.38Q355.25-640 380-640h440q24.75 0 42.38 17.62Q880-604.75 880-580v440q0 24.75-17.62 42.37Q844.75-80 820-80H380Zm0-60h440v-440H380v440Zm220-220Z",
  "start": "M80-240v-480h60v480H80Zm559 1-43-42 169-169H239v-60h526L597-679l42-42 241 241-241 241Z",
  "stop": "M300-660v360-360Zm-60 420v-480h480v480H240Zm60-60h360v-360H300v360Z",
  "stop_circle": "M330-330h300v-300H330v300ZM480.27-80q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z",
  "store": "M160-740v-60h642v60H160Zm5 580v-258h-49v-60l44-202h641l44 202v60h-49v258h-60v-258H547v258H165Zm60-60h262v-198H225v198Zm-50-258h611-611Zm0 0h611l-31-142H206l-31 142Z",
  "summarize": "M309-621q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0 171q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0 171q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h462l198 198v462q0 24-18 42t-42 18H180Zm0-60h600v-428.57H609V-780H180v600Zm0-600v171.43V-780v600-600Z",
  "supervisor_account": "M684-381q-39.48 0-66.74-27.26Q590-435.52 590-475q0-39.48 27.26-66.74Q644.52-569 684-569q39.48 0 66.74 27.26Q778-514.48 778-475q0 39.48-27.26 66.74Q723.48-381 684-381ZM488-160v-51q0-26 11-44.5t31-28.5q37-19 75-28t79-9q41 0 79 8.5t75 28.5q20 9 31 28t11 45v51H488Zm-88-321q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm0-150ZM80-160v-94q0-34 17-62.5t50.67-43.5Q215-390 276.5-405q61.5-15 123.25-15 32.25 0 57.25 3t54 9l-25.5 25.5L460-357q-13-2-28-2.5t-32-.5q-56.63 0-110.81 11.5Q235-337 172-306q-14 7-23 22t-9 30v34h288v60H80Zm348-60Zm-28-321q39 0 64.5-25.5T490-631q0-39-25.5-64.5T400-721q-39 0-64.5 25.5T310-631q0 39 25.5 64.5T400-541Z",
  "support": "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-121-80 63-150q-38-13-67.5-41.5T310-421l-150 60q31 71 82 123t117 78Zm-50-378q16-41 45-70t67-42l-60-150q-75 31-127 83.5T160-598l149 60Zm171 178q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm121 200q69-28 120-79.5T800-359l-150-62q-15 42-44.5 70.5T538-310l63 150Zm49-379 150-62q-28-68-79.5-119.5T601-800l-61 150q38 13 66 41.5t44 69.5Z",
  "swap_horiz": "M273-160 80-353l193-193 42 42-121 121h316v60H194l121 121-42 42Zm414-254-42-42 121-121H450v-60h316L645-758l42-42 193 193-193 193Z",
  "switch": "M330-290h300v-380H330v380Zm60-60v-260h180v260H390Zm60-140h60v-60h-60v60ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z",
  "sync": "M167-160v-60h130l-15-12q-64-51-93-111t-29-134q0-106 62.5-190.5T387-784v62q-75 29-121 96.5T220-477q0 63 23.5 109.5T307-287l30 21v-124h60v230H167Zm407-15v-63q76-29 121-96.5T740-483q0-48-23.5-97.5T655-668l-29-26v124h-60v-230h230v60H665l15 14q60 56 90 120t30 123q0 106-62 191T574-175Z",
  "tab": "M140-220h680v-347H524v-173H140v520Zm0 60q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60v-520 520Z",
  "table": "M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm270-250H180v190h270v-190Zm60 0v190h270v-190H510Zm-60-60v-190H180v190h270Zm60 0h270v-190H510v190ZM180-680h600v-100H180v100Z",
  "table_rows": "M780-180v-157H180v157h600Zm0-217v-166H180v166h600Zm0-226v-157H180v157h600ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Z",
  "target": "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-60q142.38 0 241.19-98.81Q820-337.63 820-480q0-142.38-98.81-241.19T480-820q-142.37 0-241.19 98.81Q140-622.38 140-480q0 142.37 98.81 241.19Q337.63-140 480-140Zm0-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-60q75 0 127.5-52.5T660-480q0-75-52.5-127.5T480-660q-75 0-127.5 52.5T300-480q0 75 52.5 127.5T480-300Zm0-100q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z",
  "terminal": "M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-436H140v436Zm160-72-42-42 103-104-104-104 43-42 146 146-146 146Zm190 4v-60h220v60H490Z",
  "timeline": "M109.91-240Q81-240 60.5-260.59 40-281.18 40-310.09t20.49-49.41q20.5-20.5 49.28-20.5 5.23 0 10.23.5t13 2.5l200-200q-2-8-2.5-13t-.5-10.23q0-28.78 20.59-49.28Q371.18-670 400.09-670t49.41 20.63q20.5 20.64 20.5 49.61 0 1.76-3 22.76l110 110q8-2 13-2.5t10-.5q5 0 10 .5t13 2.5l160-160q-2-8-2.5-13t-.5-10.23q0-28.78 20.59-49.28Q821.18-720 850.09-720t49.41 20.59q20.5 20.59 20.5 49.5t-20.49 49.41q-20.5 20.5-49.28 20.5-5.23 0-10.23-.5t-13-2.5L667-423q2 8 2.5 13t.5 10.23q0 28.78-20.59 49.28Q628.82-330 599.91-330t-49.41-20.49q-20.5-20.5-20.5-49.28 0-5.23.5-10.23t2.5-13L423-533q-8 2-13 2.5t-10.25.5q-1.75 0-22.75-3L177-333q2 8 2.5 13t.5 10.23q0 28.78-20.59 49.28Q138.82-240 109.91-240Z",
  "today": "M352.82-310Q312-310 284-338.18q-28-28.19-28-69Q256-448 284.18-476q28.19-28 69-28Q394-504 422-475.82q28 28.19 28 69Q450-366 421.82-338q-28.19 28-69 28ZM180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Z",
  "toolbar": "M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-513h600v-147H180v147Zm600 60H180v393h600v-393Zm-600-60v60-60Zm0 0v-147 147Zm0 60v393-393Z",
  "tooltip": "M480-80 376-237H140q-24.75 0-42.37-17.63Q80-272.25 80-297v-523q0-24.75 17.63-42.38Q115.25-880 140-880h680q24.75 0 42.38 17.62Q880-844.75 880-820v523q0 24.75-17.62 42.37Q844.75-237 820-237H584L480-80Zm0-108 72-109h268v-523H140v523h268l72 109Zm0-371Z",
  "translate": "m475-80 185-480h79L924-80h-65l-45-117H584L539-80h-64ZM162-201l-42-42 201-201q-51-53-85.5-107.5T183-660h65q16 43 43.5 85t72.5 88q46-48 85-117.5T505-740H40v-60h290v-80h60v80h290v60H567q-17 78-61.5 159.5T406-443l102 104-24 63-121-125-201 200Zm443-51h188l-94-248-94 248Z",
  "travel": "m393-119-95-179-180-96 59-59 148 27 122-121-327-139 72-72 396 69 133-133q21-21 50.5-21t50.5 21q21 21 21 50.5T822-721L689-588l69 396-72 72-139-327-121 122 26 147-59 59Z",
  "trending_down": "M653-240v-60h127L539-541 372-374 80-665l43-43 248 248 167-167 283 283v-123h59v227H653Z",
  "trending_flat": "m702-301-43-42 106-106H120v-60h646L660-615l42-42 178 178-178 178Z",
  "trending_up": "m123-240-43-43 292-291 167 167 241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z",
  "tune": "M427-120v-225h60v83h353v60H487v82h-60Zm-307-82v-60h247v60H120Zm187-166v-82H120v-60h187v-84h60v226h-60Zm120-82v-60h413v60H427Zm166-165v-225h60v82h187v60H653v83h-60Zm-473-83v-60h413v60H120Z",
  "unfold_more": "M480-120 300-300l44-44 136 136 136-136 44 44-180 180ZM344-612l-44-44 180-180 180 180-44 44-136-136-136 136Z",
  "visibility": "M480.12-330q70.88 0 120.38-49.62t49.5-120.5q0-70.88-49.62-120.38T479.88-670Q409-670 359.5-620.38T310-499.88q0 70.88 49.62 120.38t120.5 49.5Zm-.36-58q-46.76 0-79.26-32.74-32.5-32.73-32.5-79.5 0-46.76 32.74-79.26 32.73-32.5 79.5-32.5 46.76 0 79.26 32.74 32.5 32.73 32.5 79.5 0 46.76-32.74 79.26-32.73 32.5-79.5 32.5Zm.24 188q-146 0-264-83T40-500q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Zm0-300Zm-.17 240Q601-260 702.5-325.5 804-391 857-500q-53-109-154.33-174.5Q601.34-740 480.17-740T257.5-674.5Q156-609 102-500q54 109 155.33 174.5Q358.66-260 479.83-260Z",
  "visibility_off": "m629-419-44-44q26-71-27-118t-115-24l-44-44q17-11 38-16t43-5q71 0 120.5 49.5T650-500q0 22-5.5 43.5T629-419Zm129 129-40-40q49-36 85.5-80.5T857-500q-50-111-150-175.5T490-740q-42 0-86 8t-69 19l-46-47q35-16 89.5-28T485-800q143 0 261.5 81.5T920-500q-26 64-67 117t-95 93Zm58 226L648-229q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40-500q20-52 55.5-101.5T182-696L56-822l42-43 757 757-39 44ZM223-654q-37 27-71.5 71T102-500q51 111 153.5 175.5T488-260q33 0 65-4t48-12l-64-64q-11 5-27 7.5t-30 2.5q-70 0-120-49t-50-121q0-15 2.5-30t7.5-27l-97-97Zm305 142Zm-116 58Z",
  "volume_up": "M560-131v-62q97-28 158.5-107.5T780-481q0-101-61-181T560-769v-62q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm420 48v-337q55 17 87.5 64T660-480q0 57-33 104t-87 64ZM420-648 307-540H180v120h127l113 109v-337Zm-94 168Z",
  "warning": "m40-120 440-760 440 760H40Zm104-60h672L480-760 144-180Zm340.18-57q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5ZM454-348h60v-224h-60v224Zm26-122Z",
  "webhook": "M270-120q-78 0-134-56T80-310q0-67 39-117t101-66v63q-35 14-57.5 46.5T140-310q0 54 38 92t92 38q54 0 92-38t38-92v-30h249q8-9 19-14.5t22-5.5q21 0 35.5 14.5T740-310q0 20-14.5 35T690-260q-11 0-22-5.5T649-280H458q-14 69-66.5 114.5T270-120Zm420 0q-48 0-88.5-22T535-200h86q15 10 32.5 15t36.5 5q54 0 92-38t38-92q0-54-38-92t-92-38q-19 0-35 4.5T624-422L495-640q-20-4-32.5-17.5T450-690q0-21 15-35.5t35-14.5q21 0 35.5 14.5T550-690q0 4-.5 7.5T547-672l103 176q11-2 21.5-3t18.5-1q79 0 134.5 55.5T880-310q0 78-55.5 134T690-120ZM270-260q-20 0-35-15t-15-35q0-18 12.5-31.5T264-360l111-187q-30-29-47.5-65.5T310-690q0-79 56-134.5T500-880q76 0 131 52.5T690-700h-60q-3-51-40.5-85.5T500-820q-54 0-92 38t-38 92q0 42 24.5 75.5T457-567L316-329q2 6 3 10.5t1 8.5q0 20-14.5 35T270-260Z",
  "workspace_premium": "m385-412 36-115-95-74h116l38-119 37 119h117l-95 74 35 115-94-71-95 71ZM244-40v-304q-45-47-64.5-103T160-560q0-136 92-228t228-92q136 0 228 92t92 228q0 57-19.5 113T716-344v304l-236-79-236 79Zm236-260q109 0 184.5-75.5T740-560q0-109-75.5-184.5T480-820q-109 0-184.5 75.5T220-560q0 109 75.5 184.5T480-300ZM304-124l176-55 176 55v-171q-40 29-86 42t-90 13q-44 0-90-13t-86-42v171Zm176-86Z"
};

/* Third-party provider marks (Simple Icons). */
const brandGlyphs = {
  "dropbox": "M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z",
  "gmail": "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
  "googlecalendar": "M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z",
  "googledrive": "M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z",
  "googlesheets": "M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z",
  "greenhouse": "M16.279 7.13c0 1.16-.49 2.185-1.293 2.987-.891.891-2.184 1.114-2.184 1.872 0 1.025 1.65.713 3.231 2.295 1.048 1.047 1.694 2.43 1.694 4.034C17.727 21.482 15.187 24 12 24c-3.187 0-5.727-2.518-5.727-5.68 0-1.607.646-2.989 1.694-4.036 1.582-1.582 3.23-1.27 3.23-2.295 0-.758-1.292-.98-2.183-1.872-.802-.802-1.293-1.827-1.293-3.03 0-2.318 1.895-4.19 4.212-4.19.446 0 .847.067 1.181.067.602 0 .914-.268.914-.691 0-.245-.112-.557-.112-.891 0-.758.647-1.382 1.427-1.382s1.404.646 1.404 1.426c0 .825-.647 1.204-1.137 1.382-.401.134-.713.312-.713.713 0 .758 1.382 1.493 1.382 3.61zm-.446 11.19c0-2.206-1.627-3.99-3.833-3.99-2.206 0-3.833 1.784-3.833 3.99 0 2.184 1.627 3.989 3.833 3.989 2.206 0 3.833-1.808 3.833-3.99zM14.518 7.086c0-1.404-1.136-2.562-2.518-2.562S9.482 5.682 9.482 7.086 10.618 9.65 12 9.65s2.518-1.159 2.518-2.563z",
  "hubspot": "M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z",
  "intercom": "M21 0H3C1.343 0 0 1.343 0 3v18c0 1.658 1.343 3 3 3h18c1.658 0 3-1.342 3-3V3c0-1.657-1.342-3-3-3zm-5.801 4.399c0-.44.36-.8.802-.8.44 0 .8.36.8.8v10.688c0 .442-.36.801-.8.801-.443 0-.802-.359-.802-.801V4.399zM11.2 3.994c0-.44.357-.799.8-.799s.8.359.8.799v11.602c0 .44-.357.8-.8.8s-.8-.36-.8-.8V3.994zm-4 .405c0-.44.359-.8.799-.8.443 0 .802.36.802.8v10.688c0 .442-.36.801-.802.801-.44 0-.799-.359-.799-.801V4.399zM3.199 6c0-.442.36-.8.802-.8.44 0 .799.358.799.8v7.195c0 .441-.359.8-.799.8-.443 0-.802-.36-.802-.8V6zM20.52 18.202c-.123.105-3.086 2.593-8.52 2.593-5.433 0-8.397-2.486-8.521-2.593-.335-.288-.375-.792-.086-1.128.285-.334.79-.375 1.125-.09.047.041 2.693 2.211 7.481 2.211 4.848 0 7.456-2.186 7.479-2.207.334-.289.839-.25 1.128.086.289.336.25.84-.086 1.128zm.281-5.007c0 .441-.36.8-.801.8-.441 0-.801-.36-.801-.8V6c0-.442.361-.8.801-.8.441 0 .801.357.801.8v7.195z",
  "okta": "M12 0C5.389 0 0 5.35 0 12s5.35 12 12 12 12-5.35 12-12S18.611 0 12 0zm0 18c-3.325 0-6-2.675-6-6s2.675-6 6-6 6 2.675 6 6-2.675 6-6 6z",
  "oracle": "M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z",
  "personio": "M21.603 24H2.47v-1.563h19.133Zm-6.167-4.044c.557.145 1.137-.244 1.303-.867.166-.624-.157-1.25-.713-1.39-.556-.142-1.137.24-1.304.865-.167.624.156 1.25.714 1.39zM22.37.676c-1.737-1.347-5.387-.43-8.145.576A41.707 41.705 0 0 0 5.64 5.625C3.624 6.985 1.135 8.987.748 10.814a1.43 1.43 0 0 0 .28 1.263c.505.59 1.354.576 1.516.568a.781.781 0 0 0 .51-1.368.783.783 0 0 0-.58-.193.877.877 0 0 1-.181-.016c.58-2.136 6.69-6.232 12.47-8.342 3.858-1.408 5.964-1.342 6.649-.81.284.22.433.487.23 1.062-.545 1.535-3.2 3.96-7.108 6.48-.725.467-1.434.898-2.11 1.29.544-1.92 1.1-3.88 1.582-5.561a.782.782 0 0 0-1.504-.43 2070.72 2070.634 0 0 0-2.002 7.05c-1.564.811-2.754 1.3-3.22 1.366a.783.783 0 0 0-1.025 1.095c.134.226.4.476.929.476.088 0 .177-.007.264-.02.54-.073 1.417-.395 2.485-.884-.758 2.702-1.373 4.975-1.407 5.282a.781.781 0 0 0 .69.858.668.668 0 0 0 .087 0 .783.783 0 0 0 .775-.685c.062-.38.822-3.133 1.746-6.42a58.241 58.239 0 0 0 4.01-2.401c5.435-3.587 7.007-5.917 7.362-7.241.277-1.02-.017-1.93-.825-2.557z",
  "quickbooks": "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm.642 4.1335c.9554 0 1.7296.776 1.7296 1.7332v9.0667h1.6c1.614 0 2.9275-1.3156 2.9275-2.933 0-1.6173-1.3136-2.9333-2.9276-2.9333h-.6654V7.3334h.6654c2.5722 0 4.6577 2.0897 4.6577 4.667 0 2.5774-2.0855 4.6666-4.6577 4.6666H12.642zM7.9837 7.333h3.3291v12.533c-.9555 0-1.73-.7759-1.73-1.7332V9.0662H7.9837c-1.6146 0-2.9277 1.316-2.9277 2.9334 0 1.6175 1.3131 2.9333 2.9277 2.9333h.6654v1.7332h-.6654c-2.5725 0-4.6577-2.0892-4.6577-4.6665 0-2.5771 2.0852-4.6666 4.6577-4.6666Z",
  "salesforce": "M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.176 5.22c-.345 0-.69-.044-1.02-.104a3.75 3.75 0 01-3.3 1.95c-.6 0-1.155-.15-1.65-.375A4.314 4.314 0 018.88 20.4a4.302 4.302 0 01-4.05-2.82c-.27.062-.54.076-.825.076-2.204 0-4.005-1.8-4.005-4.05 0-1.5.811-2.805 2.01-3.51-.255-.57-.39-1.2-.39-1.846 0-2.58 2.1-4.65 4.65-4.65 1.53 0 2.85.705 3.72 1.8",
  "sap": "M0 6.064v11.872h12.13L24 6.064zm3.264 2.208h.005c.863.001 1.915.245 2.676.633l-.82 1.43c-.835-.404-1.255-.442-1.73-.467-.708-.038-1.064.215-1.069.488-.007.332.669.633 1.305.838.964.306 2.19.715 2.377 1.9L7.77 8.437h2.046l2.064 5.576-.007-5.575h2.37c2.257 0 3.318.764 3.318 2.519 0 1.575-1.09 2.514-2.936 2.514h-.763l-.01 2.094-3.588-.003-.25-.908c-.37.122-.787.189-1.23.189-.456 0-.885-.071-1.263-.2l-.358.919-2 .006.09-.462c-.029.025-.057.05-.087.074-.535.43-1.208.629-2.037.644l-.213.002a5.075 5.075 0 0 1-2.581-.675l.73-1.448c.79.467 1.286.572 1.956.558.347-.007.598-.07.761-.239a.557.557 0 0 0 .156-.369c.007-.376-.53-.553-1.185-.756-.531-.164-1.135-.389-1.606-.735-.559-.41-.825-.924-.812-1.65a1.99 1.99 0 0 1 .566-1.377c.519-.537 1.357-.863 2.363-.863zm10.597 1.67v1.904h.521c.694 0 1.247-.23 1.248-.964 0-.709-.554-.94-1.248-.94zm-5.087.767l-.748 2.362c.223.085.481.133.757.133.268 0 .52-.047.742-.126l-.736-2.37z",
  "slack": "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z",
  "stripe": "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z",
  "whatsapp": "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  "xero": "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.585 14.655c-1.485 0-2.69-1.206-2.69-2.689 0-1.485 1.207-2.691 2.69-2.691 1.485 0 2.69 1.207 2.69 2.691s-1.207 2.689-2.69 2.689zM7.53 14.644c-.099 0-.192-.041-.267-.116l-2.043-2.04-2.052 2.047c-.069.068-.16.108-.258.108-.202 0-.368-.166-.368-.368 0-.099.04-.191.111-.263l2.04-2.05-2.038-2.047c-.075-.069-.113-.162-.113-.261 0-.203.166-.366.368-.366.098 0 .188.037.258.105l2.055 2.048 2.048-2.045c.069-.071.162-.108.26-.108.211 0 .375.165.375.366 0 .098-.029.188-.104.258l-2.056 2.055 2.055 2.051c.068.069.104.16.104.258 0 .202-.165.368-.365.368h-.01zm8.017-4.591c-.796.101-.882.476-.882 1.404v2.787c0 .202-.165.366-.366.366-.203 0-.367-.165-.368-.366v-4.53c0-.204.16-.366.362-.366.166 0 .316.125.346.289.27-.209.6-.317.93-.317h.105c.195 0 .359.165.359.368 0 .201-.164.352-.375.359 0 0-.09 0-.164.008l.053-.002zm-3.091 2.205H8.625c0 .019.003.037.006.057.02.105.045.211.083.31.194.531.765 1.275 1.829 1.29.33-.003.631-.086.9-.229.21-.12.391-.271.525-.428.045-.058.09-.112.12-.168.18-.229.405-.186.54-.083.164.135.18.391.045.57l-.016.016c-.21.27-.435.495-.689.66-.255.164-.525.284-.811.345-.33.09-.645.104-.975.06-1.095-.135-2.01-.93-2.28-2.01-.06-.21-.09-.42-.09-.645 0-.855.421-1.695 1.125-2.205.885-.615 2.085-.66 3-.075.63.405 1.035 1.021 1.185 1.771.075.419-.21.794-.734.81l.068-.046zm6.129-2.223c-1.064 0-1.931.865-1.931 1.931 0 1.064.866 1.931 1.931 1.931s1.931-.867 1.931-1.931c0-1.065-.866-1.933-1.931-1.933v.002zm0 2.595c-.367 0-.666-.297-.666-.666 0-.367.3-.665.666-.665.367 0 .667.299.667.665 0 .369-.3.667-.667.666zm-8.04-2.603c-.91 0-1.672.623-1.886 1.466v.03h3.776c-.203-.855-.973-1.494-1.891-1.494v-.002z",
  "zendesk": "M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"
};

/* Add glyphs at runtime: registerGlyphs({ my_icon: "M..." }). */
function registerGlyphs(extra, brand) {
  Object.assign(glyphs, extra || {});
  Object.assign(brandGlyphs, brand || {});
}
Object.assign(__ds_scope, { ICON_VIEWBOX, BRAND_VIEWBOX, glyphs, brandGlyphs, registerGlyphs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/glyphs.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* Material Symbols Outlined (weight 400) as real SVG vectors inheriting
   currentColor. Never font ligatures, never a glyph name rendered as text.

   Icons render SYNCHRONOUSLY from inlined path data (components/core/glyphs.js,
   generated by `npm run assets`). That matters for three reasons:

   - There is no asset base URL to configure. The old implementation derived one
     from the design-system bundle's own <script src>, which works in a card and
     does not exist at all in a bundled React app.
   - There is no request, so no placeholder frame, no CDN dependency, and no
     toolbar that empties when a network is restricted.
   - It is correct in SSR. An icon that arrives in an effect renders nothing on
     the server and causes a hydration flash on the client.

   A name that is not in the inlined set still falls back to fetching, so a
   consumer can use any Material Symbol without regenerating the set — it just
   pays a request for it. For a permanent addition, call `registerGlyphs` from
   ./glyphs.js, or re-run `npm run assets` once the name is used in source. */

/* Fetch bases, used only for names outside the inlined set. */
const MATERIAL_SYMBOLS_BASE = 'https://cdn.jsdelivr.net/npm/@material-symbols/svg-400/outlined/';
const BRAND_ICON_BASE = 'https://cdn.jsdelivr.net/npm/simple-icons@13/icons/';
const cache = new Map();
function fetchPath(url) {
  if (!cache.has(url)) {
    const pending = typeof fetch === 'function' ? fetch(url).then(r => r.ok ? r.text() : null).catch(() => null).then(text => {
      const m = text && text.match(/<path[^>]*\sd="([^"]+)"/);
      if (!m) console.warn('[LAMP] icon not found: ' + url);
      return m ? m[1] : null;
    }) : Promise.resolve(null);
    cache.set(url, pending);
  }
  return cache.get(url);
}

/**
 * Resolves a glyph to its path data. Inlined glyphs return on the first render;
 * anything else resolves after a fetch and re-renders once.
 */
function usePath(name, table, base) {
  const inlined = table[name];
  const [fetched, setFetched] = React.useState(() => inlined ? null : cache.get(base + name) || null);
  React.useEffect(() => {
    if (inlined || !name) return undefined;
    let alive = true;
    fetchPath(base + name + '.svg').then(d => {
      if (alive && d) setFetched(d);
    });
    return () => {
      alive = false;
    };
  }, [name, inlined, base]);
  return inlined || (typeof fetched === 'string' ? fetched : null);
}

/* A glyph that cannot be resolved renders a visible placeholder rather than an
   invisible gap, so a bad name is caught in review instead of shipping as a
   control with no meaning. */
function Placeholder({
  size
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "4.5",
    width: "15",
    height: "15",
    rx: "2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    opacity: "0.45"
  }));
}
const Icon = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Icon({
  name,
  size = 16,
  className = '',
  style,
  label,
  ...rest
}, ref) {
  const key = String(name).replace(/-/g, '_');
  const d = usePath(key, __ds_scope.glyphs, MATERIAL_SYMBOLS_BASE);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: className,
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : 'true',
    style: {
      display: 'inline-flex',
      flex: 'none',
      width: size,
      height: size,
      color: 'currentColor',
      ...style
    }
  }, rest), d ? /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: __ds_scope.ICON_VIEWBOX,
    fill: "currentColor",
    "aria-hidden": "true",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  })) : /*#__PURE__*/React.createElement(Placeholder, {
    size: size
  }));
}), {
  displayName: 'Icon'
});
const BrandIcon = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function BrandIcon({
  slug,
  size = 16,
  color,
  className = '',
  style,
  label,
  ...rest
}, ref) {
  const key = String(slug).toLowerCase();
  const d = usePath(key, __ds_scope.brandGlyphs, BRAND_ICON_BASE);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: className,
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : 'true',
    style: {
      display: 'inline-flex',
      flex: 'none',
      width: size,
      height: size,
      color: color || 'var(--text-secondary)',
      ...style
    }
  }, rest), d ? /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: __ds_scope.BRAND_VIEWBOX,
    fill: "currentColor",
    "aria-hidden": "true",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  })) : /*#__PURE__*/React.createElement(Placeholder, {
    size: size
  }));
}), {
  displayName: 'BrandIcon'
});
Object.assign(__ds_scope, { MATERIAL_SYMBOLS_BASE, BRAND_ICON_BASE, Icon, BrandIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Badge = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Badge({
  tone = 'neutral',
  icon,
  shape = 'pill',
  micro = false,
  count = false,
  outline = false,
  children,
  className = '',
  ...rest
}, ref) {
  const cls = ['lamp-badge', 'lamp-badge--' + (outline ? 'outline' : tone), shape === 'square' && 'lamp-badge--square', micro && 'lamp-badge--micro', count && 'lamp-badge--count', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: cls
  }, rest), icon ? typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 11
  }) : icon : null, children);
}), {
  displayName: 'Badge'
});
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const TextInput = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function TextInput({
  size = 'md',
  icon,
  suffix,
  trailing,
  mono = false,
  state = 'default',
  disabled = false,
  readOnly = false,
  loading = false,
  className = '',
  ...rest
}, ref) {
  const [focus, setFocus] = React.useState(false);
  const cls = ['lamp-inputwrap', 'lamp-inputwrap--' + size, focus && 'lamp-inputwrap--focus', state !== 'default' && 'lamp-inputwrap--' + state, disabled && 'lamp-inputwrap--disabled', readOnly && 'lamp-inputwrap--readonly', mono && 'lamp-inputwrap--mono', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-inputwrap__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  })) : null, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    className: "lamp-input",
    disabled: disabled,
    readOnly: readOnly,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": state === 'error' || undefined
  }, rest)), loading ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-inputwrap__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "progress_activity",
    size: 14
  })) : null, suffix ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-inputwrap__suffix"
  }, suffix) : null, trailing);
}), {
  displayName: 'TextInput'
});
const SearchInput = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function SearchInput({
  placeholder = 'Search',
  shortcut,
  size = 'md',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({
    ref: ref,
    icon: "search",
    placeholder: placeholder,
    size: size,
    trailing: shortcut ? /*#__PURE__*/React.createElement("span", {
      className: "lamp-inputwrap__suffix",
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11
      }
    }, shortcut) : null
  }, rest));
}), {
  displayName: 'SearchInput'
});
const NumberInput = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function NumberInput({
  suffix,
  step = 1,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({
    ref: ref,
    type: "number",
    step: step,
    suffix: suffix,
    mono: true
  }, rest));
}), {
  displayName: 'NumberInput'
});
const SecretField = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function SecretField({
  value = '',
  revealed: revealedProp,
  onReveal,
  expiring = false,
  ...rest
}, ref) {
  const [revealed, setRevealed] = React.useState(!!revealedProp);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: "lamp-secret"
  }, rest), /*#__PURE__*/React.createElement(TextInput, {
    mono: true,
    readOnly: true,
    value: revealed ? value : '••••••••••••••••',
    state: expiring ? 'warning' : 'default'
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lamp-iconbtn lamp-iconbtn--md lamp-iconbtn--bordered",
    "aria-label": revealed ? 'Hide value' : 'Reveal value',
    onClick: () => {
      setRevealed(!revealed);
      onReveal && onReveal(!revealed);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: revealed ? 'visibility_off' : 'visibility',
    size: 14
  })));
}), {
  displayName: 'SecretField'
});
Object.assign(__ds_scope, { TextInput, SearchInput, NumberInput, SecretField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/** Single source of truth for operational state → colour + icon + label. */
const STATUS = {
  draft: {
    tone: 'neutral',
    icon: 'edit',
    label: 'Draft',
    color: 'var(--runtime-draft)'
  },
  observed: {
    tone: 'neutral',
    icon: 'visibility',
    label: 'Observed',
    color: 'var(--runtime-observed)'
  },
  inferred: {
    tone: 'waiting',
    icon: 'flare',
    label: 'Inferred',
    color: 'var(--runtime-inferred)'
  },
  learning: {
    tone: 'waiting',
    icon: 'school',
    label: 'Learning',
    color: 'var(--runtime-learning)'
  },
  simulation: {
    tone: 'info',
    icon: 'science',
    label: 'Simulation',
    color: 'var(--runtime-simulation)'
  },
  validated: {
    tone: 'success',
    icon: 'check',
    label: 'Validated',
    color: 'var(--runtime-validated)'
  },
  ready: {
    tone: 'success',
    icon: 'check',
    label: 'Ready',
    color: 'var(--status-success)'
  },
  live: {
    tone: 'brand',
    icon: 'bolt',
    label: 'Live',
    color: 'var(--runtime-live)'
  },
  running: {
    tone: 'brand',
    icon: 'sync',
    label: 'Running',
    color: 'var(--runtime-live)'
  },
  waiting: {
    tone: 'waiting',
    icon: 'hourglass_top',
    label: 'Waiting',
    color: 'var(--status-waiting)'
  },
  attention: {
    tone: 'warning',
    icon: 'warning',
    label: 'Needs attention',
    color: 'var(--status-warning)'
  },
  needsHuman: {
    tone: 'waiting',
    icon: 'how_to_reg',
    label: 'Needs human',
    color: 'var(--status-waiting)'
  },
  paused: {
    tone: 'warning',
    icon: 'pause',
    label: 'Paused',
    color: 'var(--runtime-paused)'
  },
  stopped: {
    tone: 'neutral',
    icon: 'stop_circle',
    label: 'Stopped',
    color: 'var(--runtime-stopped)'
  },
  error: {
    tone: 'danger',
    icon: 'cancel',
    label: 'Error',
    color: 'var(--status-danger)'
  },
  killed: {
    tone: 'danger',
    icon: 'dangerous',
    label: 'Killed',
    color: 'var(--runtime-killed)'
  },
  success: {
    tone: 'success',
    icon: 'check_circle',
    label: 'Success',
    color: 'var(--status-success)'
  },
  skipped: {
    tone: 'neutral',
    icon: 'remove',
    label: 'Skipped',
    color: 'var(--status-neutral)'
  },
  mocked: {
    tone: 'info',
    icon: 'inventory_2',
    label: 'Mocked',
    color: 'var(--status-info)'
  },
  blocked: {
    tone: 'danger',
    icon: 'block',
    label: 'Blocked',
    color: 'var(--status-danger)'
  },
  disabled: {
    tone: 'neutral',
    icon: 'do_not_disturb_on',
    label: 'Disabled',
    color: 'var(--status-neutral)'
  }
};
const StatusDot = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function StatusDot({
  status = 'draft',
  size = 'md',
  pulse = false,
  ring = false,
  style,
  ...rest
}, ref) {
  const s = STATUS[status] || STATUS.draft;
  const cls = ['lamp-dot', size === 'lg' && 'lamp-dot--lg', ring && 'lamp-dot--ring', pulse && 'lamp-dot--pulse'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: cls,
    style: {
      background: s.color,
      color: s.color,
      ...style
    },
    role: "img",
    "aria-label": s.label
  }, rest));
}), {
  displayName: 'StatusDot'
});
const StatusBadge = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function StatusBadge({
  status = 'draft',
  label,
  mode = 'badge',
  size = 'md',
  className = '',
  ...rest
}, ref) {
  const s = STATUS[status] || STATUS.draft;
  const text = label || s.label;
  if (mode === 'label') {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: 'lamp-status-label ' + className,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: size === 'sm' ? 12 : 13,
        fontWeight: 500,
        color: 'var(--text-secondary)'
      }
    }, rest), /*#__PURE__*/React.createElement(StatusDot, {
      status: status,
      pulse: status === 'running' || status === 'live'
    }), text);
  }
  if (mode === 'icon') {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      style: {
        display: 'inline-flex',
        color: s.color
      },
      role: "img",
      "aria-label": text
    }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: s.icon,
      size: 14
    }));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: ['lamp-badge', 'lamp-badge--' + s.tone, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 11
  }), text);
}), {
  displayName: 'StatusBadge'
});
Object.assign(__ds_scope, { STATUS, StatusDot, StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/objects/AgentHex.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const AGENT_SIZES = {
  xs: [36, 31],
  sm: [48, 42],
  md: [64, 55],
  lg: [88, 76],
  xl: [120, 104]
};
const STATE_BORDER = {
  idle: 'var(--agent-border)',
  hover: 'var(--agent-border-hover)',
  selected: 'var(--agent-border-selected)',
  multiSelected: 'var(--canvas-multiselect)',
  dragging: 'var(--agent-border-selected)',
  compatible: 'var(--agent-border-compatible)',
  snapReady: 'var(--gold-500)',
  bonding: 'var(--gold-500)',
  bonded: 'var(--agent-border)',
  running: 'var(--agent-border-running)',
  delegating: 'var(--agent-border-running)',
  waiting: 'var(--agent-border-waiting)',
  needsHuman: 'var(--agent-border-waiting)',
  success: 'var(--status-success)',
  warning: 'var(--agent-border-warning)',
  error: 'var(--agent-border-error)',
  paused: 'var(--agent-border-paused)',
  killed: 'var(--agent-border-killed)',
  disabled: 'var(--agent-border)',
  unconfigured: 'var(--border-strong)',
  queued: 'var(--agent-border)',
  retrying: 'var(--agent-border-warning)',
  degraded: 'var(--agent-border-warning)'
};
const ACTIVE = {
  selected: 1,
  snapReady: 1,
  bonding: 1,
  running: 1,
  delegating: 1,
  error: 1,
  failed: 1,
  killed: 1,
  multiSelected: 1,
  succeeded: 1,
  retrying: 1
};
/* States that earn a visible beat. Everything else is completely still. */
const PULSE = {
  starting: 1,
  running: 1,
  delegating: 1,
  retrying: 1,
  succeeded: 1,
  paused: 1
};
const PULSE_COLOR = {
  succeeded: 'var(--status-success)',
  retrying: 'var(--status-warning)',
  paused: 'var(--neutral-400)'
};
const ROLE_GLYPH = {
  standard: 'smart_toy',
  coordinator: 'account_tree',
  specialist: 'target',
  humanSupervised: 'supervisor_account',
  system: 'settings',
  external: 'cloud'
};
const AgentHex = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function AgentHex({
  size = 'md',
  state = 'idle',
  role = 'standard',
  environment = 'draft',
  detail = 'name',
  name,
  roleLabel,
  glyph,
  status,
  badgeCount,
  memoryActive = false,
  authority,
  task,
  cost,
  confidence,
  tools = 0,
  dashed = false,
  labelWidth,
  onClick,
  className = '',
  style,
  ...rest
}, ref) {
  const [w, h] = AGENT_SIZES[size] || AGENT_SIZES.md;
  const border = STATE_BORDER[state] || STATE_BORDER.idle;
  const sw = ACTIVE[state] ? 1.5 : 1;
  const fill = state === 'selected' || state === 'bonding' || state === 'snapReady' ? 'var(--agent-fill-selected)' : 'var(--agent-fill)';
  const pts = [[w * 0.25, 0], [w * 0.75, 0], [w, h / 2], [w * 0.75, h], [w * 0.25, h], [0, h / 2]].map(p => p.join(',')).join(' ');
  const energy = environment === 'simulation' ? 'var(--simulation-energy)' : 'var(--energy-core)';
  const glyphSize = size === 'xs' ? 14 : size === 'sm' ? 16 : size === 'md' ? 18 : size === 'lg' ? 22 : 28;
  const label = (name || 'Agent') + (status ? ', ' + (__ds_scope.STATUS[status] ? __ds_scope.STATUS[status].label : status) : '');
  const labelled = detail !== 'glyph' && !!(name || status);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-agent', 'lamp-agent--' + state, onClick && 'lamp-agent--interactive', className].filter(Boolean).join(' '),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-agent__hex",
    style: {
      width: w,
      height: h
    },
    onClick: onClick,
    tabIndex: 0,
    role: onClick ? 'button' : 'img',
    "aria-label": label
  }, /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: '0 0 ' + w + ' ' + h,
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: pts,
    fill: fill,
    stroke: border,
    strokeWidth: sw,
    strokeDasharray: dashed || state === 'compatible' || state === 'unconfigured' ? '3 3' : undefined,
    strokeLinejoin: "round"
  })), PULSE[state] ? /*#__PURE__*/React.createElement("svg", {
    className: "lamp-agent__pulse",
    width: w,
    height: h,
    viewBox: '0 0 ' + w + ' ' + h,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: pts,
    fill: "none",
    strokeWidth: 2,
    stroke: PULSE_COLOR[state] || energy
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-agent__glyph",
    style: {
      color: ACTIVE[state] ? 'var(--text-brand)' : 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph || ROLE_GLYPH[role] || ROLE_GLYPH.standard,
    size: glyphSize
  })), badgeCount ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-agent__badge"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: state === 'error' ? 'danger' : 'waiting',
    count: true
  }, badgeCount)) : null, (memoryActive || tools > 0) && detail !== 'glyph' && size !== 'xs' ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-agent__pin"
  }, memoryActive ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "database",
    size: 10,
    style: {
      color: 'var(--memory-accent)'
    }
  }) : null, tools > 0 ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "handyman",
    size: 10,
    style: {
      color: 'var(--text-tertiary)'
    }
  }) : null) : null), labelled ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-agent__label",
    style: labelWidth ? {
      maxWidth: labelWidth
    } : undefined
  }, name ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-agent__name"
  }, name) : null, status ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 11,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusDot, {
    status: status,
    pulse: status === 'running' || status === 'live'
  }), __ds_scope.STATUS[status] ? __ds_scope.STATUS[status].label : status) : null, detail === 'meta' && roleLabel ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-agent__role"
  }, roleLabel) : null, detail === 'meta' && task ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-agent__role"
  }, task) : null, detail === 'meta' && (cost || confidence || authority) ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-agent__meta"
  }, [authority, confidence, cost].filter(Boolean).join(' · ')) : null) : null);
}), {
  displayName: 'AgentHex'
});
Object.assign(__ds_scope, { AGENT_SIZES, AgentHex });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/objects/AgentHex.jsx", error: String((e && e.message) || e) }); }

// components/canvas/CanvasMotion.jsx
try { (() => {
/* GSAP runtime for the canvas.

   Direct manipulation on the LAMP canvas runs on GSAP Draggable
   (https://gsap.com/docs/v3/Plugins/Draggable/). Draggable owns the pointer
   maths — capture, touch-action, transforms, bounds, the pointer/touch/pen
   differences — so SnapField and CanvasSurface only have to answer the two
   questions that are actually LAMP's: which lattice slot is nearest, and is it
   free.

   GSAP is resolved at first use rather than imported, in this order:

     1. whatever was handed to setGsap()   — the React path
     2. window.gsap / window.Draggable     — a page that loaded the tags itself
     3. the CDN                            — the design-system cards and kits

   It is deliberately NOT a static import. A library that imports gsap forces
   the dependency on every consumer, including one who only wanted a Button, and
   a bundler cannot tree-shake a dependency out of a dynamic import it must
   still resolve at build time. Injection keeps gsap a true optional peer:

     import gsap from 'gsap';
     import { Draggable } from 'gsap/Draggable';
     import { setGsap } from '@lamp/design-system';
     setGsap({ gsap, Draggable });

   Everything degrades: if GSAP cannot load, drag is unavailable but the canvas
   still renders and every Agent is still movable from the keyboard. Composition
   in LAMP is never pointer-only, so the keyboard path is not a fallback — it is
   the guaranteed path, and the drag is the enhancement. */

const GSAP_CDN = {
  core: 'https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js',
  draggable: 'https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/Draggable.min.js'
};

/* Token easings (tokens/motion.css) mapped to their nearest GSAP equivalent.
   ease.magnetic cubic-bezier(.16,1,.3,1) is the snap ease — a hard decelerating
   curve, which is what makes an Agent feel pulled rather than placed. */
const GSAP_EASE = {
  standard: 'power2.out',
  enter: 'power2.out',
  exit: 'power2.in',
  magnetic: 'power4.out',
  critical: 'power3.inOut'
};

/* Durations in seconds, mirroring tokens/motion.css which is authored in ms. */
const GSAP_DURATION = {
  instant: 0.08,
  fast: 0.12,
  standard: 0.18,
  medium: 0.24,
  slow: 0.36,
  bond: 0.42,
  ceremonial: 0.6
};
let injected = null;
let loading = null;

/**
 * Hand the canvas a GSAP instance you imported yourself. Call once, before the
 * first canvas surface mounts. This is the path a bundled React app should use;
 * it removes the CDN entirely and keeps gsap an optional peer dependency.
 */
function setGsap(api) {
  if (!api || !api.gsap || !api.Draggable) {
    console.warn('[LAMP] setGsap needs { gsap, Draggable }');
    return;
  }
  injected = {
    gsap: api.gsap,
    Draggable: api.Draggable
  };
  if (typeof injected.gsap.registerPlugin === 'function') {
    injected.gsap.registerPlugin(injected.Draggable);
  }
  loading = Promise.resolve(injected);
}
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
    tag.addEventListener('load', () => {
      tag.dataset.loaded = '1';
      done();
    });
    tag.addEventListener('error', () => fail(new Error('failed: ' + src)));
    document.head.appendChild(tag);
  });
}

/** Resolves to { gsap, Draggable }, or null if GSAP is unavailable. */
function loadGsap() {
  if (injected) return Promise.resolve(injected);
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return Promise.resolve(null);
  }
  if (window.gsap && window.Draggable) {
    return Promise.resolve({
      gsap: window.gsap,
      Draggable: window.Draggable
    });
  }
  if (!loading) {
    loading = injectScript(GSAP_CDN.core).then(() => injectScript(GSAP_CDN.draggable)).then(() => {
      if (!window.gsap || !window.Draggable) return null;
      window.gsap.registerPlugin(window.Draggable);
      return {
        gsap: window.gsap,
        Draggable: window.Draggable
      };
    }).catch(e => {
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
function useGsap() {
  const [api, setApi] = React.useState(() => injected || (typeof window !== 'undefined' && window.gsap && window.Draggable ? {
    gsap: window.gsap,
    Draggable: window.Draggable
  } : null));
  React.useEffect(() => {
    if (api) return;
    let alive = true;
    loadGsap().then(next => {
      if (alive && next) setApi(next);
    });
    return () => {
      alive = false;
    };
  }, [api]);
  return api;
}

/** True when the viewer has asked for reduced motion. Energy becomes state change. */
function prefersReducedMotion() {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
Object.assign(__ds_scope, { GSAP_CDN, GSAP_EASE, GSAP_DURATION, setGsap, loadGsap, useGsap, prefersReducedMotion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/canvas/CanvasMotion.jsx", error: String((e && e.message) || e) }); }

// components/core/refs.js
try { (() => {
/* Ref merging.

   Most components hand the forwarded ref straight to their root element. A few
   need that element themselves — SnapField measures the field to convert pointer
   coordinates, CanvasSurface gives it to Draggable as the drag trigger — and a
   DOM node takes exactly one `ref` attribute. Those components merge instead.

   Memoised on the refs so the merged callback is stable between renders: an
   inline callback ref is called with null and then the node again on every
   render, which would tear down and recreate the Draggable instance each time.

   Exported from the package as `useMergedRefs` — a consumer composing two LAMP
   components, or putting a Radix trigger ref on one that already takes its own,
   needs exactly the same thing. */

function useMergedRefs(...refs) {
  return React.useMemo(() => {
    if (refs.every(r => r == null)) return null;
    return node => {
      for (const ref of refs) {
        if (typeof ref === 'function') ref(node);else if (ref && typeof ref === 'object') ref.current = node;
      }
    };
  }, refs // eslint-disable-line react-hooks/exhaustive-deps
  );
}
Object.assign(__ds_scope, { useMergedRefs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/refs.js", error: String((e && e.message) || e) }); }

// components/canvas/AgentLibrary.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* The library an Agent is dragged onto the canvas from.

   Creating an Agent used to mean a command-palette entry that dropped a blank
   hexagon somewhere and left the operator to configure it afterwards. Dragging
   one out of a library answers two questions the blank hexagon leaves open —
   what kind of Agent, and where it goes — in the same gesture, and the archetype
   arrives already carrying a purpose, the Skills it needs and the Tools it
   usually touches.

   The drag is a GHOST, not the list item. The item stays put, so the library
   never looks like it is being emptied, and the ghost is the Agent as it will
   appear on the canvas — an AgentHex at the real lattice size, so the operator
   is judging the actual object against the actual spacing while they aim.

   Dropping does not create anything on its own. It reports the point, and the
   canvas resolves it to a free lattice cell and opens NewAgentDialog. An Agent
   that appears the instant a pointer is released is an Agent nobody named, and
   the whole system rests on Agents being named for the work they do. */

/** Sensible starting archetypes. Replace wholesale via the `archetypes` prop. */
const AGENT_ARCHETYPES = [{
  id: 'coordinator',
  name: 'Coordinator',
  role: 'coordinator',
  glyph: 'account_tree',
  purpose: 'Receives the work, decides what happens next, and hands off.',
  skills: ['classify', 'route'],
  tools: [],
  group: 'Roles'
}, {
  id: 'specialist',
  name: 'Specialist',
  role: 'specialist',
  glyph: 'target',
  purpose: 'Does one thing well — match, reconcile, verify, extract.',
  skills: ['extract', 'verify'],
  tools: [],
  group: 'Roles'
}, {
  id: 'approver',
  name: 'Human-supervised',
  role: 'humanSupervised',
  glyph: 'supervisor_account',
  purpose: 'Prepares a decision and waits for a person to make it.',
  skills: ['summarize'],
  tools: [],
  group: 'Roles',
  checkpoint: true
}, {
  id: 'watcher',
  name: 'Watcher',
  role: 'standard',
  glyph: 'visibility',
  purpose: 'Observes a system and raises the exceptions worth acting on.',
  skills: ['monitor', 'classify'],
  tools: [],
  group: 'Roles'
}, {
  id: 'invoice-matcher',
  name: 'Invoice Matcher',
  role: 'specialist',
  glyph: 'receipt_long',
  purpose: 'Matches an invoice to its purchase order and receipt.',
  skills: ['extract', 'reconcile'],
  tools: ['sap'],
  group: 'Finance'
}, {
  id: 'vendor-verifier',
  name: 'Vendor Verifier',
  role: 'specialist',
  glyph: 'fact_check',
  purpose: 'Checks a supplier exists, is approved, and its bank details hold.',
  skills: ['verify', 'search'],
  tools: ['sap'],
  group: 'Finance'
}, {
  id: 'reconciler',
  name: 'Reconciler',
  role: 'specialist',
  glyph: 'balance',
  purpose: 'Reconciles accounts and explains what does not tie out.',
  skills: ['reconcile'],
  tools: ['sap'],
  group: 'Finance'
}, {
  id: 'triager',
  name: 'Triager',
  role: 'coordinator',
  glyph: 'forum',
  purpose: 'Classifies an incoming issue and routes it to whoever resolves it.',
  skills: ['classify', 'route'],
  tools: ['zendesk'],
  group: 'Customer operations'
}, {
  id: 'collections',
  name: 'Collections Agent',
  role: 'standard',
  glyph: 'schedule',
  purpose: 'Chases an overdue invoice, and stops the moment it is paid.',
  skills: ['schedule', 'summarize'],
  tools: ['gmail'],
  group: 'Finance'
}];
const AgentLibrary = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function AgentLibrary({
  archetypes = AGENT_ARCHETYPES,
  size = 'sm',
  title = 'Agents',
  searchable = true,
  dropTarget,
  onAdd,
  onDrop,
  disabled = false,
  className = '',
  ...rest
}, ref) {
  const api = __ds_scope.useGsap();
  const [query, setQuery] = React.useState('');
  const [dragging, setDragging] = React.useState(null);
  const ghostRef = React.useRef(null);
  const rootRef = React.useRef(null);
  const setRoot = __ds_scope.useMergedRefs(ref, rootRef);
  const itemRefs = React.useRef({});
  const live = React.useRef({});
  live.current = {
    onDrop,
    dropTarget,
    archetypes
  };
  const shown = archetypes.filter(a => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (a.name + ' ' + a.purpose + ' ' + (a.skills || []).join(' ') + ' ' + a.group).toLowerCase().includes(q);
  });
  const groups = [];
  for (const a of shown) {
    const g = groups.find(x => x.name === a.group);
    if (g) g.items.push(a);else groups.push({
      name: a.group,
      items: [a]
    });
  }

  /* One Draggable per item, dragging a proxy and drawing a ghost.
      Draggable always transforms the element it is created on. Created on the
     list item, it carries the item out of the panel and leaves a hole in the
     list, so it is created on a throwaway proxy instead and only `trigger`
     points at the item — the item is then genuinely never moved.
      Each item needs its OWN proxy: Draggable allows one instance per element,
     and creating a second on the same node replaces the first, which would
     leave only the last item in the list draggable. */
  React.useEffect(() => {
    if (!api || disabled) return undefined;
    const {
      gsap,
      Draggable
    } = api;
    const ghost = ghostRef.current;
    const root = rootRef.current;
    const instances = [];
    const proxies = [];
    shown.forEach(archetype => {
      const el = itemRefs.current[archetype.id];
      if (!el || !ghost || !root) return;
      const proxy = document.createElement('div');
      proxy.className = 'lamp-agentlib__proxy';
      proxy.setAttribute('aria-hidden', 'true');
      root.appendChild(proxy);
      proxies.push(proxy);
      const d = Draggable.create(proxy, {
        type: 'x,y',
        /* The press is on the list item; what moves is the proxy, which nobody
           can see. The ghost is positioned from the pointer directly. */
        trigger: el,
        cursor: 'grab',
        activeCursor: 'grabbing',
        onPress() {
          const box = el.getBoundingClientRect();
          gsap.set(ghost, {
            x: box.left + box.width / 2,
            y: box.top + box.height / 2,
            xPercent: -50,
            yPercent: -50,
            autoAlpha: 0
          });
        },
        onDragStart() {
          setDragging(archetype);
          gsap.set(ghost, {
            autoAlpha: 1
          });
        },
        onDrag(e) {
          const x = e.clientX != null ? e.clientX : this.pointerX;
          const y = e.clientY != null ? e.clientY : this.pointerY;
          gsap.set(ghost, {
            x,
            y
          });
        },
        onRelease(e) {
          gsap.set(proxy, {
            x: 0,
            y: 0
          });
          gsap.set(ghost, {
            autoAlpha: 0
          });
          setDragging(null);
          const x = e.clientX != null ? e.clientX : this.pointerX;
          const y = e.clientY != null ? e.clientY : this.pointerY;
          const target = live.current.dropTarget && live.current.dropTarget.current;
          const drop = live.current.onDrop;
          if (!target || !drop) return;
          const box = target.getBoundingClientRect();
          const inside = x >= box.left && x <= box.right && y >= box.top && y <= box.bottom;
          if (!inside) return;
          /* Point reported in the target's own coordinates — the canvas owns
             turning it into a lattice cell. */
          drop(archetype, {
            x: x - box.left,
            y: y - box.top
          });
        }
      })[0];
      if (d) instances.push(d);
    });
    return () => {
      instances.forEach(d => d.kill());
      proxies.forEach(p => p.remove());
    };
  }, [api, disabled, shown.map(a => a.id).join('|')]); // eslint-disable-line react-hooks/exhaustive-deps

  return /*#__PURE__*/React.createElement("div", _extends({
    ref: setRoot,
    className: ['lamp-agentlib', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-agentlib__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-agentlib__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "lamp-agentlib__hint"
  }, "Drag onto the canvas")), searchable ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-agentlib__search"
  }, /*#__PURE__*/React.createElement(__ds_scope.SearchInput, {
    size: "sm",
    value: query,
    placeholder: "Find an Agent",
    onChange: e => setQuery(e.target.value)
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-agentlib__list"
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.name,
    className: "lamp-agentlib__group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-agentlib__grouplabel"
  }, g.name), g.items.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    ref: el => {
      if (el) itemRefs.current[a.id] = el;else delete itemRefs.current[a.id];
    },
    className: 'lamp-agentlib__item' + (dragging && dragging.id === a.id ? ' lamp-agentlib__item--dragging' : ''),
    role: "button",
    tabIndex: 0,
    "aria-label": 'Add ' + a.name
    /* Click and Enter are the non-drag path — every creation route
       in LAMP has one. Both open the same dialog. */,
    onClick: () => onAdd && onAdd(a),
    onKeyDown: e => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      if (onAdd) onAdd(a);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-agentlib__glyph"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: a.glyph,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "lamp-agentlib__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-agentlib__name"
  }, a.name, a.checkpoint ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "waiting",
    micro: true
  }, "Human") : null), /*#__PURE__*/React.createElement("span", {
    className: "lamp-agentlib__purpose"
  }, a.purpose)), /*#__PURE__*/React.createElement("span", {
    className: "lamp-agentlib__grip",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "drag_indicator",
    size: 14
  })))))), !shown.length ? /*#__PURE__*/React.createElement("p", {
    className: "lamp-agentlib__empty"
  }, "No Agent matches \u201C", query, "\u201D.") : null), /*#__PURE__*/React.createElement("div", {
    ref: ghostRef,
    className: "lamp-agentlib__ghost",
    "aria-hidden": "true"
  }, dragging ? /*#__PURE__*/React.createElement(__ds_scope.AgentHex, {
    size: size,
    detail: "glyph",
    glyph: dragging.glyph,
    role: dragging.role,
    state: "snapReady"
  }) : null));
}), {
  displayName: 'AgentLibrary'
});
Object.assign(__ds_scope, { AGENT_ARCHETYPES, AgentLibrary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/canvas/AgentLibrary.jsx", error: String((e && e.message) || e) }); }

// components/canvas/CanvasContextMenu.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const CanvasContextMenu = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function CanvasContextMenu({
  x = 0,
  y = 0,
  groups = [],
  onSelect,
  className = '',
  style,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-cmenu ' + className,
    style: {
      position: 'absolute',
      left: x,
      top: y,
      ...style
    },
    role: "menu"
  }, rest), groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi
  }, gi > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-cmenu__sep"
  }) : null, g.label ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-cmenu__label"
  }, g.label) : null, g.items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    type: "button",
    role: "menuitem",
    disabled: it.disabled,
    className: 'lamp-cmenu__item' + (it.danger ? ' lamp-cmenu__item--danger' : ''),
    onClick: () => onSelect && onSelect(it)
  }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 14
  }) : null, /*#__PURE__*/React.createElement("span", null, it.label), it.shortcut ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-cmenu__kbd"
  }, it.shortcut) : null)))));
}), {
  displayName: 'CanvasContextMenu'
});
Object.assign(__ds_scope, { CanvasContextMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/canvas/CanvasContextMenu.jsx", error: String((e && e.message) || e) }); }

// components/canvas/CanvasSurface.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* The canvas surface: grid, environment tint, guides, marquee, empty state, and
   — when `pannable` — space-and-drag panning on GSAP Draggable.

   Pan and zoom live on two different nodes on purpose. GSAP owns the transform
   of `__world` (the pan) and React owns the transform of `__scale` (the zoom),
   so neither clobbers the other on re-render. */

const CanvasSurface = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function CanvasSurface({
  grid = 'dots',
  zoom = 1,
  environment = 'draft',
  state = 'idle',
  locked = false,
  readOnly = false,
  empty,
  marquee,
  guides = [],
  pannable = false,
  panMode = false,
  onPanChange,
  children,
  className = '',
  style,
  ...rest
}, ref) {
  const gridClass = zoom < 0.3 ? 'plain' : zoom < 0.5 ? 'dots-major' : grid;
  const api = __ds_scope.useGsap();
  const hostRef = React.useRef(null);
  /* Draggable needs this node as its trigger, so the forwarded ref is merged
     rather than replaced. */
  const setHost = __ds_scope.useMergedRefs(ref, hostRef);
  const worldRef = React.useRef(null);

  /* Space is held, or the caller has put the canvas in an explicit pan mode.
     Held-key state rather than a toggle, so releasing space returns you to
     selection without a second keystroke. */
  const [spaceHeld, setSpaceHeld] = React.useState(false);
  const panning = pannable && !locked && (panMode || spaceHeld);
  const report = React.useRef(onPanChange);
  report.current = onPanChange;
  React.useEffect(() => {
    if (!pannable || locked) return undefined;
    const down = e => {
      if (e.code !== 'Space' || e.repeat) return;
      const el = e.target;
      /* Space belongs to the focused control if there is one. */
      if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(el.tagName))) return;
      e.preventDefault();
      setSpaceHeld(true);
    };
    const up = e => {
      if (e.code === 'Space') setSpaceHeld(false);
    };
    const blur = () => setSpaceHeld(false);
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    window.addEventListener('blur', blur);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
      window.removeEventListener('blur', blur);
    };
  }, [pannable, locked]);
  const dragRef = React.useRef(null);
  React.useEffect(() => {
    if (!api || !pannable || !worldRef.current) return undefined;
    const [drag] = api.Draggable.create(worldRef.current, {
      type: 'x,y',
      trigger: hostRef.current,
      cursor: 'grab',
      activeCursor: 'grabbing',
      allowContextMenu: true,
      onDrag() {
        const fn = report.current;
        if (fn) fn({
          x: this.x,
          y: this.y
        });
      }
    });
    dragRef.current = drag || null;
    return () => {
      if (drag) drag.kill();
      dragRef.current = null;
    };
  }, [api, pannable]);

  /* Enabled only while panning, so a drag on the canvas is a marquee selection by
     default and a pan only when the operator asks for one. */
  React.useEffect(() => {
    const drag = dragRef.current;
    if (!drag) return;
    if (panning) drag.enable();else drag.disable();
  }, [api, pannable, panning]);
  const cls = ['lamp-canvas', 'lamp-canvas--' + gridClass, environment !== 'draft' && 'lamp-canvas--' + environment, (state === 'panning' || panning) && 'lamp-canvas--panning', locked && 'lamp-canvas--locked', readOnly && 'lamp-canvas--readonly', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: setHost,
    className: cls,
    style: style,
    role: "application",
    "aria-label": "LAMP canvas"
  }, rest), /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    className: "lamp-canvas__world"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lamp-canvas__scale",
    style: {
      transform: 'scale(' + zoom + ')'
    }
  }, children)), guides.map((g, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: 'lamp-canvas__guide lamp-canvas__guide--' + (g.axis === 'x' ? 'v' : 'h'),
    style: g.axis === 'x' ? {
      left: g.at
    } : {
      top: g.at
    }
  })), marquee ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-canvas__marquee",
    style: marquee
  }) : null, empty ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-canvas__empty"
  }, empty) : null);
}), {
  displayName: 'CanvasSurface'
});

/* The slot an object will land on.

   `shape="hex"` draws a real hexagon outline as SVG rather than a bordered box
   behind a clip-path. Clipping a border to a hexagon keeps only the fragments
   of the border that fall inside the clip — which renders as a few disconnected
   dashes floating near the object, reading as leftover debris rather than as a
   target. A stroked polygon is the whole outline. */

const HEX_POINTS = '25,0 75,0 100,50 75,100 25,100 0,50';
const SnapGuide = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function SnapGuide({
  rect,
  invalid = false,
  kind = 'snap',
  shape = 'rect'
}, ref) {
  if (shape === 'hex') {
    return /*#__PURE__*/React.createElement("svg", {
      ref: ref,
      className: 'lamp-canvas__snapguide-hex' + (invalid ? ' lamp-canvas__snapguide-hex--invalid' : ''),
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none",
      "aria-hidden": "true",
      style: rect
    }, /*#__PURE__*/React.createElement("polygon", {
      points: HEX_POINTS,
      vectorEffect: "non-scaling-stroke"
    }));
  }
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: kind === 'drop' ? 'lamp-canvas__drop' + (invalid ? ' lamp-canvas__drop--invalid' : '') : 'lamp-canvas__snapguide',
    style: rect
  });
}), {
  displayName: 'SnapGuide'
});
Object.assign(__ds_scope, { CanvasSurface, SnapGuide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/canvas/CanvasSurface.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const IconButton = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function IconButton({
  icon,
  label,
  size = 'md',
  bordered = false,
  active = false,
  tone = 'default',
  className = '',
  ...rest
}, ref) {
  const cls = ['lamp-iconbtn', 'lamp-iconbtn--' + size, bordered && 'lamp-iconbtn--bordered', active && 'lamp-iconbtn--active', tone === 'danger' && 'lamp-iconbtn--danger', className].filter(Boolean).join(' ');
  const glyph = size === 'xs' ? 12 : size === 'sm' ? 14 : 16;
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: ref,
    type: "button",
    className: cls,
    "aria-label": label,
    "aria-pressed": active || undefined,
    title: label
  }, rest), typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: glyph
  }) : icon);
}), {
  displayName: 'IconButton'
});
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Divider = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Divider({
  orientation = 'horizontal',
  label,
  className = '',
  ...rest
}, ref) {
  if (label) return /*#__PURE__*/React.createElement("div", _extends({
    className: 'lamp-divider lamp-divider--label ' + className
  }, rest), label);
  return /*#__PURE__*/React.createElement("hr", _extends({
    ref: ref,
    className: ['lamp-divider', orientation === 'vertical' && 'lamp-divider--v', className].filter(Boolean).join(' ')
  }, rest));
}), {
  displayName: 'Divider'
});
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/canvas/CanvasToolbar.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const CanvasToolbar = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function CanvasToolbar({
  position = 'floating',
  children,
  className = '',
  style,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-ctoolbar', 'lamp-ctoolbar--' + position, className].filter(Boolean).join(' '),
    style: style,
    role: "toolbar"
  }, rest), children);
}), {
  displayName: 'CanvasToolbar'
});
const CanvasZoomControls = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function CanvasZoomControls({
  zoom = 1,
  onZoomIn,
  onZoomOut,
  onFit,
  onReset,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement(CanvasToolbar, _extends({
    ref: ref,
    position: "topright"
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "remove",
    label: "Zoom out",
    size: "sm",
    onClick: onZoomOut
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lamp-ctoolbar__zoom",
    onClick: onReset,
    title: "Reset zoom"
  }, Math.round(zoom * 100), "%"), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "add",
    label: "Zoom in",
    size: "sm",
    onClick: onZoomIn
  }), /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    orientation: "vertical"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "fit_screen",
    label: "Fit selection",
    size: "sm",
    onClick: onFit
  }));
}), {
  displayName: 'CanvasZoomControls'
});
const CanvasObjectToolbar = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function CanvasObjectToolbar({
  x,
  y,
  children,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: "lamp-ctoolbar lamp-ctoolbar--object",
    style: {
      left: x,
      top: y
    },
    role: "toolbar"
  }, rest), children);
}), {
  displayName: 'CanvasObjectToolbar'
});
const CanvasMinimap = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function CanvasMinimap({
  blips = [],
  viewport,
  onJump,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: "lamp-minimap",
    onClick: onJump,
    "aria-label": "Canvas overview"
  }, rest), blips.map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: 'lamp-minimap__blip' + (b.tone ? ' lamp-minimap__blip--' + b.tone : ''),
    style: {
      left: b.x,
      top: b.y,
      width: b.w || 4,
      height: b.h || 4
    }
  })), viewport ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-minimap__viewport",
    style: viewport
  }) : null);
}), {
  displayName: 'CanvasMinimap'
});
Object.assign(__ds_scope, { CanvasToolbar, CanvasZoomControls, CanvasObjectToolbar, CanvasMinimap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/canvas/CanvasToolbar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Button = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Button({
  variant = 'secondary',
  size = 'md',
  icon,
  iconRight,
  loading = false,
  disabled = false,
  block = false,
  shortcut,
  children,
  className = '',
  ...rest
}, ref) {
  const cls = ['lamp-btn', 'lamp-btn--' + variant, 'lamp-btn--' + size, block && 'lamp-btn--block', loading && 'lamp-btn--loading', className].filter(Boolean).join(' ');
  const glyph = size === 'lg' ? 16 : 14;
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: ref,
    type: "button",
    className: cls,
    disabled: disabled || loading,
    "aria-busy": loading || undefined
  }, rest), icon ? typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: glyph
  }) : icon : null, children, iconRight ? typeof iconRight === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: glyph
  }) : iconRight : null, shortcut ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-btn__kbd"
  }, shortcut) : null, loading ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-btn__spin"
  }, /*#__PURE__*/React.createElement("i", null)) : null);
}), {
  displayName: 'Button'
});
const SplitButton = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function SplitButton({
  variant = 'secondary',
  size = 'md',
  icon,
  children,
  onMenu,
  menuLabel = 'More actions',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "lamp-split"
  }, /*#__PURE__*/React.createElement(Button, _extends({
    variant: variant,
    size: size,
    icon: icon
  }, rest), children), /*#__PURE__*/React.createElement(Button, {
    variant: variant,
    size: size,
    onClick: onMenu,
    "aria-label": menuLabel,
    icon: "keyboard_arrow_down"
  }));
}), {
  displayName: 'SplitButton'
});
Object.assign(__ds_scope, { Button, SplitButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Modal = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Modal({
  open = true,
  title,
  subtitle,
  glyph,
  size = 'md',
  critical = false,
  footer,
  onClose,
  children,
  className = '',
  ...rest
}, ref) {
  if (!open) return null;
  const width = size === 'sm' ? 'var(--modal-width-sm)' : size === 'lg' ? 'var(--modal-width-lg)' : 'var(--modal-width-md)';
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "lamp-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: ['lamp-modal', critical && 'lamp-modal--critical', className].filter(Boolean).join(' '),
    style: {
      width
    },
    role: critical ? 'alertdialog' : 'dialog',
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-modal__head"
  }, glyph ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: 18,
    style: {
      marginTop: 2,
      color: critical ? 'var(--status-danger)' : 'var(--text-secondary)'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "lamp-modal__title"
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    className: "lamp-modal__sub"
  }, subtitle) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Close",
    size: "sm",
    onClick: onClose
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "lamp-modal__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-modal__foot"
  }, footer) : null));
}), {
  displayName: 'Modal'
});
const CriticalConfirmation = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function CriticalConfirmation({
  open = true,
  title,
  consequences = [],
  scope,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onCancel,
  onConfirm,
  children,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement(Modal, _extends({
    ref: ref,
    open: open,
    critical: true,
    glyph: "dangerous",
    size: "sm",
    title: title,
    onClose: onCancel,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      size: "md",
      variant: "secondary",
      onClick: onCancel
    }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      size: "md",
      variant: "danger",
      onClick: onConfirm
    }, confirmLabel))
  }, rest), scope ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 8px',
      color: 'var(--text-primary)'
    }
  }, scope) : null, consequences.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px'
    }
  }, "Immediately:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      lineHeight: '19px'
    }
  }, consequences.map(c => /*#__PURE__*/React.createElement("li", {
    key: c
  }, c)))) : null, children);
}), {
  displayName: 'CriticalConfirmation'
});
const Drawer = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Drawer({
  open = true,
  title,
  side = 'right',
  width,
  actions,
  footer,
  onClose,
  children,
  className = '',
  ...rest
}, ref) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("aside", _extends({
    ref: ref,
    className: ['lamp-drawer', side === 'left' && 'lamp-drawer--left', className].filter(Boolean).join(' '),
    style: width ? {
      width
    } : undefined,
    role: "dialog",
    "aria-label": title
  }, rest), /*#__PURE__*/React.createElement("header", {
    className: "lamp-drawer__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-drawer__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 2
    }
  }, actions, onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Close",
    size: "sm",
    onClick: onClose
  }) : null)), /*#__PURE__*/React.createElement("div", {
    className: "lamp-drawer__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-modal__foot"
  }, footer) : null);
}), {
  displayName: 'Drawer'
});
const Popover = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Popover({
  title,
  children,
  x,
  y,
  className = '',
  style,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-popover ' + className,
    style: {
      position: x != null ? 'absolute' : undefined,
      left: x,
      top: y,
      ...style
    },
    role: "dialog"
  }, rest), title ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-popover__head"
  }, title) : null, children);
}), {
  displayName: 'Popover'
});
Object.assign(__ds_scope, { Modal, CriticalConfirmation, Drawer, Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Textarea = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Textarea({
  mono = false,
  state = 'default',
  rows = 4,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    ref: ref,
    rows: rows,
    className: ['lamp-textarea', mono && 'lamp-textarea--mono', state === 'error' && 'lamp-textarea--error', className].filter(Boolean).join(' '),
    "aria-invalid": state === 'error' || undefined
  }, rest));
}), {
  displayName: 'Textarea'
});
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Select = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Select({
  options = [],
  size = 'md',
  placeholder,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['lamp-select', size === 'sm' && 'lamp-select--sm', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("select", _extends({
    ref: ref
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      disabled: typeof o === 'object' && o.disabled
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    className: "lamp-select__chev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "keyboard_arrow_down",
    size: 14
  })));
}), {
  displayName: 'Select'
});
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Tag = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Tag({
  icon,
  mono = false,
  onRemove,
  children,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: ['lamp-tag', mono && 'lamp-tag--mono', className].filter(Boolean).join(' ')
  }, rest), icon ? typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }) : icon : null, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lamp-tag__x",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 10
  })) : null);
}), {
  displayName: 'Tag'
});
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/TagInput.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const TagInput = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function TagInput({
  values = [],
  onChange,
  placeholder = 'Add…',
  mono = false,
  ...rest
}, ref) {
  const [focus, setFocus] = React.useState(false);
  const [draft, setDraft] = React.useState('');
  const commit = () => {
    const t = draft.trim();
    if (!t) return;
    onChange && onChange([...values, t]);
    setDraft('');
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['lamp-taginput', focus && 'lamp-taginput--focus'].filter(Boolean).join(' ')
  }, rest), values.map((v, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: v + i,
    mono: mono,
    onRemove: () => onChange && onChange(values.filter((_, j) => j !== i))
  }, v)), /*#__PURE__*/React.createElement("input", {
    ref: ref,
    value: draft,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => {
      setFocus(false);
      commit();
    },
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        commit();
      }
      if (e.key === 'Backspace' && !draft && values.length) onChange && onChange(values.slice(0, -1));
    }
  }));
}), {
  displayName: 'TagInput'
});
Object.assign(__ds_scope, { TagInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TagInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Checkbox = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Checkbox({
  label,
  description,
  indeterminate = false,
  disabled = false,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['lamp-check', disabled && 'lamp-check--disabled', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "lamp-check__box"
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "remove",
    size: 12
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12
  })), label ? /*#__PURE__*/React.createElement("span", null, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-check__desc"
  }, description) : null) : null);
}), {
  displayName: 'Checkbox'
});
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/objects/ToolTile.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const TOOL_SIZES = {
  sm: 24,
  md: 32,
  lg: 40,
  xl: 48
};
const STATE_STATUS = {
  available: null,
  connected: 'success',
  authorizationRequired: 'attention',
  expired: 'attention',
  healthy: 'success',
  degraded: 'attention',
  error: 'error',
  readOnly: null,
  writeEnabled: null,
  blocked: 'blocked',
  disabled: 'disabled'
};
const ToolTile = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ToolTile({
  size = 'md',
  state = 'connected',
  provider,
  glyph = 'extension',
  name,
  brandColor,
  onClick,
  className = '',
  style,
  ...rest
}, ref) {
  const px = TOOL_SIZES[size] || TOOL_SIZES.md;
  const dot = STATE_STATUS[state];
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: ['lamp-tool', 'lamp-tool--' + state, onClick && 'lamp-tool--interactive', className].filter(Boolean).join(' '),
    style: {
      width: px,
      height: px,
      ...style
    },
    onClick: onClick,
    role: onClick ? 'button' : 'img',
    "aria-label": (name || provider || 'Tool') + ' Tool',
    tabIndex: onClick ? 0 : undefined,
    title: name || provider
  }, rest), provider ? /*#__PURE__*/React.createElement(__ds_scope.BrandIcon, {
    slug: provider,
    size: px <= 24 ? 14 : px <= 32 ? 18 : 22,
    color: brandColor
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: px <= 24 ? 14 : px <= 32 ? 18 : 22
  }), dot ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-tool__dot"
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusDot, {
    status: dot
  })) : null);
}), {
  displayName: 'ToolTile'
});
const ToolRow = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ToolRow({
  provider,
  glyph,
  name,
  account,
  state = 'connected',
  permission,
  usedBy,
  lastActivity,
  health,
  risk,
  actions,
  onClick,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-toolrow ' + className,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement(ToolTile, {
    provider: provider,
    glyph: glyph,
    name: name,
    state: state
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-toolrow__name"
  }, name), account ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-toolrow__sub"
  }, account) : null), /*#__PURE__*/React.createElement("span", {
    className: "lamp-toolrow__right"
  }, permission ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true
  }, permission) : null, risk ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: risk === 'High' ? 'danger' : risk === 'Medium' ? 'warning' : 'neutral'
  }, risk, " risk") : null, usedBy != null ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-toolrow__sub"
  }, "Used by ", usedBy) : null, health ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-toolrow__sub",
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, health) : null, lastActivity ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-toolrow__sub",
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, lastActivity) : null, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: state === 'connected' || state === 'healthy' ? 'success' : state === 'error' ? 'error' : state === 'blocked' ? 'blocked' : 'attention',
    label: state === 'authorizationRequired' ? 'Auth required' : state === 'expired' ? 'Expired' : state === 'degraded' ? 'Degraded' : state === 'connected' ? 'Connected' : undefined
  }), actions));
}), {
  displayName: 'ToolRow'
});
Object.assign(__ds_scope, { TOOL_SIZES, ToolTile, ToolRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/objects/ToolTile.jsx", error: String((e && e.message) || e) }); }

// components/canvas/NewAgentDialog.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* The dialog that opens when an Agent is dropped on the canvas.

   An Agent created by a pointer release alone is an Agent nobody named, and the
   whole ontology rests on Agents being named for the work they do — Invoice
   Matcher, Vendor Verifier, Payment Approver. So the drop opens this instead of
   creating anything, and the archetype arrives pre-filled: a role, a purpose,
   the Skills it needs and the Tools it usually touches. The operator confirms
   or corrects, which is a job people can do, rather than authoring from blank,
   which they cannot.

   Two rules it enforces:

   1. A NAME IS REQUIRED. Everything else has a workable default; a name does
      not, because "Agent 4" on a canvas of thirty tells a reader nothing.
   2. AUTHORITY STARTS AT ITS LOWEST. A new Agent proposes; it does not act.
      Raising that is a deliberate, separate decision in the Inspector, never a
      default carried in from a template.

   Where the Agent lands is already decided — the drop resolved it to a free
   lattice cell — so the dialog shows that cell rather than asking again. */

const ROLES = [{
  value: 'standard',
  label: 'Standard — works on its own'
}, {
  value: 'coordinator',
  label: 'Coordinator — routes and hands off'
}, {
  value: 'specialist',
  label: 'Specialist — does one thing well'
}, {
  value: 'humanSupervised',
  label: 'Human-supervised — a person decides'
}, {
  value: 'system',
  label: 'System — internal plumbing'
}, {
  value: 'external',
  label: 'External — someone else operates it'
}];
const NewAgentDialog = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function NewAgentDialog({
  open = true,
  archetype,
  cell,
  availableTools = [],
  onCreate,
  onCancel,
  className = '',
  ...rest
}, ref) {
  const base = archetype || {};
  const [name, setName] = React.useState(base.name || '');
  const [role, setRole] = React.useState(base.role || 'standard');
  const [purpose, setPurpose] = React.useState(base.purpose || '');
  const [skills, setSkills] = React.useState(base.skills || []);
  const [tools, setTools] = React.useState(base.tools || []);
  const [checkpoint, setCheckpoint] = React.useState(!!base.checkpoint);

  /* Re-seed when a different archetype is dropped without the dialog closing. */
  const seed = base.id;
  React.useEffect(() => {
    setName(base.name || '');
    setRole(base.role || 'standard');
    setPurpose(base.purpose || '');
    setSkills(base.skills || []);
    setTools(base.tools || []);
    setCheckpoint(!!base.checkpoint);
  }, [seed]); // eslint-disable-line react-hooks/exhaustive-deps

  const named = name.trim().length > 0;
  const toggleTool = provider => setTools(t => t.includes(provider) ? t.filter(x => x !== provider) : t.concat([provider]));
  const build = () => ({
    name: name.trim(),
    role,
    purpose: purpose.trim(),
    skills,
    tools,
    checkpoint,
    /* A new Agent proposes. Acting is a decision taken deliberately, later. */
    authority: 'propose',
    state: 'unconfigured',
    col: cell ? cell.col : 0,
    row: cell ? cell.row : 0
  });
  return /*#__PURE__*/React.createElement(__ds_scope.Modal, _extends({
    ref: ref,
    open: open,
    size: "md",
    glyph: "hexagon",
    title: "New Agent",
    subtitle: archetype ? 'From the ' + archetype.name + ' template. Correct anything that is wrong.' : 'Name it for the work it does.',
    onClose: onCancel,
    className: 'lamp-newagent ' + className,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "lamp-newagent__footnote"
    }, named ? 'Created as a draft. It proposes until you raise its authority.' : /*#__PURE__*/React.createElement("span", {
      className: "lamp-newagent__blocker"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "warning",
      size: 13
    }), "Give it a name \u2014 Agents are named for the work they do.")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "quiet",
      onClick: onCancel
    }, "Cancel"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "primary",
      icon: "check",
      disabled: !named,
      onClick: () => onCreate && onCreate(build())
    }, "Add Agent"))
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-newagent__preview"
  }, /*#__PURE__*/React.createElement(__ds_scope.AgentHex, {
    size: "lg",
    detail: "glyph",
    glyph: base.glyph,
    role: role,
    state: "unconfigured"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lamp-newagent__previewmeta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-newagent__previewname"
  }, name.trim() || 'Unnamed Agent'), cell ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-newagent__cell"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "near_me",
    size: 12
  }), "Lands at column ", cell.col, ", row ", cell.row) : null, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true,
    micro: true
  }, "Proposes only"))), /*#__PURE__*/React.createElement("label", {
    className: "lamp-newagent__label",
    htmlFor: "na-name"
  }, "Name"), /*#__PURE__*/React.createElement(__ds_scope.TextInput, {
    id: "na-name",
    value: name,
    autoFocus: true,
    placeholder: "Invoice Matcher",
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    className: "lamp-newagent__label",
    htmlFor: "na-role"
  }, "Role"), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    id: "na-role",
    value: role,
    options: ROLES,
    onChange: e => setRole(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    className: "lamp-newagent__label",
    htmlFor: "na-purpose"
  }, "Purpose"), /*#__PURE__*/React.createElement(__ds_scope.Textarea, {
    id: "na-purpose",
    rows: 2,
    value: purpose,
    placeholder: "What this Agent is for, in one sentence.",
    onChange: e => setPurpose(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    className: "lamp-newagent__label",
    htmlFor: "na-skills"
  }, "Skills"), /*#__PURE__*/React.createElement(__ds_scope.TagInput, {
    id: "na-skills",
    values: skills,
    onChange: setSkills,
    placeholder: "Add a Skill"
  }), availableTools.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-newagent__label"
  }, "Tools it may use"), /*#__PURE__*/React.createElement("div", {
    className: "lamp-newagent__tools"
  }, availableTools.map(t => {
    const provider = t.provider || t.id;
    const on = tools.includes(provider);
    return /*#__PURE__*/React.createElement("button", {
      key: provider,
      type: "button",
      className: 'lamp-newagent__tool' + (on ? ' lamp-newagent__tool--on' : ''),
      "aria-pressed": on,
      onClick: () => toggleTool(provider)
    }, /*#__PURE__*/React.createElement(__ds_scope.ToolTile, {
      size: "sm",
      provider: provider,
      name: t.name,
      state: t.state || 'connected'
    }), t.name || provider);
  }))) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-newagent__checkpoint"
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: checkpoint,
    onChange: () => setCheckpoint(!checkpoint),
    label: "A person decides before this Agent acts",
    description: "Adds a human checkpoint. Required for anything that spends money or writes to a system of record."
  })));
}), {
  displayName: 'NewAgentDialog'
});
Object.assign(__ds_scope, { NewAgentDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/canvas/NewAgentDialog.jsx", error: String((e && e.message) || e) }); }

// components/objects/HexLattice.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* Honeycomb layout for flat-top hexagons. Column step = 0.75w; odd columns drop half a row. */
const HexLattice = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function HexLattice({
  size = 'md',
  gap = 2,
  cells = [],
  overlay,
  className = '',
  style,
  ...rest
}, ref) {
  const [w, h] = __ds_scope.AGENT_SIZES[size] || __ds_scope.AGENT_SIZES.md;
  const stepX = w * 0.75 + gap;
  const stepY = h + gap;
  let maxX = 0,
    maxY = 0;
  const placed = cells.map((c, i) => {
    const x = c.col * stepX;
    const y = c.row * stepY + (Math.abs(c.col % 2) ? stepY / 2 : 0);
    if (x + w > maxX) maxX = x + w;
    if (y + h > maxY) maxY = y + h;
    return {
      key: c.key == null ? i : c.key,
      x,
      y,
      node: c.node
    };
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-lattice ' + className,
    style: {
      width: maxX,
      height: maxY,
      ...style
    }
  }, rest), overlay, placed.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.key,
    className: "lamp-lattice__cell",
    style: {
      left: p.x,
      top: p.y,
      width: w,
      height: h
    }
  }, p.node)));
}), {
  displayName: 'HexLattice'
});
function hexCenter(col, row, size = 'md', gap = 2) {
  const [w, h] = __ds_scope.AGENT_SIZES[size] || __ds_scope.AGENT_SIZES.md;
  const stepX = w * 0.75 + gap;
  const stepY = h + gap;
  return {
    x: col * stepX + w / 2,
    y: row * stepY + (Math.abs(col % 2) ? stepY / 2 : 0) + h / 2
  };
}

/* Capitalized alias so the helper is reachable on the design-system namespace. */
function HexCenter(col, row, size = 'md', gap = 2) {
  return hexCenter(col, row, size, gap);
}
Object.assign(__ds_scope, { HexLattice, hexCenter, HexCenter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/objects/HexLattice.jsx", error: String((e && e.message) || e) }); }

// components/canvas/SnapField.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* Drag-to-snap field, running on GSAP Draggable.

   THE LATTICE
   -----------
   Every position an Agent can occupy is a cell of a flat-top hexagonal lattice,
   and the set of legal cells is computed from the field's own size — not a fixed
   window — so an Agent can never be dropped outside the field or half off its
   edge. Each cell is reduced to a single pixel point (its centre) and snapping
   is nothing more than "which of these points is nearest".

   NO OVERLAP, EVER
   ----------------
   A cell holding another Agent is not a candidate. It is excluded before the
   distance search, so an occupied slot cannot be chosen, cannot show a guide,
   and cannot be committed to. If a drag ends with no free cell in range the
   Agent returns to where it came from. Two Agents therefore cannot occupy one
   cell by any sequence of drags, and because cells are a lattice they cannot
   partially overlap either.

   A DRAG ALWAYS LANDS
   -------------------
   The target cell is shown from the first frame of a drag and release always
   commits to it. The ranges below style that target and decide whether the
   Agent is pulled toward it; they never veto the drop.

   They used to. A release outside the tolerance returned the Agent home, which
   meant dropping into open canvas — where the nearest lattice centre can be
   half a step away, further than the tolerance — silently undid the drag. An
   operator cannot tell that from the object being stuck.

   THREE STATES OF THE TARGET
   --------------------------
   beyond proximityRange   the slot is drawn faintly: "this is where it lands"
   within proximityRange   the slot brightens: "you are near a real position"
   within snapTolerance    the slot is armed and the Agent drifts toward it

   SELECTION
   ---------
   Dragging on empty canvas draws a marquee and selects the Agents it touches.
   With two or more selected, `onGroup` is offered — that is the path into
   PlaybookComposer. The marquee runs on pointer events rather than Draggable:
   it is a rubber band, not an object with a transform, and giving it to
   Draggable would mean fighting the per-Agent instances for the same press.

   KEYBOARD
   --------
   Focus an Agent and the arrow keys move it one cell at a time, refusing
   occupied and out-of-bounds cells. This path never touches GSAP and works even
   if GSAP never loads. Composition in LAMP is not pointer-only. */

/* How far toward the armed slot the Agent drifts. At the 34px default tolerance
   this keeps the visible shift inside the specified 2–6px band for most of the
   approach — a hint that it is about to land, not a decision made for you. */
const PULL = 0.35;
const FIELD_DEFAULTS = {
  size: 'md',
  gap: 2,
  width: 720,
  height: 380,
  origin: {
    x: 40,
    y: 40
  }
};

/**
 * Every free lattice cell of a field, as pixel points in the field's own
 * coordinates. Cells holding an Agent are left out entirely, which is the
 * guarantee that nothing placed by this math can overlap.
 *
 * Exported because two callers need the same answer and must not each carry
 * their own copy of the lattice arithmetic: SnapField, deciding where a drag
 * lands, and whatever hands a dropped point from AgentLibrary to the dialog,
 * deciding where a new Agent goes.
 */
function freeCells(opts) {
  const o = Object.assign({}, FIELD_DEFAULTS, opts);
  const [hexW, hexH] = __ds_scope.AGENT_SIZES[o.size] || __ds_scope.AGENT_SIZES.md;
  const stepX = hexW * 0.75 + o.gap;
  const stepY = hexH + o.gap;
  const taken = {};
  (o.agents || []).forEach(a => {
    if (o.exclude != null && a.id === o.exclude) return;
    taken[a.col + ':' + a.row] = true;
  });

  /* Legal cells are derived from the field's own box — a cell counts only when
     the whole hexagon fits inside it, which is what stops anything landing half
     off the edge without a single magic number. */
  const minCol = Math.ceil(-o.origin.x / stepX);
  const maxCol = Math.floor((o.width - hexW - o.origin.x) / stepX);
  const minRow = Math.ceil(-o.origin.y / stepY);
  const maxRow = Math.floor((o.height - hexH - o.origin.y) / stepY);
  const points = [];
  for (let col = minCol; col <= maxCol; col++) {
    /* Odd columns sit half a row lower, so they lose the last row. */
    const last = Math.abs(col % 2) ? maxRow - 1 : maxRow;
    for (let row = minRow; row <= last; row++) {
      if (taken[col + ':' + row]) continue;
      const c = __ds_scope.HexCenter(col, row, o.size, o.gap);
      points.push({
        col,
        row,
        x: o.origin.x + c.x,
        y: o.origin.y + c.y
      });
    }
  }
  return points;
}

/** The free cell nearest a point, with `d` set to the distance. Null only when
 *  the field is completely full. */
function freeCellAt(point, opts) {
  const points = freeCells(opts);
  let best = null;
  for (let i = 0; i < points.length; i++) {
    const d = Math.hypot(points[i].x - point.x, points[i].y - point.y);
    if (!best || d < best.d) best = Object.assign({
      d
    }, points[i]);
  }
  return best;
}

/* Capitalized aliases so the helpers are reachable on the design-system
   namespace, which exposes capitalized exports only — the same pair HexCenter
   forms with hexCenter. */
function FreeCells(opts) {
  return freeCells(opts);
}
function FreeCellAt(point, opts) {
  return freeCellAt(point, opts);
}
const SnapField = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function SnapField({
  agents = [],
  size = 'md',
  gap = 2,
  width = 720,
  height = 380,
  snapTolerance = 34,
  proximityRange = 72,
  renderAgent,
  bonds,
  selectedId,
  selectedIds,
  onSelect,
  onSelectionChange,
  onChange,
  onSnapStateChange,
  onGroup,
  groupLabel = 'Group into Playbook',
  selectable = false,
  origin = {
    x: 40,
    y: 40
  },
  readOnly = false,
  className = '',
  style,
  ...rest
}, ref) {
  const [hexW, hexH] = __ds_scope.AGENT_SIZES[size] || __ds_scope.AGENT_SIZES.md;
  const api = __ds_scope.useGsap();
  const [dragId, setDragId] = React.useState(null);
  const [snapState, setSnapState] = React.useState('idle');
  const [marquee, setMarquee] = React.useState(null);
  /* Where the dragged Agent is right now, in lattice space. Only set while a
     drag is in flight, and only read by the bonds render prop. */
  const [dragAt, setDragAt] = React.useState(null);
  const nodes = React.useRef({});
  const guideRef = React.useRef(null);
  const fieldRef = React.useRef(null);
  /* The field's box converts pointer coordinates for the marquee, so the
     forwarded ref is merged rather than replacing it. */
  const setField = __ds_scope.useMergedRefs(ref, fieldRef);
  const multi = selectedIds || [];

  /* Draggable callbacks outlive a render, so everything they read goes through
     a ref rather than a closed-over prop. */
  const live = React.useRef({});
  live.current = {
    agents,
    origin,
    size,
    gap,
    width,
    height,
    snapTolerance,
    proximityRange,
    onChange,
    onSelect,
    onSnapStateChange
  };
  const stepX = hexW * 0.75 + gap;
  const stepY = hexH + gap;
  const at = React.useCallback((col, row) => {
    const {
      origin: o,
      size: s,
      gap: g
    } = live.current;
    const c = __ds_scope.HexCenter(col, row, s, g);
    return {
      x: o.x + c.x,
      y: o.y + c.y
    };
  }, []);

  /* Legal cells, derived from the field's own box. A cell is legal when the whole
     hexagon fits inside the field — this is what stops an Agent being dropped
     half off the edge, and it is why the candidate search has no magic numbers. */
  const bounds = React.useMemo(() => {
    const minCol = Math.ceil(-origin.x / stepX);
    const maxCol = Math.floor((width - hexW - origin.x) / stepX);
    const minRow = Math.ceil(-origin.y / stepY);
    const maxRow = Math.floor((height - hexH - origin.y) / stepY);
    return {
      minCol,
      maxCol,
      minRow,
      maxRow
    };
  }, [origin.x, origin.y, width, height, hexW, hexH, stepX, stepY]);
  const inBounds = React.useCallback((col, row) => {
    if (col < bounds.minCol || col > bounds.maxCol) return false;
    if (row < bounds.minRow) return false;
    /* Odd columns sit half a row lower, so they lose the last row. */
    const last = Math.abs(col % 2) ? bounds.maxRow - 1 : bounds.maxRow;
    return row <= last;
  }, [bounds]);

  /**
   * Every free lattice cell as a pixel point. Cells holding another Agent are
   * left out entirely, which is the guarantee that a snap can never overlap.
   * The Agent's own cell stays in — releasing where you started is a no-op, not
   * a rejection — which is what `exclude` does.
   */
  const freePoints = React.useCallback(selfId => {
    const l = live.current;
    return freeCells({
      agents: l.agents,
      size: l.size,
      gap: l.gap,
      origin: l.origin,
      width: l.width,
      height: l.height,
      exclude: selfId
    });
  }, []);
  const nearest = (points, px, py) => {
    let best = null;
    for (let i = 0; i < points.length; i++) {
      const d = Math.hypot(points[i].x - px, points[i].y - py);
      if (!best || d < best.d) best = {
        ...points[i],
        d
      };
    }
    return best;
  };
  const emit = React.useCallback(state => {
    setSnapState(was => was === state ? was : state);
    const fn = live.current.onSnapStateChange;
    if (fn) fn(state);
  }, []);

  /* Identity of the layout, not of the array — a parent re-render handing back an
     equivalent agents array must not tear down every Draggable. */
  const layoutKey = agents.map(a => a.id + ':' + a.col + ':' + a.row).join('|');

  /* Committing a move changes an Agent's left/top. Zeroing the transform in a
     layout effect — after the new left/top is in the DOM, before paint — is what
     keeps the commit from flashing. */
  React.useLayoutEffect(() => {
    if (!api) return;
    agents.forEach(a => {
      const el = nodes.current[a.id];
      if (el) api.gsap.set(el, {
        x: 0,
        y: 0
      });
    });
  }, [api, layoutKey]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (!api || readOnly) return undefined;
    const {
      gsap,
      Draggable
    } = api;
    const guide = guideRef.current;
    const instances = [];
    agents.forEach(agent => {
      const el = nodes.current[agent.id];
      if (!el) return;
      const home = at(agent.col, agent.row);
      let points = [];
      let target = null;

      /* Opacity is the whole language of the guide: it is always on-screen
         during a drag, because it is always where the Agent will land. */
      const GUIDE_ALPHA = {
        armed: 1,
        near: 0.7,
        far: 0.35
      };
      const showGuide = (cell, level) => {
        if (!guide) return;
        if (!cell) {
          gsap.set(guide, {
            autoAlpha: 0
          });
          return;
        }
        gsap.set(guide, {
          x: cell.x - hexW / 2,
          y: cell.y - hexH / 2,
          autoAlpha: GUIDE_ALPHA[level]
        });
      };
      const created = Draggable.create(el, {
        type: 'x,y',
        allowContextMenu: true,
        cursor: 'grab',
        activeCursor: 'grabbing',
        liveSnap: {
          points(point) {
            const cx = home.x + point.x;
            const cy = home.y + point.y;
            const cell = nearest(points, cx, cy);
            /* Tracked whether or not it is in range: this is where a release
               lands, so it is what the guide has to show. */
            target = cell;
            if (!cell) {
              showGuide(null);
              emit('dragging');
              return point;
            }
            const {
              snapTolerance: tol,
              proximityRange: near
            } = live.current;
            if (cell.d <= tol) {
              showGuide(cell, 'armed');
              emit('snapReady');
              /* Drift toward the slot. A hint that it is about to land there,
                 not the decision — the operator still chooses by releasing. */
              return {
                x: point.x + (cell.x - cx) * PULL,
                y: point.y + (cell.y - cy) * PULL
              };
            }
            showGuide(cell, cell.d <= near ? 'near' : 'far');
            emit(cell.d <= near ? 'proximity' : 'dragging');
            return point;
          }
        },
        onPress() {
          const select = live.current.onSelect;
          if (select) select(agent);
        },
        onDragStart() {
          /* Recomputed per drag: which cells are free depends on where every
             other Agent is right now. */
          points = freePoints(agent.id);
          target = null;
          setDragId(agent.id);
          setDragAt({
            id: agent.id,
            x: home.x,
            y: home.y
          });
          emit('dragging');
        },
        onDrag() {
          /* A bond anchored to the Agent's committed cell stays behind while the
             Agent moves, leaving a gold stub pointing at where it used to be.
             Publishing the live position lets the caller draw the bond to where
             the Agent actually is. */
          setDragAt({
            id: agent.id,
            x: home.x + this.x,
            y: home.y + this.y
          });
        },
        onRelease() {
          /* Fall back to a fresh lookup: liveSnap is not guaranteed to have run
             on the final frame of a very short drag. */
          const cell = target || nearest(points, home.x + this.x, home.y + this.y);
          target = null;
          showGuide(null);
          setDragId(null);
          setDragAt(null);
          emit('idle');
          const commit = live.current.onChange;
          if (!cell || !commit || cell.col === agent.col && cell.row === agent.row) {
            gsap.to(el, {
              x: 0,
              y: 0,
              duration: __ds_scope.GSAP_DURATION.standard,
              ease: __ds_scope.GSAP_EASE.magnetic
            });
            return;
          }
          /* Settle onto the slot with the transform, then commit. The layout
             effect re-homes the element to the same pixel, so nothing jumps. */
          gsap.to(el, {
            x: cell.x - home.x,
            y: cell.y - home.y,
            duration: __ds_scope.GSAP_DURATION.medium,
            ease: __ds_scope.GSAP_EASE.magnetic,
            onComplete() {
              commit(live.current.agents.map(a => a.id === agent.id ? {
                ...a,
                col: cell.col,
                row: cell.row
              } : a));
            }
          });
        }
      })[0];
      if (created) instances.push(created);
    });
    return () => instances.forEach(d => d.kill());
  }, [api, readOnly, layoutKey, hexW, hexH, at, freePoints, emit]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ------------------------------------------------------------ marquee */

  const marqueeFrom = React.useRef(null);
  const localPoint = e => {
    const box = fieldRef.current.getBoundingClientRect();
    return {
      x: e.clientX - box.left,
      y: e.clientY - box.top
    };
  };
  const rectOf = (a, b) => ({
    left: Math.min(a.x, b.x),
    top: Math.min(a.y, b.y),
    width: Math.abs(a.x - b.x),
    height: Math.abs(a.y - b.y)
  });
  const onFieldPointerDown = e => {
    if (!selectable || readOnly || e.button !== 0) return;
    /* Only a press on bare canvas starts a marquee; a press on an Agent is a drag. */
    if (e.target !== fieldRef.current) return;
    e.preventDefault();
    fieldRef.current.setPointerCapture(e.pointerId);
    marqueeFrom.current = localPoint(e);
    setMarquee({
      left: marqueeFrom.current.x,
      top: marqueeFrom.current.y,
      width: 0,
      height: 0
    });
    if (onSelectionChange) onSelectionChange([]);
  };
  const onFieldPointerMove = e => {
    if (!marqueeFrom.current) return;
    setMarquee(rectOf(marqueeFrom.current, localPoint(e)));
  };
  const onFieldPointerUp = e => {
    if (!marqueeFrom.current) return;
    const rect = rectOf(marqueeFrom.current, localPoint(e));
    marqueeFrom.current = null;
    setMarquee(null);
    if (!onSelectionChange) return;
    /* A hexagon counts as caught when its centre is inside the band — the same
       rule the lattice uses, so selection and snapping agree about where an
       Agent "is". */
    const hits = agents.filter(a => {
      const p = at(a.col, a.row);
      return p.x >= rect.left && p.x <= rect.left + rect.width && p.y >= rect.top && p.y <= rect.top + rect.height;
    }).map(a => a.id);
    onSelectionChange(hits);
  };

  /* Every Agent's position in lattice space — the space HexCenter returns and
     the bonds layer is offset into. The Agent being dragged reports where it is
     now, not where it was committed. */
  const positions = React.useMemo(() => {
    const map = {};
    agents.forEach(a => {
      const p = at(a.col, a.row);
      map[a.id] = {
        x: p.x - origin.x,
        y: p.y - origin.y
      };
    });
    if (dragAt && map[dragAt.id]) {
      map[dragAt.id] = {
        x: dragAt.x - origin.x,
        y: dragAt.y - origin.y
      };
    }
    return map;
  }, [agents, dragAt, at, origin.x, origin.y]);

  /* `bonds` may be a node (fixed) or a function of the live positions. The
     function form is what keeps a bond attached to a moving Agent. */
  const bondNodes = typeof bonds === 'function' ? bonds(positions, {
    draggingId: dragId
  }) : bonds;

  /* Centroid of the selection, for placing the floating group action. */
  const groupAnchor = React.useMemo(() => {
    if (multi.length < 2) return null;
    const picked = agents.filter(a => multi.indexOf(a.id) !== -1);
    if (!picked.length) return null;
    const pts = picked.map(a => at(a.col, a.row));
    return {
      x: pts.reduce((s, p) => s + p.x, 0) / pts.length,
      y: Math.min.apply(null, pts.map(p => p.y)) - hexH / 2 - 12
    };
  }, [multi, agents, at, hexH]);

  /* Outline enclosing the selection — the "outline into a Playbook" preview. */
  const groupOutline = React.useMemo(() => {
    if (multi.length < 2) return null;
    const picked = agents.filter(a => multi.indexOf(a.id) !== -1);
    if (!picked.length) return null;
    const pts = picked.map(a => at(a.col, a.row));
    const pad = 14;
    /* Deeper at the bottom: the Agent name sits below the hexagon, and an outline
       that cuts through the labels of the very Agents it is enclosing reads as a
       clipping bug rather than a grouping. */
    const padBottom = 36;
    const left = Math.min.apply(null, pts.map(p => p.x)) - hexW / 2 - pad;
    const top = Math.min.apply(null, pts.map(p => p.y)) - hexH / 2 - pad;
    return {
      left,
      top,
      width: Math.max.apply(null, pts.map(p => p.x)) + hexW / 2 + pad - left,
      height: Math.max.apply(null, pts.map(p => p.y)) + hexH / 2 + padBottom - top
    };
  }, [multi, agents, at, hexW, hexH]);

  /* ----------------------------------------------------------- keyboard */

  const onKeyDown = a => e => {
    if (readOnly || !onChange) return;
    const step = {
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      ArrowUp: [0, -1],
      ArrowDown: [0, 1]
    }[e.key];
    if (!step) return;
    e.preventDefault();
    const col = a.col + step[0];
    const row = a.row + step[1];
    if (!inBounds(col, row)) return;
    if (agents.some(x => x.id !== a.id && x.col === col && x.row === row)) return;
    onChange(agents.map(x => x.id === a.id ? {
      ...x,
      col,
      row
    } : x));
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: setField,
    className: ['lamp-snapfield', dragId && 'lamp-snapfield--dragging', readOnly && 'lamp-snapfield--readonly', snapState === 'proximity' && 'lamp-snapfield--proximity', snapState === 'snapReady' && 'lamp-snapfield--ready', className].filter(Boolean).join(' '),
    style: {
      position: 'relative',
      width,
      height,
      touchAction: 'none',
      ...style
    },
    onPointerDown: onFieldPointerDown,
    onPointerMove: onFieldPointerMove,
    onPointerUp: onFieldPointerUp,
    onPointerCancel: onFieldPointerUp
  }, rest), bondNodes ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-snapfield__bonds",
    style: {
      position: 'absolute',
      left: origin.x,
      top: origin.y,
      pointerEvents: 'none'
    }
  }, bondNodes) : null, groupOutline ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-snapfield__outline",
    style: groupOutline
  }) : null, /*#__PURE__*/React.createElement("div", {
    ref: guideRef,
    className: "lamp-snapfield__guide",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: hexW,
      height: hexH,
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SnapGuide, {
    shape: "hex",
    rect: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  })), agents.map(a => {
    const isDrag = dragId === a.id;
    const p = at(a.col, a.row);
    const state = isDrag && snapState !== 'idle' ? snapState : a.state;
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      ref: el => {
        if (el) nodes.current[a.id] = el;else delete nodes.current[a.id];
      },
      className: "lamp-snapfield__slot",
      style: {
        position: 'absolute',
        left: p.x - hexW / 2,
        top: p.y - hexH / 2,
        width: hexW,
        height: hexH,
        zIndex: isDrag ? 5 : 1
      },
      onKeyDown: onKeyDown(a)
    }, /*#__PURE__*/React.createElement("div", {
      className: "lamp-snapfield__cell"
    }, renderAgent(Object.assign({}, a, {
      state
    }), {
      dragging: isDrag,
      proximity: isDrag && snapState === 'proximity',
      snapReady: isDrag && snapState === 'snapReady',
      selected: selectedId === a.id,
      multiSelected: multi.indexOf(a.id) !== -1
    })));
  }), marquee ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-canvas__marquee",
    style: {
      position: 'absolute',
      ...marquee
    }
  }) : null, groupAnchor && onGroup ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-snapfield__group",
    style: {
      left: groupAnchor.x,
      top: groupAnchor.y
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lamp-snapfield__group-btn",
    onClick: () => onGroup(multi)
  }, groupLabel, /*#__PURE__*/React.createElement("span", {
    className: "lamp-snapfield__group-count"
  }, multi.length))) : null);
}), {
  displayName: 'SnapField'
});
Object.assign(__ds_scope, { freeCells, freeCellAt, FreeCells, FreeCellAt, SnapField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/canvas/SnapField.jsx", error: String((e && e.message) || e) }); }

// components/chat/ChatMessage.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const HEX_POINTS = '25,0 75,0 100,50 75,100 25,100 0,50';

/** Hexagonal Agent identity — the chat's signature mark. */
const ChatAvatar = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ChatAvatar({
  role = 'agent',
  initials,
  glyph,
  state = 'idle',
  size = 26
}, ref) {
  if (role === 'user') {
    return /*#__PURE__*/React.createElement("span", {
      className: "lamp-cm__avatar lamp-cm__avatar--user",
      style: {
        width: size,
        height: size
      }
    }, initials || 'You'.slice(0, 2));
  }
  if (role === 'system' || role === 'tool') {
    return /*#__PURE__*/React.createElement("span", {
      className: 'lamp-cm__avatar lamp-cm__avatar--' + role,
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: glyph || (role === 'tool' ? 'square' : 'info'),
      size: 13
    }));
  }
  const stroke = state === 'acting' ? 'var(--gold-500)' : state === 'failed' ? 'var(--status-danger)' : 'var(--border-strong)';
  const fill = state === 'acting' ? 'var(--gold-100)' : 'var(--surface-secondary)';
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "lamp-cm__avatar",
    style: {
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    className: "lamp-cm__hex",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: HEX_POINTS,
    fill: fill,
    stroke: stroke,
    strokeWidth: state === 'acting' ? 6 : 4,
    vectorEffect: "non-scaling-stroke"
  })), glyph ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: 12,
    className: "lamp-cm__ini"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "lamp-cm__ini"
  }, initials || 'AG'));
}), {
  displayName: 'ChatAvatar'
});

/** Visible work: what the Agent called, read and used — never hidden behind a spinner. */
const ChatActivity = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ChatActivity({
  items = [],
  max = 4,
  onSelect
}, ref) {
  const [open, setOpen] = React.useState(false);
  const shown = open ? items : items.slice(0, max);
  const rest = items.length - shown.length;
  const glyph = k => k === 'tool' ? 'square' : k === 'memory' ? 'database' : k === 'skill' ? 'flare' : k === 'human' ? 'how_to_reg' : 'bolt';
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "lamp-act"
  }, shown.map((a, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: ['lamp-act__chip', 'lamp-act__chip--' + (a.kind || 'tool'), a.state === 'running' && 'lamp-act__chip--running', a.state === 'failed' && 'lamp-act__chip--failed'].filter(Boolean).join(' '),
    title: a.detail,
    onClick: onSelect ? () => onSelect(a) : undefined,
    style: onSelect ? {
      cursor: 'pointer'
    } : undefined
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: a.glyph || glyph(a.kind),
    size: 11
  }), a.label, a.duration ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-act__dur"
  }, a.duration) : null)), rest > 0 ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lamp-act__more",
    onClick: () => setOpen(true)
  }, '+' + rest + ' more') : null, open && items.length > max ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lamp-act__more",
    onClick: () => setOpen(false)
  }, "Show less") : null);
}), {
  displayName: 'ChatActivity'
});

/** Provenance you can open — replaces "trust me" with "here's where it came from". */
const ChatCitation = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ChatCitation({
  index,
  source,
  scope,
  onClick
}, ref) {
  return /*#__PURE__*/React.createElement("button", {
    ref: ref,
    type: "button",
    className: "lamp-cite",
    onClick: onClick,
    title: [source, scope].filter(Boolean).join(' · '),
    "aria-label": 'Evidence ' + index + (source ? ': ' + source : '')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "fact_check",
    size: 9
  }), index);
}), {
  displayName: 'ChatCitation'
});
const ChatDayDivider = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ChatDayDivider({
  label
}, ref) {
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "lamp-chat__day"
  }, /*#__PURE__*/React.createElement("span", null, label));
}), {
  displayName: 'ChatDayDivider'
});
const ChatMessage = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ChatMessage({
  role = 'agent',
  author,
  roleLabel,
  initials,
  glyph,
  timestamp,
  grouped = false,
  state = 'idle',
  status,
  streaming = false,
  activity = [],
  citations = [],
  attachment,
  actions = true,
  onRetry,
  onCopy,
  onInspect,
  children,
  className = '',
  ...rest
}, ref) {
  const failed = state === 'failed' || status === 'failed';
  return /*#__PURE__*/React.createElement("article", _extends({
    ref: ref,
    className: ['lamp-cm', 'lamp-cm--' + role, grouped && 'lamp-cm--grouped', state === 'acting' && 'lamp-cm--acting', failed && 'lamp-cm--failed', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement(ChatAvatar, {
    role: role,
    initials: initials,
    glyph: glyph,
    state: state
  }), /*#__PURE__*/React.createElement("div", {
    className: "lamp-cm__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lamp-cm__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-cm__who"
  }, author || (role === 'user' ? 'You' : role === 'tool' ? 'Tool' : role === 'system' ? 'LAMP' : 'Agent')), roleLabel ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-cm__role"
  }, roleLabel) : null, timestamp ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-cm__time"
  }, timestamp) : null), activity.length ? /*#__PURE__*/React.createElement(ChatActivity, {
    items: activity
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-cm__text"
  }, children, citations.length ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 2
    }
  }, citations.map((c, i) => /*#__PURE__*/React.createElement(ChatCitation, {
    key: i,
    index: c.index || i + 1,
    source: c.source,
    scope: c.scope,
    onClick: c.onClick
  }))) : null, streaming ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-cm__caret"
  }) : null), attachment ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-cm__attach"
  }, attachment) : null, status && status !== 'failed' ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-cm__status"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: status === 'sending' ? 'schedule' : 'check',
    size: 11
  }), status === 'sending' ? 'Sending' : status) : null, failed ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-cm__status lamp-cm__status--failed"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "error",
    size: 11
  }), "Not delivered", onRetry ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lamp-act__more",
    onClick: onRetry
  }, "Retry") : null) : null), actions ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-cm__tools"
  }, onInspect ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "open_in_new",
    label: "Open in Inspector",
    size: "xs",
    onClick: onInspect
  }) : null, onCopy ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "content_copy",
    label: "Copy message",
    size: "xs",
    onClick: onCopy
  }) : null) : null);
}), {
  displayName: 'ChatMessage'
});
Object.assign(__ds_scope, { ChatAvatar, ChatActivity, ChatCitation, ChatDayDivider, ChatMessage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ChatMessage.jsx", error: String((e && e.message) || e) }); }

// components/chat/AgentChat.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/** What is happening right now, in words, with a way to stop it. */
const ChatStatus = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ChatStatus({
  state = 'idle',
  author,
  action,
  detail,
  tokens,
  onStop,
  onInspect
}, ref) {
  if (state === 'idle') {
    return /*#__PURE__*/React.createElement("div", {
      className: "lamp-chat__status lamp-chat__status--idle"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check_circle",
      size: 13
    }), detail || 'Up to date. Nothing is running.');
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "lamp-chat__status",
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-chat__status-hex"
  }, /*#__PURE__*/React.createElement(__ds_scope.ChatAvatar, {
    role: "agent",
    glyph: "bolt",
    state: "acting",
    size: 16
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, author || 'Agent'), " ", action || 'is working'), /*#__PURE__*/React.createElement("span", {
    className: "lamp-chat__dots",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), detail ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, detail) : null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-chat__status-right"
  }, tokens ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-tertiary)'
    }
  }, tokens) : null, onInspect ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "xs",
    variant: "quiet",
    onClick: onInspect
  }, "Open run") : null, onStop ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "xs",
    variant: "secondary",
    icon: "stop_circle",
    onClick: onStop
  }, "Stop") : null));
}), {
  displayName: 'ChatStatus'
});
const AgentChat = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function AgentChat({
  title,
  scope,
  scopeGlyph = 'hive',
  environment,
  crew = [],
  actions,
  status,
  composer,
  flush = false,
  autoScroll = true,
  children,
  className = '',
  ...rest
}, ref) {
  const threadRef = React.useRef(null);
  React.useEffect(() => {
    const el = threadRef.current;
    if (autoScroll && el) el.scrollTop = el.scrollHeight;
  }, [children, autoScroll]);
  return /*#__PURE__*/React.createElement("section", _extends({
    ref: ref,
    className: ['lamp-chat', flush && 'lamp-chat--flush', className].filter(Boolean).join(' '),
    "aria-label": title || 'Conversation'
  }, rest), /*#__PURE__*/React.createElement("header", {
    className: "lamp-chat__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-chat__id"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-chat__title"
  }, title), scope ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-chat__scope"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: scopeGlyph,
    size: 11
  }), /*#__PURE__*/React.createElement("b", null, scope), environment ? /*#__PURE__*/React.createElement(React.Fragment, null, "\xB7 ", environment) : null) : null), crew.length ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-chat__crew",
    title: crew.map(c => c.name).join(', ')
  }, crew.slice(0, 4).map(c => /*#__PURE__*/React.createElement("span", {
    key: c.name
  }, /*#__PURE__*/React.createElement(__ds_scope.ChatAvatar, {
    role: c.role || 'agent',
    initials: c.initials,
    glyph: c.glyph,
    state: c.state,
    size: 22
  }))), crew.length > 4 ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-tertiary)',
      marginLeft: 6
    }
  }, "+", crew.length - 4) : null) : null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-chat__actions"
  }, actions, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "more_horiz",
    label: "Conversation actions",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lamp-chat__thread",
    ref: threadRef,
    role: "log",
    "aria-live": "polite"
  }, children), status, composer);
}), {
  displayName: 'AgentChat'
});
Object.assign(__ds_scope, { ChatStatus, AgentChat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/AgentChat.jsx", error: String((e && e.message) || e) }); }

// components/core/Kbd.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Kbd = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Kbd({
  keys,
  children,
  className = '',
  ...rest
}, ref) {
  const list = keys || (typeof children === 'string' ? children.split('+') : null);
  if (!list) return /*#__PURE__*/React.createElement("kbd", _extends({
    className: 'lamp-kbd ' + className
  }, rest), children);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    style: {
      display: 'inline-flex',
      gap: 3,
      alignItems: 'center'
    }
  }, rest), list.map((k, i) => /*#__PURE__*/React.createElement("kbd", {
    key: i,
    className: 'lamp-kbd ' + className
  }, k)));
}), {
  displayName: 'Kbd'
});
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/chat/ChatComposer.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/** Quick replies keep the common answer one tap away. */
const ChatQuickReplies = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ChatQuickReplies({
  options = [],
  onSelect
}, ref) {
  if (!options.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "lamp-cc__quick"
  }, options.map(o => {
    const label = typeof o === 'string' ? o : o.label;
    const tone = typeof o === 'object' && o.tone;
    return /*#__PURE__*/React.createElement(__ds_scope.Button, {
      key: label,
      size: "sm",
      variant: tone === 'primary' ? 'primary' : tone === 'danger' ? 'danger-quiet' : 'secondary',
      icon: typeof o === 'object' ? o.icon : undefined,
      onClick: () => onSelect && onSelect(typeof o === 'string' ? {
        label: o
      } : o)
    }, label);
  }));
}), {
  displayName: 'ChatQuickReplies'
});
const ChatComposer = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ChatComposer({
  value = '',
  onChange,
  onSend,
  onAttach,
  onVoice,
  onSlash,
  placeholder = 'Ask, instruct, or answer',
  scope,
  scopeGlyph = 'hive',
  quickReplies = [],
  disabled = false,
  sending = false,
  hint = true,
  className = '',
  ...rest
}, ref) {
  const [focus, setFocus] = React.useState(false);
  const send = () => {
    if (!disabled && value.trim()) onSend && onSend(value);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-cc', disabled && 'lamp-cc--disabled', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement(ChatQuickReplies, {
    options: quickReplies,
    onSelect: o => o.onSelect ? o.onSelect() : onSend && onSend(o.label)
  }), /*#__PURE__*/React.createElement("div", {
    className: "lamp-cc__box"
  }, /*#__PURE__*/React.createElement("div", {
    className: ['lamp-cc__field', focus && 'lamp-cc__field--focus'].filter(Boolean).join(' ')
  }, scope ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-cc__scope"
  }, "Talking to", /*#__PURE__*/React.createElement("span", {
    className: "lamp-cc__scope-pill"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: scopeGlyph,
    size: 11
  }), scope)) : null, /*#__PURE__*/React.createElement("textarea", {
    className: "lamp-cc__input",
    rows: 1,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: e => onChange && onChange(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "lamp-cc__row"
  }, onAttach ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "attach_file",
    label: "Attach a file",
    size: "sm",
    onClick: onAttach
  }) : null, onSlash ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "terminal",
    label: "Commands",
    size: "sm",
    onClick: onSlash
  }) : null, onVoice ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "mic",
    label: "Record a voice message",
    size: "sm",
    onClick: onVoice
  }) : null, hint ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-cc__hint"
  }, /*#__PURE__*/React.createElement(__ds_scope.Kbd, null, "Enter"), " to send", /*#__PURE__*/React.createElement(__ds_scope.Kbd, {
    keys: ['Shift', 'Enter']
  }), " for a new line") : null)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    className: "lamp-cc__send",
    size: "md",
    variant: "primary",
    icon: "send",
    loading: sending,
    disabled: disabled || !value.trim(),
    onClick: send
  }, "Send")));
}), {
  displayName: 'ChatComposer'
});
Object.assign(__ds_scope, { ChatQuickReplies, ChatComposer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ChatComposer.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Card = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Card({
  padding = 'md',
  raised = false,
  interactive = false,
  selected = false,
  tone = 'default',
  header,
  footer,
  title,
  actions,
  children,
  className = '',
  ...rest
}, ref) {
  const structured = header || footer || title || actions;
  const cls = ['lamp-card', !structured && padding === 'md' && 'lamp-card--pad', !structured && padding === 'sm' && 'lamp-card--pad-sm', raised && 'lamp-card--raised', interactive && 'lamp-card--interactive', selected && 'lamp-card--selected', tone === 'danger' && 'lamp-card--danger', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: cls
  }, rest), structured && (header || title || actions) ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-card__head"
  }, header || /*#__PURE__*/React.createElement("h3", {
    className: "lamp-card__title"
  }, title), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, actions) : null) : null, structured ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-card__body"
  }, children) : children, footer ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-card__foot"
  }, footer) : null);
}), {
  displayName: 'Card'
});
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/EnvironmentPill.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const ENV = {
  draft: {
    icon: 'edit',
    label: 'Draft'
  },
  simulation: {
    icon: 'science',
    label: 'Simulation'
  },
  live: {
    icon: 'bolt',
    label: 'Live'
  },
  paused: {
    icon: 'pause',
    label: 'Paused'
  },
  killed: {
    icon: 'dangerous',
    label: 'Emergency stopped'
  }
};
const EnvironmentPill = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function EnvironmentPill({
  environment = 'draft',
  label,
  scope,
  className = '',
  ...rest
}, ref) {
  const e = ENV[environment] || ENV.draft;
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: ['lamp-env', 'lamp-env--' + environment, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: e.icon,
    size: 12
  }), label || e.label, scope ? /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7,
      fontWeight: 500,
      letterSpacing: 0,
      textTransform: 'none'
    }
  }, scope) : null);
}), {
  displayName: 'EnvironmentPill'
});
Object.assign(__ds_scope, { EnvironmentPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EnvironmentPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Panel.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Panel = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Panel({
  title,
  actions,
  flush = false,
  width,
  children,
  className = '',
  style,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("section", _extends({
    ref: ref,
    className: ['lamp-panel', flush && 'lamp-panel--flush', className].filter(Boolean).join(' '),
    style: {
      width,
      ...style
    }
  }, rest), title || actions ? /*#__PURE__*/React.createElement("header", {
    className: "lamp-panel__head"
  }, title ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-panel__title"
  }, title) : null, actions ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-panel__actions"
  }, actions) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-panel__body"
  }, children));
}), {
  displayName: 'Panel'
});
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Panel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Tooltip = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Tooltip({
  content,
  shortcut,
  rich = false,
  children,
  ...rest
}, ref) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: ['lamp-tip', open && 'lamp-tip--open'].filter(Boolean).join(' '),
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: ['lamp-tip__pop', rich && 'lamp-tip__pop--rich'].filter(Boolean).join(' ')
  }, content, shortcut ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-tip__kbd"
  }, shortcut) : null));
}), {
  displayName: 'Tooltip'
});
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/DashboardCard.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const DashboardCard = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function DashboardCard({
  title,
  description,
  actions,
  footer,
  raised = false,
  flush = false,
  span,
  children,
  className = '',
  style,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("section", _extends({
    ref: ref,
    className: ['lamp-dcard', raised && 'lamp-dcard--raised', className].filter(Boolean).join(' '),
    style: span ? {
      gridColumn: 'span ' + span,
      ...style
    } : style
  }, rest), title || actions ? /*#__PURE__*/React.createElement("header", {
    className: "lamp-dcard__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lamp-dcard__titles"
  }, title ? /*#__PURE__*/React.createElement("h3", {
    className: "lamp-dcard__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "lamp-dcard__desc"
  }, description) : null), actions ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-dcard__actions"
  }, actions) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: ['lamp-dcard__content', flush && 'lamp-dcard__content--flush'].filter(Boolean).join(' ')
  }, children), footer ? /*#__PURE__*/React.createElement("footer", {
    className: "lamp-dcard__foot"
  }, footer) : null);
}), {
  displayName: 'DashboardCard'
});
const DashboardGrid = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function DashboardGrid({
  columns = 2,
  children,
  className = '',
  style,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-grid', 'lamp-grid--' + columns, className].filter(Boolean).join(' '),
    style: style
  }, rest), children);
}), {
  displayName: 'DashboardGrid'
});
const StatGrid = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function StatGrid({
  children,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-grid', 'lamp-grid--stats', className].filter(Boolean).join(' ')
  }, rest), children);
}), {
  displayName: 'StatGrid'
});
Object.assign(__ds_scope, { DashboardCard, DashboardGrid, StatGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/DashboardCard.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/PageHeader.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const PageHeader = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function PageHeader({
  title,
  description,
  meta,
  actions,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("header", _extends({
    ref: ref,
    className: 'lamp-pagehead ' + className
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-pagehead__titles"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "lamp-pagehead__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "lamp-pagehead__desc"
  }, description) : null, meta ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-pagehead__meta"
  }, meta) : null), actions ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-pagehead__actions"
  }, actions) : null);
}), {
  displayName: 'PageHeader'
});
const DashboardPage = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function DashboardPage({
  header,
  toolbar,
  flush = false,
  children,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-page', flush && 'lamp-page--flush', className].filter(Boolean).join(' ')
  }, rest), header, toolbar, children);
}), {
  displayName: 'DashboardPage'
});
const SectionHeader = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function SectionHeader({
  title,
  actions,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-section ' + className
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lamp-section__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "lamp-section__rule"
  }), actions ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-section__actions"
  }, actions) : null);
}), {
  displayName: 'SectionHeader'
});
Object.assign(__ds_scope, { PageHeader, DashboardPage, SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/data/ChartFrame.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const DATAVIZ = ['var(--dataviz-1)', 'var(--dataviz-2)', 'var(--dataviz-3)', 'var(--dataviz-4)', 'var(--dataviz-5)', 'var(--dataviz-6)', 'var(--dataviz-7)', 'var(--dataviz-8)'];
const seriesColor = i => DATAVIZ[i % DATAVIZ.length];
const ChartLegend = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ChartLegend({
  items = [],
  variant = 'swatch',
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-chart__legend ' + className
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    className: "lamp-chart__legend-item",
    key: it.label
  }, /*#__PURE__*/React.createElement("span", {
    className: 'lamp-chart__swatch' + (variant === 'line' ? ' lamp-chart__swatch--line' : '') + (it.dashed ? ' lamp-chart__swatch--dashed' : ''),
    style: it.dashed ? {
      color: it.color || seriesColor(i),
      background: 'transparent'
    } : {
      background: it.color || seriesColor(i)
    }
  }), it.label, it.value != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-primary)'
    }
  }, it.value) : null)));
}), {
  displayName: 'ChartLegend'
});
const ChartFrame = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ChartFrame({
  title,
  subtitle,
  actions,
  legend,
  legendVariant = 'swatch',
  state = 'ready',
  emptyLabel = 'No data yet',
  errorLabel = 'Could not load this chart',
  footnote,
  flush = false,
  height,
  children,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    ref: ref,
    className: ['lamp-chart', flush && 'lamp-chart--flush', className].filter(Boolean).join(' '),
    style: {
      margin: 0
    }
  }, rest), title || actions ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-chart__head"
  }, /*#__PURE__*/React.createElement("figcaption", {
    className: "lamp-chart__titles"
  }, title ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-chart__title"
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-chart__sub"
  }, subtitle) : null), actions ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-chart__actions"
  }, actions) : null) : null, legend ? /*#__PURE__*/React.createElement(ChartLegend, {
    items: legend,
    variant: legendVariant
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-chart__body",
    style: height ? {
      height
    } : undefined
  }, state === 'ready' ? children : null, state === 'loading' ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-chart__state"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "progress_activity",
    size: 16
  }), "Loading") : null, state === 'empty' ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-chart__state"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bar_chart",
    size: 18
  }), emptyLabel) : null, state === 'error' ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-chart__state",
    style: {
      color: 'var(--status-danger-text)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "warning",
    size: 16
  }), errorLabel) : null), footnote ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-chart__foot"
  }, footnote) : null);
}), {
  displayName: 'ChartFrame'
});
const ChartTooltip = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ChartTooltip({
  x,
  y,
  title,
  rows = [],
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: "lamp-chart__tip",
    style: {
      left: x,
      top: y
    }
  }, rest), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      marginBottom: 4,
      color: 'var(--text-primary)'
    }
  }, title) : null, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "lamp-chart__tip-row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-chart__swatch",
    style: {
      background: r.color || seriesColor(i)
    }
  }), r.label, /*#__PURE__*/React.createElement("span", {
    className: "lamp-chart__tip-val"
  }, r.value))));
}), {
  displayName: 'ChartTooltip'
});

/* Reachable from the namespace as ChartFrame.seriesColor. */
ChartFrame.seriesColor = seriesColor;
ChartFrame.palette = DATAVIZ;
Object.assign(__ds_scope, { DATAVIZ, seriesColor, ChartLegend, ChartFrame, ChartTooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ChartFrame.jsx", error: String((e && e.message) || e) }); }

// components/data/BarChart.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const niceTick = (v, max) => {
  if (max >= 1000) return Math.round(v / 100) * 100 >= 1000 ? Math.round(v / 100) / 10 + 'k' : String(Math.round(v));
  if (max >= 10) return String(Math.round(v));
  if (max >= 1) return (Math.round(v * 10) / 10).toFixed(1);
  return (Math.round(v * 100) / 100).toFixed(2);
};

/* Vertical / horizontal / stacked / 100% stacked bars and histograms. Production renderer: Recharts. */
const BarChart = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function BarChart({
  series = [],
  labels = [],
  width = 640,
  height = 180,
  orientation = 'vertical',
  stacked = false,
  normalized = false,
  yMax,
  showGrid = true,
  showAxis = true,
  showValues = false,
  barGap = 4,
  pad,
  format,
  className = '',
  ...rest
}, ref) {
  const p = pad || (orientation === 'horizontal' ? {
    l: 104,
    r: 34,
    t: 4,
    b: 18
  } : {
    l: 42,
    r: 10,
    t: 8,
    b: 20
  });
  const n = labels.length || Math.max.apply(null, series.map(s => s.data.length).concat([1]));
  const totals = Array.from({
    length: n
  }, (_, i) => series.reduce((a, s) => a + (s.data[i] || 0), 0));
  const flat = series.reduce((a, s) => a.concat(s.data), []);
  const max = normalized ? 1 : yMax != null ? yMax : Math.max.apply(null, (stacked ? totals : flat).concat([1]));
  const iw = width - p.l - p.r;
  const ih = height - p.t - p.b;
  const groupSize = (orientation === 'vertical' ? iw : ih) / n;
  const band = groupSize - barGap;
  const thickness = stacked || series.length === 1 ? band : band / series.length;
  const scale = v => (normalized ? v : v / max) * (orientation === 'vertical' ? ih : iw);
  const ticks = Array.from({
    length: 5
  }, (_, i) => max / 4 * i);
  const fmt = format || (v => niceTick(v, max));
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    width: "100%",
    height: height,
    viewBox: '0 0 ' + width + ' ' + height,
    role: "img",
    className: className,
    preserveAspectRatio: "none"
  }, rest), showGrid ? /*#__PURE__*/React.createElement("g", {
    className: "lamp-chart__grid"
  }, ticks.map((t, i) => orientation === 'vertical' ? /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: p.l,
    x2: width - p.r,
    y1: p.t + ih - scale(t),
    y2: p.t + ih - scale(t)
  }) : /*#__PURE__*/React.createElement("line", {
    key: i,
    y1: p.t,
    y2: p.t + ih,
    x1: p.l + scale(t),
    x2: p.l + scale(t)
  }))) : null, showAxis ? /*#__PURE__*/React.createElement("g", {
    className: "lamp-chart__axis"
  }, orientation === 'vertical' ? ticks.map((t, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: p.l - 6,
    y: p.t + ih - scale(t) + 4,
    textAnchor: "end"
  }, fmt(t))) : labels.map((l, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: p.l - 8,
    y: p.t + i * groupSize + band / 2 + 4,
    textAnchor: "end"
  }, l)), orientation === 'vertical' ? labels.map((l, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: p.l + i * groupSize + band / 2,
    y: height - 5,
    textAnchor: "middle"
  }, l)) : null) : null, series.map((s, si) => {
    const color = s.color || __ds_scope.seriesColor(si);
    return /*#__PURE__*/React.createElement("g", {
      key: s.label || si
    }, Array.from({
      length: n
    }, (_, i) => {
      const raw = s.data[i] || 0;
      const v = normalized ? totals[i] ? raw / totals[i] : 0 : raw;
      const prior = stacked ? series.slice(0, si).reduce((a, q) => a + (normalized ? totals[i] ? (q.data[i] || 0) / totals[i] : 0 : q.data[i] || 0), 0) : 0;
      const len = scale(v);
      if (orientation === 'vertical') {
        const bx = p.l + i * groupSize + (stacked ? 0 : si * thickness);
        const by = p.t + ih - len - scale(prior);
        return /*#__PURE__*/React.createElement("rect", {
          key: i,
          x: bx,
          y: by,
          width: Math.max(1, thickness),
          height: Math.max(0, len),
          fill: color,
          rx: 1.5
        });
      }
      const by = p.t + i * groupSize + (stacked ? 0 : si * thickness);
      const bx = p.l + scale(prior);
      return /*#__PURE__*/React.createElement("g", {
        key: i
      }, /*#__PURE__*/React.createElement("rect", {
        x: bx,
        y: by,
        width: Math.max(0, len),
        height: Math.max(1, thickness),
        fill: color,
        rx: 1.5
      }), showValues && !stacked ? /*#__PURE__*/React.createElement("text", {
        className: "lamp-chart__axis",
        x: bx + len + 6,
        y: by + thickness / 2 + 4,
        style: {
          fill: 'var(--chart-axis-text)',
          fontSize: 11
        }
      }, fmt(raw)) : null);
    }));
  }));
}), {
  displayName: 'BarChart'
});
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/StackedBar.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* A single row of composition — "what is this made of", not "how did it change".

   Distinct from <BarChart stacked>, which is a categorical chart with axes and
   ticks across many groups. StackedBar is one bar: context windows, cost split
   by Agent, authority split by scope, a Playbook's step outcomes. It fits on an
   inspector row and inside a table cell, where a chart would not.

   Values are absolute; the bar normalizes them. Segments below `minLabel` of the
   total are still drawn but never labelled inline, because a 3px segment with a
   number on it is noise. */

const StackedBar = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function StackedBar({
  segments = [],
  total,
  unit,
  height = 8,
  legend = false,
  inlineValues = false,
  showTotal = false,
  minLabel = 0.08,
  format,
  label,
  className = '',
  ...rest
}, ref) {
  const sum = total != null ? total : segments.reduce((a, s) => a + (s.value || 0), 0);
  const fmt = format || (v => typeof v === 'number' ? v.toLocaleString() : v);
  const colorOf = (s, i) => s.color || __ds_scope.seriesColor(i);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-sbar ' + className
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-sbar__label"
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-sbar__track",
    style: {
      height
    },
    role: "img",
    "aria-label": (label ? label + ': ' : '') + segments.map(s => s.label + ' ' + fmt(s.value)).join(', ') + (sum ? '. Total ' + fmt(sum) + (unit ? ' ' + unit : '') : '')
  }, segments.map((s, i) => {
    const share = sum ? (s.value || 0) / sum : 0;
    return /*#__PURE__*/React.createElement("span", {
      key: s.key || s.label || i,
      className: 'lamp-sbar__seg' + (s.muted ? ' lamp-sbar__seg--muted' : ''),
      title: s.label + ': ' + fmt(s.value) + (unit ? ' ' + unit : ''),
      style: {
        width: share * 100 + '%',
        background: colorOf(s, i)
      }
    }, inlineValues && share >= minLabel ? /*#__PURE__*/React.createElement("span", {
      className: "lamp-sbar__inline"
    }, fmt(s.value)) : null);
  })), legend ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-sbar__legend"
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("span", {
    className: "lamp-sbar__row",
    key: s.key || s.label || i
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-sbar__swatch",
    style: {
      background: colorOf(s, i)
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "lamp-sbar__name"
  }, s.label), /*#__PURE__*/React.createElement("span", {
    className: "lamp-sbar__val"
  }, fmt(s.value)))), showTotal ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-sbar__total"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-sbar__name"
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "lamp-sbar__val"
  }, fmt(sum), unit ? ' ' + unit : '')) : null) : null);
}), {
  displayName: 'StackedBar'
});
Object.assign(__ds_scope, { StackedBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StackedBar.jsx", error: String((e && e.message) || e) }); }

// components/data/ContextBreakdown.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* What went into the context window for a run, by memory scope.

   The brief's shape, exactly:

     Context
     Agent working memory     618
     Playbook memory          402
     Genie memory             771
     LAMP memory              340
     Retrieved evidence     1,281
     ─────────────────────────────
     Total                  3,412 tokens

   Rows keep the scope order narrow → broad, so the reader sees inheritance in
   the same direction everywhere in the product. The cache row is a saving, not a
   cost, so it sits below the total and is never stacked into the bar.

   This is an efficiency read-out, not a financial dashboard: no currency framing,
   no trend arrows, no sparkline. Cost belongs on RunSummary. */

const SCOPE_ORDER = ['agent', 'playbook', 'genie', 'lamp', 'evidence'];
const DEFAULT_LABELS = {
  agent: 'Agent working memory',
  playbook: 'Playbook memory',
  genie: 'Genie memory',
  lamp: 'LAMP memory',
  evidence: 'Retrieved evidence',
  prompt: 'Instructions',
  completion: 'Completion'
};
const SCOPE_COLOR = {
  agent: 'var(--memory-accent)',
  playbook: 'var(--purple-400)',
  genie: 'var(--steel-500)',
  lamp: 'var(--slate-500)',
  evidence: 'var(--gold-500)',
  prompt: 'var(--dataviz-neutral-3)',
  completion: 'var(--dataviz-neutral-4)'
};
const ContextBreakdown = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ContextBreakdown({
  segments,
  context,
  unit = 'tokens',
  cached,
  limit,
  showBar = true,
  title = 'Context',
  className = '',
  ...rest
}, ref) {
  /* Accept either an explicit segments array or a { agent: 618, … } map. */
  const rows = segments ? segments : SCOPE_ORDER.filter(k => context && context[k] != null).map(k => ({
    key: k,
    label: DEFAULT_LABELS[k],
    value: context[k]
  }));
  const withColor = rows.map(r => ({
    ...r,
    color: r.color || SCOPE_COLOR[r.key] || undefined
  }));
  const total = withColor.reduce((a, r) => a + (r.value || 0), 0);
  const fmt = v => v.toLocaleString();
  const pctOfLimit = limit ? Math.round(total / limit * 100) : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-ctxb ' + className
  }, rest), title ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-ctxb__title"
  }, title) : null, showBar ? /*#__PURE__*/React.createElement(__ds_scope.StackedBar, {
    segments: withColor,
    total: total,
    unit: unit,
    height: 8
  }) : null, /*#__PURE__*/React.createElement("table", {
    className: "lamp-ctxb__table"
  }, /*#__PURE__*/React.createElement("tbody", null, withColor.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.key || r.label || i
  }, /*#__PURE__*/React.createElement("td", {
    className: "lamp-ctxb__swatchcell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-ctxb__swatch",
    style: {
      background: r.color || 'var(--dataviz-neutral-3)'
    }
  })), /*#__PURE__*/React.createElement("td", {
    className: "lamp-ctxb__name"
  }, r.label), /*#__PURE__*/React.createElement("td", {
    className: "lamp-ctxb__val"
  }, fmt(r.value))))), /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", {
    className: "lamp-ctxb__name"
  }, "Total"), /*#__PURE__*/React.createElement("td", {
    className: "lamp-ctxb__val"
  }, fmt(total), " ", unit)))), cached != null || limit ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-ctxb__meta"
  }, cached != null ? /*#__PURE__*/React.createElement("span", null, fmt(cached), " ", unit, " served from cache") : null, limit ? /*#__PURE__*/React.createElement("span", null, pctOfLimit, "% of the ", fmt(limit), " ", unit, " window") : null) : null);
}), {
  displayName: 'ContextBreakdown'
});
Object.assign(__ds_scope, { ContextBreakdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ContextBreakdown.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* Presentation layer for TanStack Table. Logic (sorting, filtering, virtualization,
   grouping, pagination) belongs to the table instance; this renders LAMP's surface. */
const DataTable = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function DataTable({
  columns = [],
  rows = [],
  density = 'default',
  variant = 'standard',
  sort,
  onSort,
  selectable = false,
  selected = [],
  onSelect,
  onSelectAll,
  onRowClick,
  rowKey = (r, i) => r.id || i,
  toolbar,
  bulkActions,
  footerRow,
  state = 'ready',
  emptyState,
  stickyHeader = true,
  className = '',
  ...rest
}, ref) {
  const allSelected = selectable && rows.length > 0 && selected.length === rows.length;
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-tablewrap ' + className
  }, rest), toolbar ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-tabletoolbar"
  }, toolbar) : null, selectable && selected.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-tablebulk"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check_circle",
    size: 14
  }), selected.length, " selected", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 6
    }
  }, bulkActions)) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-tablewrap__scroll"
  }, /*#__PURE__*/React.createElement("table", {
    className: ['lamp-table', density !== 'default' && 'lamp-table--' + density, variant !== 'standard' && 'lamp-table--' + variant].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable ? /*#__PURE__*/React.createElement("th", {
    style: {
      width: 34
    },
    "data-pinned": true
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: allSelected,
    indeterminate: selected.length > 0 && !allSelected,
    onChange: () => onSelectAll && onSelectAll(!allSelected),
    "aria-label": "Select all rows"
  })) : null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    "data-align": c.align,
    "data-sortable": c.sortable ? '' : undefined,
    "data-pinned": c.pinned ? '' : undefined,
    style: c.width ? {
      width: c.width
    } : undefined,
    onClick: c.sortable && onSort ? () => onSort(c.key) : undefined,
    "aria-sort": sort && sort.key === c.key ? sort.dir === 'asc' ? 'ascending' : 'descending' : undefined
  }, c.header, c.sortable ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-table__sort"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: sort && sort.key === c.key ? sort.dir === 'asc' ? 'arrow_upward' : 'arrow_downward' : 'unfold_more',
    size: 12
  })) : null)))), /*#__PURE__*/React.createElement("tbody", null, state === 'loading' ? Array.from({
    length: 6
  }, (_, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length + (selectable ? 1 : 0)
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-skel",
    style: {
      display: 'block',
      height: 10,
      width: '60%'
    }
  })))) : null, state === 'ready' ? rows.map((r, i) => {
    const key = rowKey(r, i);
    const isSel = selected.indexOf(key) !== -1;
    return /*#__PURE__*/React.createElement("tr", {
      key: key,
      "data-selected": isSel ? '' : undefined,
      onClick: onRowClick ? () => onRowClick(r) : undefined,
      style: onRowClick ? {
        cursor: 'pointer'
      } : undefined
    }, selectable ? /*#__PURE__*/React.createElement("td", {
      "data-pinned": true,
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
      checked: isSel,
      onChange: () => onSelect && onSelect(key, !isSel),
      "aria-label": "Select row"
    })) : null, columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      "data-align": c.align,
      "data-mono": c.mono ? '' : undefined,
      "data-pinned": c.pinned ? '' : undefined
    }, c.render ? c.render(r) : r[c.key])));
  }) : null), footerRow ? /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", null, footerRow)) : null), state === 'empty' ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-table__empty"
  }, emptyState) : null));
}), {
  displayName: 'DataTable'
});
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/DonutChart.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* Donut / radial gauge. Keep donuts small and never use more than 5 slices. */
const DonutChart = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function DonutChart({
  data = [],
  size = 132,
  thickness = 12,
  centerValue,
  centerLabel,
  gauge = false,
  max,
  startAngle = -90,
  className = '',
  ...rest
}, ref) {
  const r = (size - thickness) / 2;
  const c = size / 2;
  const total = max != null ? max : data.reduce((a, d) => a + d.value, 0) || 1;
  const sweep = gauge ? 270 : 360;
  let acc = 0;
  const arc = (from, to, color, key) => {
    const a1 = (startAngle + from) * Math.PI / 180;
    const a2 = (startAngle + to) * Math.PI / 180;
    const large = to - from > 180 ? 1 : 0;
    const x1 = c + r * Math.cos(a1),
      y1 = c + r * Math.sin(a1);
    const x2 = c + r * Math.cos(a2),
      y2 = c + r * Math.sin(a2);
    return /*#__PURE__*/React.createElement("path", {
      key: key,
      d: 'M' + x1 + ',' + y1 + ' A' + r + ',' + r + ' 0 ' + large + ' 1 ' + x2 + ',' + y2,
      fill: "none",
      stroke: color,
      strokeWidth: thickness,
      strokeLinecap: gauge ? 'round' : 'butt'
    });
  };
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    width: size,
    height: size,
    viewBox: '0 0 ' + size + ' ' + size,
    role: "img",
    className: className
  }, rest), arc(0, sweep - 0.01, 'var(--chart-track)', 'track'), data.map((d, i) => {
    const from = acc / total * sweep;
    acc += d.value;
    const to = acc / total * sweep;
    return arc(from, Math.min(to, sweep - 0.01), d.color || __ds_scope.seriesColor(i), d.label || i);
  }), centerValue != null ? /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("text", {
    x: c,
    y: c + (centerLabel ? 0 : 5),
    textAnchor: "middle",
    style: {
      fill: 'var(--text-primary)',
      font: '500 18px var(--font-sans)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, centerValue), centerLabel ? /*#__PURE__*/React.createElement("text", {
    x: c,
    y: c + 15,
    textAnchor: "middle",
    style: {
      fill: 'var(--text-tertiary)',
      font: '400 10px var(--font-sans)'
    }
  }, centerLabel) : null) : null);
}), {
  displayName: 'DonutChart'
});
Object.assign(__ds_scope, { DonutChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DonutChart.jsx", error: String((e && e.message) || e) }); }

// components/data/Heatmap.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const RAMPS = {
  gold: ['var(--gold-50)', 'var(--gold-200)', 'var(--gold-400)', 'var(--gold-600)', 'var(--gold-800)'],
  blue: ['var(--blue-100)', 'var(--blue-300)', 'var(--blue-500)', 'var(--blue-600)', 'var(--blue-700)'],
  memory: ['var(--memory-subtle)', '#CFC7DD', 'var(--memory-core)', '#5C5570', 'var(--memory-dark)'],
  neutral: ['var(--neutral-100)', 'var(--neutral-200)', 'var(--neutral-400)', 'var(--neutral-600)', 'var(--neutral-800)'],
  risk: ['var(--green-100)', 'var(--green-400)', 'var(--orange-400)', 'var(--red-400)', 'var(--red-600)']
};
function heatColor(value, max, ramp = 'gold') {
  const steps = RAMPS[ramp] || RAMPS.gold;
  if (!value) return 'var(--surface-secondary)';
  const i = Math.min(steps.length - 1, Math.floor(value / (max || 1) * steps.length));
  return steps[i];
}

/* Matrix / calendar heatmap. Production renderer for large matrices: Apache ECharts, same props. */
const Heatmap = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Heatmap({
  rows = [],
  columns = [],
  values = [],
  max,
  ramp = 'gold',
  cellSize = 18,
  gap = 2,
  showScale = true,
  format = v => v,
  className = '',
  ...rest
}, ref) {
  const m = max != null ? max : Math.max.apply(null, values.reduce((a, r) => a.concat(r), [0]));
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: className
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: (rows.length ? 'auto ' : '') + 'repeat(' + columns.length + ', ' + cellSize + 'px)',
      gap,
      alignItems: 'center'
    }
  }, rows.length ? /*#__PURE__*/React.createElement("span", null) : null, columns.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontSize: 10,
      color: 'var(--text-tertiary)',
      textAlign: 'center'
    }
  }, c)), values.map((row, ri) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: ri
  }, rows.length ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-tertiary)',
      paddingRight: 6,
      whiteSpace: 'nowrap',
      textAlign: 'right'
    }
  }, rows[ri]) : null, row.map((v, ci) => /*#__PURE__*/React.createElement("span", {
    key: ci,
    className: "lamp-heat__cell",
    title: (rows[ri] || '') + ' ' + (columns[ci] || '') + ': ' + format(v),
    style: {
      width: cellSize,
      height: cellSize,
      background: heatColor(v, m, ramp),
      borderRadius: 2
    }
  }))))), showScale ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-heat__scale",
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "Low"), (RAMPS[ramp] || RAMPS.gold).map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: "lamp-heat__scale-swatch",
    style: {
      background: c
    }
  })), /*#__PURE__*/React.createElement("span", null, "High"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)'
    }
  }, "max ", format(m))) : null);
}), {
  displayName: 'Heatmap'
});

/* Reachable from the namespace as Heatmap.heatColor. */
Heatmap.heatColor = heatColor;
Object.assign(__ds_scope, { heatColor, Heatmap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Heatmap.jsx", error: String((e && e.message) || e) }); }

// components/data/HexHeatmap.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* LAMP-native hive visualization: a value per Agent slot on the hexagonal lattice.
   Production renderer: visx — this is product language, not a generic chart. */
const HexHeatmap = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function HexHeatmap({
  cells = [],
  size = 26,
  gap = 2,
  max,
  ramp = 'gold',
  showLabels = false,
  onSelect,
  className = '',
  ...rest
}, ref) {
  const w = size;
  const h = size / 1.1547;
  const stepX = w * 0.75 + gap;
  const stepY = h + gap;
  const m = max != null ? max : Math.max.apply(null, cells.map(c => c.value || 0).concat([1]));
  let maxX = 0,
    maxY = 0;
  const placed = cells.map((c, i) => {
    const x = c.col * stepX;
    const y = c.row * stepY + (Math.abs(c.col % 2) ? stepY / 2 : 0);
    if (x + w > maxX) maxX = x + w;
    if (y + h > maxY) maxY = y + h;
    return {
      ...c,
      x,
      y,
      key: c.key == null ? i : c.key
    };
  });
  const pts = [[w * 0.25, 0], [w * 0.75, 0], [w, h / 2], [w * 0.75, h], [w * 0.25, h], [0, h / 2]].map(p => p.join(',')).join(' ');
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    width: maxX,
    height: maxY,
    viewBox: '0 0 ' + maxX + ' ' + maxY,
    role: "img",
    className: className
  }, rest), placed.map(c => /*#__PURE__*/React.createElement("g", {
    key: c.key,
    transform: 'translate(' + c.x + ',' + c.y + ')',
    onClick: onSelect ? () => onSelect(c) : undefined,
    style: onSelect ? {
      cursor: 'pointer'
    } : undefined
  }, /*#__PURE__*/React.createElement("polygon", {
    points: pts,
    fill: c.color || __ds_scope.heatColor(c.value, m, ramp),
    stroke: c.selected ? 'var(--gold-500)' : 'var(--border-subtle)',
    strokeWidth: c.selected ? 1.5 : 0.75
  }), /*#__PURE__*/React.createElement("title", null, (c.label || '') + (c.value != null ? ': ' + c.value : '')), showLabels && c.short ? /*#__PURE__*/React.createElement("text", {
    x: w / 2,
    y: h / 2 + 3,
    textAnchor: "middle",
    style: {
      fill: 'var(--text-primary)',
      font: '600 8px var(--font-sans)'
    }
  }, c.short) : null)));
}), {
  displayName: 'HexHeatmap'
});
Object.assign(__ds_scope, { HexHeatmap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/HexHeatmap.jsx", error: String((e && e.message) || e) }); }

// components/data/LineChart.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const niceTick = (v, max) => {
  if (max >= 1000) return Math.round(v / 100) * 100 >= 1000 ? Math.round(v / 100) / 10 + 'k' : String(Math.round(v));
  if (max >= 10) return String(Math.round(v));
  if (max >= 1) return (Math.round(v * 10) / 10).toFixed(1);
  return (Math.round(v * 100) / 100).toFixed(2);
};

/* LAMP line / area chart. Production renderer: shadcn Charts + Recharts, tokenised to match. */
const LineChart = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function LineChart({
  series = [],
  labels = [],
  width = 640,
  height = 180,
  variant = 'line',
  yTicks = 4,
  yMax,
  yMin = 0,
  thresholds = [],
  showGrid = true,
  showAxis = true,
  pad = {
    l: 42,
    r: 10,
    t: 8,
    b: 20
  },
  format,
  className = '',
  ...rest
}, ref) {
  const n = Math.max.apply(null, series.map(s => s.data.length).concat([1]));
  const flat = series.reduce((a, s) => a.concat(s.data), []);
  const max = yMax != null ? yMax : Math.max.apply(null, flat.concat(thresholds.map(t => t.value)).concat([1]));
  const iw = width - pad.l - pad.r;
  const ih = height - pad.t - pad.b;
  const x = i => pad.l + i / Math.max(1, n - 1) * iw;
  const y = v => pad.t + ih - (v - yMin) / (max - yMin || 1) * ih;
  const ticks = Array.from({
    length: yTicks + 1
  }, (_, i) => yMin + (max - yMin) / yTicks * i);
  const fmt = format || (v => niceTick(v, max));
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    width: "100%",
    height: height,
    viewBox: '0 0 ' + width + ' ' + height,
    className: 'lamp-chart__svg ' + className,
    role: "img",
    preserveAspectRatio: "none"
  }, rest), showGrid ? /*#__PURE__*/React.createElement("g", {
    className: "lamp-chart__grid"
  }, ticks.map((t, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: pad.l,
    x2: width - pad.r,
    y1: y(t),
    y2: y(t)
  }))) : null, showAxis ? /*#__PURE__*/React.createElement("g", {
    className: "lamp-chart__axis"
  }, ticks.map((t, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: pad.l - 6,
    y: y(t) + 4,
    textAnchor: "end"
  }, fmt(t))), labels.map((l, i) => i % Math.ceil(labels.length / 7) === 0 ? /*#__PURE__*/React.createElement("text", {
    key: i,
    x: x(i),
    y: height - 5,
    textAnchor: "middle"
  }, l) : null)) : null, thresholds.map((t, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("line", {
    x1: pad.l,
    x2: width - pad.r,
    y1: y(t.value),
    y2: y(t.value),
    stroke: t.critical ? 'var(--chart-critical)' : 'var(--chart-threshold)',
    strokeWidth: 1,
    strokeDasharray: "4 3"
  }))), series.map((s, si) => {
    const color = s.color || __ds_scope.seriesColor(si);
    const path = s.data.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ',' + y(v).toFixed(1)).join(' ');
    return /*#__PURE__*/React.createElement("g", {
      key: s.label || si
    }, variant === 'area' ? /*#__PURE__*/React.createElement("path", {
      d: path + ' L' + x(s.data.length - 1) + ',' + y(yMin) + ' L' + pad.l + ',' + y(yMin) + ' Z',
      fill: color,
      opacity: 0.14
    }) : null, /*#__PURE__*/React.createElement("path", {
      d: path,
      fill: "none",
      stroke: color,
      strokeWidth: 1.5,
      strokeDasharray: s.dashed ? '4 3' : undefined,
      strokeLinejoin: "round",
      strokeLinecap: "round"
    }), s.points ? s.data.map((v, i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: x(i),
      cy: y(v),
      r: 2,
      fill: "var(--surface-primary)",
      stroke: color,
      strokeWidth: 1.25
    })) : null);
  }));
}), {
  displayName: 'LineChart'
});
Object.assign(__ds_scope, { LineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/LineChart.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const MetricCard = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function MetricCard({
  label,
  value,
  unit,
  delta,
  deltaDirection,
  deltaTone,
  deltaLabel,
  size = 'lg',
  flush = false,
  glyph,
  footnote,
  spark,
  actions,
  className = '',
  ...rest
}, ref) {
  const dir = deltaDirection || (delta && String(delta).trim().startsWith('-') ? 'down' : delta ? 'up' : 'flat');
  const tone = deltaTone || (dir === 'up' ? 'positive' : dir === 'down' ? 'negative' : 'flat');
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-metric', size === 'sm' && 'lamp-metric--sm', flush && 'lamp-metric--flush', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lamp-metric__label"
  }, glyph ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: 12
  }) : null, label, actions ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, actions) : null), /*#__PURE__*/React.createElement("span", {
    className: "lamp-metric__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-metric__value"
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-metric__unit"
  }, unit) : null, delta ? /*#__PURE__*/React.createElement("span", {
    className: 'lamp-metric__delta lamp-metric__delta--' + tone
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: dir === 'up' ? 'trending_up' : dir === 'down' ? 'trending_down' : 'trending_flat',
    size: 13
  }), delta) : null), spark ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-metric__spark"
  }, spark) : null, footnote || deltaLabel ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-metric__foot"
  }, footnote || deltaLabel) : null);
}), {
  displayName: 'MetricCard'
});
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const ProgressBar = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ProgressBar({
  value = 0,
  max = 100,
  tone = 'primary',
  height = 6,
  indeterminate = false,
  label,
  className = '',
  ...rest
}, ref) {
  const pct = indeterminate ? 0 : Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-bar-track ' + className,
    style: {
      height
    },
    role: "progressbar",
    "aria-valuenow": indeterminate ? undefined : value,
    "aria-valuemax": max,
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: ['lamp-bar-fill', tone !== 'primary' && 'lamp-bar-fill--' + tone, indeterminate && 'lamp-bar-fill--indeterminate'].filter(Boolean).join(' '),
    style: indeterminate ? undefined : {
      width: pct + '%'
    }
  }));
}), {
  displayName: 'ProgressBar'
});
const UsageMeter = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function UsageMeter({
  label,
  used,
  limit,
  unit,
  tone,
  footnote,
  format = v => v.toLocaleString(),
  className = '',
  ...rest
}, ref) {
  const pct = limit ? used / limit * 100 : 0;
  const auto = pct >= 100 ? 'danger' : pct >= 85 ? 'warning' : 'primary';
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-usage ' + className
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-usage__top"
  }, label, /*#__PURE__*/React.createElement("span", {
    className: "lamp-usage__val"
  }, format(used), " / ", format(limit), unit ? ' ' + unit : '')), /*#__PURE__*/React.createElement(ProgressBar, {
    value: used,
    max: limit,
    tone: tone || auto,
    label: label
  }), footnote ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-tertiary)'
    }
  }, footnote) : null);
}), {
  displayName: 'UsageMeter'
});
Object.assign(__ds_scope, { ProgressBar, UsageMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data/ScatterPlot.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* Scatter / bubble. Large point counts belong on the ECharts tier with the same API. */
const ScatterPlot = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ScatterPlot({
  points = [],
  width = 640,
  height = 200,
  xMax,
  yMax,
  xLabel,
  yLabel,
  quadrant,
  pad = {
    l: 36,
    r: 10,
    t: 10,
    b: 22
  },
  format = v => v,
  className = '',
  ...rest
}, ref) {
  const xm = xMax != null ? xMax : Math.max.apply(null, points.map(p => p.x).concat([1]));
  const ym = yMax != null ? yMax : Math.max.apply(null, points.map(p => p.y).concat([1]));
  const iw = width - pad.l - pad.r;
  const ih = height - pad.t - pad.b;
  const X = v => pad.l + v / xm * iw;
  const Y = v => pad.t + ih - v / ym * ih;
  const ticks = [0, 0.25, 0.5, 0.75, 1];
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    width: "100%",
    height: height,
    viewBox: '0 0 ' + width + ' ' + height,
    role: "img",
    className: className,
    preserveAspectRatio: "none"
  }, rest), /*#__PURE__*/React.createElement("g", {
    className: "lamp-chart__grid"
  }, ticks.map((t, i) => /*#__PURE__*/React.createElement("line", {
    key: 'h' + i,
    x1: pad.l,
    x2: width - pad.r,
    y1: Y(ym * t),
    y2: Y(ym * t)
  })), ticks.map((t, i) => /*#__PURE__*/React.createElement("line", {
    key: 'v' + i,
    y1: pad.t,
    y2: pad.t + ih,
    x1: X(xm * t),
    x2: X(xm * t)
  }))), quadrant ? /*#__PURE__*/React.createElement("line", {
    x1: X(quadrant.x),
    x2: X(quadrant.x),
    y1: pad.t,
    y2: pad.t + ih,
    stroke: "var(--chart-threshold)",
    strokeDasharray: "4 3"
  }) : null, quadrant ? /*#__PURE__*/React.createElement("line", {
    y1: Y(quadrant.y),
    y2: Y(quadrant.y),
    x1: pad.l,
    x2: width - pad.r,
    stroke: "var(--chart-threshold)",
    strokeDasharray: "4 3"
  }) : null, /*#__PURE__*/React.createElement("g", {
    className: "lamp-chart__axis"
  }, ticks.map((t, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: pad.l - 6,
    y: Y(ym * t) + 4,
    textAnchor: "end"
  }, format(Math.round(ym * t)))), xLabel ? /*#__PURE__*/React.createElement("text", {
    x: pad.l + iw / 2,
    y: height - 4,
    textAnchor: "middle"
  }, xLabel) : null, yLabel ? /*#__PURE__*/React.createElement("text", {
    x: 10,
    y: pad.t + 4,
    textAnchor: "start"
  }, yLabel) : null), points.map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: X(p.x),
    cy: Y(p.y),
    r: p.r || 3.5,
    fill: p.color || __ds_scope.seriesColor(p.group || 0),
    opacity: 0.75,
    stroke: "var(--surface-primary)",
    strokeWidth: 0.75
  }, p.label ? /*#__PURE__*/React.createElement("title", null, p.label) : null)));
}), {
  displayName: 'ScatterPlot'
});
Object.assign(__ds_scope, { ScatterPlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ScatterPlot.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Sparkline = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Sparkline({
  data = [],
  width = 96,
  height = 24,
  color = 'var(--chart-primary)',
  variant = 'line',
  area = true,
  baseline,
  className = '',
  ...rest
}, ref) {
  if (!data.length) return null;
  const max = Math.max.apply(null, data);
  const min = Math.min.apply(null, data);
  const span = max - min || 1;
  const x = i => i / Math.max(1, data.length - 1) * width;
  const y = v => height - (v - min) / span * (height - 2) - 1;
  if (variant === 'bar') {
    const bw = Math.max(1, width / data.length - 1);
    return /*#__PURE__*/React.createElement("svg", _extends({
      width: width,
      height: height,
      className: className,
      role: "img",
      "aria-hidden": "true"
    }, rest), data.map((v, i) => /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: i / data.length * width,
      y: y(v),
      width: bw,
      height: height - y(v),
      fill: color,
      rx: 1
    })));
  }
  const path = data.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ',' + y(v).toFixed(1)).join(' ');
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    width: width,
    height: height,
    className: className,
    role: "img",
    "aria-hidden": "true"
  }, rest), area ? /*#__PURE__*/React.createElement("path", {
    d: path + ' L' + width + ',' + height + ' L0,' + height + ' Z',
    fill: color,
    opacity: 0.12
  }) : null, baseline != null ? /*#__PURE__*/React.createElement("line", {
    x1: 0,
    x2: width,
    y1: y(baseline),
    y2: y(baseline),
    stroke: "var(--chart-grid)",
    strokeDasharray: "2 2"
  }) : null, /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: color,
    strokeWidth: 1.25,
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }));
}), {
  displayName: 'Sparkline'
});
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/data/Viz.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* One visualization API for the whole product. The renderer tier is an implementation
   detail the user never sees:
     standard  -> shadcn Charts + Recharts      (line, area, bar, donut, scatter, sparkline)
     advanced  -> Apache ECharts                (heatmap, calendar, treemap, sunburst, sankey, graph, large scatter)
     native    -> visx                          (hive, constellation, topology, fingerprint, hex anything)
     realtime  -> uPlot                         (dense telemetry, thousands of points)
   Every tier consumes LAMP tokens and renders inside ChartFrame. */
const VIZ_TIERS = {
  line: 'standard',
  area: 'standard',
  bar: 'standard',
  hbar: 'standard',
  stackedBar: 'standard',
  normalizedBar: 'standard',
  histogram: 'standard',
  donut: 'standard',
  gauge: 'standard',
  scatter: 'standard',
  sparkline: 'standard',
  heatmap: 'advanced',
  calendar: 'advanced',
  treemap: 'advanced',
  sunburst: 'advanced',
  sankey: 'advanced',
  graph: 'advanced',
  parallel: 'advanced',
  hive: 'native',
  constellation: 'native',
  topology: 'native',
  fingerprint: 'native',
  telemetry: 'realtime'
};
const RENDER = {
  line: p => /*#__PURE__*/React.createElement(__ds_scope.LineChart, p),
  area: p => /*#__PURE__*/React.createElement(__ds_scope.LineChart, _extends({
    variant: "area"
  }, p)),
  bar: p => /*#__PURE__*/React.createElement(__ds_scope.BarChart, p),
  hbar: p => /*#__PURE__*/React.createElement(__ds_scope.BarChart, _extends({
    orientation: "horizontal",
    showValues: true
  }, p)),
  stackedBar: p => /*#__PURE__*/React.createElement(__ds_scope.BarChart, _extends({
    stacked: true
  }, p)),
  normalizedBar: p => /*#__PURE__*/React.createElement(__ds_scope.BarChart, _extends({
    stacked: true,
    normalized: true
  }, p)),
  histogram: p => /*#__PURE__*/React.createElement(__ds_scope.BarChart, _extends({
    barGap: 1
  }, p)),
  donut: p => /*#__PURE__*/React.createElement(__ds_scope.DonutChart, p),
  gauge: p => /*#__PURE__*/React.createElement(__ds_scope.DonutChart, _extends({
    gauge: true
  }, p)),
  scatter: p => /*#__PURE__*/React.createElement(__ds_scope.ScatterPlot, p),
  sparkline: p => /*#__PURE__*/React.createElement(__ds_scope.Sparkline, p),
  heatmap: p => /*#__PURE__*/React.createElement(__ds_scope.Heatmap, p),
  calendar: p => /*#__PURE__*/React.createElement(__ds_scope.Heatmap, _extends({
    cellSize: 11
  }, p)),
  hive: p => /*#__PURE__*/React.createElement(__ds_scope.HexHeatmap, p)
};
const Viz = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Viz({
  type = 'line',
  title,
  subtitle,
  legend,
  legendVariant,
  footnote,
  state = 'ready',
  height,
  actions,
  flush,
  config = {},
  ...rest
}, ref) {
  const render = RENDER[type];
  const chartState = state === 'ready' && !render ? 'error' : state;
  return /*#__PURE__*/React.createElement(__ds_scope.ChartFrame, {
    ref: ref,
    title: title,
    subtitle: subtitle,
    legend: legend,
    legendVariant: legendVariant || (type === 'line' || type === 'area' ? 'line' : 'swatch'),
    footnote: footnote,
    state: chartState,
    height: height,
    actions: actions,
    flush: flush,
    errorLabel: render ? undefined : 'This visualization type renders on the ECharts or visx tier.'
  }, render ? render({
    ...config,
    ...rest
  }) : null);
}), {
  displayName: 'Viz'
});
Object.assign(__ds_scope, { VIZ_TIERS, Viz });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Viz.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const EmptyState = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function EmptyState({
  glyph = 'inbox',
  title,
  description,
  action,
  secondaryAction,
  align = 'center',
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-empty', align === 'left' && 'lamp-empty--left', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lamp-empty__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: 18
  })), title ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-empty__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-empty__text"
  }, description) : null, action || secondaryAction ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-empty__actions"
  }, action, secondaryAction) : null);
}), {
  displayName: 'EmptyState'
});
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ErrorState.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const ErrorState = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ErrorState({
  kind = 'recoverable',
  title,
  happened,
  notHappened,
  impact,
  recovery,
  code,
  actions,
  onRetry,
  onReport,
  children,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-err ' + className,
    role: "alert"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-err__title"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: kind === 'fatal' ? 'dangerous' : 'error',
    size: 16
  }), title), /*#__PURE__*/React.createElement("div", {
    className: "lamp-err__facts"
  }, happened ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-err__k"
  }, "What happened"), /*#__PURE__*/React.createElement("span", {
    className: "lamp-err__v"
  }, happened)) : null, notHappened ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-err__k"
  }, "What did not"), /*#__PURE__*/React.createElement("span", {
    className: "lamp-err__v"
  }, notHappened)) : null, impact ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-err__k"
  }, "Impact"), /*#__PURE__*/React.createElement("span", {
    className: "lamp-err__v"
  }, impact)) : null, recovery ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-err__k"
  }, "Recovery"), /*#__PURE__*/React.createElement("span", {
    className: "lamp-err__v"
  }, recovery)) : null), children, code ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-err__code"
  }, code) : null, actions || onRetry || onReport ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-err__actions"
  }, actions, onRetry ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "refresh",
    onClick: onRetry
  }, "Retry") : null, onReport ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "quiet",
    onClick: onReport
  }, "Report problem") : null) : null);
}), {
  displayName: 'ErrorState'
});
Object.assign(__ds_scope, { ErrorState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ErrorState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/InlineNotification.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const TONE = {
  neutral: 'info',
  info: 'info',
  success: 'check_circle',
  warning: 'warning',
  danger: 'error',
  critical: 'dangerous'
};
const InlineNotification = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function InlineNotification({
  tone = 'neutral',
  title,
  children,
  actions,
  banner = false,
  onDismiss,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-note', 'lamp-note--' + tone, banner && 'lamp-note--banner', className].filter(Boolean).join(' '),
    role: tone === 'danger' || tone === 'critical' ? 'alert' : 'status'
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lamp-note__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: TONE[tone] || 'info',
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "lamp-note__body"
  }, title ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-note__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-note__text"
  }, children) : null, actions ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-note__actions"
  }, actions) : null), onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Dismiss",
    size: "xs",
    onClick: onDismiss
  }) : null);
}), {
  displayName: 'InlineNotification'
});
const Toast = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Toast({
  tone = 'neutral',
  title,
  children,
  action,
  onDismiss,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-toast ' + className,
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lamp-note__icon",
    style: {
      color: tone === 'success' ? 'var(--status-success)' : tone === 'danger' ? 'var(--status-danger)' : tone === 'warning' ? 'var(--status-warning)' : 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: TONE[tone] || 'info',
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "lamp-note__body"
  }, title ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-note__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-note__text"
  }, children) : null), action ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-toast__undo"
  }, action) : null, onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Dismiss",
    size: "xs",
    onClick: onDismiss
  }) : null);
}), {
  displayName: 'Toast'
});
const ToastStack = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ToastStack({
  children,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: "lamp-toast__stack"
  }, rest), children);
}), {
  displayName: 'ToastStack'
});
Object.assign(__ds_scope, { InlineNotification, Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/InlineNotification.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Skeleton = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Skeleton({
  width = '100%',
  height = 10,
  radius,
  variant = 'block',
  lines = 1,
  className = '',
  style,
  ...rest
}, ref) {
  if (variant === 'text' && lines > 1) {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      style: {
        display: 'block'
      }
    }, rest), Array.from({
      length: lines
    }, (_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "lamp-skel lamp-skel--text",
      style: {
        width: i === lines - 1 ? '60%' : '100%'
      }
    })));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: ['lamp-skel', variant === 'hex' && 'lamp-skel--hex', variant === 'circle' && 'lamp-skel--circle', className].filter(Boolean).join(' '),
    style: {
      width,
      height,
      borderRadius: variant === 'circle' ? '50%' : radius,
      ...style
    },
    "aria-hidden": "true"
  }, rest));
}), {
  displayName: 'Skeleton'
});
const Spinner = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Spinner({
  size = 14,
  className = '',
  style,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: 'lamp-spin ' + className,
    style: {
      width: size,
      height: size,
      ...style
    },
    role: "status",
    "aria-label": "Loading"
  }, rest));
}), {
  displayName: 'Spinner'
});
Object.assign(__ds_scope, { Skeleton, Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/forms/CodeFrame.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const CodeFrame = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function CodeFrame({
  language = 'json',
  title,
  children,
  actions,
  maxHeight,
  onCopy,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: "lamp-codeframe"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-codeframe__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-codeframe__lang"
  }, language), title ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, title) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 2
    }
  }, actions, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "content_copy",
    label: "Copy",
    size: "xs",
    onClick: onCopy
  }))), /*#__PURE__*/React.createElement("pre", {
    className: "lamp-codeframe__body",
    style: maxHeight ? {
      maxHeight
    } : undefined
  }, children));
}), {
  displayName: 'CodeFrame'
});
Object.assign(__ds_scope, { CodeFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/CodeFrame.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Field = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Field({
  label,
  htmlFor,
  description,
  helper,
  error,
  warning,
  success,
  required = false,
  optional = false,
  count,
  layout = 'stack',
  children,
  className = '',
  ...rest
}, ref) {
  const msg = error || warning || success;
  const msgTone = error ? 'error' : warning ? 'warning' : 'success';
  const msgIcon = error ? 'cancel' : warning ? 'warning' : 'check_circle';
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-field', layout === 'row' && 'lamp-field--row', className].filter(Boolean).join(' ')
  }, rest), label ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-field__top"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lamp-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-field__req"
  }, " *") : null), optional ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-field__opt"
  }, "Optional") : null) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "lamp-field__desc"
  }, description) : null, children, msg || helper || count != null ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-field__foot"
  }, msg ? /*#__PURE__*/React.createElement("span", {
    className: 'lamp-field__msg lamp-field__msg--' + msgTone
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: msgIcon,
    size: 12
  }), msg) : helper ? /*#__PURE__*/React.createElement("span", null, helper) : null, count != null ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-field__count"
  }, count) : null) : null);
}), {
  displayName: 'Field'
});
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/KeyValueInput.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const KeyValueInput = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function KeyValueInput({
  rows = [],
  onChange,
  keyPlaceholder = 'Key',
  valuePlaceholder = 'Value',
  addLabel = 'Add row',
  mono = true,
  ...rest
}, ref) {
  const set = (i, patch) => onChange && onChange(rows.map((r, j) => j === i ? {
    ...r,
    ...patch
  } : r));
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: "lamp-kv"
  }, rest), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "lamp-kv__row",
    key: i
  }, /*#__PURE__*/React.createElement(__ds_scope.TextInput, {
    size: "sm",
    mono: mono,
    value: r.key,
    placeholder: keyPlaceholder,
    onChange: e => set(i, {
      key: e.target.value
    })
  }), /*#__PURE__*/React.createElement(__ds_scope.TextInput, {
    size: "sm",
    mono: mono,
    value: r.value,
    placeholder: valuePlaceholder,
    onChange: e => set(i, {
      value: e.target.value
    })
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "delete",
    label: "Remove row",
    size: "sm",
    tone: "danger",
    onClick: () => onChange && onChange(rows.filter((_, j) => j !== i))
  }))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    className: "lamp-kv__add",
    variant: "ghost",
    size: "sm",
    icon: "add",
    onClick: () => onChange && onChange([...rows, {
      key: '',
      value: ''
    }])
  }, addLabel));
}), {
  displayName: 'KeyValueInput'
});
Object.assign(__ds_scope, { KeyValueInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/KeyValueInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/PromptEditor.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const VariableToken = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function VariableToken({
  name,
  kind = 'variable',
  children,
  ...rest
}, ref) {
  const label = children || name;
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: 'lamp-vartoken' + (kind === 'entity' ? ' lamp-vartoken--entity' : kind === 'missing' ? ' lamp-vartoken--missing' : '')
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: kind === 'entity' ? 'alternate_email' : kind === 'missing' ? 'warning' : 'data_object',
    size: 10
  }), label);
}), {
  displayName: 'VariableToken'
});
const PromptEditor = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function PromptEditor({
  label = 'Instructions',
  children,
  tokens = [],
  footer,
  onInsert,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: "lamp-prompt"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-prompt__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-prompt__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 4
    }
  }, tokens.map(t => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: t,
    variant: "quiet",
    size: "xs",
    onClick: () => onInsert && onInsert(t)
  }, '{{' + t + '}}')))), /*#__PURE__*/React.createElement("div", {
    className: "lamp-prompt__body",
    contentEditable: false,
    suppressContentEditableWarning: true
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-prompt__foot"
  }, footer) : null);
}), {
  displayName: 'PromptEditor'
});
Object.assign(__ds_scope, { VariableToken, PromptEditor });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PromptEditor.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Radio = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Radio({
  label,
  description,
  disabled = false,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['lamp-check', disabled && 'lamp-check--disabled', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "lamp-check__box lamp-check__box--radio"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-check__radio-dot"
  })), label ? /*#__PURE__*/React.createElement("span", null, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-check__desc"
  }, description) : null) : null);
}), {
  displayName: 'Radio'
});
const RadioGroup = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function RadioGroup({
  name,
  options = [],
  value,
  onChange,
  direction = 'column',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 16 : 8
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement(Radio, {
      key: v,
      name: name,
      value: v,
      label: l,
      description: typeof o === 'object' ? o.description : undefined,
      checked: value === v,
      onChange: () => onChange && onChange(v)
    });
  }));
}), {
  displayName: 'RadioGroup'
});
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Slider = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Slider({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  format,
  showValue = true,
  ...rest
}, ref) {
  const v = value == null ? min : value;
  return /*#__PURE__*/React.createElement("div", {
    className: "lamp-slider"
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "range",
    min: min,
    max: max,
    step: step,
    value: v,
    onChange: e => onChange && onChange(Number(e.target.value))
  }, rest)), showValue ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-slider__val"
  }, format ? format(v) : v) : null);
}), {
  displayName: 'Slider'
});
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Switch = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Switch({
  label,
  tone = 'default',
  disabled = false,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['lamp-switch', tone === 'brand' && 'lamp-switch--brand', disabled && 'lamp-switch--disabled', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "lamp-switch__track"
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}), {
  displayName: 'Switch'
});
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/inspector/InspectorField.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* A labelled, editable field at Inspector density.

   The difference from forms/Field is the axis and the weight. Field stacks a
   label above a control for a form the operator is filling in. InspectorField
   puts a 104px label column beside the control — the same column PropertyRow
   uses — so a section can mix read-only rows and editable rows without the
   labels stepping out of line. That alignment is the whole point; an Inspector
   where half the labels sit in a different place reads as two panels.

   `inherited` marks a value coming from a broader scope, and `overridden` marks
   one this object has set for itself. Both are stated in words next to the
   value, not implied by a tint. `advanced` dims the label for configuration that
   most operators should not need to touch. */

const InspectorField = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function InspectorField({
  label,
  htmlFor,
  hint,
  helper,
  error,
  warning,
  required = false,
  optional = false,
  inherited = false,
  inheritedFrom,
  overridden = false,
  advanced = false,
  stack = false,
  action,
  children,
  className = '',
  ...rest
}, ref) {
  const msg = error || warning;
  const tone = error ? 'error' : 'warning';
  const cls = ['lamp-ifield', stack && 'lamp-ifield--stack', advanced && 'lamp-ifield--advanced', inherited && 'lamp-ifield--inherited', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-ifield__labelcol"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lamp-ifield__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-ifield__req"
  }, " *") : null), optional ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-ifield__opt"
  }, "Optional") : null, hint ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-ifield__hint",
    title: hint
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "help",
    size: 12,
    label: hint
  })) : null), /*#__PURE__*/React.createElement("div", {
    className: "lamp-ifield__control"
  }, children, inherited || overridden ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-ifield__origin"
  }, inherited ? 'Inherited' + (inheritedFrom ? ' from ' + inheritedFrom : '') : 'Overridden here') : null, msg ? /*#__PURE__*/React.createElement("span", {
    className: 'lamp-ifield__msg lamp-ifield__msg--' + tone
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: error ? 'cancel' : 'warning',
    size: 12
  }), msg) : helper ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-ifield__helper"
  }, helper) : null), action ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-ifield__action"
  }, action) : null);
}), {
  displayName: 'InspectorField'
});
Object.assign(__ds_scope, { InspectorField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inspector/InspectorField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Tabs = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Tabs({
  tabs = [],
  value,
  onChange,
  variant = 'underline',
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-tabs', variant === 'pill' && 'lamp-tabs--pill', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), tabs.map(t => {
    const id = typeof t === 'string' ? t : t.id;
    const label = typeof t === 'string' ? t : t.label;
    const active = value === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      role: "tab",
      "aria-selected": active,
      disabled: typeof t === 'object' && t.disabled,
      className: 'lamp-tabs__tab' + (active ? ' lamp-tabs__tab--active' : ''),
      onClick: () => onChange && onChange(id)
    }, typeof t === 'object' && t.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 14
    }) : null, label, typeof t === 'object' && t.count != null ? /*#__PURE__*/React.createElement("span", {
      className: "lamp-tabs__count"
    }, t.count) : null);
  }));
}), {
  displayName: 'Tabs'
});
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/inspector/InspectorPanel.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* The Inspector's anatomy, as separate parts.

   InspectorPanel still takes `title`, `tabs` and `footer` as props — that is the
   short path, and most surfaces should keep using it. The parts exist for the
   cases the props can't reach: a header with a custom identity block, a footer
   that scrolls with the body, tabs driven by something other than the panel.
   They are the same implementation, so a composed Inspector and a prop-driven
   one are pixel-identical. */

const InspectorHeader = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function InspectorHeader({
  title,
  subtitle,
  glyph,
  badges,
  actions,
  onClose,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("header", _extends({
    ref: ref,
    className: 'lamp-insp__head ' + className
  }, rest), glyph ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-insp__glyph"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: 16
  })) : null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-insp__titles"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-insp__title"
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-insp__sub"
  }, subtitle) : null, badges ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-insp__badges"
  }, badges) : null), /*#__PURE__*/React.createElement("span", {
    className: "lamp-insp__actions"
  }, actions, onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Close inspector",
    size: "sm",
    onClick: onClose
  }) : null));
}), {
  displayName: 'InspectorHeader'
});

/* Inspector tabs sit flush under the header and use the underline variant, so the
   panel reads as one surface rather than a card stack. Keep them to the object's
   own facets — Purpose, Skills, Tools, Memory, Runtime — never app navigation. */
const InspectorTabs = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function InspectorTabs({
  tabs = [],
  value,
  onChange,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: 'lamp-insp__tabs ' + className
  }, /*#__PURE__*/React.createElement(__ds_scope.Tabs, _extends({
    tabs: tabs,
    value: value,
    onChange: onChange,
    variant: "underline"
  }, rest)));
}), {
  displayName: 'InspectorTabs'
});

/* Sticky by default: the Inspector's commit actions must stay reachable however
   long the body runs. `align="split"` pushes the first child left and the rest
   right — the usual Cancel / Apply shape. */
const InspectorFooter = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function InspectorFooter({
  sticky = true,
  align = 'end',
  children,
  className = '',
  ...rest
}, ref) {
  const cls = ['lamp-insp__foot', sticky && 'lamp-insp__foot--sticky', align !== 'end' && 'lamp-insp__foot--' + align, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("footer", _extends({
    ref: ref,
    className: cls
  }, rest), children);
}), {
  displayName: 'InspectorFooter'
});
const InspectorPanel = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function InspectorPanel({
  title,
  subtitle,
  glyph,
  badges,
  actions,
  tabs,
  footer,
  stickyFooter = true,
  onClose,
  children,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("aside", _extends({
    ref: ref,
    className: 'lamp-insp ' + className,
    "aria-label": "Inspector"
  }, rest), title ? /*#__PURE__*/React.createElement(InspectorHeader, {
    title: title,
    subtitle: subtitle,
    glyph: glyph,
    badges: badges,
    actions: actions,
    onClose: onClose
  }) : null, tabs, /*#__PURE__*/React.createElement("div", {
    className: "lamp-insp__body"
  }, children), footer ? /*#__PURE__*/React.createElement(InspectorFooter, {
    sticky: stickyFooter
  }, footer) : null);
}), {
  displayName: 'InspectorPanel'
});
Object.assign(__ds_scope, { InspectorHeader, InspectorTabs, InspectorFooter, InspectorPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inspector/InspectorPanel.jsx", error: String((e && e.message) || e) }); }

// components/inspector/InspectorSection.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const InspectorSection = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function InspectorSection({
  label,
  count,
  actions,
  collapsible = true,
  defaultOpen = true,
  advanced = false,
  children,
  className = '',
  ...rest
}, ref) {
  const [open, setOpen] = React.useState(advanced ? false : defaultOpen);
  const isOpen = collapsible ? open : true;
  return /*#__PURE__*/React.createElement("section", _extends({
    ref: ref,
    className: ['lamp-insp-sec', !collapsible && 'lamp-insp-sec--static', advanced && 'lamp-insp-sec--advanced', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-insp-sec__head"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lamp-insp-sec__toggle",
    onClick: () => collapsible && setOpen(!open),
    "aria-expanded": isOpen,
    disabled: !collapsible
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-insp-sec__label"
  }, label), count != null ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-insp-sec__count"
  }, count) : null, collapsible ? /*#__PURE__*/React.createElement("span", {
    className: 'lamp-insp-sec__twist' + (isOpen ? ' lamp-insp-sec__twist--open' : '')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "keyboard_arrow_down",
    size: 14
  })) : null), actions ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-insp-sec__actions"
  }, actions) : null), isOpen ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-insp-sec__body"
  }, children) : null);
}), {
  displayName: 'InspectorSection'
});
const PropertyRow = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function PropertyRow({
  label,
  value,
  mono = false,
  stack = false,
  inherited = false,
  empty,
  children,
  className = '',
  ...rest
}, ref) {
  const content = children != null ? children : value == null || value === '' ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-prop__empty"
  }, empty || 'Not set') : value;
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-prop', stack && 'lamp-prop--stack', inherited && 'lamp-prop--inherited', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lamp-prop__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: 'lamp-prop__value' + (mono ? ' lamp-prop__value--mono' : '')
  }, content, inherited ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-prop__inherit"
  }, "Inherited") : null));
}), {
  displayName: 'PropertyRow'
});
Object.assign(__ds_scope, { InspectorSection, PropertyRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inspector/InspectorSection.jsx", error: String((e && e.message) || e) }); }

// components/memory/MemoryBadge.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/** Memory fact types — distinguished by glyph + label, not colour alone. */
const FACT_TYPES = {
  explicitFact: {
    label: 'Fact',
    glyph: 'check_circle',
    tone: 'memory'
  },
  observedPattern: {
    label: 'Observed',
    glyph: 'visibility',
    tone: 'neutral'
  },
  inferredPattern: {
    label: 'Inferred',
    glyph: 'flare',
    tone: 'waiting'
  },
  policy: {
    label: 'Policy',
    glyph: 'gavel',
    tone: 'brand'
  },
  preference: {
    label: 'Preference',
    glyph: 'tune',
    tone: 'memory'
  },
  exception: {
    label: 'Exception',
    glyph: 'report',
    tone: 'warning'
  },
  assumption: {
    label: 'Assumption',
    glyph: 'help',
    tone: 'neutral'
  },
  historicalEvent: {
    label: 'Event',
    glyph: 'event',
    tone: 'neutral'
  },
  relationship: {
    label: 'Relationship',
    glyph: 'link',
    tone: 'memory'
  },
  decision: {
    label: 'Decision',
    glyph: 'rule',
    tone: 'memory'
  },
  rule: {
    label: 'Rule',
    glyph: 'balance',
    tone: 'brand'
  },
  temporaryContext: {
    label: 'Temporary',
    glyph: 'schedule',
    tone: 'neutral'
  },
  workingMemory: {
    label: 'Working',
    glyph: 'psychology',
    tone: 'memory'
  }
};
const MEMORY_SCOPES = {
  agent: {
    label: 'Agent working memory',
    short: 'Agent'
  },
  playbook: {
    label: 'Playbook memory',
    short: 'Playbook'
  },
  genie: {
    label: 'Genie memory',
    short: 'Genie'
  },
  lamp: {
    label: 'LAMP memory',
    short: 'LAMP'
  }
};
const MemoryBadge = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function MemoryBadge({
  type = 'explicitFact',
  label,
  micro = true,
  ...rest
}, ref) {
  const t = FACT_TYPES[type] || FACT_TYPES.explicitFact;
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, _extends({
    ref: ref,
    tone: t.tone,
    icon: t.glyph,
    micro: micro
  }, rest), label || t.label);
}), {
  displayName: 'MemoryBadge'
});
const MemoryScope = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function MemoryScope({
  scope = 'agent',
  full = false,
  ...rest
}, ref) {
  const s = MEMORY_SCOPES[scope] || MEMORY_SCOPES.agent;
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: 'lamp-mem-scope lamp-mem-scope--' + scope,
    title: s.label
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lamp-mem-scope__bar"
  }), full ? s.label : s.short);
}), {
  displayName: 'MemoryScope'
});
const MemoryConfidence = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function MemoryConfidence({
  level = 'high',
  value,
  showValue = false,
  ...rest
}, ref) {
  const pct = value != null ? value : level === 'veryHigh' ? 96 : level === 'high' ? 84 : level === 'medium' ? 62 : 34;
  const label = level === 'veryHigh' ? 'Very high' : level === 'high' ? 'High' : level === 'medium' ? 'Medium' : 'Low';
  const tone = pct >= 80 ? 'high' : pct >= 55 ? '' : 'low';
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: "lamp-conf"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lamp-conf__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'lamp-conf__fill' + (tone ? ' lamp-conf__fill--' + tone : ''),
    style: {
      width: pct + '%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "lamp-conf__label"
  }, showValue ? pct + '%' : label));
}), {
  displayName: 'MemoryConfidence'
});
Object.assign(__ds_scope, { FACT_TYPES, MEMORY_SCOPES, MemoryBadge, MemoryScope, MemoryConfidence });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/memory/MemoryBadge.jsx", error: String((e && e.message) || e) }); }

// components/memory/MemoryConflict.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* Two remembered things that cannot both be true.

   A conflict is presented as a choice between claims, never as an error. LAMP
   does not know which one is right — that is the entire reason the card exists —
   so it shows both with their evidence side by side and lets the operator
   decide. Each side carries where it came from, how many times it was seen and
   when it was last confirmed, because that is what the decision actually turns
   on.

   Scope is shown per claim: a narrower scope contradicting a broader one is the
   common case (a Playbook has learnt an exception to a LAMP-level policy), and
   the resolution there is usually "keep both, scoped" rather than picking a
   winner — which is why `onKeepBoth` exists alongside the two picks.

   Never auto-resolve. Never hide the losing claim; resolving records the
   decision, and the audit trail keeps both. */

function Claim({
  claim,
  index,
  selected,
  onPick,
  pickLabel,
  readOnly
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['lamp-conflict__claim', selected && 'lamp-conflict__claim--picked'].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "lamp-conflict__claim-top"
  }, claim.type ? /*#__PURE__*/React.createElement(__ds_scope.MemoryBadge, {
    type: claim.type
  }) : null, claim.scope ? /*#__PURE__*/React.createElement(__ds_scope.MemoryScope, {
    scope: claim.scope
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MemoryConfidence, {
    level: claim.confidence || 'medium',
    value: claim.confidenceValue
  }))), /*#__PURE__*/React.createElement("p", {
    className: "lamp-conflict__text"
  }, claim.fact), /*#__PURE__*/React.createElement("div", {
    className: "lamp-conflict__ev"
  }, claim.evidenceCount != null ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "fact_check",
    size: 12
  }), /*#__PURE__*/React.createElement("b", null, claim.evidenceCount), " pieces of evidence") : null, claim.occurrences != null ? /*#__PURE__*/React.createElement("span", null, "Seen ", /*#__PURE__*/React.createElement("b", null, claim.occurrences), " times") : null, claim.source ? /*#__PURE__*/React.createElement("span", null, claim.source) : null, claim.lastConfirmed ? /*#__PURE__*/React.createElement("span", null, "Last confirmed ", /*#__PURE__*/React.createElement("b", null, claim.lastConfirmed)) : null), !readOnly && onPick ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: selected ? 'brand' : 'secondary',
    icon: selected ? 'check' : undefined,
    onClick: () => onPick(claim.id != null ? claim.id : index)
  }, pickLabel || 'Keep this') : null);
}
const MemoryConflict = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function MemoryConflict({
  claims = [],
  title = 'Two memories disagree',
  detail,
  resolved = false,
  resolution,
  picked,
  onPick,
  onKeepBoth,
  onInvestigate,
  readOnly = false,
  actions,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("article", _extends({
    ref: ref,
    className: ['lamp-conflict', resolved && 'lamp-conflict--resolved', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("header", {
    className: "lamp-conflict__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-conflict__glyph"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: resolved ? 'check_circle' : 'warning',
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    className: "lamp-conflict__titles"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-conflict__title"
  }, title), detail ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-conflict__detail"
  }, detail) : null), resolved ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "success",
    icon: "check",
    micro: true
  }, "Resolved") : null), /*#__PURE__*/React.createElement("div", {
    className: "lamp-conflict__claims"
  }, claims.map((c, i) => /*#__PURE__*/React.createElement(Claim, {
    key: c.id != null ? c.id : i,
    claim: c,
    index: i,
    selected: picked != null && picked === (c.id != null ? c.id : i),
    onPick: resolved ? undefined : onPick,
    pickLabel: c.pickLabel,
    readOnly: readOnly || resolved
  }))), resolved && resolution ? /*#__PURE__*/React.createElement("p", {
    className: "lamp-conflict__resolution"
  }, resolution) : null, !resolved && !readOnly && (onKeepBoth || onInvestigate || actions) ? /*#__PURE__*/React.createElement("footer", {
    className: "lamp-conflict__foot"
  }, actions, onKeepBoth ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "call_split",
    onClick: onKeepBoth
  }, "Keep both, scoped") : null, onInvestigate ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "quiet",
    icon: "search",
    onClick: onInvestigate
  }, "See the evidence") : null) : null);
}), {
  displayName: 'MemoryConflict'
});
Object.assign(__ds_scope, { MemoryConflict });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/memory/MemoryConflict.jsx", error: String((e && e.message) || e) }); }

// components/memory/MemoryFact.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const MemoryFact = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function MemoryFact({
  type = 'explicitFact',
  scope = 'genie',
  fact,
  confidence = 'high',
  confidenceValue,
  showConfidenceValue = false,
  source,
  evidenceCount,
  lastConfirmed,
  freshness,
  owner,
  contradictions = 0,
  access,
  state = 'approved',
  actions,
  onConfirm,
  onCorrect,
  onIgnore,
  className = '',
  ...rest
}, ref) {
  const conflict = contradictions > 0;
  return /*#__PURE__*/React.createElement("article", _extends({
    ref: ref,
    className: ['lamp-fact', conflict && 'lamp-fact--conflict', 'lamp-fact--' + state, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-fact__top"
  }, /*#__PURE__*/React.createElement(__ds_scope.MemoryBadge, {
    type: type
  }), /*#__PURE__*/React.createElement(__ds_scope.MemoryScope, {
    scope: scope
  }), access ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true,
    icon: access === 'Private' ? 'lock' : 'group'
  }, access) : null, state === 'stale' ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "warning",
    icon: "schedule"
  }, "Stale") : null, state === 'pendingReview' ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "waiting",
    icon: "how_to_reg"
  }, "Needs confirmation") : null, conflict ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "warning",
    icon: "warning"
  }, contradictions, " contradiction", contradictions > 1 ? 's' : '') : null, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MemoryConfidence, {
    level: confidence,
    value: confidenceValue,
    showValue: showConfidenceValue
  }))), /*#__PURE__*/React.createElement("p", {
    className: "lamp-fact__text"
  }, fact), source || evidenceCount != null ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-fact__ev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "fact_check",
    size: 13,
    style: {
      color: 'var(--memory-accent)'
    }
  }), evidenceCount != null ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, evidenceCount), " pieces of evidence") : null, source ? /*#__PURE__*/React.createElement("span", null, evidenceCount != null ? '· ' : '', source) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-fact__meta"
  }, lastConfirmed ? /*#__PURE__*/React.createElement("span", null, "Last confirmed ", /*#__PURE__*/React.createElement("b", null, lastConfirmed)) : null, freshness ? /*#__PURE__*/React.createElement("span", null, "Updated ", /*#__PURE__*/React.createElement("b", null, freshness)) : null, owner ? /*#__PURE__*/React.createElement("span", null, "Owner ", /*#__PURE__*/React.createElement("b", null, owner)) : null), actions || onConfirm || onCorrect || onIgnore ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-fact__actions"
  }, actions, onConfirm ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "check",
    onClick: onConfirm
  }, "Confirm") : null, onCorrect ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "ghost",
    icon: "edit",
    onClick: onCorrect
  }, "Correct") : null, onIgnore ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "quiet",
    onClick: onIgnore
  }, "Ignore") : null) : null);
}), {
  displayName: 'MemoryFact'
});
Object.assign(__ds_scope, { MemoryFact });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/memory/MemoryFact.jsx", error: String((e && e.message) || e) }); }

// components/memory/MemoryGraph.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* LAMP memory topology — an Obsidian-style force graph over what LAMP knows.
   Node geometry follows the product grammar: hexagon = Agent, circle = fact or Skill,
   square = Tool, diamond = Genie/Playbook scope. Colour carries kind, size carries weight.
   The simulation settles and then stops — at rest the graph is completely still. */

const KIND_COLOR = {
  fact: 'var(--memory-core)',
  policy: 'var(--gold-600)',
  observed: 'var(--slate-500)',
  inferred: 'var(--purple-500)',
  exception: 'var(--orange-500)',
  entity: 'var(--steel-500)',
  agent: 'var(--gold-500)',
  tool: 'var(--teal-500)',
  scope: 'var(--neutral-500)'
};
const SHAPE = {
  agent: 'hex',
  tool: 'square',
  scope: 'diamond'
};
function shapePath(shape, r) {
  if (shape === 'square') return 'M' + -r + ',' + -r + 'h' + r * 2 + 'v' + r * 2 + 'h' + -r * 2 + 'Z';
  if (shape === 'diamond') return 'M0,' + -r * 1.15 + 'L' + r * 1.15 + ',0L0,' + r * 1.15 + 'L' + -r * 1.15 + ',0Z';
  if (shape === 'hex') {
    const w = r * 1.15,
      h = r;
    return 'M' + -w * 0.5 + ',' + -h + 'L' + w * 0.5 + ',' + -h + 'L' + w + ',0L' + w * 0.5 + ',' + h + 'L' + -w * 0.5 + ',' + h + 'L' + -w + ',0Z';
  }
  return null;
}
const MemoryGraph = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function MemoryGraph({
  nodes = [],
  links = [],
  width = 640,
  height = 360,
  showLabels = true,
  labelMinRadius = 7,
  selectedId,
  onSelect,
  onHover,
  legend = true,
  iterations = 260,
  className = '',
  style,
  ...rest
}, ref) {
  const [tick, setTick] = React.useState(0);
  const [hover, setHover] = React.useState(null);
  const sim = React.useRef({
    pos: [],
    alpha: 1
  });
  const key = nodes.map(n => n.id).join('|') + '#' + links.length + '#' + width + 'x' + height;
  const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  React.useEffect(() => {
    const n = nodes.length;
    const cx = width / 2,
      cy = height / 2;
    const R = Math.min(width, height) * 0.34;
    // Deterministic seed — the same graph always lays out the same way.
    const pos = nodes.map((nd, i) => {
      const a = i / Math.max(1, n) * Math.PI * 2;
      const j = i * 2654435761 % 1000 / 1000;
      return {
        x: cx + Math.cos(a) * R * (0.6 + j * 0.6),
        y: cy + Math.sin(a) * R * (0.6 + j * 0.6),
        vx: 0,
        vy: 0
      };
    });
    const index = {};
    nodes.forEach((nd, i) => {
      index[nd.id] = i;
    });
    const edges = links.map(l => ({
      a: index[l.source],
      b: index[l.target],
      k: l.strength == null ? 1 : l.strength
    })).filter(e => e.a != null && e.b != null);
    const radius = nodes.map(nd => 5 + Math.min(9, (nd.value || 1) * 1.6));
    const step = alpha => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          let dx = pos[j].x - pos[i].x,
            dy = pos[j].y - pos[i].y;
          let d2 = dx * dx + dy * dy || 0.01;
          const min = radius[i] + radius[j] + 26;
          const f = 2200 / d2 * alpha;
          const d = Math.sqrt(d2);
          const push = d < min ? f + (min - d) * 0.12 * alpha : f;
          const ux = dx / d,
            uy = dy / d;
          pos[i].vx -= ux * push;
          pos[i].vy -= uy * push;
          pos[j].vx += ux * push;
          pos[j].vy += uy * push;
        }
      }
      for (const e of edges) {
        const dx = pos[e.b].x - pos[e.a].x,
          dy = pos[e.b].y - pos[e.a].y;
        const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
        const target = 78 / (0.6 + e.k);
        const f = (d - target) * 0.035 * e.k * alpha;
        const ux = dx / d,
          uy = dy / d;
        pos[e.a].vx += ux * f;
        pos[e.a].vy += uy * f;
        pos[e.b].vx -= ux * f;
        pos[e.b].vy -= uy * f;
      }
      for (let i = 0; i < nodes.length; i++) {
        pos[i].vx += (cx - pos[i].x) * 0.012 * alpha;
        pos[i].vy += (cy - pos[i].y) * 0.012 * alpha;
        pos[i].x += pos[i].vx *= 0.82;
        pos[i].y += pos[i].vy *= 0.82;
        const pad = radius[i] + (showLabels ? 16 : 6);
        pos[i].x = Math.max(pad, Math.min(width - pad, pos[i].x));
        pos[i].y = Math.max(pad, Math.min(height - pad - (showLabels ? 8 : 0), pos[i].y));
      }
    };
    sim.current = {
      pos,
      alpha: 1,
      radius,
      edges,
      index
    };
    if (reduced) {
      for (let i = 0; i < iterations; i++) step(Math.max(0.08, 1 - i / iterations));
      setTick(t => t + 1);
      return undefined;
    }
    let frame,
      alpha = 1,
      raf = 0;
    const loop = () => {
      step(alpha);
      alpha *= 0.955;
      sim.current.alpha = alpha;
      setTick(t => t + 1);
      raf += 1;
      if (alpha > 0.008 && raf < iterations) frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [key]);
  const {
    pos,
    radius,
    edges,
    index
  } = sim.current;
  const neighbours = React.useMemo(() => {
    if (!hover || !edges || !index) return null;
    const i = index[hover];
    const set = {
      [i]: 1
    };
    edges.forEach(e => {
      if (e.a === i) set[e.b] = 1;
      if (e.b === i) set[e.a] = 1;
    });
    return set;
  }, [hover, key, tick > 0]);
  if (!pos || !pos.length) return /*#__PURE__*/React.createElement("div", {
    className: 'lamp-graph ' + className,
    style: style
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: height
  }));
  const dim = i => neighbours && !neighbours[i] ? 0.18 : 1;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: 'lamp-graph ' + className,
    style: style
  }, /*#__PURE__*/React.createElement("svg", _extends({
    width: "100%",
    height: height,
    viewBox: '0 0 ' + width + ' ' + height,
    role: "img",
    "aria-label": 'Memory graph, ' + nodes.length + ' items and ' + links.length + ' relationships'
  }, rest), /*#__PURE__*/React.createElement("g", null, (edges || []).map((e, i) => {
    const l = links[i] || {};
    const on = !neighbours || neighbours[e.a] && neighbours[e.b];
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: pos[e.a].x,
      y1: pos[e.a].y,
      x2: pos[e.b].x,
      y2: pos[e.b].y,
      stroke: l.kind === 'inferred' ? 'var(--purple-400)' : l.kind === 'conflict' ? 'var(--status-danger)' : 'var(--border-strong)',
      strokeWidth: l.kind === 'conflict' ? 1.5 : 1,
      strokeDasharray: l.kind === 'inferred' || l.kind === 'suggested' ? '3 3' : undefined,
      opacity: on ? neighbours ? 0.9 : 0.5 : 0.1
    });
  })), /*#__PURE__*/React.createElement("g", null, nodes.map((nd, i) => {
    const r = radius[i];
    const color = nd.color || KIND_COLOR[nd.kind] || KIND_COLOR.fact;
    const shape = SHAPE[nd.kind];
    const isSel = selectedId === nd.id;
    const path = shapePath(shape, r);
    return /*#__PURE__*/React.createElement("g", {
      key: nd.id,
      transform: 'translate(' + pos[i].x.toFixed(1) + ',' + pos[i].y.toFixed(1) + ')',
      opacity: dim(i),
      style: {
        cursor: onSelect ? 'pointer' : 'default'
      },
      onMouseEnter: () => {
        setHover(nd.id);
        onHover && onHover(nd);
      },
      onMouseLeave: () => {
        setHover(null);
        onHover && onHover(null);
      },
      onClick: onSelect ? () => onSelect(nd) : undefined
    }, isSel ? path ? /*#__PURE__*/React.createElement("path", {
      d: shapePath(shape, r + 4),
      fill: "none",
      stroke: "var(--gold-500)",
      strokeWidth: 1.5
    }) : /*#__PURE__*/React.createElement("circle", {
      r: r + 4,
      fill: "none",
      stroke: "var(--gold-500)",
      strokeWidth: 1.5
    }) : null, path ? /*#__PURE__*/React.createElement("path", {
      d: path,
      fill: color,
      stroke: "var(--surface-primary)",
      strokeWidth: 1
    }) : /*#__PURE__*/React.createElement("circle", {
      r: r,
      fill: color,
      stroke: "var(--surface-primary)",
      strokeWidth: 1
    }), showLabels && r >= labelMinRadius ? /*#__PURE__*/React.createElement("text", {
      y: r + 11,
      textAnchor: "middle",
      style: {
        fill: 'var(--text-secondary)',
        font: '500 10px var(--font-sans)',
        pointerEvents: 'none'
      }
    }, nd.label) : null, /*#__PURE__*/React.createElement("title", null, nd.label + (nd.detail ? ' — ' + nd.detail : '')));
  }))), legend ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-graph__legend"
  }, [['fact', 'Fact'], ['policy', 'Policy'], ['observed', 'Observed'], ['inferred', 'Inferred'], ['exception', 'Exception'], ['entity', 'Entity'], ['agent', 'Agent'], ['tool', 'Tool'], ['scope', 'Scope']].map(([k, label]) => /*#__PURE__*/React.createElement("span", {
    className: "lamp-graph__key",
    key: k
  }, /*#__PURE__*/React.createElement("span", {
    className: 'lamp-graph__swatch lamp-graph__swatch--' + (SHAPE[k] || 'circle'),
    style: {
      background: KIND_COLOR[k]
    }
  }), label))) : null);
}), {
  displayName: 'MemoryGraph'
});
Object.assign(__ds_scope, { MemoryGraph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/memory/MemoryGraph.jsx", error: String((e && e.message) || e) }); }

// components/memory/MemoryScopeBar.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* The four memory scopes, narrow → broad, as one selectable bar.

   Agent working memory → Playbook memory → Genie memory → LAMP memory.

   Reading order is the inheritance order, and it never changes — every surface
   that shows scope shows it left-to-right in this sequence, so "broader" is
   always "further right". The step marks grow with scope (4 → 13px), matching
   MemoryScope's badge, so the shape carries the meaning and not just the label.

   Two modes, and two layouts, because they are different jobs.

   As a FILTER it is a segmented control: click a scope to narrow a memory list
   to it. Four segments across is right for a toolbar or a full-width panel.

   As a READ-OUT (`readOnly`) it is a vertical list by default. Four scopes, each
   with a count and possibly an "Inherited" mark, do not fit across a 320px
   Inspector — the names get squeezed out entirely and the counts collide. A
   list gives every scope a 28px row with its count right-aligned, which is the
   same rhythm as PropertyRow beside it. Pass layout="bar" to force the
   segmented look where there is room for it. */

const ORDER = ['agent', 'playbook', 'genie', 'lamp'];
const MemoryScopeBar = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function MemoryScopeBar({
  value,
  counts = {},
  inherited = [],
  owned,
  onChange,
  readOnly = false,
  scopes = ORDER,
  showCounts = true,
  full = false,
  layout,
  className = '',
  ...rest
}, ref) {
  /* A read-out lists; a filter is a bar. Either can be forced. */
  const asList = (layout || (readOnly ? 'list' : 'bar')) === 'list';
  /* An object owns one scope and reads from every broader one. Naming `owned` is
     enough to mark the rest inherited; `inherited` overrides it where the
     relationship is not simply positional. */
  const ownedAt = owned ? scopes.indexOf(owned) : -1;
  const isInherited = k => inherited.indexOf(k) !== -1 || ownedAt >= 0 && scopes.indexOf(k) > ownedAt;
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-scopebar', asList ? 'lamp-scopebar--list' : 'lamp-scopebar--bar', readOnly && 'lamp-scopebar--static', className].filter(Boolean).join(' '),
    role: readOnly ? 'group' : 'radiogroup',
    "aria-label": "Memory scope"
  }, rest), scopes.map(k => {
    const s = __ds_scope.MEMORY_SCOPES[k];
    if (!s) return null;
    const active = value === k;
    const dim = isInherited(k);
    const count = counts[k];
    const isOwned = owned === k;
    const cls = ['lamp-scopebar__item', 'lamp-scopebar__item--' + k, active && 'lamp-scopebar__item--active', isOwned && 'lamp-scopebar__item--owned', dim && 'lamp-scopebar__item--inherited'].filter(Boolean).join(' ');
    const body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "lamp-scopebar__mark"
    }), /*#__PURE__*/React.createElement("span", {
      className: "lamp-scopebar__name"
    }, asList || full ? s.label : s.short), showCounts && count != null ? /*#__PURE__*/React.createElement("span", {
      className: "lamp-scopebar__count"
    }, count) : null, isOwned ? /*#__PURE__*/React.createElement("span", {
      className: "lamp-scopebar__owned"
    }, "Owns") : null, dim ? /*#__PURE__*/React.createElement("span", {
      className: "lamp-scopebar__inherit"
    }, "Inherited") : null);
    if (readOnly) {
      return /*#__PURE__*/React.createElement("span", {
        key: k,
        className: cls,
        title: s.label
      }, body);
    }
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      type: "button",
      role: "radio",
      "aria-checked": active,
      className: cls,
      title: s.label,
      onClick: () => onChange && onChange(active ? undefined : k)
    }, body);
  }));
}), {
  displayName: 'MemoryScopeBar'
});
Object.assign(__ds_scope, { MemoryScopeBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/memory/MemoryScopeBar.jsx", error: String((e && e.message) || e) }); }

// components/memory/MemoryTimeline.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const MemoryTimeline = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function MemoryTimeline({
  items = [],
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-timeline ' + className
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "lamp-timeline__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-timeline__rail"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'lamp-timeline__dot' + (it.current ? ' lamp-timeline__dot--current' : it.accent ? ' lamp-timeline__dot--accent' : '')
  }), i < items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-timeline__line"
  }) : null), /*#__PURE__*/React.createElement("span", {
    className: "lamp-timeline__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-timeline__title"
  }, it.title), it.detail ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, it.detail) : null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-timeline__meta"
  }, [it.actor, it.timestamp].filter(Boolean).join(' · '))))));
}), {
  displayName: 'MemoryTimeline'
});
Object.assign(__ds_scope, { MemoryTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/memory/MemoryTimeline.jsx", error: String((e && e.message) || e) }); }

// components/memory/MemoryUsageBar.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const SCOPE_COLOR = {
  agent: 'var(--memory-accent)',
  playbook: 'var(--purple-400)',
  genie: 'var(--steel-500)',
  lamp: 'var(--slate-500)',
  evidence: 'var(--gold-500)',
  prompt: 'var(--dataviz-neutral-3)',
  completion: 'var(--dataviz-neutral-4)',
  cached: 'var(--green-500)',
  tool: 'var(--teal-500)'
};
const MemoryUsageBar = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function MemoryUsageBar({
  segments = [],
  total,
  unit = 'tokens',
  legend = true,
  className = '',
  ...rest
}, ref) {
  const sum = total != null ? total : segments.reduce((a, s) => a + s.value, 0);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-memusage ' + className
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-memusage__bar",
    role: "img",
    "aria-label": 'Context breakdown, ' + sum + ' ' + unit
  }, segments.map(s => /*#__PURE__*/React.createElement("span", {
    key: s.label,
    className: "lamp-memusage__seg",
    title: s.label + ': ' + s.value,
    style: {
      width: s.value / sum * 100 + '%',
      background: s.color || SCOPE_COLOR[s.key] || 'var(--dataviz-neutral-3)'
    }
  }))), legend ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-memusage__legend"
  }, segments.map(s => /*#__PURE__*/React.createElement("span", {
    className: "lamp-memusage__row",
    key: s.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-memusage__swatch",
    style: {
      background: s.color || SCOPE_COLOR[s.key] || 'var(--dataviz-neutral-3)'
    }
  }), s.label, /*#__PURE__*/React.createElement("span", {
    className: "lamp-memusage__val"
  }, s.value.toLocaleString()))), /*#__PURE__*/React.createElement("span", {
    className: "lamp-memusage__total"
  }, "Total", /*#__PURE__*/React.createElement("span", {
    className: "lamp-memusage__val"
  }, sum.toLocaleString(), " ", unit))) : null);
}), {
  displayName: 'MemoryUsageBar'
});
Object.assign(__ds_scope, { MemoryUsageBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/memory/MemoryUsageBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppShell.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const AppShell = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function AppShell({
  header,
  rail,
  dock,
  bottom,
  statusBar,
  dockWidth = 'var(--inspector-width)',
  children,
  className = '',
  style,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-shell ' + className,
    style: {
      height: '100%',
      ...style
    }
  }, rest), header, /*#__PURE__*/React.createElement("div", {
    className: "lamp-shell__body"
  }, rail ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-shell__rail"
  }, rail) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-shell__main"
  }, children, bottom ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-shell__bottom"
  }, bottom) : null), dock ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-shell__dock",
    style: {
      width: dockWidth
    }
  }, dock) : null), statusBar);
}), {
  displayName: 'AppShell'
});
Object.assign(__ds_scope, { AppShell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppShell.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Breadcrumb = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Breadcrumb({
  items = [],
  maxVisible = 5,
  onNavigate,
  className = '',
  ...rest
}, ref) {
  const overflow = items.length > maxVisible;
  const shown = overflow ? [items[0], {
    label: '…',
    overflow: true
  }, ...items.slice(-(maxVisible - 2))] : items;
  return /*#__PURE__*/React.createElement("nav", _extends({
    ref: ref,
    className: 'lamp-crumb ' + className,
    "aria-label": "Object path"
  }, rest), shown.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-crumb__sep"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron_right",
    size: 14
  })) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'lamp-crumb__item' + (i === shown.length - 1 ? ' lamp-crumb__item--current' : ''),
    onClick: () => onNavigate && !it.overflow && onNavigate(it, i),
    "aria-current": i === shown.length - 1 ? 'page' : undefined
  }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 14
  }) : null, it.label))));
}), {
  displayName: 'Breadcrumb'
});
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CommandPalette.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const CommandPalette = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function CommandPalette({
  open = true,
  query = '',
  onQueryChange,
  groups = [],
  activeId,
  onSelect,
  onClose,
  placeholder = 'Search or run a command',
  footer,
  className = '',
  ...rest
}, ref) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-palette ' + className,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Command palette",
    onClick: onClose
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-palette__box",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "lamp-palette__search"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 16
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: query,
    placeholder: placeholder,
    onChange: e => onQueryChange && onQueryChange(e.target.value)
  }), /*#__PURE__*/React.createElement(__ds_scope.Kbd, null, "Esc")), /*#__PURE__*/React.createElement("div", {
    className: "lamp-palette__list",
    role: "listbox"
  }, groups.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 12px',
      textAlign: 'center',
      fontSize: 13,
      color: 'var(--text-tertiary)'
    }
  }, "No matches") : null, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "lamp-palette__group"
  }, g.label), g.items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    type: "button",
    role: "option",
    "aria-selected": activeId === it.id,
    className: 'lamp-palette__item' + (activeId === it.id ? ' lamp-palette__item--active' : '') + (it.danger ? ' lamp-palette__item--danger' : ''),
    onClick: () => onSelect && onSelect(it)
  }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 16
  }) : null, /*#__PURE__*/React.createElement("span", null, it.label), it.context ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      fontSize: 12
    }
  }, it.context) : null, it.shortcut ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-palette__hint"
  }, /*#__PURE__*/React.createElement(__ds_scope.Kbd, {
    keys: it.shortcut
  })) : null))))), /*#__PURE__*/React.createElement("div", {
    className: "lamp-palette__foot"
  }, footer || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "Navigate"), /*#__PURE__*/React.createElement(__ds_scope.Kbd, {
    keys: ['↑', '↓']
  }), /*#__PURE__*/React.createElement("span", null, "Open"), /*#__PURE__*/React.createElement(__ds_scope.Kbd, null, "Enter")))));
}), {
  displayName: 'CommandPalette'
});
Object.assign(__ds_scope, { CommandPalette });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CommandPalette.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FilterBar.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const FilterBar = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function FilterBar({
  children,
  activeCount = 0,
  onClear,
  right,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-filterbar ' + className
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "filter_list",
    size: 14,
    style: {
      color: 'var(--text-tertiary)'
    }
  }), children, activeCount > 0 ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "quiet",
    size: "xs",
    onClick: onClear
  }, "Clear ", activeCount) : null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-filterbar__spacer"
  }), right);
}), {
  displayName: 'FilterBar'
});
const Pagination = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Pagination({
  page = 1,
  pageCount = 1,
  range,
  onPage,
  pageSize,
  onPageSize,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-pager ' + className
  }, rest), range ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-pager__range"
  }, range) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "xs",
    icon: "chevron_left",
    "aria-label": "Previous page",
    disabled: page <= 1,
    onClick: () => onPage && onPage(page - 1)
  }), /*#__PURE__*/React.createElement("span", {
    className: "lamp-pager__range"
  }, page, " / ", pageCount), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "xs",
    icon: "chevron_right",
    "aria-label": "Next page",
    disabled: page >= pageCount,
    onClick: () => onPage && onPage(page + 1)
  }));
}), {
  displayName: 'Pagination'
});
Object.assign(__ds_scope, { FilterBar, Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/GlobalHeader.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const GlobalHeader = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function GlobalHeader({
  brand,
  center,
  right,
  wordmark = 'LAMP',
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("header", _extends({
    ref: ref,
    className: 'lamp-header ' + className
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-header__brand"
  }, brand || /*#__PURE__*/React.createElement("span", {
    className: "lamp-header__wordmark"
  }, wordmark)), /*#__PURE__*/React.createElement("div", {
    className: "lamp-header__center"
  }, center), /*#__PURE__*/React.createElement("div", {
    className: "lamp-header__right"
  }, right));
}), {
  displayName: 'GlobalHeader'
});
Object.assign(__ds_scope, { GlobalHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/GlobalHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ObjectTree.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const ObjectTree = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ObjectTree({
  nodes = [],
  selectedId,
  onSelect,
  onToggle,
  expanded = {},
  className = '',
  ...rest
}, ref) {
  const render = (node, depth) => {
    const open = expanded[node.id] !== false;
    const kids = node.children || [];
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: node.id
    }, /*#__PURE__*/React.createElement("div", {
      className: 'lamp-tree__row' + (selectedId === node.id ? ' lamp-tree__row--selected' : ''),
      style: {
        paddingLeft: 4 + depth * 14
      },
      onClick: () => onSelect && onSelect(node),
      role: "treeitem",
      "aria-selected": selectedId === node.id,
      "aria-expanded": kids.length ? open : undefined,
      tabIndex: 0
    }, kids.length ? /*#__PURE__*/React.createElement("span", {
      className: 'lamp-tree__twist' + (open ? ' lamp-tree__twist--open' : ''),
      onClick: e => {
        e.stopPropagation();
        onToggle && onToggle(node);
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron_right",
      size: 14
    })) : /*#__PURE__*/React.createElement("span", {
      className: "lamp-tree__twist"
    }), node.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: node.icon,
      size: 14
    }) : null, /*#__PURE__*/React.createElement("span", {
      className: "lamp-tree__text"
    }, node.label), node.status ? /*#__PURE__*/React.createElement(__ds_scope.StatusDot, {
      status: node.status
    }) : null, node.meta ? /*#__PURE__*/React.createElement("span", {
      className: "lamp-nav__meta"
    }, node.meta) : null), open && kids.map(k => render(k, depth + 1)));
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-tree ' + className,
    role: "tree"
  }, rest), nodes.map(n => render(n, 0)));
}), {
  displayName: 'ObjectTree'
});
Object.assign(__ds_scope, { ObjectTree });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ObjectTree.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedControl.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const SegmentedControl = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function SegmentedControl({
  options = [],
  value,
  onChange,
  size = 'sm',
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-seg', size === 'md' && 'lamp-seg--lg', className].filter(Boolean).join(' '),
    role: "group"
  }, rest), options.map(o => {
    const id = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    const active = value === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      "aria-pressed": active,
      className: 'lamp-seg__item' + (active ? ' lamp-seg__item--active' : ''),
      onClick: () => onChange && onChange(id)
    }, typeof o === 'object' && o.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: o.icon,
      size: 14
    }) : null, label);
  }));
}), {
  displayName: 'SegmentedControl'
});
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const SideNav = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function SideNav({
  children,
  collapsed = false,
  footer,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    ref: ref,
    className: ['lamp-nav', collapsed && 'lamp-nav__rail', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflow: 'auto'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-nav__foot"
  }, footer) : null);
}), {
  displayName: 'SideNav'
});
const NavSection = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function NavSection({
  label,
  actions,
  children,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: "lamp-nav__section"
  }, rest), label ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-nav__label"
  }, label, actions ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, actions) : null) : null, children);
}), {
  displayName: 'NavSection'
});
const NavItem = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function NavItem({
  icon,
  label,
  meta,
  active = false,
  collapsed = false,
  badge,
  onClick,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: ref,
    type: "button",
    className: 'lamp-nav__item' + (active ? ' lamp-nav__item--active' : ''),
    onClick: onClick,
    "aria-current": active ? 'page' : undefined,
    title: collapsed ? label : undefined
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, !collapsed ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-nav__text"
  }, label) : null, !collapsed && meta ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-nav__meta"
  }, meta) : null, !collapsed ? badge : null);
}), {
  displayName: 'NavItem'
});
Object.assign(__ds_scope, { SideNav, NavSection, NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StatusBar.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const StatusBar = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function StatusBar({
  items = [],
  right = [],
  className = '',
  ...rest
}, ref) {
  const cell = (it, i, isRight) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: 'lamp-statusbar__item' + (isRight && i === 0 ? ' lamp-statusbar__item--right' : ''),
    title: it.title
  }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 12
  }) : null, it.label ? /*#__PURE__*/React.createElement("span", null, it.label) : null, it.value != null ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-statusbar__val"
  }, it.value) : null);
  return /*#__PURE__*/React.createElement("footer", _extends({
    ref: ref,
    className: 'lamp-statusbar ' + className
  }, rest), items.map((it, i) => cell(it, i, false)), right.map((it, i) => cell(it, i, true)));
}), {
  displayName: 'StatusBar'
});
Object.assign(__ds_scope, { StatusBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StatusBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/WorkspaceSwitcher.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const WorkspaceSwitcher = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function WorkspaceSwitcher({
  name,
  subtitle,
  initials,
  onClick,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: ref,
    type: "button",
    className: 'lamp-wsw ' + className,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lamp-wsw__avatar"
  }, initials || String(name || '?').slice(0, 2).toUpperCase()), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-wsw__name"
  }, name), subtitle ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-wsw__sub"
  }, subtitle) : null), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "unfold_more",
    size: 14,
    style: {
      color: 'var(--text-tertiary)'
    }
  }));
}), {
  displayName: 'WorkspaceSwitcher'
});
Object.assign(__ds_scope, { WorkspaceSwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/WorkspaceSwitcher.jsx", error: String((e && e.message) || e) }); }

// components/objects/AgentIsland.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* A group inside a Playbook section: one bonded cluster, or a single Agent working alone.
   Bonds exist only inside an island; membership in the Playbook is carried by the frame. */
const AgentIsland = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function AgentIsland({
  name,
  note,
  solo = false,
  outlined = false,
  selected = false,
  x,
  y,
  actions,
  children,
  className = '',
  style,
  ...rest
}, ref) {
  const positioned = x != null || y != null;
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-island', solo && 'lamp-island--solo', outlined && 'lamp-island--outlined', selected && 'lamp-island--selected', className].filter(Boolean).join(' '),
    style: positioned ? {
      position: 'absolute',
      left: x,
      top: y,
      ...style
    } : style
  }, rest), name || note || actions ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-island__head"
  }, name ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-island__name"
  }, name) : null, note ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-island__note"
  }, note) : null, actions ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 2
    }
  }, actions) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-island__body"
  }, children));
}), {
  displayName: 'AgentIsland'
});
Object.assign(__ds_scope, { AgentIsland });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/objects/AgentIsland.jsx", error: String((e && e.message) || e) }); }

// components/objects/BondEdge.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* Distance from a flat-top hexagon's centre to its boundary along `angle`.
   A hexagon is not a circle: that distance runs from the apothem (h/2, toward a
   flat side) out to the circumradius (w/2, toward a point), and a bond trimmed
   by a single radius is visibly short in one direction and visibly buried in the
   other. Edge normals sit at 30° + k·60° for a flat-top hexagon, so the reach in
   any direction is the apothem over the cosine of the angle to the nearest one. */
function hexReach(w, h, angle) {
  const sixty = Math.PI / 3;
  const thirty = Math.PI / 6;
  let rel = ((angle - thirty) % sixty + sixty) % sixty;
  if (rel > thirty) rel -= sixty;
  const apothem = h / 2;
  /* Clamped to the circumradius: floating-point angles near a vertex can push
     the cosine far enough toward zero to send the reach to infinity. */
  return Math.min(apothem / Math.cos(rel), w / 2);
}
const BOND_STROKE = {
  valid: 'var(--bond-edge-confirmed)',
  incomplete: 'var(--bond-edge)',
  conflicting: 'var(--bond-edge-conflict)',
  requiresConfig: 'var(--status-warning)',
  learned: 'var(--bond-edge-suggested)',
  suggested: 'var(--bond-edge-suggested)',
  manual: 'var(--bond-edge-confirmed)',
  locked: 'var(--bond-edge-locked)',
  preview: 'var(--gold-400)'
};

/* One bond between two lattice slots. Render inside an SVG overlay sized to the lattice.
   A bond means membership and composition — never a data wire, never a port connector. */
const BondEdge = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function BondEdge({
  from,
  to,
  size = 'md',
  state = 'valid',
  energy = false,
  environment = 'draft',
  junction = true,
  className = '',
  ...rest
}, ref) {
  const stroke = BOND_STROKE[state] || BOND_STROKE.valid;
  const dashed = state === 'suggested' || state === 'learned' || state === 'preview' || state === 'incomplete';
  const mid = {
    x: (from.x + to.x) / 2,
    y: (from.y + to.y) / 2
  };

  /* Where the line starts and ends, which depends entirely on whether the two
     Agents are touching.
      Touching (gap 0–2), a centre-to-centre line would run under both fills, so
     the bond is a short seam marker straddling the shared edge. Spaced apart, it
     is a real connector and has to reach from one hexagon's boundary to the
     other's — trimmed by each hexagon's reach along the line, plus a small gap
     so the stroke does not touch the outline.
      Drawing the seam marker at every gap is what leaves a bond hanging in open
     space between two distant Agents, attached to neither. */
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const span = Math.hypot(dx, dy) || 1;
  const angle = Math.atan2(dy, dx);
  const [hw, hh] = __ds_scope.AGENT_SIZES[size] || __ds_scope.AGENT_SIZES.md;
  const PAD = 3;
  const reachFrom = hexReach(hw, hh, angle) + PAD;
  const reachTo = hexReach(hw, hh, angle + Math.PI) + PAD;
  let a;
  let b;
  if (span - reachFrom - reachTo < 6) {
    const t = 0.34;
    a = {
      x: from.x + dx * t,
      y: from.y + dy * t
    };
    b = {
      x: to.x - dx * t,
      y: to.y - dy * t
    };
  } else {
    a = {
      x: from.x + dx / span * reachFrom,
      y: from.y + dy / span * reachFrom
    };
    b = {
      x: to.x - dx / span * reachTo,
      y: to.y - dy / span * reachTo
    };
  }
  const spark = environment === 'simulation' ? 'var(--simulation-energy)' : 'var(--energy-bright)';
  return /*#__PURE__*/React.createElement("g", _extends({
    ref: ref,
    className: ['lamp-bond', energy && 'lamp-bond--energy', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("line", {
    className: "lamp-bond__line",
    x1: a.x,
    y1: a.y,
    x2: b.x,
    y2: b.y,
    stroke: stroke,
    strokeWidth: state === 'preview' ? 2 : 2.5,
    strokeLinecap: "round",
    strokeDasharray: dashed ? '3 3' : undefined,
    opacity: state === 'preview' ? 0.85 : 1
  }), junction ? /*#__PURE__*/React.createElement("circle", {
    cx: mid.x,
    cy: mid.y,
    r: 3.5,
    fill: stroke,
    stroke: "var(--surface-primary)",
    strokeWidth: 1
  }) : null, state === 'locked' ? /*#__PURE__*/React.createElement("circle", {
    cx: mid.x,
    cy: mid.y,
    r: 5,
    fill: "none",
    stroke: stroke,
    strokeWidth: 1
  }) : null, energy ? /*#__PURE__*/React.createElement("circle", {
    className: "lamp-bond__spark",
    r: 2.5,
    fill: spark,
    style: {
      offsetPath: 'path("M' + a.x + ',' + a.y + ' L' + b.x + ',' + b.y + '")'
    }
  }) : null);
}), {
  displayName: 'BondEdge'
});

/* Overlay host: an absolutely-positioned SVG matching the lattice box. */
const BondLayer = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function BondLayer({
  width,
  height,
  children,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    width: width,
    height: height,
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      overflow: 'visible',
      pointerEvents: 'none',
      zIndex: 2
    },
    "aria-hidden": "true"
  }, rest), children);
}), {
  displayName: 'BondLayer'
});
Object.assign(__ds_scope, { BondEdge, BondLayer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/objects/BondEdge.jsx", error: String((e && e.message) || e) }); }

// components/objects/EntityChip.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const ENTITY_GLYPH = {
  person: 'person',
  team: 'groups',
  customer: 'store',
  vendor: 'local_shipping',
  project: 'folder_open',
  product: 'inventory_2',
  service: 'room_service',
  invoice: 'receipt',
  order: 'shopping_cart',
  contract: 'handshake',
  policy: 'gavel',
  document: 'description',
  system: 'dns',
  channel: 'forum',
  location: 'place',
  event: 'event',
  decision: 'rule',
  exception: 'report',
  relationship: 'link'
};
const EntityChip = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function EntityChip({
  type = 'person',
  name,
  initials,
  showType = false,
  glyph,
  onClick,
  className = '',
  ...rest
}, ref) {
  const round = type === 'person';
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: ['lamp-entity', onClick && 'lamp-entity--interactive', className].filter(Boolean).join(' '),
    onClick: onClick,
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined
  }, rest), initials ? /*#__PURE__*/React.createElement("span", {
    className: 'lamp-entity__avatar' + (round ? ' lamp-entity__avatar--round' : '')
  }, initials) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph || ENTITY_GLYPH[type] || 'circle',
    size: 13,
    style: {
      color: 'var(--text-tertiary)'
    }
  }), showType ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-entity__type"
  }, type) : null, /*#__PURE__*/React.createElement("span", null, name));
}), {
  displayName: 'EntityChip'
});
Object.assign(__ds_scope, { EntityChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/objects/EntityChip.jsx", error: String((e && e.message) || e) }); }

// components/objects/GenieCard.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const GenieCard = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function GenieCard({
  name,
  purpose,
  status = 'draft',
  selected = false,
  live = false,
  stats = [],
  hive,
  actions,
  onClick,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-genie', selected && 'lamp-genie--selected', live && 'lamp-genie--live', onClick && 'lamp-genie--interactive', className].filter(Boolean).join(' '),
    onClick: onClick,
    role: onClick ? 'button' : 'group',
    "aria-label": 'Genie ' + (name || '')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-genie__head"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "hive",
    size: 18,
    style: {
      color: live ? 'var(--gold-500)' : 'var(--text-secondary)',
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-genie__name"
  }, name), purpose ? /*#__PURE__*/React.createElement("p", {
    className: "lamp-genie__purpose"
  }, purpose) : null), /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status
  }), actions), hive ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-genie__hive"
  }, hive) : null, stats.length ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-genie__stats"
  }, stats.map(s => /*#__PURE__*/React.createElement("span", {
    className: "lamp-genie__stat",
    key: s.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-genie__stat-v"
  }, s.value), /*#__PURE__*/React.createElement("span", {
    className: "lamp-genie__stat-l"
  }, s.label)))) : null);
}), {
  displayName: 'GenieCard'
});
Object.assign(__ds_scope, { GenieCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/objects/GenieCard.jsx", error: String((e && e.message) || e) }); }

// components/objects/ObjectRow.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const KIND_GLYPH = {
  agent: 'hexagon',
  skill: 'circle',
  tool: 'square',
  playbook: 'layers',
  genie: 'hive',
  lamp: 'lightbulb',
  memory: 'database',
  run: 'history',
  approval: 'how_to_reg',
  activity: 'bolt',
  audit: 'receipt_long',
  person: 'person',
  team: 'groups',
  customer: 'store',
  vendor: 'local_shipping',
  document: 'description',
  policy: 'gavel',
  process: 'account_tree',
  integration: 'extension',
  member: 'person'
};
const ObjectRow = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ObjectRow({
  kind = 'agent',
  glyph,
  name,
  secondary,
  status,
  statusLabel,
  badges,
  meta,
  timestamp,
  actions,
  selected = false,
  compact = false,
  onClick,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-objrow', compact && 'lamp-objrow--compact', selected && 'lamp-objrow--selected', className].filter(Boolean).join(' '),
    onClick: onClick,
    role: "button",
    tabIndex: 0,
    "aria-selected": selected
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lamp-objrow__glyph"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph || KIND_GLYPH[kind] || 'circle',
    size: compact ? 14 : 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "lamp-objrow__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-objrow__name"
  }, name), secondary ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-objrow__sub"
  }, secondary) : null), /*#__PURE__*/React.createElement("span", {
    className: "lamp-objrow__right"
  }, badges, meta ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-objrow__sub"
  }, meta) : null, status ? /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status,
    label: statusLabel,
    mode: compact ? 'label' : 'badge'
  }) : null, timestamp ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-objrow__time"
  }, timestamp) : null, actions));
}), {
  displayName: 'ObjectRow'
});
const ObjectList = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ObjectList({
  children,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-objlist ' + className,
    role: "list",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, rest), children);
}), {
  displayName: 'ObjectList'
});
Object.assign(__ds_scope, { ObjectRow, ObjectList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/objects/ObjectRow.jsx", error: String((e && e.message) || e) }); }

// components/objects/PlaybookCluster.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const STATE_STATUS = {
  observed: 'observed',
  inferred: 'inferred',
  draft: 'draft',
  unvalidated: 'draft',
  simulation: 'simulation',
  simulationFailed: 'error',
  validated: 'validated',
  stable: 'validated',
  live: 'live',
  learning: 'learning',
  paused: 'paused',
  degraded: 'attention',
  failed: 'error',
  error: 'error',
  disabled: 'disabled',
  deprecated: 'disabled'
};
const PlaybookCluster = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function PlaybookCluster({
  name,
  state = 'draft',
  selected = false,
  agents,
  meta = [],
  actions,
  padding,
  layout = 'flow',
  dropState,
  collapsed = false,
  resizable = false,
  width,
  height,
  children,
  onClick,
  className = '',
  style,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-pb', 'lamp-pb--' + state, selected && 'lamp-pb--selected', layout === 'free' && 'lamp-pb--free', dropState === 'valid' && 'lamp-pb--drop', dropState === 'invalid' && 'lamp-pb--drop-invalid', collapsed && 'lamp-pb--collapsed', className].filter(Boolean).join(' '),
    style: {
      padding,
      width,
      height,
      ...style
    },
    onClick: onClick,
    role: "group",
    "aria-label": 'Playbook ' + (name || '')
  }, rest), name || actions ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-pb__head"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "layers",
    size: 13,
    style: {
      color: 'var(--text-tertiary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "lamp-pb__title"
  }, name), /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: STATE_STATUS[state] || 'draft'
  }), agents != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--text-tertiary)'
    }
  }, agents, " Agents") : null, actions) : null, collapsed ? null : /*#__PURE__*/React.createElement("div", {
    className: "lamp-pb__body"
  }, children), resizable && !collapsed ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-pb__grip",
    "aria-hidden": "true"
  }) : null, meta.length ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-pb__foot"
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, m))) : null);
}), {
  displayName: 'PlaybookCluster'
});
Object.assign(__ds_scope, { PlaybookCluster });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/objects/PlaybookCluster.jsx", error: String((e && e.message) || e) }); }

// components/objects/SkillOrb.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const SKILL_SIZES = {
  xs: 16,
  sm: 20,
  md: 28,
  lg: 36,
  xl: 48
};
const SkillOrb = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function SkillOrb({
  size = 'md',
  state = 'available',
  glyph = 'flare',
  name,
  label,
  onClick,
  className = '',
  style,
  ...rest
}, ref) {
  const px = SKILL_SIZES[size] || SKILL_SIZES.md;
  const orb = /*#__PURE__*/React.createElement("span", _extends({
    className: ['lamp-skill', 'lamp-skill--' + state, onClick && 'lamp-skill--interactive', className].filter(Boolean).join(' '),
    style: {
      width: px,
      height: px,
      ...style
    },
    onClick: onClick,
    role: onClick ? 'button' : 'img',
    "aria-label": name ? name + ' Skill' : 'Skill',
    tabIndex: onClick ? 0 : undefined,
    title: name
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: px <= 20 ? 10 : px <= 28 ? 14 : 18
  }), state === 'error' || state === 'waiting' ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-skill__dot"
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusDot, {
    status: state === 'error' ? 'error' : 'waiting'
  })) : null);
  if (!label) return orb;
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "lamp-skillrow"
  }, orb, /*#__PURE__*/React.createElement("span", {
    className: "lamp-skillrow__name"
  }, name));
}), {
  displayName: 'SkillOrb'
});
Object.assign(__ds_scope, { SKILL_SIZES, SkillOrb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/objects/SkillOrb.jsx", error: String((e && e.message) || e) }); }

// components/patterns/BusinessProcess.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* The standard business process library.

   Operators do not arrive knowing how to specify a Playbook. Asking someone to
   name a process, list its connectors and define its expected outcomes on a
   blank form gets you a blank form back — or worse, a Playbook that runs without
   anyone having decided what "done" means. So LAMP proposes.

   Every entry here is a process that exists in essentially every business, under
   names that have been stable for decades: procure-to-pay, order-to-cash,
   record-to-report, hire-to-retire. Each carries the steps, the connector
   categories, the human checkpoints, the exceptions that actually happen, and —
   the part nobody writes down — the expected outcomes and how they are measured.

   MatchProcess scores a set of Agents against the library and returns ranked
   candidates with the evidence for each, so the proposal can be argued with
   rather than merely accepted. Nothing here is auto-applied: a match is a
   suggestion with its reasoning shown, and the operator confirms.

   This is deliberately not an ontology of every process a business can have. It
   is the set LAMP can recognise from a handful of Agents with reasonable
   confidence. Everything else is authored by hand, starting from `blank`.

   A note on `providers`: these are Simple Icons slugs, and Simple Icons carries
   no Microsoft marks, so Outlook, Excel and SharePoint are absent from the
   candidate lists despite being extremely common in these processes. The
   connector is the CATEGORY ("Email", "Spreadsheets"); providers only decide
   which mark is drawn on the tile. A business running Outlook still matches the
   Email connector — it just renders with the generic glyph until a real mark is
   vendored into assets/brand/. */

const BUSINESS_PROCESSES = [{
  id: 'procure-to-pay',
  name: 'Procure to pay',
  domain: 'Finance',
  aka: ['P2P', 'Accounts payable', 'Vendor payment'],
  purpose: 'Take a purchase from requisition through to a paid, reconciled invoice.',
  trigger: 'A purchase requisition is raised, or a supplier invoice arrives.',
  steps: [{
    name: 'Receive requisition',
    kind: 'agent'
  }, {
    name: 'Verify vendor and terms',
    kind: 'agent'
  }, {
    name: 'Match invoice to PO and receipt',
    kind: 'agent'
  }, {
    name: 'Resolve exceptions',
    kind: 'agent'
  }, {
    name: 'Approve payment',
    kind: 'human'
  }, {
    name: 'Post and schedule payment',
    kind: 'agent'
  }, {
    name: 'Reconcile',
    kind: 'agent'
  }],
  roles: ['Invoice Matcher', 'Vendor Verifier', 'Exception Handler', 'Payment Approver'],
  connectors: [{
    category: 'ERP',
    providers: ['sap', 'oracle', 'xero'],
    permission: 'Write',
    why: 'Post invoices and payment runs.'
  }, {
    category: 'Email',
    providers: ['gmail'],
    permission: 'Read',
    why: 'Invoices arrive as attachments.'
  }, {
    category: 'Document storage',
    providers: ['googledrive', 'dropbox'],
    permission: 'Read',
    why: 'Contracts and purchase orders.'
  }, {
    category: 'Messaging',
    providers: ['slack', 'whatsapp'],
    permission: 'Write',
    why: 'Chase approvals where they actually happen.'
  }],
  outcomes: [{
    label: 'Invoices matched without human touch',
    measure: 'Share of runs with no intervention',
    target: '85%'
  }, {
    label: 'Payment made within terms',
    measure: 'Days to pay against agreed terms',
    target: 'On or before'
  }, {
    label: 'No duplicate payments',
    measure: 'Duplicates detected before posting',
    target: '100%'
  }, {
    label: 'Exceptions explained',
    measure: 'Every held invoice carries a reason',
    target: '100%'
  }],
  checkpoints: [{
    name: 'Approve payment',
    when: 'Above the authority limit, or any new vendor.'
  }, {
    name: 'Confirm vendor bank change',
    when: 'Always. Bank detail changes are the fraud surface.'
  }],
  exceptions: ['Invoice with no purchase order', 'Quantity mismatch on receipt', 'Duplicate invoice number', 'Vendor not on file', 'Currency or tax mismatch'],
  signals: ['invoice', 'vendor', 'supplier', 'payment', 'purchase', 'procure', 'po', 'ap', 'payable', 'sap', 'reconcile', 'approve']
}, {
  id: 'order-to-cash',
  name: 'Order to cash',
  domain: 'Finance',
  aka: ['O2C', 'Accounts receivable', 'Billing'],
  purpose: 'Take a customer order through fulfilment, invoicing and collection to cash received.',
  trigger: 'An order is placed, or a billing period closes.',
  steps: [{
    name: 'Validate order and credit',
    kind: 'agent'
  }, {
    name: 'Confirm fulfilment',
    kind: 'agent'
  }, {
    name: 'Raise invoice',
    kind: 'agent'
  }, {
    name: 'Send and track',
    kind: 'agent'
  }, {
    name: 'Chase overdue',
    kind: 'agent'
  }, {
    name: 'Escalate or write off',
    kind: 'human'
  }, {
    name: 'Apply cash and reconcile',
    kind: 'agent'
  }],
  roles: ['Order Validator', 'Invoice Raiser', 'Collections Agent', 'Cash Applier'],
  connectors: [{
    category: 'CRM',
    providers: ['salesforce', 'hubspot'],
    permission: 'Read',
    why: 'Customer, contract and order records.'
  }, {
    category: 'ERP',
    providers: ['sap', 'xero'],
    permission: 'Write',
    why: 'Raise invoices and apply cash.'
  }, {
    category: 'Email',
    providers: ['gmail'],
    permission: 'Write',
    why: 'Send invoices and chase.'
  }, {
    category: 'Payments',
    providers: ['stripe'],
    permission: 'Read',
    why: 'Match settlements to invoices.'
  }],
  outcomes: [{
    label: 'Invoice raised same day as fulfilment',
    measure: 'Lag between fulfilment and invoice',
    target: '< 1 day'
  }, {
    label: 'Days sales outstanding falling',
    measure: 'Rolling 90-day DSO',
    target: 'Down on quarter'
  }, {
    label: 'Every chase is accurate',
    measure: 'Chases sent against already-paid invoices',
    target: '0'
  }, {
    label: 'Disputes routed to a person quickly',
    measure: 'Time to human on a disputed invoice',
    target: '< 2 hours'
  }],
  checkpoints: [{
    name: 'Escalate or write off',
    when: 'Before any write-off, and before legal escalation.'
  }, {
    name: 'Credit hold',
    when: 'Before releasing an order for a customer over their limit.'
  }],
  exceptions: ['Customer disputes the amount', 'Partial payment received', 'Credit limit exceeded', 'Order fulfilled but not confirmed'],
  signals: ['order', 'customer', 'invoice', 'billing', 'receivable', 'ar', 'collections', 'dunning', 'cash', 'salesforce', 'dso']
}, {
  id: 'record-to-report',
  name: 'Record to report',
  domain: 'Finance',
  aka: ['R2R', 'Month-end close', 'Financial close'],
  purpose: 'Close the books for a period and produce reviewed, explainable statements.',
  trigger: 'A period ends.',
  steps: [{
    name: 'Freeze the period',
    kind: 'agent'
  }, {
    name: 'Reconcile accounts',
    kind: 'agent'
  }, {
    name: 'Post accruals and adjustments',
    kind: 'agent'
  }, {
    name: 'Investigate variances',
    kind: 'agent'
  }, {
    name: 'Review and sign off',
    kind: 'human'
  }, {
    name: 'Publish statements',
    kind: 'agent'
  }],
  roles: ['Reconciler', 'Variance Analyst', 'Accrual Poster', 'Close Coordinator'],
  connectors: [{
    category: 'ERP',
    providers: ['sap', 'oracle', 'quickbooks'],
    permission: 'Write',
    why: 'Ledger, journals and trial balance.'
  }, {
    category: 'Spreadsheets',
    providers: ['googlesheets'],
    permission: 'Write',
    why: 'Close schedules still live here.'
  }, {
    category: 'Banking',
    providers: [],
    permission: 'Read',
    why: 'Statement lines for reconciliation.'
  }],
  outcomes: [{
    label: 'Close completed on schedule',
    measure: 'Working days to close',
    target: '≤ 5'
  }, {
    label: 'Every variance has an explanation',
    measure: 'Unexplained variances at sign-off',
    target: '0'
  }, {
    label: 'Reconciliations clean',
    measure: 'Accounts reconciled without manual entry',
    target: '90%'
  }, {
    label: 'Audit trail complete',
    measure: 'Journals with evidence attached',
    target: '100%'
  }],
  checkpoints: [{
    name: 'Review and sign off',
    when: 'Always. A close is not a close until a person signs it.'
  }, {
    name: 'Material adjustment',
    when: 'Any journal above the materiality threshold.'
  }],
  exceptions: ['Unreconciled bank line', 'Late invoice after freeze', 'Intercompany mismatch', 'FX revaluation dispute'],
  signals: ['close', 'month-end', 'reconcile', 'ledger', 'journal', 'accrual', 'variance', 'statement', 'audit', 'period', 'balance']
}, {
  id: 'hire-to-retire',
  name: 'Hire to retire',
  domain: 'People',
  aka: ['H2R', 'Recruitment', 'Employee lifecycle'],
  purpose: 'Take a role from opening through hiring and onboarding to a productive employee.',
  trigger: 'A role is approved, or an application arrives.',
  steps: [{
    name: 'Open and publish the role',
    kind: 'agent'
  }, {
    name: 'Screen applications',
    kind: 'agent'
  }, {
    name: 'Schedule interviews',
    kind: 'agent'
  }, {
    name: 'Collect feedback',
    kind: 'agent'
  }, {
    name: 'Decide and offer',
    kind: 'human'
  }, {
    name: 'Run onboarding',
    kind: 'agent'
  }],
  roles: ['Screener', 'Scheduler', 'Feedback Collector', 'Onboarding Coordinator'],
  connectors: [{
    category: 'ATS',
    providers: ['greenhouse', 'personio'],
    permission: 'Write',
    why: 'Candidate records and stages.'
  }, {
    category: 'Calendar',
    providers: ['googlecalendar'],
    permission: 'Write',
    why: 'Interview scheduling.'
  }, {
    category: 'Email',
    providers: ['gmail'],
    permission: 'Write',
    why: 'Candidate correspondence.'
  }, {
    category: 'Identity',
    providers: ['okta'],
    permission: 'Admin',
    why: 'Provision accounts on day one.'
  }],
  outcomes: [{
    label: 'Time to first interview falling',
    measure: 'Days from application to first interview',
    target: '< 5'
  }, {
    label: 'Every candidate gets an answer',
    measure: 'Applications closed without response',
    target: '0'
  }, {
    label: 'Onboarding ready on day one',
    measure: 'Accounts and access provisioned before start',
    target: '100%'
  }],
  checkpoints: [{
    name: 'Decide and offer',
    when: 'Always. Hiring decisions are not delegated to an Agent.'
  }, {
    name: 'Reject at screening',
    when: 'Where the Agent is below confidence on a borderline application.'
  }],
  exceptions: ['Candidate withdraws', 'Interviewer unavailable', 'Offer declined', 'Right-to-work check fails'],
  signals: ['candidate', 'applicant', 'interview', 'recruit', 'hire', 'onboard', 'role', 'cv', 'resume', 'offer', 'screening']
}, {
  id: 'lead-to-opportunity',
  name: 'Lead to opportunity',
  domain: 'Sales',
  aka: ['Lead qualification', 'Inbound routing'],
  purpose: 'Turn inbound interest into a qualified, routed, owned opportunity.',
  trigger: 'A lead arrives from a form, an event or an inbox.',
  steps: [{
    name: 'Capture and deduplicate',
    kind: 'agent'
  }, {
    name: 'Enrich the record',
    kind: 'agent'
  }, {
    name: 'Qualify against criteria',
    kind: 'agent'
  }, {
    name: 'Route to an owner',
    kind: 'agent'
  }, {
    name: 'Confirm ownership',
    kind: 'human'
  }],
  roles: ['Lead Capturer', 'Enrichment Agent', 'Qualifier', 'Router'],
  connectors: [{
    category: 'CRM',
    providers: ['salesforce', 'hubspot'],
    permission: 'Write',
    why: 'Lead and opportunity records.'
  }, {
    category: 'Email',
    providers: ['gmail'],
    permission: 'Read',
    why: 'Inbound enquiries.'
  }, {
    category: 'Messaging',
    providers: ['slack'],
    permission: 'Write',
    why: 'Notify the owner where they work.'
  }],
  outcomes: [{
    label: 'Lead answered quickly',
    measure: 'Time from arrival to first response',
    target: '< 30 min'
  }, {
    label: 'No duplicate records created',
    measure: 'Duplicates merged before routing',
    target: '100%'
  }, {
    label: 'Routing accepted by owners',
    measure: 'Leads reassigned after routing',
    target: '< 10%'
  }],
  checkpoints: [{
    name: 'Confirm ownership',
    when: 'Where the routing rule is ambiguous or the account is strategic.'
  }],
  exceptions: ['Existing customer submits as a new lead', 'Competitor or spam submission', 'No owner for the territory'],
  signals: ['lead', 'prospect', 'enquiry', 'inbound', 'qualify', 'route', 'crm', 'salesforce', 'hubspot', 'opportunity', 'enrich']
}, {
  id: 'issue-to-resolution',
  name: 'Issue to resolution',
  domain: 'Customer operations',
  aka: ['Support ticket', 'Incident handling'],
  purpose: 'Take a reported problem to a resolution the customer accepts.',
  trigger: 'A ticket, email or message reports a problem.',
  steps: [{
    name: 'Triage and classify',
    kind: 'agent'
  }, {
    name: 'Gather context',
    kind: 'agent'
  }, {
    name: 'Attempt resolution',
    kind: 'agent'
  }, {
    name: 'Escalate if unresolved',
    kind: 'human'
  }, {
    name: 'Confirm and close',
    kind: 'agent'
  }],
  roles: ['Triager', 'Context Gatherer', 'Resolver', 'Escalation Handler'],
  connectors: [{
    category: 'Helpdesk',
    providers: ['zendesk', 'intercom'],
    permission: 'Write',
    why: 'Tickets and conversations.'
  }, {
    category: 'CRM',
    providers: ['salesforce'],
    permission: 'Read',
    why: 'Who the customer is and what they bought.'
  }, {
    category: 'Messaging',
    providers: ['slack', 'whatsapp'],
    permission: 'Write',
    why: 'Reach the customer and the escalation path.'
  }],
  outcomes: [{
    label: 'First response fast',
    measure: 'Time to first substantive reply',
    target: '< 15 min'
  }, {
    label: 'Resolved without escalation',
    measure: 'Share closed by the Agent',
    target: '60%'
  }, {
    label: 'No unanswered customer',
    measure: 'Tickets with no reply past SLA',
    target: '0'
  }, {
    label: 'Escalations carry context',
    measure: 'Escalations with a written summary',
    target: '100%'
  }],
  checkpoints: [{
    name: 'Escalate if unresolved',
    when: 'Past the SLA, or where the customer asks for a person.'
  }, {
    name: 'Offer compensation',
    when: 'Always. Credits and refunds are a human decision.'
  }],
  exceptions: ['Customer is angry or threatens to leave', 'Problem is a known outage', 'Duplicate of an open ticket', 'Out of support scope'],
  signals: ['ticket', 'support', 'issue', 'incident', 'customer', 'triage', 'escalate', 'resolve', 'sla', 'zendesk', 'helpdesk']
}, {
  id: 'vendor-onboarding',
  name: 'Vendor onboarding',
  domain: 'Procurement',
  aka: ['Supplier onboarding', 'Third-party due diligence'],
  purpose: 'Take a new supplier from first contact to approved, compliant and payable.',
  trigger: 'Someone wants to buy from a supplier who is not on file.',
  steps: [{
    name: 'Collect supplier details',
    kind: 'agent'
  }, {
    name: 'Verify identity and bank details',
    kind: 'agent'
  }, {
    name: 'Run compliance checks',
    kind: 'agent'
  }, {
    name: 'Review risk',
    kind: 'human'
  }, {
    name: 'Create the vendor record',
    kind: 'agent'
  }],
  roles: ['Detail Collector', 'Identity Verifier', 'Compliance Checker', 'Record Creator'],
  connectors: [{
    category: 'ERP',
    providers: ['sap'],
    permission: 'Write',
    why: 'Create the vendor master record.'
  }, {
    category: 'Document storage',
    providers: ['googledrive'],
    permission: 'Read',
    why: 'Certificates, insurance, contracts.'
  }, {
    category: 'Messaging',
    providers: ['whatsapp', 'slack'],
    permission: 'Write',
    why: 'Suppliers often answer here first.'
  }],
  outcomes: [{
    label: 'Bank details independently verified',
    measure: 'Records created without callback verification',
    target: '0'
  }, {
    label: 'Onboarding completed quickly',
    measure: 'Days from request to payable',
    target: '< 5'
  }, {
    label: 'Compliance evidence on file',
    measure: 'Vendors with complete documentation',
    target: '100%'
  }],
  checkpoints: [{
    name: 'Review risk',
    when: 'Always for a new vendor; again for any high-risk jurisdiction.'
  }, {
    name: 'Confirm bank details',
    when: 'Always, by callback on a known number. Never from the document alone.'
  }],
  exceptions: ['Supplier already exists under another name', 'Sanctions or adverse media hit', 'Incomplete documentation', 'Bank details change mid-process'],
  signals: ['vendor', 'supplier', 'onboard', 'compliance', 'due diligence', 'kyc', 'sanctions', 'bank', 'verify', 'master', 'record']
}, {
  id: 'expense-to-reimbursement',
  name: 'Expense to reimbursement',
  domain: 'Finance',
  aka: ['Expense claims', 'T&E'],
  purpose: 'Take a submitted expense through policy check and approval to reimbursement.',
  trigger: 'An employee submits a claim or a receipt.',
  steps: [{
    name: 'Read the receipt',
    kind: 'agent'
  }, {
    name: 'Check against policy',
    kind: 'agent'
  }, {
    name: 'Query the submitter',
    kind: 'agent'
  }, {
    name: 'Approve',
    kind: 'human'
  }, {
    name: 'Post and reimburse',
    kind: 'agent'
  }],
  roles: ['Receipt Reader', 'Policy Checker', 'Reimbursement Poster'],
  connectors: [{
    category: 'Expense system',
    providers: [],
    permission: 'Write',
    why: 'Claims and reimbursement runs.'
  }, {
    category: 'Email',
    providers: ['gmail'],
    permission: 'Read',
    why: 'Receipts forwarded by employees.'
  }, {
    category: 'Messaging',
    providers: ['slack'],
    permission: 'Write',
    why: 'Query a claim without an email thread.'
  }],
  outcomes: [{
    label: 'Claims settled quickly',
    measure: 'Days from submission to payment',
    target: '< 7'
  }, {
    label: 'Policy applied consistently',
    measure: 'Claims approved outside policy',
    target: '0'
  }, {
    label: 'Queries are specific',
    measure: 'Queries that name the exact problem',
    target: '100%'
  }],
  checkpoints: [{
    name: 'Approve',
    when: 'Above the auto-approval threshold, or any policy exception.'
  }],
  exceptions: ['Receipt unreadable', 'Claim outside policy', 'Duplicate submission', 'Personal expense mixed with business'],
  signals: ['expense', 'receipt', 'claim', 'reimburse', 'policy', 'travel', 'mileage', 'per diem']
}];

/** The blank slate. Offered alongside every match so a proposal is never the only option. */
const BLANK_PROCESS = {
  id: 'blank',
  name: 'Something else',
  domain: 'Custom',
  purpose: '',
  trigger: '',
  steps: [],
  roles: [],
  connectors: [],
  outcomes: [],
  checkpoints: [],
  exceptions: [],
  signals: []
};
const words = s => String(s || '').toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);

/**
 * Score a set of Agents against the library.
 *
 * Returns ranked candidates, each with the evidence for the score, so the
 * proposal can be argued with. Confidence is deliberately coarse — a word-overlap
 * match is a decent hint and a terrible measurement, so it is reported as
 * high / medium / low and never as a percentage on an end-user surface.
 */
function MatchProcess(context = {}) {
  const {
    agents = [],
    tools = [],
    notes = ''
  } = context;
  const haystack = [];
  agents.forEach(a => {
    haystack.push.apply(haystack, words(a.name));
    haystack.push.apply(haystack, words(a.role));
    (a.skills || []).forEach(s => haystack.push.apply(haystack, words(s)));
    (a.tools || []).forEach(t => haystack.push.apply(haystack, words(t)));
  });
  tools.forEach(t => haystack.push.apply(haystack, words(typeof t === 'string' ? t : t.name || t.provider)));
  haystack.push.apply(haystack, words(notes));
  const bag = {};
  haystack.forEach(w => {
    bag[w] = (bag[w] || 0) + 1;
  });
  const scored = BUSINESS_PROCESSES.map(process => {
    const hits = process.signals.filter(sig => {
      const parts = words(sig);
      return parts.every(p => bag[p]);
    });

    /* Which of the process's own roles look like Agents that are present. */
    const roleHits = process.roles.filter(role => agents.some(a => {
      const rw = words(role);
      const aw = words(a.name).concat(words(a.role));
      return rw.some(w => aw.indexOf(w) !== -1);
    }));
    const score = hits.length * 2 + roleHits.length * 3;
    const coverage = process.roles.length ? roleHits.length / process.roles.length : 0;
    const confidence = score >= 10 ? 'high' : score >= 5 ? 'medium' : 'low';
    const evidence = [];
    if (roleHits.length) {
      evidence.push(roleHits.length + ' of the ' + process.roles.length + ' usual roles are here: ' + roleHits.join(', '));
    }
    if (hits.length) evidence.push('Matches on ' + hits.slice(0, 5).join(', '));
    if (agents.length) evidence.push(agents.length + ' Agents selected');
    return {
      process,
      score,
      hits,
      roleHits,
      coverage,
      confidence,
      evidence
    };
  });
  return scored.filter(m => m.score > 0).sort((a, b) => b.score - a.score);
}

/* Lowercase alias for sibling modules; MatchProcess is the published name. */
const matchProcess = MatchProcess;

/**
 * A matched process, offered as a proposal rather than a result.
 *
 * Same grammar as LearnedPattern: what LAMP thinks, what it is going on, and
 * three ways out — use it, look closer, or dismiss it.
 */
const ProcessProposal = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ProcessProposal({
  match,
  selected = false,
  primary = false,
  onUse,
  onReview,
  onDismiss,
  compact = false,
  className = '',
  ...rest
}, ref) {
  if (!match) return null;
  const {
    process,
    confidence,
    evidence = [],
    roleHits = []
  } = match;
  return /*#__PURE__*/React.createElement("article", _extends({
    ref: ref,
    className: ['lamp-proposal', primary && 'lamp-proposal--primary', selected && 'lamp-proposal--selected', compact && 'lamp-proposal--compact', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-proposal__top"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "flare",
    size: 14,
    style: {
      color: 'var(--status-waiting-text)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "lamp-proposal__note"
  }, "LAMP thinks this is"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MemoryConfidence, {
    level: confidence
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lamp-proposal__name"
  }, process.name, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true,
    micro: true
  }, process.domain), process.aka && process.aka.length ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-proposal__aka"
  }, process.aka[0]) : null), /*#__PURE__*/React.createElement("p", {
    className: "lamp-proposal__purpose"
  }, process.purpose), !compact && evidence.length ? /*#__PURE__*/React.createElement("ul", {
    className: "lamp-proposal__ev"
  }, evidence.map(e => /*#__PURE__*/React.createElement("li", {
    key: e
  }, e))) : null, !compact && roleHits.length < process.roles.length ? /*#__PURE__*/React.createElement("p", {
    className: "lamp-proposal__gap"
  }, "Usually also has: ", process.roles.filter(r => roleHits.indexOf(r) === -1).join(', ')) : null, onUse || onReview || onDismiss ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-proposal__actions"
  }, onUse ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: selected ? 'brand' : 'primary',
    icon: selected ? 'check' : undefined,
    onClick: () => onUse(process)
  }, selected ? 'Selected' : 'Use this process') : null, onReview ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "visibility",
    onClick: () => onReview(process)
  }, "Review steps") : null, onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "quiet",
    onClick: () => onDismiss(process)
  }, "Not this") : null) : null);
}), {
  displayName: 'ProcessProposal'
});
Object.assign(__ds_scope, { BUSINESS_PROCESSES, BLANK_PROCESS, MatchProcess, matchProcess, ProcessProposal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/BusinessProcess.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Conversation.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const Message = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Message({
  role = 'agent',
  author,
  timestamp,
  status,
  children,
  className = '',
  ...rest
}, ref) {
  const initials = (author || (role === 'user' ? 'You' : 'A')).slice(0, 2).toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-msg', 'lamp-msg--' + role, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: 'lamp-msg__av lamp-msg__av--' + role
  }, role === 'system' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "info",
    size: 13
  }) : role === 'tool' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "square",
    size: 13
  }) : initials), /*#__PURE__*/React.createElement("span", {
    className: "lamp-msg__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-msg__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-msg__who"
  }, author || (role === 'user' ? 'You' : role === 'agent' ? 'Agent' : role === 'tool' ? 'Tool' : 'LAMP')), timestamp ? /*#__PURE__*/React.createElement("span", null, timestamp) : null, status ? /*#__PURE__*/React.createElement("span", null, status) : null), /*#__PURE__*/React.createElement("span", {
    className: "lamp-msg__text"
  }, children)));
}), {
  displayName: 'Message'
});
const MessageList = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function MessageList({
  children,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
      minHeight: 0
    },
    role: "log"
  }, rest), children);
}), {
  displayName: 'MessageList'
});
const Composer = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Composer({
  placeholder = 'Write a message',
  value,
  onChange,
  onSend,
  onAttach,
  onVoice,
  quickReplies = [],
  disabled = false,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: className
  }, rest), quickReplies.length ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-quick"
  }, quickReplies.map(q => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: q.label || q,
    size: "sm",
    variant: "secondary",
    onClick: q.onSelect
  }, q.label || q))) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-composer"
  }, onAttach ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "attach_file",
    label: "Attach file",
    size: "lg",
    onClick: onAttach
  }) : null, /*#__PURE__*/React.createElement("textarea", {
    className: "lamp-composer__field",
    rows: 1,
    placeholder: placeholder,
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onSend && onSend();
      }
    }
  }), onVoice ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "mic",
    label: "Record voice message",
    size: "lg",
    onClick: onVoice
  }) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "md",
    variant: "primary",
    icon: "send",
    onClick: onSend,
    disabled: disabled
  }, "Send")));
}), {
  displayName: 'Composer'
});
const Conversation = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function Conversation({
  title,
  subtitle,
  actions,
  messages,
  composer,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      height: '100%',
      background: 'var(--surface-primary)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-panel)',
      overflow: 'hidden'
    }
  }, rest), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 40,
      padding: '0 10px 0 12px',
      borderBottom: '1px solid var(--border-subtle)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-tertiary)'
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 4
    }
  }, actions)), /*#__PURE__*/React.createElement(MessageList, {
    style: {
      flex: 1
    }
  }, messages), composer);
}), {
  displayName: 'Conversation'
});
Object.assign(__ds_scope, { Message, MessageList, Composer, Conversation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Conversation.jsx", error: String((e && e.message) || e) }); }

// components/patterns/GenieBlueprint.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* Auto-creating a Genie from a standard business process.

   A Genie is a business capability — Finance, Sales, Customer Operations — and
   the processes inside it are not a random collection. A business that runs
   procure-to-pay almost always also runs record-to-report and expense claims;
   they share vendors, a ledger, an approval hierarchy and a definition of
   materiality. So when an operator defines one of them, LAMP can set up the
   whole capability around it rather than leaving them to discover the other
   three later.

   Everything created this way is a DRAFT. Nothing is live, nothing is
   connected, nothing runs. The blueprint is shown in full before it is
   committed — every Playbook, every Agent, every access grant — because
   "LAMP created eleven things while you weren't looking" is the opposite of the
   trust this product needs. The operator sees the list and can drop any of it.

   Guardrails are not optional and are not a suggestion. A Genie created here
   starts with the safety posture its domain requires: nothing external writes
   without an approval, spend authority is unset rather than unlimited, and the
   kill switch is scoped to the Genie from the moment it exists. */

const DOMAIN_GLYPH = {
  Finance: 'account_balance',
  Sales: 'trending_up',
  People: 'groups',
  Procurement: 'inventory_2',
  'Customer operations': 'forum',
  Custom: 'hive'
};

/* Guardrails every auto-created Genie starts with, before anything domain-specific. */
const BASE_GUARDRAILS = ['No external write action without an approved human checkpoint.', 'Spend authority starts unset. An Agent cannot commit money until a limit is set deliberately.', 'Every run records its evidence, its Tool calls and its cost.', 'Emergency stop is scoped to this Genie and available from the moment it exists.'];
const DOMAIN_GUARDRAILS = {
  Finance: ['Bank detail changes always require callback verification on a known number.', 'Journals above the materiality threshold require a named approver.'],
  Procurement: ['New vendors cannot be made payable without a completed risk review.'],
  People: ['Hiring and rejection decisions are never delegated to an Agent.'],
  'Customer operations': ['Credits, refunds and compensation are a human decision.'],
  Sales: ['Discounts beyond the standard schedule require approval.']
};

/**
 * Build the Genie a process belongs to.
 *
 * Returns a plain object describing everything that would be created. It is
 * deliberately inert — nothing is written, nothing is connected — so a caller
 * can render it, diff it, edit it or throw it away.
 */
function BuildGenie(businessProcess, options = {}) {
  if (!businessProcess || !businessProcess.domain) return null;
  const {
    includeSiblings = true,
    agents = [],
    name
  } = options;
  const siblings = includeSiblings ? __ds_scope.BUSINESS_PROCESSES.filter(p => p.domain === businessProcess.domain && p.id !== businessProcess.id) : [];
  const playbooks = [{
    process: businessProcess,
    primary: true,
    agents,
    state: 'draft'
  }].concat(siblings.map(p => ({
    process: p,
    primary: false,
    agents: [],
    state: 'suggested'
  })));

  /* Connector categories de-duplicated across the capability, keeping the
     broadest permission any of its processes needs — so the access list the
     operator approves is the real one, not a per-Playbook fragment. */
  const rank = {
    Read: 1,
    Write: 2,
    Admin: 3
  };
  const connectorMap = {};
  playbooks.forEach(pb => {
    (pb.process.connectors || []).forEach(c => {
      const existing = connectorMap[c.category];
      if (!existing || rank[c.permission] > rank[existing.permission]) {
        connectorMap[c.category] = {
          ...c,
          usedBy: existing ? existing.usedBy.concat([pb.process.name]) : [pb.process.name]
        };
      } else {
        existing.usedBy = existing.usedBy.concat([pb.process.name]);
      }
    });
  });
  const connectors = Object.keys(connectorMap).map(k => connectorMap[k]);
  const roles = [];
  playbooks.forEach(pb => {
    if (!pb.primary) return;
    (pb.process.roles || []).forEach(r => {
      if (roles.indexOf(r) === -1) roles.push(r);
    });
  });
  return {
    name: name || businessProcess.domain,
    domain: businessProcess.domain,
    purpose: 'The ' + businessProcess.domain.toLowerCase() + ' capability, starting from ' + businessProcess.name.toLowerCase() + '.',
    glyph: DOMAIN_GLYPH[businessProcess.domain] || 'hive',
    state: 'draft',
    playbooks,
    connectors,
    roles,
    agents,
    guardrails: BASE_GUARDRAILS.concat(DOMAIN_GUARDRAILS[businessProcess.domain] || []),
    memory: {
      scopes: ['agent', 'playbook', 'genie', 'lamp'],
      seeded: [businessProcess.domain + ' policies and approval thresholds', 'The entities this capability deals with — ' + (businessProcess.domain === 'Finance' ? 'vendors, customers, accounts' : 'the people, systems and records it touches'), 'Exceptions observed in runs, so the Playbook learns what actually happens']
    }
  };
}
const buildGenie = BuildGenie;

/** Everything that would be created, shown before it is created. */
const GenieBlueprint = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function GenieBlueprint({
  blueprint,
  onCreate,
  onCancel,
  onTogglePlaybook,
  excluded = [],
  compact = false,
  className = '',
  ...rest
}, ref) {
  if (!blueprint) return null;
  const isOut = id => excluded.indexOf(id) !== -1;
  const included = blueprint.playbooks.filter(pb => !isOut(pb.process.id));
  return /*#__PURE__*/React.createElement("section", _extends({
    ref: ref,
    className: ['lamp-blueprint', compact && 'lamp-blueprint--compact', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("header", {
    className: "lamp-blueprint__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-blueprint__glyph"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: blueprint.glyph,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "lamp-blueprint__titles"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-blueprint__name"
  }, blueprint.name, " Genie"), /*#__PURE__*/React.createElement("span", {
    className: "lamp-blueprint__purpose"
  }, blueprint.purpose)), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral",
    icon: "edit_note",
    micro: true
  }, "Draft")), /*#__PURE__*/React.createElement("div", {
    className: "lamp-blueprint__summary"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, included.length), " Playbooks"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, blueprint.roles.length), " Agent roles"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, blueprint.connectors.length), " connectors"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, blueprint.guardrails.length), " guardrails")), /*#__PURE__*/React.createElement("div", {
    className: "lamp-blueprint__group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-blueprint__label"
  }, "Playbooks"), blueprint.playbooks.map(pb => /*#__PURE__*/React.createElement("div", {
    key: pb.process.id,
    className: ['lamp-blueprint__pb', isOut(pb.process.id) && 'lamp-blueprint__pb--out'].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "layers",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    className: "lamp-blueprint__pb-main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-blueprint__pb-name"
  }, pb.process.name), /*#__PURE__*/React.createElement("span", {
    className: "lamp-blueprint__pb-purpose"
  }, pb.process.purpose)), pb.primary ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "brand",
    micro: true
  }, "The one you just made") : /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true,
    micro: true
  }, "Suggested"), onTogglePlaybook && !pb.primary ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "xs",
    variant: "quiet",
    onClick: () => onTogglePlaybook(pb.process.id)
  }, isOut(pb.process.id) ? 'Include' : 'Skip') : null))), /*#__PURE__*/React.createElement("div", {
    className: "lamp-blueprint__group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-blueprint__label"
  }, "Access this Genie will ask for"), blueprint.connectors.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.category,
    className: "lamp-blueprint__conn"
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusDot, {
    status: "blocked"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lamp-blueprint__conn-name"
  }, c.category), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true,
    micro: true
  }, c.permission), /*#__PURE__*/React.createElement("span", {
    className: "lamp-blueprint__conn-used"
  }, "Used by ", c.usedBy.join(', ')))), /*#__PURE__*/React.createElement("p", {
    className: "lamp-blueprint__note"
  }, "Nothing is authorized by creating the Genie. Each connector is granted separately, by you.")), /*#__PURE__*/React.createElement("div", {
    className: "lamp-blueprint__group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-blueprint__label"
  }, "Guardrails it starts with"), /*#__PURE__*/React.createElement("ul", {
    className: "lamp-blueprint__rules"
  }, blueprint.guardrails.map(g => /*#__PURE__*/React.createElement("li", {
    key: g
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shield",
    size: 12
  }), g)))), /*#__PURE__*/React.createElement("div", {
    className: "lamp-blueprint__group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-blueprint__label"
  }, "Memory"), /*#__PURE__*/React.createElement(__ds_scope.MemoryScopeBar, {
    readOnly: true,
    owned: "genie",
    full: false,
    showCounts: false
  }), /*#__PURE__*/React.createElement("ul", {
    className: "lamp-blueprint__rules"
  }, blueprint.memory.seeded.map(m => /*#__PURE__*/React.createElement("li", {
    key: m
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "database",
    size: 12
  }), m)))), onCreate || onCancel ? /*#__PURE__*/React.createElement("footer", {
    className: "lamp-blueprint__foot"
  }, onCancel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "quiet",
    onClick: onCancel
  }, "Just the Playbook") : null, onCreate ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    icon: "check",
    onClick: () => onCreate(blueprint, excluded)
  }, "Create ", included.length, " Playbooks as drafts") : null) : null);
}), {
  displayName: 'GenieBlueprint'
});
Object.assign(__ds_scope, { BuildGenie, buildGenie, GenieBlueprint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/GenieBlueprint.jsx", error: String((e && e.message) || e) }); }

// components/patterns/IntegrationCard.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const STATE = {
  connected: {
    status: 'success',
    label: 'Connected'
  },
  requiresAuth: {
    status: 'attention',
    label: 'Authorization required'
  },
  expired: {
    status: 'attention',
    label: 'Credentials expired'
  },
  degraded: {
    status: 'attention',
    label: 'Degraded'
  },
  error: {
    status: 'error',
    label: 'Error'
  },
  disabled: {
    status: 'disabled',
    label: 'Disabled'
  },
  available: {
    status: 'draft',
    label: 'Not connected'
  }
};
const IntegrationCard = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function IntegrationCard({
  name,
  provider,
  glyph,
  account,
  state = 'connected',
  permission,
  scopes = [],
  usedBy = [],
  health,
  expiry,
  risk,
  onConnect,
  onReconnect,
  onDisconnect,
  onTest,
  actions,
  className = '',
  ...rest
}, ref) {
  const s = STATE[state] || STATE.connected;
  const tone = state === 'error' ? 'error' : state === 'requiresAuth' || state === 'expired' || state === 'degraded' ? 'attention' : '';
  return /*#__PURE__*/React.createElement("article", _extends({
    ref: ref,
    className: ['lamp-integ', tone && 'lamp-integ--' + tone, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-integ__head"
  }, /*#__PURE__*/React.createElement(__ds_scope.ToolTile, {
    provider: provider,
    glyph: glyph,
    name: name,
    size: "lg",
    state: state === 'connected' ? 'connected' : state === 'error' ? 'error' : 'authorizationRequired'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-integ__name"
  }, name), account ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-integ__account"
  }, account) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: s.status,
    label: s.label
  }), permission ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true,
    icon: permission === 'Admin' ? 'shield' : permission === 'Write' ? 'edit' : 'visibility'
  }, permission) : null)), scopes.length ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-integ__scopes"
  }, scopes.map(sc => /*#__PURE__*/React.createElement("span", {
    className: "lamp-integ__scope",
    key: sc.label
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: sc.write ? 'edit' : 'visibility',
    size: 13,
    style: {
      color: sc.write ? 'var(--status-warning)' : 'var(--text-tertiary)'
    }
  }), sc.label, sc.key ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-integ__scope-k"
  }, sc.key) : null))) : null, usedBy.length || health || expiry || risk ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-integ__users"
  }, usedBy.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "hexagon",
    size: 13
  }), usedBy.join(', ')) : null, health ? /*#__PURE__*/React.createElement("span", null, "Health ", health) : null, expiry ? /*#__PURE__*/React.createElement("span", null, "Expires ", expiry) : null, risk ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: risk === 'High' ? 'danger' : risk === 'Medium' ? 'warning' : 'neutral'
  }, risk, " risk") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-integ__actions"
  }, actions, onConnect ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "primary",
    icon: "link"
  }, "Connect") : null, onReconnect ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "primary",
    icon: "autorenew",
    onClick: onReconnect
  }, "Reconnect") : null, onTest ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "play_arrow",
    onClick: onTest
  }, "Test connection") : null, onDisconnect ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "danger-quiet",
    icon: "link_off",
    onClick: onDisconnect
  }, "Disconnect") : null));
}), {
  displayName: 'IntegrationCard'
});
Object.assign(__ds_scope, { IntegrationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/IntegrationCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/LearnedPattern.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const LearnedPattern = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function LearnedPattern({
  kind = 'observed',
  observation,
  occurrences,
  period,
  confidence = 'high',
  evidence = [],
  entities,
  onUse,
  onReview,
  onIgnore,
  actions,
  note,
  className = '',
  ...rest
}, ref) {
  const label = kind === 'inferred' ? 'LAMP inferred' : kind === 'suggested' ? 'LAMP suggests' : kind === 'proposal' ? 'Process proposal' : 'LAMP noticed';
  return /*#__PURE__*/React.createElement("article", _extends({
    ref: ref,
    className: 'lamp-learn ' + className
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-learn__top"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "flare",
    size: 14,
    style: {
      color: 'var(--status-waiting-text)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "lamp-learn__note"
  }, note || label), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MemoryConfidence, {
    level: confidence
  }))), /*#__PURE__*/React.createElement("p", {
    className: "lamp-learn__quote"
  }, observation), /*#__PURE__*/React.createElement("div", {
    className: "lamp-learn__ev"
  }, occurrences != null ? /*#__PURE__*/React.createElement("span", null, "Observed ", /*#__PURE__*/React.createElement("b", null, occurrences, " times"), period ? ' over ' + period : '') : null, evidence.map(e => /*#__PURE__*/React.createElement("span", {
    key: e
  }, e))), entities ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-learn__ev"
  }, entities) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-learn__actions"
  }, actions, onUse ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "primary",
    icon: "check",
    onClick: onUse
  }, "Use this pattern") : null, onReview ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "visibility",
    onClick: onReview
  }, "Review") : null, onIgnore ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "quiet",
    onClick: onIgnore
  }, "Ignore") : null));
}), {
  displayName: 'LearnedPattern'
});
Object.assign(__ds_scope, { LearnedPattern });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/LearnedPattern.jsx", error: String((e && e.message) || e) }); }

// components/patterns/MobileShell.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const MobileShell = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function MobileShell({
  title,
  leading,
  actions,
  tabs = [],
  activeTab,
  onTab,
  banner,
  children,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-mobile ' + className
  }, rest), /*#__PURE__*/React.createElement("header", {
    className: "lamp-mobile__top"
  }, leading, /*#__PURE__*/React.createElement("span", {
    className: "lamp-mobile__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 4
    }
  }, actions)), banner, /*#__PURE__*/React.createElement("div", {
    className: "lamp-mobile__body"
  }, children), tabs.length ? /*#__PURE__*/React.createElement("nav", {
    className: "lamp-mobile__nav"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    type: "button",
    className: 'lamp-mobile__tab' + (activeTab === t.id ? ' lamp-mobile__tab--active' : ''),
    onClick: () => onTab && onTab(t.id),
    "aria-current": activeTab === t.id ? 'page' : undefined
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20
  }), t.label))) : null);
}), {
  displayName: 'MobileShell'
});
Object.assign(__ds_scope, { MobileShell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/MobileShell.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ObservedProcess.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const ObservedProcess = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ObservedProcess({
  steps = [],
  showLinks = true,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-proc ' + className,
    role: "list"
  }, rest), steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: ['lamp-proc__step', s.kind === 'exception' && 'lamp-proc__step--exception', s.kind === 'rework' && 'lamp-proc__step--rework'].filter(Boolean).join(' '),
    role: "listitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-proc__n"
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    className: "lamp-proc__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-proc__title"
  }, s.title), /*#__PURE__*/React.createElement("span", {
    className: "lamp-proc__who"
  }, s.actor ? /*#__PURE__*/React.createElement(__ds_scope.EntityChip, {
    type: "person",
    name: s.actor
  }) : null, s.tool ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true,
    icon: "square"
  }, s.tool) : null, s.channel ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true,
    icon: "forum"
  }, s.channel) : null, s.kind === 'approval' ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "waiting",
    icon: "how_to_reg"
  }, "Approval") : null, s.kind === 'handoff' ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true,
    icon: "swap_horiz"
  }, "Handoff") : null, s.kind === 'exception' ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "warning",
    icon: "report"
  }, "Exception") : null, s.kind === 'rework' ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "warning",
    icon: "refresh"
  }, "Rework") : null)), /*#__PURE__*/React.createElement("span", {
    className: "lamp-proc__right"
  }, s.frequency ? /*#__PURE__*/React.createElement("span", null, s.frequency) : null, s.duration ? /*#__PURE__*/React.createElement("span", null, s.duration) : null)), showLinks && i < steps.length - 1 ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-proc__link"
  }) : null)));
}), {
  displayName: 'ObservedProcess'
});
Object.assign(__ds_scope, { ObservedProcess });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ObservedProcess.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PermissionMatrix.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const CELL = {
  granted: {
    glyph: 'check',
    cls: 'granted',
    label: 'Granted'
  },
  inherited: {
    glyph: 'check',
    cls: 'inherited',
    label: 'Inherited'
  },
  denied: {
    glyph: 'remove',
    cls: 'denied',
    label: 'Not granted'
  },
  overridden: {
    glyph: 'edit',
    cls: 'granted',
    label: 'Overridden'
  },
  conflict: {
    glyph: 'warning',
    cls: 'conflict',
    label: 'Conflict'
  }
};
const PermissionCell = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function PermissionCell({
  state = 'denied',
  onClick,
  ...rest
}, ref) {
  const c = CELL[state] || CELL.denied;
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: 'lamp-perm__cell lamp-perm__cell--' + c.cls,
    role: onClick ? 'button' : 'img',
    "aria-label": c.label,
    title: c.label,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: c.glyph,
    size: 14
  }));
}), {
  displayName: 'PermissionCell'
});
const PermissionMatrix = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function PermissionMatrix({
  resources = [],
  actions = [],
  values = {},
  onToggle,
  scopeLabel = 'Resource',
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("table", _extends({
    ref: ref,
    className: 'lamp-perm ' + className
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-perm__scope"
  }, scopeLabel)), actions.map(a => /*#__PURE__*/React.createElement("th", {
    key: a
  }, a)))), /*#__PURE__*/React.createElement("tbody", null, resources.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.key || r.label
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, r.glyph ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: r.glyph,
    size: 14,
    style: {
      color: 'var(--text-tertiary)'
    }
  }) : null, r.label, r.scope ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true
  }, r.scope) : null)), actions.map(a => {
    const state = (values[r.key || r.label] || {})[a] || 'denied';
    return /*#__PURE__*/React.createElement("td", {
      key: a
    }, /*#__PURE__*/React.createElement(PermissionCell, {
      state: state,
      onClick: onToggle ? () => onToggle(r, a, state) : undefined
    }));
  })))));
}), {
  displayName: 'PermissionMatrix'
});
const RoleBadge = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function RoleBadge({
  role,
  scope,
  ...rest
}, ref) {
  const tone = role === 'Owner' ? 'brand' : role === 'Admin' ? 'info' : role === 'Viewer' ? 'neutral' : 'neutral';
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, _extends({
    ref: ref,
    tone: tone,
    icon: role === 'Owner' ? 'workspace_premium' : role === 'Admin' ? 'shield' : 'person'
  }, rest), scope ? role + ' · ' + scope : role);
}), {
  displayName: 'RoleBadge'
});
Object.assign(__ds_scope, { PermissionCell, PermissionMatrix, RoleBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PermissionMatrix.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PlaybookComposer.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* What opens when Agents are outlined into a Playbook.

   The operator has just drawn a box round four hexagons. They know these Agents
   belong together. They almost certainly cannot tell you, cold, what the
   business process is called, which systems it has to touch, or what "working"
   would look like — and a blank form asking for exactly that is how you end up
   with a Playbook running in production that nobody has defined success for.

   So the dialog opens already filled in. LAMP matches the selection against the
   standard process library, proposes the best fit with its reasoning visible,
   and pre-fills the name, purpose, trigger, connectors, expected outcomes and
   human checkpoints from that process. The operator's job becomes reviewing and
   correcting rather than authoring — which is a job people can actually do.

   Three rules hold this together:

   1. NOTHING IS ACCEPTED SILENTLY. Every pre-filled outcome and connector is a
      checkbox, unticked items are dropped, and the proposal shows what it matched
      on so it can be argued with.
   2. THE PROPOSAL IS NEVER THE ONLY OPTION. Other matches are listed, the whole
      library is browsable, and "Something else" starts blank.
   3. OUTCOMES ARE NOT OPTIONAL. A Playbook with no expected outcome cannot be
      simulated against anything and cannot be said to have failed. The dialog
      says so rather than letting it through quietly.

   Connectors show live connection state, so "this process needs SAP write access
   and you do not have it" is visible here — before the Playbook exists — rather
   than at the first failed run. */

const STEP_GLYPH = {
  agent: 'hexagon',
  human: 'how_to_reg',
  tool: 'square',
  decision: 'call_split'
};
function keyOf(list) {
  const map = {};
  list.forEach((item, i) => {
    map[item.id != null ? item.id : i] = true;
  });
  return map;
}
const PlaybookComposer = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function PlaybookComposer({
  open = true,
  agents = [],
  availableTools = [],
  suggestions,
  onCreate,
  onCancel,
  onPreviewGenie,
  allowGenie = true,
  className = '',
  ...rest
}, ref) {
  /* Matches are derived from the selection, not held in state — reselecting on
     the canvas must not leave a stale proposal behind. */
  const matches = React.useMemo(() => suggestions || __ds_scope.MatchProcess({
    agents,
    tools: availableTools
  }), [suggestions, agents, availableTools]);
  const best = matches[0] || null;
  const [chosen, setChosen] = React.useState(() => best ? best.process : __ds_scope.BLANK_PROCESS);
  const [tab, setTab] = React.useState('process');
  const [browsing, setBrowsing] = React.useState(false);
  const [name, setName] = React.useState(chosen.name === __ds_scope.BLANK_PROCESS.name ? '' : chosen.name);
  const [purpose, setPurpose] = React.useState(chosen.purpose);
  const [trigger, setTrigger] = React.useState(chosen.trigger);
  const [outcomes, setOutcomes] = React.useState(() => keyOf(chosen.outcomes || []));
  const [connectors, setConnectors] = React.useState(() => keyOf(chosen.connectors || []));
  const [checkpoints, setCheckpoints] = React.useState(() => keyOf(chosen.checkpoints || []));
  const [extraOutcome, setExtraOutcome] = React.useState('');
  const [extras, setExtras] = React.useState([]);
  const [makeGenie, setMakeGenie] = React.useState(false);

  /* Picking a different process refills the form. Anything the operator has
     already typed into name/purpose is theirs and is left alone. */
  const pick = process => {
    setChosen(process);
    setBrowsing(false);
    setName(prev => prev && prev !== chosen.name ? prev : process.name === __ds_scope.BLANK_PROCESS.name ? '' : process.name);
    setPurpose(prev => prev && prev !== chosen.purpose ? prev : process.purpose);
    setTrigger(prev => prev && prev !== chosen.trigger ? prev : process.trigger);
    setOutcomes(keyOf(process.outcomes || []));
    setConnectors(keyOf(process.connectors || []));
    setCheckpoints(keyOf(process.checkpoints || []));
  };
  const toggle = setter => key => setter(m => ({
    ...m,
    [key]: !m[key]
  }));
  const connectionFor = connector => {
    const provider = (connector.providers || []).find(p => availableTools.some(t => (t.provider || t.id || t) === p));
    if (!provider) return {
      state: 'missing',
      label: 'Not connected',
      provider: (connector.providers || [])[0]
    };
    const tool = availableTools.find(t => (t.provider || t.id || t) === provider);
    const state = tool && tool.state || 'connected';
    return {
      state,
      provider,
      label: state === 'connected' || state === 'healthy' ? 'Connected' : state === 'authorizationRequired' ? 'Needs authorization' : state === 'expired' ? 'Credentials expired' : state
    };
  };
  const chosenOutcomes = (chosen.outcomes || []).filter((o, i) => outcomes[o.id != null ? o.id : i]).concat(extras.map(label => ({
    label,
    measure: 'Defined by you',
    target: ''
  })));
  const chosenConnectors = (chosen.connectors || []).filter((c, i) => connectors[c.id != null ? c.id : i]);
  const chosenCheckpoints = (chosen.checkpoints || []).filter((c, i) => checkpoints[c.id != null ? c.id : i]);
  const blockers = [];
  if (!name.trim()) blockers.push('Give the Playbook a name.');
  if (!chosenOutcomes.length) blockers.push('Choose at least one expected outcome — without one the Playbook cannot be simulated or judged.');
  const missingConnectors = chosenConnectors.filter(c => connectionFor(c).state === 'missing');
  const build = () => ({
    name: name.trim(),
    purpose,
    trigger,
    processId: chosen.id,
    processName: chosen.name,
    domain: chosen.domain,
    agents,
    steps: chosen.steps || [],
    outcomes: chosenOutcomes,
    connectors: chosenConnectors,
    checkpoints: chosenCheckpoints,
    exceptions: chosen.exceptions || [],
    createGenie: makeGenie
  });
  const tabs = [{
    id: 'process',
    label: 'Process'
  }, {
    id: 'connectors',
    label: 'Connectors',
    count: chosenConnectors.length
  }, {
    id: 'outcomes',
    label: 'Outcomes',
    count: chosenOutcomes.length
  }];
  return /*#__PURE__*/React.createElement(__ds_scope.Modal, _extends({
    ref: ref,
    open: open,
    size: "lg",
    glyph: "layers",
    title: "Make these Agents a Playbook",
    subtitle: agents.length + ' Agents selected. LAMP has suggested what this process is — correct anything that is wrong.',
    onClose: onCancel,
    className: 'lamp-composer ' + className,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "lamp-composer__footnote"
    }, blockers.length ? /*#__PURE__*/React.createElement("span", {
      className: "lamp-composer__blocker"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "warning",
      size: 13
    }), blockers[0]) : missingConnectors.length ? /*#__PURE__*/React.createElement("span", {
      className: "lamp-composer__blocker"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "link_off",
      size: 13
    }), missingConnectors.length, " connector", missingConnectors.length > 1 ? 's' : '', " still need authorizing. The Playbook can be drafted without them.") : /*#__PURE__*/React.createElement("span", null, "Draft only. Nothing runs until you simulate it.")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "quiet",
      onClick: onCancel
    }, "Cancel"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "primary",
      icon: "check",
      disabled: !!blockers.length,
      onClick: () => onCreate && onCreate(build())
    }, makeGenie ? 'Create Playbook and Genie' : 'Create Playbook'))
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-composer__selection"
  }, agents.map(a => /*#__PURE__*/React.createElement("span", {
    key: a.id || a.name,
    className: "lamp-composer__agent"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "hexagon",
    size: 13
  }), a.name || 'Unnamed Agent', a.role ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-composer__role"
  }, a.role) : null))), best && !browsing ? /*#__PURE__*/React.createElement(__ds_scope.ProcessProposal, {
    primary: true,
    match: best,
    selected: chosen.id === best.process.id,
    onUse: pick,
    onDismiss: () => setBrowsing(true)
  }) : null, browsing || !best ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-composer__browse"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lamp-composer__browse-head"
  }, /*#__PURE__*/React.createElement("span", null, "Pick the process this is"), best ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "xs",
    variant: "quiet",
    onClick: () => setBrowsing(false)
  }, "Back to the suggestion") : null), /*#__PURE__*/React.createElement("div", {
    className: "lamp-composer__browse-list"
  }, __ds_scope.BUSINESS_PROCESSES.concat([__ds_scope.BLANK_PROCESS]).map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    type: "button",
    className: 'lamp-composer__browse-item' + (chosen.id === p.id ? ' lamp-composer__browse-item--active' : ''),
    onClick: () => pick(p)
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-composer__browse-name"
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: "lamp-composer__browse-domain"
  }, p.domain))))) : null, matches.length > 1 && !browsing ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-composer__alts"
  }, /*#__PURE__*/React.createElement("span", null, "Or:"), matches.slice(1, 4).map(m => /*#__PURE__*/React.createElement("button", {
    key: m.process.id,
    type: "button",
    className: "lamp-composer__alt",
    onClick: () => pick(m.process)
  }, m.process.name)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lamp-composer__alt",
    onClick: () => setBrowsing(true)
  }, "Something else")) : null, /*#__PURE__*/React.createElement(__ds_scope.Tabs, {
    tabs: tabs,
    value: tab,
    onChange: setTab
  }), tab === 'process' ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-composer__pane"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lamp-composer__label",
    htmlFor: "pb-name"
  }, "Name"), /*#__PURE__*/React.createElement(__ds_scope.TextInput, {
    id: "pb-name",
    value: name,
    placeholder: "Vendor payment",
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    className: "lamp-composer__label",
    htmlFor: "pb-purpose"
  }, "Purpose"), /*#__PURE__*/React.createElement(__ds_scope.Textarea, {
    id: "pb-purpose",
    rows: 2,
    value: purpose,
    placeholder: "What this process is for, in one sentence.",
    onChange: e => setPurpose(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    className: "lamp-composer__label",
    htmlFor: "pb-trigger"
  }, "Trigger"), /*#__PURE__*/React.createElement(__ds_scope.TextInput, {
    id: "pb-trigger",
    value: trigger,
    placeholder: "What starts a run.",
    onChange: e => setTrigger(e.target.value)
  }), chosen.steps && chosen.steps.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-composer__label"
  }, "Usual shape of this process"), /*#__PURE__*/React.createElement("ol", {
    className: "lamp-composer__steps"
  }, chosen.steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s.name,
    className: 'lamp-composer__step lamp-composer__step--' + s.kind
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-composer__step-n"
  }, i + 1), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: STEP_GLYPH[s.kind] || 'hexagon',
    size: 13
  }), /*#__PURE__*/React.createElement("span", null, s.name), s.kind === 'human' ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "waiting",
    micro: true
  }, "Human") : null))), /*#__PURE__*/React.createElement("p", {
    className: "lamp-composer__hint"
  }, "Execution order lives in the runtime, not in how the Agents are arranged on the canvas. You can change this later in the Inspector.")) : null, chosen.exceptions && chosen.exceptions.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-composer__label"
  }, "What usually goes wrong"), /*#__PURE__*/React.createElement("div", {
    className: "lamp-composer__chips"
  }, chosen.exceptions.map(e => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: e,
    tone: "warning",
    icon: "report",
    micro: true
  }, e)))) : null) : null, tab === 'connectors' ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-composer__pane"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lamp-composer__hint"
  }, "The systems this process has to touch. Untick anything it does not need \u2014 each one is an access grant."), (chosen.connectors || []).length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "lamp-composer__empty"
  }, "No connectors suggested. Add Tools to the Agents and they will appear here.") : null, (chosen.connectors || []).map((c, i) => {
    const key = c.id != null ? c.id : i;
    const conn = connectionFor(c);
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: "lamp-composer__conn"
    }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
      checked: !!connectors[key],
      onChange: () => toggle(setConnectors)(key)
    }), /*#__PURE__*/React.createElement(__ds_scope.ToolTile, {
      size: "sm",
      provider: conn.provider,
      state: conn.state === 'missing' ? 'available' : conn.state,
      name: c.category
    }), /*#__PURE__*/React.createElement("span", {
      className: "lamp-composer__conn-main"
    }, /*#__PURE__*/React.createElement("span", {
      className: "lamp-composer__conn-name"
    }, c.category), /*#__PURE__*/React.createElement("span", {
      className: "lamp-composer__conn-why"
    }, c.why)), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      outline: true,
      micro: true
    }, c.permission), /*#__PURE__*/React.createElement("span", {
      className: 'lamp-composer__conn-state lamp-composer__conn-state--' + conn.state
    }, /*#__PURE__*/React.createElement(__ds_scope.StatusDot, {
      status: conn.state === 'missing' ? 'blocked' : conn.state === 'connected' || conn.state === 'healthy' ? 'success' : 'attention'
    }), conn.label));
  })) : null, tab === 'outcomes' ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-composer__pane"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lamp-composer__hint"
  }, "What this Playbook is supposed to achieve, and how you would know. Simulation is judged against these, so a Playbook with none cannot pass or fail."), (chosen.outcomes || []).map((o, i) => {
    const key = o.id != null ? o.id : i;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: "lamp-composer__outcome"
    }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
      checked: !!outcomes[key],
      onChange: () => toggle(setOutcomes)(key)
    }), /*#__PURE__*/React.createElement("span", {
      className: "lamp-composer__outcome-main"
    }, /*#__PURE__*/React.createElement("span", {
      className: "lamp-composer__outcome-label"
    }, o.label), /*#__PURE__*/React.createElement("span", {
      className: "lamp-composer__outcome-measure"
    }, o.measure)), o.target ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      outline: true,
      micro: true
    }, o.target) : null);
  }), extras.map(label => /*#__PURE__*/React.createElement("div", {
    key: label,
    className: "lamp-composer__outcome"
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: true,
    readOnly: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "lamp-composer__outcome-main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-composer__outcome-label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "lamp-composer__outcome-measure"
  }, "Added by you")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "xs",
    variant: "quiet",
    onClick: () => setExtras(extras.filter(x => x !== label))
  }, "Remove"))), /*#__PURE__*/React.createElement("div", {
    className: "lamp-composer__addrow"
  }, /*#__PURE__*/React.createElement(__ds_scope.TextInput, {
    value: extraOutcome,
    placeholder: "Add an outcome of your own",
    onChange: e => setExtraOutcome(e.target.value),
    onKeyDown: e => {
      if (e.key !== 'Enter' || !extraOutcome.trim()) return;
      e.preventDefault();
      setExtras(extras.concat([extraOutcome.trim()]));
      setExtraOutcome('');
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "add",
    disabled: !extraOutcome.trim(),
    onClick: () => {
      setExtras(extras.concat([extraOutcome.trim()]));
      setExtraOutcome('');
    }
  }, "Add")), (chosen.checkpoints || []).length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-composer__label"
  }, "Where a person decides"), (chosen.checkpoints || []).map((c, i) => {
    const key = c.id != null ? c.id : i;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: "lamp-composer__outcome"
    }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
      checked: !!checkpoints[key],
      onChange: () => toggle(setCheckpoints)(key)
    }), /*#__PURE__*/React.createElement("span", {
      className: "lamp-composer__outcome-main"
    }, /*#__PURE__*/React.createElement("span", {
      className: "lamp-composer__outcome-label"
    }, c.name), /*#__PURE__*/React.createElement("span", {
      className: "lamp-composer__outcome-measure"
    }, c.when)));
  })) : null) : null, allowGenie && chosen.id !== __ds_scope.BLANK_PROCESS.id ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-composer__genie"
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: makeGenie,
    onChange: () => setMakeGenie(!makeGenie),
    label: 'Also create a ' + chosen.domain + ' Genie',
    description: 'Sets up the Genie this process belongs to, with its memory, guardrails and the other Playbooks it usually contains — as drafts.'
  }), makeGenie && onPreviewGenie ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "visibility",
    onClick: () => onPreviewGenie(chosen)
  }, "Preview what gets created") : null) : null);
}), {
  displayName: 'PlaybookComposer'
});
Object.assign(__ds_scope, { PlaybookComposer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PlaybookComposer.jsx", error: String((e && e.message) || e) }); }

// components/patterns/VoiceButton.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const VoiceWaveform = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function VoiceWaveform({
  levels = [],
  bars = 18,
  height = 20
}, ref) {
  const data = levels.length ? levels : Array.from({
    length: bars
  }, (_, i) => 0.3 + 0.7 * Math.abs(Math.sin(i * 1.1)));
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "lamp-voice__wave",
    style: {
      height
    },
    "aria-hidden": "true"
  }, data.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "lamp-voice__bar",
    style: {
      height: Math.max(2, v * height)
    }
  })));
}), {
  displayName: 'VoiceWaveform'
});
const VoiceButton = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function VoiceButton({
  state = 'idle',
  size = 'md',
  duration,
  levels,
  label,
  onPress,
  onCancel,
  onSend,
  className = '',
  ...rest
}, ref) {
  const recording = state === 'recording';
  const glyph = state === 'processing' ? 'progress_activity' : state === 'speaking' ? 'volume_up' : recording ? 'stop' : 'mic';
  const text = label || (recording ? 'Recording' : state === 'processing' ? 'Processing' : state === 'speaking' ? 'Speaking' : state === 'error' ? 'Microphone unavailable' : 'Hold to speak');
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: 'lamp-voice ' + className
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": text,
    "aria-pressed": recording,
    className: ['lamp-voice__btn', recording && 'lamp-voice__btn--recording', size === 'lg' && 'lamp-voice__btn--lg'].filter(Boolean).join(' '),
    onClick: onPress
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: size === 'lg' ? 28 : 22
  })), recording ? /*#__PURE__*/React.createElement(VoiceWaveform, {
    levels: levels
  }) : null, duration ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-voice__time"
  }, duration) : null, !recording && state === 'idle' ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, text) : null);
}), {
  displayName: 'VoiceButton'
});
Object.assign(__ds_scope, { VoiceWaveform, VoiceButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/VoiceButton.jsx", error: String((e && e.message) || e) }); }

// components/runtime/ApprovalCard.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const ApprovalCard = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ApprovalCard({
  question,
  amount,
  tone = 'default',
  kind = 'approve',
  requestedBy,
  playbook,
  dueIn,
  facts = [],
  options = [],
  onApprove,
  onReject,
  onEdit,
  onRequestInfo,
  onEscalate,
  evidence,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("article", _extends({
    ref: ref,
    className: ['lamp-approval', tone !== 'default' && 'lamp-approval--' + tone, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-approval__top"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tone === 'critical' ? 'danger' : 'waiting',
    icon: "how_to_reg",
    micro: true
  }, "Approval required"), playbook ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true,
    icon: "layers"
  }, playbook) : null, requestedBy ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true,
    icon: "hexagon"
  }, requestedBy) : null, dueIn ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-approval__timer"
  }, dueIn) : null), /*#__PURE__*/React.createElement("h3", {
    className: "lamp-approval__q"
  }, question), amount ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-approval__amount"
  }, amount) : null, facts.length ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-approval__facts"
  }, facts.map(f => /*#__PURE__*/React.createElement(React.Fragment, {
    key: f.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-approval__k"
  }, f.label), /*#__PURE__*/React.createElement("span", {
    className: "lamp-approval__v"
  }, f.value)))) : null, evidence, /*#__PURE__*/React.createElement("div", {
    className: "lamp-approval__actions"
  }, kind === 'choice' ? options.map(o => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: o.id,
    size: "md",
    variant: o.primary ? 'primary' : 'secondary',
    onClick: o.onSelect
  }, o.label)) : /*#__PURE__*/React.createElement(React.Fragment, null, onApprove ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "md",
    variant: tone === 'critical' ? 'danger' : 'primary',
    icon: "check",
    onClick: onApprove
  }, tone === 'critical' ? 'Approve anyway' : 'Approve') : null, onEdit ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "md",
    variant: "secondary",
    icon: "edit",
    onClick: onEdit
  }, "Edit before approving") : null, onReject ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "md",
    variant: "secondary",
    icon: "close",
    onClick: onReject
  }, "Reject") : null, onRequestInfo ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "md",
    variant: "ghost",
    onClick: onRequestInfo
  }, "Request information") : null, onEscalate ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "md",
    variant: "quiet",
    onClick: onEscalate
  }, "Escalate") : null)));
}), {
  displayName: 'ApprovalCard'
});
const HumanCheckpoint = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function HumanCheckpoint({
  label = 'Human checkpoint',
  detail,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: "lamp-checkpoint"
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "how_to_reg",
    size: 14
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, label), detail ? /*#__PURE__*/React.createElement("span", null, detail) : null);
}), {
  displayName: 'HumanCheckpoint'
});
Object.assign(__ds_scope, { ApprovalCard, HumanCheckpoint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/runtime/ApprovalCard.jsx", error: String((e && e.message) || e) }); }

// components/runtime/EnvironmentBanner.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const ENV = {
  draft: {
    glyph: 'edit',
    label: 'Draft',
    detail: 'Nothing here can act on the business yet.'
  },
  simulation: {
    glyph: 'science',
    label: 'Simulation',
    detail: 'Tool writes are mocked. Nothing leaves LAMP.'
  },
  live: {
    glyph: 'bolt',
    label: 'Live',
    detail: 'Agents can act on the business.'
  },
  paused: {
    glyph: 'pause',
    label: 'Paused',
    detail: 'No new runs will start.'
  },
  killed: {
    glyph: 'dangerous',
    label: 'Emergency stopped',
    detail: 'All external writes are blocked.'
  }
};
const EnvironmentBanner = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function EnvironmentBanner({
  environment = 'draft',
  scope,
  detail,
  actions,
  className = '',
  ...rest
}, ref) {
  const e = ENV[environment] || ENV.draft;
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ['lamp-envbar', 'lamp-envbar--' + environment, className].filter(Boolean).join(' '),
    role: environment === 'killed' ? 'alert' : 'status'
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lamp-envbar__label"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: e.glyph,
    size: 14
  }), e.label), scope ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, scope) : null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-envbar__detail"
  }, detail || e.detail), actions ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-envbar__right"
  }, actions) : null);
}), {
  displayName: 'EnvironmentBanner'
});
Object.assign(__ds_scope, { EnvironmentBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/runtime/EnvironmentBanner.jsx", error: String((e && e.message) || e) }); }

// components/runtime/KillSwitch.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const KillSwitch = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function KillSwitch({
  scope = 'this Genie',
  consequences,
  activeRuns,
  onCancel,
  onConfirm,
  requireAcknowledge = true,
  confirmLabel = 'Emergency stop',
  className = '',
  ...rest
}, ref) {
  const [ack, setAck] = React.useState(!requireAcknowledge);
  const list = consequences || ['block new external write actions', 'stop new runs', 'isolate active tasks'];
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-kill ' + className,
    role: "alertdialog",
    "aria-label": 'Stop ' + scope
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lamp-kill__title"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "dangerous",
    size: 16
  }), "Stop ", scope, "?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Immediately:"), /*#__PURE__*/React.createElement("ul", {
    className: "lamp-kill__list"
  }, list.map(c => /*#__PURE__*/React.createElement("li", {
    key: c
  }, c))), activeRuns != null ? /*#__PURE__*/React.createElement("div", {
    className: "lamp-kill__armed"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "warning",
    size: 14
  }), activeRuns, " runs are active right now. Their completed steps are not reversed.") : null, requireAcknowledge ? /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: 'I understand this stops all automation in ' + scope + '.',
    checked: ack,
    onChange: e => setAck(e.target.checked)
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "lamp-kill__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "md",
    variant: "secondary",
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "md",
    variant: "danger",
    icon: "dangerous",
    disabled: !ack,
    onClick: onConfirm
  }, confirmLabel)));
}), {
  displayName: 'KillSwitch'
});
const SafetyControls = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function SafetyControls({
  state = 'live',
  onPause,
  onSafeStop,
  onEmergency,
  onResume,
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    },
    className: className
  }, rest), state === 'paused' ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "play_arrow",
    onClick: onResume
  }, "Resume") : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "pause",
    onClick: onPause
  }, "Pause"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "stop_circle",
    onClick: onSafeStop
  }, "Safe stop"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "danger-quiet",
    icon: "dangerous",
    onClick: onEmergency
  }, "Emergency stop"));
}), {
  displayName: 'SafetyControls'
});
Object.assign(__ds_scope, { KillSwitch, SafetyControls });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/runtime/KillSwitch.jsx", error: String((e && e.message) || e) }); }

// components/runtime/LiveActivityIndicator.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const LiveActivityIndicator = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function LiveActivityIndicator({
  mode = 'live',
  label,
  count,
  className = '',
  ...rest
}, ref) {
  const text = label || (mode === 'live' ? 'Live' : mode === 'simulation' ? 'Simulating' : 'Idle');
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: ['lamp-live', mode !== 'live' && 'lamp-live--' + mode, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lamp-live__pulse"
  }), text, count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      opacity: 0.8
    }
  }, count, " active") : null);
}), {
  displayName: 'LiveActivityIndicator'
});
Object.assign(__ds_scope, { LiveActivityIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/runtime/LiveActivityIndicator.jsx", error: String((e && e.message) || e) }); }

// components/runtime/ReadinessCheck.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const TONE = {
  passed: {
    glyph: 'check_circle',
    color: 'var(--status-success)'
  },
  warning: {
    glyph: 'warning',
    color: 'var(--status-warning)'
  },
  failed: {
    glyph: 'cancel',
    color: 'var(--status-danger)'
  },
  pending: {
    glyph: 'radio_button_unchecked',
    color: 'var(--text-disabled)'
  }
};
const ReadinessCheck = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function ReadinessCheck({
  checks = [],
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-readiness ' + className,
    role: "list"
  }, rest), checks.map(c => {
    const t = TONE[c.state] || TONE.pending;
    return /*#__PURE__*/React.createElement("div", {
      className: "lamp-readiness__row",
      key: c.label,
      role: "listitem"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.glyph,
      size: 15,
      style: {
        color: t.color
      }
    }), /*#__PURE__*/React.createElement("span", null, c.label), c.detail ? /*#__PURE__*/React.createElement("span", {
      className: "lamp-readiness__detail"
    }, c.detail) : null, c.action);
  }));
}), {
  displayName: 'ReadinessCheck'
});
Object.assign(__ds_scope, { ReadinessCheck });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/runtime/ReadinessCheck.jsx", error: String((e && e.message) || e) }); }

// components/runtime/RunSummary.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const RunSummary = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function RunSummary({
  runId,
  status = 'success',
  trigger,
  started,
  completed,
  duration,
  agents,
  toolCalls,
  llmCalls,
  cacheRate,
  tokens,
  cost,
  interventions,
  environment,
  className = '',
  ...rest
}, ref) {
  const rows = [['Run ID', runId, true], ['Environment', environment], ['Trigger', trigger], ['Started', started, true], ['Completed', completed, true], ['Duration', duration, true], ['Agents', agents, true], ['Tool calls', toolCalls, true], ['LLM calls', llmCalls, true], ['Cache utilization', cacheRate, true], ['Tokens', tokens, true], ['Estimated cost', cost, true], ['Human interventions', interventions, true]].filter(r => r[1] != null && r[1] !== '');
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: className
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status
  })), rows.map(([label, value, mono]) => /*#__PURE__*/React.createElement(__ds_scope.PropertyRow, {
    key: label,
    label: label,
    value: value,
    mono: !!mono
  })));
}), {
  displayName: 'RunSummary'
});
Object.assign(__ds_scope, { RunSummary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/runtime/RunSummary.jsx", error: String((e && e.message) || e) }); }

// components/runtime/RunTimeline.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const STEP = {
  pending: {
    glyph: null,
    cls: ''
  },
  running: {
    glyph: 'sync',
    cls: 'running'
  },
  success: {
    glyph: 'check',
    cls: 'success'
  },
  warning: {
    glyph: 'warning',
    cls: 'warning'
  },
  failed: {
    glyph: 'close',
    cls: 'failed'
  },
  skipped: {
    glyph: 'remove',
    cls: 'skipped'
  },
  waitingHuman: {
    glyph: 'how_to_reg',
    cls: 'waitingHuman'
  },
  mocked: {
    glyph: 'inventory_2',
    cls: 'skipped'
  },
  blocked: {
    glyph: 'block',
    cls: 'blocked'
  }
};
const RunStep = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function RunStep({
  index,
  state = 'pending',
  title,
  detail,
  actor,
  tools = [],
  memory,
  duration,
  tokens,
  cost,
  expandable = false,
  onToggle,
  children,
  className = '',
  ...rest
}, ref) {
  const s = STEP[state] || STEP.pending;
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-step ' + className
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: 'lamp-step__icon' + (s.cls ? ' lamp-step__icon--' + s.cls : '')
  }, s.glyph ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.glyph,
    size: 11
  }) : index), /*#__PURE__*/React.createElement("span", {
    className: "lamp-step__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-step__title"
  }, title), detail ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-step__sub"
  }, detail) : null, actor || tools.length || memory ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-step__chips"
  }, actor ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true,
    icon: "hexagon"
  }, actor) : null, tools.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    outline: true,
    icon: "square"
  }, t)), memory ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "memory",
    icon: "database"
  }, memory) : null) : null, children), /*#__PURE__*/React.createElement("span", {
    className: "lamp-step__right"
  }, tokens ? /*#__PURE__*/React.createElement("span", null, tokens) : null, cost ? /*#__PURE__*/React.createElement("span", null, cost) : null, duration ? /*#__PURE__*/React.createElement("span", null, duration) : null, expandable ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "keyboard_arrow_down",
    size: 14
  }) : null));
}), {
  displayName: 'RunStep'
});
const RunTimeline = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function RunTimeline({
  steps = [],
  className = '',
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: className,
    role: "list",
    "aria-label": "Run timeline"
  }, rest), steps.map((s, i) => /*#__PURE__*/React.createElement(RunStep, _extends({
    key: i,
    index: i + 1
  }, s))));
}), {
  displayName: 'RunTimeline'
});
Object.assign(__ds_scope, { RunStep, RunTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/runtime/RunTimeline.jsx", error: String((e && e.message) || e) }); }

// components/runtime/SimulationBar.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const SimulationBar = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function SimulationBar({
  mode = 'simulation',
  state = 'idle',
  progress = 0,
  step,
  stepCount,
  scenario,
  elapsed,
  cost,
  onRun,
  onPause,
  onStop,
  onStepForward,
  onReplay,
  onScenario,
  right,
  className = '',
  ...rest
}, ref) {
  const running = state === 'running';
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: 'lamp-simbar ' + className,
    role: "toolbar",
    "aria-label": mode === 'live' ? 'Live controls' : 'Simulation controls'
  }, rest), running ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "pause",
    onClick: onPause
  }, "Pause") : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: mode === 'live' ? 'brand' : 'primary',
    icon: "play_arrow",
    onClick: onRun
  }, state === 'paused' ? 'Resume' : mode === 'live' ? 'Start run' : 'Run simulation'), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "skip_next",
    label: "Step forward",
    size: "md",
    onClick: onStepForward,
    disabled: running
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "stop_circle",
    label: "Stop",
    size: "md",
    onClick: onStop,
    disabled: state === 'idle'
  }), /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    orientation: "vertical"
  }), scenario ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onScenario,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 6px',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-primary)',
      font: '500 12px var(--font-sans)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "dataset",
    size: 13
  }), scenario) : null, /*#__PURE__*/React.createElement("span", {
    className: "lamp-simbar__progress"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'lamp-simbar__fill' + (mode === 'live' ? ' lamp-simbar__fill--live' : ''),
    style: {
      width: Math.round(progress * 100) + '%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "lamp-simbar__meta"
  }, stepCount ? /*#__PURE__*/React.createElement("span", null, "Step ", step, "/", stepCount) : null, elapsed ? /*#__PURE__*/React.createElement("span", null, elapsed) : null, cost ? /*#__PURE__*/React.createElement("span", null, cost) : null), onReplay ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "replay",
    label: "Replay run",
    size: "md",
    onClick: onReplay
  }) : null, right);
}), {
  displayName: 'SimulationBar'
});
Object.assign(__ds_scope, { SimulationBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/runtime/SimulationBar.jsx", error: String((e && e.message) || e) }); }

// components/runtime/SimulationStep.jsx
try { (() => {
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
/* One step of a simulation run.

   A simulated step is not a live step wearing a different colour. Two things are
   true of simulation and of nothing else, and the component makes both
   unmissable:

     MOCKED    the Tool was never called; the value shown is a stand-in
     BLOCKED   the step would have written externally and simulation stopped it

   Both are stamped as micro uppercase labels rather than a tint, because an
   operator reading a timeline needs to know which numbers are real without
   having learnt a colour code. `divergence` marks a step whose simulated
   outcome differs from the recorded live behaviour it is being compared with —
   the whole point of running the simulation.

   Everything else — chips, durations, token counts — is RunStep, so a
   simulation timeline and a live timeline line up column for column. */

const SIM_NOTE = {
  mocked: {
    label: 'Mocked',
    glyph: 'inventory_2',
    tone: 'neutral'
  },
  blocked: {
    label: 'Blocked',
    glyph: 'block',
    tone: 'warning'
  },
  waitingHuman: {
    label: 'Awaiting approval',
    glyph: 'how_to_reg',
    tone: 'waiting'
  },
  skipped: {
    label: 'Skipped',
    glyph: 'remove',
    tone: 'neutral'
  }
};
const SimulationStep = /* @__PURE__ */Object.assign(/* @__PURE__ */React.forwardRef(function SimulationStep({
  state = 'pending',
  mockedValue,
  blockedReason,
  divergence,
  expected,
  scenario,
  children,
  className = '',
  ...rest
}, ref) {
  const note = SIM_NOTE[state];
  return /*#__PURE__*/React.createElement(__ds_scope.RunStep, _extends({
    ref: ref,
    state: state,
    className: ['lamp-simstep', 'lamp-simstep--' + state, divergence && 'lamp-simstep--diverged', className].filter(Boolean).join(' ')
  }, rest), note || divergence || scenario ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-simstep__chips"
  }, note ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: note.tone,
    icon: note.glyph,
    micro: true
  }, note.label) : null, scenario ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    outline: true,
    icon: "science",
    micro: true
  }, scenario) : null, divergence ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "warning",
    icon: "swap_horiz",
    micro: true
  }, "Differs from live") : null) : null, state === 'mocked' && mockedValue ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-simstep__mock"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "inventory_2",
    size: 12
  }), /*#__PURE__*/React.createElement("span", null, "Stand-in value: ", /*#__PURE__*/React.createElement("b", null, mockedValue))) : null, state === 'blocked' && blockedReason ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-simstep__blocked"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "block",
    size: 12
  }), /*#__PURE__*/React.createElement("span", null, blockedReason)) : null, divergence && expected ? /*#__PURE__*/React.createElement("span", {
    className: "lamp-simstep__diverge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lamp-simstep__diverge-row"
  }, /*#__PURE__*/React.createElement("span", null, "Live"), /*#__PURE__*/React.createElement("b", null, expected)), /*#__PURE__*/React.createElement("span", {
    className: "lamp-simstep__diverge-row"
  }, /*#__PURE__*/React.createElement("span", null, "Simulated"), /*#__PURE__*/React.createElement("b", null, divergence))) : null, children);
}), {
  displayName: 'SimulationStep'
});
Object.assign(__ds_scope, { SimulationStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/runtime/SimulationStep.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ICON_VIEWBOX = __ds_scope.ICON_VIEWBOX;

__ds_ns.BRAND_VIEWBOX = __ds_scope.BRAND_VIEWBOX;

__ds_ns.MATERIAL_SYMBOLS_BASE = __ds_scope.MATERIAL_SYMBOLS_BASE;

__ds_ns.BRAND_ICON_BASE = __ds_scope.BRAND_ICON_BASE;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.BrandIcon = __ds_scope.BrandIcon;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.NumberInput = __ds_scope.NumberInput;

__ds_ns.SecretField = __ds_scope.SecretField;

__ds_ns.STATUS = __ds_scope.STATUS;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.AGENT_SIZES = __ds_scope.AGENT_SIZES;

__ds_ns.AgentHex = __ds_scope.AgentHex;

__ds_ns.GSAP_CDN = __ds_scope.GSAP_CDN;

__ds_ns.GSAP_EASE = __ds_scope.GSAP_EASE;

__ds_ns.GSAP_DURATION = __ds_scope.GSAP_DURATION;

__ds_ns.AGENT_ARCHETYPES = __ds_scope.AGENT_ARCHETYPES;

__ds_ns.AgentLibrary = __ds_scope.AgentLibrary;

__ds_ns.CanvasContextMenu = __ds_scope.CanvasContextMenu;

__ds_ns.CanvasSurface = __ds_scope.CanvasSurface;

__ds_ns.SnapGuide = __ds_scope.SnapGuide;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.CanvasToolbar = __ds_scope.CanvasToolbar;

__ds_ns.CanvasZoomControls = __ds_scope.CanvasZoomControls;

__ds_ns.CanvasObjectToolbar = __ds_scope.CanvasObjectToolbar;

__ds_ns.CanvasMinimap = __ds_scope.CanvasMinimap;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SplitButton = __ds_scope.SplitButton;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.CriticalConfirmation = __ds_scope.CriticalConfirmation;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TagInput = __ds_scope.TagInput;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.TOOL_SIZES = __ds_scope.TOOL_SIZES;

__ds_ns.ToolTile = __ds_scope.ToolTile;

__ds_ns.ToolRow = __ds_scope.ToolRow;

__ds_ns.NewAgentDialog = __ds_scope.NewAgentDialog;

__ds_ns.HexLattice = __ds_scope.HexLattice;

__ds_ns.HexCenter = __ds_scope.HexCenter;

__ds_ns.FreeCells = __ds_scope.FreeCells;

__ds_ns.FreeCellAt = __ds_scope.FreeCellAt;

__ds_ns.SnapField = __ds_scope.SnapField;

__ds_ns.ChatAvatar = __ds_scope.ChatAvatar;

__ds_ns.ChatActivity = __ds_scope.ChatActivity;

__ds_ns.ChatCitation = __ds_scope.ChatCitation;

__ds_ns.ChatDayDivider = __ds_scope.ChatDayDivider;

__ds_ns.ChatMessage = __ds_scope.ChatMessage;

__ds_ns.ChatStatus = __ds_scope.ChatStatus;

__ds_ns.AgentChat = __ds_scope.AgentChat;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.ChatQuickReplies = __ds_scope.ChatQuickReplies;

__ds_ns.ChatComposer = __ds_scope.ChatComposer;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EnvironmentPill = __ds_scope.EnvironmentPill;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.DashboardCard = __ds_scope.DashboardCard;

__ds_ns.DashboardGrid = __ds_scope.DashboardGrid;

__ds_ns.StatGrid = __ds_scope.StatGrid;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.DashboardPage = __ds_scope.DashboardPage;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.DATAVIZ = __ds_scope.DATAVIZ;

__ds_ns.ChartLegend = __ds_scope.ChartLegend;

__ds_ns.ChartFrame = __ds_scope.ChartFrame;

__ds_ns.ChartTooltip = __ds_scope.ChartTooltip;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.StackedBar = __ds_scope.StackedBar;

__ds_ns.ContextBreakdown = __ds_scope.ContextBreakdown;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DonutChart = __ds_scope.DonutChart;

__ds_ns.Heatmap = __ds_scope.Heatmap;

__ds_ns.HexHeatmap = __ds_scope.HexHeatmap;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.UsageMeter = __ds_scope.UsageMeter;

__ds_ns.ScatterPlot = __ds_scope.ScatterPlot;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.VIZ_TIERS = __ds_scope.VIZ_TIERS;

__ds_ns.Viz = __ds_scope.Viz;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ErrorState = __ds_scope.ErrorState;

__ds_ns.InlineNotification = __ds_scope.InlineNotification;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.CodeFrame = __ds_scope.CodeFrame;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.KeyValueInput = __ds_scope.KeyValueInput;

__ds_ns.VariableToken = __ds_scope.VariableToken;

__ds_ns.PromptEditor = __ds_scope.PromptEditor;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.InspectorField = __ds_scope.InspectorField;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.InspectorHeader = __ds_scope.InspectorHeader;

__ds_ns.InspectorTabs = __ds_scope.InspectorTabs;

__ds_ns.InspectorFooter = __ds_scope.InspectorFooter;

__ds_ns.InspectorPanel = __ds_scope.InspectorPanel;

__ds_ns.InspectorSection = __ds_scope.InspectorSection;

__ds_ns.PropertyRow = __ds_scope.PropertyRow;

__ds_ns.FACT_TYPES = __ds_scope.FACT_TYPES;

__ds_ns.MEMORY_SCOPES = __ds_scope.MEMORY_SCOPES;

__ds_ns.MemoryBadge = __ds_scope.MemoryBadge;

__ds_ns.MemoryScope = __ds_scope.MemoryScope;

__ds_ns.MemoryConfidence = __ds_scope.MemoryConfidence;

__ds_ns.MemoryConflict = __ds_scope.MemoryConflict;

__ds_ns.MemoryFact = __ds_scope.MemoryFact;

__ds_ns.MemoryGraph = __ds_scope.MemoryGraph;

__ds_ns.MemoryScopeBar = __ds_scope.MemoryScopeBar;

__ds_ns.MemoryTimeline = __ds_scope.MemoryTimeline;

__ds_ns.MemoryUsageBar = __ds_scope.MemoryUsageBar;

__ds_ns.AppShell = __ds_scope.AppShell;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.CommandPalette = __ds_scope.CommandPalette;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.GlobalHeader = __ds_scope.GlobalHeader;

__ds_ns.ObjectTree = __ds_scope.ObjectTree;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.NavSection = __ds_scope.NavSection;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.StatusBar = __ds_scope.StatusBar;

__ds_ns.WorkspaceSwitcher = __ds_scope.WorkspaceSwitcher;

__ds_ns.AgentIsland = __ds_scope.AgentIsland;

__ds_ns.BondEdge = __ds_scope.BondEdge;

__ds_ns.BondLayer = __ds_scope.BondLayer;

__ds_ns.EntityChip = __ds_scope.EntityChip;

__ds_ns.GenieCard = __ds_scope.GenieCard;

__ds_ns.ObjectRow = __ds_scope.ObjectRow;

__ds_ns.ObjectList = __ds_scope.ObjectList;

__ds_ns.PlaybookCluster = __ds_scope.PlaybookCluster;

__ds_ns.SKILL_SIZES = __ds_scope.SKILL_SIZES;

__ds_ns.SkillOrb = __ds_scope.SkillOrb;

__ds_ns.BUSINESS_PROCESSES = __ds_scope.BUSINESS_PROCESSES;

__ds_ns.BLANK_PROCESS = __ds_scope.BLANK_PROCESS;

__ds_ns.MatchProcess = __ds_scope.MatchProcess;

__ds_ns.ProcessProposal = __ds_scope.ProcessProposal;

__ds_ns.Message = __ds_scope.Message;

__ds_ns.MessageList = __ds_scope.MessageList;

__ds_ns.Composer = __ds_scope.Composer;

__ds_ns.Conversation = __ds_scope.Conversation;

__ds_ns.BuildGenie = __ds_scope.BuildGenie;

__ds_ns.GenieBlueprint = __ds_scope.GenieBlueprint;

__ds_ns.IntegrationCard = __ds_scope.IntegrationCard;

__ds_ns.LearnedPattern = __ds_scope.LearnedPattern;

__ds_ns.MobileShell = __ds_scope.MobileShell;

__ds_ns.ObservedProcess = __ds_scope.ObservedProcess;

__ds_ns.PermissionCell = __ds_scope.PermissionCell;

__ds_ns.PermissionMatrix = __ds_scope.PermissionMatrix;

__ds_ns.RoleBadge = __ds_scope.RoleBadge;

__ds_ns.PlaybookComposer = __ds_scope.PlaybookComposer;

__ds_ns.VoiceWaveform = __ds_scope.VoiceWaveform;

__ds_ns.VoiceButton = __ds_scope.VoiceButton;

__ds_ns.ApprovalCard = __ds_scope.ApprovalCard;

__ds_ns.HumanCheckpoint = __ds_scope.HumanCheckpoint;

__ds_ns.EnvironmentBanner = __ds_scope.EnvironmentBanner;

__ds_ns.KillSwitch = __ds_scope.KillSwitch;

__ds_ns.SafetyControls = __ds_scope.SafetyControls;

__ds_ns.LiveActivityIndicator = __ds_scope.LiveActivityIndicator;

__ds_ns.ReadinessCheck = __ds_scope.ReadinessCheck;

__ds_ns.RunSummary = __ds_scope.RunSummary;

__ds_ns.RunStep = __ds_scope.RunStep;

__ds_ns.RunTimeline = __ds_scope.RunTimeline;

__ds_ns.SimulationBar = __ds_scope.SimulationBar;

__ds_ns.SimulationStep = __ds_scope.SimulationStep;

})();
