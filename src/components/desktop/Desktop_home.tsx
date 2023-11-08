import styles from "./desktop.module.scss"
import Link from "next/link";
import { TopLevel } from "@/lib/data_interface";

interface ContentProps {
  data: TopLevel;
}

const Home: React.FC<ContentProps> = ({ data }) => {
  return (
    <>
    {data &&
        data.home_desktop_data.map((item, index) => (
          <>
            <main key={index}>
              <section className={styles.content__section}>
                <div className={styles.content__container}>

                <div className={styles.content__logo_container}>
                  <Link href={"/"}>
                    <img src={item.logo} alt={item.logo_alt} />
                  </Link>
                </div>
                <div className={styles.content__img_container}>
                  <Link href={"/whatwedo"}>
                    <img
                    src={item.whatwedo_card}
                    alt={item.whatwedo_card_alt}
                    />
                  </Link>
                </div>
                <div className={styles.content__img_container}>
                  <Link href={"/maintainable"}>
                    <img
                    src={item.maintainable_card}
                    alt={item.maintainable_card_alt}
                    />
                  </Link>
                </div>
                <div className={styles.content__img_container}>
                  <Link href={"/getintouch"}>
                    <img
                    src={item.getintouch_card}
                    alt={item.getintouch_card_alt}
                    />
                  </Link>
                </div>
                </div>
              </section>
            </main>
          </>
        ))}
    </>
  );
}
export default Home;