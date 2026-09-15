import React from 'react';

export const Tooltip = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Tooltip({ content, shortcut, rich = false, children, ...rest }, ref) {
  const [open, setOpen] = React.useState(false);
  return (
    <span ref={ref} className={['lamp-tip', open && 'lamp-tip--open'].filter(Boolean).join(' ')}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} {...rest}>
      {children}
      <span role="tooltip" className={['lamp-tip__pop', rich && 'lamp-tip__pop--rich'].filter(Boolean).join(' ')}>
        {content}{shortcut ? <span className="lamp-tip__kbd">{shortcut}</span> : null}
      </span>
    </span>
  );
}), { displayName: 'Tooltip' });
