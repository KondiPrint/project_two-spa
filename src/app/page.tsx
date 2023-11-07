import styles from "./page.module.scss";
import Link from "next/link";
import { getData } from "./getData";
import Content from "@/components/Scaleable";

export default async function Home() {
  const data = await getData();

  return (
    <>
      <Content data={data} />
    </>
  );
}


export async function getServerSideProps() {
  const data = await getData(); // Fetch your data here
  return {
    props: {
      data,
    },
  };
}
