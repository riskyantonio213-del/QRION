"use client";

import { useContent } from "@/components/admin/content-provider";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/layout/section-header";
import { MitraScroll } from "@/components/sections/mitra-scroll";

export function TrustSection() {
  const { trust } = useContent().home;

  return (
    <section
      id="kepercayaan"
      className="bg-background  py-12 sm:py-14 lg:py-16"
    >
      <Container>
        <SectionHeader
          eyebrow={trust.eyebrow}
          title={trust.title}
          description={trust.description}
          titleClassName="text-[22px] sm:text-[26px] lg:text-[28px]"
        />
      </Container>
      <MitraScroll className="mt-10" />
    </section>
  );
}
