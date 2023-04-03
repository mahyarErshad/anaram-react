import React from "react";
import headerDropDownMockData from "../../../lib/HeaderDropDownMockData/HeaderDropDownMockData";
import styles from "./style.module.css";

function HeaderMenuOpenOnHover() {
  return (
    <div className="absolute flex-center bg-transparent opacity-0 top-[11rem] right-0 z-50 transition-all duration-300 w-full cursor-default">
      <ul className={`${styles.container} md:w-full max-w-[103.125rem] bg-white flex-center px-6 pt-6 pb-8 cursor-default`}>
        {headerDropDownMockData.map((item, index) => {
          return (
            <li className="px-[3.1875rem] flex-center flex-col gap-4 border-l min-h-[9.8125rem] border-NeutralN30 cursor-pointer" key={index}>
              <img src={item.image} alt={item.text} />
              <h2 className="text-xs text-[#616161]">{item.text}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HeaderMenuOpenOnHover;
