import { Heading } from "~/components/Heading";

export const ProfileSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <Heading>Profile</Heading>
      <div className="flex animate-pulse gap-2">
        <div className="h-16 w-16 rounded bg-slate-200" />
        <div className="flex flex-1 flex-col gap-1">
          <div className="my-1 h-4 w-20 rounded bg-slate-200" />
          <div className="my-1 h-4 rounded bg-slate-200" />
        </div>
      </div>
    </div>
  );
};
