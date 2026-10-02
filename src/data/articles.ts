import { articlesMeta } from "./articles-meta";

export type ArticleMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  isoDate: string;
  image: string | null;
  sourceUrl: string;
};

export type Article = ArticleMeta & { contentHtml: string };

export const articles: ArticleMeta[] = articlesMeta;

/** "Press Release" → "press-release" (untuk URL /insight/[kategori]). */
export const categorySlug = (name: string): string =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export type ArticleCategory = {
  name: string;
  slug: string;
  count: number;
};

export const articleCategoryList: ArticleCategory[] = (() => {
  const counts = new Map<string, number>();
  for (const article of articles) {
    counts.set(article.category, (counts.get(article.category) ?? 0) + 1);
  }
  return [...counts.entries()].map(([name, count]) => ({
    name,
    slug: categorySlug(name),
    count,
  }));
})();

export const getCategoryBySlug = (slug: string): ArticleCategory | undefined =>
  articleCategoryList.find((category) => category.slug === slug);

export const articlesByCategory = (slug: string): ArticleMeta[] =>
  articles.filter((article) => categorySlug(article.category) === slug);

export const latestArticles = (count: number): ArticleMeta[] =>
  articles.slice(0, count);

export const getArticleMeta = (slug: string): ArticleMeta | undefined =>
  articles.find((article) => article.slug === slug);

export const relatedArticles = (slug: string, count = 3): ArticleMeta[] => {
  const current = getArticleMeta(slug);
  const sameCategory = articles.filter(
    (article) =>
      article.slug !== slug && article.category === current?.category,
  );
  const others = articles.filter(
    (article) =>
      article.slug !== slug && article.category !== current?.category,
  );
  return [...sameCategory, ...others].slice(0, count);
};
