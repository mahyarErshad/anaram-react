import React from "react";

function AboutUsTimeLineCard({ title, city, description, date }) {
  return (
    <div className="w-full flex justify-center relative">
      <span className="about-page-circle about-page-gradient absolute right-[50%]"></span>
      <div className="w-2/4 flex-col gap-4 border-l border-NeutralN30 pl-6 items-end pb-8">
        <div className="flex justify-start items-center gap-2 w-full max-w-[25.75rem]">
          <span className="text-primary7 text-sm font-semibold">{title}</span>
          <span className="text-Green7 text-xs font-semibold">{city}</span>
        </div>
        <div className="bg-[#FCFCFC] rounded-2xl p-4 max-w-[25.75rem]">
          <p className="text-sm text-NeutralN80">{description}</p>
        </div>
      </div>
      <div className="w-2/4 pr-6">
        <span className="text-lg text-white py-[0.875rem] inline-block flex-center w-[11.75rem] rounded-2xl about-page-gradient -translate-y-[35%]">{date}</span>
      </div>
    </div>
  );
}

export default AboutUsTimeLineCard;
