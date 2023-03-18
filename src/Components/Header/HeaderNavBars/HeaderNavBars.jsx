import React from "react";
import { ReactComponent as Icon } from "../../../assets/images/arrow-icon-toBottom.svg";

function HeaderNavBars() {
  return (
    <nav>
      <ul className="flex justify-start">
        <li className="flex-center gap-2 text-sm text-NeutralN300 cursor-pointer px-6 py-4 border-l ">
          باتری بر اساس سایز <Icon />
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavBars;
