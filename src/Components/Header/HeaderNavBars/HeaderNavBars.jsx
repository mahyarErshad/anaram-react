import React from "react";
import { ReactComponent as Icon } from "../../../assets/images/arrow-icon-toBottom.svg";
import NavLinks from "./NavLinks";

function HeaderNavBars() {
  return (
    <nav>
      <ul className="flex justify-start">
        <NavLinks text="باتری بر اساس سایز " />
      </ul>
    </nav>
  );
}

export default HeaderNavBars;
