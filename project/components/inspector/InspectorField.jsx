import React from 'react';
import { Icon } from '../core/Icon.jsx';

/* A labelled, editable field at Inspector density.

   The difference from forms/Field is the axis and the weight. Field stacks a
   label above a control for a form the operator is filling in. InspectorField
   puts a 104px label column beside the control — the same column PropertyRow
   uses — so a section can mix read-only rows and editable rows without the
   labels stepping out of line. That alignment is the whole point; an Inspector
   where half the labels sit in a different place reads as two panels.

   `inherited` marks a value coming from a broader scope, and `overridden` marks
   one this object has set for itself. Both are stated in words next to the
   value, not implied by a tint. `advanced` dims the label for configuration that
   most operators should not need to touch. */

export const InspectorField = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function InspectorField({
  label, htmlFor, hint, helper, error, warning, required = false, optional = false,
  inherited = false, inheritedFrom, overridden = false, advanced = false,
  stack = false, action, children, className = '', ...rest
}, ref) {
  const msg = error || warning;
  const tone = error ? 'error' : 'warning';
  const cls = [
    'lamp-ifield',
    stack && 'lamp-ifield--stack',
    advanced && 'lamp-ifield--advanced',
    inherited && 'lamp-ifield--inherited',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div ref={ref} className={cls} {...rest}>
      <div className="lamp-ifield__labelcol">
        <label className="lamp-ifield__label" htmlFor={htmlFor}>
          {label}
          {required ? <span className="lamp-ifield__req"> *</span> : null}
        </label>
        {optional ? <span className="lamp-ifield__opt">Optional</span> : null}
        {hint ? (
          <span className="lamp-ifield__hint" title={hint}>
            <Icon name="help" size={12} label={hint} />
          </span>
        ) : null}
      </div>

      <div className="lamp-ifield__control">
        {children}

        {(inherited || overridden) ? (
          <span className="lamp-ifield__origin">
            {inherited
              ? 'Inherited' + (inheritedFrom ? ' from ' + inheritedFrom : '')
              : 'Overridden here'}
          </span>
        ) : null}

        {msg ? (
          <span className={'lamp-ifield__msg lamp-ifield__msg--' + tone}>
            <Icon name={error ? 'cancel' : 'warning'} size={12} />
            {msg}
          </span>
        ) : helper ? (
          <span className="lamp-ifield__helper">{helper}</span>
        ) : null}
      </div>

      {action ? <div className="lamp-ifield__action">{action}</div> : null}
    </div>
  );
}), { displayName: 'InspectorField' });
