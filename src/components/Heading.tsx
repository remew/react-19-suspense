import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Heading = ({ children }: Props) => {
  return <h2 className="text-xl font-bold leading-none">{children}</h2>;
};
