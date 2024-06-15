import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col p-24">
      <h1 className="text-2xl font-bold">
        An example for react 19 suspense behavior
      </h1>
      <nav>
        <ul className="mt-4">
          <li>
            <Link href="/combined1" className="text-blue-500 underline">
              同一 Suspense かつ子コンポーネントが fetch を開始するパターン
            </Link>
          </li>
          <li>
            <Link href="/combined2" className="text-blue-500 underline">
              同一 Suspense かつ親コンポーネントが fetch を開始するパターン
            </Link>
          </li>
          <li>
            <Link href="/separated1" className="text-blue-500 underline">
              別 Suspense かつ子コンポーネントが fetch を開始するパターン
            </Link>
          </li>
          <li>
            <Link href="/separated2" className="text-blue-500 underline">
              別 Suspense かつ親コンポーネントが fetch を開始するパターン
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
