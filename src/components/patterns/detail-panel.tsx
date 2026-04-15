import { cn } from "@/lib/cn";

interface DetailPanelProps {
  title: string;
  status?: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function DetailPanel({ title, status, actions, children, className }: DetailPanelProps) {
  return (
    <section className={cn("rounded-md border border-border-default bg-bg-surface", className)}>
      <header className="flex flex-wrap items-center justify-between gap-2 border-b border-border-default px-4 py-3">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-semibold tracking-tight">{title}</h2>
          {status ? <div>{status}</div> : null}
        </div>
        {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
      </header>
      <div className="p-4">{children}</div>
    </section>
  );
}
