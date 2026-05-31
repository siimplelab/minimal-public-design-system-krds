"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CalendarClock, Search, SlidersHorizontal } from "lucide-react";
import {
  FilterGroup,
  PageHeader,
  PaginationBar,
  SearchForm,
  SectionHeader,
} from "@/components/patterns";
import { Badge, EmptyState } from "@/components/ui";
import { ServiceShell } from "@/components/templates/service-shell";
import { searchResults } from "@/data/mock";
import { usePagination } from "@/hooks/use-pagination";

const PAGE_SIZE = 2;

const resultTypeOptions = [
  { label: "공지사항", value: "공지사항" },
  { label: "서비스 안내", value: "서비스 안내" },
  { label: "FAQ", value: "FAQ" },
];

export default function SearchPage() {
  const [keyword, setKeyword] = useState("지원");
  const [types, setTypes] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return searchResults.filter((result) => {
      const byKeyword = !keyword || `${result.title}${result.snippet}`.includes(keyword);
      const byType = types.length === 0 || types.includes(result.type);
      return byKeyword && byType;
    });
  }, [keyword, types]);

  const { page, setPage, totalPages, pagedItems: pagedResults } = usePagination(
    filtered,
    PAGE_SIZE
  );

  return (
    <ServiceShell
      activePath="/search"
      title="통합검색"
      description="공공서비스 정보 탐색에 필요한 검색-필터-결과 레이아웃 패턴입니다."
    >
      <PageHeader
        className="animate-fade-up"
        title="통합검색"
        description="공지사항, 서비스 안내, FAQ를 한 번에 검색할 수 있습니다."
        breadcrumbs={[{ href: "/", label: "홈" }, { label: "통합검색" }]}
      />

      <div className="mt-6 space-y-4">
        <SearchForm
          defaultKeyword={keyword}
          onSearch={({ keyword: nextKeyword }) => {
            setKeyword(nextKeyword);
            setPage(1);
          }}
        />

        <FilterGroup
          title="결과 유형"
          options={resultTypeOptions}
          value={types}
          onChange={(next) => {
            setTypes(next);
            setPage(1);
          }}
        />

        <section className="rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)] sm:p-6">
          <SectionHeader
            title="검색 결과"
            icon={<SlidersHorizontal className="h-3.5 w-3.5" />}
            description={`총 ${filtered.length}건`}
          />

          {pagedResults.length === 0 ? (
            <EmptyState
              title="검색 결과가 없습니다"
              description="검색어를 줄이거나 다른 필터 조건으로 다시 시도해 주세요."
            />
          ) : (
            <ul className="space-y-2">
              {pagedResults.map((result) => (
                <li key={result.id} className="rounded-[0.625rem] bg-bg-canvas px-4 py-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Badge variant="info">{result.type}</Badge>
                    <span className="inline-flex items-center gap-1 text-xs tracking-[-0.01em] text-fg-muted">
                      <CalendarClock className="h-3 w-3" aria-hidden="true" />
                      최종수정 {result.updatedAt}
                    </span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold tracking-[-0.02em] text-fg-default">
                    <Link href={`/detail/${result.id}`} className="hover:underline">
                      {result.title}
                    </Link>
                  </h3>
                  <p className="mt-1.5 text-sm tracking-[-0.015em] text-fg-muted">{result.snippet}</p>
                </li>
              ))}
            </ul>
          )}

          <PaginationBar
            totalCount={filtered.length}
            page={page}
            pageSize={PAGE_SIZE}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </section>
      </div>
    </ServiceShell>
  );
}
