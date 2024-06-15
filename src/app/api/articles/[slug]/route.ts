import { sleepMs } from "~/constants";
import { articles } from "~/data/articles";

export const dynamic = "force-dynamic";

export const GET = async (
  _: Request,
  { params }: { params: { slug: string } },
) => {
  await new Promise((resolve) => setTimeout(resolve, 1.5 * sleepMs));

  const article = articles.find((article) => {
    return article.slug === params.slug;
  });

  return Response.json(
    {
      article: article ?? null,
      requestAt: new Date().toISOString(),
    },
    {
      status: article ? 200 : 404,
    },
  );
};
