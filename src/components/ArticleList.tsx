import { use } from "react";
import { ArticleLite } from "~/data/articles";
import Link from "next/link";

type Props = {
  articlesPromise: Promise<Array<ArticleLite>>;
};

export const ArticleList = ({ articlesPromise }: Props) => {
  const articles = use(articlesPromise);

  return (
    <ul>
      {articles.map((article) => {
        return (
          <li key={article.id}>
            <Link
              href={`/articles/${article.slug}`}
              className="flex flex-col rounded-lg p-4 hover:bg-slate-100"
            >
              <span>{article.title}</span>
              <span className="self-end">{article.createdAt.slice(0, 10)}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
