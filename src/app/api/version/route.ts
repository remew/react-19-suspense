import { version as react } from "react";
import { version as reactDom } from "react-dom";
import nextPackageJson from "next/package.json";

export const dynamic = "force-dynamic";

export const GET = async () => {
  return Response.json({
    next: nextPackageJson.version,
    react,
    "react-dom": reactDom,
  });
};
