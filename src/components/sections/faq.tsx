import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import type { ProductFaq } from "@/data/products";

type FaqProps = {
  items: ProductFaq[];
  eyebrow?: string;
  title?: string;
  description?: string;
  background?: "default" | "soft";
};

/** FAQ accordion — answers come from product data so no copy is duplicated. */
export function Faq({
  items,
  eyebrow = "FAQ",
  title = "Pertanyaan yang Sering Diajukan",
  description = "Belum menemukan jawabannya? Tim QRION siap membantu melalui halaman kontak.",
  background = "default",
}: FaqProps) {
  return (
    <Section id="faq" background={background} aria-labelledby="faq-heading">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeader
          eyebrow={eyebrow}
          title={<span id="faq-heading">{title}</span>}
          description={description}
          align="left"
        />

        <Accordion type="single" collapsible className="w-full border-t border-border">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
