import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';

/** Memory fact types — distinguished by glyph + label, not colour alone. */
export const FACT_TYPES = {
  explicitFact:    { label: 'Fact',        glyph: 'check_circle',    tone: 'memory' },
  observedPattern: { label: 'Observed',    glyph: 'visibility',      tone: 'neutral' },
  inferredPattern: { label: 'Inferred',    glyph: 'auto_awesome',    tone: 'waiting' },
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

export function MemoryBadge({ type = 'explicitFact', label, micro = true, ...rest }) {
  const t = FACT_TYPES[type] || FACT_TYPES.explicitFact;
  return <Badge tone={t.tone} icon={t.glyph} micro={micro} {...rest}>{label || t.label}</Badge>;
}

export function MemoryScope({ scope = 'agent', full = false, ...rest }) {
  const s = MEMORY_SCOPES[scope] || MEMORY_SCOPES.agent;
  return (
    <span className={'lamp-mem-scope lamp-mem-scope--' + scope} title={s.label} {...rest}>
      <span className="lamp-mem-scope__bar" />
      {full ? s.label : s.short}
    </span>
  );
}

export function MemoryConfidence({ level = 'high', value, showValue = false, ...rest }) {
  const pct = value != null ? value : level === 'veryHigh' ? 96 : level === 'high' ? 84 : level === 'medium' ? 62 : 34;
  const label = level === 'veryHigh' ? 'Very high' : level === 'high' ? 'High' : level === 'medium' ? 'Medium' : 'Low';
  const tone = pct >= 80 ? 'high' : pct >= 55 ? '' : 'low';
  return (
    <span className="lamp-conf" {...rest}>
      <span className="lamp-conf__track"><span className={'lamp-conf__fill' + (tone ? ' lamp-conf__fill--' + tone : '')} style={{ width: pct + '%' }} /></span>
      <span className="lamp-conf__label">{showValue ? pct + '%' : label}</span>
    </span>
  );
}
