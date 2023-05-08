import React from "react";
import { ReactComponent as Icon } from "../../../assets/images/icons/arrow-icon-toBottom.svg";
import HeaderMenuOpenOnHover from "../HeaderMenuOpenOnHover/HeaderMenuOpenOnHover";
import styles from "./styles.module.css";
import headerDropDownMockData from "../../../lib/HeaderDropDownMock/HeaderDropDownMockData";

function NavLinks({ textColor = "text-NeutralN300", text, hasSubMenu }) {
  return (
    <li className={`gap-2 text-sm ${textColor} flex-center cursor-pointer px-4 pb-7 font-semibold ${styles.navlink}`}>
      {text}
      {hasSubMenu && <Icon className="stroke-NeutralN70 duration-300" />}
      {hasSubMenu && <HeaderMenuOpenOnHover data={headerDropDownMockData} />}
      <span className="w-[1px] h-[2.0625rem] bg-NeutralN30 translate-x-[-1rem] overflow-visible"></span>
    </li>
  );
}

export default NavLinks;
