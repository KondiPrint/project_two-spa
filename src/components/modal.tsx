import style from "@/components/modal.module.scss";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
  src: string;
  alt: string;
  email: string;
}

export default function Modal({ children, src, alt, email }: Props) {
  const [modalDisplay, setModalDisplay] = useState("none");

  const openModal = () => {
    setModalDisplay("block");
  };

  const closeModal = () => {
    setModalDisplay("none");
  };

  window.onclick = event => {
    const eventTarget = event.target as Element | null;

    if (eventTarget?.matches("#modal")) {
      closeModal();
    }
  };
  return (
    <>
      <figure>
        <div>
          <img onClick={openModal} src={src} alt={alt} />
        </div>
        <figcaption>
          <p>{email}</p>
        </figcaption>
      </figure>

      <div id="modal" style={{ display: modalDisplay }} className={style.modal}>
        <form
          className={`${style.modal_content} ${style.animate}`}
          method="post"
        >
          <div className={style.container}>
            <h2>{children}</h2>

            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </div>

            <div>
              <label htmlFor="comment">Comment</label>
              <textarea name="comment"></textarea>
            </div>

            <div className={style.modal__btn}>
              <button type="submit" onClick={closeModal}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
