import styles from "./getintouch.module.scss";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <>
      <header className={styles.pageheader}>
        <nav className={styles.pageheader__nav}>
          <menu className={styles.pageheader__menu}>
            <li className={styles.pageheader__menu_left}>
              <Link href={"/"}>
                <img
                  src="../../../assets/navigation/back.png"
                  alt="Back-button"
                />
              </Link>
            </li>
            <li className={styles.pageheader__menu_right}>
              <Link href={"/whatwedo"}>
                <img
                  className={styles.pageheader__menu_direction}
                  src="../../../assets/navigation/nav-1.png"
                  alt=""
                />
              </Link>
              <Link href={"/maintainable"}>
                <img
                  className={styles.pageheader__menu_direction}
                  src="../../../assets/navigation/nav-2.png"
                  alt=""
                />
              </Link>
              <div className={styles.pageheader__menu_current}>
                <img src="../../../assets/navigation/nav-3-where.png" alt="" />
                <img src="../../../assets/navigation/nav-3.png" alt="" />
              </div>
            </li>
          </menu>
        </nav>
      </header>
      <main>
        <section className={styles.content__section}>
          <div className={styles.content__img_container}>
            <img
              src="../../assets/front-mobil/weba-mobil.getintouch.png"
              alt="Get in touch-banner"
            />
          </div>
          <div className={styles.content__text_container}>
            <h1>
              There for you and <span>care for you</span> ...
            </h1>
            <p>
              But I must explain to you how all this mistaken idea of denouncing{" "}
              <br />
              pleasure and prasing pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are.
            </p>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and prasing pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness.
            </p>
          </div>
          <div className={styles.content__contact_container}>
            <figure>
              <img src="../../assets/front-desktop/whatwedo-small.png" alt="" />
              <figcaption>
                <p>lt@coolish.com</p>
              </figcaption>
            </figure>
            <figure>
              <img
                src="../../assets/front-desktop/maintainable-small.png"
                alt=""
              />
              <figcaption>
                <p>pr@coolish.com</p>
              </figcaption>
            </figure>
            <div>
              <figure>
                <img
                  src="../../assets/front-desktop/getintouch-small.png"
                  alt=""
                />
                <figcaption>
                  <p>mn@coolish.com</p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className={styles.content__logo_container}>
            <Link href={"/"}>
              <img src="../../assets/logo/logo-b.png" alt="Logo-b" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
