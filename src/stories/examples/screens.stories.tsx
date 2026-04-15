import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Link from "next/link";
import {
  DataTable,
  NoticeBanner,
  PageHeader,
  SearchForm,
  SectionHeader,
  StatusBadge,
} from "@/components/patterns";
import { Button } from "@/components/ui";
import { applications, notices } from "@/data/mock";

const meta: Meta = {
  title: "04 Examples/Composed Screens",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PublicPortalSnippet: Story = {
  render: () => (
    <div className="ds-container space-y-4 py-6">
      <PageHeader
        title="시민 통합 서비스"
        description="공공 포털 메인 화면 예시"
        breadcrumbs={[{ label: "홈" }]}
        actions={<Button>신청하기</Button>}
      />

      <NoticeBanner
        title="필수 공지"
        description="점검 시간 동안 일부 기능이 제한될 수 있습니다."
      />

      <section className="rounded-md border border-border-default bg-bg-surface p-4">
        <SectionHeader title="통합검색" />
        <SearchForm defaultKeyword="주거지원" />
      </section>

      <section className="rounded-md border border-border-default bg-bg-surface p-4">
        <SectionHeader title="최근 신청 현황" />
        <DataTable
          caption="최근 신청"
          rows={applications}
          getRowId={(row) => row.id}
          columns={[
            { key: "id", header: "접수번호", render: (row) => row.id },
            { key: "service", header: "서비스", render: (row) => row.service },
            { key: "status", header: "상태", render: (row) => <StatusBadge status={row.status} /> },
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
        />
      </section>

      <section className="rounded-md border border-border-default bg-bg-surface p-4">
        <SectionHeader title="최근 공지" />
        <ul className="space-y-2">
          {notices.slice(0, 2).map((notice) => (
            <li key={notice.id} className="rounded-sm border border-border-default px-3 py-2 text-sm">
              {notice.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  ),
};
