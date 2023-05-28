import React from "react";

function AboutUsTimeLineCard({ title, city, description, date, leftPattern }) {
  return (
    <div className="w-full flex justify-center relative about-us-timeLine-card">
      <span className="about-page-circle about-page-gradient absolute right-[50%]"></span>
      <div className={`about-us-timeLine-card__border w-2/4 flex-col gap-4 border-NeutralN30 ${!leftPattern ? "border-l items-end" : "order-2 items-start pr-6 border-r"} pl-6 pb-12`}>
        <div className="flex justify-start items-center gap-2 w-full max-w-[25.75rem]">
          <span className="text-primary7 text-sm font-semibold">{title}</span>
          <span className="text-Green7 text-xs font-semibold">{city}</span>
        </div>
        <div className="bg-[#FCFCFC] rounded-2xl p-4 max-w-[25.75rem]">
          <p className="text-sm text-NeutralN80">{description}</p>
        </div>
      </div>
      <div className={`w-2/4 ${leftPattern ? "pl-6 flex justify-end items-start" : "pr-6"}`}>
        <span className="text-lg text-white py-[0.875rem] inline-block flex-center w-[11.75rem] rounded-2xl about-page-gradient -translate-y-[35%]">{date}</span>
      </div>
    </div>
  );
}

export default AboutUsTimeLineCard;
