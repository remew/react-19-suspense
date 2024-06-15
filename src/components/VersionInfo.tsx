import { version as reactVersion } from "react";
import { version as reactDomVersion } from "react-dom";
import nextPackageJson from "next/package.json";
import { Heading } from "~/components/Heading";

export const VersionInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <Heading>Versions</Heading>
      <ul className="flex flex-col gap-2">
        <li>
          <h3 className="font-bold">next</h3>
          <div>{nextPackageJson.version}</div>
        </li>
        <li>
          <h3 className="font-bold">react</h3>
          <div>{reactVersion}</div>
        </li>
        <li>
          <h3 className="font-bold">react-dom</h3>
          <div>{reactDomVersion}</div>
        </li>
      </ul>
    </div>
  );
};
