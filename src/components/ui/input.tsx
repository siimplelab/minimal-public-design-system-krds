"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", invalid, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "h-11 w-full rounded-[0.625rem] border bg-bg-surface px-3.5 text-sm tracking-[-0.015em] text-fg-default placeholder:text-fg-muted transition-[border-color,box-shadow] duration-150 disabled:cursor-not-allowed disabled:bg-bg-subtle disabled:text-fg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3]",
          invalid
            ? "border-[#c9302c]"
            : "border-[rgba(0,0,0,0.22)]",
          className
        )}
        ref={ref}
        aria-invalid={invalid || undefined}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
