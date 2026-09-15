import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Checkbox } from '../forms/Checkbox.jsx';

/* Presentation layer for TanStack Table. Logic (sorting, filtering, virtualization,
   grouping, pagination) belongs to the table instance; this renders LAMP's surface. */
export function DataTable({
  columns = [], rows = [], density = 'default', variant = 'standard', sort, onSort,
  selectable = false, selected = [], onSelect, onSelectAll, onRowClick, rowKey = (r, i) => r.id || i,
  toolbar, bulkActions, footerRow, state = 'ready', emptyState, stickyHeader = true, className = '', ...rest
}) {
  const allSelected = selectable && rows.length > 0 && selected.length === rows.length;
  return (
    <div className={'lamp-tablewrap ' + className} {...rest}>
      {toolbar ? <div className="lamp-tabletoolbar">{toolbar}</div> : null}
      {selectable && selected.length > 0 ? (
        <div className="lamp-tablebulk">
          <Icon name="check_circle" size={14} />
          {selected.length} selected
          <span style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>{bulkActions}</span>
        </div>
      ) : null}
      <div className="lamp-tablewrap__scroll">
        <table className={['lamp-table', density !== 'default' && 'lamp-table--' + density, variant !== 'standard' && 'lamp-table--' + variant].filter(Boolean).join(' ')}>
          <thead>
            <tr>
              {selectable ? (
                <th style={{ width: 34 }} data-pinned>
                  <Checkbox checked={allSelected} indeterminate={selected.length > 0 && !allSelected} onChange={() => onSelectAll && onSelectAll(!allSelected)} aria-label="Select all rows" />
                </th>
              ) : null}
              {columns.map((c) => (
                <th key={c.key} data-align={c.align} data-sortable={c.sortable ? '' : undefined} data-pinned={c.pinned ? '' : undefined}
                  style={c.width ? { width: c.width } : undefined}
                  onClick={c.sortable && onSort ? () => onSort(c.key) : undefined}
                  aria-sort={sort && sort.key === c.key ? (sort.dir === 'asc' ? 'ascending' : 'descending') : undefined}>
                  {c.header}
                  {c.sortable ? (
                    <span className="lamp-table__sort">
                      <Icon name={sort && sort.key === c.key ? (sort.dir === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more'} size={12} />
                    </span>
                  ) : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {state === 'loading' ? Array.from({ length: 6 }, (_, i) => (
              <tr key={i}><td colSpan={columns.length + (selectable ? 1 : 0)}><span className="lamp-skel" style={{ display: 'block', height: 10, width: '60%' }} /></td></tr>
            )) : null}
            {state === 'ready' ? rows.map((r, i) => {
              const key = rowKey(r, i);
              const isSel = selected.indexOf(key) !== -1;
              return (
                <tr key={key} data-selected={isSel ? '' : undefined} onClick={onRowClick ? () => onRowClick(r) : undefined} style={onRowClick ? { cursor: 'pointer' } : undefined}>
                  {selectable ? (
                    <td data-pinned onClick={(e) => e.stopPropagation()}>
                      <Checkbox checked={isSel} onChange={() => onSelect && onSelect(key, !isSel)} aria-label="Select row" />
                    </td>
                  ) : null}
                  {columns.map((c) => (
                    <td key={c.key} data-align={c.align} data-mono={c.mono ? '' : undefined} data-pinned={c.pinned ? '' : undefined}>
                      {c.render ? c.render(r) : r[c.key]}
                    </td>
                  ))}
                </tr>
              );
            }) : null}
          </tbody>
          {footerRow ? <tfoot><tr>{footerRow}</tr></tfoot> : null}
        </table>
        {state === 'empty' ? <div className="lamp-table__empty">{emptyState}</div> : null}
      </div>
    </div>
  );
}
