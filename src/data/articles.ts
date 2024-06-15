import { uuidv7 } from "uuidv7";

export type Article = {
  id: string;
  slug: string;
  title: string;
  content: string;
  createdAt: string;
};

export type ArticleLite = Pick<Article, "id" | "slug" | "title" | "createdAt">;

const createArticle = (slug: string, title: string): Article => {
  return {
    id: uuidv7(),
    slug,
    title,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: new Date().toISOString(),
  };
};

export const articles: Array<Article> = Array(10)
  .fill(0)
  .map((_, i) => {
    return createArticle(`slug-${i + 1}`, `An article${i + 1}`);
  });
