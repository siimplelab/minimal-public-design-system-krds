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
              "flex items-center gap-2 rounded-sm border px-3 py-2 text-sm",
              isCurrent
                ? "border-state-info bg-state-info-bg text-state-info"
                : "border-border-default bg-bg-surface text-fg-muted"
            )}
            aria-current={isCurrent ? "step" : undefined}
          >
            <span
              className={cn(
                "inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold",
                isDone ? "bg-state-success text-fg-inverse" : "bg-bg-subtle text-fg-default"
              )}
              aria-hidden="true"
            >
              {isDone ? <Check className="h-3.5 w-3.5" /> : stepNumber}
            </span>
            <span>{step}</span>
          </li>
        );
      })}
    </ol>
  );
}
