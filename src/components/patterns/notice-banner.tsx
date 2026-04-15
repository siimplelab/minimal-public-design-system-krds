import { Megaphone } from "lucide-react";
import { Button } from "@/components/ui";

interface NoticeBannerProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function NoticeBanner({
  title,
  description,
  actionLabel = "상세보기",
  onAction,
}: NoticeBannerProps) {
  return (
    <section className="rounded-md border border-state-info bg-state-info-bg px-4 py-3">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-2">
          <Megaphone className="mt-0.5 h-4 w-4 text-state-info" aria-hidden="true" />
          <div>
            <h3 className="text-sm font-semibold text-state-info">{title}</h3>
            <p className="mt-1 text-sm text-fg-default">{description}</p>
          </div>
        </div>
        {onAction ? (
          <Button variant="secondary" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        ) : null}
      </div>
    </section>
  );
}
