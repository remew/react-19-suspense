import { profile } from "~/data/profile";
import { sleepMs } from "~/constants";

export const dynamic = "force-dynamic";

export const GET = async () => {
  await new Promise((resolve) => setTimeout(resolve, sleepMs));

  return Response.json({
    profile,
    requestAt: new Date().toISOString(),
  });
};
