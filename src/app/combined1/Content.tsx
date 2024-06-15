import { Suspense } from "react";
import { ArticleListSkeleton } from "~/components/ArticleListSkeleton";
import { ProfileSkeleton } from "~/components/ProfileSkeleton";
import { ArticleListWithFetch } from "~/components/ArticleListWithFetch";
import { ProfileWithFetch } from "~/components/ProfileWithFetch";
import { VersionInfo } from "~/components/VersionInfo";

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
            <aside className="flex flex-col gap-4">
              <div className="w-80 rounded bg-white p-4">
                <ProfileSkeleton />
              </div>
              <div className="w-80 rounded bg-white p-4">
                <VersionInfo />
              </div>
            </aside>
          </div>
        }
      >
        <div className="flex flex-row-reverse items-start gap-4">
          <main className="flex-1 rounded bg-white p-4">
            <ArticleListWithFetch />
          </main>
          <aside className="flex flex-col gap-4">
            <div className="w-80 rounded bg-white p-4">
              <ProfileWithFetch />
            </div>
            <div className="w-80 rounded bg-white p-4">
              <VersionInfo />
            </div>
          </aside>
        </div>
      </Suspense>
    </main>
  );
}
