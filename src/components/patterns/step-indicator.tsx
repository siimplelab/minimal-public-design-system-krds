import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <ol className="flex flex-wrap gap-2" aria-label="진행 단계">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isDone = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <li
            key={step}
            className={cn(
              "flex items-center gap-2.5 rounded-xl border px-4 py-3 text-sm tracking-[-0.015em] transition-all duration-300",
              isCurrent
                ? "border-[#0071e3] bg-bg-surface text-fg-default shadow-[0_0_0_1px_#0071e3]"
                : isDone
                  ? "border-[rgba(0,0,0,0.08)] bg-bg-surface text-fg-muted"
                  : "border-[rgba(0,0,0,0.08)] bg-bg-canvas text-fg-muted"
            )}
            aria-current={isCurrent ? "step" : undefined}
          >
            <span
              className={cn(
                "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                isDone
                  ? "bg-[#1a7f4b] text-white"
                  : isCurrent
                    ? "bg-[#0071e3] text-white"
                    : "bg-[rgba(0,0,0,0.08)] text-fg-muted"
              )}
              aria-hidden="true"
            >
              {isDone ? <Check className="h-3 w-3" /> : stepNumber}
            </span>
            <span className={cn("font-medium", isCurrent && "text-fg-default")}>{step}</span>
          </li>
        );
      })}
    </ol>
  );
}
