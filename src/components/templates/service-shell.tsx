import Link from "next/link";
import { serviceNavigation } from "@/data/navigation";
import { cn } from "@/lib/cn";

type ServiceShellProps = {
  title: string;
  description: string;
  activePath: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
};

export function ServiceShell({
  title,
  description,
  activePath,
  actions,
  children,
}: ServiceShellProps) {
  return (
    <div className="min-h-screen">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-bg-surface focus:px-3 focus:py-2"
      >
        본문 바로가기
      </a>

      <header className="border-b border-border-strong bg-bg-surface">
        <div className="ds-container flex min-h-14 items-center justify-between gap-4 py-3">
          <div>
            <p className="text-xs font-medium text-fg-muted">Minimal Public Design System</p>
            <h1 className="text-base font-semibold tracking-tight">{title}</h1>
          </div>
          {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
        </div>
        <div className="border-t border-border-default bg-bg-subtle">
          <nav className="ds-container flex flex-wrap items-center gap-1 py-2" aria-label="주요 서비스">
            {serviceNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-sm px-3 py-1.5 text-sm font-medium",
                  item.href === activePath
                    ? "bg-bg-surface text-fg-default ring-1 ring-border-strong"
                    : "text-fg-muted hover:bg-bg-surface hover:text-fg-default"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main id="content" className="ds-container py-6 md:py-8">
        <p className="mb-6 max-w-3xl text-sm text-fg-muted">{description}</p>
        {children}
      </main>
    </div>
  );
}
