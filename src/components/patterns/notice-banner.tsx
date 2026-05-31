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
    <section className="flex overflow-hidden rounded-xl bg-[#e8f1ff]">
      <div className="w-1 shrink-0 bg-[#0071e3]" aria-hidden="true" />
      <div className="flex flex-1 flex-wrap items-start justify-between gap-3 px-5 py-4">
        <div className="flex items-start gap-3">
          <Megaphone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0071e3]" aria-hidden="true" />
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.06em] text-[#0052cc]">
              {title}
            </h3>
            <p className="mt-1 text-sm tracking-[-0.015em] text-fg-default">{description}</p>
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
