import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SectionEditor } from "@/components/admin/section-editor";
import { defaults } from "@/lib/admin/defaults";
import { deepMerge, getPath } from "@/lib/admin/merge";
import { readContentOverrides } from "@/lib/admin/store";
import { getAdminSection, pickValues } from "@/lib/admin/schema";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const section = getAdminSection(slug);
  return {
    title: section
      ? `Edit ${section.title} — Panel Admin QRION`
      : "Editor Konten — Panel Admin QRION",
  };
}

export default async function SectionEditorPage({ params }: Params) {
  const { slug } = await params;
  const section = getAdminSection(slug);
  if (!section) notFound();

  const merged = deepMerge(defaults, await readContentOverrides());
  const root = getPath(merged, section.path);
  const defaultsRoot = getPath(defaults, section.path);
  const initial = root === undefined ? {} : pickValues(root, section.fields);
  const defaultsModel =
    defaultsRoot === undefined ? {} : pickValues(defaultsRoot, section.fields);

  return (
    <SectionEditor
      key={section.slug}
      slug={section.slug}
      initial={initial}
      defaultsModel={defaultsModel}
    />
  );
}
