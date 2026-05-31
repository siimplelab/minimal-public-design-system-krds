import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { cn } from "@/lib/cn";

const alertVariants = cva("rounded-xl px-5 py-4", {
  variants: {
    variant: {
      info: "bg-[#e8f1ff] text-[#0071e3]",
      success: "bg-[#e8f8f0] text-[#1a7f4b]",
      warning: "bg-[#fff5e6] text-[#b55d00]",
      danger: "bg-[#fff0f0] text-[#c9302c]",
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
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <div>
          {title ? <p className="text-sm font-semibold tracking-[-0.02em]">{title}</p> : null}
          {children ? <div className="mt-1.5 text-sm tracking-[-0.015em] text-fg-default/80">{children}</div> : null}
        </div>
      </div>
    </div>
  );
}

export type { AlertVariant };
