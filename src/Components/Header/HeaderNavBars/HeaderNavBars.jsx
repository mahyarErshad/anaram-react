import React from "react";
import NavLinks from "./NavLinks";
import { ReactComponent as PhoneIcon } from "../../../assets/images/icons/phone-icon.svg";
import SearchBox from "../../Utils/SearchBox/SearchBox";

function HeaderNavBars() {
  return (
    <section className="flex items-center justify-between max-w-[101.5625rem] self-center w-full gap-2">
      <SearchBox className="flex-grow lg:hidden max-lg:mb-4" />
      <nav className="max-lg:hidden lg:visible">
        <ul className="flex justify-start">
          <NavLinks hasIcon text="باتری بر اساس سایز " />
          <NavLinks hasIcon text="باتری بر اساس کاربرد " />
          <NavLinks hasIcon text="باتری بر اساس تکنولوژی " />
          <NavLinks text="درباره آنارام" />
          <NavLinks text="تماس با آنارام" />
          <NavLinks textColor="text-primary6" text="وارتا" />
        </ul>
      </nav>
      <a href="tel:02177989898" className="flex-center max-md:hidden md:mt-3 lg:mt-0 pb-7 gap-3 hover:text-primary6">
        <span className="text-sm font-semibold transition-all">۷۷۹۸۹۸۹۸ - ۰۲۱</span>
        <PhoneIcon />
      </a>
    </section>
  );
}

export default HeaderNavBars;
