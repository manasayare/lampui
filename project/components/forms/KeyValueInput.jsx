import React from 'react';
import { TextInput } from './TextInput.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { Button } from '../core/Button.jsx';

export const KeyValueInput = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function KeyValueInput({ rows = [], onChange, keyPlaceholder = 'Key', valuePlaceholder = 'Value', addLabel = 'Add row', mono = true, ...rest }, ref) {
  const set = (i, patch) => onChange && onChange(rows.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  return (
    <div ref={ref} className="lamp-kv" {...rest}>
      {rows.map((r, i) => (
        <div className="lamp-kv__row" key={i}>
          <TextInput size="sm" mono={mono} value={r.key} placeholder={keyPlaceholder} onChange={(e) => set(i, { key: e.target.value })} />
          <TextInput size="sm" mono={mono} value={r.value} placeholder={valuePlaceholder} onChange={(e) => set(i, { value: e.target.value })} />
          <IconButton icon="delete" label="Remove row" size="sm" tone="danger" onClick={() => onChange && onChange(rows.filter((_, j) => j !== i))} />
        </div>
      ))}
      <Button className="lamp-kv__add" variant="ghost" size="sm" icon="add" onClick={() => onChange && onChange([...rows, { key: '', value: '' }])}>{addLabel}</Button>
    </div>
  );
}), { displayName: 'KeyValueInput' });
