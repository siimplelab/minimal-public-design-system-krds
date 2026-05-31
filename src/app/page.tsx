import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CircleHelp,
  FilePenLine,
  LayoutGrid,
  Search,
  ShieldCheck,
} from "lucide-react";
import { ServiceShell } from "@/components/templates/service-shell";

const pages = [
  {
    href: "/dashboard",
    title: "대시보드",
    description: "민원 처리 현황, 공지, 자주 찾는 기능을 안정적으로 구성한 시작 화면",
    icon: LayoutGrid,
  },
  {
    href: "/notices",
    title: "공지사항 목록",
    description: "기관 공지 목록과 중요 공지 강조, 검색/필터 패턴",
    icon: Bell,
  },
  {
    href: "/service-apply",
    title: "서비스 신청",
    description: "단계 안내, 섹션형 입력, 첨부파일 필드, 제출 검증 흐름",
    icon: FilePenLine,
  },
  {
    href: "/status",
    title: "처리 상태 조회",
    description: "접수번호 기반 조회와 단계별 진행 상태 시각화",
    icon: ShieldCheck,
  },
  {
    href: "/complaint",
    title: "민원 접수",
    description: "민원 유형 선택, 연락처 입력, 상세 내용 접수",
    icon: CircleHelp,
  },
  {
    href: "/search",
    title: "통합검색",
    description: "검색어 기반 결과 목록과 필터/정렬 제어",
    icon: Search,
  },
] as const;

const principles = [
  { term: "명료성", desc: "불필요한 장식을 제거하고 내용이 스스로 말하게 합니다." },
  { term: "접근성", desc: "모든 사용자가 동등하게 서비스를 이용할 수 있어야 합니다." },
  { term: "일관성", desc: "예측 가능한 패턴으로 학습 부담을 최소화합니다." },
  { term: "신뢰성", desc: "공공 서비스에 걸맞는 신뢰감을 디자인으로 전달합니다." },
] as const;

export default function Home() {
  return (
    <ServiceShell activePath="/">
      {/* Hero — staggered entrance */}
      <section className="pb-2 pt-1">
        <p
          className="animate-fade-up text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-fg-muted"
          style={{ animationDelay: "0ms" }}
        >
          공공 디자인 시스템
        </p>
        <h1
          className="animate-fade-up mt-3 text-[2.25rem] font-semibold leading-[1.15] tracking-[-0.035em] text-fg-default sm:text-[2.75rem]"
          style={{ animationDelay: "60ms" }}
        >
          Minimal Public
          <br />
          Design System
        </h1>
        <p
          className="animate-fade-up mt-4 max-w-lg text-[0.9375rem] leading-[1.65] tracking-[-0.018em] text-fg-muted"
          style={{ animationDelay: "120ms" }}
        >
          Apple의 명료함과 한국 공공서비스의 신뢰성을 결합한 디자인 시스템.
          최소한의 요소로 최대한의 명확성을 구현합니다.
        </p>
      </section>

      {/* Service screens */}
      <section
        className="animate-fade-up mt-8 ds-card p-6 md:p-8"
        style={{ animationDelay: "200ms" }}
      >
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-fg-muted">
          예시 화면
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, index) => (
            <Link
              key={page.href}
              href={page.href}
              className="animate-fade-up group flex flex-col rounded-xl border border-[rgba(0,0,0,0.06)] bg-bg-canvas p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(0,0,0,0.10)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              style={{ animationDelay: `${280 + index * 55}ms` }}
            >
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(0,113,227,0.08)] text-[#0071e3] transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <page.icon className="h-3.5 w-3.5" />
              </span>
              <p className="mt-3.5 text-sm font-semibold tracking-[-0.02em] text-fg-default">
                {page.title}
              </p>
              <p className="mt-1 flex-1 text-xs leading-relaxed tracking-[-0.01em] text-fg-muted">
                {page.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium tracking-[-0.01em] text-[#0066cc]">
                화면 이동
                <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Design principles */}
      <section
        className="animate-fade-up mt-4 ds-card p-6 md:p-8"
        style={{ animationDelay: "500ms" }}
      >
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-fg-muted">
          설계 원칙
        </p>
        <dl className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ term, desc }, index) => (
            <div
              key={term}
              className="animate-fade-up"
              style={{ animationDelay: `${560 + index * 50}ms` }}
            >
              <dt className="text-sm font-semibold tracking-[-0.02em] text-fg-default">{term}</dt>
              <dd className="mt-1.5 text-xs leading-relaxed tracking-[-0.01em] text-fg-muted">{desc}</dd>
            </div>
          ))}
        </dl>
      </section>
    </ServiceShell>
  );
}
