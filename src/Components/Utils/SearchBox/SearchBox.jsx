import Image from "next/image";
import React from "react";
import searchIcon from "@/public/images/search-icon.svg";
import styles from "@/styles/SearchBox.module.css"

function SearchBox(props) {
  return (
    <div className={`${props.className} ${styles.wrapper} bg-[#f8f8f8] border border-transparent transition-all duration-300 py-4 flex px-6 rounded-[5px] gap-4 hover:border-[#E8ECF5]`}>
      <Image src={searchIcon} alt="search icon" />
      <input type="search" placeholder="جستجو" className="bg-transparent border-0 text-sm focus:outline-none w-full" />
    </div>
  );
}

export default SearchBox;
