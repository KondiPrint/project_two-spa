import styles from "./getintouch.module.scss";
import Link from "next/link";
import { Components } from "@/lib/data_interface";

interface ContentProps {
  data: Components;
}

const getintouch_desktop: React.FC<ContentProps> = ({ data }) => {
  const navData = data.components.navbar
  const contentData = data.components.getintouch_desktop

  return (

    <div className={styles.backgroundcolor}>
      <header className={styles.pageheader}>
        <nav className={styles.pageheader__nav}>
          <menu className={styles.pageheader__menu}>
            <li className={styles.pageheader__menu_left}>
              <Link href={"/"}>
                <img
                src={navData.back_btn}
                alt={navData.back_btn__alt}
                />
              </Link>
              <div className={styles.pageheader__menu_right}>
                <Link href={"/whatwedo"}>
                  <img
                  className={styles.pageheader__menu_direction}
                  src={navData.whatwedo_btn}
                  alt={navData.whatwedo_btn_alt}
                  />
                </Link>
                <Link href={"/maintainable"}>
                <img
                  className={styles.pageheader__menu_direction}
                  src={navData.maintainable_btn}
                  alt={navData.maintainable_btn_alt}
                  />
                </Link>
                <div className={styles.pageheader__menu_current}>
                  <img src={navData.getintouch_btn} alt={navData.getintouch_btn_alt} />
                  <img src={navData.getintouch_btn_highlight} alt="" />
                </div>
              </div>
            </li>
          </menu>
        </nav>
      </header>
      <main>
        <section className={styles.content__section}>
          <div className={styles.content__img_container}>
            <img
            src={contentData.img_banner}
            alt={contentData.img_banner_alt} className={styles.img_banner}
            />
          </div>
          <div>
            <div className={styles.content__text_container}>
              <h1>{contentData.title} <span>{contentData.title_2}</span> {contentData.title_3}</h1>
              <p>{contentData.text_1}</p>
              <p>{contentData.text_2}</p>
              <p>{contentData.text_3}</p>
            </div>
            <div className={styles.content__contact_container}>
              <figure>
                <img src={contentData.contact_img_1} alt={contentData.contact_img_1_alt} />
                <figcaption>
                  <p>{contentData.contact_img_1_mail}</p>
                </figcaption>
              </figure>
              <figure>
                <img
                src={contentData.contact_img_2}
                alt={contentData.contact_img_2_alt}
                />
                <figcaption>
                  <p>{contentData.contact_img_2_mail}</p>
                </figcaption>
              </figure>
              <div>
                <figure>
                  <img
                  src={contentData.contact_img_3}
                  alt={contentData.contact_img_3_alt}
                  />
                  <figcaption>
                    <p>{contentData.contact_img_3_mail}</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className={styles.bottom_right}>
            <p>{contentData.bottom_right_text}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
export default getintouch_desktop;