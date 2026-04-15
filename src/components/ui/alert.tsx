import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { cn } from "@/lib/cn";

const alertVariants = cva("rounded-md border px-4 py-3", {
  variants: {
    variant: {
      info: "border-state-info bg-state-info-bg text-state-info",
      success: "border-state-success bg-state-success-bg text-state-success",
      warning: "border-state-warning bg-state-warning-bg text-state-warning",
      danger: "border-state-danger bg-state-danger-bg text-state-danger",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

const iconMap = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: AlertCircle,
} as const;

type AlertVariant = VariantProps<typeof alertVariants>["variant"];

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
}

export function Alert({ className, variant = "info", title, children, ...props }: AlertProps) {
  const Icon = iconMap[variant as keyof typeof iconMap];
  return (
    <div className={cn(alertVariants({ variant }), className)} role="status" {...props}>
      <div className="flex items-start gap-2">
        <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <div>
          {title ? <p className="text-sm font-semibold">{title}</p> : null}
          {children ? <div className="mt-1 text-sm text-fg-default/90">{children}</div> : null}
        </div>
      </div>
    </div>
  );
}

export type { AlertVariant };
