import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-[-0.01em]",
  {
    variants: {
      variant: {
        neutral: "bg-[rgba(0,0,0,0.06)] text-fg-default",
        info: "bg-[#e8f1ff] text-[#0052cc]",
        success: "bg-[#e8f8f0] text-[#1a6b42]",
        warning: "bg-[#fff5e6] text-[#a85400]",
        danger: "bg-[#fff0f0] text-[#c9302c]",
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
