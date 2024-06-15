import { Suspense } from "react";
import { ArticleListSkeleton } from "~/components/ArticleListSkeleton";
import { ProfileSkeleton } from "~/components/ProfileSkeleton";
import { ArticleListWithFetch } from "~/components/ArticleListWithFetch";
import { ProfileWithFetch } from "~/components/ProfileWithFetch";

export default function Content() {
  return (
    <main className="mx-auto flex min-h-[100dvh] flex-col p-4">
      <h1 className="h-11 text-2xl font-bold">An example blog</h1>
      <Suspense
        fallback={
          <div className="flex flex-row-reverse items-start gap-4">
            <main className="flex-1 rounded bg-white p-4">
              <ArticleListSkeleton />
            </main>
            <aside className="w-80 rounded bg-white p-4">
              <ProfileSkeleton />
            </aside>
          </div>
        }
      >
        <div className="flex flex-row-reverse items-start gap-4">
          <main className="flex-1 rounded bg-white p-4">
            <ArticleListWithFetch />
          </main>
          <aside className="w-80 rounded bg-white p-4">
            <ProfileWithFetch />
          </aside>
        </div>
      </Suspense>
    </main>
  );
}
