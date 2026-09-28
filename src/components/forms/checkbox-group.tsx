"use client";

import type { UseFormRegisterReturn } from "react-hook-form";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

type CheckboxGroupProps = {
  name: string;
  legend: string;
  options: readonly string[];
  registration: UseFormRegisterReturn;
  /** Accepts both scalar and array-shaped field errors from react-hook-form. */
  error?: { message?: string } | undefined;
  hint?: string;
  className?: string;
};

/** Fieldset of checkbox chips used for "produk yang diminati" selections. */
export function CheckboxGroup({
  name,
  legend,
  options,
  registration,
  error,
  hint,
  className,
}: CheckboxGroupProps) {
  const describedBy = error
    ? `${name}-error`
    : hint
      ? `${name}-hint`
      : undefined;

  return (
    <fieldset
      className={cn("min-w-0", className)}
      aria-invalid={Boolean(error)}
      aria-describedby={describedBy}
    >
      <legend className="text-[13px] font-medium text-foreground">
        {legend}
        <span aria-hidden="true" className="ml-0.5 text-destructive">
          *
        </span>
      </legend>

      <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option}
            className={cn(
              "flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-input bg-background px-3.5 py-2.5 text-[14px] text-foreground transition-colors",
              "hover:bg-soft has-[:checked]:border-primary/40 has-[:checked]:bg-primary/5 has-[:checked]:text-brand-dark",
            )}
          >
            <span className="relative flex size-4 shrink-0 items-center justify-center">
              <input
                type="checkbox"
                value={option}
                {...registration}
                className="peer size-4 cursor-pointer appearance-none rounded border border-input bg-background transition-colors checked:border-primary checked:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
              />
              <Check
                aria-hidden="true"
                className="pointer-events-none absolute size-3 text-primary-foreground opacity-0 peer-checked:opacity-100"
              />
            </span>
            {option}
          </label>
        ))}
      </div>

      {hint && !error ? (
        <p id={`${name}-hint`} className="mt-2 text-[13px] text-muted-foreground">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p
          id={`${name}-error`}
          role="alert"
          className="mt-2 text-[13px] font-medium text-destructive"
        >
          {error.message}
        </p>
      ) : null}
    </fieldset>
  );
}
