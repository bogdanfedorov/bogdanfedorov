import { useState } from "react";

export const useExpanded = (originalJobsListLength: number = 0) => {
  const expandedAll = new Set(Array(originalJobsListLength).keys());
  const expandedNone = new Set<number>();

  const [expanded, setExpanded] = useState<Set<number>>(expandedNone);

  const [, rerender] = useState({});

  const toggleOne = (index: number) => {
    expanded.has(index) ? expanded.delete(index) : expanded.add(index);

    rerender({});
  };

  const toggleAll = (expandAll?: boolean) => {
    setExpanded((prev) =>
      expandAll !== undefined
        ? expandAll
          ? expandedAll
          : expandedNone
        : prev.size === originalJobsListLength
          ? expandedNone
          : expandedAll,
    );
  };

  return {
    has: expanded.has.bind(expanded),
    toggleOne,
    toggleAll,
  };
};
