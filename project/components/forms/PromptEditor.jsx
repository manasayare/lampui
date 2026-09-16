import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';

export const VariableToken = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function VariableToken({ name, kind = 'variable', children, ...rest }, ref) {
  const label = children || name;
  return <span ref={ref} className={'lamp-vartoken' + (kind === 'entity' ? ' lamp-vartoken--entity' : kind === 'missing' ? ' lamp-vartoken--missing' : '')} {...rest}>
    <Icon name={kind === 'entity' ? 'alternate_email' : kind === 'missing' ? 'warning' : 'data_object'} size={10} />{label}
  </span>;
}), { displayName: 'VariableToken' });

export const PromptEditor = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function PromptEditor({ label = 'Instructions', children, tokens = [], footer, onInsert, ...rest }, ref) {
  return (
    <div ref={ref} className="lamp-prompt" {...rest}>
      <div className="lamp-prompt__bar">
        <span className="lamp-prompt__label">{label}</span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
          {tokens.map((t) => <Button key={t} variant="quiet" size="xs" onClick={() => onInsert && onInsert(t)}>{'{{' + t + '}}'}</Button>)}
        </span>
      </div>
      <div className="lamp-prompt__body" contentEditable={false} suppressContentEditableWarning>{children}</div>
      {footer ? <div className="lamp-prompt__foot">{footer}</div> : null}
    </div>
  );
}), { displayName: 'PromptEditor' });
