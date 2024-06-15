import { use } from "react";
import type { Article } from "~/data/articles";

type Props = {
  articlePromise: Promise<Article>;
};

export const ArticleDetail = ({ articlePromise }: Props) => {
  const { content, id, title, slug, createdAt } = use(articlePromise);

  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold">{title}</h2>
      <time className="text-sm">Published on {createdAt.slice(0, 10)}</time>
      <div className="mt-4">{content}</div>
    </div>
  );
};
