import React from "react";

function MainPageFeatureCards({ icon, text }) {
  return (
    <div className="flex max-md:flex-col justify-start items-center max-md:gap-2 md:gap-6 flex-grow">
      <div className="flex-center bg-NeutralN10 rounded-[0.3125rem] max-md:p-3 md:p-4 max-md:w-12 max-md:h-12 md:w-[4.5rem] md:h-[4.5rem]">{icon}</div>
      <span className="max-md:text-[0.5rem] md:text-sm text-center lg:font-semibold text-NeutralN500">{text}</span>
    </div>
  );
}

export default MainPageFeatureCards;
