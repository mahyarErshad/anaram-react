import React from "react";
import { ReactComponent as Icon } from "../../../assets/images/icons/arrow-icon-toBottom.svg";
import HeaderMenuOpenOnHover from "../HeaderMenuOpenOnHover/HeaderMenuOpenOnHover";
import styles from "./styles.module.css";
import headerDropDownMockData from "../../../lib/HeaderDropDownMockData/HeaderDropDownMockData";

function NavLinks(props) {
  return (
    <li className={`flex-center gap-2 text-sm ${props.textColor || "text-NeutralN300"} cursor-pointer px-5 pb-7 font-semibold ${styles.navlink}`}>
      {props.text}
      {props.hasIcon && <Icon />}
      {props.hasIcon && <HeaderMenuOpenOnHover data={headerDropDownMockData} />}
      <span className="w-[1px] h-[2.0625rem] bg-NeutralN30 translate-x-[-1rem] overflow-visible"></span>
    </li>
  );
}

export default NavLinks;
