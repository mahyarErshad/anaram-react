import React from "react";
import NavLinks from "./NavLinks";

function HeaderNavBars() {
  return (
    <section className="flex items-center justify-between">
      <nav>
        <ul className="flex justify-start">
          <NavLinks hasIcon text="باتری بر اساس سایز " />
          <NavLinks hasIcon text="باتری بر اساس کاربرد " />
          <NavLinks hasIcon text="باتری بر اساس تکنولوژی " />
          <NavLinks text="درباره آنارام" />
          <NavLinks text="تماس با آنارام" />
          <NavLinks textColor="text-primary6" text="وارتا" />
        </ul>
      </nav>
    </section>
  );
}

export default HeaderNavBars;
