import React from "react";
import { ReactComponent as SearchIcon } from "../../../assets/images/icons/search-icon.svg";
import styles from "./styles.module.css";

function SearchBox(props) {
  return (
    <div className={`${props.className} ${styles.wrapper} bg-NeutralN10 border border-transparent transition-all duration-300 py-4 flex px-6 rounded-5px gap-4 hover:border-primary1`}>
      <SearchIcon />
      <input type="search" placeholder="جستجو" className="bg-transparent border-0 text-sm focus:outline-none w-full" />
    </div>
  );
}

export default SearchBox;
