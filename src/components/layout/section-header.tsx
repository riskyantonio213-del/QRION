import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  /** Heading level — keeps a correct document outline on every page. */
  as?: "h2" | "h3";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center items-center" : "items-start",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">
          {eyebrow}
        </span>
      ) : null}
      <Heading
        className={cn(
          "text-balance text-[26px] font-bold leading-[1.18] text-foreground sm:text-[32px] lg:text-[38px]",
          titleClassName,
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
