export const ArticleDetailSkeleton = () => {
  return (
    <div className="flex animate-pulse flex-col">
      <div className="my-1 h-5 w-80 rounded bg-slate-200" />
      <div className="my-0.5 h-3.5 w-40 rounded bg-slate-200" />
      <div className="mt-4 flex flex-wrap gap-x-1">
        <span className="my-1 inline-block h-4 w-80 rounded bg-slate-200" />
        <span className="my-1 inline-block h-4 w-96 rounded bg-slate-200" />
        <span className="my-1 inline-block h-4 w-32 rounded bg-slate-200" />
        <span className="my-1 inline-block h-4 w-96 rounded bg-slate-200" />
        <span className="my-1 inline-block h-4 w-80 rounded bg-slate-200" />
        <span className="my-1 inline-block h-4 w-32 rounded bg-slate-200" />
        <span className="my-1 inline-block h-4 w-48 rounded bg-slate-200" />
        <span className="my-1 inline-block h-4 w-full rounded bg-slate-200" />
      </div>
    </div>
  );
};
