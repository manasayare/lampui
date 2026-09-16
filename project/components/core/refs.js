import React from 'react';

/* Ref merging.

   Most components hand the forwarded ref straight to their root element. A few
   need that element themselves — SnapField measures the field to convert pointer
   coordinates, CanvasSurface gives it to Draggable as the drag trigger — and a
   DOM node takes exactly one `ref` attribute. Those components merge instead.

   Memoised on the refs so the merged callback is stable between renders: an
   inline callback ref is called with null and then the node again on every
   render, which would tear down and recreate the Draggable instance each time.

   Exported from the package as `useMergedRefs` — a consumer composing two LAMP
   components, or putting a Radix trigger ref on one that already takes its own,
   needs exactly the same thing. */

export function useMergedRefs(...refs) {
  return React.useMemo(
    () => {
      if (refs.every((r) => r == null)) return null;
      return (node) => {
        for (const ref of refs) {
          if (typeof ref === 'function') ref(node);
          else if (ref && typeof ref === 'object') ref.current = node;
        }
      };
    },
    refs, // eslint-disable-line react-hooks/exhaustive-deps
  );
}
