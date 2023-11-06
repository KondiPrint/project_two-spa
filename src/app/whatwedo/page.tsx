import styles from "./whatwedo.module.scss";
import Link from "next/link";

export default function WhatWeDo() {
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
              <div className={styles.pageheader__menu_current}>
                <img src="../../../assets/navigation/nav-1-where.png" alt="" />
                <img src="../../../assets/navigation/nav-1.png" alt="" />
              </div>
              <Link href={"/maintainable"}>
                <img
                  className={styles.pageheader__menu_direction}
                  src="../../../assets/navigation/nav-2.png"
                  alt=""
                />
              </Link>
              <Link href={"/getintouch"}>
                <img
                  className={styles.pageheader__menu_direction}
                  src="../../../assets/navigation/nav-3.png"
                  alt=""
                />
              </Link>
            </li>
          </menu>
        </nav>
      </header>
      <main>
        <section className={styles.content__section}>
          <div className={styles.content__img_container}>
            <img
              src="../../assets/front-mobil/weba-2-mobil-whatwedo.png"
              alt="What we do-banner"
            />
          </div>
          <div className={styles.content__text_container}>
            <h1>
              Design is the <span>matter of choice</span> ...
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
          <div className={styles.content__logo_container}>
            <Link href={"/"}>
              <img src="../../assets/logo/logo-a.png" alt="Logo-a" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
