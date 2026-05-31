"use client";

import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterGroupProps {
  title: string;
  options: FilterOption[];
  value: string[];
  onChange: (next: string[]) => void;
}

export function FilterGroup({ title, options, value, onChange }: FilterGroupProps) {
  return (
    <section className="rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)] sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-semibold tracking-[-0.02em] text-fg-default">{title}</h3>
        <Button variant="ghost" size="sm" type="button" onClick={() => onChange([])}>
          초기화
        </Button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label={title}>
        {options.map((option) => {
          const selected = value.includes(option.value);
          return (
            <button
              key={option.value}
              type="button"
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium tracking-[-0.01em] transition-all duration-200 active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3]",
                selected
                  ? "border-[#0071e3] bg-[#0071e3] text-white"
                  : "border-[rgba(0,0,0,0.22)] bg-bg-surface text-fg-default hover:bg-bg-subtle"
              )}
              aria-pressed={selected}
              onClick={() => {
                const next = selected
                  ? value.filter((current) => current !== option.value)
                  : [...value, option.value];
                onChange(next);
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
