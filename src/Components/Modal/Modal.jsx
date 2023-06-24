import React from "react";

function Modal({ children, isOpen }) {
  const opacity = isOpen ? "opacity-25" : "opacity-0";
  if (isOpen) return <div className={`fixed top-0 bottom-0 right-0 left-0 w-full h-full flex-center bg-black ${opacity} blur-md duration-300`}>{children}</div>;
}

export default Modal;
