import React from "react";
import HeaderActionSection from "../HeaderActionSection/HeaderActionSection";
import HeaderNavBars from "../HeaderNavBars/HeaderNavBars";

function HeaderWrapper() {
  return (
    <header className="pt-4 px-4 flex flex-col gap-6">
      <HeaderActionSection />
      <HeaderNavBars />
    </header>
  );
}

export default HeaderWrapper;
