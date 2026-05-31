"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "min-h-32 w-full rounded-[0.625rem] border bg-bg-surface px-3.5 py-3 text-sm tracking-[-0.015em] text-fg-default placeholder:text-fg-muted transition-[border-color,box-shadow] duration-150 disabled:cursor-not-allowed disabled:bg-bg-subtle disabled:text-fg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3]",
          invalid ? "border-[#c9302c]" : "border-[rgba(0,0,0,0.22)]",
          className
        )}
        aria-invalid={invalid || undefined}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
