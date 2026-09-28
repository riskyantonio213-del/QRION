import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type CardAccent = { iconWrap: string; icon: string };

type InfoCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: CardAccent;
  variant?: "default" | "soft";
  className?: string;
  children?: ReactNode;
};

/**
 * Base card used by every card-style section so spacing, radius and typography
 * stay identical across the site. `FeatureCard`, `BenefitCard`, `ProblemCard`
 * and `RoleCard` are thin presets over this shell.
 */
export function InfoCard({
  title,
  description,
  icon: Icon,
  accent,
  variant = "default",
  className,
  children,
}: InfoCardProps) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col rounded-xl border border-border bg-background p-6 shadow-card transition-all duration-300",
        "hover:border-brand-mint-medium hover:bg-soft",
        variant === "soft" && "bg-soft/60",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-lg border",
          accent ? accent.iconWrap : "border-border bg-soft",
        )}
      >
        <Icon
          aria-hidden="true"
          className={cn("size-[18px]", accent ? accent.icon : "text-brand")}
        />
      </span>
      <h3 className="mt-5 font-display text-[17px] font-semibold leading-snug text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
        {description}
      </p>
      {children}
    </div>
  );
}

/** Product capability card. */
export function FeatureCard(props: InfoCardProps) {
  return <InfoCard {...props} />;
}

/** Outcome-oriented card used in "benefits" sections. */
export function BenefitCard(props: InfoCardProps) {
  return <InfoCard {...props} variant="soft" />;
}

/** Problem statement card (neutral icon treatment). */
export function ProblemCard(props: InfoCardProps) {
  return (
    <InfoCard
      {...props}
      accent={{ iconWrap: "border-border bg-qrion-neutral-bg", icon: "text-qrion-neutral" }}
    />
  );
}

/** Card describing a user role within a school. */
export function RoleCard(props: InfoCardProps) {
  return <InfoCard {...props} />;
}
