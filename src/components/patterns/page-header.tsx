import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface PageHeaderProps {
  title: string;
  description?: string;
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
    <header className={cn("space-y-3", className)}>
      {breadcrumbs?.length ? (
        <nav aria-label="현재 위치">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-fg-muted">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={`${breadcrumb.label}-${index}`} className="inline-flex items-center gap-1">
                {breadcrumb.href ? (
                  <Link href={breadcrumb.href} className="hover:underline">
                    {breadcrumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-fg-default">
                    {breadcrumb.label}
                  </span>
                )}
                {index < breadcrumbs.length - 1 ? (
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-fg-default">{title}</h1>
          {description ? <p className="mt-2 text-sm text-fg-muted">{description}</p> : null}
        </div>
        {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
      </div>
    </header>
  );
}
