import { Suspense } from "react";
import { ProfileWithFetch } from "~/components/ProfileWithFetch";
import { ArticleListWithFetch } from "~/components/ArticleListWithFetch";
import { ProfileSkeleton } from "~/components/ProfileSkeleton";
import { ArticleListSkeleton } from "~/components/ArticleListSkeleton";

export default function Content() {
  return (
    <main className="mx-auto flex min-h-[100dvh] flex-col p-4">
      <h1 className="h-11 text-2xl font-bold">An example blog</h1>
      <div className="flex flex-row-reverse items-start gap-4">
        <main className="flex-1 rounded bg-white p-4">
          <Suspense fallback={<ArticleListSkeleton />}>
            <ArticleListWithFetch />
          </Suspense>
        </main>
        <aside className="w-80 rounded bg-white p-4">
          <Suspense fallback={<ProfileSkeleton />}>
            <ProfileWithFetch />
          </Suspense>
        </aside>
      </div>
    </main>
  );
}
