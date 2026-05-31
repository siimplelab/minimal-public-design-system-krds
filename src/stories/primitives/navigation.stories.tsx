import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Pagination, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

const meta: Meta = {
  title: "02 Primitives/Navigation",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsStory: Story = {
  name: "Tabs",
  render: () => (
    <div className="w-[420px] space-y-4">
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger value="a">신청 정보</TabsTrigger>
          <TabsTrigger value="b">첨부 서류</TabsTrigger>
          <TabsTrigger value="c">처리 이력</TabsTrigger>
        </TabsList>
        <TabsContent value="a">
          <div className="rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
            <p className="text-sm tracking-[-0.015em] text-fg-default">신청인 및 신청 항목 정보</p>
          </div>
        </TabsContent>
        <TabsContent value="b">
          <div className="rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
            <p className="text-sm tracking-[-0.015em] text-fg-default">제출한 첨부파일 목록</p>
          </div>
        </TabsContent>
        <TabsContent value="c">
          <div className="rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
            <p className="text-sm tracking-[-0.015em] text-fg-default">단계별 처리 로그</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
};

export const PaginationStory: Story = {
  name: "Pagination",
  render: () => {
    const [page, setPage] = useState(2);
    return (
      <div className="space-y-2">
        <p className="text-center text-xs text-fg-muted">현재 페이지: {page}</p>
        <Pagination page={page} totalPages={10} onPageChange={setPage} />
      </div>
    );
  },
};
