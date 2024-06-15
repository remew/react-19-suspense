import { getArticles, getProfile } from "~/apiClient";
import { Suspense } from "react";
import { Profile } from "~/components/Profile";
import { ArticleList } from "~/components/ArticleList";
import { ProfileSkeleton } from "~/components/ProfileSkeleton";
import { ArticleListSkeleton } from "~/components/ArticleListSkeleton";
import { ArticleLite } from "~/data/articles";
import { Profile as ProfileData } from "~/data/profile";

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
            <ArticleList articlesPromise={articlesPromise} />
          </main>
          <aside className="w-80 rounded bg-white p-4">
            <Profile profilePromise={profilePromise} />
          </aside>
        </div>
      </Suspense>
    </main>
  );
}
