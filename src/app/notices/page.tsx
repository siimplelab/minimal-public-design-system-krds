"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Bell, Filter, List, Megaphone } from "lucide-react";
import {
  DataTable,
  FilterGroup,
  PageHeader,
  PaginationBar,
  SearchForm,
  SectionHeader,
} from "@/components/patterns";
import { Badge } from "@/components/ui";
import { ServiceShell } from "@/components/templates/service-shell";
import { notices } from "@/data/mock";
import { usePagination } from "@/hooks/use-pagination";

const PAGE_SIZE = 3;

const categoryOptions = [
  { label: "복지", value: "복지" },
  { label: "민원", value: "민원" },
  { label: "시스템", value: "시스템" },
];

export default function NoticesPage() {
  const [keyword, setKeyword] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  const filteredRows = useMemo(() => {
    return notices.filter((notice) => {
      const byKeyword = !keyword || notice.title.includes(keyword);
      const byCategory = categories.length === 0 || categories.includes(notice.category);
      return byKeyword && byCategory;
    });
  }, [keyword, categories]);

  const { page, setPage, totalPages, pagedItems: pagedRows } = usePagination(
    filteredRows,
    PAGE_SIZE
  );

  return (
    <ServiceShell
      activePath="/notices"
      title="공지사항"
      description="기관 공지와 서비스 안내를 일관된 표 구조로 제공하는 목록 패턴입니다."
    >
      <PageHeader
        className="animate-fade-up"
        title="공지사항"
        description="중요 공지, 업데이트 안내, 점검 공지를 확인할 수 있습니다."
        breadcrumbs={[{ href: "/", label: "홈" }, { label: "공지사항" }]}
      />

      <div className="mt-6 space-y-4">
        <div className="animate-fade-up" style={{ animationDelay: "60ms" }}>
          <SearchForm
            onSearch={({ keyword: nextKeyword }) => {
              setKeyword(nextKeyword);
              setPage(1);
            }}
          />
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
          <FilterGroup
            title="카테고리 필터"
            options={categoryOptions}
            value={categories}
            onChange={(next) => {
              setCategories(next);
              setPage(1);
            }}
          />
        </div>

        <section
          className="animate-fade-up rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)] sm:p-6"
          style={{ animationDelay: "180ms" }}
        >
          <SectionHeader
            title="공지 목록"
            icon={<List className="h-4 w-4" />}
            description="중요 공지는 별도 뱃지로 표시됩니다."
          />
          <DataTable
            caption="공지사항 목록"
            rows={pagedRows}
            getRowId={(row) => row.id}
            columns={[
              {
                key: "important",
                header: "구분",
                className: "w-28",
                render: (row) => (row.important ? <Badge variant="danger">중요</Badge> : <Badge>일반</Badge>),
              },
              {
                key: "title",
                header: "제목",
                render: (row) => (
                  <span className="inline-flex items-center gap-1.5">
                    <Bell className="h-3.5 w-3.5 text-fg-muted" aria-hidden="true" />
                    {row.title}
                  </span>
                ),
              },
              {
                key: "category",
                header: "분류",
                render: (row) => (
                  <span className="inline-flex items-center gap-1.5">
                    <Filter className="h-3.5 w-3.5 text-fg-muted" aria-hidden="true" />
                    {row.category}
                  </span>
                ),
              },
              { key: "date", header: "등록일", render: (row) => row.date },
              {
                key: "detail",
                header: "상세",
                render: (row) => (
                  <Link href={`/detail/${row.id}`} className="font-medium text-fg-link hover:underline">
                    상세보기
                  </Link>
                ),
              },
            ]}
            emptyTitle="공지사항이 없습니다"
            emptyDescription="검색어 또는 필터를 다시 확인해 주세요."
          />
          <PaginationBar
            totalCount={filteredRows.length}
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
