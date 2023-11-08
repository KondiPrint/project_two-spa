import { getData } from "../getData";
import Content from "@/components/Scaleable";

export default async function GetInTouch() {
  const data = await getData();
  return (
    <>
      <Content data={data} />
    </>
  );
}