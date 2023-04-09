import React from "react";

function MainPageFeatureCards(props) {
  return (
    <div className="flex justify-start items-center gap-6 flex-grow">
      <div className="flex-center bg-NeutralN10 rounded-[0.3125rem] p-4 w-[4.5rem] h-[4.5rem]">{props.icon}</div>
      <span className="text-sm font-semibold text-NeutralN500">{props.text}</span>
    </div>
  );
}

export default MainPageFeatureCards;
