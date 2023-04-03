import React from "react";
import headerDropDownMockData from "../../../lib/HeaderDropDownMockData/HeaderDropDownMockData";

function HeaderMenuOpenOnHover() {
  return (
    <div className="absolute flex-center bg-transparent opacity-0 top-[11rem] right-0 z-50 transition-all duration-300 w-full px-6 pt-6 pb-8">
      <ul>
        {headerDropDownMockData.map((item, index) => {
          return <li key={index}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
}

export default HeaderMenuOpenOnHover;
