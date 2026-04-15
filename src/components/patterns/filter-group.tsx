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
    <section className="rounded-md border border-border-default bg-bg-surface p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-semibold">{title}</h3>
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
                "rounded-full border px-3 py-1.5 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
                selected
                  ? "border-state-info bg-state-info text-fg-inverse"
                  : "border-border-default bg-bg-surface text-fg-default hover:bg-bg-subtle"
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
