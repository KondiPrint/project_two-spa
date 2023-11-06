import styles from "./maintainable.module.scss";
import Link from "next/link";
import { getData } from "../getData";

export default async function Maintainable() {
  const data = await getData();
  return (
    <>
      {data &&
        data.nav_mobile_data.map((item:any, index:number) => (
          <>
            <header className={styles.pageheader}>
              <nav className={styles.pageheader__nav}>
                <menu className={styles.pageheader__menu}>
                  <li className={styles.pageheader__menu_left}>
                    <Link href={"/"}>
                      <img
                      src={item.back_btn}
                      alt={item.back_btn__alt}
                      />
                    </Link>
                  </li>
                  <li className={styles.pageheader__menu_right}>
                    <Link href={"/whatwedo"}>
                    <img
                    className={styles.pageheader__menu_direction}
                    src={item.whatwedo_btn}
                    alt={item.whatwedo_btn_alt}
                    />
                    </Link>
                    <div className={styles.pageheader__menu_current}>
                      <img src={item.maintainable_btn_highlight} alt="" />
                      <img src={item.maintainable_btn} alt={item.maintainable_btn_alt} />
                    </div>
                    <Link href={"/getintouch"}>
                      <img className={styles.pageheader__menu_direction} src={item.getintouch_btn} alt={item.getintouch_btn_alt} />
                    </Link>
                  </li>
                </menu>
              </nav>
            </header>
          </>
      ))}
      {data &&
        data.maintainable_mobile_data.map((item:any, index:number) => (
          <>
            <main>
              <section className={styles.content__section}>
                <div className={styles.content__img_container}>
                  <img
                  src={item.img_banner}
                  alt={item.img_banner_alt}
                  />
                </div>
                <div className={styles.content__text_container}>
                  <h1>{item.title} <span>{item.title_2}</span> {item.title_3}</h1>
                  <p>{item.text_1}</p>
                  <p>{item.text_2}</p>
                  <p>{item.text_3}</p>
                </div>
                <div className={styles.content__logo_container}>
                  <Link href={"/"}>
                    <img src={item.maintainable_logo} alt={item.maintainable_logo_alt} />
                  </Link>
                </div>
              </section>
            </main>
          </>
      ))}
    </>
  );
}
