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
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="primary">기본</Button>
      <Button variant="secondary">보조</Button>
      <Button variant="ghost">텍스트</Button>
      <Button variant="danger">삭제</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
