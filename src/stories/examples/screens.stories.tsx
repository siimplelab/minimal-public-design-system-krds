import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Link from "next/link";
import {
  Bell,
  FileClock,
  FolderSearch,
  LayoutGrid,
  Megaphone,
  PlusCircle,
  SquareCheckBig,
} from "lucide-react";
import {
  DataTable,
  NoticeBanner,
  PageHeader,
  SectionHeader,
  SearchForm,
  StatusBadge,
} from "@/components/patterns";
import { Button } from "@/components/ui";
import { applications, dashboardStats, notices, quickServices } from "@/data/mock";

const meta: Meta = {
  title: "04 Examples/Screens",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const statIcons = {
  "신청 대기": FileClock,
  처리중: LayoutGrid,
  처리완료: SquareCheckBig,
} as const;

export const Dashboard: Story = {
  name: "대시보드",
  render: () => (
    <div className="min-h-screen bg-bg-canvas">
      {/* Simulated header */}
      <header className="border-b border-[rgba(0,0,0,0.08)] bg-white/85 backdrop-blur-sm">
        <div className="ds-container flex min-h-12 items-center justify-between gap-3 py-2.5">
          <div>
            <p className="text-xs font-medium text-fg-muted">Minimal Public Design System</p>
            <h1 className="text-sm font-semibold tracking-[-0.025em]">공공서비스 대시보드</h1>
          </div>
        </div>
        <nav className="ds-container flex gap-1 pb-2.5">
          {["시스템 개요", "대시보드", "공지사항", "서비스 신청", "처리 조회"].map((label, i) => (
            <span
              key={label}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium ${
                i === 1 ? "bg-[rgba(0,0,0,0.08)] text-fg-default" : "text-fg-muted"
              }`}
            >
              {label}
            </span>
          ))}
        </nav>
      </header>

      <main className="ds-container py-6">
        <PageHeader
          title="시민 통합 서비스"
          icon={<LayoutGrid className="h-4 w-4" />}
          description="신청, 조회, 민원 접수까지 한 곳에서 처리할 수 있습니다."
          breadcrumbs={[{ label: "홈" }, { label: "대시보드" }]}
          actions={
            <Button size="sm">
              <PlusCircle className="h-3.5 w-3.5" /> 신청하기
            </Button>
          }
        />

        <div className="mt-5 space-y-3">
          <NoticeBanner
            title="필수 안내"
            description="4월 20일(월) 23:00~24:00 시스템 점검으로 일부 서비스가 일시 중단됩니다."
          />

          <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {dashboardStats.map((stat) => {
              const Icon = statIcons[stat.label];
              return (
                <article key={stat.label} className="rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)] sm:p-6">
                  <p className="inline-flex items-center gap-2 text-xs text-fg-muted">
                    <Icon className="h-3.5 w-3.5" />
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{stat.value}</p>
                  <p className="mt-1 text-xs text-fg-muted">{stat.description}</p>
                </article>
              );
            })}
          </section>

          <section className="rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)] sm:p-6">
            <SectionHeader title="자주 사용하는 서비스" icon={<FolderSearch className="h-3.5 w-3.5" />} />
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
              {quickServices.map((service) => (
                <li key={service} className="flex items-center justify-between rounded-lg bg-bg-canvas px-4 py-3 text-sm text-fg-default">
                  <span className="truncate">{service}</span>
                  <FolderSearch className="ml-2 h-3.5 w-3.5 shrink-0 text-fg-muted" />
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)] sm:p-6">
            <SectionHeader
              title="최근 신청 현황"
              icon={<FileClock className="h-3.5 w-3.5" />}
              action={<Button variant="secondary" size="sm"><FileClock className="h-3.5 w-3.5" /> 상태 조회</Button>}
            />
            <DataTable
              caption="최근 신청 현황"
              rows={applications}
              getRowId={(row) => row.id}
              columns={[
                { key: "id", header: "접수번호", render: (row) => row.id },
                { key: "service", header: "서비스", render: (row) => row.service },
                { key: "applicant", header: "신청인", render: (row) => row.applicant },
                { key: "date", header: "접수일", render: (row) => row.submittedAt },
                { key: "status", header: "상태", render: (row) => <StatusBadge status={row.status} /> },
              ]}
            />
          </section>

          <section className="rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)] sm:p-6">
            <SectionHeader title="공지사항" icon={<Megaphone className="h-3.5 w-3.5" />} />
            <ul className="space-y-1.5">
              {notices.slice(0, 3).map((notice) => (
                <li key={notice.id} className="flex items-center gap-3 rounded-lg bg-bg-canvas px-4 py-3">
                  {notice.important && <Bell className="h-3.5 w-3.5 shrink-0 text-[#c9302c]" />}
                  <p className="min-w-0 flex-1 truncate text-sm font-medium text-fg-default">{notice.title}</p>
                  <span className="shrink-0 text-xs text-fg-muted">{notice.date}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  ),
};

export const SearchResults: Story = {
  name: "검색 결과",
  render: () => (
    <div className="ds-container space-y-4 py-6">
      <PageHeader
        title="통합검색 결과"
        description="검색어 기반 결과 목록과 필터/정렬 제어"
        breadcrumbs={[{ label: "홈" }, { label: "검색" }]}
      />

      <div className="rounded-xl bg-bg-surface p-5 shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
        <SectionHeader title="검색" />
        <SearchForm defaultKeyword="주거지원" />
      </div>

      <div className="rounded-xl bg-bg-surface p-5 shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
        <SectionHeader title="검색 결과" />
        <DataTable
          caption="검색 결과"
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
                <Link href={`/detail/${row.id}`} className="text-xs font-medium text-[#0066cc] hover:underline">
                  상세보기
                </Link>
              ),
            },
          ]}
        />
      </div>
    </div>
  ),
};
