import styles from "./maintainable.module.scss";
import Link from "next/link";
import { TopLevel } from "@/lib/data_interface";

interface ContentProps {
  data: TopLevel;
}

const maintainable_home: React.FC<ContentProps> = ({ data }) => {

  return (
    <>
    <div className={styles.backgroundcolor}>
      {data &&
        data.nav_data.map((item:any, index:number) => (
          <>
            <header className={styles.pageheader} key={index}>
              <nav className={styles.pageheader__nav}>
                <menu className={styles.pageheader__menu}>
                  <li className={styles.pageheader__menu_left}>
                    <Link href={"/"}>
                      <img
                      src={item.back_btn}
                      alt={item.back_btn__alt}
                      />
                    </Link>
                  <div className={styles.pageheader__menu_right}>
                    <Link href={"/whatwedo"}>
                    <img
                    className={styles.pageheader__menu_direction}
                    src={item.whatwedo_btn}
                    alt={item.whatwedo_btn_alt}
                    />
                    </Link>
                    <div className={styles.pageheader__menu_current}>
                      <img src={item.maintainable_btn} alt={item.maintainable_btn_alt} />
                      <img src={item.maintainable_btn_highlight} alt="" />
                    </div>
                    <Link href={"/getintouch"}>
                      <img className={styles.pageheader__menu_direction} src={item.getintouch_btn} alt={item.getintouch_btn_alt} />
                    </Link>
                  </div>
                  </li>
                </menu>
              </nav>
            </header>
          </>
      ))}
      {data &&
        data.maintainable_desktop_data.map((item:any, index:number) => (
          <>
            <main key={index}>
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
                <div className={styles.buttom_right}>
                  <p>{item.bottom_right_text}</p>
                </div>
              </section>
            </main>
          </>
      ))}
    </div>
    </>
  );
}
export default maintainable_home