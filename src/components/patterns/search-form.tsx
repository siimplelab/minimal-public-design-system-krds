"use client";

import { Search } from "lucide-react";
import { Button, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";

interface SearchFormProps {
  defaultKeyword?: string;
  defaultCategory?: string;
  onSearch?: (values: { keyword: string; category: string }) => void;
}

export function SearchForm({ defaultKeyword = "", defaultCategory = "all", onSearch }: SearchFormProps) {
  return (
    <form
      className="rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)] sm:p-6"
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        onSearch?.({
          keyword: String(form.get("keyword") ?? ""),
          category: String(form.get("category") ?? "all"),
        });
      }}
    >
      <div className="grid gap-4 md:grid-cols-[13rem_1fr_auto]">
        <div>
          <label htmlFor="search-category" className="mb-2 block text-sm font-medium tracking-[-0.015em] text-fg-default">
            분류
          </label>
          <Select name="category" defaultValue={defaultCategory}>
            <SelectTrigger id="search-category">
              <SelectValue placeholder="전체" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="notice">공지사항</SelectItem>
              <SelectItem value="service">서비스 안내</SelectItem>
              <SelectItem value="faq">자주 묻는 질문</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="search-keyword" className="mb-2 block text-sm font-medium tracking-[-0.015em] text-fg-default">
            통합검색
          </label>
          <Input
            id="search-keyword"
            name="keyword"
            defaultValue={defaultKeyword}
            placeholder="검색어를 입력하세요"
          />
        </div>

        <div className="md:pt-7">
          <Button type="submit" className="w-full md:w-auto">
            <Search className="h-4 w-4" />
            검색
          </Button>
        </div>
      </div>
    </form>
  );
}
