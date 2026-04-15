import { Badge } from "@/components/ui";

type StatusValue = "접수완료" | "처리중" | "처리완료" | "보완요청";

interface StatusBadgeProps {
  status: StatusValue;
}

const statusVariantMap: Record<StatusValue, "info" | "warning" | "success" | "danger"> = {
  접수완료: "info",
  처리중: "warning",
  처리완료: "success",
  보완요청: "danger",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return <Badge variant={statusVariantMap[status]}>{status}</Badge>;
}
