import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  CheckboxField,
  Input,
  RadioGroupField,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SwitchField,
  Textarea,
} from "@/components/ui";

const meta: Meta = {
  title: "02 Primitives/Form Controls",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Controls: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    const [toggle, setToggle] = useState(true);
    const [radio, setRadio] = useState("a");

    return (
      <div className="grid max-w-2xl gap-4 rounded-md border border-border-default bg-bg-surface p-4">
        <div>
          <label className="mb-1 block text-sm font-medium">기본 입력</label>
          <Input placeholder="예: 홍길동" />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">상세 입력</label>
          <Textarea placeholder="민원 내용을 입력하세요" />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">선택</label>
          <Select defaultValue="notice">
            <SelectTrigger>
              <SelectValue placeholder="분류 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="notice">공지사항</SelectItem>
              <SelectItem value="service">서비스 안내</SelectItem>
              <SelectItem value="faq">FAQ</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <CheckboxField
          id="agree"
          label="개인정보 처리에 동의합니다"
          checked={checked}
          onCheckedChange={setChecked}
        />

        <RadioGroupField
          name="contact-method"
          value={radio}
          onValueChange={setRadio}
          options={[
            { label: "문자", value: "a" },
            { label: "이메일", value: "b" },
            { label: "유선", value: "c" },
          ]}
        />

        <SwitchField
          id="notice-toggle"
          label="처리 알림 수신"
          checked={toggle}
          onCheckedChange={setToggle}
        />
      </div>
    );
  },
};
