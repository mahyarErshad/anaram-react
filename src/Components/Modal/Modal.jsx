import React from "react";
import styles from "./styles.module.css";

function Modal({ children, isOpen }) {
  const backdropClass = isOpen ? `fixed top-0 bottom-0 right-0 left-0 w-full h-full flex-center bg-black ${styles["modal-fadeIn"]}` : "hidden";
  const contentClass = isOpen ? "opacity-100" : "modal-content opacity-0 pointer-events-none";

  if (isOpen)
    return (
      <div>
        <div className={`${backdropClass}`}>
          <div className={`${contentClass}`}>{children}</div>
        </div>
      </div>
    );
}

export default Modal;
