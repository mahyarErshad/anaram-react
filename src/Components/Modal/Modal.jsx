import React from "react";
import styles from "./styles.module.css";
import { ReactComponent as CloseIcon } from "../../assets/images/icons/close-icon.svg";

function Modal({ children, isOpen, setModalOpen }) {
  const backdropClass = isOpen ? `fixed top-0 bottom-0 right-0 left-0 w-full h-full flex-center bg-black ${styles["modal-fadeIn"]}` : "hidden";

  if (isOpen)
    return (
      <div className={`${backdropClass} z-50`}>
        <div className="flex-col flex-center bg-white rounded-2xl w-full max-w-[40.625rem] px-4 pt-4 pb-11">
          <button className="self-end mb-2" onClick={() => setModalOpen(false)}>
            <CloseIcon />
          </button>
          {children}
        </div>
      </div>
    );
}

export default Modal;
