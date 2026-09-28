import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { EcosystemDiagram } from "@/components/sections/ecosystem-diagram";

export function EcosystemSection() {
  return (
    <Section
      id="ekosistem"
      size="wide"
      aria-labelledby="ekosistem-heading"
    >
      <SectionHeader
        eyebrow="Ekosistem QRION"
        title={<span id="ekosistem-heading">Satu Ekosistem. Berbagai Kebutuhan Sekolah.</span>}
        description="Gunakan produk sesuai kebutuhan sekolah dan hubungkan semuanya melalui ekosistem QRION."
      />
      <EcosystemDiagram />
    </Section>
  );
}
