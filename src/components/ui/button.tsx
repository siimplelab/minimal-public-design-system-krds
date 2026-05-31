"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[0.625rem] font-medium tracking-[-0.01em] transition-all duration-150 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3]",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-[#0071e3] text-white hover:bg-[#0077ed] active:bg-[#006cd6]",
        secondary:
          "border border-[rgba(0,0,0,0.22)] bg-bg-surface text-fg-default hover:bg-bg-subtle active:bg-[#e8e8ec]",
        ghost: "border-transparent bg-transparent text-fg-default hover:bg-[rgba(0,0,0,0.05)] active:bg-[rgba(0,0,0,0.08)]",
        danger:
          "border-transparent bg-[#c9302c] text-white hover:bg-[#b52b27] active:bg-[#9e2522]",
      },
      size: {
        sm: "h-8 px-3.5 text-xs",
        md: "h-10 px-5 text-sm",
        lg: "h-11 px-6 text-sm",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
