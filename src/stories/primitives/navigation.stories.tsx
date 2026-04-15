import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Pagination, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

const meta: Meta = {
  title: "02 Primitives/Navigation",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsAndPagination: Story = {
  render: () => {
    const [page, setPage] = useState(2);

    return (
      <div className="space-y-4">
        <Tabs defaultValue="a" className="max-w-lg">
          <TabsList>
            <TabsTrigger value="a">신청 정보</TabsTrigger>
            <TabsTrigger value="b">첨부 서류</TabsTrigger>
            <TabsTrigger value="c">처리 이력</TabsTrigger>
          </TabsList>
          <TabsContent value="a" className="rounded-md border border-border-default bg-bg-surface p-3 text-sm">
            신청인 및 신청 항목 정보
          </TabsContent>
          <TabsContent value="b" className="rounded-md border border-border-default bg-bg-surface p-3 text-sm">
            제출한 첨부파일 목록
          </TabsContent>
          <TabsContent value="c" className="rounded-md border border-border-default bg-bg-surface p-3 text-sm">
            단계별 처리 로그
          </TabsContent>
        </Tabs>

        <Pagination page={page} totalPages={10} onPageChange={setPage} />
      </div>
    );
  },
};
