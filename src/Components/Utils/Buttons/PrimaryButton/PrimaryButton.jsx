import React from "react";
import styles from "./styles.module.css";

function PrimaryButton(props) {
  const spaces = props.addToCartButton ? "py-2 px-2 gap-[0.625rem] text-[0.625rem]" : "gap-3 px-4 py-3 text-sm";
  return (
    <button onClick={props.onClick} className={`${props.className} ${styles.button} ${spaces} transition-all duration-300 rounded-5px bg-primary6 flex-center text-white`}>
      {props.icon}
      {props.text}
    </button>
  );
}

export default PrimaryButton;
