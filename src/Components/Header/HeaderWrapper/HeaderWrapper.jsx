import React from "react";
import HeaderActionSection from "../HeaderActionSection/HeaderActionSection";
import HeaderNavBars from "../HeaderNavBars/HeaderNavBars";

function HeaderWrapper() {
  return (
    <header className="pt-4 px-4 2xl:px-16 flex flex-col max-md:gap-0 md:gap-6 bg-white">
      <HeaderActionSection />
      <HeaderNavBars />
    </header>
  );
}

export default HeaderWrapper;
