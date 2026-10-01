import type { ProductDesign } from "./types";
import { ontuition } from "./ontuition";
import { oncard } from "./oncard";
import { ontime } from "./ontime";
import { jurnal } from "./jurnal";
import { spmb } from "./spmb";

export type { ProductDesign } from "./types";

/** Satu design per produk — daftarkan file baru di sini. */
const designs: Record<string, ProductDesign> = {
  ontuition,
  oncard,
  ontime,
  jurnal,
  spmb,
};

const defaultDesign: ProductDesign = {};

/** Ambil design per produk; slug tanpa design akan memakai default situs. */
export function getProductDesign(slug: string): ProductDesign {
  return designs[slug] ?? defaultDesign;
}
