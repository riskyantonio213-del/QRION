"use client";

import type { ReactNode } from "react";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type FieldControlProps = {
  id: string;
  "aria-invalid": boolean;
  "aria-describedby": string | undefined;
  "aria-required"?: boolean;
};

type FormFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  /** Render prop receiving the ARIA wiring so every control stays accessible. */
  children: (props: FieldControlProps) => ReactNode;
};

/**
 * Keeps label/control/help-text/error relationships consistent on every field,
 * so screen readers announce errors exactly once.
 */
export function FormField({
  id,
  label,
  hint,
  error,
  required,
  className,
  children,
}: FormFieldProps) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={id} className="text-[13px]">
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-0.5 text-destructive">
            *
          </span>
        ) : null}
      </Label>

      {children({
        id,
        "aria-invalid": Boolean(error),
        "aria-describedby": describedBy,
        "aria-required": required,
      })}

      {hint && !error ? (
        <p id={`${id}-hint`} className="text-[13px] leading-relaxed text-muted-foreground">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-[13px] font-medium leading-relaxed text-destructive"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Native-looking select styled to match the Input primitive. */
export function SelectControl({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-11 w-full appearance-none rounded-lg border border-input bg-background bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2373737C%22 stroke-width=%222%22 stroke-linecap=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:16px] bg-[right_0.875rem_center] bg-no-repeat px-3.5 pr-10 text-[15px] text-foreground transition-colors",
        "focus-visible:border-brand focus-visible:ring-[3px] focus-visible:ring-[var(--qrion-focus-ring)] focus-visible:outline-none",
        "aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
