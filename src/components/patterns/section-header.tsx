import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  icon,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-5 flex flex-wrap items-start justify-between gap-3", className)}>
      <div>
        <h2 className="inline-flex items-center gap-2 text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-fg-muted">
          {icon ? (
            <span aria-hidden="true">{icon}</span>
          ) : null}
          {title}
        </h2>
        {description ? (
          <p className="mt-1 text-xs tracking-[-0.01em] text-fg-muted">{description}</p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
