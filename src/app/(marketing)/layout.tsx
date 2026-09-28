import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

/**
 * Public website chrome. Everything inside the `(marketing)` route group —
 * every page except the QRION Live Experience — shares this navbar and footer,
 * so the app-style demo can render full-bleed in its own shell.
 */
export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main id="konten-utama" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
