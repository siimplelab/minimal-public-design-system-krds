import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  DataTable,
  DetailPanel,
  FilterGroup,
  InfoList,
  PaginationBar,
  SearchForm,
  SectionHeader,
  StatusBadge,
} from "@/components/patterns";
import { applications } from "@/data/mock";

const meta: Meta = {
  title: "03 Patterns/Data & Search",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PatternComposition: Story = {
  render: () => {
    const [filters, setFilters] = useState<string[]>([]);
    const [page, setPage] = useState(1);

    return (
      <div className="space-y-4">
        <SearchForm />

        <FilterGroup
          title="상태 필터"
          options={[
            { label: "접수완료", value: "접수완료" },
            { label: "처리중", value: "처리중" },
            { label: "처리완료", value: "처리완료" },
          ]}
          value={filters}
          onChange={setFilters}
        />

        <section className="rounded-md border border-border-default bg-bg-surface p-4">
          <SectionHeader title="신청 데이터" />
          <DataTable
            caption="신청 목록"
            rows={applications}
            getRowId={(row) => row.id}
            columns={[
              { key: "id", header: "접수번호", render: (row) => row.id },
              { key: "service", header: "서비스", render: (row) => row.service },
              { key: "name", header: "신청인", render: (row) => row.applicant },
              { key: "status", header: "상태", render: (row) => <StatusBadge status={row.status} /> },
            ]}
          />
          <PaginationBar
            totalCount={applications.length}
            page={page}
            pageSize={3}
            totalPages={4}
            onPageChange={setPage}
          />
        </section>

        <DetailPanel title="상세 정보" status={<StatusBadge status="처리중" />}>
          <InfoList
            items={[
              { label: "접수번호", value: "AP-260401-1082" },
              { label: "신청인", value: "김민수" },
              { label: "담당부서", value: "복지정책과" },
            ]}
          />
        </DetailPanel>
      </div>
    );
  },
};
