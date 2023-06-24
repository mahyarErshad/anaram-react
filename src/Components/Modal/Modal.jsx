import React from "react";

function Modal({ children, isOpen }) {
  const backdropClass = isOpen ? "fixed top-0 bottom-0 right-0 left-0 w-full h-full flex-center bg-black modal-fadeIn" : "hidden";
  const contentClass = isOpen ? "opacity-100" : "modal-content opacity-0 pointer-events-none";

  return (
    <div>
      <div className={`${backdropClass}`}>
        <div className={`${contentClass}`}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
