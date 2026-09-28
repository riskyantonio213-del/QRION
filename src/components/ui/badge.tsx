import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "border-brand-mint-medium bg-brand-mint text-brand-dark",
        neutral: "border-border bg-qrion-neutral-bg text-qrion-neutral",
        outline: "border-border bg-transparent text-foreground",
        success: "border-qrion-success/20 bg-qrion-success-bg text-brand-dark",
        warning: "border-qrion-warning/25 bg-qrion-warning-bg text-qrion-warning",
        info: "border-brand-mint-medium bg-brand-soft text-brand-indigo",
        inverted: "border-white/20 bg-white/10 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
