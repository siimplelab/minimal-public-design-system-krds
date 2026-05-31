import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Alert,
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  EmptyState,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";

const meta: Meta = {
  title: "02 Primitives/Feedback & Overlay",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Badges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>기본</Badge>
      <Badge variant="info">정보</Badge>
      <Badge variant="success">완료</Badge>
      <Badge variant="warning">진행중</Badge>
      <Badge variant="danger">주의</Badge>
    </div>
  ),
};

export const Alerts: Story = {
  render: () => (
    <div className="w-96 space-y-3">
      <Alert title="정보" variant="info">접수 처리에는 영업일 기준 최대 7일이 소요됩니다.</Alert>
      <Alert title="완료" variant="success">처리가 성공적으로 완료되었습니다.</Alert>
      <Alert title="주의" variant="warning">입력 정보를 다시 확인해 주세요.</Alert>
      <Alert title="오류" variant="danger">필수 항목을 입력해 주세요.</Alert>
    </div>
  ),
};

export const Dialogs: Story = {
  render: () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
      <div className="flex flex-wrap gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Dialog 열기</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>신청 확인</DialogTitle>
              <DialogDescription>입력한 정보로 신청을 진행하시겠습니까?</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="secondary">취소</Button>
              <Button>확인</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
          <DrawerTrigger asChild>
            <Button variant="secondary">Drawer 열기</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>필터 설정</DrawerTitle>
              <DrawerDescription>목록 필터와 정렬 옵션을 설정합니다.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button variant="secondary" onClick={() => setOpenDrawer(false)}>닫기</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">도움말</Button>
            </TooltipTrigger>
            <TooltipContent>입력 예시를 확인해 주세요.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  },
};

export const EmptyStates: Story = {
  render: () => (
    <div className="w-96 rounded-xl bg-bg-surface p-6 shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
      <EmptyState title="조회 결과 없음" description="검색 조건을 변경하거나 다른 검색어를 입력해 주세요." />
    </div>
  ),
};
