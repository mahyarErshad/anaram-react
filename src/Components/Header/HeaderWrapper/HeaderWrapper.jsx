import React from "react";
import HeaderActionSection from "../HeaderActionSection/HeaderActionSection";

function HeaderWrapper() {
  return (
    <header className="py-4 px-36 max-w-[120rem] flex flex-col gap-6">
      <HeaderActionSection />
    </header>
  );
}

export default HeaderWrapper;
