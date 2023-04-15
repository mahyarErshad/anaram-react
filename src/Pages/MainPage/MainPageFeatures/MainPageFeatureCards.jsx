import React from "react";

function MainPageFeatureCards(props) {
  return (
    <div className="flex max-md:flex-col justify-start items-center max-md:gap-2 md:gap-6 flex-grow">
      <div className="flex-center bg-NeutralN10 rounded-[0.3125rem] max-md:p-3 md:p-4 max-md:w-12 max-md:h-12 md:w-[4.5rem] md:h-[4.5rem]">{props.icon}</div>
      <span className="text-sm text-center font-semibold text-NeutralN500">{props.text}</span>
    </div>
  );
}

export default MainPageFeatureCards;
