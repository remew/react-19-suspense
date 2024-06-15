"use client";

import dynamic from "next/dynamic";

const Content = dynamic(() => import("./Content"), { ssr: false });

export default function Page(props: { params: { slug: string } }) {
  return <Content slug={props.params.slug} />;
}
