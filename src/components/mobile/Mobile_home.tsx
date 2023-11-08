import styles from "./mobile.module.scss";
import Link from "next/link";
import { Components } from "@/lib/data_interface";

interface ContentProps {
  data: Components;
}

const Home: React.FC<ContentProps> = ({ data }) => {
  const contentData = data.components.home_mobile

  return (
    <main className={styles.backgroundcolor}>
      <section className={styles.content__section}>
        <div className={styles.content__container}>
          <div className={styles.content__logo_container}>
            <Link href={"/"}>
              <img src={contentData.logo} alt={contentData.logo_alt} />
            </Link>
          </div>
          <div>
            <Link href={"/whatwedo"}>
              <img
              src={contentData.whatwedo_banner}
              alt={contentData.whatwedo_banner_alt}
              />
            </Link>
          </div>
          <div>
            <Link href={"/maintainable"}>
              <img
              src={contentData.maintainable_banner}
              alt={contentData.maintainable_banner_alt}
              />
            </Link>
          </div>
          <div>
            <Link href={"/getintouch"}>
              <img
              src={contentData.getintouch_banner}
              alt={contentData.getintouch_banner_alt}
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
}
export default Home;