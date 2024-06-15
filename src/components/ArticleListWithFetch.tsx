import { getArticles } from "~/apiClient";
import { ArticleList } from "~/components/ArticleList";
import { ArticleLite } from "~/data/articles";

let articlesPromise: Promise<Array<ArticleLite>>;

export const ArticleListWithFetch = () => {
  if (!articlesPromise) {
    articlesPromise = getArticles();
  }

  return <ArticleList articlesPromise={articlesPromise} />;
};
