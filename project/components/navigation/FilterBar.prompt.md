Filter/sort/view strip above tables, lists and run history; Pagination is its footer counterpart.

```jsx
<FilterBar activeCount={2} onClear={clear} right={<SegmentedControl options={['Compact','Default']} value={d} onChange={setD} />}>
  <Select size="sm" options={['All statuses','Failed','Waiting']} />
</FilterBar>
<Pagination page={1} pageCount={24} range="1–50 of 1,180" onPage={setPage} />
```
