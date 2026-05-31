import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ConfirmDialog, FileAttachmentField, FormSection } from "@/components/patterns";
import { Button, Input, Textarea } from "@/components/ui";

const meta: Meta = {
  title: "03 Patterns/Form Patterns",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ApplicantForm: Story = {
  name: "신청인 정보 폼",
  render: () => (
    <div className="ds-container py-6">
      <div className="space-y-4">
        <FormSection title="신청인 정보" description="공공서비스 신청에서 반복되는 필드 구조입니다.">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium tracking-[-0.01em] text-fg-default">
                성명
              </label>
              <Input placeholder="홍길동" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium tracking-[-0.01em] text-fg-default">
                연락처
              </label>
              <Input placeholder="010-0000-0000" />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium tracking-[-0.01em] text-fg-default">
              요청 내용
            </label>
            <Textarea placeholder="민원 내용을 입력해 주세요." />
          </div>
        </FormSection>

        <FormSection title="첨부 서류">
          <FileAttachmentField />
        </FormSection>

        <div className="flex items-center justify-end gap-2">
          <ConfirmDialog
            triggerLabel="제출 전 확인"
            title="신청서를 제출하시겠습니까?"
            description="제출 후에는 일부 항목만 수정 가능합니다."
            confirmLabel="제출하기"
            cancelLabel="취소"
          />
          <Button variant="secondary">임시저장</Button>
          <Button>신청하기</Button>
        </div>
      </div>
    </div>
  ),
};
