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

export const Overview: Story = {
  render: () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>기본</Badge>
          <Badge variant="info">정보</Badge>
          <Badge variant="success">완료</Badge>
          <Badge variant="warning">진행중</Badge>
          <Badge variant="danger">주의</Badge>
        </div>

        <Alert title="안내" variant="info">
          접수 처리에는 영업일 기준 최대 7일이 소요됩니다.
        </Alert>

        <div className="flex flex-wrap gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Dialog 열기</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>확인</DialogTitle>
                <DialogDescription>해당 작업을 진행하시겠습니까?</DialogDescription>
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
                <DrawerTitle>보조 패널</DrawerTitle>
                <DrawerDescription>목록 필터와 옵션을 설정합니다.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button variant="secondary" onClick={() => setOpenDrawer(false)}>
                  닫기
                </Button>
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

        <EmptyState title="조회 결과 없음" description="검색 조건을 변경해 주세요." />
      </div>
    );
  },
};
