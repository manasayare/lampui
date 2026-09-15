# Semantic zoom

What is legible at what scale. Text below its legibility threshold is not rendered — it is replaced by the tier above.

| Zoom | Visible | AgentHex `detail` | Grid |
| --- | --- | --- | --- |
| < 30% | Genie objects only (collapsed GenieCard footprints) | — | hidden |
| 30–50% | Playbook clusters with names; Agents as unlabelled hexagons | `glyph` | 32px major dots only |
| 50–80% | Agents with state colour; Playbook meta appears | `glyph` | 32px major dots |
| 80–120% | Agent names + status labels | `name` | 8px minor + 32px major |
| 120–180% | Role, compact metadata, Skill and Tool indications | `meta` | full grid |
| > 180% | Working-memory pins, bond junction detail, authority markers | `meta` | full grid |

Rules:

- **Stable spatial location.** Objects never move between tiers; only their content density changes.
- **No flicker.** Tier changes are threshold-based with a 10% hysteresis band, and cross-fade over 180ms.
- **No sudden clutter.** Each tier adds at most one new information class.
- **Never below legibility.** Nothing renders type under 10px; if it would, drop to the tier above.
- The Inspector always shows the full detail for the current selection regardless of zoom, so zoom is never the only way to read an object.
