import { use } from "react";
import { Profile as ProfileData } from "~/data/profile";
import Image from "next/image";
import { Heading } from "~/components/Heading";

type Props = {
  profilePromise: Promise<ProfileData>;
};

export const Profile = ({ profilePromise }: Props) => {
  const { name, description, icon } = use(profilePromise);

  return (
    <div className="flex flex-col gap-2">
      <Heading>Profile</Heading>
      <div className="flex gap-2">
        <Image
          src={icon}
          alt={`${name}'s icon`}
          width={64}
          height={64}
          className="h-16 w-16 rounded"
        />
        <div className="flex flex-1 flex-col gap-1">
          <div className="font-bold">{name}</div>
          <div className="">{description}</div>
        </div>
      </div>
    </div>
  );
};
