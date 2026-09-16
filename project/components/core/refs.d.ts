/**
 * Merges refs onto one node. Memoised on the refs, so the returned callback is
 * stable between renders — an inline callback ref is invoked with null and then
 * the node again on every render, which tears down anything attached to it.
 *
 * Use it when a component needs its own element and must still honour a
 * forwarded ref, or when you are putting another library's trigger ref on a LAMP
 * component that already takes one.
 */
export declare function useMergedRefs<T>(
  ...refs: Array<React.Ref<T> | undefined | null>
): React.RefCallback<T> | null;
