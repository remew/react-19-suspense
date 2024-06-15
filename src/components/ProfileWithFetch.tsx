import { getProfile } from "~/apiClient";
import { Profile } from "~/components/Profile";
import { Profile as ProfileData } from "~/data/profile";

let profilePromise: Promise<ProfileData>;

export const ProfileWithFetch = () => {
  if (!profilePromise) {
    profilePromise = getProfile();
  }

  return <Profile profilePromise={profilePromise} />;
};
