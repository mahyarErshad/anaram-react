import React, { useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

function HeaderMenuOpenOnHover({ data }) {
  const [hideMenu, setHideMenu] = useState(false);
  const menuItems = data.map((item, index) => (
    <Link onClick={handleClick} key={index} to={item.href}>
      <li className={`${styles.card} px-[3.1875rem] flex-center flex-col gap-4 border-l min-h-[9.8125rem] border-NeutralN30 cursor-pointer`}>
        <img className="transition-all" src={item.image} alt={item.text} />
        <h2 className="text-xs text-[#616161]">{item.text}</h2>
      </li>
    </Link>
  ));
  function handleClick() {
    setHideMenu(true);
    setTimeout(() => {
      setHideMenu(false);
    }, 300);
  }
  return (
    <>
      {!hideMenu && (
        <div className="absolute flex-center bg-transparent max-w-[103.125rem] opacity-0 top-[11.0625rem] z-50 w-full cursor-default right-[50%] dropdown">
          <ul className={`${styles.container} md:w-full w-full bg-white flex justify-start items-center px-6 pt-6 pb-8 cursor-default`}>{menuItems}</ul>
        </div>
      )}
    </>
  );
}

export default HeaderMenuOpenOnHover;
