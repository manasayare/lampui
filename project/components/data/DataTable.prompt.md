The one LAMP table: runs, Agents, Playbooks, memory facts, Tools, approvals, members, permissions, costs, logs, audit events. No alternating stripes — hover and hairlines carry the rows.

```jsx
<DataTable
  columns={[
    { key:'id', header:'Run', mono:true, pinned:true },
    { key:'playbook', header:'Playbook', sortable:true },
    { key:'status', header:'Status', render:(r)=><StatusBadge status={r.status} /> },
    { key:'cost', header:'Cost', align:'right', mono:true, sortable:true },
  ]}
  rows={runs} density="compact" selectable selected={sel} onSelect={pick}
  toolbar={<SearchInput placeholder="Search runs" />}
  bulkActions={<Button size="xs" variant="secondary">Export</Button>} />
```

Wire sorting, filtering, pagination and virtualization through TanStack Table and pass the results in.
