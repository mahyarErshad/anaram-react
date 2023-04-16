import React from "react";
import NavLinks from "./NavLinks";
import { ReactComponent as PhoneIcon } from "../../../assets/images/icons/phone-icon.svg";
import SearchBox from "../../Utils/SearchBox/SearchBox";
import headerNavLinksData from "../../../lib/HeaderNavLinksData/HeaderNavLinksData";

function HeaderNavBars() {
  return (
    <section className="flex items-center justify-between max-w-[101.5625rem] self-center w-full gap-2">
      <SearchBox className="flex-grow lg:hidden max-lg:mb-4" />
      <nav className="max-lg:hidden lg:visible">
        <ul className="flex justify-start">
          {headerNavLinksData.map((item, index) => {
            return <NavLinks key={index} hasSubMenu={item.hasSubMenu} text={item.text} />;
          })}
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
