import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  breadcrumbs?: Array<{ href?: string; label: string }>;
  actions?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("", className)}>
      {breadcrumbs?.length ? (
        <nav aria-label="현재 위치" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1 text-xs tracking-[-0.01em] text-fg-muted">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={`${breadcrumb.label}-${index}`} className="inline-flex items-center gap-1">
                {breadcrumb.href ? (
                  <Link href={breadcrumb.href} className="transition-colors hover:text-fg-default">
                    {breadcrumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-fg-default">
                    {breadcrumb.label}
                  </span>
                )}
                {index < breadcrumbs.length - 1 ? (
                  <ChevronRight className="h-3 w-3 opacity-30" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h1 className="text-[1.875rem] font-semibold leading-[1.2] tracking-[-0.03em] text-fg-default">
            {title}
          </h1>
          {description ? (
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed tracking-[-0.015em] text-fg-muted">
              {description}
            </p>
          ) : null}
        </div>
        {actions ? (
          <div className="flex shrink-0 items-center gap-2 pt-1">{actions}</div>
        ) : null}
      </div>
    </header>
  );
}
