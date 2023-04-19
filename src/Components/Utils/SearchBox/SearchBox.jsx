import React from "react";
import { ReactComponent as SearchIcon } from "../../../assets/images/icons/search-icon.svg";
import styles from "./styles.module.css";

function SearchBox({ className }) {
  const wrapperClass = `${styles.wrapper} ${className} bg-NeutralN10 border border-transparent transition-all duration-300 py-[0.625rem] flex px-5 rounded-5 hover:border-primary1 gap-4`;

  return (
    <div className={wrapperClass}>
      <SearchIcon />
      <input type="search" placeholder="جستجو" className="bg-transparent border-0 min-h-5 text-sm focus:outline-none w-full" />
    </div>
  );
}

export default SearchBox;
