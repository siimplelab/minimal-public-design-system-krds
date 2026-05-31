import Link from "next/link";
import { notFound } from "next/navigation";
import { Building2, CalendarDays, FileClock, Hash, Info, Search, Tag, UserRound } from "lucide-react";
import { applications, notices, searchResults } from "@/data/mock";
import { DetailPanel, InfoList, PageHeader, StatusBadge } from "@/components/patterns";
import { Button } from "@/components/ui";
import { ServiceShell } from "@/components/templates/service-shell";

type DetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;
  const application = applications.find((item) => item.id === id);
  const notice = notices.find((item) => item.id === id);
  const searchResult = searchResults.find((item) => item.id === id);

  if (!application && !notice && !searchResult) {
    notFound();
  }

  return (
    <ServiceShell
      activePath="/status"
      title="신청 상세 정보"
      contentClassName="py-6 md:py-8"
    >
      <div className="mx-auto w-full max-w-5xl space-y-6">
        {application ? (
          <>
          <PageHeader
            title="신청 상세보기"
            icon={<FileClock className="h-4 w-4" />}
            description="접수 내역과 처리 단계별 정보를 제공합니다."
            breadcrumbs={[
              { href: "/", label: "홈" },
              { href: "/status", label: "처리 조회" },
              { label: application.id },
            ]}
            actions={
              <Button variant="secondary" asChild>
                <Link href="/status">목록으로</Link>
              </Button>
            }
          />

          <DetailPanel title={application.service} status={<StatusBadge status={application.status} />}>
            <InfoList
              items={[
                { label: "접수번호", value: application.id, icon: <Hash className="h-3.5 w-3.5" /> },
                { label: "신청인", value: application.applicant, icon: <UserRound className="h-3.5 w-3.5" /> },
                { label: "접수일", value: application.submittedAt, icon: <CalendarDays className="h-3.5 w-3.5" /> },
                { label: "담당부서", value: "복지정책과 생활지원팀", icon: <Building2 className="h-3.5 w-3.5" /> },
                { label: "처리예정일", value: "2026-04-18", icon: <CalendarDays className="h-3.5 w-3.5" /> },
                {
                  label: "현재 안내",
                  icon: <Info className="h-3.5 w-3.5" />,
                  value:
                    application.status === "처리완료"
                      ? "승인 완료되었습니다. 필요 시 결과확인서를 발급해 주세요."
                      : "제출 서류 검토 중입니다. 보완이 필요한 경우 별도 안내됩니다.",
                },
              ]}
            />
          </DetailPanel>
          </>
        ) : null}

        {notice ? (
          <>
          <PageHeader
            title="공지 상세보기"
            icon={<Tag className="h-4 w-4" />}
            description="기관에서 제공하는 공지 상세 내용을 확인합니다."
            breadcrumbs={[
              { href: "/", label: "홈" },
              { href: "/notices", label: "공지사항" },
              { label: notice.id },
            ]}
            actions={
              <Button variant="secondary" asChild>
                <Link href="/notices">목록으로</Link>
              </Button>
            }
          />
          <DetailPanel title={notice.title}>
            <InfoList
              items={[
                { label: "공지번호", value: notice.id, icon: <Hash className="h-3.5 w-3.5" /> },
                { label: "분류", value: notice.category, icon: <Tag className="h-3.5 w-3.5" /> },
                { label: "등록일", value: notice.date, icon: <CalendarDays className="h-3.5 w-3.5" /> },
                { label: "중요도", value: notice.important ? "중요 공지" : "일반 공지", icon: <Info className="h-3.5 w-3.5" /> },
                {
                  label: "안내 내용",
                  icon: <Info className="h-3.5 w-3.5" />,
                  value:
                    "본 공지는 서비스 이용 안정성과 시민 안내 품질을 높이기 위한 업데이트 정보를 담고 있습니다.",
                },
              ]}
            />
          </DetailPanel>
          </>
        ) : null}

        {searchResult ? (
          <>
          <PageHeader
            title="검색 결과 상세"
            icon={<Search className="h-4 w-4" />}
            description="검색된 정보의 상세 내용을 제공합니다."
            breadcrumbs={[
              { href: "/", label: "홈" },
              { href: "/search", label: "통합검색" },
              { label: searchResult.id },
            ]}
            actions={
              <Button variant="secondary" asChild>
                <Link href="/search">목록으로</Link>
              </Button>
            }
          />
          <DetailPanel title={searchResult.title}>
            <InfoList
              items={[
                { label: "구분", value: searchResult.type, icon: <Tag className="h-3.5 w-3.5" /> },
                { label: "최종수정", value: searchResult.updatedAt, icon: <CalendarDays className="h-3.5 w-3.5" /> },
                { label: "요약", value: searchResult.snippet, icon: <Info className="h-3.5 w-3.5" /> },
                {
                  label: "상세 내용",
                  icon: <Info className="h-3.5 w-3.5" />,
                  value:
                    "해당 항목의 정책 기준, 신청 자격, 유의사항은 담당 부서 공지 또는 서비스 안내 문서를 확인해 주세요.",
                },
              ]}
            />
          </DetailPanel>
          </>
        ) : null}
      </div>
    </ServiceShell>
  );
}
