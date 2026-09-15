import React from 'react';
import { Tag } from '../core/Tag.jsx';

export const TagInput = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function TagInput({ values = [], onChange, placeholder = 'Add…', mono = false, ...rest }, ref) {
  const [focus, setFocus] = React.useState(false);
  const [draft, setDraft] = React.useState('');
  const commit = () => { const t = draft.trim(); if (!t) return; onChange && onChange([...values, t]); setDraft(''); };
  return (
    <div className={['lamp-taginput', focus && 'lamp-taginput--focus'].filter(Boolean).join(' ')} {...rest}>
      {values.map((v, i) => <Tag key={v + i} mono={mono} onRemove={() => onChange && onChange(values.filter((_, j) => j !== i))}>{v}</Tag>)}
      <input ref={ref} value={draft} placeholder={placeholder} onFocus={() => setFocus(true)} onBlur={() => { setFocus(false); commit(); }}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); commit(); } if (e.key === 'Backspace' && !draft && values.length) onChange && onChange(values.slice(0, -1)); }} />
    </div>
  );
}), { displayName: 'TagInput' });
