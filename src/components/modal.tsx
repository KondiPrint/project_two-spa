import style from "@/components/modal.module.scss";
import React, { useState, useRef } from "react";

interface Props {
  children: React.ReactNode;
  src: string;
  alt: string;
  email: string;
}

export default function Modal({ children, src, alt, email }: Props) {
  // * Laver et state for mit modal.
  const [modalDisplay, setModalDisplay] = useState("none");

  // * Her laver jeg en const som jeg kan bruge som et reset til min form.
  const resetForm = useRef<HTMLFormElement | null>(null);

  // * Her resetter jeg al text / data inde i min modal form, så det altid er en tom form som åbnes.
  const reset = () => {
    if (resetForm.current) {
      resetForm.current.reset();
    }
  };

  // * Her laver jeg en funktion til at vise min modal.
  const openModal = () => {
    setModalDisplay("block");
  };

  // * Her laver jeg en funktion for at lukke min modal.
  const closeModal = () => {
    setModalDisplay("none");
    reset();
  };

  // * Her laver jeg en onClick event, så når jeg clicker udenfor min form, når modalen er åben, lukker den min modal.
  window.onclick = event => {
    const eventTarget = event.target as Element | null;

    if (eventTarget?.matches("#modal")) {
      closeModal();
      reset();
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
      {/* Her sørger jeg for min modal bruger min useState til "display"
      optionen. */}
      <div id="modal" style={{ display: modalDisplay }} className={style.modal}>
        <form
          className={`${style.modal_content} ${style.animate}`}
          name="myForm"
          ref={resetForm}
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
              <label htmlFor="text">Subject</label>
              <input type="text" name="text" required />
            </div>
            <div>
              <label htmlFor="comment">Comment</label>
              <textarea name="comment" required></textarea>
            </div>

            <div className={style.modal__btn}>
              <button type="submit">Submit</button>
              <button type="button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
