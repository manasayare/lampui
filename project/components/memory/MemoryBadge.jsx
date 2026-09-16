import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';

/** Memory fact types — distinguished by glyph + label, not colour alone. */
export const FACT_TYPES = {
  explicitFact:    { label: 'Fact',        glyph: 'check_circle',    tone: 'memory' },
  observedPattern: { label: 'Observed',    glyph: 'visibility',      tone: 'neutral' },
  inferredPattern: { label: 'Inferred',    glyph: 'flare',    tone: 'waiting' },
  policy:          { label: 'Policy',      glyph: 'gavel',           tone: 'brand' },
  preference:      { label: 'Preference',  glyph: 'tune',            tone: 'memory' },
  exception:       { label: 'Exception',   glyph: 'report',          tone: 'warning' },
  assumption:      { label: 'Assumption',  glyph: 'help',            tone: 'neutral' },
  historicalEvent: { label: 'Event',       glyph: 'event',           tone: 'neutral' },
  relationship:    { label: 'Relationship',glyph: 'link',            tone: 'memory' },
  decision:        { label: 'Decision',    glyph: 'rule',            tone: 'memory' },
  rule:            { label: 'Rule',        glyph: 'balance',         tone: 'brand' },
  temporaryContext:{ label: 'Temporary',   glyph: 'schedule',        tone: 'neutral' },
  workingMemory:   { label: 'Working',     glyph: 'psychology',      tone: 'memory' },
};

export const MEMORY_SCOPES = {
  agent:    { label: 'Agent working memory', short: 'Agent' },
  playbook: { label: 'Playbook memory',      short: 'Playbook' },
  genie:    { label: 'Genie memory',         short: 'Genie' },
  lamp:     { label: 'LAMP memory',          short: 'LAMP' },
};

export const MemoryBadge = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function MemoryBadge({ type = 'explicitFact', label, micro = true, ...rest }, ref) {
  const t = FACT_TYPES[type] || FACT_TYPES.explicitFact;
  return <Badge ref={ref} tone={t.tone} icon={t.glyph} micro={micro} {...rest}>{label || t.label}</Badge>;
}), { displayName: 'MemoryBadge' });

export const MemoryScope = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function MemoryScope({ scope = 'agent', full = false, ...rest }, ref) {
  const s = MEMORY_SCOPES[scope] || MEMORY_SCOPES.agent;
  return (
    <span ref={ref} className={'lamp-mem-scope lamp-mem-scope--' + scope} title={s.label} {...rest}>
      <span className="lamp-mem-scope__bar" />
      {full ? s.label : s.short}
    </span>
  );
}), { displayName: 'MemoryScope' });

export const MemoryConfidence = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function MemoryConfidence({ level = 'high', value, showValue = false, ...rest }, ref) {
  const pct = value != null ? value : level === 'veryHigh' ? 96 : level === 'high' ? 84 : level === 'medium' ? 62 : 34;
  const label = level === 'veryHigh' ? 'Very high' : level === 'high' ? 'High' : level === 'medium' ? 'Medium' : 'Low';
  const tone = pct >= 80 ? 'high' : pct >= 55 ? '' : 'low';
  return (
    <span ref={ref} className="lamp-conf" {...rest}>
      <span className="lamp-conf__track"><span className={'lamp-conf__fill' + (tone ? ' lamp-conf__fill--' + tone : '')} style={{ width: pct + '%' }} /></span>
      <span className="lamp-conf__label">{showValue ? pct + '%' : label}</span>
    </span>
  );
}), { displayName: 'MemoryConfidence' });
