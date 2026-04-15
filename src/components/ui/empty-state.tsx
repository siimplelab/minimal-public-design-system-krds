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
        "rounded-md border border-dashed border-border-strong bg-bg-surface px-5 py-8 text-center",
        className
      )}
      aria-live="polite"
    >
      <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-bg-subtle text-fg-muted">
        <Inbox className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-3 text-base font-semibold">{title}</h3>
      {description ? <p className="mt-2 text-sm text-fg-muted">{description}</p> : null}
      {action ? <div className="mt-4 flex justify-center">{action}</div> : null}
    </section>
  );
}
