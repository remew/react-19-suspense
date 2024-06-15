import { articles } from "~/data/articles";
import { sleepMs } from "~/constants";

export const dynamic = "force-dynamic";

export const GET = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2 * sleepMs));

  return Response.json({
    articles: articles.map(({ id, slug, title, createdAt }) => {
      return {
        id,
        slug,
        title,
        createdAt,
      };
    }),
    requestAt: new Date().toISOString(),
  });
};
