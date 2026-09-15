# Motion inventory

At rest LAMP is still. Motion means something changed, or something is running.

| Interaction | Duration | Easing | What moves |
| --- | --- | --- | --- |
| Hover (controls, rows) | 80–120ms | standard | background / border colour only |
| Press | 80ms | standard | background one step; canvas objects scale 0.99 |
| Focus ring | instant | — | no transition (accessibility) |
| Selection | 180ms | standard | border colour + weight, fill tint |
| Panel / dock open | 180ms | standard | translate + opacity |
| Popover / tooltip | 120ms | enter / exit | opacity + 0.98 → 1 scale |
| Menu | 120ms | enter | opacity + 4px rise |
| Dialog | 240ms | enter | opacity + 0.98 → 1 scale, scrim 180ms |
| Drawer | 240ms | standard | translate X |
| Drag start | 120ms | magnetic | 1px lift + `shadow-1` |
| Snap proximity | 120ms | magnetic | edge glow 0 → 20%, scale 1.01 |
| Snap capture | 180ms | magnetic | 2–6px magnetic shift, glow → 45% |
| Bond | 420ms | magnetic | compress 80 / merge 120 / pulse 180 / settle 120 |
| Bond break | 180ms | exit | filament opacity, settle |
| Simulation step | 240ms | standard | step icon state, progress bar width |
| Execution energy | 1.2s loop | linear | spark travelling along active bonds only |
| Running object | 1.8s loop | standard | 6px glow breathe on the active Agent only |
| Success | 180ms | enter | border → green, single 240ms pulse |
| Failure | 180ms | critical | border → red, single 80ms shake of 2px |
| Waiting | 1.4s loop | standard | status dot opacity 0.35 ↔ 1 |
| Live activation | 600ms | critical | environment bar colour sweep, one gold pulse across bonded Agents |
| Pause | 240ms | exit | energy dissipates, borders → paused |
| Emergency stop | 600ms | critical | all energy stops within 180ms, environment bar → red, canvas inset frame |
| Zoom / pan | live | — | direct manipulation, no easing |

## Agent runtime choreography

One beat per state, and nothing at all when the Agent is not doing anything.

| State | Border | Beat | Ends when |
| --- | --- | --- | --- |
| queued | default | none — completely still | it starts |
| starting | Gold 300 | one 240ms ring contracting inward | first step runs |
| running | Gold 400 | slow 1.8s throb, gold ring breathing 1.02 → 1.12 | the step finishes |
| delegating | Gold 400 | same throb + a spark travelling the bond to the delegate | the delegate takes over |
| waiting · needsHuman | purple | throb stops; only the status dot pulses at 1.4s | the input arrives |
| retrying | orange | faster 900ms throb | it succeeds or exhausts retries |
| succeeded | green, fading to default over 1.2s | one 520ms ring expanding outward, then **still** | immediately — stability is the point |
| failed · error | red, persists | one 160ms 2px shake, then still | a human retries |
| paused | neutral | energy dissipates once over 240ms | resumed |
| killed | red 700 | none, slight desaturation | resumed after review |

The rule this encodes: **movement means work in progress.** A finished Agent is visually calmer than a running one, and a failed Agent is loud once and then quiet, so a canvas of 30 Agents only moves where something is actually happening. Under `prefers-reduced-motion` every beat becomes a static ring at 35% opacity.

**Never animate:** form fields, text, table rows on load, chart redraws on filter change (values change, geometry does not fly), or anything at rest.

**Reduced motion:** travelling energy, compression, pulse loops and the Live sweep are replaced by static border/opacity states; all transitions cap at 120–180ms.
