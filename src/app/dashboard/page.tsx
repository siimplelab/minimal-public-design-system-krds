import Link from "next/link";
import {
  Bell,
  FileClock,
  FolderSearch,
  Layers,
  Megaphone,
  PlusCircle,
  SquareCheckBig,
} from "lucide-react";
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

const statIcons = {
  "신청 대기": FileClock,
  처리중: Layers,
  처리완료: SquareCheckBig,
} as const;

export default function DashboardPage() {
  return (
    <ServiceShell activePath="/dashboard">
      <PageHeader
        className="animate-fade-up"
        title="시민 통합 서비스"
        description="신청, 조회, 민원 접수까지 한 곳에서 처리할 수 있습니다."
        breadcrumbs={[{ href: "/", label: "홈" }, { label: "대시보드" }]}
        actions={
          <Button asChild size="sm">
            <Link href="/service-apply">
              <PlusCircle className="h-3.5 w-3.5" />
              <span>신청하기</span>
            </Link>
          </Button>
        }
      />

      <div className="mt-6 space-y-4">
        {/* Notice */}
        <div className="animate-slide-down" style={{ animationDelay: "80ms" }}>
          <NoticeBanner
            title="필수 안내"
            description="4월 20일(월) 23:00~24:00 시스템 점검으로 일부 서비스가 일시 중단됩니다."
          />
        </div>

        {/* Stat cards — staggered entrance */}
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {dashboardStats.map((stat, index) => {
            const Icon = statIcons[stat.label];
            return (
              <article
                key={stat.label}
                className="animate-fade-up rounded-xl bg-bg-surface p-5 shadow-[0_2px_8px_rgba(0,0,0,0.07)] transition-shadow duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)]"
                style={{ animationDelay: `${140 + index * 70}ms` }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-fg-muted">
                    {stat.label}
                  </p>
                  <span
                    className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-bg-subtle transition-colors duration-200"
                    aria-hidden="true"
                  >
                    <Icon className="h-3.5 w-3.5 text-fg-muted" />
                  </span>
                </div>
                <p className="mt-3 text-[2.5rem] font-semibold leading-none tracking-[-0.05em] text-fg-default">
                  {stat.value}
                </p>
                <p className="mt-2.5 text-xs tracking-[-0.01em] text-fg-muted">{stat.description}</p>
              </article>
            );
          })}
        </section>

        {/* Quick services */}
        <section
          className="animate-fade-up rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)] sm:p-6"
          style={{ animationDelay: "360ms" }}
        >
          <SectionHeader title="자주 사용하는 서비스" icon={<FolderSearch className="h-3.5 w-3.5" />} />
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {quickServices.map((service) => (
              <li key={service}>
                <Link
                  href={service.includes("신청") ? "/service-apply" : "/search"}
                  className="flex items-center justify-between rounded-lg bg-bg-canvas px-4 py-3 text-sm tracking-[-0.015em] transition-all duration-200 hover:-translate-y-px hover:bg-bg-subtle hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                >
                  <span className="truncate">{service}</span>
                  <FolderSearch className="ml-2 h-3.5 w-3.5 shrink-0 text-fg-muted transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Recent applications */}
        <section
          className="animate-fade-up rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)] sm:p-6"
          style={{ animationDelay: "430ms" }}
        >
          <SectionHeader
            title="최근 신청 현황"
            icon={<FileClock className="h-3.5 w-3.5" />}
            action={
              <Button variant="secondary" size="sm" asChild>
                <Link href="/status">
                  <FileClock className="h-3.5 w-3.5" />
                  <span>상태 조회</span>
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
              { key: "status", header: "상태", render: (row) => <StatusBadge status={row.status} /> },
              {
                key: "detail",
                header: "상세",
                render: (row) => (
                  <Link
                    href={`/detail/${row.id}`}
                    className="text-xs font-medium tracking-[-0.01em] text-[#0066cc] transition-opacity duration-150 hover:opacity-70 hover:underline"
                  >
                    상세보기
                  </Link>
                ),
              },
            ]}
          />
        </section>

        {/* Notices */}
        <section
          className="animate-fade-up rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)] sm:p-6"
          style={{ animationDelay: "500ms" }}
        >
          <SectionHeader title="공지사항" icon={<Megaphone className="h-3.5 w-3.5" />} />
          <ul className="space-y-1.5">
            {notices.slice(0, 3).map((notice, index) => (
              <li
                key={notice.id}
                className="animate-fade-up flex items-center gap-3 rounded-lg bg-bg-canvas px-4 py-3 transition-colors duration-150 hover:bg-bg-subtle"
                style={{ animationDelay: `${560 + index * 40}ms` }}
              >
                {notice.important ? (
                  <Bell className="h-3.5 w-3.5 shrink-0 text-[#c9302c]" aria-hidden="true" />
                ) : null}
                <p className="min-w-0 flex-1 truncate text-sm font-medium tracking-[-0.015em] text-fg-default">
                  {notice.title}
                </p>
                <span className="shrink-0 text-xs tracking-[-0.01em] text-fg-muted">
                  {notice.date}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </ServiceShell>
  );
}
