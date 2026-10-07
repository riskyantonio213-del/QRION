/**
 * Menetralkan semua link keluar pada HTML artikel sehingga pembaca tetap
 * berada di situs ini:
 * - href "#anchor" dipertahankan (TOC dalam halaman).
 * - Absolute URL dengan fragment "#..." diubah jadi anchor lokal.
 * - Absolute URL lainnya dibuang — teks/gambar tetap tampil, tidak bisa diklik.
 */
export function neutralizeArticleLinks(html: string): string {
  return html.replace(
    /<a\b([^>]*)>([\s\S]*?)<\/a>/gi,
    (_full, attrs: string, inner: string) => {
      const hrefMatch = attrs.match(/href="([^"]*)"/i);
      const href = hrefMatch?.[1].trim() ?? "";

      if (href.startsWith("#")) {
        // Anchor internal: buang target/rel agar klik men-scroll di tab yang
        // sama (target="_blank" akan membuka tab baru, scroll jadi tak terasa).
        const cleaned = attrs
          .replace(/\s+target="[^"]*"/gi, "")
          .replace(/\s+rel="[^"]*"/gi, "");
        return `<a${cleaned}>${inner}</a>`;
      }

      const hashAt = href.indexOf("#");
      if (hashAt > 0) {
        return `<a href="${href.slice(hashAt)}">${inner}</a>`;
      }

      return inner;
    },
  );
}
