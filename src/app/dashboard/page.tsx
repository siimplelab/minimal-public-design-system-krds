import Link from "next/link";
import { Bell, FileClock, FolderSearch, PlusCircle } from "lucide-react";
import {
  DataTable,
  NoticeBanner,
  PageHeader,
  SectionHeader,
  StatusBadge,
} from "@/components/patterns";
import { Button } from "@/components/ui";
import { ServiceShell } from "@/components/templates/service-shell";
import { applications, dashboardStats, notices, quickServices } from "@/data/mock";

export default function DashboardPage() {
  return (
    <ServiceShell
      activePath="/dashboard"
      title="공공서비스 대시보드"
      description="자주 사용하는 민원 기능과 최근 처리 상태를 한 화면에서 빠르게 확인할 수 있는 기본 포털 레이아웃입니다."
    >
      <PageHeader
        title="시민 통합 서비스"
        description="신청, 조회, 민원 접수까지 한 곳에서 처리할 수 있습니다."
        breadcrumbs={[{ href: "/", label: "홈" }, { label: "대시보드" }]}
        actions={
          <Button asChild>
            <Link href="/service-apply">
              <PlusCircle className="h-4 w-4" /> 신청하기
            </Link>
          </Button>
        }
      />

      <div className="mt-5 space-y-4">
        <NoticeBanner
          title="필수 안내"
          description="4월 20일(월) 23:00~24:00 시스템 점검으로 일부 서비스가 일시 중단됩니다."
        />

        <section className="grid gap-3 md:grid-cols-3">
          {dashboardStats.map((stat) => (
            <article key={stat.label} className="rounded-md border border-border-default bg-bg-surface p-4">
              <p className="text-sm text-fg-muted">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-fg-default">{stat.value}</p>
              <p className="mt-2 text-sm text-fg-muted">{stat.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-md border border-border-default bg-bg-surface p-4">
          <SectionHeader title="자주 사용하는 서비스" />
          <ul className="grid gap-2 md:grid-cols-3">
            {quickServices.map((service) => (
              <li key={service}>
                <Link
                  href={service.includes("신청") ? "/service-apply" : "/search"}
                  className="flex items-center justify-between rounded-sm border border-border-default px-3 py-2 text-sm hover:bg-bg-subtle"
                >
                  {service}
                  <FolderSearch className="h-4 w-4 text-fg-muted" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-md border border-border-default bg-bg-surface p-4">
          <SectionHeader
            title="최근 신청 현황"
            action={
              <Button variant="secondary" size="sm" asChild>
                <Link href="/status">
                  <FileClock className="h-4 w-4" /> 상태 조회
                </Link>
              </Button>
            }
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
              {
                key: "status",
                header: "상태",
                render: (row) => <StatusBadge status={row.status} />,
              },
              {
                key: "detail",
                header: "상세",
                render: (row) => (
                  <Link href={`/detail/${row.id}`} className="text-sm font-medium text-fg-link hover:underline">
                    상세보기
                  </Link>
                ),
              },
            ]}
          />
        </section>

        <section className="rounded-md border border-border-default bg-bg-surface p-4">
          <SectionHeader title="공지사항" />
          <ul className="space-y-2">
            {notices.slice(0, 3).map((notice) => (
              <li
                key={notice.id}
                className="flex items-center justify-between gap-2 rounded-sm border border-border-default px-3 py-2"
              >
                <p className="inline-flex items-center gap-2 text-sm font-medium">
                  {notice.important ? <Bell className="h-4 w-4 text-state-danger" /> : null}
                  {notice.title}
                </p>
                <span className="text-sm text-fg-muted">{notice.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </ServiceShell>
  );
}
