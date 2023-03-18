import Image from "next/image";
import React from "react";
import logo from "../../../assets/images/logo.svg";

function HeaderActionSection() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex-center gap-6 w-[45%]">
        <Image src={logo} alt="Anaram shop logo" />
        <SearchBox className="flex-grow" />
      </div>
    </div>
  );
}

export default HeaderActionSection;
