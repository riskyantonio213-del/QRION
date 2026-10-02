import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/layout/section-header";
import { MitraScroll } from "@/components/sections/mitra-scroll";
import { trust } from "@/data/home";

export function TrustSection() {
  return (
    <section
      id="kepercayaan"
      className="bg-background border-t border-border/70 py-12 sm:py-14 lg:py-16"
    >
      <Container>
        <SectionHeader
          eyebrow="Kepercayaan"
          title={trust.title}
          description={trust.description}
          titleClassName="text-[22px] sm:text-[26px] lg:text-[28px]"
        />
      </Container>
      <MitraScroll className="mt-10" />
    </section>
  );
}
