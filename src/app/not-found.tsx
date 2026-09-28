import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { NotFoundContent } from "@/components/sections/not-found-content";

/**
 * Global fallback for URLs that match no route. It lives outside the
 * `(marketing)` group, so it renders the public chrome itself.
 */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="konten-utama" className="flex-1">
        <NotFoundContent />
      </main>
      <Footer />
    </>
  );
}
