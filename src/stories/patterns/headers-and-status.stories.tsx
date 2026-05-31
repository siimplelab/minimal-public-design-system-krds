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
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PageHeaderStory: Story = {
  name: "PageHeader",
  render: () => (
    <div className="ds-container py-6">
      <PageHeader
        title="민원 서비스"
        description="접수, 조회, 결과 확인까지 하나의 흐름으로 제공합니다."
        breadcrumbs={[{ label: "홈", href: "/" }, { label: "민원 서비스" }]}
      />
    </div>
  ),
};

export const SectionHeaderStory: Story = {
  name: "SectionHeader",
  render: () => (
    <div className="w-[480px] rounded-xl bg-bg-surface p-5 shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
      <SectionHeader
        title="최근 신청 현황"
        description="최근 접수된 민원 신청 목록입니다."
      />
      <div className="h-24 rounded-lg bg-bg-canvas" />
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <StatusBadge status="접수완료" />
      <StatusBadge status="처리중" />
      <StatusBadge status="처리완료" />
      <StatusBadge status="보완요청" />
    </div>
  ),
};

export const NoticeBannerStory: Story = {
  name: "NoticeBanner",
  render: () => (
    <div className="w-[520px]">
      <NoticeBanner
        title="시스템 점검 안내"
        description="4월 20일 23:00~24:00 점검 시간에는 일부 조회 기능이 제한됩니다."
      />
    </div>
  ),
};

export const StepIndicatorStory: Story = {
  name: "StepIndicator",
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-xs text-fg-muted">Step 1 of 4</p>
        <StepIndicator steps={["약관 동의", "정보 입력", "검토 및 제출", "완료"]} currentStep={1} />
      </div>
      <div>
        <p className="mb-2 text-xs text-fg-muted">Step 2 of 4</p>
        <StepIndicator steps={["약관 동의", "정보 입력", "검토 및 제출", "완료"]} currentStep={2} />
      </div>
      <div>
        <p className="mb-2 text-xs text-fg-muted">Step 3 of 4</p>
        <StepIndicator steps={["약관 동의", "정보 입력", "검토 및 제출", "완료"]} currentStep={3} />
      </div>
    </div>
  ),
};
