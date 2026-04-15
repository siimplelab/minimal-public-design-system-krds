import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  NoticeBanner,
  PageHeader,
  SectionHeader,
  StatusBadge,
  StepIndicator,
} from "@/components/patterns";

const meta: Meta = {
  title: "03 Patterns/Headers & Status",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div className="ds-container space-y-4 py-6">
      <PageHeader
        title="민원 서비스"
        description="접수, 조회, 결과 확인까지 하나의 흐름으로 제공합니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "민원 서비스" }]}
      />

      <section className="rounded-md border border-border-default bg-bg-surface p-4">
        <SectionHeader title="상태 예시" />
        <div className="flex flex-wrap gap-2">
          <StatusBadge status="접수완료" />
          <StatusBadge status="처리중" />
          <StatusBadge status="처리완료" />
          <StatusBadge status="보완요청" />
        </div>
      </section>

      <NoticeBanner
        title="시스템 점검 안내"
        description="4월 20일 23:00~24:00 점검 시간에는 일부 조회 기능이 제한됩니다."
      />

      <section className="rounded-md border border-border-default bg-bg-surface p-4">
        <SectionHeader title="진행 단계" />
        <StepIndicator steps={["접수", "검토", "처리", "완료"]} currentStep={3} />
      </section>
    </div>
  ),
};
