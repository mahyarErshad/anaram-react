import React from "react";
import HeaderActionSection from "../HeaderActionSection/HeaderActionSection";
import HeaderNavBars from "../HeaderNavBars/HeaderNavBars";
import HeaderHoverMenu from "../HeaderHoverMenu/HeaderHoverMenu";

function HeaderWrapper() {
  return (
    <header className="py-4 px-4 flex flex-col gap-6">
      <HeaderActionSection />
      <HeaderNavBars />
      <HeaderHoverMenu />
    </header>
  );
}

export default HeaderWrapper;
