/**
 * Util merge konten admin — dipakai ContentProvider (client),
 * halaman editor (server), dan saveSectionAction. Murni, tanpa fs.
 */

export type PlainObject = Record<string, unknown>;

export function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Gabung `override` ke atas `base` secara dalam:
 * - objek biasa → merge per kunci; kunci `base` yang tak disentuh tetap
 *   (icon/fungsi Lucide di default selamat karena tak pernah ada di JSON)
 * - array → panjang mengikuti `override` (hapus item = potong), tiap item
 *   di-merge dengan `base[i]` pada indeks yang sama
 * - bentuk berbeda (mis. objek → string) → `override` menang
 */
export function deepMerge<T>(base: T, override: unknown): T {
  if (override === undefined) return base;

  if (Array.isArray(base) && Array.isArray(override)) {
    return override.map((item, index) => {
      const baseItem = (base as unknown[])[index];
      if (isPlainObject(baseItem) && isPlainObject(item)) {
        return deepMerge(baseItem, item);
      }
      if (Array.isArray(baseItem) && Array.isArray(item)) {
        return deepMerge(baseItem, item);
      }
      return item;
    }) as T;
  }

  if (isPlainObject(base) && isPlainObject(override)) {
    const out: PlainObject = { ...base };
    for (const key of Object.keys(override)) {
      out[key] =
        key in base ? deepMerge(base[key], override[key]) : override[key];
    }
    return out as T;
  }

  return override as T;
}

/** Ambil nilai pada path titik, mis. "home.hero.headline". */
export function getPath(obj: unknown, path: string): unknown {
  let current: unknown = obj;
  for (const segment of path.split(".")) {
    if (current === null || typeof current !== "object") return undefined;
    current = (current as PlainObject)[segment];
  }
  return current;
}

/** Set nilai pada path titik secara immutable (array tetap array). */
export function setPath(
  obj: PlainObject,
  path: string,
  value: unknown,
): PlainObject {
  return setPathSegments(obj, path.split("."), value) as PlainObject;
}

function setPathSegments(
  target: unknown,
  segments: string[],
  value: unknown,
): unknown {
  const [head, ...rest] = segments;
  const inArray = Array.isArray(target);
  const isIndex = /^\d+$/.test(head);
  const container: unknown = inArray
    ? (target as unknown[])[Number(head)]
    : isPlainObject(target)
      ? target[head]
      : undefined;

  let nextChild: unknown;
  if (rest.length === 0) {
    nextChild = value;
  } else {
    nextChild = setPathSegments(
      container ?? (isIndex ? [] : {}),
      rest,
      value,
    );
  }

  if (inArray) {
    const copy = (target as unknown[]).slice();
    copy[Number(head)] = nextChild;
    return copy;
  }
  const base: PlainObject = isPlainObject(target) ? target : {};
  return { ...base, [head]: nextChild };
}
