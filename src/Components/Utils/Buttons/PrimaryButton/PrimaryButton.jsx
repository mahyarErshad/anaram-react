import React from "react";
import styles from "./styles.module.css";

function PrimaryButton({ addToCartButton, onClick, className, icon, text }) {
  const spaces = addToCartButton ? "py-2 px-2 gap-[0.625rem] text-[0.625rem]" : "gap-3 px-4 py-3 text-sm";

  return (
    <button onClick={onClick} className={`${className} ${styles.button} ${spaces} transition-all duration-300 rounded-5px bg-primary6 flex-center text-white`}>
      {icon}
      {text}
    </button>
  );
}

export default PrimaryButton;
