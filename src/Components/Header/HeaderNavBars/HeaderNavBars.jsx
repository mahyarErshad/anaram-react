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
      <div className="flex-center gap-3">
        <a href="tel:02177989898" className="text-sm font-semibold transition-all hover:text-primary6">
           ۷۷۹۸۹۸۹۸ - ۰۲۱ 
        </a>
      </div>
    </section>
  );
}

export default HeaderNavBars;
