import { cn } from "@/lib/cn";

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormSection({ title, description, children, className }: FormSectionProps) {
  return (
    <section className={cn("rounded-md border border-border-default bg-bg-surface p-4", className)}>
      <header>
        <h2 className="text-base font-semibold tracking-tight">{title}</h2>
        {description ? <p className="mt-1 text-sm text-fg-muted">{description}</p> : null}
      </header>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}
