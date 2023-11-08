import styles from "./page.module.scss";
import Link from "next/link";
import { getData } from "@/app/getData";
import Content from "@/components/Scaleable";

export default async function WhatWeDo() {
  const data = await getData();

  return (
    <>
      <Content data={data} />
    </>
  );
}