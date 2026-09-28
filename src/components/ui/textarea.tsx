import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-28 w-full rounded-lg border border-input bg-background px-3.5 py-3 text-[15px] text-foreground transition-colors",
      "placeholder:text-muted-foreground/70",
      "focus-visible:border-brand focus-visible:ring-[3px] focus-visible:ring-[var(--qrion-focus-ring)] focus-visible:outline-none",
      "disabled:cursor-not-allowed disabled:opacity-60",
      "aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
