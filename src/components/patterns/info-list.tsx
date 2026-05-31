interface InfoListItem {
  label: string;
  value: React.ReactNode;
  icon?: React.ReactNode;
}

interface InfoListProps {
  items: InfoListItem[];
}

export function InfoList({ items }: InfoListProps) {
  return (
    <dl className="divide-y divide-[rgba(0,0,0,0.06)] overflow-hidden rounded-xl bg-bg-surface shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
      {items.map((item) => (
        <div key={item.label} className="grid gap-2 px-5 py-4 md:grid-cols-[10rem_1fr] md:gap-4">
          <dt className="inline-flex items-center gap-2 text-xs font-medium tracking-[-0.01em] text-fg-muted">
            {item.icon ? (
              <span className="text-fg-muted" aria-hidden="true">
                {item.icon}
              </span>
            ) : null}
            {item.label}
          </dt>
          <dd className="text-sm tracking-[-0.015em] text-fg-default">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
