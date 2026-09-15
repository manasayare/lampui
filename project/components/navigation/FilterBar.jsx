import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';

export const FilterBar = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function FilterBar({ children, activeCount = 0, onClear, right, className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={'lamp-filterbar ' + className} {...rest}>
      <Icon name="filter_list" size={14} style={{ color: 'var(--text-tertiary)' }} />
      {children}
      {activeCount > 0 ? <Button variant="quiet" size="xs" onClick={onClear}>Clear {activeCount}</Button> : null}
      <span className="lamp-filterbar__spacer" />
      {right}
    </div>
  );
}), { displayName: 'FilterBar' });

export const Pagination = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function Pagination({ page = 1, pageCount = 1, range, onPage, pageSize, onPageSize, className = '', ...rest }, ref) {
  return (
    <div ref={ref} className={'lamp-pager ' + className} {...rest}>
      {range ? <span className="lamp-pager__range">{range}</span> : null}
      <Button variant="secondary" size="xs" icon="chevron_left" aria-label="Previous page" disabled={page <= 1} onClick={() => onPage && onPage(page - 1)} />
      <span className="lamp-pager__range">{page} / {pageCount}</span>
      <Button variant="secondary" size="xs" icon="chevron_right" aria-label="Next page" disabled={page >= pageCount} onClick={() => onPage && onPage(page + 1)} />
    </div>
  );
}), { displayName: 'Pagination' });
