"use client";

import { useMemo, useState } from "react";
import { PageHeader, InfoList, StatusBadge, StepIndicator, DetailPanel } from "@/components/patterns";
import { Button, Input } from "@/components/ui";
import { ServiceShell } from "@/components/templates/service-shell";
import { applications } from "@/data/mock";

const steps = ["접수", "검토", "처리", "완료"];

export default function StatusPage() {
  const [keyword, setKeyword] = useState("AP-260401-1082");
  const [query, setQuery] = useState("AP-260401-1082");

  const application = useMemo(
    () => applications.find((item) => item.id.toLowerCase() === query.toLowerCase()),
    [query]
  );

  const currentStep =
    application?.status === "접수완료"
      ? 1
      : application?.status === "처리중"
        ? 3
        : application?.status === "처리완료"
          ? 4
          : 1;

  return (
    <ServiceShell
      activePath="/status"
      title="처리상태 조회"
      description="접수번호를 입력하면 현재 단계와 처리 결과를 확인할 수 있습니다."
    >
      <PageHeader
        title="신청 처리상태 조회"
        description="접수번호는 신청 완료 후 문자 또는 이메일로 안내됩니다."
        breadcrumbs={[{ href: "/", label: "홈" }, { label: "처리 조회" }]}
      />

      <form
        className="mt-5 rounded-md border border-border-default bg-bg-surface p-4"
        onSubmit={(event) => {
          event.preventDefault();
          setQuery(keyword.trim());
        }}
      >
        <label htmlFor="application-id" className="mb-1 block text-sm font-medium">
          접수번호
        </label>
        <div className="flex flex-col gap-2 md:flex-row">
          <Input
            id="application-id"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="예: AP-260401-1082"
            className="md:max-w-sm"
          />
          <Button type="submit">조회하기</Button>
        </div>
      </form>

      <div className="mt-5">
        {application ? (
          <DetailPanel title="신청 상세" status={<StatusBadge status={application.status} />}>
            <StepIndicator steps={steps} currentStep={currentStep} />
            <div className="mt-4">
              <InfoList
                items={[
                  { label: "접수번호", value: application.id },
                  { label: "서비스", value: application.service },
                  { label: "신청인", value: application.applicant },
                  { label: "접수일", value: application.submittedAt },
                  {
                    label: "안내",
                    value:
                      application.status === "처리완료"
                        ? "처리가 완료되었습니다. 상세 결과는 상세보기에서 확인할 수 있습니다."
                        : "담당 부서에서 검토 중입니다. 상태 변경 시 안내드립니다.",
                  },
                ]}
              />
            </div>
          </DetailPanel>
        ) : (
          <div className="rounded-md border border-border-default bg-bg-surface px-4 py-6 text-sm text-fg-muted">
            입력한 접수번호에 해당하는 신청 정보가 없습니다.
          </div>
        )}
      </div>
    </ServiceShell>
  );
}
