import React, { useState } from "react";
import HeaderActionSection from "../HeaderActionSection/HeaderActionSection";
import HeaderNavBars from "../HeaderNavBars/HeaderNavBars";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import { useEffect } from "react";

function HeaderWrapper({stickyHeader}) {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <header className={`pt-4 px-4 2xl:px-16 flex flex-col max-md:gap-0 md:gap-6 bg-white duration-300 z-50`}>
      <HeaderActionSection setSideBarOpen={setSideBarOpen} />
      <HeaderNavBars />
      <SideBarMenu sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
    </header>
  );
}

export default HeaderWrapper;
