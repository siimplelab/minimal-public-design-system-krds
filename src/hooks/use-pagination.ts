"use client";

import { useMemo, useState } from "react";

export function usePagination<T>(items: readonly T[], pageSize: number) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pagedItems = useMemo(
    () => items.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [currentPage, items, pageSize]
  );

  return {
    page: currentPage,
    setPage,
    totalPages,
    pagedItems,
  };
}
