"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

function getPages(current: number, total: number) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set([1, total, current, current - 1, current + 1]);
  return Array.from(pages)
    .filter((page) => page > 0 && page <= total)
    .sort((a, b) => a - b);
}

export function Pagination({ page, totalPages, onPageChange, className }: PaginationProps) {
  const pages = getPages(page, totalPages);

  return (
    <nav className={cn("flex items-center gap-2", className)} aria-label="페이지 이동">
      <Button
        variant="secondary"
        size="sm"
        disabled={page <= 1}
        onClick={() => onPageChange?.(page - 1)}
        aria-label="이전 페이지"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <ol className="flex items-center gap-1">
        {pages.map((pageNumber, index) => {
          const prev = pages[index - 1];
          const hasGap = prev && pageNumber - prev > 1;

          return (
            <React.Fragment key={pageNumber}>
              {hasGap ? <li className="px-1 text-sm text-fg-muted">…</li> : null}
              <li>
                <button
                  type="button"
                  onClick={() => onPageChange?.(pageNumber)}
                  className={cn(
                    "h-8 min-w-8 rounded-sm border px-2 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
                    pageNumber === page
                      ? "border-state-info bg-state-info text-fg-inverse"
                      : "border-border-default bg-bg-surface text-fg-default hover:bg-bg-subtle"
                  )}
                  aria-current={pageNumber === page ? "page" : undefined}
                >
                  {pageNumber}
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ol>

      <Button
        variant="secondary"
        size="sm"
        disabled={page >= totalPages}
        onClick={() => onPageChange?.(page + 1)}
        aria-label="다음 페이지"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
}
