import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { RoleCard } from "@/components/sections/cards";
import { roles } from "@/data/home";

export function RolesSection() {
  return (
    <Section id="peran" background="soft" aria-labelledby="peran-heading">
      <SectionHeader
        eyebrow="Pengguna"
        title={<span id="peran-heading">Dibangun untuk Seluruh Ekosistem Sekolah</span>}
        description="QRION dirancang untuk mendukung setiap pihak yang terlibat dalam operasional pendidikan."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {roles.map((role, index) => (
          <Reveal key={role.title} delay={(index % 5) * 0.06} className="h-full">
            <RoleCard
              title={role.title}
              description={role.description}
              icon={role.icon}
              className="p-5"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
