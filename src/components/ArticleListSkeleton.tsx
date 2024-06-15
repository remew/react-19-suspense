export const ArticleListSkeleton = () => {
  const maxWidthClasses = [
    "max-w-64",
    "max-w-32",
    "max-w-96",
    "max-w-52",
    "max-w-80",
  ];
  return (
    <div className="flex animate-pulse flex-col">
      {maxWidthClasses.map((maxWidth, index) => {
        return (
          <div key={index} className="flex flex-col rounded-lg p-4">
            <div
              className={`my-1 h-4 w-full rounded bg-slate-200 ${maxWidth}`}
            />
            <div className="my-1 h-4 w-24 self-end rounded bg-slate-200" />
          </div>
        );
      })}
    </div>
  );
};
