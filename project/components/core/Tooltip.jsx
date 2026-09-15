import React from 'react';

export function Tooltip({ content, shortcut, rich = false, children, ...rest }) {
  const [open, setOpen] = React.useState(false);
  return (
    <span className={['lamp-tip', open && 'lamp-tip--open'].filter(Boolean).join(' ')}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} {...rest}>
      {children}
      <span role="tooltip" className={['lamp-tip__pop', rich && 'lamp-tip__pop--rich'].filter(Boolean).join(' ')}>
        {content}{shortcut ? <span className="lamp-tip__kbd">{shortcut}</span> : null}
      </span>
    </span>
  );
}
