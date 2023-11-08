import { getData } from "@/app/getData";
import Content from "@/components/scaleable";

export default async function WhatWeDo() {
  const data = await getData();

  return (
    <>
      <Content data={data} />
    </>
  );
}