import React from "react";
import NavLinks from "./NavLinks";

function HeaderNavBars() {
  return (
    <nav>
      <ul className="flex justify-start">
        <NavLinks hasIcon text="باتری بر اساس سایز " />
        <NavLinks hasIcon text="باتری بر اساس کاربرد " />
        <NavLinks hasIcon text="باتری بر اساس تکنولوژی " />
        <NavLinks text="درباره آنارام" />
        <NavLinks text="تماس با آنارام" />
        <NavLinks text="وارتا" />
      </ul>
    </nav>
  );
}

export default HeaderNavBars;
