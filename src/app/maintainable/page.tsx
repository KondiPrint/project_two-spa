import { getData } from "@/app/getData";
import Content from "@/components/scaleable";

export default async function Maintainable() {
  const data = await getData();

  return (
    <>
      <Content data={data} />
    </>
  );
}