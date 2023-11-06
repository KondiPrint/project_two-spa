import styles from "./getintouch.module.scss";
import Link from "next/link";
import { getData } from "@/app/getData";

export default async function GetInTouch() {
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
                    <Link href={"/maintainable"}>
                    <img
                    className={styles.pageheader__menu_direction}
                    src={item.maintainable_btn}
                    alt={item.maintainable_btn_alt}
                    />
                    </Link>
                    <div className={styles.pageheader__menu_current}>
                      <img src={item.getintouch_btn_highlight} alt="" />
                      <img src={item.getintouch_btn} alt={item.getintouch_btn_alt} />
                    </div>
                  </li>
                </menu>
              </nav>
            </header>
          </>
      ))}
      {data &&
        data.getintouch_mobile_data.map((item:any, index:number) => (
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
                </div>
                <div className={styles.content__contact_container}>
                  <figure>
                    <img src={item.contact_img_1} alt={item.contact_img_1_alt} />
                    <figcaption>
                      <p>{item.contact_img_1_mail}</p>
                    </figcaption>
                  </figure>
                  <figure>
                    <img
                    src={item.contact_img_2}
                    alt={item.contact_img_2_alt}
                    />
                    <figcaption>
                      <p>{item.contact_img_2_mail}</p>
                    </figcaption>
                  </figure>
                  <div>
                    <figure>
                      <img
                      src={item.contact_img_3}
                      alt={item.contact_img_3_alt}
                      />
                      <figcaption>
                        <p>{item.contact_img_3_mail}</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className={styles.content__logo_container}>
                  <Link href={"/"}>
                  <img src={item.getintouch_logo} alt={item.getintouch_logo_alt} />
                  </Link>
                </div>
              </section>
            </main>
          </>
      ))}
    </>
  );
}