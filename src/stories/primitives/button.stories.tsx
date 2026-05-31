import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui";

const meta: Meta<typeof Button> = {
  title: "02 Primitives/Button",
  component: Button,
  args: {
    children: "신청하기",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = { args: { variant: "secondary", children: "취소" } };

export const Ghost: Story = { args: { variant: "ghost", children: "더보기" } };

export const Danger: Story = { args: { variant: "danger", children: "삭제" } };

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="primary">신청하기</Button>
      <Button variant="secondary">취소</Button>
      <Button variant="ghost">더보기</Button>
      <Button variant="danger">삭제</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="sm">소형 버튼</Button>
      <Button size="md">기본 버튼</Button>
      <Button size="lg">대형 버튼</Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="primary" disabled>비활성</Button>
      <Button variant="secondary" disabled>비활성</Button>
      <Button variant="ghost" disabled>비활성</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-72 space-y-2">
      <Button fullWidth>전체 너비 버튼</Button>
      <Button fullWidth variant="secondary">전체 너비 보조</Button>
    </div>
  ),
};
