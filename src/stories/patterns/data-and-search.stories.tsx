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
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DataTableStory: Story = {
  name: "DataTable",
  render: () => (
    <div className="ds-container py-6">
      <div className="rounded-xl bg-bg-surface p-5 shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
        <SectionHeader title="신청 현황" />
        <DataTable
          caption="신청 목록"
          rows={applications}
          getRowId={(row) => row.id}
          columns={[
            { key: "id", header: "접수번호", render: (row) => row.id },
            { key: "service", header: "서비스", render: (row) => row.service },
            { key: "applicant", header: "신청인", render: (row) => row.applicant },
            { key: "status", header: "상태", render: (row) => <StatusBadge status={row.status} /> },
          ]}
        />
      </div>
    </div>
  ),
};

export const SearchAndFilter: Story = {
  render: () => {
    const [filters, setFilters] = useState<string[]>([]);
    return (
      <div className="ds-container space-y-4 py-6">
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
      </div>
    );
  },
};

export const PaginationBarStory: Story = {
  name: "PaginationBar",
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div className="ds-container py-6">
        <div className="rounded-xl bg-bg-surface p-5 shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
          <SectionHeader title="페이지네이션 예시" />
          <DataTable
            caption="신청 목록"
            rows={applications.slice((page - 1) * 3, page * 3)}
            getRowId={(row) => row.id}
            columns={[
              { key: "id", header: "접수번호", render: (row) => row.id },
              { key: "service", header: "서비스", render: (row) => row.service },
              { key: "status", header: "상태", render: (row) => <StatusBadge status={row.status} /> },
            ]}
          />
          <PaginationBar
            totalCount={applications.length}
            page={page}
            pageSize={3}
            totalPages={Math.ceil(applications.length / 3)}
            onPageChange={setPage}
          />
        </div>
      </div>
    );
  },
};

export const DetailPanelStory: Story = {
  name: "DetailPanel",
  render: () => (
    <div className="ds-container py-6">
      <DetailPanel title="신청 상세 정보" status={<StatusBadge status="처리중" />}>
        <InfoList
          items={[
            { label: "접수번호", value: "AP-260401-1082" },
            { label: "신청인", value: "김민수" },
            { label: "신청 서비스", value: "주거급여 신청" },
            { label: "접수일", value: "2026-04-01" },
            { label: "담당부서", value: "복지정책과" },
          ]}
        />
      </DetailPanel>
    </div>
  ),
};
