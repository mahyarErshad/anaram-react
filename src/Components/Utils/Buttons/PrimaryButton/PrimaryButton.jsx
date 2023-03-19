import React from "react";
import { ReactComponent as UserIcon } from "../../../../assets/images/icons/user-icon.svg";
import styles from "./styles.module.css"

function PrimaryButton(props) {
  return (
    <button onClick={props.onClick} className={`${props.className} ${styles.button} transition-all duration-300 rounded-5px px-4 py-3 bg-primary6 flex-center gap-3 text-white text-sm`}>
      <UserIcon />
      ورود / ثبت نام
    </button>
  );
}

export default PrimaryButton;
