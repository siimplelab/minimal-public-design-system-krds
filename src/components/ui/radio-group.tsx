"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/cn";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root ref={ref} className={cn("grid gap-2", className)} {...props} />
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "aspect-square h-4 w-4 rounded-full border border-border-strong bg-bg-surface ring-offset-bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <span className="h-2.5 w-2.5 rounded-full bg-state-info" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

interface RadioOption {
  label: string;
  value: string;
  description?: string;
}

interface RadioGroupFieldProps {
  name: string;
  value: string;
  onValueChange: (value: string) => void;
  options: RadioOption[];
}

function RadioGroupField({ name, value, onValueChange, options }: RadioGroupFieldProps) {
  return (
    <RadioGroup name={name} value={value} onValueChange={onValueChange}>
      {options.map((option) => (
        <label
          key={option.value}
          htmlFor={`${name}-${option.value}`}
          className="flex items-start gap-2 rounded-sm border border-border-default px-3 py-2"
        >
          <RadioGroupItem id={`${name}-${option.value}`} value={option.value} />
          <span>
            <span className="block text-sm font-medium text-fg-default">{option.label}</span>
            {option.description ? (
              <span className="block text-sm text-fg-muted">{option.description}</span>
            ) : null}
          </span>
        </label>
      ))}
    </RadioGroup>
  );
}

export { RadioGroup, RadioGroupField, RadioGroupItem };
