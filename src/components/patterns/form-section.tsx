import { cn } from "@/lib/cn";

interface FormSectionProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function FormSection({ title, description, icon, children, className }: FormSectionProps) {
  return (
    <section className={cn("rounded-xl bg-bg-surface p-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)] sm:p-6", className)}>
      <header>
        <h2 className="inline-flex items-center gap-2.5 text-base font-semibold tracking-[-0.025em] text-fg-default">
          {icon ? (
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-bg-subtle text-fg-muted" aria-hidden="true">
              {icon}
            </span>
          ) : null}
          {title}
        </h2>
        {description ? <p className="mt-1.5 text-sm tracking-[-0.015em] text-fg-muted">{description}</p> : null}
      </header>
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  );
}
