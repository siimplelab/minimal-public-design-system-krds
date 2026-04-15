interface InfoListItem {
  label: string;
  value: React.ReactNode;
}

interface InfoListProps {
  items: InfoListItem[];
}

export function InfoList({ items }: InfoListProps) {
  return (
    <dl className="divide-y divide-border-default rounded-md border border-border-default bg-bg-surface">
      {items.map((item) => (
        <div key={item.label} className="grid gap-1 px-4 py-3 md:grid-cols-[10rem_1fr] md:gap-3">
          <dt className="text-sm font-medium text-fg-muted">{item.label}</dt>
          <dd className="text-sm text-fg-default">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
