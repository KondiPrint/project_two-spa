import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className={styles.content__section}>
        <div className={styles.content__logo_container}>
          <Link href={"/"}>
            <img src="../../assets/logo/logo-final.png" alt="Logo" />
          </Link>
        </div>
        <div className={styles.content__img_container}>
          <Link href={"/whatwedo"}>
            <img
              src="../../assets/front-mobil/weba-2-mobil-whatwedo.png"
              alt="What we do-banner"
            />
          </Link>
        </div>
        <div className={styles.content__img_container}>
          <Link href={"/maintainable"}>
            <img
              src="../../assets/front-mobil/weba-3-mobil-maintainable.png"
              alt="Maintainable-banner"
            />
          </Link>
        </div>
        <div className={styles.content__img_container}>
          <Link href={"/getintouch"}>
            <img
              src="../../assets/front-mobil/weba-mobil.getintouch.png"
              alt="Get in touch-banner"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
