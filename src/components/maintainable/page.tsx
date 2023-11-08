import styles from "./maintainable.module.scss";
import Link from "next/link";
import { Components } from "@/lib/data_interface";

interface ContentProps {
  data: Components;
}

const maintainable_desktop: React.FC<ContentProps> = ({ data }) => {
  const navData = data.components.navbar
  const contentData = data.components.maintainable_desktop

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
              <div className={styles.pageheader__menu_current}>
                <img src={navData.maintainable_btn} alt={navData.maintainable_btn_alt} />
                <img src={navData.maintainable_btn_highlight} alt="" />
              </div>
              <Link href={"/getintouch"}>
                <img className={styles.pageheader__menu_direction} src={navData.getintouch_btn} alt={navData.getintouch_btn_alt} />
              </Link>
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
            <p>{contentData.text_3}</p>
          </div>
          <div className={styles.bottom_right}>
            <p>{contentData.bottom_right_text}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
export default maintainable_desktop