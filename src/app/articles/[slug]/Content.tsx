import { Suspense } from "react";
import { ProfileWithFetch } from "~/components/ProfileWithFetch";
import { ProfileSkeleton } from "~/components/ProfileSkeleton";
import { ArticleDetailWithFetch } from "~/components/ArticleDetailWithFetch";
import { ArticleDetailSkeleton } from "~/components/ArticleDetailSkeleton";
import { VersionInfo } from "~/components/VersionInfo";

type Props = {
  slug: string;
};

export default function Content({ slug }: Props) {
  return (
    <main className="mx-auto flex min-h-[100dvh] flex-col p-4">
      <h1 className="h-11 text-2xl font-bold">An example blog</h1>
      <div className="flex flex-row-reverse items-start gap-4">
        <main className="flex-1 rounded bg-white p-4">
          <Suspense fallback={<ArticleDetailSkeleton />}>
            <ArticleDetailWithFetch slug={slug} />
          </Suspense>
        </main>
        <aside className="flex flex-col gap-4">
          <div className="w-80 rounded bg-white p-4">
            <Suspense fallback={<ProfileSkeleton />}>
              <ProfileWithFetch />
            </Suspense>
          </div>
          <div className="w-80 rounded bg-white p-4">
            <VersionInfo />
          </div>
        </aside>
      </div>
    </main>
  );
}
