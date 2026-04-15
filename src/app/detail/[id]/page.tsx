import Link from "next/link";
import { notFound } from "next/navigation";
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
      description="민원 및 서비스 신청 건의 상세 항목을 확인할 수 있습니다."
    >
      {application ? (
        <>
          <PageHeader
            title="신청 상세보기"
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
                { label: "접수번호", value: application.id },
                { label: "신청인", value: application.applicant },
                { label: "접수일", value: application.submittedAt },
                { label: "담당부서", value: "복지정책과 생활지원팀" },
                { label: "처리예정일", value: "2026-04-18" },
                {
                  label: "현재 안내",
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
                { label: "공지번호", value: notice.id },
                { label: "분류", value: notice.category },
                { label: "등록일", value: notice.date },
                { label: "중요도", value: notice.important ? "중요 공지" : "일반 공지" },
                {
                  label: "안내 내용",
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
                { label: "구분", value: searchResult.type },
                { label: "최종수정", value: searchResult.updatedAt },
                { label: "요약", value: searchResult.snippet },
                {
                  label: "상세 내용",
                  value:
                    "해당 항목의 정책 기준, 신청 자격, 유의사항은 담당 부서 공지 또는 서비스 안내 문서를 확인해 주세요.",
                },
              ]}
            />
          </DetailPanel>
        </>
      ) : null}
    </ServiceShell>
  );
}
