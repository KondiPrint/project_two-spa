import styles from "./mobile.module.scss";
import Link from "next/link";
import { TopLevel } from "@/lib/data_interface";

interface ContentProps {
  data: TopLevel;
}

const Home: React.FC<ContentProps> = ({ data }) => {
  return (
    <>
    {data &&
        data.home_mobile_data.map((item:any, index:number) => (
          <>
            <main key={index}>
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
export default Home;