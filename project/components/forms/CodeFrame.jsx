import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export const CodeFrame = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function CodeFrame({ language = 'json', title, children, actions, maxHeight, onCopy, ...rest }, ref) {
  return (
    <div ref={ref} className="lamp-codeframe" {...rest}>
      <div className="lamp-codeframe__bar">
        <span className="lamp-codeframe__lang">{language}</span>
        {title ? <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{title}</span> : null}
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
          {actions}
          <IconButton icon="content_copy" label="Copy" size="xs" onClick={onCopy} />
        </span>
      </div>
      <pre className="lamp-codeframe__body" style={maxHeight ? { maxHeight } : undefined}>{children}</pre>
    </div>
  );
}), { displayName: 'CodeFrame' });
