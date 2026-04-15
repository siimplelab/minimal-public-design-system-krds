import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { designPrinciples, publicServiceQualities } from "@/foundations/principles";
import { ServiceShell } from "@/components/templates/service-shell";

const pages = [
  {
    href: "/dashboard",
    title: "공공서비스 홈/대시보드",
    description: "민원 처리 현황, 공지, 자주 찾는 기능을 안정적으로 구성한 시작 화면",
  },
  {
    href: "/notices",
    title: "공지사항 목록",
    description: "기관 공지 목록과 중요 공지 강조, 검색/필터 패턴",
  },
  {
    href: "/service-apply",
    title: "서비스 신청 폼",
    description: "단계 안내, 섹션형 입력, 첨부파일 필드, 제출 검증 흐름",
  },
  {
    href: "/status",
    title: "처리 상태 조회",
    description: "접수번호 기반 조회와 단계별 진행 상태 시각화",
  },
  {
    href: "/complaint",
    title: "민원/문의 접수",
    description: "민원 유형 선택, 연락처 입력, 상세 내용 접수",
  },
  {
    href: "/search",
    title: "통합검색 결과",
    description: "검색어 기반 결과 목록과 필터/정렬 제어",
  },
] as const;

export default function Home() {
  return (
    <ServiceShell
      activePath="/"
      title="Minimal Public Design System"
      description="KRDS의 공공서비스 중심 구조를 참고해 재해석한, 미니멀하고 접근성 중심의 프런트엔드 디자인 시스템 포트폴리오 프로젝트입니다."
      actions={
        <p className="rounded-sm border border-border-strong bg-bg-surface px-3 py-2 text-sm font-medium text-fg-default">
          `npm run storybook`
        </p>
      }
    >
      <section className="ds-card p-5 md:p-6">
        <h2 className="text-lg font-semibold tracking-tight">설계 원칙</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {designPrinciples.map((principle) => (
            <li key={principle.title} className="rounded-md border border-border-default bg-bg-canvas p-4">
              <h3 className="text-sm font-semibold">{principle.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{principle.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-5 ds-card p-5 md:p-6">
        <h2 className="text-lg font-semibold tracking-tight">공공서비스 품질 기준</h2>
        <ul className="mt-3 grid gap-2 text-sm text-fg-muted md:grid-cols-2">
          {publicServiceQualities.map((quality) => (
            <li key={quality} className="rounded-sm border border-border-default bg-bg-subtle px-3 py-2">
              {quality}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-5 ds-card p-5 md:p-6">
        <h2 className="text-lg font-semibold tracking-tight">예시 서비스 화면</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-md border border-border-default bg-bg-surface p-4 hover:border-border-strong hover:bg-bg-subtle"
            >
              <p className="text-sm font-semibold text-fg-default">{page.title}</p>
              <p className="mt-2 text-sm text-fg-muted">{page.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-fg-link">
                화면 이동 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </ServiceShell>
  );
}
