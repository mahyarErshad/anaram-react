import React from "react";
import HeaderActionSection from "../HeaderActionSection/HeaderActionSection";
import HeaderNavBars from "../HeaderNavBars/HeaderNavBars";

function HeaderWrapper() {
  return (
    <header className="py-4 max-lg:px-4 lg:px-36 max-w-[120rem] flex flex-col gap-6">
      <HeaderActionSection />
      <HeaderNavBars />
    </header>
  );
}

export default HeaderWrapper;
