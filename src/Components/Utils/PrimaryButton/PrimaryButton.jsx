import React from "react";
import { ReactComponent as UserIcon } from "../../../assets/images/user-icon.svg";

function PrimaryButton(props) {
  return (
    <button className={`${props.className} rounded-5px px-4 py-3 bg-primary6 flex-center gap-3 text-white text-sm`}>
      <UserIcon />
      ورود / ثبت نام
    </button>
  );
}

export default PrimaryButton;
