import { getArticle } from "~/apiClient";
import { ArticleDetail } from "~/components/ArticleDetail";
import type { Article } from "~/data/articles";

type Props = {
  slug: string;
};

let articlePromise: Promise<Article>;

export const ArticleDetailWithFetch = ({ slug }: Props) => {
  if (!articlePromise) {
    articlePromise = getArticle(slug);
  }

  return <ArticleDetail articlePromise={articlePromise} />;
};
