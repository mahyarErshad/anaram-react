import React from "react";
import { ReactComponent as Icon } from "../../../assets/images/arrow-icon-toBottom.svg";

function HeaderNavBars() {
  return (
    <nav>
      <ul>
        <li className="flex-center gap-2 text-sm text-NeutralN300">
          باتری بر اساس سایز <Icon />
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavBars;
