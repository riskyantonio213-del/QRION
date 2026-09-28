import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  size?: "default" | "wide" | "narrow";
  background?: "default" | "soft" | "none";
  padding?: "default" | "compact" | "none";
  "aria-labelledby"?: string;
};

const backgrounds = {
  default: "bg-background",
  soft: "bg-soft",
  none: "",
} as const;

const paddings = {
  default: "py-16 sm:py-20 lg:py-28",
  compact: "py-12 sm:py-14 lg:py-16",
  none: "",
} as const;

/** Consistent section spacing so no page drifts out of rhythm. */
export function Section({
  children,
  id,
  className,
  containerClassName,
  size = "default",
  background = "default",
  padding = "default",
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(backgrounds[background], paddings[padding], className)}
      {...rest}
    >
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
