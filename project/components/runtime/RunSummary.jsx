import React from 'react';
import { StatusBadge } from '../core/StatusBadge.jsx';
import { PropertyRow } from '../inspector/InspectorSection.jsx';

export function RunSummary({ runId, status = 'success', trigger, started, completed, duration, agents, toolCalls, llmCalls, cacheRate, tokens, cost, interventions, environment, className = '', ...rest }) {
  const rows = [
    ['Run ID', runId, true], ['Environment', environment], ['Trigger', trigger],
    ['Started', started, true], ['Completed', completed, true], ['Duration', duration, true],
    ['Agents', agents, true], ['Tool calls', toolCalls, true], ['LLM calls', llmCalls, true],
    ['Cache utilization', cacheRate, true], ['Tokens', tokens, true], ['Estimated cost', cost, true],
    ['Human interventions', interventions, true],
  ].filter((r) => r[1] != null && r[1] !== '');
  return (
    <div className={className} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 8 }}>
        <StatusBadge status={status} />
      </div>
      {rows.map(([label, value, mono]) => <PropertyRow key={label} label={label} value={value} mono={!!mono} />)}
    </div>
  );
}
