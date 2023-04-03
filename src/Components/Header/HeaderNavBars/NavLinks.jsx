import React from "react";
import { ReactComponent as Icon } from "../../../assets/images/icons/arrow-icon-toBottom.svg";
import HeaderMenuOpenOnHover from "../HeaderMenuOpenOnHover/HeaderMenuOpenOnHover";
import styles from "./styles.module.css";

function NavLinks(props) {
  return (
    <li className={`flex-center gap-2 text-sm ${props.textColor || "text-NeutralN300"} cursor-pointer px-6 py-3 border-l border-NeutralN30 font-semibold relative ${styles.navlink}`}>
      {props.text}
      {props.hasIcon && <Icon />}
      {props.hasIcon && <HeaderMenuOpenOnHover />}
    </li>
  );
}

export default NavLinks;
