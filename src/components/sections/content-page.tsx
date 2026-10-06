import { Info } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

export type ContentBlock = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type ContentPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumb: { label: string; href?: string }[];
  blocks?: ContentBlock[];
  /** Honest status note shown when a page is not final yet. */
  note?: string;
  children?: React.ReactNode;
};

/**
 * Layout shared by the informational pages (Insight, Karier, Pusat Bantuan,
 * Dokumentasi, legal pages) so they keep the same rhythm as the rest of the
 * site without duplicating markup.
 */
export function ContentPage({
  eyebrow,
  title,
  description,
  breadcrumb,
  blocks = [],
  note,
  children,
}: ContentPageProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumb={breadcrumb}
      />

      <Section size="narrow">
        {note ? (
          <Reveal>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-soft p-5">
              <Info aria-hidden="true" className="mt-0.5 size-[18px] shrink-0 text-brand" />
              <p className="text-[14px] leading-relaxed text-muted-foreground">{note}</p>
            </div>
          </Reveal>
        ) : null}

        {blocks.length > 0 ? (
          <div className="mt-10 grid gap-8">
            {blocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.05}>
                <article className="rounded-xl border border-border bg-background p-6 sm:p-7">
                  <h2 className="font-display text-[19px] font-semibold text-foreground">
                    {block.title}
                  </h2>

                  {block.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-3 text-[15px] leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {block.bullets?.length ? (
                    <ul className="mt-4 grid gap-2.5">
                      {block.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                          />
                          <span className="text-[15px] leading-relaxed text-muted-foreground">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        ) : null}

        {children}
      </Section>
    </>
  );
}
