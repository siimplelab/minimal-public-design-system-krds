"use client";

import { Pagination } from "@/components/ui";

interface PaginationBarProps {
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function PaginationBar({
  totalCount,
  page,
  pageSize,
  totalPages,
  onPageChange,
}: PaginationBarProps) {
  const start = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalCount);

  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-md border border-border-default bg-bg-surface px-4 py-3">
      <p className="text-sm text-fg-muted">
        총 <strong className="text-fg-default">{totalCount}</strong>건 중 {start}~{end}건
      </p>
      <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}
