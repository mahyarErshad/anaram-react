import React, { useState } from "react";
import HeaderActionSection from "../HeaderActionSection/HeaderActionSection";
import HeaderNavBars from "../HeaderNavBars/HeaderNavBars";
import SideBarMenu from "../SideBarMenu/SideBarMenu";

function HeaderWrapper() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <header className="pt-4 fixed top-0 w-full z-50 px-4 2xl:px-16 flex flex-col max-md:gap-0 md:gap-6 bg-white">
      <HeaderActionSection setSideBarOpen={setSideBarOpen} />
      <HeaderNavBars />
      <SideBarMenu sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
    </header>
  );
}

export default HeaderWrapper;
