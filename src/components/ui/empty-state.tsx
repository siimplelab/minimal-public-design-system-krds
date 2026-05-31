import { Inbox } from "lucide-react";
import { cn } from "@/lib/cn";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <section
      className={cn(
        "rounded-xl bg-bg-subtle px-5 py-8 text-center",
        className
      )}
      aria-live="polite"
    >
      <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-bg-subtle text-fg-muted">
        <Inbox className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-3 text-sm font-semibold tracking-[-0.02em] text-fg-default">{title}</h3>
      {description ? <p className="mt-1.5 text-sm tracking-[-0.015em] text-fg-muted">{description}</p> : null}
      {action ? <div className="mt-4 flex justify-center">{action}</div> : null}
    </section>
  );
}
