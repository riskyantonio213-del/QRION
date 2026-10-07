import { ContentProvider } from "@/components/admin/content-provider";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { readContentOverrides } from "@/lib/admin/store";

/**
 * Public website chrome. Everything inside the `(marketing)` route group —
 * every page except the QRION Live Experience — shares this navbar and footer,
 * so the app-style demo can render full-bleed in its own shell.
 *
 * ContentProvider menggabungkan data default (src/data/*) dengan override
 * admin (.qrion-admin/content.json) untuk seluruh section homepage.
 */
export default async function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const overrides = await readContentOverrides();

  return (
    <ContentProvider overrides={overrides}>
      <Navbar />
      <main id="konten-utama" className="flex-1">
        {children}
      </main>
      <Footer />
    </ContentProvider>
  );
}
