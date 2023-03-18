import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import SearchBox from "../../Utils/SearchBox/SearchBox"

function HeaderActionSection() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex-center gap-6 w-2/4">
        <Logo />
        <SearchBox className="flex-grow" />
      </div>
    </div>
  );
}

export default HeaderActionSection;
