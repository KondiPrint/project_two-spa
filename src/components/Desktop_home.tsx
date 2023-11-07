import styles from "./page.module.scss";
import Link from "next/link";
import { getData } from "@/app/getData";

export default async function Home() {
  const data = await getData();
  return (
    <>
    {data &&
        data.home_mobile_data.map((item:any, index:number) => (
          <>
            <main>
              <section className={styles.content__section}>
                <div className={styles.content__logo_container}>
                  <Link href={"/"}>
                    <img src={item.logo} alt={item.logo_alt} />
                  </Link>
                </div>
                <div className={styles.content__img_container}>
                  <Link href={"/whatwedo"}>
                    <img
                    src={item.whatwedo_banner}
                    alt={item.whatwedo_alt}
                    />
                  </Link>
                </div>
                <div className={styles.content__img_container}>
                  <Link href={"/maintainable"}>
                    <img
                    src={item.maintainable_banner}
                    alt={item.maintainable_alt}
                    />
                  </Link>
                </div>
                <div className={styles.content__img_container}>
                  <Link href={"/getintouch"}>
                    <img
                    src={item.getintouch_banner}
                    alt={item.getintouch_alt}
                    />
                  </Link>
                </div>
              </section>
            </main>
          </>
        ))}
    </>
  );
}
