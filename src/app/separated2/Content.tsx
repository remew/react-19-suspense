import { getArticles, getProfile } from "~/apiClient";
import { Suspense } from "react";
import { Profile } from "~/components/Profile";
import { ArticleList } from "~/components/ArticleList";
import { ProfileSkeleton } from "~/components/ProfileSkeleton";
import { ArticleListSkeleton } from "~/components/ArticleListSkeleton";
import { ArticleLite } from "~/data/articles";
import { Profile as ProfileData } from "~/data/profile";
import { VersionInfo } from "~/components/VersionInfo";

let articlesPromise: Promise<Array<ArticleLite>>;
let profilePromise: Promise<ProfileData>;

export default function Content() {
  if (!articlesPromise) {
    articlesPromise = getArticles();
  }
  if (!profilePromise) {
    profilePromise = getProfile();
  }

  return (
    <main className="mx-auto flex min-h-[100dvh] flex-col p-4">
      <h1 className="h-11 text-2xl font-bold">An example blog</h1>
      <div className="flex flex-row-reverse items-start gap-4">
        <main className="flex-1 rounded bg-white p-4">
          <Suspense fallback={<ArticleListSkeleton />}>
            <ArticleList articlesPromise={articlesPromise} />
          </Suspense>
        </main>
        <aside className="flex flex-col gap-4">
          <div className="w-80 rounded bg-white p-4">
            <Suspense fallback={<ProfileSkeleton />}>
              <Profile profilePromise={profilePromise} />
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
