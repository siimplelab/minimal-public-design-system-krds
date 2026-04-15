import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold tracking-wide",
  {
    variants: {
      variant: {
        neutral: "border-border-default bg-bg-subtle text-fg-default",
        info: "border-transparent bg-state-info-bg text-state-info",
        success: "border-transparent bg-state-success-bg text-state-success",
        warning: "border-transparent bg-state-warning-bg text-state-warning",
        danger: "border-transparent bg-state-danger-bg text-state-danger",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
