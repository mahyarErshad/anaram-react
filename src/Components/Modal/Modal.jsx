import React from "react";
import styles from "./styles.module.css";

function Modal({ children, isOpen }) {
  const backdropClass = isOpen ? `fixed top-0 bottom-0 right-0 left-0 w-full h-full flex-center bg-black ${styles["modal-fadeIn"]}` : "hidden";

  if (isOpen) return <div className={`${backdropClass} z-50`}>{children}</div>;
}

export default Modal;
