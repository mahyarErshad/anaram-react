import React from "react";
import { ReactComponent as Icon } from "../../../assets/images/arrow-icon-toBottom.svg";

function NavLinks(props) {
  return (
    <li className={`flex-center gap-2 text-sm ${props.textColor || "text-NeutralN300"} cursor-pointer px-6 py-3 border-l border-NeutralN30 font-semibold`}>
      {props.text}
      {props.hasIcon && <Icon />}
    </li>
  );
}

export default NavLinks;
