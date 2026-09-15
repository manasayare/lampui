import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { StatusDot } from '../core/StatusBadge.jsx';

export const SKILL_SIZES = { xs: 16, sm: 20, md: 28, lg: 36, xl: 48 };

export function SkillOrb({ size = 'md', state = 'available', glyph = 'flare', name, label, onClick, className = '', style, ...rest }) {
  const px = SKILL_SIZES[size] || SKILL_SIZES.md;
  const orb = (
    <span className={['lamp-skill', 'lamp-skill--' + state, onClick && 'lamp-skill--interactive', className].filter(Boolean).join(' ')}
      style={{ width: px, height: px, ...style }} onClick={onClick} role={onClick ? 'button' : 'img'}
      aria-label={name ? name + ' Skill' : 'Skill'} tabIndex={onClick ? 0 : undefined} title={name} {...rest}>
      <Icon name={glyph} size={px <= 20 ? 10 : px <= 28 ? 14 : 18} />
      {state === 'error' || state === 'waiting' ? <span className="lamp-skill__dot"><StatusDot status={state === 'error' ? 'error' : 'waiting'} /></span> : null}
    </span>
  );
  if (!label) return orb;
  return <span className="lamp-skillrow">{orb}<span className="lamp-skillrow__name">{name}</span></span>;
}
