The human decision point — built for fast comprehension: what is being asked, the amount, the few facts that matter, then the actions.

```jsx
<ApprovalCard tone="financial" question="Approve payment to Meridian Supplies?" amount="₹184,200"
  requestedBy="Payment Approver" playbook="Vendor payment" dueIn="Due in 2h"
  facts={[{label:'Invoice',value:'INV-20418'},{label:'Matched PO',value:'PO-9921'},{label:'Above limit',value:'₹50,000'}]}
  onApprove={ok} onEdit={edit} onReject={no} onEscalate={up} />
```

Decision structures: binary, multiple choice, review and approve, edit before approve, acknowledge, provide missing information. HumanCheckpoint is the inline marker inside a Playbook or trace.
