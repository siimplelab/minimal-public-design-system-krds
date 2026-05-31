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
    <section className={cn("rounded-xl bg-bg-surface shadow-[0_2px_8px_rgba(0,0,0,0.07)]", className)}>
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(0,0,0,0.06)] px-5 py-4">
        <div className="flex items-center gap-3">
          <h2 className="text-base font-semibold tracking-[-0.025em] text-fg-default">{title}</h2>
          {status ? <div>{status}</div> : null}
        </div>
        {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
      </header>
      <div className="p-4 sm:p-6">{children}</div>
    </section>
  );
}
