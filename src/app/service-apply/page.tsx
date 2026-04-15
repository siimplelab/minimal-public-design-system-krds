"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FileAttachmentField,
  FormSection,
  PageHeader,
  StepIndicator,
} from "@/components/patterns";
import {
  Alert,
  Button,
  Checkbox,
  Input,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/components/ui";
import { ServiceShell } from "@/components/templates/service-shell";

const applySchema = z.object({
  serviceType: z.string().min(1, "신청 서비스를 선택해 주세요."),
  applicantName: z.string().min(2, "성명을 2자 이상 입력해 주세요."),
  residentNumber: z
    .string()
    .regex(/^\d{6}-\d{7}$/, "주민등록번호 형식(000000-0000000)으로 입력해 주세요."),
  phone: z
    .string()
    .regex(/^01\d-\d{3,4}-\d{4}$/, "휴대전화 형식(010-0000-0000)으로 입력해 주세요."),
  contactChannel: z.enum(["sms", "email", "call"]),
  address: z.string().min(5, "주소를 입력해 주세요."),
  requestDetail: z.string().min(10, "요청 내용을 10자 이상 입력해 주세요."),
  agreePolicy: z.boolean().refine((value) => value, {
    message: "개인정보 수집 및 이용 동의가 필요합니다.",
  }),
});

type ApplyFormValues = z.infer<typeof applySchema>;

const defaultValues: ApplyFormValues = {
  serviceType: "",
  applicantName: "",
  residentNumber: "",
  phone: "",
  contactChannel: "sms",
  address: "",
  requestDetail: "",
  agreePolicy: false,
};

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-1 text-sm text-state-danger">{message}</p>;
}

export default function ServiceApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = (values: ApplyFormValues) => {
    console.info("service apply submit", values);
    setSubmitted(true);
  };

  return (
    <ServiceShell
      activePath="/service-apply"
      title="서비스 신청"
      description="실제 행정 서비스 신청 흐름을 기준으로 구성한 단계형 폼 예시입니다."
    >
      <PageHeader
        title="서비스 신청"
        description="필수 항목을 정확히 입력해 주세요. 입력 정보는 신청 처리 목적으로만 사용됩니다."
        breadcrumbs={[{ href: "/", label: "홈" }, { label: "서비스 신청" }]}
      />

      <div className="mt-5 space-y-4">
        <StepIndicator steps={["약관 동의", "정보 입력", "검토 및 제출"]} currentStep={2} />

        {submitted ? (
          <Alert variant="success" title="신청서가 접수되었습니다.">
            접수번호는 문자로 안내됩니다. 처리상태 조회 화면에서 진행 단계를 확인할 수 있습니다.
          </Alert>
        ) : null}

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <FormSection title="신청 서비스 정보" description="신청할 서비스와 연락 수단을 선택합니다.">
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="serviceType">
                서비스 유형
              </label>
              <Controller
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="serviceType">
                      <SelectValue placeholder="서비스를 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="housing">청년 주거지원</SelectItem>
                      <SelectItem value="emergency">긴급생활지원</SelectItem>
                      <SelectItem value="care">아이돌봄 서비스</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <FieldError message={form.formState.errors.serviceType?.message} />
            </div>

            <div>
              <span className="mb-1 block text-sm font-medium">연락 방식</span>
              <Controller
                control={form.control}
                name="contactChannel"
                render={({ field }) => (
                  <RadioGroup value={field.value} onValueChange={field.onChange}>
                    <label
                      htmlFor="channel-sms"
                      className="flex items-center gap-2 rounded-sm border border-border-default px-3 py-2"
                    >
                      <RadioGroupItem id="channel-sms" value="sms" />
                      <span className="text-sm">문자 안내</span>
                    </label>
                    <label
                      htmlFor="channel-email"
                      className="flex items-center gap-2 rounded-sm border border-border-default px-3 py-2"
                    >
                      <RadioGroupItem id="channel-email" value="email" />
                      <span className="text-sm">이메일 안내</span>
                    </label>
                    <label
                      htmlFor="channel-call"
                      className="flex items-center gap-2 rounded-sm border border-border-default px-3 py-2"
                    >
                      <RadioGroupItem id="channel-call" value="call" />
                      <span className="text-sm">유선 연락</span>
                    </label>
                  </RadioGroup>
                )}
              />
            </div>
          </FormSection>

          <FormSection title="신청인 정보" description="신청인 본인 확인 및 연락을 위한 정보입니다.">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="applicantName" className="mb-1 block text-sm font-medium">
                  성명
                </label>
                <Input id="applicantName" {...form.register("applicantName")} />
                <FieldError message={form.formState.errors.applicantName?.message} />
              </div>
              <div>
                <label htmlFor="residentNumber" className="mb-1 block text-sm font-medium">
                  주민등록번호
                </label>
                <Input id="residentNumber" placeholder="000000-0000000" {...form.register("residentNumber")} />
                <FieldError message={form.formState.errors.residentNumber?.message} />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                  휴대전화
                </label>
                <Input id="phone" placeholder="010-0000-0000" {...form.register("phone")} />
                <FieldError message={form.formState.errors.phone?.message} />
              </div>
              <div>
                <label htmlFor="address" className="mb-1 block text-sm font-medium">
                  주소
                </label>
                <Input id="address" {...form.register("address")} />
                <FieldError message={form.formState.errors.address?.message} />
              </div>
            </div>

            <div>
              <label htmlFor="requestDetail" className="mb-1 block text-sm font-medium">
                요청 내용
              </label>
              <Textarea
                id="requestDetail"
                placeholder="신청 사유와 필요한 지원 내용을 구체적으로 작성해 주세요."
                {...form.register("requestDetail")}
              />
              <FieldError message={form.formState.errors.requestDetail?.message} />
            </div>
          </FormSection>

          <FormSection title="첨부파일 및 동의" description="증빙자료를 첨부하고 동의 여부를 확인합니다.">
            <FileAttachmentField />

            <div className="flex items-start gap-2">
              <Controller
                control={form.control}
                name="agreePolicy"
                render={({ field }) => (
                  <Checkbox
                    id="agreePolicy"
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                  />
                )}
              />
              <div>
                <label htmlFor="agreePolicy" className="text-sm font-medium">
                  개인정보 수집 및 이용에 동의합니다.
                </label>
                <p className="mt-1 text-sm text-fg-muted">신청 처리 및 결과 안내를 위해 필요한 범위 내에서만 이용됩니다.</p>
                <FieldError message={form.formState.errors.agreePolicy?.message} />
              </div>
            </div>
          </FormSection>

          <div className="flex flex-wrap justify-end gap-2">
            <Button type="button" variant="secondary" onClick={() => form.reset(defaultValues)}>
              초기화
            </Button>
            <Button type="submit">신청하기</Button>
          </div>
        </form>
      </div>
    </ServiceShell>
  );
}
