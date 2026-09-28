import { ImageResponse } from "next/og";

export const alt = "QRION — Ekosistem Digital untuk Pendidikan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default social share card. Product pages inherit this image; add
 * `opengraph-image.tsx` inside a route segment to override it per page.
 *
 * Uses the QRION brand surfaces: white base with soft mint geometry, indigo
 * typography and a green accent block — never a dark, generic SaaS card.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#FFFFFF",
          backgroundImage:
            "radial-gradient(900px 420px at 92% 8%, rgba(53,187,130,0.16), transparent), radial-gradient(700px 380px at 4% 96%, rgba(232,246,241,0.9), transparent)",
          color: "#39375F",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              backgroundImage: "linear-gradient(135deg, #302E59, #35BB82)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            Q
          </div>
          <div
            style={{
              fontSize: 30,
              letterSpacing: 8,
              fontWeight: 700,
              color: "#39375F",
            }}
          >
            QRION
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#39375F",
            }}
          >
            Ekosistem Digital untuk Pendidikan
          </div>
          <div style={{ fontSize: 28, color: "#4B4B54", maxWidth: 900 }}>
            Pembayaran, presensi, kartu pintar, jurnal pembelajaran, dan penerimaan
            murid baru dalam satu ekosistem.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            color: "#73737C",
          }}
        >
          <div
            style={{
              width: 44,
              height: 6,
              borderRadius: 999,
              backgroundColor: "#35BB82",
            }}
          />
          Sekolah · Madrasah · Pesantren
        </div>
      </div>
    ),
    size,
  );
}
