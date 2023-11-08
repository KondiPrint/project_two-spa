import styles from "./getintouch._mobile.module.scss"
import Link from "next/link";
import { Components } from "@/lib/data_interface";

interface ContentProps {
  data: Components;
}

const getintouch_mobile: React.FC<ContentProps> = ({ data }) => {
  const navData = data.components.navbar
  const contentData = data.components.getintouch_mobile

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
            </li>
            <li className={styles.pageheader__menu_right}>
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
                <img src={navData.getintouch_btn_highlight} alt="" />
                <img src={navData.getintouch_btn} alt={navData.getintouch_btn_alt} />
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
            alt={contentData.img_banner_alt}
            />
          </div>
          <div className={styles.content__text_container}>
            <h1>{contentData.title} <span>{contentData.title_2}</span> {contentData.title_3}</h1>
            <p>{contentData.text_1}</p>
            <p>{contentData.text_2}</p>
            <br />
            <p>{contentData.text_2}</p>
          </div>
          <div className={styles.content__contact_container}>
            <figure>
              <div>
                <img src={contentData.contact_img_1} alt={contentData.contact_img_1_alt} />
              </div>
              <figcaption>
                <p>{contentData.contact_img_1_mail}</p>
              </figcaption>
            </figure>
            <figure>
              <div>
                <img
                src={contentData.contact_img_2}
                alt={contentData.contact_img_2_alt}
                />
              </div>
              <figcaption>
                <p>{contentData.contact_img_2_mail}</p>
              </figcaption>
            </figure>
            <div>
              <figure>
                <div>
                  <img
                  src={contentData.contact_img_3}
                  alt={contentData.contact_img_3_alt}
                  />
                </div>
                <figcaption>
                  <p>{contentData.contact_img_3_mail}</p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className={styles.content__logo_container}>
            <Link href={"/"}>
              <img src={contentData.getintouch_logo} alt={contentData.getintouch_logo_alt} />
            </Link>
          </div>
        </section>
      </main>
    </div>

  );
}
export default getintouch_mobile;