"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FileAttachmentField,
  FormSection,
  PageHeader,
  SectionHeader,
} from "@/components/patterns";
import {
  Alert,
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
} from "@/components/ui";
import { ServiceShell } from "@/components/templates/service-shell";

const complaintSchema = z.object({
  category: z.string().min(1, "민원 유형을 선택해 주세요."),
  name: z.string().min(2, "성명을 입력해 주세요."),
  phone: z
    .string()
    .regex(/^01\d-\d{3,4}-\d{4}$/, "휴대전화 형식(010-0000-0000)으로 입력해 주세요."),
  title: z.string().min(3, "제목을 3자 이상 입력해 주세요."),
  detail: z.string().min(20, "내용을 20자 이상 입력해 주세요."),
  notify: z.boolean(),
});

type ComplaintFormValues = z.infer<typeof complaintSchema>;

const defaults: ComplaintFormValues = {
  category: "",
  name: "",
  phone: "",
  title: "",
  detail: "",
  notify: true,
};

export default function ComplaintPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ComplaintFormValues>({
    resolver: zodResolver(complaintSchema),
    defaultValues: defaults,
    mode: "onBlur",
  });

  return (
    <ServiceShell
      activePath="/complaint"
      title="민원 접수"
      description="공공기관 민원/문의 접수 흐름에 맞춘 접근성 중심 폼 패턴입니다."
    >
      <PageHeader
        title="민원 및 문의 접수"
        description="사실관계를 명확히 작성해 주시면 담당 부서에서 확인 후 회신드립니다."
        breadcrumbs={[{ href: "/", label: "홈" }, { label: "민원 접수" }]}
      />

      <Tabs defaultValue="form" className="mt-5">
        <TabsList className="max-w-md">
          <TabsTrigger value="form">민원 접수</TabsTrigger>
          <TabsTrigger value="faq">자주 묻는 질문</TabsTrigger>
        </TabsList>

        <TabsContent value="form" className="space-y-4">
          {submitted ? (
            <Alert variant="success" title="민원이 접수되었습니다.">
              접수번호는 문자로 발송됩니다. 처리상태 조회 화면에서 진행 단계를 확인해 주세요.
            </Alert>
          ) : null}

          <form
            className="space-y-4"
            onSubmit={form.handleSubmit((values) => {
              console.info("complaint submit", values);
              setSubmitted(true);
            })}
            noValidate
          >
            <FormSection title="기본 정보">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium" htmlFor="complaint-category">
                    민원 유형
                  </label>
                  <Controller
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id="complaint-category">
                          <SelectValue placeholder="유형 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="welfare">복지 서비스 문의</SelectItem>
                          <SelectItem value="facility">시설 이용 불편</SelectItem>
                          <SelectItem value="system">시스템 오류 신고</SelectItem>
                          <SelectItem value="etc">기타</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <p className="mt-1 text-sm text-state-danger">{form.formState.errors.category?.message}</p>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium" htmlFor="complaint-name">
                    성명
                  </label>
                  <Input id="complaint-name" {...form.register("name")} />
                  <p className="mt-1 text-sm text-state-danger">{form.formState.errors.name?.message}</p>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium" htmlFor="complaint-phone">
                    휴대전화
                  </label>
                  <Input id="complaint-phone" placeholder="010-0000-0000" {...form.register("phone")} />
                  <p className="mt-1 text-sm text-state-danger">{form.formState.errors.phone?.message}</p>
                </div>
              </div>
            </FormSection>

            <FormSection title="민원 내용">
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="complaint-title">
                  제목
                </label>
                <Input id="complaint-title" {...form.register("title")} />
                <p className="mt-1 text-sm text-state-danger">{form.formState.errors.title?.message}</p>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="complaint-detail">
                  상세 내용
                </label>
                <Textarea
                  id="complaint-detail"
                  placeholder="발생 일시, 위치, 상황을 가능한 구체적으로 작성해 주세요."
                  {...form.register("detail")}
                />
                <p className="mt-1 text-sm text-state-danger">{form.formState.errors.detail?.message}</p>
              </div>
            </FormSection>

            <FormSection title="첨부 및 안내 설정">
              <FileAttachmentField label="첨부파일" description="사진 또는 문서 첨부 시 처리에 도움이 됩니다." />

              <div className="flex items-center justify-between rounded-sm border border-border-default px-3 py-2">
                <div>
                  <p className="text-sm font-medium">처리 안내 수신</p>
                  <p className="text-sm text-fg-muted">상태 변경 시 문자 알림을 받습니다.</p>
                </div>
                <Controller
                  control={form.control}
                  name="notify"
                  render={({ field }) => (
                    <Switch checked={field.value} onCheckedChange={field.onChange} id="complaint-notify" />
                  )}
                />
              </div>
            </FormSection>

            <div className="flex justify-end gap-2">
              <Button type="button" variant="secondary" onClick={() => form.reset(defaults)}>
                취소
              </Button>
              <Button type="submit">민원 접수</Button>
            </div>
          </form>
        </TabsContent>

        <TabsContent value="faq">
          <section className="rounded-md border border-border-default bg-bg-surface p-4">
            <SectionHeader title="자주 묻는 질문" />
            <ul className="space-y-2">
              <li className="rounded-sm border border-border-default px-3 py-2 text-sm">
                <p className="font-medium">Q. 민원 처리 기간은 얼마나 걸리나요?</p>
                <p className="mt-1 text-fg-muted">A. 일반 민원은 접수일 기준 7일 이내 처리됩니다.</p>
              </li>
              <li className="rounded-sm border border-border-default px-3 py-2 text-sm">
                <p className="font-medium">Q. 접수 취소는 어떻게 하나요?</p>
                <p className="mt-1 text-fg-muted">A. 처리중 이전 단계에서는 취소 요청이 가능합니다.</p>
              </li>
            </ul>
          </section>
        </TabsContent>
      </Tabs>
    </ServiceShell>
  );
}
