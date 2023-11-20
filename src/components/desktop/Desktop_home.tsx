import styles from "./desktop.module.scss";
import Modal from "../modal";
import Link from "next/link";
import { myInterface } from "@/lib/data_interface";

interface myData {
  data: myInterface;
}

const Home: React.FC<myData> = ({ data }) => {
  const contentData = data.components.home_desktop;

  return (
    <main className={styles.backgroundcolor}>
      <section className={styles.content__section}>
        <div className={styles.content__container}>
          <div className={styles.content__logo_container}>
            <Link href={"/"}>
              <img src={contentData.logo} alt={contentData.logo_alt} />
            </Link>
          </div>
          <div className={styles.content__img_container}>
            <Link href={"/whatwedo"}>
              <img
                src={contentData.whatwedo_card}
                alt={contentData.whatwedo_card_alt}
              />
            </Link>
          </div>
          <div className={styles.content__img_container}>
            <Link href={"/maintainable"}>
              <img
                src={contentData.maintainable_card}
                alt={contentData.maintainable_card_alt}
              />
            </Link>
          </div>
          <div
            className={`${styles.content__img_container} ${styles.bottom_text_anchor}`}
          >
            <Link href={"/getintouch"}>
              <img
                src={contentData.getintouch_card}
                alt={contentData.getintouch_card_alt}
              />
            </Link>
          </div>
          <div className={styles.bottom_text}>
            <div>
              <p>{contentData.bottom_text}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
